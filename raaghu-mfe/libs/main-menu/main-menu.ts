import Children from "react";
const MainMenu = [
  {
    "key": "0",
    "label": "Dashboard",
    "icon": "home",
    "path": "/raaghu-dashboard",
    "subTitle": "Statistics and reports",
  },
  {
    "key": "2",
    "label": "Menu_Saas",
    "icon": "saas",
    "children": [
      {
        "key": "2-0",
        "label": "Tenants",
        "icon": "bullet",
        "path": "/raaghu-tenant",
        "subTitle": "Manage your tenants",
      },
      {
        "key": "2-1",
        "label": "Editions",
        "icon": "bullet",
        "path": "/raaghu-edition",
        "subTitle": "Manage editions and features of the application",
      },
    ],
  },
  {
    "key": "3",
    "label": "Menu_Administration",
    "icon": "administration",
    "children": [
      {
        "key": "3-0",
        "label": "Menu_IdentityManagement",
        "icon": "bullet",
        "children": [
          {
            "key": "3-0-0",
            "label": "Organization units",
            "icon": "bullet",
            "path": "/raaghu-organization-unit",
            "subTitle": "Use organization units to organize users and entities",
          },
          {
            "key": "3-0-1",
            "label": "Roles",
            "icon": "bullet",
            "path": "/raaghu-role",
            "subTitle": "Use roles to group permissions",
          },
          {
            "key": "3-0-2",
            "label": "Users",
            "icon": "bullet",
            "path": "/raaghu-users",
            "subTitle": "Manage users and permissions",
          },
          {
            "key": "3-0-3",
            "label": "Claim Types",
            "icon": "bullet",
            "path": "/raaghu-claim-types",
            "subTitle": "Manage users and permissions",
          },
          {
            "key": "3-0-4",
            "label": "Security-logs",
            "icon": "bullet",
            "path": "/raaghu-security-logs",
            "subTitle": "Manage users and permissions",
          },
        ],
      },
      {
        "key": "3-1",
        "label": "Menu_OpenIddict",
        "icon": "bullet",
        "children": [
          {
            "key": "3-1-0",
            "label": "MySecurityLogs_Application",
            "icon": "bullet",
            "path": "/raaghu-applications",
            "subTitle": "Use organization units to organize users and entities",
          },
          {
            "key": "3-1-1",
            "label": "Scopes",
            "icon": "bullet",
            "path": "/raaghu-api-scope",
            "subTitle": "Use organization units to organize users and entities",
          },
        ],
      },
      {
        "key": "3-2",
        "label": "LanguageManagement",
        "icon": "bullet",
        "children": [
          {
            "key": "3-2-0",
            "label": "Language",
            "icon": "bullet",
            "path": "/raaghu-language",
            "subTitle": "Manage user interface languages",
          },
          {
            "key": "3-2-1",
            "label": "Language-Text",
            "icon": "bullet",
            "path": "/raaghu-language-text",
            "subTitle": "Manage user interface languages",
          },
        ],
      },
      {
        "key": "3-3",
        "label": "Menu_TextTemplates",
        "icon": "bullet",
        "path": "/raaghu-text-template",
        "subTitle": "Manage user interface languages",
      },
      {
        "key": "3-4",
        "label": "Permission_AuditLogs",
        "icon": "bullet",
        "path": "/raaghu-audit-logs",
        "subTitle": "",
      },
      {
        "key": "3-5",
        "label": "Settings",
        "icon": "bullet",
        "path": "/raaghu-settings",
        "subTitle": "Show and change application settings",
      },
      {
        "key": "3-6",
        "label": "Permission_Blogging",
        "icon": "bullet",
        "children": [
          {
            "key": "3-6-0",
            "label": "Permission_Blogging",
            "icon": "bullet",
            "path": "/raaghu-blogger",
            "subTitle": "Blogs, Posts, Articles",
          },
        ],
      },
    ],
  },
  {
    "key": "4",
    "label": "Menu_FileManagement",
    "icon": "file_management",
    "path": "/raaghu-fileManagement",
    "subTitle": "File Management",
  },
  {
    "key": "5",
    "label": "Permission_Forms",
    "icon": "forms",
    "path": "/raaghu-forms",
    "subTitle": "Forms",
  },
  {
    "key": "6",
    "label": "Menu_PaymentManagement",
    "icon": "payment",
    "children": [
      {
        "key": "6-0-0",
        "label": "Menu_Plans",
        "icon": "bullet",
        "path": "/raaghu-paymentPlans",
        "subTitle": "Payment Plans",
      },
      {
        "key": "6-0-1",
        "label": "Menu_PaymentRequests",
        "icon": "bullet",
        "path": "/raaghu-paymentRequests",
        "subTitle": "Payment Requests",
      }
    ]
  },
  {
    "key": "7",
    "label": "Cms",
    "icon": "cms",
    "children": [
      {
        "key": "7-0-0",
        "label": "Blogs",
        "icon": "bullet",
        "path": "/raaghu-blogs",
        "subTitle": "Manage your blogs",
      },
      {
        "key": "7-0-1",
        "label": "Polls",
        "icon": "bullet",
        "path": "/raaghu-polls",
        "subTitle": "Blogs, Posts, Articles",
      },
      {
        "key": "7-0-2",
        "label": "UrlForwarding",
        "icon": "bullet",
        "path": "/raaghu-url-forwarding",
        "subTitle": "Blogs, Posts, Articles",
      },
      {
        "key": "7-0-3",
        "label": "Comments",
        "icon": "bullet",
        "path": "/raaghu-comments",
        "subTitle": "Comments",
      },
      {
        "key": "7-0-4",
        "label": "Tags",
        "icon": "bullet",
        "path": "/raaghu-tags",
        "subTitle": "tags",
      },
      {
        "key": "7-0-5",
        "label": "Menus",
        "icon": "bullet",
        "path": "/raaghu-menus",
        "subTitle": "menus"
      },
      {
        "key": "7-0-6",
        "label": "BlogPosts",
        "icon": "bullet",
        "path": "/raaghu-blog-post",
        "subTitle": "subtitle here"
      },
      {
        "kay": "7-0-7",
        "label": "Permission_GlobalResources",
        "icon": "bullet",
        "path": "/raaghu-globalResources",
        "subTitle": "Global Resources",
      },
      {
        "key": "7-0-8",
        "label": "Newsletters",
        "icon": "bullet",
        "path": "/raaghu-newsletters",
        "subTitle": "Newsletters"
      },
      {
        "key": "7-0-9",
        "label": "Pages",
        "icon": "bullet",
        "path": "/raaghu-pages",
        "subTitle": "subtitle here"
      }
    ]
  }
];

export default MainMenu;
