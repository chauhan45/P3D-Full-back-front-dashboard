export const MainNav = [
  {
    icon: "pe-7s-home",
    label: "Dashboard",
    to: "#/dashboard/admin",   
  },
  {
    icon: "pe-7s-users",
    label: "Unapproved",    
    content: [      
      {
        icon: "pe-7s-user",
        label: "Partners",
        to: "#/dashboard/unapproved/partners",
      },
      {
        icon: "pe-7s-user",
        label: "Customers",
        to: "#/dashboard/unapproved/customers",
      },
    ]
  },
  {
    icon: "pe-7s-users",
    label: "Admins",    
    content: [
      {
        icon: "pe-7s-user",
        label: "New Admin",
        to: " #/dashboard/new-admin",
      },
      {
        icon: "pe-7s-user",
        label: "All Admins",
        to: "#/dashboard/all-admins",
      },
    ]
  },
  {
    icon: "pe-7s-network",
    label: "Partners",    
    content: [
      {
        icon: "pe-7s-user",
        label: "New Partner",
        to: "#/dashboard/new-partner",
      },
      {
        icon: "pe-7s-user",
        label: "All Partners",
        to: "#/dashboard/all-partners ",
      },      
    ]
  },
  {
    icon: "pe-7s-add-user",
    label: "Customers",
    content: [
      {
        icon: "pe-7s-user",
        label: "New Customer",
        to: "#/dashboard/new-customer",
      },
      {
        icon: "pe-7s-user",
        label: "All Customers",
        to: "#/dashboard/all-customers",
      },
      
          ]
  },
  {
    icon: "pe-7s-graph3",
    label: "Demo Requests",
    to: "#/dashboard/demo-requests",
  },
  {
    icon: "pe-7s-graph3",
    label: "Reports",
    to: "#/dashboard/reports",
  },
  {
    icon: "pe-7s-close",
    label: "Archived",
    content: [
      {
        icon: "pe-7s-users",
        label: "Archived Admins",
        to: "#/dashboard/archived-admins",
      },
      {
        icon: "pe-7s-network",
        label: "Archived Partners",
        to: "#/dashboard/archived-partners",
      },
      {
        icon: "pe-7s-add-user",
        label: "Archived Customers",
        to: "#/dashboard/archived-customers",
      }      
    ]
  }
];
export const SettingsNav = [
  {
    icon: "pe-7s-id",
    label: "View Profile",
    to: "#/dashboard/view-profile/contact",
  },
  {
    icon: "pe-7s-config",
    label: "Partner Settings",
    to: "#/dashboard/partner-settings ",
  },
  {
    icon: "pe-7s-settings",
    label: "Customer Settings",
    to: "#/dashboard/customer-settings",
  },
  {
    icon: "pe-7s-graph",
    label: "Credits / Billigs",
    to: "#/dashboard/credits-billings ",
   
  }  
];
// export const ComponentsNav = [
//   {
//     icon: "pe-7s-plus",
//     label: "New Project",
//     to: " #/dashboards/newproject ",
//   },
//   {
//     icon: "pe-7s-folder",
//     label: "Projects",
//     to: " #/dashboards/projects ",
//   },    
//   {
//     icon: "pe-7s-user",
//     label: "users",
//     content: [
//       {
//         icon: "pe-7s-user",
//         label: "All",
//         to: " #/dashboards/users",
//       },
//       {
//         icon: "pe-7s-user",
//         label: "Partners",
//         to: " #/dashboards/partners",
//       },
      
//           ],
//   },
//   {
//     icon: "pe-7s-plus",
//     label: "Credits / Billigs",
//     to: " #/dashboards/creditsbilligs ",
   
//   },

//   {
//     icon: "pe-7s-settings",
//     label: "Settings",
//     to: " #/dashboards/setting ",
//   },
//   {
//     icon: "",
//     label: "Logout",
//     to: " #/dashboards/logout ",
    
