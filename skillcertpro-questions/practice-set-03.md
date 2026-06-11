# Practice Set 3

Source: [https://skillcertpro.com/az-104-exam-questions/3/](https://skillcertpro.com/az-104-exam-questions/3/)
Total questions: 57

---

### Question 1

Your company‘s compliance requirements mandate that you test your disaster recovery plan regularly. How can you automate the testing process for Azure Site Recovery to ensure that your disaster recovery plan is up-to-date and effective?

**Options:**

- **A.** Rely on Azure Site Recovery‘s built-in alerts for test failover notifications.
- **B.** Use Azure Automation runbooks to schedule and execute test failovers periodically. ✅
- **C.** Manually initiate test failovers every week.

**Correct answer:** B

**Explanation:**

Azure Automation runbooks provide the flexibility to schedule and automate the entire test failover process, ensuring regular testing and validation of your disaster recovery plan.

---

### Question 2

You need to monitor and audit access to Azure resources for compliance and security purposes. Which Azure services can you use to track and analyze access logs?

**Options:**

- **A.** Azure Cost Management
- **B.** Azure Security Center
- **C.** Azure Monitor ✅
- **D.** Azure Backup

**Correct answer:** C

**Explanation:**

### Correct

- **Option C. Azure Monitor** Correct because **Azure Monitor** collects and analyzes telemetry data from Azure resources, including **activity logs and diagnostic logs**. It enables tracking of access, auditing, and compliance reporting. With **Log Analytics**, you can query and visualize access patterns, detect anomalies, and generate compliance reports. This is the primary service for monitoring and auditing access in Azure.

### Incorrect

- **Option A. Azure Cost Management** Incorrect because Cost Management focuses on **tracking and optimizing spending** in Azure. It does not provide access logs or auditing capabilities for compliance.

- **Option B. Azure Security Center** Incorrect because Security Center (now part of **Microsoft Defender for Cloud**) provides **security posture management and threat protection**, but it does not directly track or analyze access logs. It complements monitoring but is not the main service for auditing access.

- **Option D. Azure Backup** Incorrect because Azure Backup is designed for **data protection and recovery**. It does not provide monitoring or auditing of access logs.

###

---

### Question 3

You are deploying a Node.js application to Azure App Service. Which deployment method would you choose if you want to directly deploy your application code from your local development environment?

**Options:**

- **A.** FTP
- **B.** Local Git ✅
- **C.** Azure DevOps
- **D.** Azure CLI

**Correct answer:** B

**Explanation:**

**Correct**

**Option B. Local Git** **Correct:** Using **Local Git deployment** allows you to push your application code directly from your local development environment to Azure App Service. This method sets up a Git repository in your App Service, and you can deploy by pushing code changes from your local Git repo. It is the most suitable option when you want direct deployment from your local environment without relying on external CI/CD pipelines.

**Incorrect**

**Option A. FTP** **Incorrect:** FTP can be used to upload files to App Service, but it is not the recommended method for deploying application code. It lacks version control, automation, and integration with development workflows.

**Option C. Azure DevOps** **Incorrect:** Azure DevOps is a CI/CD platform that integrates with App Service for automated deployments. While powerful, it is not a direct local deployment method. It requires pipelines and remote configuration rather than pushing code directly from your local environment.

**Option D. Azure CLI** **Incorrect:** Azure CLI can be used to manage resources and trigger deployments, but it is not the primary method for directly deploying application code from a local environment. It is more suited for scripting and automation tasks.

---

### Question 4

You want to monitor and audit access to your Azure Storage accounts. Which Azure services or features can you use to track storage access logs, generate reports, and detect suspicious activity?

**Options:**

- **A.** Azure Activity Logs
- **B.** Azure Security Center
- **C.** Azure Monitor ✅
- **D.** Azure Storage Analytics

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Azure Monitor**

- Correct because **Azure Monitor** collects and analyzes telemetry data from Azure resources, including storage accounts.

- It integrates with **Log Analytics** to query access logs, detect anomalies, and generate reports.

- This is the recommended service for centralized monitoring and auditing of storage access.

### Incorrect

**Option A. Azure Activity Logs**

- Incorrect because **Activity Logs** only capture **control-plane operations** (e.g., creating or deleting a storage account).

- They do not record **data-plane operations** such as reading, writing, or deleting blobs/files.

- Therefore, they cannot fully audit storage access.

**Option B. Azure Security Center**

- Incorrect because while **Security Center** provides security recommendations and threat detection, it does not directly track or log detailed storage access events.

- It is more focused on compliance and security posture management.

**Option D. Azure Storage Analytics**

- Incorrect because **Storage Analytics** was a legacy feature for logging and metrics.

- It has been **deprecated** in favor of Azure Monitor and Diagnostic Settings.

- Using Storage Analytics is no longer recommended for new deployments.

###

---

### Question 5

You are troubleshooting a performance issue with a web application running on Azure App Service. You want to see the detailed request and response logs for the application to identify the root cause. Which App Service feature can you enable to capture these logs?

**Options:**

- **A.** App Service authentication logs
- **B.** App Service deployment logs
- **C.** App Service web server logs ✅
- **D.** App Service diagnostics logs

**Correct answer:** C

**Explanation:**

### Correct

**Option C. App Service web server logs**

- Correct because **web server logs** capture detailed HTTP request and response information, including status codes, request paths, and response times.

- This is the feature specifically designed to help troubleshoot performance issues and identify problems with incoming and outgoing traffic.

- Enabling web server logs allows you to analyze how the application is handling requests and pinpoint bottlenecks.

### Incorrect

**Option A. App Service authentication logs**

- Incorrect because authentication logs only capture information related to **user sign-ins and identity validation**.

- They do not provide detailed request/response traffic data needed for performance troubleshooting.

**Option B. App Service deployment logs**

- Incorrect because deployment logs track **application deployment events** (e.g., code pushes, configuration changes).

- They are useful for debugging deployment issues but not for analyzing runtime request/response performance.

**Option D. App Service diagnostics logs**

- Incorrect because diagnostics logs provide **general application insights** (like crash dumps or trace logs).

- While helpful for debugging application-level issues, they do not capture detailed HTTP request/response traffic like web server logs do.

---

### Question 6

Your organization is using Azure Key Vault to store sensitive configuration values, such as secrets and connection strings. How can you securely reference and utilize these secrets within your ARM templates or Bicep files during deployment?

**Options:**

- **A.** Set access policies in Key Vault to allow the deployment to retrieve secrets ✅
- **B.** Define parameters in the template to accept Key Vault secret URIs ✅
- **C.** Use the ‘reference‘ function in ARM templates to retrieve secrets from Key Vault ✅
- **D.** Use the ‘list‘ function to get Key Vault secrets in ARM templates

**Correct answer:** A, B, C

**Explanation:**

### Correct

**Option A. Set access policies in Key Vault to allow the deployment to retrieve secrets**

- Correct because the deployment process must have permission to access Key Vault.

- Access policies (or RBAC in newer versions) ensure that only authorized identities (such as the deployment service principal) can retrieve secrets securely.

**Option B. Define parameters in the template to accept Key Vault secret URIs**

- Correct because ARM/Bicep templates can reference Key Vault secrets by passing the secret URI as a parameter.

- This allows the template to dynamically pull the secret during deployment without exposing sensitive values directly in the template.

**Option C. Use the **reference** function in ARM templates to retrieve secrets from Key Vault**

- Correct because the reference() function is specifically designed to securely fetch values from Key Vault during deployment.

- This is the standard method for integrating Key Vault secrets into ARM/Bicep deployments.

### Incorrect

**Option D. Use the **list** function to get Key Vault secrets in ARM templates**

- Incorrect because the list function is used to retrieve collections of values (like keys or certificates), not secrets.

- For secrets, the correct approach is to use the reference() function.

###

---

### Question 7

Your organization is expanding its use of Azure Storage accounts. How can you utilize Azure Resource Manager templates to automate the deployment and configuration of storage accounts with consistent settings and best practices?

**Options:**

- **A.** Define templates with JSON ✅
- **B.** Configure using Azure Portal
- **C.** Use Azure CLI scripts
- **D.** Implement with ARM APIs

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Define templates with JSON** Explanation: This is correct. Azure Resource Manager (ARM) templates are written in **JSON** and allow you to declaratively define resources such as storage accounts. By using templates, you can automate deployments, enforce consistent configurations, and apply best practices across multiple environments. This ensures repeatability and reduces manual errors.

### Incorrect

**Option B. Configure using Azure Portal** Incorrect. While the Azure Portal allows manual configuration of storage accounts, it does not provide automation or consistency across multiple deployments. This option is not aligned with the requirement to use ARM templates.

**Option C. Use Azure CLI scripts** Incorrect. Azure CLI can automate deployments, but it is imperative rather than declarative. ARM templates are the recommended approach for consistent, repeatable deployments at scale. CLI scripts do not provide the same level of structure and governance.

**Option D. Implement with ARM APIs** Incorrect. ARM APIs allow programmatic interaction with Azure resources, but they are not the standard method for defining reusable templates. The question specifically asks about ARM templates, which are JSON-based, not direct API calls.

###

---

### Question 8

Your organization is using Azure Monitor to monitor the performance of its Azure SQL databases. Which performance metrics are relevant for monitoring Azure SQL databases, and how can you use Azure Monitor to track these metrics and identify potential performance issues?

**Options:**

- **A.** Memory usage ✅
- **B.** Blocked by firewall
- **C.** Number of failed logins
- **D.** Deadlocks ✅
- **E.** CPU utilization ✅
- **F.** Disk queue length ✅

**Correct answer:** A, D, E, F

**Explanation:**

### Correct

**Option A. Memory usage**

- Memory usage is a critical metric for SQL databases, as insufficient memory can lead to **slow query performance** and increased disk I/O.

- Azure Monitor can track memory consumption and trigger alerts when thresholds are exceeded.

- Correct.

**Option D. Deadlocks**

- Deadlocks occur when two or more transactions block each other, preventing progress.

- Monitoring deadlocks helps identify **query design or transaction management issues**.

- Azure Monitor can log deadlock events and help DBAs optimize queries.

- Correct.

**Option E. CPU utilization**

- High CPU usage indicates **resource contention** or inefficient queries.

- Azure Monitor provides CPU metrics to help identify workloads that need optimization or scaling.

- Correct.

**Option F. Disk queue length**

- Disk queue length measures how many I/O requests are waiting to be processed.

- A high queue length suggests **storage bottlenecks**.

- Azure Monitor can track this metric to ensure storage performance meets workload demand.

- Correct.

### Incorrect

**Option B. Blocked by firewall**

- Firewall blocks are a **connectivity/security issue**, not a performance metric.

- While important for access control, it does not measure database performance.

- Incorrect.

**Option C. Number of failed logins**

- Failed logins are a **security/audit metric**, not directly related to performance monitoring.

- Useful for detecting unauthorized access attempts, but not for performance tuning.

- Incorrect.

###

---

### Question 9

You are deploying a containerized application that requires a specific version of a programming language runtime. How can you specify the desired runtime version for your container in the deployment configuration?

**Options:**

- **A.** Use environment variables to set the runtime version
- **B.** Set the runtime version in the deployment YAML file
- **C.** Specify the runtime version in the Dockerfile ✅
- **D.** Include the runtime version in the container image name

**Correct answer:** C

**Explanation:**

The most effective way to specify the desired runtime version for your containerized application is to:

**Specify the runtime version in the Dockerfile.**

Here’s why:

**Direct control:** The Dockerfile is the blueprint for your container image. Specifying the runtime version directly in the Dockerfile ensures that the correct version is included when the image is built.

**Reproducibility:** When you build the image from the Dockerfile, the exact runtime version will be captured, making it easier to reproduce the environment in different deployments.

**Efficiency:** By including the runtime version in the Dockerfile, you avoid the need for additional configuration steps or environment variables.

Here’s a basic example of how to specify the runtime version in a Dockerfile for a Node.js application:

Dockerfile

FROM node:18.12.0-alpine3.16

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]

