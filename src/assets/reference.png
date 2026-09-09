You are a senior product designer, UX architect, mobile UI designer, and design systems specialist.

I want you to design the complete UI/UX for a new mobile-first cloud storage application.

## 1. PRODUCT CONCEPT

The product is a cloud-backed mobile storage application designed to make users feel like their phone has significantly more storage than it physically does.

The core idea is:

> "Your phone has more storage."

or:

> "Turn your 64GB phone into a 500GB phone."

Users should be able to see, organize, open, share, and manage their files from their phone as if the files were stored locally, while the actual files are stored securely in the cloud.

The application should intelligently keep frequently used files available locally and move less frequently used files to cloud storage.

For example:

A user has a 64GB Android phone.

They have:

* 8GB photos
* 15GB videos
* 6GB WhatsApp media
* 4GB documents
* 10GB miscellaneous files

Instead of forcing the user to manually manage cloud folders, the app should identify storage-heavy content and allow them to:

"Back up → Verify → Free phone space"

After freeing the space, the files should still appear inside the app with thumbnails/placeholders.

When the user taps a cloud-only file:

"Downloading..."

Then the file becomes available locally.

The experience should feel seamless.

DO NOT design this as a generic Google Drive clone.

The primary mental model is:

"MY PHONE'S EXTENDED STORAGE"

not:

"AN ONLINE FILE MANAGEMENT WEBSITE."

---

# 2. TARGET USERS

Primary users:

* Android smartphone users
* Users with 32GB/64GB/128GB phones
* Users constantly running out of storage
* Users who take many photos and videos
* Users who receive large WhatsApp media files
* Students
* Freelancers
* Small-business owners
* Content creators
* People with limited mobile data
* Users in African markets, particularly Kenya and other emerging markets

The UI must work extremely well for people who are not technically sophisticated.

The application should feel simple enough that someone can understand it within 30 seconds.

---

# 3. PRODUCT POSITIONING

The product should NOT feel like:

* Google Drive
* Dropbox
* OneDrive
* a file explorer
* a complicated enterprise storage system

It should feel closer to:

"An invisible storage expansion for your phone."

The user should immediately understand:

1. How much phone storage they have.
2. How much cloud storage they have.
3. What is consuming their phone storage.
4. What can safely be backed up.
5. How much space they can recover.
6. Which files are stored locally.
7. Which files are cloud-only.
8. How to access those files again.

---

# 4. CORE PRODUCT ACTION

The most important action in the entire application is:

## FREE UP PHONE SPACE

The application should proactively show:

"Your phone is running out of space."

Example:

PHONE STORAGE

57.8 GB used
64 GB total

██████████████████████████░░

"You're using 90% of your phone storage."

Then:

"Free up space"

Potential result:

"You can free up 14.8 GB"

[ Review files ]

After review:

14.8 GB selected

[ Back up & free space ]

The app uploads the files, verifies successful cloud storage, and only then removes the local copies.

The UX should make this feel extremely safe.

Never make users afraid that their files will disappear.

---

# 5. MAIN NAVIGATION

Design a mobile navigation system with approximately 4–5 primary sections.

Recommended structure:

HOME
FILES
PHOTOS
STORAGE
PROFILE

However, you should evaluate whether a better structure exists.

The navigation should prioritize:

* Storage status
* Files
* Photos
* Freeing space
* Search

Do not overload the bottom navigation.

---

# 6. HOME SCREEN

Design a highly polished home dashboard.

The home screen should immediately communicate:

### Cloud Storage

Example:

"128 GB"

"42.7 GB used"

██████████░░░░░░

"85.3 GB available"

### Phone Storage

Example:

"57.8 GB / 64 GB used"

██████████████████████████░░

"Your phone is almost full."

[ Free up 12.4 GB ]

### Recent Files

Show:

* photos
* videos
* PDFs
* documents
* downloads

with thumbnails and file metadata.

### Quick Actions

Examples:

* Upload

Scan

Free Space

Share

Backup Photos

The home screen should be visually clean and not feel like an enterprise dashboard.

---