//   },
//   {
//     icon: "pe-7s-diamond",
//     label: "Elements",
//     content: [
//       {
//         label: "Buttons",
//         content: [
//           {
//             label: "Standard",
//             to: "#/elements/buttons-standard",
//           },
//           {
//             label: "Pills",
//             to: "#/elements/buttons-pills",
//           },
//           {
//             label: "Square",
//             to: "#/elements/buttons-square",
//           },
//           {
//             label: "Shadow",
//             to: "#/elements/buttons-shadow",
//           },
//           {
//             label: "With Icons",
//             to: "#/elements/buttons-icons",
//           },
//         ],
//       },
//       {
//         label: "Dropdowns",
//         to: "#/elements/dropdowns",
//       },
//       {
//         label: "Icons",
//         to: "#/elements/icons",
//       },
//       {
//         label: "Badges",
//         to: "#/elements/badges-labels",
//       },
//       {
//         label: "Cards",
//         to: "#/elements/cards",
//       },
//       {
//         label: "Loading Indicators",
//         to: "#/elements/loaders",
//       },
//       {
//         label: "List Groups",
//         to: "#/elements/list-group",
//       },
//       {
//         label: "Navigation Menus",
//         to: "#/elements/navigation",
//       },
//       {
//         label: "Timeline",
//         to: "#/elements/timelines",
//       },
//       {
//         label: "Utilities",
//         to: "#/elements/utilities",
//       },
//       {
//         label: "Visibility Sensor",
//         to: "#/elements/visibility-sensor",
//       },
//     ],
//   },
//   {
//     icon: "pe-7s-car",
//     label: "Components",
//     content: [
//       {
//         label: "Tabs",
//         to: "#/components/tabs",
//       },
//       {
//         label: "Accordions",
//         to: "#/components/accordions",
//       },
//       {
//         label: "Notifications",
//         to: "#/components/notifications",
//       },
//       {
//         label: "Modals",
//         to: "#/components/modals",
//       },
//       {
//         label: "Loading Blockers",
//         to: "#/components/loading-blocks",
//       },
//       {
//         label: "Progress Bar",
//         to: "#/components/progress-bar",
//       },
//       {
//         label: "Tooltips & Popovers",
//         to: "#/components/tooltips-popovers",
//       },
//       {
//         label: "Carousel",
//         to: "#/components/carousel",
//       },
//       {
//         label: "Calendar",
//         to: "#/components/calendar",
//       },
//       {
//         label: "Pagination",
//         to: "#/components/pagination",
//       },
//       {
//         label: "Count Up",
//         to: "#/components/count-up",
//       },
//       {
//         label: "Sticky Elements",
//         to: "#/components/sticky-elements",
//       },
//       {
//         label: "Scrollable",
//         to: "#/components/scrollable-elements",
//       },
//       {
//         label: "Tree View",
//         to: "#/components/tree-view",
//       },
//       {
//         label: "Maps",
//         to: "#/components/maps",
//       },
//       {
//         label: "Ratings",
//         to: "#/components/ratings",
//       },
//       {
//         label: "Image Crop",
//         to: "#/components/image-crop",
//       },
//       {
//         label: "Guided Tours",
//         to: "#/components/guided-tours",
//       },
//     ],
//   },
//   {
//     icon: "pe-7s-display2",
//     label: "Tables",
//     content: [
//       {
//         label: "Data Tables",
//         content: [
//           {
//             label: "Basic",
//             to: "#/tables/data-tables",
//           },
//           {
//             label: "Custom Components",
//             to: "#/tables/datatables-custom-components",
//           },
//           {
//             label: "Fixed Header",
//             to: "#/tables/datatables-fixed-header",
//           },
//           {
//             label: "Aggregation",
//             to: "#/tables/datatables-aggregation",
//           },
//           {
//             label: "Editable Tables",
//             to: "#/tables/datatables-editable",
//           },
//         ],
//       },
//       {
//         label: "Regular Tables",
//         to: "#/tables/regular-tables",
//       },
//       {
//         label: "Grid Tables",
//         to: "#/tables/grid-tables",
//       },
//     ],
//   },
// ];
// export const FormsNav = [
//   {
//     icon: "pe-7s-light",
//     label: "Elements",
//     content: [
//       {
//         label: "Controls",
//         to: "#/forms/controls",
//       },
//       {
//         label: "Layouts",
//         to: "#/forms/layouts",
//       },
//       {
//         label: "Validation",
//         to: "#/forms/validation",
//       },
//       {
//         label: "Wizards",
//         content: [
//           {
//             label: "Variation 1",
//             to: "#/forms/wizard-1",
//           },
//           {
//             label: "Variation 2",
//             to: "#/forms/wizard-2",
//           },
//           {
//             label: "Variation 3",
//             to: "#/forms/wizard-3",
//           },
//         ],
//       },
//       {
//         label: "Sticky Form Headers",
//         to: "#/forms/sticky-headers",
//       },
//     ],
//   },
//   {
//     icon: "pe-7s-joy",
//     label: "Widgets",
//     content: [
//       {
//         label: "Datepicker",
//         to: "#/forms/datepicker",
//       },
//       {
//         label: "Range Slider",
//         to: "#/forms/range-slider",
//       },
//       {
//         label: "Input Selects",
//         to: "#/forms/input-selects",
//       },
//       {
//         label: "Toggle Switch",
//         to: "#/forms/toggle-switch",
//       },
//       {
//         label: "Dropdowns",
//         to: "#/forms/dropdown",
//       },
//       {
//         label: "WYSIWYG Editor",
//         to: "#/forms/wysiwyg-editor",
//       },
//       {
//         label: "Input Mask",
//         to: "#/forms/input-mask",
//       },
//       {
//         label: "Typeahead",
//         to: "#/forms/typeahead",
//       },
//       {
//         label: "Clipboard",
//         to: "#/forms/clipboard",
//       },
//       {
//         label: "Textarea Autosize",
//         to: "#/forms/textarea-autosize",
//       },
//       {
//         label: "Number Spinners",
//         to: "#/forms/numberspinners",
//       },
//       {
//         label: "Color Picker",
//         to: "#/forms/color-picker",
//       },
//       {
//         label: "Dropzone",
//         to: "#/forms/dropzone",
//       },
//     ],
//   },
// ];
// export const WidgetsNav = [
//   {
//     icon: "pe-7s-graph2",
//     label: "Chart Boxes",
//     content: [
//       {
//         label: "Variation 1",
//         to: "#/widgets/chart-boxes",
//       },
//       {
//         label: "Variation 2",
//         to: "#/widgets/chart-boxes-2",
//       },
//       {
//         label: "Variation 3",
//         to: "#/widgets/chart-boxes-3",
//       },
//     ],
//   },
//   {
//     icon: "pe-7s-plus",
//     label: "Profile Boxes",
//     to: "#/widgets/profile-boxes",
//   },
//   {
//     icon: "pe-7s-display1",
//     label: "Content Boxes",
//     to: "#/widgets/content-boxes",
//   },
// ];
// export const ChartsNav = [
//   {
//     icon: "pe-7s-graph2",
//     label: "ChartJS",
//     to: "#/charts/chartjs",
//   },
//   {
//     icon: "pe-7s-graph",
//     label: "Apex Charts",
//     to: "#/charts/apexcharts",
//   },
//   {
//     icon: "pe-7s-gleam",
//     label: "Gauges",
//     to: "#/charts/gauges",
//   },
//   {
//     icon: "pe-7s-graph1",
//     label: "Chart Sparklines 1",
//     to: "#/charts/sparklines-1",
//   },
//   {
//     icon: "pe-7s-edit",
//     label: "Chart Sparklines 2",
//     to: "#/charts/sparklines-2",
//   },
// ];