In this example, the FROM node:18.12.0-alpine3.16 line specifies that the base image should be Node.js version 18.12.0. This ensures that the correct runtime version is included in the final container image.

---

### Question 10

You are using Azure Blob Storage to store large media files. Which features can you leverage to optimize the delivery of these files to users globally, improving performance and reducing latency?

**Options:**

- **A.** Implement read-access geo-redundant storage (RA-GRS)
- **B.** Enable geo-redundant storage (GRS)
- **C.** Use Azure Content Delivery Network (CDN) ✅
- **D.** Configure Content Delivery Network (CDN) for Azure Storage ✅
- **E.** Use Azure Traffic Manager
- **F.** Use Azure Blob storage lifecycle management

**Correct answer:** C, D

**Explanation:**

**Use Azure Content Delivery Network (CDN):** A CDN distributes your content across multiple edge locations worldwide, caching files closer to users and reducing latency.

**Configure Content Delivery Network (CDN) for Azure Storage:** This specific configuration allows you to seamlessly integrate your Blob Storage content with the CDN, providing optimized delivery.

These two features, when combined, will significantly improve the performance and reduce latency for users accessing your media files from various locations around the world.

While RA-GRS and GRS are useful for data redundancy and disaster recovery, they do not directly address the issue of optimizing content delivery to users.

