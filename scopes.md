# Google API Directory

This is a list of Google APIs and the  OAuth 2.0 scopes available for each API. You can set scopes explicitly in the [manifest file](https://github.com/labnol/apps-script-starter/blob/master/appsscript.json) `appsscript.json` under the `oauthScopes` top-level field. The "oauthScopes" field specifies an array of strings.

```
{
  ...
  "oauthScopes": [
    "https://www.googleapis.com/auth/spreadsheets.readonly",
    "https://www.googleapis.com/auth/youtube.upload"
  ],
  ...
}
```

## OAuth Scopes for Google APIs

| Google OAuth API Scope | Scope Description |
| -- | -- |
|**Cloud SQL Admin API v1beta4**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|Manage your Google SQL Service instances|`https://www.googleapis.com/auth/sqlservice.admin`|
|||
|**Android Management API v1**||
|Manage Android devices and apps for your customers|`https://www.googleapis.com/auth/androidmanagement`|
|||
|**YouTube Data API v3**||
|Manage your YouTube account|`https://www.googleapis.com/auth/youtube`|
|See, edit, and permanently delete your YouTube videos, ratings, comments and captions|`https://www.googleapis.com/auth/youtube.force-ssl`|
|View your YouTube account|`https://www.googleapis.com/auth/youtube.readonly`|
|Manage your YouTube videos|`https://www.googleapis.com/auth/youtube.upload`|
|View and manage your assets and associated content on YouTube|`https://www.googleapis.com/auth/youtubepartner`|
|View private information of your YouTube channel relevant during the audit process with a YouTube partner|`https://www.googleapis.com/auth/youtubepartner-channel-audit`|
|||
|**Cloud Testing API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|||
|**DoubleClick Search API v2**||
|View and manage your advertising data in DoubleClick Search|`https://www.googleapis.com/auth/doubleclicksearch`|
|||
|**Tasks API v1**||
|Create, edit, organize, and delete all your tasks|`https://www.googleapis.com/auth/tasks`|
|View your tasks|`https://www.googleapis.com/auth/tasks.readonly`|
|||
|**Calendar API v3**||
|See, edit, share, and permanently delete all the calendars you can access using Google Calendar|`https://www.googleapis.com/auth/calendar`|
|View and edit events on all your calendars|`https://www.googleapis.com/auth/calendar.events`|
|View events on all your calendars|`https://www.googleapis.com/auth/calendar.events.readonly`|
|View your calendars|`https://www.googleapis.com/auth/calendar.readonly`|
|View your Calendar settings|`https://www.googleapis.com/auth/calendar.settings.readonly`|
|||
|**Google Play Custom App Publishing API v1**||
|View and manage your Google Play Developer account|`https://www.googleapis.com/auth/androidpublisher`|
|||
|**YouTube Analytics API v2**||
|Manage your YouTube account|`https://www.googleapis.com/auth/youtube`|
|View your YouTube account|`https://www.googleapis.com/auth/youtube.readonly`|
|View and manage your assets and associated content on YouTube|`https://www.googleapis.com/auth/youtubepartner`|
|View monetary and non-monetary YouTube Analytics reports for your YouTube content|`https://www.googleapis.com/auth/yt-analytics-monetary.readonly`|
|View YouTube Analytics reports for your YouTube content|`https://www.googleapis.com/auth/yt-analytics.readonly`|
|||
|**Cloud Healthcare API v1alpha2**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Cloud Shell API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Content API for Shopping v2.1**||
|Manage your product listings and accounts for Google Shopping|`https://www.googleapis.com/auth/content`|
|||
|**Cloud Pub/Sub API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View and manage Pub/Sub topics and subscriptions|`https://www.googleapis.com/auth/pubsub`|
|||
|**Firebase Dynamic Links API v1**||
|View and administer all your Firebase data and settings|`https://www.googleapis.com/auth/firebase`|
|||
|**Google Classroom API v1**||
|View and manage announcements in Google Classroom|`https://www.googleapis.com/auth/classroom.announcements`|
|View announcements in Google Classroom|`https://www.googleapis.com/auth/classroom.announcements.readonly`|
|Manage your Google Classroom classes|`https://www.googleapis.com/auth/classroom.courses`|
|View your Google Classroom classes|`https://www.googleapis.com/auth/classroom.courses.readonly`|
|Manage your course work and view your grades in Google Classroom|`https://www.googleapis.com/auth/classroom.coursework.me`|
|View your course work and grades in Google Classroom|`https://www.googleapis.com/auth/classroom.coursework.me.readonly`|
|Manage course work and grades for students in the Google Classroom classes you teach and view the course work and grades for classes you administer|`https://www.googleapis.com/auth/classroom.coursework.students`|
|View course work and grades for students in the Google Classroom classes you teach or administer|`https://www.googleapis.com/auth/classroom.coursework.students.readonly`|
|View your Google Classroom guardians|`https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly`|
|View and manage guardians for students in your Google Classroom classes|`https://www.googleapis.com/auth/classroom.guardianlinks.students`|
|View guardians for students in your Google Classroom classes|`https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly`|
|View the email addresses of people in your classes|`https://www.googleapis.com/auth/classroom.profile.emails`|
|View the profile photos of people in your classes|`https://www.googleapis.com/auth/classroom.profile.photos`|
|Receive notifications about your Google Classroom data|`https://www.googleapis.com/auth/classroom.push-notifications`|
|Manage your Google Classroom class rosters|`https://www.googleapis.com/auth/classroom.rosters`|
|View your Google Classroom class rosters|`https://www.googleapis.com/auth/classroom.rosters.readonly`|
|View your course work and grades in Google Classroom|`https://www.googleapis.com/auth/classroom.student-submissions.me.readonly`|
|View course work and grades for students in the Google Classroom classes you teach or administer|`https://www.googleapis.com/auth/classroom.student-submissions.students.readonly`|
|See, create, and edit topics in Google Classroom|`https://www.googleapis.com/auth/classroom.topics`|
|View topics in Google Classroom|`https://www.googleapis.com/auth/classroom.topics.readonly`|
|||
|**Gmail API v1**||
|Read, compose, send, and permanently delete all your email from Gmail|`https://mail.google.com/`|
|Manage drafts and send emails|`https://www.googleapis.com/auth/gmail.compose`|
|Insert mail into your mailbox|`https://www.googleapis.com/auth/gmail.insert`|
|Manage mailbox labels|`https://www.googleapis.com/auth/gmail.labels`|
|View your email message metadata such as labels and headers, but not the email body|`https://www.googleapis.com/auth/gmail.metadata`|
|View and modify but not delete your email|`https://www.googleapis.com/auth/gmail.modify`|
|View your email messages and settings|`https://www.googleapis.com/auth/gmail.readonly`|
|Send email on your behalf|`https://www.googleapis.com/auth/gmail.send`|
|Manage your basic mail settings|`https://www.googleapis.com/auth/gmail.settings.basic`|
|Manage your sensitive mail settings, including who can manage your mail|`https://www.googleapis.com/auth/gmail.settings.sharing`|
|||
|**Fact Check Tools API v1alpha1**||
|View your email address|`https://www.googleapis.com/auth/userinfo.email`|
|||
|**Google Mirror API v1**||
|View your location|`https://www.googleapis.com/auth/glass.location`|
|View and manage your Glass timeline|`https://www.googleapis.com/auth/glass.timeline`|
|||
|**Indexing API v3**||
|Submit data to Google for indexing|`https://www.googleapis.com/auth/indexing`|
|||
|**Surveys API v2**||
|View and manage your surveys and results|`https://www.googleapis.com/auth/surveys`|
|View your surveys and survey results|`https://www.googleapis.com/auth/surveys.readonly`|
|View your email address|`https://www.googleapis.com/auth/userinfo.email`|
|||
|**Compute Engine API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View and manage your Google Compute Engine resources|`https://www.googleapis.com/auth/compute`|
|View your Google Compute Engine resources|`https://www.googleapis.com/auth/compute.readonly`|
|Manage your data and permissions in Google Cloud Storage|`https://www.googleapis.com/auth/devstorage.full_control`|
|View your data in Google Cloud Storage|`https://www.googleapis.com/auth/devstorage.read_only`|
|Manage your data in Google Cloud Storage|`https://www.googleapis.com/auth/devstorage.read_write`|
|||
|**Firebase Hosting API v1beta1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|View and administer all your Firebase data and settings|`https://www.googleapis.com/auth/firebase`|
|View all your Firebase data and settings|`https://www.googleapis.com/auth/firebase.readonly`|
|||
|**Cloud Asset API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Webmaster Tools v2**||
|Manage your data in Webmaster Tools.|`https://www.google.com/webmasters/tools/feeds/`|
|||
|**Abusive Experience Report API v1**||
|Test scope for access to the Zoo service|`https://www.googleapis.com/auth/xapi.zoo`|
|||
|**Cloud Identity-Aware Proxy API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Cloud Run API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Cloud Storage JSON API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|Manage your data and permissions in Google Cloud Storage|`https://www.googleapis.com/auth/devstorage.full_control`|
|View your data in Google Cloud Storage|`https://www.googleapis.com/auth/devstorage.read_only`|
|Manage your data in Google Cloud Storage|`https://www.googleapis.com/auth/devstorage.read_write`|
|||
|**Cloud Datastore API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View and manage your Google Cloud Datastore data|`https://www.googleapis.com/auth/datastore`|
|||
|**Cloud Scheduler API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**G Suite Vault API v1**||
|Manage your eDiscovery data|`https://www.googleapis.com/auth/ediscovery`|
|View your eDiscovery data|`https://www.googleapis.com/auth/ediscovery.readonly`|
|||
|**Cloud Private Catalog API v1beta1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Cloud Functions API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Cloud Dataproc API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Genomics API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View and manage Genomics data|`https://www.googleapis.com/auth/genomics`|
|||
|**DoubleClick Bid Manager API v1**||
|View and manage your reports in DoubleClick Bid Manager|`https://www.googleapis.com/auth/doubleclickbidmanager`|
|||
|**Cloud Spanner API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|Administer your Spanner databases|`https://www.googleapis.com/auth/spanner.admin`|
|View and manage the contents of your Spanner databases|`https://www.googleapis.com/auth/spanner.data`|
|||
|**URL Shortener API v1**||
|Manage your goo.gl short URLs|`https://www.googleapis.com/auth/urlshortener`|
|||
|**Google Identity Toolkit API v3**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View and administer all your Firebase data and settings|`https://www.googleapis.com/auth/firebase`|
|||
|**Stackdriver Debugger API v2**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|Use Stackdriver Debugger|`https://www.googleapis.com/auth/cloud_debugger`|
|||
|**Google Cloud Deployment Manager API v2**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|View and manage your Google Cloud Platform management resources and deployment status information|`https://www.googleapis.com/auth/ndev.cloudman`|
|View your Google Cloud Platform management resources and deployment status information|`https://www.googleapis.com/auth/ndev.cloudman.readonly`|
|||
|**Google Sheets API v4**||
|See, edit, create, and delete all of your Google Drive files|`https://www.googleapis.com/auth/drive`|
|View and manage Google Drive files and folders that you have opened or created with this app|`https://www.googleapis.com/auth/drive.file`|
|See and download all your Google Drive files|`https://www.googleapis.com/auth/drive.readonly`|
|See, edit, create, and delete your spreadsheets in Google Drive|`https://www.googleapis.com/auth/spreadsheets`|
|View your Google Spreadsheets|`https://www.googleapis.com/auth/spreadsheets.readonly`|
|||
|**Groups Settings API v1**||
|View and manage the settings of a G Suite group|`https://www.googleapis.com/auth/apps.groups.settings`|
|||
|**Google Play Game Services Management API v1management**||
|Create, edit, and delete your Google Play Games activity|`https://www.googleapis.com/auth/games`|
|||
|**Ad Exchange Buyer API v1.4**||
|Manage your Ad Exchange buyer account configuration|`https://www.googleapis.com/auth/adexchange.buyer`|
|||
|**Library Agent API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Cloud Key Management Service (KMS) API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View and manage your keys and secrets stored in Cloud Key Management Service|`https://www.googleapis.com/auth/cloudkms`|
|||
|**Cloud Vision API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|Apply machine learning models to understand and label images|`https://www.googleapis.com/auth/cloud-vision`|
|||
|**Books API v1**||
|Manage your books|`https://www.googleapis.com/auth/books`|
|||
|**Manufacturer Center API v1**||
|Manage your product listings for Google Manufacturer Center|`https://www.googleapis.com/auth/manufacturercenter`|
|||
|**Picasa Web v2**||
|Manage your photos and videos.|`https://picasaweb.google.com/data/`|
|||
|**Cloud Identity API v1**||
|See, change, create, and delete any of the Cloud Identity Groups that you can access, including the members of each group|`https://www.googleapis.com/auth/cloud-identity.groups`|
|See any Cloud Identity Groups that you can access, including group members and their emails|`https://www.googleapis.com/auth/cloud-identity.groups.readonly`|
|||
|**Sites v1.4**||
|Manage your sites.|`https://sites.google.com/feeds/`|
|||
|**Kubernetes Engine API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Remote Build Execution API v2**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Cloud Video Intelligence API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**BigQuery Data Transfer API v1**||
|View and manage your data in Google BigQuery|`https://www.googleapis.com/auth/bigquery`|
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|||
|**Service Management API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|Manage your Google API service configuration|`https://www.googleapis.com/auth/service.management`|
|View your Google API service configuration|`https://www.googleapis.com/auth/service.management.readonly`|
|||
|**Cloud Machine Learning Engine v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Storage Transfer API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Admin Reports API reports_v1**||
|View audit reports for your G Suite domain|`https://www.googleapis.com/auth/admin.reports.audit.readonly`|
|View usage reports for your G Suite domain|`https://www.googleapis.com/auth/admin.reports.usage.readonly`|
|||
|**Firebase Rules API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View and administer all your Firebase data and settings|`https://www.googleapis.com/auth/firebase`|
|View all your Firebase data and settings|`https://www.googleapis.com/auth/firebase.readonly`|
|||
|**Ad Experience Report API v1**||
|Test scope for access to the Zoo service|`https://www.googleapis.com/auth/xapi.zoo`|
|||
|**Gmail Inbox Feed**||
|View and manage your mail.|`https://mail.google.com/mail/feed/atom`|
|||
|**Google Cloud Memorystore for Redis API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**DCM/DFA Reporting And Trafficking API v3.3**||
|Manage DoubleClick Digital Marketing conversions|`https://www.googleapis.com/auth/ddmconversions`|
|View and manage DoubleClick for Advertisers reports|`https://www.googleapis.com/auth/dfareporting`|
|View and manage your DoubleClick Campaign Manager's (DCM) display ad campaigns|`https://www.googleapis.com/auth/dfatrafficking`|
|||
|**Cloud Data Loss Prevention (DLP) API v2**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Ad Exchange Buyer API II v2beta1**||
|Manage your Ad Exchange buyer account configuration|`https://www.googleapis.com/auth/adexchange.buyer`|
|||
|**Identity and Access Management (IAM) API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Google Play EMM API v1**||
|Manage corporate Android devices|`https://www.googleapis.com/auth/androidenterprise`|
|||
|**Google+ Domains API v1**||
|View your circles and the people and pages in them|`https://www.googleapis.com/auth/plus.circles.read`|
|View your basic profile info, including your age range and language|`https://www.googleapis.com/auth/plus.login`|
|Associate you with your personal info on Google|`https://www.googleapis.com/auth/plus.me`|
|Send your photos and videos to Google+|`https://www.googleapis.com/auth/plus.media.upload`|
|View your own Google+ profile and profiles visible to you|`https://www.googleapis.com/auth/plus.profiles.read`|
|View your Google+ posts, comments, and stream|`https://www.googleapis.com/auth/plus.stream.read`|
|View your email address|`https://www.googleapis.com/auth/userinfo.email`|
|See your personal info, including any personal info you've made publicly available|`https://www.googleapis.com/auth/userinfo.profile`|
|||
|**Cloud Source Repositories API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|Manage your source code repositories|`https://www.googleapis.com/auth/source.full_control`|
|View the contents of your source code repositories|`https://www.googleapis.com/auth/source.read_only`|
|Manage the contents of your source code repositories|`https://www.googleapis.com/auth/source.read_write`|
|||
|**Service Usage API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|Manage your Google API service configuration|`https://www.googleapis.com/auth/service.management`|
|||
|**Cloud Talent Solution API v3**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|Manage job postings|`https://www.googleapis.com/auth/jobs`|
|||
|**Google Play Game Services API v1**||
|View and manage its own configuration data in your Google Drive|`https://www.googleapis.com/auth/drive.appdata`|
|Create, edit, and delete your Google Play Games activity|`https://www.googleapis.com/auth/games`|
|Associate you with your personal info on Google|`https://www.googleapis.com/auth/plus.me`|
|||
|**AdSense Management API v1.4**||
|View and manage your AdSense data|`https://www.googleapis.com/auth/adsense`|
|View your AdSense data|`https://www.googleapis.com/auth/adsense.readonly`|
|||
|**Access Approval API v1beta1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Tag Manager API v2**||
|Delete your Google Tag Manager containers|`https://www.googleapis.com/auth/tagmanager.delete.containers`|
|Manage your Google Tag Manager container and its subcomponents, excluding versioning and publishing|`https://www.googleapis.com/auth/tagmanager.edit.containers`|
|Manage your Google Tag Manager container versions|`https://www.googleapis.com/auth/tagmanager.edit.containerversions`|
|View and manage your Google Tag Manager accounts|`https://www.googleapis.com/auth/tagmanager.manage.accounts`|
|Manage user permissions of your Google Tag Manager account and container|`https://www.googleapis.com/auth/tagmanager.manage.users`|
|Publish your Google Tag Manager container versions|`https://www.googleapis.com/auth/tagmanager.publish`|
|View your Google Tag Manager container and its subcomponents|`https://www.googleapis.com/auth/tagmanager.readonly`|
|||
|**Cloud Tool Results API v1beta3**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Cloud Data Fusion API v1beta1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Analytics Reporting API v4**||
|View and manage your Google Analytics data|`https://www.googleapis.com/auth/analytics`|
|View your Google Analytics data|`https://www.googleapis.com/auth/analytics.readonly`|
|||
|**Cloud Filestore API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Cloud Billing API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Apps Script API v1**||
|Read, compose, send, and permanently delete all your email from Gmail|`https://mail.google.com/`|
|See, edit, share, and permanently delete all the calendars you can access using Google Calendar|`https://www.google.com/calendar/feeds`|
|See, edit, download, and permanently delete your contacts|`https://www.google.com/m8/feeds`|
|View and manage the provisioning of groups on your domain|`https://www.googleapis.com/auth/admin.directory.group`|
|View and manage the provisioning of users on your domain|`https://www.googleapis.com/auth/admin.directory.user`|
|View and manage your Google Docs documents|`https://www.googleapis.com/auth/documents`|
|See, edit, create, and delete all of your Google Drive files|`https://www.googleapis.com/auth/drive`|
|View and manage forms that this application has been installed in|`https://www.googleapis.com/auth/forms.currentonly`|
|View and manage your Google Groups|`https://www.googleapis.com/auth/groups`|
|Create and update Google Apps Script deployments|`https://www.googleapis.com/auth/script.deployments`|
|View Google Apps Script deployments|`https://www.googleapis.com/auth/script.deployments.readonly`|
|View Google Apps Script project's metrics|`https://www.googleapis.com/auth/script.metrics`|
|View Google Apps Script processes|`https://www.googleapis.com/auth/script.processes`|
|Create and update Google Apps Script projects|`https://www.googleapis.com/auth/script.projects`|
|View Google Apps Script projects|`https://www.googleapis.com/auth/script.projects.readonly`|
|See, edit, create, and delete your spreadsheets in Google Drive|`https://www.googleapis.com/auth/spreadsheets`|
|View your email address|`https://www.googleapis.com/auth/userinfo.email`|
|||
|**Google+ API v1**||
|View your basic profile info, including your age range and language|`https://www.googleapis.com/auth/plus.login`|
|Associate you with your personal info on Google|`https://www.googleapis.com/auth/plus.me`|
|View your email address|`https://www.googleapis.com/auth/userinfo.email`|
|See your personal info, including any personal info you've made publicly available|`https://www.googleapis.com/auth/userinfo.profile`|
|||
|**Cloud IoT API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|Register and manage devices in the Google Cloud IoT service|`https://www.googleapis.com/auth/cloudiot`|
|||
|**Stackdriver Trace API v2**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|Write Trace data for a project or application|`https://www.googleapis.com/auth/trace.append`|
|||
|**Access Context Manager API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Google Cloud DNS API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|View your DNS records hosted by Google Cloud DNS|`https://www.googleapis.com/auth/ndev.clouddns.readonly`|
|View and manage your DNS records hosted by Google Cloud DNS|`https://www.googleapis.com/auth/ndev.clouddns.readwrite`|
|||
|**Cloud Security Command Center API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Cloud Text-to-Speech API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Dialogflow API v2**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View, manage and query your Dialogflow agents|`https://www.googleapis.com/auth/dialogflow`|
|||
|**Drive Activity API v2**||
|View and add to the activity record of files in your Google Drive|`https://www.googleapis.com/auth/drive.activity`|
|View the activity record of files in your Google Drive|`https://www.googleapis.com/auth/drive.activity.readonly`|
|||
|**Drive Activity API v1**||
|View the activity history of your Google apps|`https://www.googleapis.com/auth/activity`|
|||
|**Cloud Runtime Configuration API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|Manage your Google Cloud Platform services' runtime configuration|`https://www.googleapis.com/auth/cloudruntimeconfig`|
|||
|**IAM Service Account Credentials API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Service Broker API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Perspective Comment Analyzer API v1alpha1**||
|View your email address|`https://www.googleapis.com/auth/userinfo.email`|
|||
|**Dataflow API v1b3**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View and manage your Google Compute Engine resources|`https://www.googleapis.com/auth/compute`|
|View your Google Compute Engine resources|`https://www.googleapis.com/auth/compute.readonly`|
|View your email address|`https://www.googleapis.com/auth/userinfo.email`|
|||
|**Blogger API v3**||
|Manage your Blogger account|`https://www.googleapis.com/auth/blogger`|
|View your Blogger account|`https://www.googleapis.com/auth/blogger.readonly`|
|||
|**Google Play Developer API v3**||
|View and manage your Google Play Developer account|`https://www.googleapis.com/auth/androidpublisher`|
|||
|**Google Analytics API v3**||
|View and manage your Google Analytics data|`https://www.googleapis.com/auth/analytics`|
|Edit Google Analytics management entities|`https://www.googleapis.com/auth/analytics.edit`|
|Manage Google Analytics Account users by email address|`https://www.googleapis.com/auth/analytics.manage.users`|
|View Google Analytics user permissions|`https://www.googleapis.com/auth/analytics.manage.users.readonly`|
|Create a new Google Analytics account along with its default property and view|`https://www.googleapis.com/auth/analytics.provision`|
|View your Google Analytics data|`https://www.googleapis.com/auth/analytics.readonly`|
|Manage Google Analytics user deletion requests|`https://www.googleapis.com/auth/analytics.user.deletion`|
|||
|**Cloud Tasks API v2**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Enterprise Apps Reseller API v1**||
|Manage users on your domain|`https://www.googleapis.com/auth/apps.order`|
|Manage users on your domain|`https://www.googleapis.com/auth/apps.order.readonly`|
|||
|**Stackdriver Logging API v2**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|Administrate log data for your projects|`https://www.googleapis.com/auth/logging.admin`|
|View log data for your projects|`https://www.googleapis.com/auth/logging.read`|
|Submit log data for your projects|`https://www.googleapis.com/auth/logging.write`|
|||
|**Cloud Firestore API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View and manage your Google Cloud Datastore data|`https://www.googleapis.com/auth/datastore`|
|||
|**Service Control API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|Manage your Google Service Control data|`https://www.googleapis.com/auth/servicecontrol`|
|||
|**Groups Migration API v1**||
|Manage messages in groups on your domain|`https://www.googleapis.com/auth/apps.groups.migration`|
|||
|**Cloud Storage API v1**||
|Allows full control over data, including the ability to modify ACLs.|`https://www.googleapis.com/auth/devstorage.full_control`|
|Only allows access to read data, including listing buckets.|`https://www.googleapis.com/auth/devstorage.read_only`|
|Allows access to read and change data.|`https://www.googleapis.com/auth/devstorage.read_write`|
|||
|**Google Slides API v1**||
|See, edit, create, and delete all of your Google Drive files|`https://www.googleapis.com/auth/drive`|
|View and manage Google Drive files and folders that you have opened or created with this app|`https://www.googleapis.com/auth/drive.file`|
|See and download all your Google Drive files|`https://www.googleapis.com/auth/drive.readonly`|
|View and manage your Google Slides presentations|`https://www.googleapis.com/auth/presentations`|
|View your Google Slides presentations|`https://www.googleapis.com/auth/presentations.readonly`|
|See, edit, create, and delete your spreadsheets in Google Drive|`https://www.googleapis.com/auth/spreadsheets`|
|View your Google Spreadsheets|`https://www.googleapis.com/auth/spreadsheets.readonly`|
|||
|**AdSense Host API v4.1**||
|View and manage your AdSense host data and associated accounts|`https://www.googleapis.com/auth/adsensehost`|
|||
|**Binary Authorization API v1beta1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**YouTube Reporting API v1**||
|View monetary and non-monetary YouTube Analytics reports for your YouTube content|`https://www.googleapis.com/auth/yt-analytics-monetary.readonly`|
|View YouTube Analytics reports for your YouTube content|`https://www.googleapis.com/auth/yt-analytics.readonly`|
|||
|**Search Console API v3**||
|View and manage Search Console data for your verified sites|`https://www.googleapis.com/auth/webmasters`|
|View Search Console data for your verified sites|`https://www.googleapis.com/auth/webmasters.readonly`|
|||
|**Enterprise License Manager API v1**||
|View and manage G Suite licenses for your domain|`https://www.googleapis.com/auth/apps.licensing`|
|||
|**Spreadsheets v3**||
|Manage your spreadsheets.|`https://spreadsheets.google.com/feeds/`|
|||
|**Contacts v3**||
|Manage your contacts.|`https://www.google.com/m8/feeds/`|
|||
|**Proximity Beacon API v1beta1**||
|View and modify your beacons|`https://www.googleapis.com/auth/userlocation.beacon.registry`|
|||
|**Service Networking API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|Manage your Google API service configuration|`https://www.googleapis.com/auth/service.management`|
|||
|**Cloud Composer API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Google App State API v1**||
|View and manage your data for this application|`https://www.googleapis.com/auth/appstate`|
|||
|**Cloud OS Login API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View and manage your Google Compute Engine resources|`https://www.googleapis.com/auth/compute`|
|||
|**Google Docs API v1**||
|View and manage your Google Docs documents|`https://www.googleapis.com/auth/documents`|
|View your Google Docs documents|`https://www.googleapis.com/auth/documents.readonly`|
|See, edit, create, and delete all of your Google Drive files|`https://www.googleapis.com/auth/drive`|
|View and manage Google Drive files and folders that you have opened or created with this app|`https://www.googleapis.com/auth/drive.file`|
|See and download all your Google Drive files|`https://www.googleapis.com/auth/drive.readonly`|
|||
|**Google OAuth2 API v2**||
|Associate you with your personal info on Google|`https://www.googleapis.com/auth/plus.me`|
|View your email address|`https://www.googleapis.com/auth/userinfo.email`|
|See your personal info, including any personal info you've made publicly available|`https://www.googleapis.com/auth/userinfo.profile`|
|||
|**Stackdriver Error Reporting API v1beta1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**App Engine Admin API v1**||
|View and manage your applications deployed on Google App Engine|`https://www.googleapis.com/auth/appengine.admin`|
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|||
|**Cloud Build API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Fitness v1**||
|View your activity information in Google Fit|`https://www.googleapis.com/auth/fitness.activity.read`|
|View and store your activity information in Google Fit|`https://www.googleapis.com/auth/fitness.activity.write`|
|View blood glucose data in Google Fit|`https://www.googleapis.com/auth/fitness.blood_glucose.read`|
|View and store blood glucose data in Google Fit|`https://www.googleapis.com/auth/fitness.blood_glucose.write`|
|View blood pressure data in Google Fit|`https://www.googleapis.com/auth/fitness.blood_pressure.read`|
|View and store blood pressure data in Google Fit|`https://www.googleapis.com/auth/fitness.blood_pressure.write`|
|View body sensor information in Google Fit|`https://www.googleapis.com/auth/fitness.body.read`|
|View and store body sensor data in Google Fit|`https://www.googleapis.com/auth/fitness.body.write`|
|View body temperature data in Google Fit|`https://www.googleapis.com/auth/fitness.body_temperature.read`|
|View and store body temperature data in Google Fit|`https://www.googleapis.com/auth/fitness.body_temperature.write`|
|View your stored location data in Google Fit|`https://www.googleapis.com/auth/fitness.location.read`|
|View and store your location data in Google Fit|`https://www.googleapis.com/auth/fitness.location.write`|
|View nutrition information in Google Fit|`https://www.googleapis.com/auth/fitness.nutrition.read`|
|View and store nutrition information in Google Fit|`https://www.googleapis.com/auth/fitness.nutrition.write`|
|View oxygen saturation data in Google Fit|`https://www.googleapis.com/auth/fitness.oxygen_saturation.read`|
|View and store oxygen saturation data in Google Fit|`https://www.googleapis.com/auth/fitness.oxygen_saturation.write`|
|View reproductive health data in Google Fit|`https://www.googleapis.com/auth/fitness.reproductive_health.read`|
|View and store reproductive health data in Google Fit|`https://www.googleapis.com/auth/fitness.reproductive_health.write`|
|||
|**BigQuery API v2**||
|View and manage your data in Google BigQuery|`https://www.googleapis.com/auth/bigquery`|
|Insert data into Google BigQuery|`https://www.googleapis.com/auth/bigquery.insertdata`|
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|Manage your data and permissions in Google Cloud Storage|`https://www.googleapis.com/auth/devstorage.full_control`|
|View your data in Google Cloud Storage|`https://www.googleapis.com/auth/devstorage.read_only`|
|Manage your data in Google Cloud Storage|`https://www.googleapis.com/auth/devstorage.read_write`|
|||
|**Replica Pool API v1beta1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|View and manage your Google Cloud Platform management resources and deployment status information|`https://www.googleapis.com/auth/ndev.cloudman`|
|View your Google Cloud Platform management resources and deployment status information|`https://www.googleapis.com/auth/ndev.cloudman.readonly`|
|View and manage replica pools|`https://www.googleapis.com/auth/replicapool`|
|View replica pools|`https://www.googleapis.com/auth/replicapool.readonly`|
|||
|**Web Security Scanner API v1alpha**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Service Consumer Management API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**G Suite Alert Center API v1beta1**||
|See and delete your domain's G Suite alerts, and send alert feedback|`https://www.googleapis.com/auth/apps.alerts`|
|||
|**Google Play Game Services Publishing API v1configuration**||
|View and manage your Google Play Developer account|`https://www.googleapis.com/auth/androidpublisher`|
|||
|**Stackdriver Monitoring API v3**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View and write monitoring data for all of your Google and third-party Cloud and API projects|`https://www.googleapis.com/auth/monitoring`|
|View monitoring data for all of your Google Cloud and third-party projects|`https://www.googleapis.com/auth/monitoring.read`|
|Publish metric data to your Google Cloud projects|`https://www.googleapis.com/auth/monitoring.write`|
|||
|**Cloud Bigtable Admin API v2**||
|Administer your Cloud Bigtable tables and clusters|`https://www.googleapis.com/auth/bigtable.admin`|
|Administer your Cloud Bigtable clusters|`https://www.googleapis.com/auth/bigtable.admin.cluster`|
|Administer your Cloud Bigtable clusters|`https://www.googleapis.com/auth/bigtable.admin.instance`|
|Administer your Cloud Bigtable tables|`https://www.googleapis.com/auth/bigtable.admin.table`|
|Administer your Cloud Bigtable tables and clusters|`https://www.googleapis.com/auth/cloud-bigtable.admin`|
|Administer your Cloud Bigtable clusters|`https://www.googleapis.com/auth/cloud-bigtable.admin.cluster`|
|Administer your Cloud Bigtable tables|`https://www.googleapis.com/auth/cloud-bigtable.admin.table`|
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|||
|**Cloud Private Catalog Producer API v1beta1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Cloud Translation API v2**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|Translate text from one language to another using Google Translate|`https://www.googleapis.com/auth/cloud-translation`|
|||
|**Cloud Speech-to-Text API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**People API v1**||
|See, edit, download, and permanently delete your contacts|`https://www.googleapis.com/auth/contacts`|
|See and download your contacts|`https://www.googleapis.com/auth/contacts.readonly`|
|View your street addresses|`https://www.googleapis.com/auth/user.addresses.read`|
|View your complete date of birth|`https://www.googleapis.com/auth/user.birthday.read`|
|View your email addresses|`https://www.googleapis.com/auth/user.emails.read`|
|View your phone numbers|`https://www.googleapis.com/auth/user.phonenumbers.read`|
|View your email address|`https://www.googleapis.com/auth/userinfo.email`|
|See your personal info, including any personal info you've made publicly available|`https://www.googleapis.com/auth/userinfo.profile`|
|||
|**Google Site Verification API v1**||
|Manage the list of sites and domains you control|`https://www.googleapis.com/auth/siteverification`|
|Manage your new site verifications with Google|`https://www.googleapis.com/auth/siteverification.verify_only`|
|||
|**Fusion Tables API v2**||
|Manage your Fusion Tables|`https://www.googleapis.com/auth/fusiontables`|
|View your Fusion Tables|`https://www.googleapis.com/auth/fusiontables.readonly`|
|||
|**Drive API v3**||
|See, edit, create, and delete all of your Google Drive files|`https://www.googleapis.com/auth/drive`|
|View and manage its own configuration data in your Google Drive|`https://www.googleapis.com/auth/drive.appdata`|
|View and manage Google Drive files and folders that you have opened or created with this app|`https://www.googleapis.com/auth/drive.file`|
|View and manage metadata of files in your Google Drive|`https://www.googleapis.com/auth/drive.metadata`|
|View metadata for files in your Google Drive|`https://www.googleapis.com/auth/drive.metadata.readonly`|
|View the photos, videos and albums in your Google Photos|`https://www.googleapis.com/auth/drive.photos.readonly`|
|See and download all your Google Drive files|`https://www.googleapis.com/auth/drive.readonly`|
|Modify your Google Apps Script scripts' behavior|`https://www.googleapis.com/auth/drive.scripts`|
|||
|**Cloud Resource Manager API v2**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform.read-only`|
|||
|**Stackdriver Profiler API v2**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|View and write monitoring data for all of your Google and third-party Cloud and API projects|`https://www.googleapis.com/auth/monitoring`|
|Publish metric data to your Google Cloud projects|`https://www.googleapis.com/auth/monitoring.write`|
|||
|**Cloud Natural Language API v1**||
|Apply machine learning models to reveal the structure and meaning of text|`https://www.googleapis.com/auth/cloud-language`|
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Cloud TPU API v1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Container Analysis API v1alpha1**||
|View and manage your data across Google Cloud Platform services|`https://www.googleapis.com/auth/cloud-platform`|
|||
|**Street View Publish API v1**||
|Publish and manage your 360 photos on Google Street View|`https://www.googleapis.com/auth/streetviewpublish`|