# 7. STORAGE VISUALIZATION

Create a highly intuitive storage visualization.

Show:

PHONE STORAGE
64 GB

USED
57.8 GB

AVAILABLE
6.2 GB

Then show categories:

Photos — 18.4 GB
Videos — 22.1 GB
WhatsApp — 8.7 GB
Apps — 5.1 GB
Documents — 2.3 GB
Other — 1.2 GB

Use a clear visual hierarchy.

The user should immediately see where their storage is going.

Also show:

CLOUD STORAGE
128 GB

42.7 GB USED

85.3 GB AVAILABLE

The difference between PHONE STORAGE and CLOUD STORAGE must be unmistakable.

---

# 8. FILES SCREEN

Design a modern mobile file manager.

Users should see:

Recent
Folders
Photos
Videos
Documents
Audio
Downloads
Other

Use large touch targets.

Support:

* list view
* grid view
* sorting
* filtering
* search
* multi-select
* move
* rename
* delete
* share
* download
* make available offline

Files should display storage state.

For example:

LOCAL

CLOUD

LOCAL + CLOUD

The cloud-only state should be visually subtle.

Do not make the interface look complicated.

---

# 9. CLOUD-ONLY FILE EXPERIENCE

This is one of the most important UX concepts.

A cloud-only file should still appear in the user's library.

Example:

[thumbnail]

Holiday_Video.mp4

1.8 GB

Cloud only

When tapped:

"Preparing your file..."

"Downloading 1.8 GB"

Progress indicator

Then:

"Ready"

The user should not feel like they are navigating away from the app.

The experience should feel like accessing normal phone storage.

---

# 10. PHOTOS EXPERIENCE

Design a beautiful photo library.

Use:

* large thumbnails
* date grouping
* month/year navigation
* albums
* favorites
* search
* videos
* screenshots
* downloads

Photos should have storage state indicators where appropriate.

Example:

Cloud-backed photo

Cloud-only photo

Available offline

Do not clutter thumbnails with large labels.

Use subtle visual indicators.

---

# 11. AUTOMATIC PHOTO BACKUP

Create a setup flow.

Example:

"Keep your memories safe."

"Automatically back up your photos and videos to the cloud."

Options:

[ Turn on backup ]

Backup settings:

* Wi-Fi only
* Wi-Fi + mobile data
* Original quality
* Storage saver
* Backup while charging
* Backup only when battery is above X%

Design this carefully for users with expensive/limited mobile data.

---

# 12. FREE UP SPACE FLOW

Design the complete flow.

Step 1:

"Your phone is running low on storage."

Step 2:

"These files can be safely moved to the cloud."

Show:

Videos
8.4 GB

Photos
3.2 GB

Downloads
1.8 GB

WhatsApp Media
5.4 GB

Total:

18.8 GB

Potential recovery:

18.8 GB

Step 3:

Review selected files.

Step 4:

Upload.

Show:

Uploading 142 files...

73%

Step 5:

Verification.

"Checking your files..."

Step 6:

Success.

"18.8 GB freed."

"Your files are still available in the app."

[ Done ]

This should be one of the best-designed flows in the entire application.

---

# 13. UPLOAD EXPERIENCE

Users should be able to upload:

* photos
* videos
* documents
* PDFs
* ZIP files
* audio
* arbitrary files

Support:

* resumable uploads
* background uploads
* upload queue
* pause/resume
* retry failed uploads

Design states for:

Uploading
Paused
Failed
Completed
Waiting for Wi-Fi
Waiting for charging
Processing

---

# 14. OFFLINE EXPERIENCE

Design how cloud files behave when the user has no internet.

Users should be able to:

"Make available offline"

Then the app downloads the file.

Show:

Available offline

When a cloud-only file is opened without internet:

"You need an internet connection to open this file."

But avoid ugly error states.

Provide:

[ Try again ]

---

# 15. SEARCH

Design powerful but simple search.

Search across:

* filenames
* folders
* file types
* dates
* photos
* videos
* documents

Possible future intelligent search:

"Find videos from December"

"Show PDFs"