---

### Question 11

You are implementing Azure Backup to protect virtual machines and other Azure resources. How can you configure Azure Backup to create regular backups, define retention policies, and restore resources in the event of data loss or accidental deletion?

**Options:**

- **A.** Use Azure Site Recovery to back up and replicate virtual machines.
- **B.** Use Azure Storage redundancy options (LRS, ZRS, GRS) to ensure data redundancy and availability.
- **C.** Create backup policies that define backup schedules, retention periods, and instant restore options, and assign them to relevant resources. ✅
- **D.** Manually trigger backups for each resource whenever needed and store them indefinitely.

**Correct answer:** C

**Explanation:**

Azure Backup policies allow you to schedule backups, define retention for different types of recovery points, and enable instant restores for quick recovery in case of data loss or accidental deletion.

---

### Question 12

You have configured Azure Site Recovery for your Azure VMs. You want to test the failover process without impacting the production environment. Which Azure Site Recovery feature can you use to perform a test failover?

**Options:**

- **A.** Unplanned Failover
- **B.** Test Failover ✅
- **C.** Planned Failover

**Correct answer:** B

**Explanation:**

Test Failover is the only option that allows you to simulate a failover in a safe, isolated environment without impacting your production workloads.

---

### Question 13

You are implementing Azure Private Link for your Azure Storage accounts. How does Private Link enhance the security of your storage access compared to accessing it over the public internet?

**Options:**

- **A.** Provides a private endpoint ✅
- **B.** Increases bandwidth
- **C.** Uses public IP addresses
- **D.** Enforces TLS encryption

**Correct answer:** A

**Explanation:**

Azure Private Link enhances security by providing a private endpoint in your virtual network, ensuring data is accessed privately without exposure to the public internet.

---

### Question 14

You are tasked with designing a disaster recovery strategy for your Azure environment. How would you implement Azure Site Recovery to replicate virtual machines and ensure business continuity in the event of a regional outage?

**Options:**

- **A.** Use Azure Site Recovery to configure load balancing for virtual machines in the same region.
- **B.** Use Azure Site Recovery to migrate virtual machines between subscriptions without replication.
- **C.** Set up Azure Site Recovery to replicate virtual machines to a secondary region, create recovery plans, and test failover processes regularly. ✅
- **D.** Use Azure Site Recovery to back up virtual machines to Azure Blob Storage.

**Correct answer:** C

**Explanation:**

Azure Site Recovery is the primary Azure service for disaster recovery of virtual machines, enabling replication to a secondary region and orchestrated failover to ensure business continuity.

---

### Question 15

You are backing up an Azure VM that has multiple disks attached. You want to ensure that all disks are included in the backup. Which Azure backup configuration option allows you to include all disks in a single backup job?

**Options:**

- **A.** Differential Backup
- **B.** Disk Exclusion
- **C.** Incremental Backup
- **D.** Full Backup ✅

**Correct answer:** D

**Explanation:**

When backing up an Azure VM with multiple disks, a full backup ensures that all data across all disks is captured in one backup job. This simplifies the backup process and ensures data consistency during restores.

---

### Question 16

You are tasked with providing temporary, time-limited access to an Azure Blob Storage container for a third-party vendor. How would you achieve this securely while ensuring that access is automatically revoked after the specified time period?

**Options:**

- **A.** Grant the vendor contributor access to the storage account
- **B.** Generate a Shared Access Signature (SAS) with an expiry time ✅
- **C.** Share the storage account keys with the vendor
- **D.** Create a new storage account specifically for the vendor

**Correct answer:** B

**Explanation:**

Shared Access Signatures (SAS) are the most secure and granular way to provide temporary, time-limited access to specific storage resources. The expiry time ensures that access is automatically revoked, minimizing the risk of unauthorized access.

---

### Question 17

Your organization wants to monitor the availability and performance of its web applications from different geographic locations. Which Azure service can you use to simulate user traffic from various regions and generate reports on application performance and availability?

**Options:**

- **A.** Azure Monitor
- **B.** Azure Traffic Manager
- **C.** Azure Application Insights
- **D.** Azure Application Insights Availability Tests ✅

**Correct answer:** D

**Explanation:**

Azure Application Insights Availability Tests is specifically built for simulating user traffic from different regions and measuring application responsiveness.

---

### Question 18

You are backing up an Azure VM that has a high churn rate, with frequent changes to its data. Which Azure Backup feature can you use to optimize backup performance and reduce storage costs for this scenario?

**Options:**

- **A.** C. Offline seeding
- **B.** B. Incremental backup ✅
- **C.** D. Cross-region restore
- **D.** A. Geo-redundant backup

**Correct answer:** B

**Explanation:**

Incremental backups are ideal for VMs with high churn rates because they only back up the changes since the last backup, reducing storage requirements and backup times.

---

### Question 19

You are managing multiple ARM template deployments across different environments. You want to track the deployment history and view detailed information about each deployment, including the resources deployed and any errors that occurred. Which Azure feature or service can you use to access this deployment history and troubleshoot issues?

**Options:**

- **A.** Azure Monitor
- **B.** Azure Activity Log
- **C.** Azure Service Health
- **D.** Azure Resource Manager (ARM) deployment history ✅

**Correct answer:** D

**Explanation:**

The ARM deployment history feature in the Azure portal allows you to track deployments, view detailed information, and troubleshoot issues across different environments.

---

### Question 20

You are deploying an Azure virtual network using an ARM template. You need to define a subnet within the virtual network and specify its address prefix. Which property or attribute within the virtual network resource definition would you use to configure the subnet?

**Options:**

- **A.** addressPrefixes
- **B.** addressSpace
- **C.** networkSecurityGroup
- **D.** subnets ✅

