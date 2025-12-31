src/
├── app/
│   │
│   ├── core/                  # Singletons (Services, Models, Guards) loaded once
│   │   ├── models/            # Interfaces (e.g., User.ts, StudentMetrics.ts)
│   │   ├── services/          # Data fetching (e.g., DashboardService, AuthService)
│   │   └── interceptors/      # HTTP interceptors (if connecting to real backend)
│   │
│   ├── shared/                # Reusable UI components used across multiple pages
│   │   ├── components/
│   │   │   ├── stat-card/     # Small square cards (Attendance, Tasks, Rewards)
│   │   │   ├── icon-btn/      # The circle buttons (Books, Videos, Papers)
│   │   │   └── badge/         # Status badges (Present/Absent dots)
│   │   └── directives/        # Custom styling directives
│   │
│   ├── layout/                # The main shell of the application
│   │   ├── main-layout/       # Container with <router-outlet>
│   │   ├── sidebar/           # The black navigation bar on the left
│   │   └── header/            # Top bar (Search, Notifications, Profile)
│   │
│   ├── features/              # Main specific pages (Lazy Loaded Modules)
│   │   │
│   │   ├── dashboard/         # The view shown in your image
│   │   │   ├── components/    # Widgets specific ONLY to the dashboard
│   │   │   │   ├── welcome-banner/    # "Hey Ashwin" card
│   │   │   │   ├── attendance-chart/  # The Donut chart (80%)
│   │   │   │   ├── notice-board/      # List of notices
│   │   │   │   ├── test-score-graph/  # The yellow line chart
│   │   │   │   ├── grade-subject/     # The purple bar chart
│   │   │   │   └── calendar-widget/   # The mini calendar on the right
│   │   │   ├── dashboard.component.ts # The parent grid layout
│   │   │   └── dashboard.module.ts
│   │   │
│   │   ├── teachers/          # Placeholders for other sidebar items
│   │   ├── students/
│   │   └── settings/
│   │
│   ├── styles/                # Global styles
│   │   ├── _variables.scss    # Store colors (e.g., $bg-sidebar: #000)
│   │   └── styles.scss
│   │
│   ├── app-routing.module.ts  # Main Routing
│   └── app.component.ts