"Find large files"

"Files larger than 1GB"

The search interface should be extremely fast and minimal.

---

# 16. SHARING

Design a simple sharing flow.

Example:

Select file

[ Share ]

Then:

"Share file"

Options:

Copy link
WhatsApp
Messages
Email
Nearby
More

Link settings:

Anyone with the link

or

Specific people

Optional:

Expiration
Password
Download permission

Keep this simple for MVP.

---

# 17. TRASH

Create a trash/recycle bin.

Deleted files should not immediately disappear permanently.

Show:

Trash

"Files are automatically deleted after 30 days."

Allow:

Restore
Delete permanently
Empty trash

---

# 18. STORAGE PLANS

Design a subscription screen.

Potential plans:

FREE
5 GB

STARTER
50 GB
KSh 99/month

PLUS
200 GB
KSh 249/month

PRO
1 TB
KSh 699/month

These are initial product assumptions, not necessarily final pricing.

The design should make upgrading feel natural rather than aggressive.

Show:

Current storage
Used storage
Available storage
Plan benefits

Include local payment support conceptually, particularly:

M-Pesa

Do not make the subscription screen look like a crypto or fintech product.

---

# 19. ONBOARDING

Create a short onboarding sequence.

Maximum 3–4 screens.

Screen 1:

"Your phone just got bigger."

Screen 2:

"Back up your photos, videos and files."

Screen 3:

"Free up phone storage without losing your files."

Screen 4:

"Get started"

The onboarding must communicate the product's unique value immediately.

Avoid generic startup language.

---

# 20. PERMISSION FLOWS

Design friendly permission screens for:

* photos/media
* files/storage
* notifications
* background activity
* battery optimization

Explain WHY permission is needed.

Example:

"Allow photo access"

"We need access to your photos so we can back them up and help free up phone storage."

Do not use technical language.

---

# 21. ACCOUNT / PROFILE

Include:

Profile picture
Name
Email/phone

Storage plan

Storage usage

Backup settings

Notifications

Security

Devices

Payment methods

Help & support

Terms
Privacy

Logout

---

# 22. SECURITY UX

The application stores personal files, so security must be visible without making the product intimidating.

Potential UI:

"Your files are encrypted and securely stored."

Security settings:

App lock
Biometric lock
Two-factor authentication
Active sessions
Device management

Do not overcomplicate this.

---

# 23. EMPTY STATES

Design polished empty states.

Examples:

No files

"No files yet."

"Upload your first file."

No photos

"Your photo library will appear here."

No recent files

"Files you open recently will appear here."

No cloud backup

"Your photos aren't backed up yet."

Each empty state should have a useful CTA.

---

# 24. ERROR STATES

Design real-world states, not just happy paths.

Examples:

Upload failed
Network unavailable
Storage full
Subscription expired
Payment failed
Insufficient permissions
Background upload paused
Battery optimization blocking backup
File unavailable
Server error
Unsupported file
Duplicate file
Sync conflict

The UX must tell users:

What happened
Why it happened
What they can do

Avoid generic:

"Something went wrong."

---

# 25. LOW-BANDWIDTH DESIGN

This product will target African markets and users who may have expensive or unreliable mobile data.

Design for:

* slow 3G
* unstable 4G
* Wi-Fi switching
* interrupted uploads
* low battery
* expensive mobile data

The interface should show useful states such as:

"Waiting for Wi-Fi"

"Upload paused"

"Continue using mobile data?"

"2.4 GB remaining"

Allow users to control data usage.

---

# 26. VISUAL DESIGN DIRECTION

Create a premium but accessible visual language.

The application should feel:

* modern
* trustworthy
* fast
* minimal
* premium
* friendly
* technically sophisticated
* reliable

Avoid:

* excessive gradients
* excessive glassmorphism
* generic AI-generated UI
* unnecessary floating cards
* excessive rounded rectangles
* excessive animations
* visual clutter
* enterprise SaaS aesthetics
* cryptocurrency aesthetics

Do not make it look like a template from Dribbble.