**Correct answer:** D

**Explanation:**

The ‘subnets‘ property within the virtual network resource definition is used to configure subnets and their address prefixes.

---

### Question 21

Your company‘s compliance requirements mandate that you retain logs and metrics for a specific period. How can you configure retention policies in Azure Monitor to ensure that log data is stored for the required duration?

**Options:**

- **A.** Modify the Log Analytics workspace settings. ✅
- **B.** Use Azure Storage lifecycle management policies.
- **C.** Enable diagnostic settings on each Azure resource.
- **D.** Create an Azure Policy to enforce retention rules.

**Correct answer:** A

**Explanation:**

The Log Analytics workspace settings provide the most direct way to configure the retention period for your Azure Monitor logs.

---

### Question 22

You are configuring Azure Bastion to provide secure access to virtual machines in a private subnet. How would you set up Azure Bastion and connect to VMs without exposing them to the public internet?

**Options:**

- **A.** B. Deploy Azure Bastion in the same private subnet as the VMs and configure a public IP address for it.
- **B.** A. Deploy Azure Bastion in a public subnet and allow inbound RDP/SSH traffic from any source.
- **C.** C. Deploy Azure Bastion in a dedicated subnet (AzureBastionSubnet) with a public IP address. Configure NSG rules to allow access to the Bastion host and restrict RDP/SSH traffic to the private subnet. ✅
- **D.** D. Connect to VMs directly using their private IP addresses from the internet.

**Correct answer:** C

**Explanation:**

Azure Bastion provides secure RDP/SSH access through a web browser. It eliminates the need to expose VMs to the internet, enhancing security.

---

### Question 23

You are troubleshooting network connectivity issues with an Azure VM. Which Azure tools or features can you use to diagnose network problems, trace routes, and verify network settings for the VM?

**Options:**

- **A.** Network Watcher ✅
- **B.** Traffic Manager
- **C.** Application Gateway
- **D.** VPN Gateway

**Correct answer:** A

**Explanation:**

Network Watcher provides a comprehensive set of tools for diagnosing and resolving network issues in Azure VMs.

---

### Question 24

You are implementing Azure Policy to control resource deployment and configurations. How can you create custom policy definitions using Azure Policy language to enforce specific rules and standards in your Azure environment?

**Options:**

- **A.** Use PowerShell cmdlets to create custom policy definitions with complex logic.
- **B.** Use Azure Blueprints to create and apply custom policy definitions across multiple subscriptions.
- **C.** Use JSON to define custom policy rules and conditions, specifying allowed or denied resource configurations. ✅
- **D.** Use Azure Resource Manager templates to define custom policy definitions.

**Correct answer:** C

**Explanation:**

Azure Policy definitions are written in JSON, allowing you to define custom rules that enforce specific configurations and constraints on Azure resources.

---

### Question 25

Your company‘s security policy mandates the use of Web Application Firewall (WAF) to protect web applications from common vulnerabilities and attacks. How can you integrate Azure WAF with your App Service to enhance its security posture?

**Options:**

- **A.** Azure Application Gateway with WAF ✅
- **B.** Azure Front Door with WAF
- **C.** Third-party WAF solution integrated with App Service
- **D.** Directly through App Service‘s WAF integration

**Correct answer:** A

**Explanation:**

The most comprehensive and recommended way to integrate Azure WAF with App Service is through Azure Application Gateway. It offers a wide range of features and deep integration for robust application security.

---

### Question 26

You want to grant a user read-only access to Azure resources in a specific resource group. Which built-in RBAC role would you assign to the user?

**Options:**

- **A.** User Access Administrator
- **B.** Contributor
- **C.** Reader ✅
- **D.** Owner

**Correct answer:** C

**Explanation:**

The Reader role in Azure RBAC is designed specifically to provide read-only access to Azure resources.

---

### Question 27

**Your company currently has a Virtual Network defined in Azure. The Virtual Network has a default subnet that contains 2 Virtual Machines named **demovm** and **demovm1**. There is a requirement to inspect all traffic between the Virtual Machines. Can this be achieved?**

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because Azure provides the ability to inspect traffic between VMs using **Network Security Group (NSG) flow logs**, **Azure Network Watcher packet capture**, or by deploying a **Network Virtual Appliance (NVA)** such as a firewall.

- These tools allow administrators to monitor and inspect traffic flowing between VMs in the same subnet.

### Incorrect

**Option B. No**

- Incorrect because it is indeed possible to inspect traffic between VMs in Azure.

- Azure networking features explicitly support traffic monitoring and inspection, so answering “No” would be wrong.

---

### Question 28

You have Azure subscription that includes data in following locations:

You plan to export data by using Azure import/export job named Export1.

You need to identify the data that can be exported by using Export1.

Which data should you identify?

**Options:**

- **A.** DB1
- **B.** container1 ✅
- **C.** Share1
- **D.** Table1

**Correct answer:** B

**Explanation:**

### Correct

**Option B. container1**

- This is correct because **Export1** refers to the **Azure Import/Export service**, which supports exporting data from **Azure Blob storage containers**.

- You can use this service to securely transfer large amounts of data out of Azure storage by shipping disks.

- Therefore, **container1** (Blob storage container) is the valid export target.

### Incorrect

**Option A. DB1**

- Incorrect because Azure SQL Database (DB1) cannot be exported using the Import/Export service.

- Databases have their own export mechanisms (such as BACPAC files), not Export1.

**Option C. Share1**

- Incorrect because Azure File shares are not supported by the Import/Export service for export.

- File shares require different migration tools (like AzCopy or Azure File Sync).

**Option D. Table1**

- Incorrect because Azure Table storage is not supported by the Import/Export service.

- Table data must be exported using APIs or scripts, not Export1.

---

### Question 29

You plan to automate the deployment of a virtual machine scale set that uses the Windows Server 2016 Datacenter image.

You need to ensure that when the scale set virtual machines are provisioned, they have web server components installed.

Which two actions should you perform?

**Options:**

- **A.** Upload a configuration script ✅
- **B.** Create an automation account
- **C.** Create an Azure policy
- **D.** Modify the extension Profile section of the Azure Resource Manager template ✅
- **E.** Create a new virtual scale set in the Azure portal

**Correct answer:** A, D

**Explanation:**

The two actions you should perform to automate deployment of a virtual machine scale set with web server components are:

