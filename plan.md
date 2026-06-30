# Implementation Plan - Admin Product Management & WhatsApp Integration (Local Storage Persistence)

This plan adds administrative capabilities to manage products (add, edit, delete, reset to defaults) and integrates WhatsApp contact buttons for each product. All product data and admin settings are persisted locally using `localStorage`, making the app fully functional and interactive without requiring a physical database backend.

## Scope Summary
- **Admin Authentication**: A secure client-side login gate (with configurable credentials) to access the admin panel.
- **Product Management Dashboard**: A dedicated dashboard for adding, editing, and deleting products.
- **WhatsApp Integration**: A direct link on each product card that opens WhatsApp with a pre-filled message custom to that product.
- **Dynamic Product Rendering**: Replace static product grid with a dynamic state-driven listing that merges default products with user-added ones, loaded from/saved to `localStorage`.
- **Reset Functionality**: Ability for the admin to restore original default products if desired.

## Auth & Storage model
**Auth in scope:** yes (client-side admin session)
**Model:** Client-side local session with a secure/configurable passphrase/credentials.
**Persistence strategy:** `localStorage` for products and WhatsApp configuration.

## Affected Areas
- **Frontend (New)**:
  - `src/components/AdminPanel.tsx` (Login gate + Product & WhatsApp management UI)
- **Frontend (Modified)**:
  - `src/components/Services.tsx` (Update to load products dynamically from state/localStorage, display "Order via WhatsApp" button on each, and trigger WhatsApp API)
  - `src/components/Navbar.tsx` (Add a subtle "Admin" link to access the dashboard)
  - `src/App.tsx` (Incorporate the state management or overlay for the Admin Panel)

## Phase 1: Local Storage & State Service (frontend_engineer)
- Define a standard `Product` interface: `id`, `name`, `description`, `price`, `image`, `isCustom` (boolean).
- Implement initial/default products as baseline fallback.
- Create utility functions to load, save, add, edit, and delete products from `localStorage`.
- Create utility functions to load/save the admin's WhatsApp number and customizable default message.

## Phase 2: Admin Dashboard & Authentication UI (frontend_engineer)
- Build a beautiful, modern Admin Login & Dashboard UI inside `src/components/AdminPanel.tsx` (accessible via a clean modal or route).
- Form inputs for:
  - Add/Edit Product (Name, Description, Price, Image/Icon selection).
  - WhatsApp Settings (Phone number with country code, pre-filled text template).
- List view of products with Edit/Delete controls and a "Reset to Defaults" button.

## Phase 3: Dynamic Product Catalog & WhatsApp Buttons (frontend_engineer)
- Refactor `src/components/Services.tsx` to read the active products list from state.
- Add an eye-catching "Order via WhatsApp" button to each service card.
- Build the WhatsApp link using the admin's configured phone number and product details (e.g., "Hello, I am interested in ordering [Product Name] for [Price]").

## Phase 4: Integration & Navigation Polish (frontend_engineer)
- Add an "Admin Portal" button in the Navbar/Footer (discreetly placed or professional).
- Ensure toast notifications (via sonner) are triggered for actions: "Product added successfully", "Settings saved", "Logged in successfully", etc.
- Run validation checks and ensure responsive UI on mobile and desktop.

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Implement dynamic localStorage state, build Admin UI, and update Services/Navbar components.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** Phase 1, 2, 3, 4
- **Scope:** 
    - Build client-side state service for local persistence of products and WhatsApp phone number.
    - Create `src/components/AdminPanel.tsx` with high-quality styling using existing Tailwind and shadcn-inspired components (Dialog, Input, Button, Table, Card).
    - Update `src/components/Services.tsx` to handle dynamic items and render WhatsApp CTA buttons with correct links.
    - Integrate the admin trigger in `src/components/Navbar.tsx`.
- **Files:** `src/components/AdminPanel.tsx`, `src/components/Services.tsx`, `src/components/Navbar.tsx`, `src/App.tsx`
- **Depends on:** none
- **Acceptance criteria:**
    - Anyone can see products and click "Order via WhatsApp" to open WhatsApp.
    - Admin can log in (using a standard default password like `admin123`).
    - Admin can add new products with custom name, price, and description.
    - Admin can edit existing products or delete them.
    - Admin can configure the WhatsApp phone number and custom message structure.
    - All changes survive browser refresh via localStorage.

**Do not dispatch:**
- supabase_engineer (All persistence is fully client-side to prevent blocking the user).
- quick_fix_engineer
