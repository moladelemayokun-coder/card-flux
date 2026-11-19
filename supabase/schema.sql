-- CARD FLUX: FOUNDATION DATABASE
-- Customer profiles and secure account roles

create extension if not exists pgcrypto;

-- 1. CUSTOMER PROFILES
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  phone text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. ACCOUNT ROLES
create table if not exists public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'customer'
    check (role in ('customer', 'admin', 'super_admin')),
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

-- 3. CHECK ADMIN PERMISSIONS
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = (select auth.uid())
      and role in ('admin', 'super_admin')
  );
$$;

-- 4. AUTOMATICALLY CREATE CUSTOMER PROFILE
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (
    id,
    full_name,
    email
  )
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    new.email
  );

  insert into public.user_roles (
    user_id,
    role
  )
  values (
    new.id,
    'customer'
  );

  return new;
end;
$$;

-- 5. RUN PROFILE CREATION AFTER SIGNUP
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();

-- 6. ENABLE ROW LEVEL SECURITY
alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;

-- 7. PROFILE SECURITY
drop policy if exists "Customers can view their own profile"
on public.profiles;

create policy "Customers can view their own profile"
on public.profiles
for select
to authenticated
using ((select auth.uid()) = id);

drop policy if exists "Customers can update their own profile"
on public.profiles;

create policy "Customers can update their own profile"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

-- 8. ROLE SECURITY
drop policy if exists "Users can view their own roles"
on public.user_roles;

create policy "Users can view their own roles"
on public.user_roles
for select
to authenticated
using (
  user_id = (select auth.uid())
  or (select public.is_admin())
);

drop policy if exists "Admins can manage roles"
on public.user_roles;

create policy "Admins can manage roles"
on public.user_roles
for all
to authenticated
using ((select public.is_admin()))
with check ((select public.is_admin()));

-- 9. PREVENT PUBLIC ACCESS
revoke all on public.profiles from anon;
revoke all on public.user_roles from anon;

grant select, update on public.profiles to authenticated;
grant select on public.user_roles to authenticated;

-- END CARD FLUX FOUNDATION DATABASE