**Modify the extensionProfile section of the Azure Resource Manager template (ARM template):** This section allows you to define extensions that will be automatically installed on the VMs during deployment. You can specify a web server extension in this section, which will install the desired web server components on the provisioned VMs.

**Upload a configuration script (optional):** While not strictly necessary, you can upload a configuration script to the Azure storage account and reference it in the extension definition. This script can be used to customize the installation process or configure specific aspects of the web server components.

Here’s why the other options are not required:

**Create an automation account:** While Azure Automation can be used for deployment automation, it’s not strictly necessary in this scenario. You can directly utilize the ARM template with the extension definition for a simpler approach.

**Create an Azure policy:** Azure policies are used to enforce specific configurations or rules. While you could create a policy to enforce installing web server components, it’s less flexible compared to directly defining them in the ARM template.

**Create a new virtual scale set in the Azure portal:** This might be the initial step for setting up the deployment, but it’s not an action for automation. You would typically use the ARM template for automated deployments.

Therefore, modifying the ARM template with an extension definition and optionally uploading a configuration script are the most suitable approaches for automating the deployment of a virtual machine scale set with web server components.

---

### Question 30

A company has an Azure subscription. They want to transfer around 6 TB of data to the subscription. They plan to use the Azure Import/Export service. Which of the following can they use as the destination for the imported data?

**Options:**

- **A.** A. Azure Data Lake Storage
- **B.** B. Azure SQL Database
- **C.** C. Azure File Sync Storage
- **D.** D. Azure Blob storage ✅

**Correct answer:** D

**Explanation:**

When transferring data to an Azure storage account, you can transfer data to Azure blob storage or Azure file storage.

The Microsoft documentation mentions the following

Since this is clear from the Microsoft documentation, all other options are incorrect

For more information on the Import Export service, please visit the following URL

https://docs.microsoft.com/en-us/azure/storage/common/storage-import-export-service

---

### Question 31

A company has setup an Azure subscription. They have setup a storage account and are currently using the BLOB service. They want to assign permissions to 3 user groups.

GroupA – This group should have the ability to manage the storage account

GroupB – This group should be able to manage containers within a storage account

GroupC – This group should be given full access to Azure Storage blob containers and data, including assigning POSIX access control

You need to assign the relevant Role Based Access Control ensuring the privilege of least access.

Which of the following would you assign to GroupA?

**Options:**

- **A.** A. Owner
- **B.** B. Contributor
- **C.** C. Storage Account Contributor ✅
- **D.** D. Storage Blob Data Contributor
- **E.** E. Storage Blob Data Owner

**Correct answer:** C

**Explanation:**

This can be accomplished with the Storage Account Contributor. The Microsoft documentation

mentions the following

Options A and B are incorrect since these would provide more permissions than required

Options D and E are incorrect since these roles don’t have the required permissions

For more information on built-in roles, please visit the below URL

https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

---

### Question 32

**Your company has an Azure account and an Azure subscription. They have created a Virtual Network named **skillcertlabs-net**. The following users have been set up with roles. Which users can manage the virtual network?**

**Options:**

- **A.** A. skillcertlabs-usr1 only
- **B.** B. skillcertlabs-usr2 only
- **C.** C. skillcertlabs-usr3 only
- **D.** D. skillcertlabs-usr1 and skillcertlabs-usr2 only
- **E.** E. skillcertlabs-usr1 and skillcertlabs-usr3 only ✅
- **F.** F. skillcertlabs-usr2 and skillcertlabs-usr3 only

**Correct answer:** E

**Explanation:**

### Correct

**Option E. skillcertlabs‑usr1 and skillcertlabs‑usr3 only**

- Correct because:

- **skillcertlabs‑usr1** is assigned the **Owner** role, which grants full permissions to manage all resources, including virtual networks.

- **skillcertlabs‑usr3** is assigned the **Contributor** role, which allows creating, managing, and modifying resources (including resizing, configuring, and deleting the virtual network).

- Together, these two users have the necessary permissions to manage the virtual network.

### Incorrect

**Option A. skillcertlabs‑usr1 only**

- Incorrect because while User1 (Owner) can manage the VNet, this option ignores User3 (Contributor), who also has sufficient permissions.

**Option B. skillcertlabs‑usr2 only**

- Incorrect because User2 has the **Reader** role, which only allows viewing resources. They cannot make changes to the virtual network.

**Option C. skillcertlabs‑usr3 only**

- Incorrect because while User3 (Contributor) can manage the VNet, this option ignores User1 (Owner), who also has full permissions.

**Option D. skillcertlabs‑usr1 and skillcertlabs‑usr2 only**

- Incorrect because User2 (Reader) cannot manage resources. Including them here makes the option invalid.

**Option F. skillcertlabs‑usr2 and skillcertlabs‑usr3 only**

- Incorrect because User2 (Reader) cannot manage the VNet. Only User3 has Contributor rights.

---

### Question 33

A company is planning on using the Azure Import/Export service to move data out of their Azure Storage account. Which of the following service could be used when defining the Azure Export job?

**Options:**

- **A.** A. BLOB storage ✅
- **B.** B. File storage
- **C.** C. Queue storage
- **D.** D. Table storage

**Correct answer:** A

**Explanation:**

Only the BLOB service is supported with the Export job feature. This is also given in the Microsoft documentation

Since this is clearly mentioned, all other options are incorrect

For more information on Azure import/export requirements, please visit the below URL

https://docs.microsoft.com/en-us/azure/storage/common/storage-import-export-requirements

---

### Question 34

A company is planning on using Azure for the various services they offer. They want to ensure that they can bill each department for the resources they consume. They decide to use Azure resource tags to separate the bills department wise.

Would this fulfil the requirement?

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

Yes, you can use resource tags to organize your Azure resources and also apply billing techniques department wise. The Microsoft documentation mentions the following

For more information on tagging resources, please visit the below URL

https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-using-tags

---

### Question 35

A company is planning on using Azure for the various services they offer. They want to ensure that they can bill each department for the resources they consume. They decide to use Azure role-based access control to separate the bills department wise.

Would this fulfil the requirement?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

This is used to control access to resources and can’t be used for billing purposes

For more information on Role based access control, please visit the below URL

https://docs.microsoft.com/en-us/azure/role-based-access-control/overview

---

### Question 36

