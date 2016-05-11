# AngularJS sample in HCP

##What is it?

This is a sample HTML5 application that demonstrates the ease of using JavaScript frameworks like AngularJS and Bootstrap 
for UI development in the SAP HANA Cloud Platform.

The application uses:

- [Angular JS](https://angularjs.org/) as the client side framework that helps in development of UI applications by providing MVC/MVVM features,data binding etc.
- The [Northwind OData service](http://services.odata.org/V4/Northwind/Northwind.svc/) as the back-end service for fetching data (of course any RESTful API can be used here, not necessarily an OData service).
- [Bootstrap](http://services.odata.org/V4/Northwind/Northwind.svc/) as the client side framework for styling the application.

## How to run it?

##### Pre-requisites:
- You should have an [HCP developer(trial) account](https://account.hanatrial.ondemand.com/cockpit) to execute the steps mentioned below.
- You should be familiar with basics of developing HTML5 applications,AngularJS and Bootstrap.

##### Step 1: Copy the application code into your HCP trial account

- Clone the repository or download the repository ZIP to your file system. If you download the repository as a ZIP file, unzip it. 
- Within the repository folder, right click on the **angularnorthwindapp** folder and create an application archive named `angularnorthwindapp.zip`.
- Import this archive as an HTML5 application into HCP - [details](https://help.hana.ondemand.com/help/frameset.htm?b8d879c30b44455d906bfa4c35b8221d.html). <BR>
  During import, provide the **Application Name** as `angularnorthwindapp` and **Version Name** as `1.0`.
- [Activate](https://help.hana.ondemand.com/help/frameset.htm?dfaaf837ca5f4ff8bb25907a342a1416.html) this version of the application.

##### Step 2: Configure the Northwind OData service destination in the HCP cockpit

- Import the destination file available at [angularnorthwindapp/destination/northwind](angularnorthwindapp/destination/northwind) into the HCP cockpit - [details](https://help.hana.ondemand.com/help/frameset.htm?a2550c3fcf2b430f94f99072677bf9ec.html).

##### Step 3: Launch the application
The deployed application would be accessible on the following URL: <BR>
`https://angularnorthwindapp-pXXXXXtrial.dispatcher.hanatrial.ondemand.com`

**Note:** Replace `pXXXXX` with the SCN User ID that you provided during registration.

## Editing the application
You can edit this appplication by cloning the Git repository into the SAP Web IDE. Refer to the [SCN blog](http://scn.sap.com/community/developer-center/cloud-platform/blog/2016/04/25/developing-an-angularjs-application-on-the-sap-hana-cloud-platform) for details.