Aim for the quality of a serious consumer product from a well-funded startup.

The interface should feel native to Android while still having its own brand identity.

Use strong typography and spacing.

Prioritize information hierarchy over decoration.

---

# 27. COLOR SYSTEM

Create a complete design token system.

Define:

Primary
Secondary
Background
Surface
Elevated surface
Text primary
Text secondary
Border
Success
Warning
Error
Info

Create both:

Light mode
Dark mode

The color system must maintain WCAG-accessible contrast.

The primary brand color should communicate:

trust + storage + technology

Avoid making the product look like Google Drive.

---

# 28. TYPOGRAPHY

Define:

Font family
Heading sizes
Body sizes
Caption sizes
Button text
Navigation text

Create a consistent typography scale.

---

# 29. ICONOGRAPHY

Use a consistent icon system.

Icons should be:

* simple
* recognizable
* modern
* platform appropriate

Avoid mixing multiple icon styles.

---

# 30. COMPONENT SYSTEM

Design reusable components for:

Buttons
Icon buttons
Cards
File rows
File thumbnails
Folder cards
Storage meters
Progress bars
Bottom sheets
Dialogs
Toast messages
Tabs
Search bars
Navigation
Upload progress
Subscription cards
Permission prompts
Empty states
Error states

Define:

Default
Pressed
Focused
Disabled
Loading
Error
Success

states.

---

# 31. RESPONSIVE DESIGN

Although this is primarily a mobile app, design the system so it can eventually support:

Android
iOS
Tablet
Web

The MVP priority is Android.

Design around common Android screen sizes.

---

# 32. ACCESSIBILITY

Follow strong accessibility principles.

Include:

* large touch targets
* readable typography
* sufficient contrast
* screen reader labels
* clear focus states
* non-color-only status indicators
* understandable error messages

---

# 33. MICROINTERACTIONS

Use animations sparingly.

Important moments:

Uploading
Downloading
Backup complete
Storage freed
File moved to cloud
Sync completed
Payment completed

Example:

"18.7 GB freed"

This should feel satisfying.

But avoid unnecessary animation everywhere.

---

# 34. CORE USER JOURNEYS

Create complete UX flows for at least:

1. New user registration
2. Onboarding
3. First photo backup
4. Upload file
5. Browse files
6. Open cloud-only file
7. Free up phone storage
8. Restore/download file
9. Share file
10. Search
11. Upgrade subscription
12. M-Pesa payment
13. Failed upload
14. Offline mode
15. Account management

---

# 35. DESIGN THE ACTUAL SCREENS

Do not stop at describing the UX.

Produce actual high-fidelity UI designs/specifications for:

1. Splash screen
2. Welcome screen
3. Onboarding screens
4. Login
5. Sign up
6. Home dashboard
7. Storage details
8. Files
9. Folder
10. Photos
11. Photo viewer
12. Video viewer
13. Search
14. Upload sheet
15. Upload progress
16. Free up space
17. Free up space review
18. Free up space upload
19. Free up space success
20. Cloud-only file download
21. Sharing
22. Trash
23. Offline files
24. Backup settings
25. Subscription plans
26. M-Pesa payment
27. Payment success
28. Profile
29. Security
30. Notifications
31. Devices
32. Help/support
33. Error states
34. Permission states

For each screen provide:

* layout
* hierarchy
* components
* content
* interactions
* states
* navigation
* animations
* accessibility considerations

---

# 36. IMPORTANT PRODUCT PRINCIPLE

The user should rarely have to think:

"Where is this file actually stored?"

The application should abstract the physical storage location.

The mental model should be:

"My files are here."

The app handles:

local storage
cloud storage
sync
cache
uploads
downloads
storage optimization

behind the scenes.

---

# 37. CRITICAL UX DIFFERENTIATOR

Design around this concept:

### "FREE UP SPACE"

The application should continuously understand:

Phone storage:
57.8 GB / 64 GB

Cloud storage:
42.7 GB / 128 GB

Potential recoverable space:
14.8 GB

Then communicate:

"You can safely free up 14.8 GB."

This should become the product's signature interaction.