A company currently has a set of Azure virtual machines. They want to ensure that their IT administrative team is alerted if any of the virtual machines are shut down. They decide to create alerts in the Azure portal. Does this meet the goal?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because simply creating alerts in the Azure portal does not automatically notify administrators when a VM is shut down.

- Alerts must be configured against **metrics or activity logs** (for example, monitoring the PowerState of a VM or using Azure Monitor Activity Log alerts).

- Without properly defining the alert rules and conditions, just “creating alerts” is insufficient to meet the requirement.

### Incorrect

**Option A. Yes**

- Incorrect because this assumes that creating alerts alone will meet the goal.

- In reality, alerts must be tied to specific signals (metrics/logs) and notification actions (like email, SMS, or webhook).

- Without this configuration, administrators will not be notified when VMs shut down.

---

### Question 37

A company current has a set of Azure virtual machines. They want to ensure that their IT administrative team is alerted if any of the virtual machines are shutdown.

They decide to create alerts in the Service Health service

Would this fulfil the requirement?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

**Correct**

- **Option B. No**

- Correct because simply “creating alerts” in the Azure portal does not automatically notify administrators when a VM shuts down.

- Alerts must be configured against **specific metrics or activity logs** (for example, monitoring the PowerState of a VM or using Azure Monitor Activity Log alerts).

- Without defining the alert rules and notification actions (email, SMS, webhook, etc.), administrators will not be alerted.

**Incorrect**

- **Option A. Yes**

- Incorrect because this assumes that creating alerts alone is sufficient.

- In reality, alerts must be tied to **signals** (metrics/logs) and configured with **action groups** to send notifications.

- Without this configuration, the goal of alerting administrators when VMs shut down is not achieved.

---

### Question 38

A company has an Azure subscription named skillcertlabstaging. They also have a resource group named skillcertlabs-rg. In the resource group they have created an internal load balancer named “skillcertlab-internal” and a public load balancer named “skillcertlab-public”. They want to give a user named “skillcertlabusr” permissions to configure both load balancers. The solution must follow the principle of least privilege.

Which role would you assign to the user to allow the addition of a health probe to the load balancer “skillcertlab-public”?

**Options:**

- **A.** A. Contributor role on skillcertlab-internal
- **B.** B. Network Contributor role on skillcertlab-internal
- **C.** C. Network Contributor role on skillcertlabs-rg ✅
- **D.** D. Owner role on skillcertlab-internal

**Correct answer:** C

**Explanation:**

To add a health probe, the user needs to have access to the IP address of virtual machine. And for this reason, the user also needs to have permission to read the details of the virtual machine.

All of the other options are incorrect since they don’t provide the relevant access to read the details of the virtual machine resource.

For more information on Role based access control, please visit the following URL

https://docs.microsoft.com/en-us/azure/role-based-access-control/overview

---

### Question 39

A company current has a set of Azure virtual machines. They want to ensure that their IT administrative team is alerted if any of the virtual machines are shutdown.

They decide to create alerts based on Activity Logs in Azure Monitor.

Would this fulfil the requirement?

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

The Activity Log service is used to record all control plane activities. An example of events recorded are shown below

You can then create alerts based off the Activity logs.

For more information on Azure activity logs, please visit the below URL

https://docs.microsoft.com/en-us/azure/azure-monitor/platform/activity-logs-overview

---

### Question 40

Your company has an Azure virtual machine that runs Windows Server 2016. You have to create an alert in Azure whenever two error events are logged to the System log on the virtual machine within an hour.

You decide to create a Log Analytics workspace and configure the data settings. You then setup the virtual machine as a data source. You then create an alert in Azure Monitor and specify the Log Analytics as the source.

Would this fulfil the requirement?

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- This is correct because Azure Monitor can collect **Windows Event Logs** from virtual machines using the **Log Analytics agent**.

- Once the events are ingested into **Log Analytics**, you can create a **custom Kusto query** to detect when two error events occur within an hour.

- Then, you configure an **Azure Monitor alert rule** based on that query.

- This meets the requirement of generating an alert when the specified condition is met.

### Incorrect

**Option B. No**

- Incorrect because Azure Monitor does support this functionality.

- It is possible to configure alerts based on event log data, including conditions such as multiple error events within a defined time window.

- Saying “No” would ignore the capabilities of Azure Monitor and Log Analytics.

---

### Question 41

**Your company has an Azure subscription that contains a Log Analytics workspace named ****stagingworkspace****. You have to get the error events from the table named ****Event****. Which of the following query would you use?**

**Options:**

- **A.** A. Get-Event Event | where ($_.EventType -eq “error”)
- **B.** B. Get-Event Event | where ($_.EventType == “error”)
- **C.** C. select * from Event where EventType==”error”
- **D.** D. search in (Event) “error” ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. **search in (Event) "error" Correct because this is the proper **Kusto Query Language (KQL)** syntax used in Azure Log Analytics. The search in (Event) statement queries the Event table, and "error" filters for rows containing the keyword error. This matches the requirement to retrieve error events from the Event table.

### Incorrect

**Option A. **Get-Event Event | where ($_.EventType -eq “error”) Incorrect because this is **PowerShell syntax**, not KQL. Log Analytics requires KQL queries, not PowerShell commands.

**Option B. **Get-Event Event | where ($_.EventType == “error”) Incorrect for the same reason as Option A — it uses PowerShell syntax, not KQL.

**Option C. **select * from Event where EventType==”error” Incorrect because this is **SQL syntax**, not KQL. Azure Log Analytics does not support SQL-style queries.

---

### Question 42

**A company has set up an Azure subscription and a tenant. They want to ensure that only Virtual Machines of a particular SKU size can be launched in their Azure account.** **They decide to implement Azure Locks.**

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because **Azure Locks** (Read‑only or Delete locks) are designed to prevent accidental deletion or modification of resources.

- They do **not** enforce resource type or SKU restrictions.

- To restrict VM sizes, the company should use **Azure Policy**, which allows administrators to define rules such as “only allow VM sizes = Standard_DS2_v2.”

- Therefore, the answer is **No** — Azure Locks cannot achieve this requirement.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” implies that Azure Locks can enforce SKU restrictions.

- This is not true; locks only prevent deletion or modification, not enforce compliance with resource configurations.

- The exam trap here is confusing **Azure Locks** with **Azure Policy**.

---

### Question 43

A company currently has an on-premise data center. The data center has 2 VPN devices. They also have setup a Virtual Network in Azure. They need to setup a site-to-site VPN connection. It needs to be ensured that if a single instance of an Azure gateway fails, or if a single on-premise VPN device fails, then the failure will not cause an interruption longer than 2 minutes.

Based on the requirement what is the minimum number of Local network gateways that would be required to be setup in Azure?

**Options:**

- **A.** A. 1
- **B.** B. 2 ✅
- **C.** C. 3
- **D.** D. 4

**Correct answer:** B

**Explanation:**

An example of high redundancy for VPN gateways is also given in the Microsoft documentation as shown below

Here you would need 2 local gateways, one for each VPN device.

For more information on VPN gateway high availability, please visit the below URL

https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-highlyavailable

---

### Question 44

A company has setup an Azure subscription. They have setup a storage account and are currently using the BLOB service. They want to assign permissions to 3 user groups.

GroupA – This group should have the ability to manage the storage account

GroupB – This group should be able to manage containers within a storage account

GroupC – This group should be given full access to Azure Storage blob containers and data, including assigning POSIX access control

You need to assign the relevant Role Based Access Control ensuring the privilege of least access.

Which of the following would you assign to GroupC?

**Options:**

- **A.** A. Owner
- **B.** B. Contributor
- **C.** C. Storage Account Contributor
- **D.** D. Storage Blob Data Contributor
- **E.** E. Storage Blob Data Owner ✅

**Correct answer:** E

**Explanation:**

**For GroupC, the most appropriate RBAC role with the principle of least privilege would be:**

**E. Storage Blob Data Owner**

Here’s why:

**GroupC needs full access to blobs:** This includes read, write, delete, and manage permissions.

**POSIX access control:** The “Data Owner” role provides the highest level of control, including the ability to manage POSIX access control lists (ACLs) directly on the blobs. This allows for fine-grained control over who can access specific blobs and with what permissions.

**Why other options are less suitable:**

**A. Owner:** This role grants the highest level of permissions on the entire subscription, which is excessive for GroupC’s needs.

**B. Contributor:** This role provides broad permissions on the subscription, including the ability to manage virtual machines, networks, and other resources, which is not required by GroupC.

**C. Storage Account Contributor:** This role grants permissions to manage the entire storage account, including creating and deleting containers, which is not the specific requirement for GroupC.

**D. Storage Blob Data Contributor:** This role provides read, write, and delete permissions on blobs, but lacks the ability to manage POSIX ACLs, which is a key requirement for GroupC.

By assigning the “Storage Blob Data Owner” role to GroupC, you ensure they have the necessary permissions to work with blob data while minimizing the risk of unintended actions or security breaches.

https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

---

### Question 45

A company has setup an Azure subscription. They have around 50 virtual machines running as part of the subscription. They need to identity virtual machines that are underutilized and see if they could instead use reserved pricing to reduce the overall expenditure for the virtual machines.

You decide to use Azure Advisor to provide insights into looking at the prospect of reduction of costs?

Would this fulfil the requirement?

**Options:**

- **A.** A.Yes ✅
- **B.** B.No

**Correct answer:** A

**Explanation:**

Yes, this can be accomplished with Azure Advisor. The Microsoft documentation mentions the following

For more information on Azure Advisor cost recommendations, please visit the below URL

https://docs.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations

---

### Question 46

**Your team is planning on creating an Internal Load Balancer. This load balancer will be used to distribute traffic to Azure Virtual Machines. You need to ensure that user requests are always mapped to the same VM. Which setting should you configure?**

**Options:**

- **A.** A. Set Session Persistence to None
- **B.** B. Set Session Persistence to Client IP ✅
- **C.** C. Create a health probe on port 80
- **D.** D. Enable Floating IP

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Set Session Persistence to Client IP**

- Correct because **Session Persistence (a.k.a. “affinity”)** ensures that requests from the same client IP are consistently directed to the same backend VM.

- This is required when applications need **stateful connections** (e.g., session data stored locally on the VM).

- Setting persistence to **Client IP** guarantees that user requests are always mapped to the same VM.

### Incorrect

**Option A. Set Session Persistence to None**

- Incorrect because with persistence set to None, requests are distributed randomly across backend VMs.

- This breaks session affinity and does not guarantee that a user request will always map to the same VM.

**Option C. Create a health probe on port 80**

- Incorrect because health probes are used to determine VM availability.

- While necessary for load balancer functionality, they do not control session persistence or guarantee mapping to the same VM.

**Option D. Enable Floating IP**

- Incorrect because Floating IP is used for **SQL Always On availability groups** or scenarios requiring direct VM IP mapping.

- It does not enforce session persistence for user requests.

###

---

### Question 47

A company needs to setup a storage account named skillcertprotore in Azure. Below are the key requirements for the storage account

– Be able to store virtual disk files for Azure virtual machines

– Costs of accessing the files needs to be minimized

– Replication costs should be minimized.

Which of the following would you choose as the storage account type?

**Options:**

- **A.** A. General purpose v1
- **B.** B. General purpose v2 ✅
- **C.** C. Block blob storage
- **D.** D. Blob storage

**Correct answer:** B

**Explanation:**

If you look at the Microsoft documentation, you can see that disk files are supported in the storage type of General purpose v2 and General purpose v1. But General purpose v1 is now a legacy storage account type and General purpose v2 is preferred for storage purposes.

For more information on storage accounts, please visit the below URL

For more information on storage accounts, please visit the below URL

https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview

---

### Question 48

A company has setup an Azure subscription and a tenant. They want to ensure that only Virtual Machines of a particular SKU size can be launched in their Azure account.

They decide to implement Azure policies

Does this fulfil the requirement?

**Options:**

- **A.** A.Yes ✅
- **B.** B.No

**Correct answer:** A

**Explanation:**

Yes, this can be done with Azure policies. There is also already an in-built policy which can implement this policy as shown below

For more information on an example on this, please visit the below URL

https://docs.microsoft.com/en-us/azure/governance/policy/samples/allowed-skus-storage

---

### Question 49

A company is planning on deploying 15 virtual machines using Azure Resource Manager templates. All of the virtual machines should run the latest version of Windows Server 2016.

You have to complete the below storageProfile section of the template

Which of the following would go into Slot1?

**Options:**

- **A.** A. "WindowsClient"
- **B.** B. "WindowsServer" ✅
- **C.** C. "2016-Datacenter"
- **D.** D. "Windows-Hub"

**Correct answer:** B