---

# 38. BRANDING

For now use a temporary working name:

"CloudPocket"

Do not assume this name is final.

Create a simple, professional visual identity around the concept of:

phone + cloud + storage expansion.

Do not use an obvious generic cloud icon as the primary logo.

The brand should eventually be suitable for a serious African technology startup.

---

# 39. AFRICA-FIRST CONSIDERATIONS

Do not make the design stereotypically "African."

It should look globally competitive.

However, product decisions should account for:

* M-Pesa
* local currencies
* mobile-first users
* lower-end Android devices
* limited storage phones
* mobile data costs
* unstable connectivity
* intermittent electricity
* local customer support
* African data hosting possibilities

The product should feel like a global-quality product built with African users in mind.

---

# 40. COMPETITIVE DIFFERENTIATION

Consider the UX patterns of:

Google Photos
Google Drive
Dropbox
OneDrive
Hivenet
cloud backup apps
Android file managers

But do NOT copy their interfaces.

Analyze what they do well and identify opportunities to make this product substantially simpler.

The main differentiation should be:

"Cloud storage that behaves like phone storage."

---

# 41. UX PRINCIPLES

Use these principles throughout:

1. Simplicity over features.
2. Storage status should always be understandable.
3. Never make users fear losing files.
4. Cloud operations should feel invisible.
5. Freeing storage should require very few steps.
6. Uploads must survive interruptions.
7. Low-data users must have control.
8. Important actions should be obvious.
9. Avoid technical jargon.
10. Make the application feel extremely fast.
11. Use progressive disclosure.
12. Don't overwhelm new users.
13. Make destructive actions reversible where possible.
14. Make cloud-only files feel like normal files.
15. The product should feel like an extension of the phone, not a website inside a phone.

---

# 42. DELIVERABLE

I want you to act as the product designer for this startup.

Produce:

### A. UX architecture

Information architecture and navigation.

### B. User flows

Detailed flows for all major journeys.

### C. Design system

Colors, typography, spacing, components, icons, elevation, radius, states.

### D. Screen-by-screen UI specification

Every major screen described in enough detail for a developer to implement it.

### E. High-fidelity design direction

Describe exactly how the interface should look.

### F. Component architecture

Reusable components and their variants.

### G. UX copy

Write the actual interface copy for important screens and states.

### H. Mobile-first design

Prioritize Android.

### I. Dark mode

Provide dark-mode behavior.

### J. Accessibility

Provide accessibility requirements.

### K. Developer handoff

Translate the design into implementation-ready specifications.

---

# 43. IF YOU HAVE ACCESS TO A UI DESIGN/CODING ENVIRONMENT

If you have access to a tool that can generate actual UI, prototypes, HTML/CSS, React, React Native, or design files, DO NOT merely describe the screens.

Actually create the interface/prototype.

Prioritize the following screens first:

1. Home
2. Files
3. Photos
4. Storage
5. Free Up Space
6. File Viewer
7. Upload
8. Subscription
9. Profile

Then build the remaining screens around the same design system.

If generating code, use:

React Native + Expo

and structure the project so components can later be connected to a real backend.

Do not create fake functionality that looks finished without indicating where real APIs will connect.

---

# 44. FINAL QUALITY BAR

Before finishing, critique your own design.

Ask:

"Does this look like a generic cloud storage app?"

If yes, redesign it.

Ask:

"Would a person with a 64GB Android phone immediately understand why they need this?"

If no, redesign it.

Ask:

"Is FREE UP PHONE SPACE clearly the hero feature?"

If no, redesign it.

Ask:

"Does the interface feel trustworthy enough for someone to upload 50GB of personal photos?"

If no, redesign it.

Ask:

"Could this compete visually with a serious consumer technology startup?"

If no, improve it.

Ask:

"Can a developer actually implement this design without guessing?"

If no, provide more precise specifications.

The final result should be a coherent, production-quality mobile product design system — not a collection of disconnected screens.

Start by defining the product's UX architecture and design philosophy, then move into the complete screen system and high-fidelity interface specifications.