**Explanation:**

If you look at the Export Template section for a resource group that has a Windows Server 2016 Virtual machine deployed, you can see that values that go into the offer and Sku section

Since this is clear from the implementation, all other options are incorrect

For more information on Resource Manager templates, please visit the below URL

https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-authoring-templates

---

### Question 50

A company is planning on deploying 15 virtual machines using Azure Resource Manager templates. All of the virtual machines should run the latest version of Windows Server 2016.

You have to complete the below storageProfile section of the template

Which of the following would go into Slot2?

**Options:**

- **A.** A. "WindowsClient"
- **B.** B. "WindowsServer"
- **C.** C. "2016-Datacenter" ✅
- **D.** D. "Windows-Hub"

**Correct answer:** C

**Explanation:**

If you look at the Export Template section for a resource group that has a Windows Server 2016 Virtual machine deployed, you can see that values that go into the offer and Sku section

Since this is clear from the implementation, all other options are incorrect

For more information on Resource Manager templates, please visit the below URL

https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-authoring-templates

---

### Question 51

A company needs to setup a storage account named skillcertprotore in Azure. Below are the key requirements for the storage account

– Be able to store virtual disk files for Azure virtual machines

– Costs of accessing the files needs to be minimized

– Replication costs should be minimized.

Which of the following would you choose as the replication strategy?

**Options:**

- **A.** A. Locally redundant storage (LRS) ✅
- **B.** B. Zone-redundant storage (ZRS)
- **C.** C. Geo-redundant storage (GRS)
- **D.** D. Read-access geo-redundant storage (RA-GRS)

**Correct answer:** A

**Explanation:**

**A. Locally redundant storage (LRS)**

**Rationale:**

**Virtual Disk Storage:** LRS is suitable for storing virtual disk files for Azure VMs.

**Cost Minimization:** LRS offers the most cost-effective storage option among the choices.

**Replication Cost Minimization:** LRS replicates data within a single storage region, minimizing replication costs.

While ZRS, GRS, and RA-GRS offer higher levels of redundancy and durability, they also come with higher costs. For the given requirements, LRS provides an optimal balance of cost and redundancy.

---

### Question 52

You need to deploy two Azure virtual machines named VM1 and VM2 based on the Windows server 2016 image. The deployment must meet the following requirements:

Provide a Service Level Agreement (SLA) of 99.95 percent availability.

Use managed disks

You propose a solution to create an availability set for the requirement.

Would the solution meet the goal?

**Options:**

- **A.** A.Yes ✅
- **B.** B.No

**Correct answer:** A

**Explanation:**

The Microsoft documentation mentions the following

For more information on availability sets, please visit the below URL

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/manage-availability

---

### Question 53

A company has a storage account named skillcertprotore1 defined as part of their Azure subscription. It needs to be ensured that only IP addresses within the range of 15.16.7.0/24 have access to the storage account. Which of the following powershell command could be used for this purpose?

**Options:**

- **A.** A. Add-AzStorageAccountNetworkRule ✅
- **B.** B. Set-AzStorageAccountNetwork
- **C.** C. Update-AzStorage
- **D.** D. Set-AzRmStorageAccountNetwork

**Correct answer:** A

**Explanation:**

An example of this is given in the Microsoft documentation. The Add-AzStorageAccountNetworkRule is used to add an IP address or an IP address range to have access to the storage account.

Since this is clearly given in the documentation, all other options are incorrect

For more information on network security for the storage account, one can go to the following link

https://docs.microsoft.com/en-us/azure/storage/common/storage-network-security

---

### Question 54

You need to deploy two Azure virtual machines named VM1 and VM2 based on the Windows server 2016. The deployment must meet the following requirements:

– Provide a Service Level Agreement (SLA) of 99.95 percent availability.

– Use managed disks

You propose a solution to create a Traffic Manager for the requirement.

Would the solution meet the goal?

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

Azure Traffic manager is used for traffic distribution based on DNS queries. For achieving high availability, you need to use Availability sets.

For more information on Azure Traffic Manager, please visit the below URL

https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-overview

---

### Question 55

Your company wants to deploy a blogging solution on Azure. Below are the key deployment requirements

– Ability to connect to Azure BLOB storage as the origin

– Ensure that users across the world get the same performance when they access the blogging site

You provide a solution of using the Azure File Sync service. Does this solution meet the requirement?

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

The Azure File Sync service is used as a file distribution service. The ideal solution to use here is the Content Delivery service

For more information on the File Sync Service, one can go to the below URL

https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-planning

---

### Question 56

**Your company has an Azure account and a subscription. The subscription contains the virtual networks in the following table.** **Can the configuration meet the requirement?**

The subscription also contains the virtual machines in the following table

The firewalls on all the virtual machines are configured to allow all ICMP traffic

You add the peerings in the following table.

VM2 can ping VM1

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because the configuration described in the question (VNet address space and subnet ranges) does **not** support the requirement as stated.

- In AZ‑104, when asked about overlapping or invalid subnet/address space configurations, the answer is typically **No** if the ranges are not properly aligned or if the requirement cannot be met with the given setup.

- Azure requires valid, non‑overlapping address spaces and correctly defined subnets for VNets. If the table shows conflicting or invalid ranges, the requirement cannot be satisfied.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” implies that the current VNet and subnet configuration is valid and meets the requirement.

- This is not true if the address ranges overlap or are misconfigured.

- The exam trap here is assuming that any defined subnet/address space is automatically valid without checking for conflicts.

---

### Question 57

A team needs to deploy a set of Windows virtual machines to Azure. Below are the key requirements when it comes to the storage needs for the data disks attached to the virtual machines

– Should have the ability to store at least 10TB of data

– Have the ability to support a maximum IOPS of 10,000

– Minimize storage cost

Which of the following would you choose as the disk type, if you were considering using managed disks for the virtual machines?

**Options:**

- **A.** A. Standard HDD
- **B.** B. Standard SSD
- **C.** C. Premium SSD ✅
- **D.** D. Primary SSD

**Correct answer:** C

**Explanation:**

Now even though Premium SSD is a costly option, you still need to use that disk type if you need to fulfil all the requirements. Premium SSD has the capability to support an IOPS up to 20,000. The Microsoft documentation mentions the aspects of the different types of disks

Since this is clearly given in the documentation, all other options are incorrect

For more information on disks types of Windows, one can go to the following link

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/disks-types

---
