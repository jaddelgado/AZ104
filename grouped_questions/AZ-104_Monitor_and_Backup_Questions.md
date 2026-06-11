# AZ-104 Practice Questions: Monitor and Back Up Azure Resources

This document contains a curated subset of 244 questions extracted from the main practice set, specifically focusing on **Azure Monitor, Diagnostics, and Recovery** (Recovery Services Vaults, Backup Policies, Log Analytics, Kusto Queries, and Network Watcher tools).

---

### Question 6

You plan to use Azure Network Watcher to perform the following tasks:

Task1: Identify a security rule that prevents a network packet from reaching an Azure virtual machine.

Task2: Validate outbound connectivity from an Azure virtual machine to an external host.

Which feature should you use for task2?

**Options:**

- **A.** Connection Troubleshoot ✅
- **B.** Next hop
- **C.** NSG flow logs
- **D.** Traffic Analytics

**Correct answer:** A

**Explanation:**

The connection troubleshoot capability enables you to test a connection between a VM and another VM, an FQDN, a URI, or an IPv4 address. The test returns similar information returned when using the connection monitor capability, but tests the connection at a point in time, rather than monitoring it over time, as connection monitor does

https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview

INCORRECT ANSWERS:

Next hop — Next hop helps you determine if traffic is being directed to the intended destination, or whether the traffic is being sent nowhere.

NSG flow logs — NSG flow logs is a feature of Azure Network Watcher that allows you to log information about IP traffic flowing through an NSG.

Traffic Analytics – It provides visibility into user and application activity in cloud networks.

---

### Question 7

You download an Azure Resource Manager template based on an existing virtual machine. The template will be used to deploy 100 virtual machines.

You need to modify the template to reference an administrative password. You must prevent the password from being stored in plain text.

What should you create to store the password?

**Options:**

- **A.** an Azure Key Vault and an access policy ✅
- **B.** an Azure Storage account and an access policy
- **C.** a Recovery Services vault and a backup policy
- **D.** Azure Active Directory (AD) Identity Protection and an Azure policy

**Correct answer:** A

**Explanation:**

When you create a virtual machine (VM). You need to provide the VM administrator username and password. Instead of providing the password, you can pre-store the password in an Azure key vault and then customize the template to retrieve the password from the key vault during the deployment.

https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-tutorial-use-key-vault

INCORRECT ANSWERS:

an Azure Storage account and an access policy – Storage account is used to store the blobs. Not recommended to store sensitive data like passwords.

a Recovery Services vault and a backup policy – Recovery services vault is to store backups.

Azure Active Directory (AD) Identity Protection and an Azure policy – Identity protection is to detect and investigate identity based risks.

---

### Question 12

You have an Azure subscription named Subscription1 that contains a virtual machine named VM1.

You create an Azure key vault named KeyVault1. You need to use KeyVault1 to enable Azure Disk Encryption on VM1.

The solution must support backing up VM1 by using Azure Backup.

Which key vault settings should you configure?

**Options:**

- **A.** Access policies ✅
- **B.** Secrets
- **C.** Keys
- **D.** Locks

**Correct answer:** A

**Explanation:**

The Azure platform needs access to the encryption keys or secrets in your key vault to make them available to the VM for booting and decrypting the volumes.

If you did not enable your key vault for disk encryption, deployment, or template deployment at the time of creation, you must update its advanced access policies.

https://docs.microsoft.com/en-us/azure//virtual-machines/windows/disk-encryption-key-vault#set-key-vault-advanced-access-policies

INCORRECT ANSWERS:

Secrets – It is to create or edit secrets

Keys – It is to create or edit keys

Locks – It is to prevent deletion of resources in Azure.

---

### Question 16

You have two Azure virtual networks named VNet1 and VNet2. VNet1 contains an Azure virtual machine named VM1. VNet2 contains an Azure virtual machine named VM2.

VM1 hosts a frontend application that connects to VM2 to retrieve data.

Users report that the frontend application is slower than usual.

You need to view the average round-trip time (RTT) of the packets from VM1 to VM2.

Which Azure Network Watcher feature should you use?

**Options:**

- **A.** IP flow verify
- **B.** Connection troubleshoot
- **C.** Connection monitor ✅
- **D.** NSG flow logs

**Correct answer:** C

**Explanation:**

Connection Monitor provides you RTT values on a per-minute granularity. The connection monitor capability monitors communication at a regular interval and informs you of reachability, latency, and network topology changes between the VM and the endpoint.

https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview#monitoring

INCORRECT ANSWERS:

IP flow verify — IP flow verify checks if a packet is allowed or denied to or from a virtual machine.

Connection troubleshoot — Enable you to troubleshoot network performance and connectivity issues in Azure

NSG flow logs — allows you to log information about IP traffic flowing through an NSG.

---

### Question 24

You have an Azure subscription named **Subscription1** that contains the resources shown in the table. In **storage1**, you create a blob container named **blob1** and a file share named **share1**. **Which resources can be backed up to Vault1?**

In storage1, you create a blob container named blob1 and a file share named share1.

Which resources can be backed up to Vault1?

**Options:**

- **A.** VM1 only ✅
- **B.** VM1 and share1 only
- **C.** VM1 and SQL1 only
- **D.** VM1, storage1 and SQL1 only
- **E.** VM1, blob1, share1 and SQL1

**Correct answer:** A

**Explanation:**

### **Correct**

- **Option A. VM1 only**

- Correct: Azure Backup supports backing up **Azure VMs** directly to a Recovery Services vault.

- In this scenario, **Vault1** can back up **VM1**.

- Blob containers (blob1) and SQL databases (SQL1) cannot be backed up directly to a Recovery Services vault. File shares (share1) can be backed up, but only to a **Backup vault**, not a Recovery Services vault.

### **Incorrect**

- **Option B. VM1 and share1 only**

- Incorrect: File shares can be backed up, but only to a **Backup vault**, not to a Recovery Services vault.

- **Option C. VM1 and SQL1 only**

- Incorrect: SQL databases in Azure are protected differently (via Azure SQL built‑in backup or long‑term retention). They are not backed up to Recovery Services vaults in this way.

- **Option D. VM1, storage1 and SQL1 only**

- Incorrect: Storage accounts themselves are not backed up to Recovery Services vaults. SQL1 also cannot be backed up here.

- **Option E. VM1, blob1, share1 and SQL1**

- Incorrect: Blob containers and SQL databases are not supported in Recovery Services vault backups. File shares require a Backup vault, not Recovery Services vault.

---

### Question 33

**You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates.** **You need to view the date and time when the resources were created in RG1.** **Solution: From the Subscriptions blade, you select the subscription, and then click Programmatic deployment.** **Does this meet the goal?**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because selecting **Programmatic deployment** from the Subscriptions blade shows information about **deployment scripts and automation**, not the creation timestamps of individual resources.

- To view the date and time when resources were created, you should check the **Activity Log** or the **Resource properties** in the resource group.

- Therefore, this solution does **not** meet the stated goal.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” implies that Programmatic deployment provides resource creation details.

- This is not true; Programmatic deployment is used to review template deployments, not to show the exact creation date/time of resources.

- The exam trap here is confusing deployment history with resource creation metadata.

###

---

### Question 34

**You have an on‑premises file server named Server1 that runs Windows Server 2016. You have an Azure subscription that contains an Azure file share. You deploy an Azure File Sync Storage Sync Service, and you create a sync group. You need to synchronize files from Server1 to Azure. Which three actions should you perform in sequence?**

**Options:**

- **A.** A. Create an Azure on-premises data gateway
Install the DFS replication server role on Server1
Create a Recovery Services vault
- **B.** Install the Azure File Sync agent on Server1
B. Register Server1
Add a server endpoint ✅
- **C.** C. Create an Azure on-premises data gateway
Register Server1
Add a server endpoint

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Install the Azure File Sync agent → Register Server1 → Add a server endpoint**

- Correct because these are the **required steps** for enabling synchronization between an on‑premises file server and Azure File Sync:

- **Install the Azure File Sync agent** on Server1 to enable communication with the Azure Storage Sync Service.

- **Register Server1** with the Storage Sync Service so it becomes part of the sync group.

- **Add a server endpoint** to define the local path on Server1 that will sync with the Azure file share.

- This sequence ensures proper synchronization and management of files between on‑premises and Azure.

### Incorrect

**Option A. Data gateway + DFS replication + Recovery Services vault**

- Incorrect because Azure File Sync does not require an **on‑premises data gateway** or **DFS replication**.

- A Recovery Services vault is used for **backup**, not for file synchronization.

**Option C. Data gateway + Register Server1 + Add server endpoint**

- Incorrect because the **Azure on‑premises data gateway** is unrelated to Azure File Sync.

- Without installing the **Azure File Sync agent**, Server1 cannot be registered or connected to the sync group.

---

### Question 36

You are using an Azure subscription with data deployed in the following Azure services:

You plan to export data by using Azure Import/Export job named DataExport.

Which data can be exported by using DataExport?

**Options:**

- **A.** DB1
- **B.** Container1 ✅
- **C.** Share1
- **D.** Table1

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Container1**

- Correct because the **Azure Import/Export service** supports importing and exporting data **only from Azure Blob Storage containers**.

- You can ship drives to Microsoft to transfer large amounts of data into or out of Blob Storage.

- This matches the requirement: Container1 (a blob container) can be exported using DataExport.

### Incorrect

**Option A. DB1**

- Incorrect because Azure Import/Export does not support exporting data directly from **Azure SQL Database**.

- Database exports must be handled through **bacpac files** or backup/restore operations, not Import/Export jobs.

**Option C. Share1**

- Incorrect because **Azure Files (file shares)** are not supported by Import/Export.

- To move Azure Files data, you would use **AzCopy** or **Azure File Sync**, not Import/Export.

**Option D. Table1**

- Incorrect because **Azure Table Storage** is not supported by Import/Export.

- Table data can be exported using APIs, AzCopy, or other migration tools, but not via Import/Export jobs.

###

---

### Question 37

Your company has an Azure account and subscription. A virtual machine named demovm is created as part of the subscription. There is a requirement to protect the virtual machine using Azure Backup. You need to apply a rule that the backup’s must be created everyday at 12:00 and stored for a minimum of 45 days. Which of the following is used to store the backup’s?

**Options:**

- **A.** A. Blob container
- **B.** B. File share
- **C.** C. Recovery Services vault ✅
- **D.** D. Storage account

**Correct answer:** C

**Explanation:**

This is clearly given in the Microsoft documentation wherein, in order to back up a VM, you have to first create a recovery services vault.

Since this is clearly mentioned in the documentation, all other options are incorrect

For more information on backup of a VM, please visit the below URL

https://docs.microsoft.com/en-us/azure/backup/quick-backup-vm-portal

---

### Question 38

Your company has an Azure account and subscription. A virtual machine named demovm is created as part of the subscription. There is a requirement to protect the virtual machine using Azure Backup. You need to apply a rule that the backup’s must be created every day at 12:00 and stored for a minimum of 45 days. Which of the following can be used to configure the backup rule?

**Options:**

- **A.** A. A backup policy ✅
- **B.** B. A batch job
- **C.** C. A batch schedule
- **D.** D. A recovery plan

**Correct answer:** A

**Explanation:**

The Microsoft documentation clearly mentions that you need to specify all the schedule information in the backup policy

Since this is clearly mentioned in the documentation, all other options are incorrect

For more information on the backup policies, please visit the below URL

https://docs.microsoft.com/en-us/azure/backup/backup-azure-manage-vms#manage-backup-policies

---

### Question 41

You have an Azure web app named App-01. App-01 has the deployment slots shown in the following table:

In Webapp-01-Test, you test several changes to App-01. You back up App-01. You swap Webapp-01-Test for Webapp-01-Prod and discover that App-01 is experiencing performance issues.

You need to revert to the previous version of App-01 as quickly as possible. What should you do?

**Options:**

- **A.** Redeploy App-01
- **B.** Swap the slots ✅
- **C.** Clone App-01
- **D.** Restore the backup of App-01

**Correct answer:** B

**Explanation:**

When you swap deployment slots, Azure swaps the Virtual IP addresses of the source and destination slots, thereby swapping the URLs of the slots. We can easily revert the deployment by swapping back.

Reference:

https://docs.microsoft.com/en-us/azure/app-service/deploy-staging-slots

Quick Preview:

---

### Question 44

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.

Solution: You create an Azure storage account and configure shared access signatures (SASs). You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the storage account as the source.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Events are not be stored in a pure storage account. Instead, you create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.

Reference:

https://docs.microsoft.com/en-us/azure/azure-monitor/platform/agents-overview

Quick Preview:

---

### Question 46

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.

Solution: You create an event subscription on VM1. You create an alert in Azure Monitor and specify VM1 as the source.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Proposed solution is not related to what needs to be implemented.

Azure Event Grid allows you to easily build applications with event-based architectures. A subscription tells Event Grid which events on a topic you’re interested in receiving.

Instead, you create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.

Reference:

https://docs.microsoft.com/en-us/azure/event-grid/concepts

https://docs.microsoft.com/en-us/azure/azure-monitor/platform/agents-overview

Quick Preview:

---

### Question 48

You have an Azure subscription that contains resources. You need to configure **Azure Backup reports** for **Recovery-Vault-1**. You are configuring the **Diagnostics settings** for the **AzureBackupReports log**. Which Log Analytics workspaces can you use for the Azure Backup reports of Recovery-Vault-1?

- 

You need to configure Azure Backup reports for Recovery-Vault-1.You are configuring the Diagnostics settings for the AzureBackupReports log.

Which Log Analytics workspaces can you use for the Azure Backup reports of Recovery-Vault-1?

**Options:**

- **A.** LAW1
- **B.** LAW2
- **C.** LAW3
- **D.** LAW1, LAW2 and LAW3 ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. LAW1, LAW2 and LAW3** Correct. Azure Backup reports can send diagnostic data to **any Log Analytics workspace** within the same subscription and region. Recovery Services vaults are not restricted to a single workspace; you can configure them to send logs to multiple eligible workspaces. Therefore, all listed workspaces (LAW1, LAW2, LAW3) can be used.

### Incorrect

**Option A. LAW1** Incorrect. While LAW1 may be valid, selecting only one workspace ignores the fact that **all three workspaces are eligible**.

**Option B. LAW2** Incorrect. LAW2 alone is valid but incomplete. The question requires identifying all possible workspaces.

**Option C. LAW3** Incorrect. LAW3 alone is also valid but incomplete.

###

---

### Question 49

You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template.

You need to ensure that NGINX is available on all the virtual machines after they are deployed.

What should you use?

**Options:**

- **A.** the Publish-AzVMDscConfiguration cmdlet
- **B.** Azure Application Insights
- **C.** Azure Custom Script Extension ✅
- **D.** the New-AzConfigurationAssignement cmdlet

**Correct answer:** C

**Explanation:**

The Custom Script Extension downloads and executes scripts on Azure virtual machines. This extension is useful for post deployment configuration, software installation, or any other configuration or management tasks.

https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/custom-script-windows#prerequisites

INCORRECT ANSWERS:

the Publish-AzVMDscConfiguration cmdlet – This command uploads a DSC script to Azure blob storage.

Azure Application Insights – This is the framework to monitor performance and log entries for an application in Azure.

the New-AzConfigurationAssignement cmdlet – This command registers maintenance configuration for resource.

---

### Question 53

You have an Azure subscription that contains 10 virtual machines on a virtual network.

You need to create a graph visualization to display the traffic flow between the virtual machines.

What should you do from Azure Monitor?

**Options:**

- **A.** From Activity log, use quick insights.
- **B.** From Metrics, create a chart.
- **C.** From Logs, create a new query.
- **D.** From Workbooks, create a workbook. ✅

**Correct answer:** D

**Explanation:**

Workbooks provide a flexible canvas for data analysis and the creation of rich visual reports within the Azure portal. They allow you to tap into multiple data sources from across Azure, and combine them into unified interactive experiences.

Workbooks are currently compatible with the following data sources:

Logs

Metrics

Azure Resource Graph

Alerts (Preview)

Workload Health

Azure Resource Health

Azure Data Explorer

https://docs.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview

Please note, you can also achieve this requirement using Logs by creating a new query. However, Microsoft provided workbooks as a way to go for visualizations.

INCORRECT ANSWERS:

From Activity log, use quick insights – Activity log provides activities performed on a resource

From Metrics, create a chart – Metrics provide usage metrics like CPU, Memory usage etc..

From Logs, create a new query – You can also achieve this requirement using Logs by creating a new query. However, Microsoft provided workbooks as a way to go for visualizations.

---

### Question 54

You have an Azure subscription with VM1. You need to create a daily backup at 11:00 PM and retain copies for 7 days. What two items are required to store the backup and configure the schedule?

**Options:**

- **A.** A Recovery Services Vault ✅
- **B.** A Batch File
- **C.** A Backup Policy ✅
- **D.** A Cron Job

**Correct answer:** A, C

**Explanation:**

### Correct

**Option A. A Recovery Services Vault**

- Correct because the **Recovery Services Vault** is the Azure resource used to store backups of VMs, files, and workloads.

- It provides centralized management, retention, and recovery capabilities.

- Without the vault, backups cannot be stored or managed.

**Option C. A Backup Policy**

- Correct because the **Backup Policy** defines the **schedule (11:00 PM daily)** and **retention period (7 days)**.

- Policies automate backup operations and ensure compliance with recovery requirements.

### Incorrect

**Option B. A Batch File**

- Incorrect because batch files are scripts used for automation at the OS level, not for configuring Azure VM backups.

- Azure Backup is managed through Recovery Services Vault and policies, not OS scripts.

**Option D. A Cron Job**

- Incorrect because cron jobs are Linux scheduling tools.

- Backup scheduling in Azure is handled by **Backup Policies**, not cron jobs.

###

---

### Question 4

Scenario:
Your company‘s mission-critical database, hosted on an Azure Virtual Machine (VM), experienced a data corruption incident due to an accidental overwrite. You need to restore the database to a point in time before the corruption occurred to minimize data loss and business impact.
Fortunately, you have been diligently backing up the VM using Azure Backup. However, you are unsure which specific feature of Azure Backup will allow you to recover the database to a particular timestamp before the corruption happened.
Question:
Which Azure Backup feature can you utilize to restore your database to a specific point in time and recover from the data corruption incident?

**Options:**

- **A.** Full VM Backup
- **B.** Geo-redundant backup
- **C.** Incremental Backup
- **D.** Point-in-time restore (PITR) ✅

**Correct answer:** D

**Explanation:**

The  is Point-in-time restore (PITR). Here‘s why:
Point-in-time restore (PITR): This feature allows you to restore your database to any specific point in time within the retention period of your backups. By selecting the appropriate timestamp, you can revert the database to a state before the data corruption occurred.
Why other options are less suitable:
Full VM Backup: While full VM backups are essential, they only allow you to restore the entire VM to the latest backup point, not to a specific point in time.
Incremental Backup: Incremental backups capture only the changes since the last backup, which is useful for optimizing storage, but not for restoring to a specific timestamp.
Geo-redundant backup: This feature replicates your backups to a secondary region for added protection, but it doesn‘t directly address the need to restore to a specific point in time.
Key Points:
Azure Backup‘s point-in-time restore capability is crucial for recovering from data corruption incidents, as it allows for granular restoration of data to a specific moment in the past.
This scenario emphasizes the importance of understanding the different features offered by Azure Backup to ensure that your backup strategy meets your specific recovery needs.

---

### Question 7

Scenario:
Your company operates a high-traffic e-commerce website hosted on multiple Azure Virtual Machines (VMs). These VMs house critical customer data, product information, and order history. To protect against data loss due to accidental deletion, hardware failures, or malicious attacks, you need to implement a robust backup solution.
Your backup solution must meet the following requirements:
1. Regular Backups: You need to schedule automatic backups of the VMs at regular intervals to ensure that your data is consistently protected.
2. Data Retention: You need to retain multiple backup copies for a defined period to enable recovery from different points in time.
3. Minimal Downtime: The backup process should not disrupt the website‘s operation or impact its performance.
4. Easy Recovery: In the event of data loss, you need to be able to quickly restore the VMs to a previous state.
Question:
Which Azure service would you choose to implement a backup solution that fulfills these requirements for your e-commerce website‘s VMs?

**Options:**

- **A.** Azure Storage
- **B.** Azure Site Recovery
- **C.** Azure Blob Storage
- **D.** Azure Backup ✅

**Correct answer:** D

**Explanation:**

The best answer is Azure Backup. Here‘s why:
Azure Backup: This service is specifically designed for backing up Azure VMs, files, and folders. It provides automated backup scheduling, long-term data retention options, and point-in-time recovery capabilities. Azure Backup also offers application-consistent backups for various workloads, including SQL Server and SAP HANA.
Why other options are less suitable:
Azure Blob Storage: While you can store backup data in Blob Storage, it doesn‘t provide the automated scheduling, retention policies, or recovery features that Azure Backup offers.
Azure Site Recovery: This service is primarily used for disaster recovery and replicating VMs to another region, not for traditional backup and restore scenarios.
Azure Files: This service is for cloud file shares and doesn‘t offer the VM-level backup and restore capabilities needed in this case.
Key Points:
Azure Backup is the most appropriate service for backing up Azure VMs due to its comprehensive feature set designed for this specific purpose.
This scenario emphasizes the importance of regular backups and data recovery strategies for protecting critical e-commerce applications in Azure.

---

### Question 10

You need to monitor the performance and usage of your Azure Storage accounts. Which Azure service or tool can you use to track metrics, set up alerts, and gain insights into storage account activity?

**Options:**

- **A.** Azure Advisor
- **B.** Azure Monitor ✅
- **C.** Azure Log Analytics
- **D.** Azure Security Center

**Correct answer:** B

**Explanation:**

Azure Monitor is the primary service for monitoring the performance and usage of Azure resources, including storage accounts. It allows you to track key metrics, set up alerts for specific thresholds, and gain insights into storage account activity through logs and visualizations.

---

### Question 15

You have the Azure virtual machines shown in the following table. You have a Recovery Services vault that protects VM1 and VM2. You need to protect VM3 and VM4 by using Recovery Services. What should you do first?

You have a Recovery Services vault that protects VM1 and VM2.

You need to protect VM3 and VM4 by using Recovery Services.

What should you do first?

**Options:**

- **A.** Create a new Recovery Services vault ✅
- **B.** Create a storage account
- **C.** Configure the extensions for VM3 and VM4
- **D.** Create a new backup policy

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Create a new Recovery Services vault**

- Correct because Recovery Services vaults are **region‑specific**.

- If VM3 and VM4 are in a different region than the existing vault, you must first create a new Recovery Services vault in that region before enabling backup.

- Only after the vault exists can you configure backup policies and extensions for those VMs.

### Incorrect

**Option B. Create a storage account**

- Incorrect because Azure Backup does not require a separate storage account.

- The Recovery Services vault itself manages storage for backups.

**Option C. Configure the extensions for VM3 and VM4**

- Incorrect because backup extensions are installed **after** a Recovery Services vault is available in the same region.

- Without the vault, extensions cannot be configured.

**Option D. Create a new backup policy**

- Incorrect because a backup policy defines **schedule and retention**, but it requires a Recovery Services vault first.

- You cannot apply a policy until the vault exists in the correct region.

###

---

### Question 36

You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1. You need to view the error from a table named Event.

Which query should you run in Workspace1?

**Options:**

- **A.** Get-Event Event | where {$_. EventType == "error"}
- **B.** Event | search "error" ✅
- **C.** search in (Event)* | where EventType –eq "error"
- **D.** Get-Event Event | where {$_.EventTye –eq "error"}

**Correct answer:** B

**Explanation:**

The same query can be written in two forms Event | search “error” Or search in (Event) “error”

Further Learning:

https://docs.microsoft.com/en-us/azure/azure-monitor/log-query/log-query-overview

Quick Preview:

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

### Question 6

Your organization is implementing a disaster recovery strategy for its critical Azure resources.
How can you utilize Azure Backup and Azure Site Recovery together to create a comprehensive disaster recovery solution that protects both data and infrastructure?

**Options:**

- **A.** Use Azure Backup for backing up data and Azure Site Recovery for replicating and failing over VMs. ✅
- **B.** Use a combination of Azure Blob Storage and Azure Files for data backup and manual VM recreation for infrastructure recovery.
- **C.** Use Azure Backup for all disaster recovery needs, both data and infrastructure.
- **D.** Use Azure Site Recovery for all disaster recovery needs, both data and infrastructure.

**Correct answer:** A

**Explanation:**

Azure Backup and Azure Site Recovery complement each other. Backup protects data from corruption or accidental deletion, while Site Recovery ensures infrastructure availability by replicating and failing over VMs.

---

### Question 8

You are implementing Azure Monitor to monitor the health and performance of your Azure resources. How can you utilize Azure Monitor alerts to proactively detect and respond to critical issues or anomalies in your environment?

**Options:**

- **A.** Use Azure Monitor alerts to create dashboards for visualizing resource metrics.
- **B.** Use Azure Monitor alerts to automatically scale resources based on utilization.
- **C.** Define alert rules based on specific metric conditions, configure actions like email notifications or webhook calls, and set severity levels for prioritization. ✅
- **D.** Use Azure Monitor alerts to collect and analyze logs from Azure resources.

**Correct answer:** C

**Explanation:**

Azure Monitor alerts allow you to define conditions based on metrics or logs, trigger actions (e.g., notifications, automation) when conditions are met, and prioritize alerts for effective incident response.

---

### Question 11

You need to implement a mechanism to track and review changes made to Azure resources for auditing and compliance purposes. Which Azure service can you use to track resource changes and investigate operational issues?

**Options:**

- **A.** Azure Activity Log ✅
- **B.** Azure Advisor
- **C.** Azure Resource Health
- **D.** Azure Backup

**Correct answer:** A

**Explanation:**

Azure Activity Log is the central logging mechanism for Azure, providing a history of operations performed on resources, making it ideal for auditing and troubleshooting.

---

### Question 13

Your organization wants to monitor the health and performance of its network infrastructure in Azure. Which Azure service provides tools for monitoring network connectivity, traffic flows, and performance across virtual networks and subnets?

**Options:**

- **A.** Azure Traffic Manager
- **B.** Azure Application Gateway
- **C.** Azure Network Watcher ✅
- **D.** Azure Front Door

**Correct answer:** C

**Explanation:**

Azure Network Watcher provides the comprehensive tools you need to monitor and troubleshoot your Azure network infrastructure.

---

### Question 14

You want to monitor the replication status and health of your Azure VMs that are protected by Azure Site Recovery.
Which Azure tools or features can you use to track replication progress, identify any issues, and ensure that your VMs are ready for failover?

**Options:**

- **A.** Azure Site Recovery dashboard and reports ✅
- **B.** Azure Monitor logs
- **C.** Azure Advisor

**Correct answer:** A

**Explanation:**

The Azure Site Recovery dashboard is the primary tool designed specifically for monitoring the replication health and status of your protected VMs. It offers a centralized view and various reports.

---

### Question 17

You need to restore an Azure VM from a backup. The VM was accidentally deleted, and you want to restore it to its previous state. Which Azure Backup feature can you use to perform this recovery operation?

**Options:**

- **A.** Restore VM from backup ✅
- **B.** Azure Resource Manager (ARM) templates
- **C.** Azure Site Recovery
- **D.** Azure Backup Vault

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Restore VM from backup**

- This is the correct feature. Azure Backup provides the ability to **restore an entire VM** from a recovery point if the VM was deleted or corrupted.

- The restore process recreates the VM with the same configuration and data as at the time of backup.

- This directly meets the requirement of restoring the VM to its previous state.

### Incorrect

**Option B. Azure Resource Manager (ARM) templates**

- ARM templates are used for **deploying infrastructure as code**, not for restoring deleted VMs from backup.

- They can recreate resources but won’t restore the VM’s data and state from a backup.

**Option C. Azure Site Recovery**

- Site Recovery is designed for **disaster recovery and replication** to another region, not for restoring a deleted VM from backup.

- It ensures business continuity but does not provide point‑in‑time recovery from backups.

**Option D. Azure Backup Vault**

- The Backup Vault is where backups are stored, but it is not the feature used to perform the restore.

- The actual restore operation is done using the **Restore VM from backup** functionality.

###

---

### Question 33

Your organization wants to implement a backup strategy for Azure VMs. Which Azure service can you use to create backups of your VMs, store them in a recovery vault, and restore them in case of data loss or accidental deletion?

**Options:**

- **A.** Azure Backup ✅
- **B.** Azure Blob Storage
- **C.** Azure Files
- **D.** Azure Site Recovery

**Correct answer:** A

**Explanation:**

Azure Backup allows you to create backups of your VMs, storing them in a recovery vault for reliable disaster recovery.

---

### Question 44

**You are planning for disaster recovery of your Azure VMs. You need to determine the recovery point objective (RPO) and recovery time objective (RTO) for your applications. What do these terms mean, and how do they influence your disaster recovery strategy?**

**Options:**

- **A.** RPO is the acceptable amount of time it takes for a backup to complete; RTO is the acceptable time for applications to be unavailable during a restore operation.
- **B.** RPO is the maximum tolerable data loss in a disaster; RTO is the maximum acceptable downtime before significant business impact. ✅
- **C.** RPO is the point in time to which data must be recovered; RTO is the time by which applications must be restored to full functionality.
- **D.** RPO is the frequency with which data is replicated to the secondary region; RTO is the time it takes to fail over to the secondary region.

**Correct answer:** B

**Explanation:**

### Correct

**Option B. RPO is the maximum tolerable data loss in a disaster; RTO is the maximum acceptable downtime before significant business impact**

- Correct because:

- **Recovery Point Objective (RPO):** Defines how much data loss is acceptable, measured in time. For example, an RPO of 1 hour means you can afford to lose up to 1 hour of data.

- **Recovery Time Objective (RTO):** Defines how quickly systems must be restored after a disruption. For example, an RTO of 30 minutes means the application must be back online within 30 minutes.

- These metrics directly influence your **Azure disaster recovery strategy**:

- A low RPO requires frequent backups or replication.

- A low RTO requires fast failover mechanisms like **Azure Site Recovery**.

### Incorrect

**Option A. RPO is the acceptable amount of time it takes for a backup to complete; RTO is the acceptable time for applications to be unavailable during a restore operation**

- Incorrect because RPO is not about backup duration—it is about **data loss tolerance**. RTO is not about restore operation time alone but about **total downtime tolerance**.

**Option C. RPO is the point in time to which data must be recovered; RTO is the time by which applications must be restored to full functionality**

- Incorrect because while this sounds close, it is incomplete. RPO is not just a “point in time” but the **maximum tolerable data loss window**. RTO is not just “time to restore” but the **maximum downtime allowed before business impact**.

**Option D. RPO is the frequency with which data is replicated to the secondary region; RTO is the time it takes to fail over to the secondary region**

- Incorrect because replication frequency is a method to achieve a desired RPO, but it is not the definition of RPO itself. Similarly, failover time contributes to RTO but does not define it.

---

### Question 45

You have an Azure virtual machine named VM1 that runs Windows Server 2016.

You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.

Solution: You create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Alerts in Azure Monitor can identify important information in your Log Analytics repository. They are created by alert rules that automatically run log searches at regular intervals, and if results of the log search match particular criteria, then an alert record is created and it can be configured to perform an automated response.

The Log Analytics agent collects monitoring data from the guest operating system and workloads of virtual machines in Azure, other cloud providers, and on- premises. It collects data into a Log Analytics workspace.

https://docs.microsoft.com/en-us/azure/azure-monitor/learn/tutorial-response

https://docs.microsoft.com/en-us/azure/azure-monitor/platform/agents-overview

---

### Question 46

You have an Azure virtual machine named VM1 that runs Windows Server 2016.

You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.

Solution: You create an Azure storage account and configure shared access signatures (SASs). You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the storage account as the source.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Instead you create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.

https://docs.microsoft.com/en-us/azure/azure-monitor/platform/agents-overview

---

### Question 48

Your company has an Azure virtual machine that runs Windows Server 2016. You have to create an alert in Azure whenever two error events are logged to the System log on the virtual machine within an hour.

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because Azure Monitor alerts cannot directly evaluate **multiple error events within a specific time window** from the VM’s System log.

- While you can configure alerts based on metrics or log queries, the requirement of “two error events within an hour” is not natively supported by a simple alert rule.

- To achieve this, you would need to send the logs to **Log Analytics** and then create a **custom query** with an alert rule.

- Therefore, the straightforward answer to whether you can directly configure this alert is **No**.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” implies that Azure Monitor can natively configure an alert for “two error events within an hour” directly from the VM System log.

- This is not possible without additional configuration (Log Analytics workspace + KQL query).

- The exam trap here is assuming Azure Monitor alerts can handle complex event counts without log analytics.

###

---

### Question 49

**Your company has an Azure virtual machine that runs Windows Server 2016. You have to create an alert in Azure whenever two error events are logged to the System log on the virtual machine within an hour. Is this possible?**

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because Azure Monitor alerts can be configured to trigger based on **single conditions** (e.g., when a metric threshold is exceeded or when a specific log query returns results).

- However, Azure Monitor does not natively support **complex event correlation** such as “two error events within one hour” directly.

- To achieve this, you would need to use **Log Analytics with Kusto queries** to aggregate events and then configure an alert based on that query. The simple “Yes” option is misleading because it suggests this can be done directly without additional configuration.

### Incorrect

**Option A. Yes**

- Incorrect because while alerts can be created for error events, Azure Monitor does not provide a straightforward way to trigger alerts based on **multiple occurrences within a specific time window** without using advanced queries.

- Simply answering “Yes” ignores the need for **Log Analytics query logic** to count events and apply the time constraint.

---

### Question 50

You have to configure Application Insights for a set of applications. Each application has different requirements. Below are the requirements for each application

skillcertlabapp1 – Be able to see if users are progressing through the entire business process for the application

skillcertlabapp2 – Here one should be able to analyse the load times and other properties that could influence conversion rates for the application

skillcertlabapp3 – Here one should be able to analyse how many users return to the application

skillcertlabapp4 – Here one should be able to see the places where users repeat the same action over and over again

Which of the following feature of Application Insights could be used for the application skillcertlabapp1?

**Options:**

- **A.** A. Impact
- **B.** B. Retention
- **C.** C. User Flows
- **D.** D. Funnels ✅

**Correct answer:** D

**Explanation:**

This can be accomplished with the Funnels feature of Application Insights.

The Microsoft documentation mentions the following

Since this is clearly mentioned in the Microsoft documentation, all other options are incorrect

For more information on the Funnels feature, please visit the following URL

https://docs.microsoft.com/en-us/azure/azure-monitor/app/usage-funnels

---

### Question 51

**You have to configure Application Insights for a set of applications. Each application has different requirements. Below are the requirements for each application.** **skillcertlabapp1 – Be able to see if users return to the application.** **Which Application Insights feature should be used?**

**Options:**

- **A.** A. Impact
- **B.** B. Retention ✅
- **C.** C. User Flows
- **D.** D. Funnels

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Retention**

- Correct because the **Retention** feature in Application Insights shows how many users return to the application after their first visit.

- It helps track user engagement over time and is specifically designed to measure whether users come back, which matches the requirement.

### Incorrect

**Option A. Impact**

- Incorrect because **Impact** is used to analyze how a particular feature or change affects users.

- It does not measure whether users return to the application.

**Option C. User Flows**

- Incorrect because **User Flows** visualize the paths users take through the application (e.g., navigation sequences).

- While useful for understanding behavior, it does not directly measure return visits.

**Option D. Funnels**

- Incorrect because **Funnels** track conversion rates through a defined sequence of steps (e.g., checkout process).

- They are not designed to measure user retention.

---

### Question 52

You have an Azure virtual machine named VM1 and a Recovery Services vault named Vault1. You create a backup policy named Policy1 as shown in the exhibit. You configure the backup of VM1 to use Policy1 on Wednesday December 31 at 5:00PM (17:00). You need to identify the number of available recovery points for VM1. How many recovery points are available on January 8 at 2:00PM (14:00) and January 15 at 2:00PM (14:00)? (Select two)

**Options:**

- **A.** January 8 at 2:00PM (14:00) - 5
- **B.** January 8 at 2:00PM (14:00) - 6
- **C.** January 8 at 2:00PM (14:00) - 8 ✅
- **D.** January 8 at 2:00PM (14:00) - 10
- **E.** January 15 at 2:00PM (14:00) - 5
- **F.** January 15 at 2:00PM (14:00) - 15 ✅

**Correct answer:** C, F

**Explanation:**

### Correct

- **Option C. January 8 at 2:00PM (14:00) – 8** Correct because from **December 31 to January 8**, there are **8 daily backups** created (one per day). Since the retention policy keeps them, all 8 recovery points are available by January 8.

- **Option F. January 15 at 2:00PM (14:00) – 15** Correct because by **January 15**, there have been **15 daily backups** since the initial backup on December 31. The retention policy ensures they remain available, so 15 recovery points exist at that time.

### Incorrect

- **Option A. January 8 – 5** Incorrect because there are more than 5 backups by January 8; the correct count is 8.

- **Option B. January 8 – 6** Incorrect because the math shows 8 backups, not 6.

- **Option D. January 8 – 10** Incorrect because only 8 backups exist by January 8, not 10.

- **Option E. January 15 – 5** Incorrect because by January 15, there are 15 backups, not 5.

---

### Question 53

You have an Azure Linux virtual machine that is protected by Azure Backup. One week ago, two files were deleted from the virtual machine. You need to restore the deleted files to an on-premises Windows Server 2016 computer as quickly as possible.

Which four actions should you perform in sequence?

1 – Download and run the script to mount a drive on the local computer

2 – Select a restore point that contains the deleted files

3 – From the Azure portal, click Restore VM from the vault

4 – From the Azure portal, click File Recovery from the vault

5 – Mount a VHD

6 – Copy the files by using AzCopy

7 – Copy the files by using File Explorer

**Options:**

- **A.** 4 -> 3 -> 2 -> 7
- **B.** 4 -> 2 -> 1 -> 7 ✅
- **C.** 3 -> 4 -> 1 -> 6
- **D.** 3 -> 2 -> 1 -> 6

**Correct answer:** B

**Explanation:**

Let’s run through the step-by-step process.

Azure Backup provides the capability to restore Azure virtual machines (VMs) and disks from Azure VM backups, also known as recovery points.To restore files or folders from the recovery point, you first need to go to the virtual machine, select Backup and then STEP1 – File Recovery:

Once you select File Recovery, the File Recovery menu opens and you would need to STEP 2 – Select a Recovery Point.

A recovery point is a VM backup, so you should select here a date and time, before the accidental delete happened.

Next, in the same File Recovery menu, you would need to STEP 3 – Download script. In this step, a script will be downloaded that you will execute. The script will mount the disks from the selected recovery point as local drives on the machine where it is run.

Once the disk or disks are mounted and available to use, there is one more step to fulfil and access the deleted file, and this is STEP 4 – Copy the files by using File Explorer. You can use File Explorer to copy the two files on your local machine, just like you would do, for example, from an USB stick inserted into your laptop or PC.

Reference:

https://docs.microsoft.com/en-us/azure/backup/backup-azure-restore-files-from-vm

Quick Preview:

---

### Question 54

You have to configure Application Insights for a set of applications. Each application has different requirements. Below are the requirements for each application

skillcertlabapp1 – Be able to see if users are progressing through the entire business process for the application

skillcertlabapp2 – Here one should be able to analyse the load times and other properties that could influence conversion rates for the application

skillcertlabapp3 – Here one should be able to analyse how many users return to the application

skillcertlabapp4 – Here one should be able to see the places where users repeat the same action over and over again

Which of the following feature of Application Insights could be used for the application skillcertlabapp4?

**Options:**

- **A.** A. Impact
- **B.** B. Retention
- **C.** C. User Flows ✅
- **D.** D. Funnels

**Correct answer:** C

**Explanation:**

This can be accomplished with the User Flows feature of Application Insights.

The Microsoft documentation mentions the following

Since this is clearly mentioned in the Microsoft documentation, all other options are incorrect

For more information on the User Flows feature, please visit the following URL

https://docs.microsoft.com/en-us/azure/azure-monitor/app/usage-flows

---

### Question 22

You are evaluating different backup and recovery solutions for your Azure environment.

Which factors should you consider when choosing the appropriate backup and recovery strategy, including RPO/RTO requirements, data types, cost considerations, and regulatory compliance?

**Options:**

- **A.** Scalability of the solution ✅
- **B.** Types of data to be backed up ✅
- **C.** RPO and RTO requirements ✅
- **D.** Regulatory compliance requirements ✅
- **E.** Cost of the backup and recovery solution ✅

**Correct answer:** A, B, C, D, E

**Explanation:**

### Correct

**Option A: Scalability of the solution**

- Correct.

- Backup solutions must scale with growing workloads and data volumes.

- Azure Backup and Recovery Services Vaults should be able to handle enterprise-level scaling without manual intervention.

**Option B: Types of data to be backed up**

- Correct.

- Different data types (VMs, databases, files, blobs) may require different backup strategies.

- For example, SQL databases may need point-in-time recovery, while file shares may need snapshot-based backups.

**Option C: RPO and RTO requirements**

- Correct.

- **Recovery Point Objective (RPO)** defines how much data loss is acceptable.

- **Recovery Time Objective (RTO)** defines how quickly systems must be restored.

- These metrics directly influence the choice of backup frequency, replication, and recovery methods.

**Option D: Regulatory compliance requirements**

- Correct.

- Compliance with industry standards (GDPR, HIPAA, ISO) often dictates encryption, retention policies, and geographic storage location.

- Azure Backup supports compliance features like encryption-at-rest and geo-redundant storage.

**Option E: Cost of the backup and recovery solution**

- Correct.

- Backup storage, replication, and recovery operations incur costs.

- Administrators must balance performance and compliance needs with budget constraints.

### Incorrect

- In this case, **none of the listed options are incorrect**.

- All five factors (Scalability, Data Types, RPO/RTO, Compliance, Cost) are essential considerations when designing a backup and recovery strategy in Azure.

---

### Question 27

**You have an Azure subscription named Subscription1. In Subscription1, you create an alert rule named Alert1.** **The Alert1 action group is configured to send emails to all users part of the Admins_Group.** **Alert1 alert criteria is triggered every minute.** **The number of email messages that Alert1 will send in an hour is _____.**

**Options:**

- **A.** 0
- **B.** 4
- **C.** 6
- **D.** 12
- **E.** 60 ✅

**Correct answer:** E

**Explanation:**

### Correct

**Option E. 60**

- Correct because the alert is triggered **once every minute**.

- In one hour, there are **60 minutes**, so the alert will send **60 email notifications** to the Admins_Group.

- This matches the configured frequency of the alert criteria.

### Incorrect

**Option A. 0**

- Incorrect because the alert is configured to trigger every minute, so it will not send zero emails.

**Option B. 4**

- Incorrect because 4 emails per hour would imply one alert every 15 minutes, which is not the case here.

**Option C. 6**

- Incorrect because 6 emails per hour would imply one alert every 10 minutes. The configuration clearly states every minute.

**Option D. 12**

- Incorrect because 12 emails per hour would imply one alert every 5 minutes. Again, the alert is triggered every minute.

---

### Question 31

You are troubleshooting a network connectivity issue between two Azure VMs in different VNets. You have verified that the VMs have the correct IP addresses and subnet configurations.
Which Azure tool can you use to visualize the network topology and trace the traffic flow between the VMs?

**Options:**

- **A.** Azure Advisor
- **B.** Azure Network Watcher ✅
- **C.** Azure Monitor
- **D.** Azure Security Center

**Correct answer:** B

**Explanation:**

Azure Network Watcher is the primary toolset for diagnosing and troubleshooting network issues in Azure. It provides various capabilities like Connection Monitor, which can visualize the network topology and trace the path of network traffic between VMs.

---

### Question 32

Your company’s e‑commerce website is hosted on **Azure App Services**. You need to track performance metrics such as **response time, HTTP errors, and requests per second**. Which Azure service is best suited for collecting and analyzing this data?

**Options:**

- **A.** Azure Network Watcher
- **B.** Azure Log Analytics
- **C.** Azure Application Insights ✅
- **D.** Azure Monitor

**Correct answer:** C

**Explanation:**

**Correct**

**Option C. Azure Application Insights**

- Correct because **Application Insights** is designed for monitoring application performance.

- It provides telemetry such as **response times, request rates, dependency calls, and HTTP errors**.

- It integrates directly with **Azure App Services**, making it the best choice for tracking web app performance metrics in real time.

**Incorrect**

**Option A. Azure Network Watcher**

- Incorrect because Network Watcher focuses on **network diagnostics and monitoring** (packet capture, NSG flow logs, connection troubleshooting).

- It does not provide application‑level performance metrics like response times or HTTP errors.

**Option B. Azure Log Analytics**

- Incorrect because Log Analytics is used to **query and analyze logs** collected from Azure Monitor.

- While useful for deeper analysis, it is not the primary service for collecting application performance metrics.

**Option D. Azure Monitor**

- Incorrect because Azure Monitor is the **umbrella service** for monitoring across Azure resources.

- It collects metrics and logs but does not provide the **application‑specific telemetry** that Application Insights offers.

---

### Question 33

Scenario:
Your company, a financial institution, stores large volumes of sensitive customer data in Azure Blob Storage. To optimize costs and comply with data retention policies, you need to automate the lifecycle management of this data. Specifically, you need to:
Transition older data to cooler storage tiers based on last accessed time.
Permanently delete sensitive customer data after a specified retention period.
Preserve the ability to recover accidentally deleted data for a limited time.
Question:
Which Azure features or tools should you use to implement this automated data lifecycle management process?

**Options:**

- **A.** Azure Information Protection, Azure Security Center, and Azure Policy
- **B.** Azure Blob Storage access tiers, Azure Blob versioning, and Azure Resource Manager templates
- **C.** Azure Blob Storage lifecycle management policies, Azure Blob soft delete, and Azure Monitor ✅
- **D.** Azure Blob Inventory, Azure Event Grid, and Azure Data Factory

**Correct answer:** C

**Explanation:**

More details:
Azure Blob Storage lifecycle management policies: These policies allow you to create rules to automatically transition blobs to cooler storage tiers (Cool, Archive) based on criteria like last accessed time. You can also define rules to permanently delete blobs after a specified period, aligning with your data retention policies.
Azure Blob soft delete: This feature enables you to recover blobs that have been accidentally deleted within a retention period you configure. It provides a safety net for data recovery in case of unintended deletions.
Azure Monitor: Azure Monitor allows you to track and analyze the effectiveness of your lifecycle management policies. You can create alerts to notify you of any issues or unexpected behavior, ensuring your policies are working as intended.
Why other options are not suitable:
While Azure Blob Inventory provides insights into storage usage, it doesn‘t automate lifecycle management. Azure Event Grid can trigger actions, but it needs to be coupled with other tools to define the lifecycle rules. Azure Data Factory is used for orchestrating data movement and transformation, but it‘s not the primary tool for lifecycle management within Azure Storage.
Access tiers are part of the lifecycle management strategy, but they need to be combined with lifecycle management policies to be automated. Versioning is useful for maintaining historical versions of blobs, but it doesn‘t directly address automatic deletion or transition to cooler tiers.
These tools focus on data security and compliance, not on the automated movement or deletion of data based on lifecycle criteria.

---

### Question 34

Your company is experiencing intermittent connectivity issues between Azure virtual machines (VMs) in different subnets within the same virtual network (VNet). You suspect that a Network Security Group (NSG) rule might be blocking traffic. You need to quickly diagnose the problem to minimize downtime.
Which Azure Network Watcher feature should you use to troubleshoot this issue?

**Options:**

- **A.** VPN Diagnostics
- **B.** IP Flow Verify ✅
- **C.** Packet Capture
- **D.** Connection Monitor

**Correct answer:** B

**Explanation:**

The  is IP Flow Verify.
Here‘s why:
IP Flow Verify: This feature allows you to specify a source and destination IP address, port, and protocol, and then verifies if a connection would be allowed or denied by the NSGs associated with the network interfaces. This is ideal for the scenario where you suspect an NSG rule might be blocking traffic.
Why other options are incorrect:
Connection Monitor: This feature is used to monitor network connectivity between two endpoints over time. While it can provide insights into connectivity issues, it‘s not the most direct way to diagnose an NSG rule problem.
Packet Capture: This feature captures network traffic and can be useful for in-depth analysis, but it‘s not the quickest way to determine if an NSG rule is blocking traffic.
VPN Diagnostics: This feature is designed to troubleshoot issues with VPN connections, which is not relevant to the current scenario.
Key steps for using IP Flow Verify:
1. Go to the Network Watcher blade in the Azure portal.
2. Select “IP Flow Verify“ from the tools menu.
3. Specify the source and destination IP addresses, port, protocol, and direction.
4. Select the network interface of the VM where the connection originates.
5. Click “Check“ to verify if the connection will be allowed or denied.
6. The results will indicate if the connection is allowed or denied by any NSGs in the path.

---

### Question 36

You are setting up alerts for your Azure resources. You want to receive notifications via email and SMS when certain performance thresholds are exceeded. How can you configure these alert notifications in Azure Monitor?

**Options:**

- **A.** Azure Service Health
- **B.** Azure Logic Apps
- **C.** Azure Monitor Action Groups ✅
- **D.** Azure Functions

**Correct answer:** C

**Explanation:**

Azure Monitor Action Groups are the most direct and efficient way to configure multiple notification channels for alerts.

---

### Question 39

**Question:** You want to monitor the status of your Azure Backup jobs and receive notifications for failed or completed backups. Which Azure service can you use to track backup job status and configure alerts?

**Options:**

- **A.** A. Azure Advisor
- **B.** B. Azure Monitor ✅
- **C.** C. Azure Backup Explorer
- **D.** D. Azure Log Analytics

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Azure Monitor**

- **Correct** because **Azure Monitor** integrates with Azure Backup to track job status and generate alerts.

- You can configure **Backup Alerts** in Azure Monitor to notify administrators when jobs fail, succeed, or complete.

- This is the recommended service for monitoring and alerting across Azure resources, including backup jobs.

### Incorrect

**Option A. Azure Advisor**

- Incorrect because **Azure Advisor** provides recommendations for cost optimization, performance, reliability, and security.

- It does not monitor backup job status or generate alerts for backup operations.

**Option C. Azure Backup Explorer**

- Incorrect because **Backup Explorer** is used for **reporting and analytics** on backup data (e.g., trends, usage, compliance).

- It does not provide real-time monitoring or alerting capabilities for job status.

**Option D. Azure Log Analytics**

- Incorrect because **Log Analytics** can collect and query logs, but it is not the primary service for configuring alerts.

- It works in conjunction with Azure Monitor, but the direct answer for monitoring and alerting is **Azure Monitor**.

###

---

### Question 41

You are managing a large-scale Azure environment with hundreds of virtual machines. You need a way to track the health and availability of these VMs at a glance. Which Azure Monitor feature provides a visual representation of the health status of your VMs?

**Options:**

- **A.** Azure Service Health
- **B.** Azure Monitor Alerts
- **C.** Azure Monitor Metrics
- **D.** Azure Monitor VM Insights ✅

**Correct answer:** D

**Explanation:**

Azure Monitor VM Insights is specifically designed to aggregate health and performance data from VMs, including a visual map for quick assessment of overall health.

---

### Question 46

You need to implement a mechanism to track and analyze usage patterns for Azure resources, such as virtual machine utilization or storage consumption. How can you leverage Azure Monitor Logs and Azure Log Analytics to collect and analyze resource usage data?

**Options:**

- **A.** A. Configure Azure Log Analytics to collect logs directly from virtual machine event logs only.
- **B.** B. Enable Azure Monitor Logs to send platform metrics to Azure Event Hubs for storage and processing.
- **C.** C. Set up diagnostic settings on Azure resources to send platform logs and metrics to a Log Analytics workspace for centralized analysis. ✅
- **D.** D. Ignore Azure Monitor and manually export logs from each resource for analysis.

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Set up diagnostic settings on Azure resources to send platform logs and metrics to a Log Analytics workspace for centralized analysis**

- Correct because this is the standard way to collect and analyze resource usage data in Azure.

- **Diagnostic settings** allow you to configure resources (VMs, storage accounts, etc.) to send telemetry (logs and metrics) to a **Log Analytics workspace**.

- Once data is in Log Analytics, you can query it using **Kusto Query Language (KQL)**, build dashboards, and analyze usage patterns.

- This approach provides centralized monitoring and supports advanced analytics across multiple resources.

### Incorrect

**Option A. Configure Azure Log Analytics to collect logs directly from virtual machine event logs only**

- Incorrect because while Log Analytics can collect VM event logs, this option is too narrow.

- It ignores other Azure resource metrics (like storage or networking) and does not provide a complete view of usage patterns.

**Option B. Enable Azure Monitor Logs to send platform metrics to Azure Event Hubs for storage and processing**

- Incorrect because Event Hubs is typically used for **streaming telemetry to external systems** (like SIEM or third-party analytics).

- While valid for integration scenarios, it is not the primary method for analyzing usage patterns within Azure Monitor and Log Analytics.

**Option D. Ignore Azure Monitor and manually export logs from each resource for analysis**

- Incorrect because this is inefficient and does not leverage Azure’s built-in monitoring capabilities.

- Manual export lacks automation, scalability, and centralized analysis, making it unsuitable for enterprise environments.

###

---

### Question 47

You are using Azure Monitor to collect metrics and logs from various Azure services. Which data storage options are available for storing the collected data in Azure Monitor, and what are the considerations for choosing the appropriate storage option?

**Options:**

- **A.** Azure Data Lake Storage ✅
- **B.** Log Analytics workspace ✅
- **C.** Azure SQL Database
- **D.** Azure Cosmos DB
- **E.** Azure Storage accounts ✅

**Correct answer:** A, B, E

**Explanation:**

Log Analytics is the primary storage for Azure Monitor data, particularly for logs. For long-term archival and cost optimization, you can use Azure Storage or Azure Data Lake Storage.

---

### Question 49

You want to create a custom metric to track a specific aspect of your application‘s behavior. How can you create and publish custom metrics in Azure Monitor to track these application-specific data points?

**Options:**

- **A.** Enable diagnostic settings for your application resources and send custom metric data to a Log Analytics workspace.
- **B.** Use Azure Application Insights to automatically collect custom metrics along with application performance data.
- **C.** Utilize Azure Metrics Advisor to automatically detect anomalies in your custom metric data and alert you to potential issues.
- **D.** Create a custom metric definition in Azure Monitor and use the Azure Monitor REST API to publish metric values. ✅

**Correct answer:** D

**Explanation:**

Custom metrics are created using a metric definition in Azure Monitor. You then use the Azure Monitor REST API to programmatically send the values of your custom metric data points to Azure Monitor for storage and analysis.

---

### Question 2

You have an Azure subscription named Sub1 that contains the resources shown in the following table.

**Sub1 contains the following alert rule:**

- **Name**: Alert1

- **Scope**: All resource groups in Sub1

– Include all future resources

- **Condition**: All administrative operations

- **Actions**: Action1

**Sub1 contains the following alert processing rule**

- **Name**: Rule1

- **Scope**: Sub1

- **Rule type**: Suppress notifications

- **Apply the rule**: On a specific time

– **Start**: August 10, 2022

– **End**: August 13, 2022

For the statement below, select Yes if the statement is true. Otherwise, select No.

**“If you create a resource group in Sub1 on August 12, 2022, an email message is sent to [email protected].”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because, although Alert1 is configured to send an email to [email protected] for all administrative operations, there is an alert processing rule (Rule1) in place that suppresses notifications between August 10, 2022 and August 13, 2022. Therefore, despite a new resource group being created in Sub1 on August 12, 2022, which is an administrative operation, the suppress rule will prevent the email notification from being sent to [email protected].

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview

- https://docs.microsoft.com/en-us/azure/azure-monitor/platform/action-groups

- https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-action-rules

---

### Question 13

You have an Azure Linux virtual machine that is protected by Azure Backup. One week ago, two files were deleted from the virtual machine. You need to restore the deleted files to an on-premises computer as quickly as possible. Which four actions should you perform in sequence?

ACTIONS

- 
From the Azure portal, click Restore VM from the vault.

- 
Mount a VHD.

- 
From the Azure portal, click File Recovery from the vault.

- 
Copy the files by using AZCopy.

- 
Select a restore point that contains the deleted files.

- 
Copy the files by using local file management tools (e.g., File Explorer, cp, or rsync).

- 
Download and run the script to mount a drive on the local computer.

**Options:**

- **A.** 2-3-5-7
- **B.** 1-5-2-6
- **C.** 3-5-7-6 ✅
- **D.** 6-4-7-2
- **E.** 4-5-1-3
- **F.** 2-4-7-3

**Correct answer:** C

**Explanation:**

**Correct Sequence: 3-5-7-6**

- 
(Action 3) From the Azure portal, click File Recovery from the vault: This is the correct entry point. Unlike a full VM restore, the File Recovery feature allows you to mount specific disks from a recovery point to your local machine to extract individual files.

- 
(Action 5) Select a restore point that contains the deleted files: You must choose a timestamp prior to the accidental deletion to ensure the recovery point contains the required data.

- 
(Action 7) Download and run the script to mount a drive on the local computer: Azure provides a script (Python for Linux, executable for Windows) specifically designed to create an iSCSI connection between your local machine and the recovery point in the Azure Recovery Services vault.

- 
(Action 6) Copy the files by using local file management tools: Once the script successfully connects, the recovery point appears as a drive or mount point on your local machine. Because this could be a Linux or Windows environment, “File Explorer” is often used as a general term for the local OS’s file management capability (e.g., using cp, rsync, or a GUI file browser on Linux).

Why other options are incorrect:

- 
Action 1 (Restore VM): This would initiate a full VM restore, which involves deploying a new VM and potentially overwriting existing resources. It is far slower than granular file recovery.

- 
Action 2 (Mount a VHD): While the recovery process technically mounts a VHD via iSCSI, “Mount a VHD” as a standalone action in the portal is not the standard workflow for File Recovery.

- 
Action 4 (AZCopy): AZCopy is designed for transferring data to/from Azure Storage accounts or Blobs, not for extracting individual files from an iSCSI-mounted backup recovery point.

---

### Question 24

**You have an Azure subscription named Subscription1 that contains the resources as shown in the table.** **You plan to configure Azure Backup reports for Vault1.** **You are configuring the diagnostic settings for the AzureBackupReports log.** **Which Log Analytics workspaces can you use for the Azure Backup reports of Vault1?**

**Options:**

- **A.** Analytics1 only
- **B.** Analytics2 only
- **C.** Analytics3 only
- **D.** Analytics1, Analytics2, and Analytics3 ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Analytics1, Analytics2, and Analytics3**

- Correct because **Azure Backup reports** can send diagnostic data to **any Log Analytics workspace** in the same subscription and region.

- Vault1 is not restricted to a single workspace; all listed workspaces are eligible destinations.

- Therefore, you can configure the diagnostic settings to send logs to **Analytics1, Analytics2, and Analytics3**.

### Incorrect

**Option A. Analytics1 only**

- Incorrect because while Analytics1 may be valid, the solution is not limited to just one workspace.

**Option B. Analytics2 only**

- Incorrect for the same reason — Analytics2 alone is valid but incomplete.

**Option C. Analytics3 only**

- Incorrect because Analytics3 alone is valid but incomplete.

---

### Question 26

**Scenario:** You have an Azure subscription with a storage account named **storage1** that contains blobs storing images. Client access is granted using **Shared Access Signatures (SAS)**. You need to ensure that users receive a **warning message** when they generate a SAS that exceeds a **seven‑day time period**.

**Options:**

- **A.** Enable a read-only lock.
- **B.** Configure an alert rule.
- **C.** Add a lifecycle management rule.
- **D.** Set Allow recommended upper limit for shared access signature (SAS) expiry interval to Enabled. ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Set ****Allow recommended upper limit for shared access signature (SAS) expiry interval**** to Enabled**

- **Correct because**:

- Azure Storage provides a **recommended upper limit setting** for SAS expiry intervals.

- By enabling this setting, administrators can enforce a **warning** when users attempt to generate SAS tokens longer than the recommended maximum (seven days).

- This does not block SAS creation but ensures compliance by alerting users.

- This is the precise configuration required in this scenario.

### Incorrect

**Option A. Enable a read‑only lock**

- Incorrect because resource locks prevent deletion or modification of resources, not SAS expiry enforcement.

**Option B. Configure an alert rule**

- Incorrect because alert rules monitor metrics or logs, not SAS expiry intervals. They cannot generate warnings during SAS creation.

**Option C. Add a lifecycle management rule**

- Incorrect because lifecycle rules manage blob tiering and deletion based on age, not SAS expiry duration.

###

---

### Question 44

You have an Azure subscription that contains a storage account named storage1.
You need to ensure that the access keys for storage1 rotate automatically.
What should you configure?

**Options:**

- **A.** a backup vault
- **B.** redundancy for storage1
- **C.** lifecycle management for storage1
- **D.** an Azure key vault ✅
- **E.** a Recovery Services vault

**Correct answer:** D

**Explanation:**

An Azure key vault is the correct answer. To ensure that the access keys for storage1 rotate automatically, you should store the keys in Azure Key Vault and enable key rotation policies. Key Vault allows for the secure storage of secrets, including storage account access keys, and provides the ability to configure automatic key rotation.
A backup vault and a Recovery Services vault are incorrect because they are used for backing up data and managing disaster recovery, not for rotating access keys.
Redundancy for storage1 is incorrect because it deals with the replication of storage data across different locations for high availability, not key management.
Lifecycle management for storage1 is incorrect because it manages data retention policies, not access key rotation.
Reference(s):
https://learn.microsoft.com/en-us/azure/key-vault/general/overview
https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal

---

### Question 47

You have an Azure subscription named Subscription1 that contains the resources as shown in the following table.

You plan to configure Azure Backup reports for Vault1.

You are configuring the diagnostic settings for the AzureBackupReports log.

Which **storage accounts** can you use for the Azure Backup reports of Vault1?

**Options:**

- **A.** Storage1 only
- **B.** Storage2 only
- **C.** Storage3 only ✅
- **D.** Storage1, Storage2, and Storage3

**Correct answer:** C

**Explanation:**

**Storage3 only** is correct because Azure Backup requires that the storage account used for diagnostic settings (like Azure Backup reports) be in the same region as the Recovery Services vault (Vault1). Since Vault1 is in the **West Europe** region, only **Storage3**, located in **West Europe**, meets this requirement.

**Storage1 only** is incorrect because Storage1 is in the East US region, which does not match the West Europe region of Vault1.

**Storage2 only** is incorrect because Storage2 is in the West US region, which also does not match the West Europe region of Vault1.

**Storage1, Storage2, and Storage3** is incorrect because only Storage3 is in the same region as Vault1. Storage1 and Storage2 are in East US and West US, respectively, and therefore cannot be used.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/backup/backup-azure-files?tabs=backup-center

- https://docs.microsoft.com/en-us/azure/backup/backup-create-rs-vault

---

### Question 2

You purchase a new Azure subscription named Subscription1.

You create a virtual machine named VM1 in Subscription1. VM1 is not protected by Azure Backup.

You need to protect VM1 by using Azure Backup. Backups must be created at 01:00 and stored for 30 days.

Which **location** should you choose to store the backups?

**Options:**

- **A.** A blob container
- **B.** A file share
- **C.** A Recovery Services vault ✅
- **D.** A storage account

**Correct answer:** C

**Explanation:**

**A Recovery Services vault** is the **correct** answer because Azure Backup requires a Recovery Services vault to store backup data for virtual machines. The Recovery Services vault provides backup management and retention policies, allowing backups of VM1 to be created at the specified time (01:00) and retained for 30 days.

**A blob container** is **incorrect** because blob containers in Azure Storage accounts are not directly used for Azure VM backups. Azure Backup does not store VM backups in blob containers.

**A file share** is **incorrect** because Azure file shares are meant for file-level storage and sharing, not for storing VM backups using Azure Backup.

**A storage account** is **incorrect** because, although storage accounts are part of the Azure storage infrastructure, VM backups using Azure Backup require a Recovery Services vault rather than a generic storage account.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/backup/backup-overview

- https://learn.microsoft.com/en-us/azure/backup/backup-azure-vms-first-look-arm

---

### Question 3

You have an Azure subscription. The subscription contains virtual machines that connect to a virtual network named VNet1.

You plan to configure Azure Monitor for VM Insights.

You need to ensure that all the virtual machines only communicate with Azure Monitor through VNet1.

What should you create first?

**Options:**

- **A.** a private endpoint
- **B.** an Azure Monitor Private Link Scope (AMPLS) ✅
- **C.** a data collection rule (DCR)
- **D.** a Log Analytics workspace

**Correct answer:** B

**Explanation:**

**an Azure Monitor Private Link Scope (AMPLS)** is the **correct** answer because to ensure that virtual machines only communicate with Azure Monitor through the specified virtual network (VNet1), you need to set up a private link connection. An Azure Monitor Private Link Scope (AMPLS) allows you to create a private endpoint that enables secure communication between your virtual machines and Azure Monitor over the virtual network.

**a private endpoint** is **incorrect** because, while it is part of the setup, it must be associated with an AMPLS to connect the virtual machines to Azure Monitor privately. AMPLS is the primary requirement for establishing private connectivity.

**a data collection rule (DCR)** is **incorrect** because DCRs are used to define which data to collect from resources for Azure Monitor but do not control network connectivity or enable private communication with Azure Monitor.

**a Log Analytics workspace** is **incorrect** because, while required for Azure Monitor for VM Insights, it does not enable private connectivity with Azure Monitor. The AMPLS is necessary to restrict communication through VNet1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/azure-monitor/logs/private-link-security#advantages

---

### Question 6

You have two Azure virtual machines named VM1 and VM2. You have two Recovery Services vaults named RSV1 and RSV2. VM2 is backed up to RSV1. You need to back up VM2 to RSV2. **What should you do first?**

**Options:**

- **A.** From the RSV1 blade, click Backup items and stop the VM2 backup. ✅
- **B.** From the RSV2 blade, click Backup. From the Backup blade, select the backup for the virtual machine, and then click Backup.
- **C.** From the VM2 blade, click Disaster recovery, click Replication settings, and then select RSV2 as the Recovery Services vault.
- **D.** From the RSV1 blade, click Backup Jobs and export the VM2 job.

**Correct answer:** A

**Explanation:**

### Correct

**Option A. From the RSV1 blade, click Backup items and stop the VM2 backup.**

- This is the correct step.

- A VM can only be associated with **one Recovery Services vault** for backup at a time.

- To back up VM2 to RSV2, you must first stop its existing backup in RSV1. Once stopped, you can then configure backup in RSV2.

### Incorrect

**Option B. From the RSV2 blade, click Backup. From the Backup blade, select the backup for the virtual machine, and then click Backup.**

- Incorrect because you cannot directly configure a VM to back up to a second vault while it is already associated with another vault.

- The existing backup in RSV1 must be stopped first.

**Option C. From the VM2 blade, click Disaster recovery, click Replication settings, and then select RSV2 as the Recovery Services vault.**

- Incorrect because **Disaster Recovery** (Azure Site Recovery) is different from **Backup**.

- Replication settings are for failover scenarios, not for configuring backups.

**Option D. From the RSV1 blade, click Backup Jobs and export the VM2 job.**

- Incorrect because backup jobs cannot be exported and moved between vaults.

- You must stop the existing backup and then reconfigure it in the new vault.

---

### Question 8

** You create a Recovery Services vault backup policy named Policy1. Based on the information provided, select the answer choice that completes the statement correctly:** **“The backup that occurs on Sunday, March 1, will be retained for ___________.”**

Based on the information provided, select the answer choice that completes the following statement correctly.

**“The backup that occurs on Sunday, March 1, will be retained for ___________.”**

**Options:**

- **A.** 30 days
- **B.** 10 weeks
- **C.** 36 months
- **D.** 10 years ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. 10 years** Explanation: This is correct. In Azure Backup, long‑term retention can be configured for specific backups (weekly, monthly, yearly). If the policy specifies that the backup taken on March 1 (a weekly or yearly backup point) is retained for **10 years**, then that is the correct retention period. This aligns with enterprise compliance and archival requirements.

### Incorrect

**Option A. 30 days** Incorrect. A 30‑day retention period applies to **daily backups** in short‑term retention, not to the March 1 backup if it is designated as a long‑term retention point.

**Option B. 10 weeks** Incorrect. Weekly retention may apply to certain backups, but the exhibit specifies a much longer retention period (10 years).

**Option C. 36 months** Incorrect. 36 months (3 years) is a possible retention option, but in this case, the policy explicitly states **10 years**, which overrides shorter retention settings.

---

### Question 10

You have an Azure subscription that contains the resources shown in the following table.

You plan to create a data collection rule named DCR1 in Azure Monitor.

Which resources can you set as data sources in DCR1?

**Options:**

- **A.** VM1 only ✅
- **B.** VM1 and storage1 only
- **C.** VM1, storage1, and DB1 only
- **D.** VM1, storage1, Workspace1, and DB1

**Correct answer:** A

**Explanation:**

**Correct**

**Option A. VM1 only** Correct because **Azure Monitor data collection rules (DCRs)** can collect telemetry directly from **Azure virtual machines (VMs)** using the Azure Monitor agent. VM1 is a valid data source for DCR1.

**Incorrect**

**Option B. VM1 and storage1 only** Incorrect because while VM1 is valid, **storage accounts (storage1)** are not directly supported as data sources for DCRs. Storage accounts generate diagnostic logs and metrics, but these are collected through diagnostic settings, not via DCR.

**Option C. VM1, storage1, and DB1 only** Incorrect because **Azure SQL databases (DB1)** also use diagnostic settings to send logs and metrics to destinations like Log Analytics, Event Hubs, or Storage. They are not configured as direct data sources in DCR.

**Option D. VM1, storage1, Workspace1, and DB1** Incorrect because **Log Analytics workspaces (Workspace1)** are destinations for collected data, not sources. Similarly, storage accounts and databases are not valid direct sources for DCR. Only VM1 qualifies.

---

### Question 16

**You have an Azure subscription that contains an Azure SQL database named DB1.** **You plan to use Azure Monitor to monitor the performance of DB1. You must be able to run queries to analyze log data.** **Which destination should you configure in the Diagnostic settings of DB1?**

**Options:**

- **A.** Archive to a storage account
- **B.** Send to a Log Analytics workspace ✅
- **C.** Stream to a Azure event hub

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Send to a Log Analytics workspace**

- Correct because sending diagnostic logs to a **Log Analytics workspace** allows you to query and analyze log data using **Kusto Query Language (KQL)**.

- This is the required destination when you want to run queries and perform advanced analytics on monitoring data.

- It integrates seamlessly with **Azure Monitor**, enabling dashboards, alerts, and deep insights.

### Incorrect

**Option A. Archive to a storage account**

- Incorrect because archiving logs to a storage account is useful for **long‑term retention** or compliance, but it does not allow you to run queries directly.

- You would need to export and process the data manually, which does not meet the requirement.

**Option C. Stream to an Azure event hub**

- Incorrect because streaming logs to Event Hub is intended for **integration with external SIEM or analytics tools**.

- While useful for external processing, it does not provide native query capabilities within Azure Monitor.

---

### Question 17

**You purchase a new Azure subscription named Subscription1.** **You create a virtual machine named VM1 in Subscription1. VM1 is not protected by Azure Backup.** **You need to protect VM1 by using Azure Backup. Backups must be created at 01:00 and stored for 30 days.** **Which object should you use to configure the protection for VM1?**

**Options:**

- **A.** A backup policy ✅
- **B.** A batch job
- **C.** A batch schedule
- **D.** A recovery plan

**Correct answer:** A

**Explanation:**

### Correct

**Option A. A backup policy**

- Correct because Azure Backup uses **backup policies** to define the **schedule (01:00 daily)** and **retention period (30 days)**.

- When you enable backup for VM1, you must associate it with a backup policy that enforces these rules.

- This is the required object to configure protection and meet the stated requirements.

### Incorrect

**Option B. A batch job**

- Incorrect because batch jobs are related to **Azure Batch service**, used for running parallel compute workloads, not for configuring backups.

**Option C. A batch schedule**

- Incorrect because batch schedules are also tied to **Azure Batch**, not Azure Backup.

- They cannot define backup timing or retention.

**Option D. A recovery plan**

- Incorrect because recovery plans are part of **Azure Site Recovery (ASR)**, used for disaster recovery orchestration.

- They do not configure backup schedules or retention.

---

### Question 23

You plan to use Azure Network Watcher to perform the following task:

Identify a security rule that prevents a network packet from reaching an Azure virtual machine.

Which feature should you use for the above task?

**Options:**

- **A.** IP flow verify ✅
- **B.** Next hop
- **C.** Packet capture
- **D.** Traffic Analytics

**Correct answer:** A

**Explanation:**

### Correct

**Option A. IP flow verify**

- Correct because **IP flow verify** allows you to test traffic from a source to a destination and determine whether it is allowed or denied by NSG rules.

- It identifies the specific **security rule** that blocks or permits the packet, which directly meets the requirement.

- This is the precise feature in Azure Network Watcher designed for troubleshooting NSG rule enforcement.

### Incorrect

**Option B. Next hop**

- Incorrect because **Next hop** is used to determine the routing path of a packet (e.g., whether traffic goes to the internet, virtual appliance, or VPN gateway).

- It does not identify NSG rules that block traffic.

**Option C. Packet capture**

- Incorrect because **Packet capture** collects traffic data for analysis.

- While useful for diagnosing network behavior, it does not directly identify which NSG rule is blocking traffic.

**Option D. Traffic Analytics**

- Incorrect because **Traffic Analytics** provides insights into traffic flow patterns and usage trends.

- It is not designed to pinpoint specific NSG rules that block packets.

###

---

### Question 30

You have an Azure App Service app named WebApp1 that contains two folders named Folder1 and Folder2.
You need to configure a daily backup of WebApp1. The solution must ensure that Folder2 is excluded from the backup.
What should you create first?

**Options:**

- **A.** An Azure Storage account ✅
- **B.** A Backup vault
- **C.** A Recovery Services vault
- **D.** A resource group

**Correct answer:** A

**Explanation:**

An Azure Storage account is the correct answer because Azure App Service backups require an Azure Storage account to store the backup data. When configuring the backup, you can specify which files and folders to include or exclude, allowing you to exclude Folder2 from the backup of WebApp1.
A Backup vault is incorrect because App Service backups do not use Backup vaults; they rely on Azure Storage accounts.
A Recovery Services vault is incorrect because Recovery Services vaults are used for Azure Backup and Azure Site Recovery, not for App Service backups.
A resource group is incorrect because, while required for organizing resources, it is not specifically needed to configure backups for App Service.
Reference(s):
https://learn.microsoft.com/en-us/azure/app-service/manage-backup

---

### Question 38

You plan to deploy several Azure virtual machines that run Windows Server 2022 in a virtual machine scale set by using an Azure Resource Manager template.
You need to ensure that NGINX is available on all the virtual machines after they are deployed.
What should you use? (Choose 2)

**Options:**

- **A.** a Desired State Configuration (DSC) extension ✅
- **B.** Azure Application Insights
- **C.** the Publish-AzVMDscConfiguration cmdlet ✅
- **D.** the New-AzConfigurationAssignment cmdlet

**Correct answer:** A, C

**Explanation:**

a Desired State Configuration (DSC) extension is the correct answer because the DSC extension allows you to define a desired state configuration for virtual machines in a scale set. This configuration can include installing and configuring software like NGINX on all virtual machines automatically after deployment.
the Publish-AzVMDscConfiguration cmdlet is also correct because this cmdlet is used to upload and publish a DSC configuration script to an Azure storage account. This script can then be used by the DSC extension to ensure NGINX is installed and configured on the virtual machines in the scale set.
Azure Application Insights is incorrect because Application Insights is a monitoring service used to track application performance and detect issues. It does not install or configure software like NGINX on virtual machines.
the New-AzConfigurationAssignment cmdlet is incorrect because this cmdlet is used to assign configurations in Azure Policy for governance, not for installing or configuring software on virtual machines.
Reference(s):
https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/dsc-overview
https://learn.microsoft.com/en-us/powershell/module/az.compute/publish-azvmdscconfiguration?view=azps-13.0.0
https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview
https://learn.microsoft.com/en-us/powershell/module/az.maintenance/new-azconfigurationassignment?view=azps-13.0.0

---

### Question 44

You have an Azure subscription that contains the resources shown in the following table.

All virtual machines run Windows Server.

On VM1, you back up a folder named Folder1 as shown in the following exhibit.

You plan to restore the backup to a different virtual machine.

You need to restore the backup to VM2.

What should you do first?

**Options:**

- **A.** From VM2, install the Windows Server Backup feature.
- **B.** From VM1, install the Microsoft Azure Recovery Services Agent.
- **C.** From VM1, install the Windows Server Backup feature.
- **D.** From VM2, install the Microsoft Azure Recovery Services Agent. ✅

**Correct answer:** D

**Explanation:**

**From VM2, install the Microsoft Azure Recovery Services Agent** is **correct** because in order to restore a backup from the Recovery Services vault to a different virtual machine (in this case, VM2), you need to have the Microsoft Azure Recovery Services (MARS) Agent installed on the destination VM. This agent enables the VM to communicate with the Recovery Services vault, allowing it to access and restore backups stored in Azure.

**From VM2, install the Windows Server Backup feature** is **incorrect** because the Windows Server Backup feature alone does not provide the necessary integration with Azure Recovery Services. The MARS Agent is required to retrieve backups from Azure.

**From VM1, install the Microsoft Azure Recovery Services Agent** is **incorrect** as the MARS Agent is already installed on VM1 to perform the initial backup. The task here is to restore the backup to VM2.

**From VM1, install the Windows Server Backup feature** is **incorrect** because this feature does not assist in restoring a backup to another VM. The backup is already configured on VM1, and the requirement is to restore it to VM2, which requires the MARS Agent on VM2.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/backup/backup-azure-restore-windows-server

---

### Question 48

You plan to use Azure Network Watcher to perform the following task:
Validate outbound connectivity from an Azure virtual machine to an external host.
Which feature should you use for the above task?

**Options:**

- **A.** Connection troubleshoot ✅
- **B.** IP flow verify
- **C.** Next hop
- **D.** NSG flow logs
- **E.** Traffic Analytics

**Correct answer:** A

**Explanation:**

Connection troubleshoot is the correct option because it is specifically designed to validate outbound connectivity from an Azure virtual machine (VM) to an external host. This feature checks the end-to-end connection and identifies if the connection succeeds or fails, providing insights into network latency, packet loss, and the point of failure.
IP flow verify is incorrect because it checks whether a specific packet is allowed or denied by security rules, but it does not validate the entire outbound connection path.
Next hop is incorrect because it shows the next hop a packet will take to reach its destination but does not validate the outbound connection itself.
NSG flow logs is incorrect because it provides a record of traffic through network security groups (NSGs) but does not validate outbound connectivity.
Traffic Analytics is incorrect because it analyzes traffic patterns and usage but does not validate specific outbound connections.
Reference(s):
https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-connectivity-overview
https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-overview

---

### Question 50

You have an Azure subscription that contains 10 network security groups (NSGs), 10 virtual machines, and a Log Analytics workspace named Workspace1. Each NSG is connected to a virtual machine network interface.
You need to configure an Azure Monitor Network Insights alert that will be triggered when suspicious network traffic is detected.
What should you do first?

**Options:**

- **A.** Deploy Connection Monitor.
- **B.** Configure NSG flow logs. ✅
- **C.** Configure data collection endpoints.
- **D.** Configure a private link.

**Correct answer:** B

**Explanation:**

Configure NSG flow logs is the correct answer because Azure Monitor Network Insights relies on NSG flow logs to analyze and detect suspicious network traffic. NSG flow logs capture detailed information about IP traffic flowing through network security groups, including source and destination IPs, ports, and protocols.
Enabling NSG flow logs is a prerequisite for Azure Monitor to process network traffic data and identify anomalies or suspicious activities. These logs are sent to a Log Analytics workspace (e.g., Workspace1) for further analysis.
Deploy Connection Monitor is incorrect because Connection Monitor is used for monitoring network connectivity and performance between Azure resources or between Azure and on-premises resources. It does not directly facilitate alerting based on suspicious network traffic.
Configure data collection endpoints is incorrect because data collection endpoints (DCEs) are primarily used for routing Azure Monitor Agent data. They are not directly related to enabling NSG flow logs or configuring Network Insights alerts.
Configure a private link is incorrect because private links are used to securely access Azure services over a private IP address. They do not play a role in enabling network traffic analysis or triggering alerts for suspicious traffic.
Reference(s):
https://learn.microsoft.com/en-us/azure/network-watcher/nsg-flow-logs-overview
https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-overview
https://learn.microsoft.com/en-us/azure/network-watcher/network-insights-overview

---

### Question 7

You have an Azure subscription.

You plan to deploy a storage account named storage1 by using the Azure Resource Manager (ARM) template as shown in the below exhibit.

For the statement below, select Yes if the statement is true. Otherwise, select No.

**“Only users located in the East US Azure region can connect to storage1”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is the **correct** answer because the allowBlobPublicAccess property is set to **true**, and the **networkAcls** section has the following configurations:

- “defaultAction”: “Allow”

- “bypass”: “AzureServices”

- “ipRules”: []

When allowBlobPublicAccess is set to true, and no IP-based ACLs or region-based restrictions are configured (ipRules is empty), the storage account is accessible publicly over the internet if someone has the access keys.

The “defaultAction”: “Allow” setting means all traffic is allowed by default, and no restrictions are in place to limit access to users located in the East US Azure region or any specific IP ranges.

To restrict access specifically to the East US region, the network ACLs must be configured with IP rules or virtual network rules that explicitly limit access to that region.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-configure

- https://learn.microsoft.com/en-us/azure/storage/blobs/versioning-overview

- https://learn.microsoft.com/en-us/azure/storage/blobs/versioning-enable?tabs=portal

- https://learn.microsoft.com/en-us/azure/templates/microsoft.storage/storageaccounts/blobservices?pivots=deployment-language-arm-template#restorepolicyproperties-1

---

### Question 10

You have an Azure subscription that contains a Recovery Services vault named Vault1.

You need to enable multi-user authorization (MAU) for Vault1.

Which resource should you create first?

**Options:**

- **A.** an administrative unit
- **B.** a managed identity
- **C.** a resource guard ✅
- **D.** a custom Azure role

**Correct answer:** C

**Explanation:**

**a resource guard** is **correct** because enabling Multi-User Authorization (MAU) in a Recovery Services vault requires creating a resource guard. A resource guard protects critical operations (such as disabling soft delete or stopping backup) by requiring additional authorization from designated approvers. The resource guard enforces MAU by ensuring operations cannot proceed without explicit approval from specified users or groups.

**an administrative unit** is **incorrect** because administrative units are used for grouping Azure AD resources and delegating administrative tasks, not for securing critical Recovery Services vault operations.

**a managed identity** is **incorrect** because managed identities are used to securely authenticate services with Azure resources, not for enabling or managing MAU in a Recovery Services vault.

**a custom Azure role** is **incorrect** because, while custom roles may provide granular permissions, they are not required to enable MAU. The primary requirement for MAU is the creation of a resource guard.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/storage/blobs/encryption-scope-manage?tabs=portal

---

### Question 23

You have an Azure subscription named Subscription1 that contains the resources shown in the following table. In storage1, you create a blob container named blob1 and a file share named share1. Which resources can be backed up to Vault1?

In storage1, you create a blob container named blob1 and a file share named share1.

Which resources can be backed up to **Vault1**?

**Options:**

- **A.** VM1 only ✅
- **B.** VM1 and share1 only
- **C.** VM1 and SQL1 only
- **D.** VM1, storage1, and SQL1 only
- **E.** VM1, blob1, share1, and SQL1

**Correct answer:** A

**Explanation:**

### Correct

**Option A. VM1 only**

- Correct because Azure Backup supports backing up **Azure virtual machines** directly to a Recovery Services vault (Vault1).

- While Azure Backup can protect Azure Files (file shares), this requires explicit configuration. In the exam scenario, only **VM1** is eligible for backup to Vault1 by default.

- Blob storage and SQL databases are not directly backed up to a Recovery Services vault. They require other services (e.g., Azure Storage replication, Azure SQL automated backups).

### Incorrect

**Option B. VM1 and share1 only**

- Incorrect because although Azure Files can be backed up, the scenario does not indicate that share1 is configured for backup. The default supported resource here is **VM1 only**.

**Option C. VM1 and SQL1 only**

- Incorrect because Azure SQL databases are not backed up to Recovery Services vaults. They use **automated backups** and **point‑in‑time restore** features instead.

**Option D. VM1, storage1, and SQL1 only**

- Incorrect because “storage1” (the account itself) cannot be backed up to Vault1. Only specific services like Azure Files are supported, and SQL1 uses its own backup mechanism.

**Option E. VM1, blob1, share1, and SQL1**

- Incorrect because blob containers cannot be backed up to Vault1, SQL1 uses its own backup system, and share1 is not explicitly configured in this scenario.

---

### Question 30

You have an Azure App Service app named WebApp1 that contains two folders named Folder1 and Folder2.

You need to configure a daily backup of WebApp1. The solution must ensure that Folder2 is excluded from the backup.

What should you use to exclude Folder2?

**Options:**

- **A.** A _backup.filter file ✅
- **B.** A backup policy
- **C.** A lock
- **D.** A WebJob

**Correct answer:** A

**Explanation:**

**A _backup.filter file** is the **correct** answer because, in Azure App Service, you can exclude specific files or folders from a backup by creating a _backup.filter file in the root directory of the app. This file allows you to specify any files or folders that should be excluded from the backup, such as Folder2.

**A backup policy** is **incorrect** because Azure App Service does not use backup policies to exclude specific folders; it relies on the _backup.filter file.

**A lock** is **incorrect** because locks are used to prevent accidental modification or deletion of resources, not to control backup contents.

**A WebJob** is **incorrect** because WebJobs are used to run background tasks in Azure App Service, not to manage backup configurations or exclusions.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/app-service/manage-backup

---

### Question 46

You have the Azure virtual machines shown in the following table.

You have a Recovery Services vault that protects VM1 and VM2.

You need to protect VM3 and VM4 by using Recovery Services.

What should you do first?

**Options:**

- **A.** Create a new Recovery Services vault ✅
- **B.** Create a storage account
- **C.** Configure the extensions for VM3 and VM4
- **D.** Create a new backup policy

**Correct answer:** A

**Explanation:**

**Create a new Recovery Services vault** is **correct** because a Recovery Services vault must be in the same region as the virtual machines it protects. Since VM3 and VM4 are in the “North Europe” region, a new Recovery Services vault must be created in that region to back up these virtual machines.

**Create a storage account** is **incorrect** because a storage account is not required for setting up backups through Recovery Services Vaults.

**Configure the extensions for VM3 and VM4** is **incorrect** because configuring extensions is not the initial step required to back up these VMs. Extensions are typically configured as part of the backup process.

**Create a new backup policy** is **incorrect** because a backup policy does not address the requirement of having a Recovery Services vault in the correct region for VM3 and VM4.

**Reference(s):**

https://docs.microsoft.com/en-us/azure/site-recovery/azure-to-azure-tutorial-enable-replication

---

### Question 55

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.**

You manage a virtual network named VNet1 that is hosted in the West US Azure region.

VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.

You need to inspect all the network traffic from VM1 to VM2 for a period of three hours.

**Solution**: From Azure Monitor, you create a metric on Network In and Network Out.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because creating a metric on Network In and Network Out in Azure Monitor will only provide information on the volume of network traffic, not the contents or details of the network traffic. To inspect all network traffic between VM1 and VM2, you would need to use a tool or service that allows for deeper traffic inspection, such as Azure Network Watcher with Packet Capture or a Network Security Group flow log.

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/azure-monitor/platform/metrics-supported

---

## Practice Set 9

Source: https://skillcertpro.com/az-104-exam-questions/9/

### Question 1

You have an Azure subscription named Sub1 that contains the resources shown in the following table.

**Sub1 contains the following alert rule:**

- **Name**: Alert1

- **Scope**: All resource groups in Sub1

– Include all future resources

- **Condition**: All administrative operations

- **Actions**: Action1

**Sub1 contains the following alert processing rule**

- **Name**: Rule1

- **Scope**: Sub1

- **Rule type**: Suppress notifications

- **Apply the rule**: On a specific time

– **Start**: August 10, 2022

– **End**: August 13, 2022

For the statement below, select Yes if the statement is true. Otherwise, select No.

**“If you create a resource group in Sub1 on August 11, 2022, Alert1 is listed in the Azure portal.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

- **Option A. Yes** Correct because **Alert1** is scoped to all resource groups in Sub1 and is configured to include **all future resources**. This means that when a new resource group is created (on August 11, 2022), the alert rule will automatically apply to it.

Even though **Rule1 suppresses notifications** between August 10–13, suppression only affects **alert actions/notifications**, not the visibility of the alert rule itself. Therefore, Alert1 will still be **listed in the Azure portal**.

### Incorrect

- **Option B. No** Incorrect because suppression does not remove or hide the alert rule from the portal. It only prevents notifications from being sent during the specified time window. The alert rule remains visible and applicable to new resources.

###

---

### Question 2

You want to monitor the performance and resource utilization of your Azure App Service web app. Which metrics can you track using Azure Monitor, and how can you set up alerts based on these metrics to proactively identify and address performance issues?

**Options:**

- **A.** Requests, Average Response Time, CPU Usage, Memory Usage ✅
- **B.** Data In/Data Out ✅
- **C.** Requests by IP Address
- **D.** HTTP Error Codes (e.g., 5xx errors) ✅

**Correct answer:** A, B, D

**Explanation:**

Let’s analyze each metric in the context of monitoring Azure App Service web app performance and resource utilization, and how they relate to setting up Azure Monitor alerts:

**Requests, Average Response Time, CPU Usage, Memory Usage:**

These are core performance and resource utilization metrics for web applications.

Azure Monitor can track these metrics.

You can set up alerts based on thresholds for these metrics (e.g., high CPU usage, slow response times) to proactively identify performance issues.

These are very useful metrics for monitoring app service health.

**Data In/Data Out:**

These metrics are useful for monitoring network traffic, which can indirectly affect performance.

Azure Monitor can track these metrics.

Alerts can be set up for unusual data transfer patterns.

**Requests by IP Address:**

While Azure Monitor can track requests, breaking them down by IP address is more relevant for security and access control purposes.

While this is a metric, it is less important for general performance monitoring.

**HTTP Error Codes (e.g., 5xx errors):**

These metrics are crucial for identifying application errors and availability issues.

Azure Monitor can track these metrics.

Alerts can be set up for high error rates to quickly address application problems.

**Analysis:**

Azure Monitor is designed to track a wide range of metrics for Azure App Service, including performance, resource utilization, and application errors.

The metrics: Requests, Average Response Time, CPU Usage, Memory Usage, Data In/Data Out, and HTTP Error Codes are all valuable for monitoring app service performance.

Requests by IP address is more security based.

**Conclusion:**

The most relevant metrics for monitoring performance and resource utilization, and setting up alerts, are:

**Requests, Average Response Time, CPU Usage, Memory Usage**

**Data In/Data Out**

**HTTP Error Codes (e.g., 5xx errors)**

---

### Question 4

You have implemented Azure Monitor to collect logs from your Azure resources. You want to analyze these logs to identify patterns, trends, and anomalies. Which Azure service can you use to perform advanced log analytics and visualize the log data?

**Options:**

- **A.** Azure Databricks
- **B.** Azure Sentinel
- **C.** Azure Data Explorer ✅
- **D.** Azure Synapse Analytics

**Correct answer:** C

**Explanation:**

The correct answer is **Azure Data Explorer**. Here’s why:

**Azure Data Explorer (ADX):**

ADX is a fast, fully managed data analytics service for real-time analysis of large volumes of data streaming from applications, websites, IoT devices, and more. It excels at log and telemetry data analysis. 

It uses the Kusto Query Language (KQL), which is specifically designed for exploring and analyzing time-series data, making it ideal for the kind of log analysis you’re describing. 

It provides powerful visualization tools and integrations for creating dashboards and reports. 

**Azure Databricks:**

Databricks is primarily for big data processing and machine learning using Apache Spark. While it can handle log data, it’s not optimized for real-time log analytics in the same way as ADX.   **Azure Sentinel:**

Sentinel is a security information and event management (SIEM) and security orchestration, automation, and response (SOAR) solution. While it uses log data, its focus is on security analysis, threat detection, and response, not general log analytics. 

**Azure Synapse Analytics:**

Synapse Analytics is a data warehousing and big data analytics service.

It’s designed for large-scale data warehousing and analytics, not specifically for real-time log analysis and visualization.

---

### Question 7

You have an Azure subscription that contains a virtual machine named VM1.

You need to back up VM1. The solution must ensure that backups are stored across three availability zones in the primary region.

Which three actions should you perform in sequence?

ACTIONS

1. Configure a replication policy.

2. Create a Recovery Services vault.

3. Set Replication to Zone-redundant storage (ZRS).

4. Set Replication to Locally-redundant storage (LRS).

5. For VM1, create a backup policy and configure the backup.

**Options:**

- **A.** 2 - 5 - 3
- **B.** 2 - 3 - 5 ✅
- **C.** 1 - 2 - 3
- **D.** 5 - 1 - 2

**Correct answer:** B

**Explanation:**

Correct Sequence of Actions:

✅ 2. Create a Recovery Services vault.✅ 3. Set Replication to Zone-redundant storage (ZRS).✅ 5. For VM1, create a backup policy and configure the backup.

Explanation of Correct Options:

1️⃣ Create a Recovery Services vault (RSV) (✅ Correct)

A Recovery Services vault is required to store and manage backups of Azure resources, including virtual machines.

It provides backup and disaster recovery capabilities.

2️⃣ Set Replication to Zone-redundant storage (ZRS) (✅ Correct)

Since the requirement is to store backups across three availability zones in the primary region, Zone-redundant storage (ZRS) must be selected.

ZRS ensures that data is replicated synchronously across three availability zones, providing high availability.

3️⃣ For VM1, create a backup policy and configure the backup (✅ Correct)

A backup policy defines how frequently backups are taken and how long they are retained.

You must configure VM1 to use the backup policy to ensure automated backups are created and stored in the Recovery Services vault.

Explanation of Incorrect Options:

❌ 1. Configure a replication policy (Incorrect)

Replication policies are used for Azure Site Recovery (ASR), which is designed for disaster recovery, not backup.

This does not meet the requirement of storing VM1’s backups across three availability zones.

❌ 4. Set Replication to Locally-redundant storage (LRS) (Incorrect)

LRS only keeps data copies within a single data center (within one availability zone).

Since the requirement is to store backups across three availability zones, LRS does not meet the requirement.

**Reference(s):**

https://learn.microsoft.com/en-us/azure/backup/backup-create-recovery-services-vault

https://learn.microsoft.com/en-us/azure/backup/quick-backup-vm-portal

---

### Question 11

**You have a Recovery Services vault named **RSV1**.** RSV1** has a backup policy that retains instant snapshots for five days and daily backups for 14 days.** RSV1** performs daily backups of **VM1**.** VM1** hosts a static website that was updated eight days ago.** **You need to recover **VM1** to a point eight days ago. The solution must minimize downtime.** **What should you do first?**

**Options:**

- **A.** Delete VM1.
- **B.** Restore VM1 by using the Create new restore configuration option. ✅
- **C.** Deallocate VM1.
- **D.** Restore VM1 by using the Replace existing restore configuration option.

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Restore VM1 by using the ****Create new**** restore configuration option**

- Correct because the backup policy retains **daily backups for 14 days**, so a restore point from eight days ago is available.

- To minimize downtime, you should first restore VM1 as a **new VM** using the Create new option.

- This allows you to validate the restored VM before replacing or switching over, ensuring business continuity with minimal disruption.

### Incorrect

**Option A. Delete VM1**

- Incorrect because deleting the VM before restoring would cause unnecessary downtime and risk of data loss.

- You should restore first, not delete.

**Option C. Deallocate VM1**

- Incorrect because deallocating only stops the VM and releases compute resources.

- It does not help in restoring to a previous backup point.

**Option D. Restore VM1 by using the ****Replace existing**** restore configuration option**

- Incorrect because replacing the existing VM directly would cause downtime during the restore process.

- The requirement is to minimize downtime, so creating a new VM first is the better approach.

---

### Question 14

Your company‘s compliance requirements mandate that you retain backups for a specific duration. How can you configure retention policies in Azure Backup to ensure that backups are stored for the required period?

**Options:**

- **A.** C. Define the “Retention range“ in the Azure Backup policy. ✅
- **B.** B. Use Azure Policy to enforce backup retention rules.
- **C.** D. Configure the storage account‘s lifecycle management policy.
- **D.** A. Set the “Backup frequency“ in the Azure Backup policy.

**Correct answer:** A

**Explanation:**

**Correct Answer:**

**C. Define the “Retention range“ in the Azure Backup policy:**

This is the correct way to configure retention. Within the Azure Backup policy, you define the retention range for your backups. This range specifies how long backups should be kept (e.g., days, weeks, months, years). This is the primary mechanism for controlling how long backups are retained.

In Azure Backup, the Retention range setting within a Backup policy allows administrators to define how long backups should be stored. This includes daily, weekly, monthly, and yearly retention options to meet compliance requirements.

**Incorrect Answers:**

**A. Set the “Backup frequency“ in the Azure Backup policy:**

Backup frequency determines how often backups are taken (e.g., daily, weekly). It does not directly control how long those backups are kept. You could take daily backups but only retain them for a week, or take weekly backups and retain them for a year. Frequency and retention are separate settings.

**B. Use Azure Policy to enforce backup retention rules:**

Azure Policy can be used to audit compliance with backup policies (including retention), but it doesn’t directly set the retention policy itself. You still configure the retention within the Backup policy; Azure Policy can then check if that policy meets your organization’s requirements. It’s about checking compliance, not setting the retention.

Azure Policy is used to enforce organizational standards and compliance across Azure resources, but it does not directly configure retention policies for Azure Backup. Retention policies are configured within the Azure Backup service itself.

**D. Configure the storage account‘s lifecycle management policy:**

Storage account lifecycle management is for managing the lifecycle of blobs within a storage account (moving them between tiers, deleting them after a certain period). It’s not used for managing the retention of backups created by Azure Backup. Backups are stored in Recovery Services vaults, not directly in storage accounts.

---

### Question 15

You have an Azure subscription that contains the vaults shown in the following table.

You create a storage account that contains the resources shown in the following table.

To which vault can you back up **cont1**?

**Options:**

- **A.** Backup1 only ✅
- **B.** Recovery1 only
- **C.** Backup1 or Recovery1
- **D.** Cannot be backed up to Backup1 or Recovery1

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Backup1 only** Correct because **Azure Backup** supports backing up **Azure file shares** (like cont1) only to a **Backup vault**. Recovery Services vaults are used for VMs, databases, and other workloads, but file shares must be protected using a Backup vault.

### Incorrect

**Option B. Recovery1 only** Incorrect because Recovery Services vaults cannot back up Azure file shares. They are designed for VM backups, SQL databases, and other workloads.

**Option C. Backup1 or Recovery1** Incorrect because only Backup vaults support file share backups. Recovery Services vaults do not support this scenario.

**Option D. Cannot be backed up to Backup1 or Recovery1** Incorrect because file shares can indeed be backed up, but only to a Backup vault.

---

### Question 31

You have an Azure subscription that contains the resources shown in the following table.

You need to manage outbound traffic from VNET1 by using Firewall1.

What should you do first?

**Options:**

- **A.** Create a route table. ✅
- **B.** Configure the Hybrid Connection Manager.
- **C.** Create an Azure Network Watcher.
- **D.** Upgrade ASP1 to the Premium SKU.

**Correct answer:** A

**Explanation:**

**Create a route table** is **correct** because to manage outbound traffic from a virtual network (VNET1) using Azure Firewall (Firewall1), you must first create a route table. The route table is used to define how outbound traffic is directed through the Azure Firewall. Specifically, you configure a user-defined route (UDR) in the route table to ensure that outbound traffic is routed through the Azure Firewall. Without this configuration, the traffic will not pass through the firewall, and you won’t be able to control or manage it effectively.

**Configure the Hybrid Connection Manager** is **incorrect** because Hybrid Connection Manager is used to connect Azure App Services to on-premises resources securely. It is not relevant to managing outbound traffic via Azure Firewall.

**Create an Azure Network Watcher** is **incorrect** because Azure Network Watcher is used for monitoring and diagnosing network issues, not for managing or directing outbound traffic through an Azure Firewall.

**Upgrade ASP1 to the Premium SKU** is **incorrect** because upgrading to the Premium SKU of the App Service Plan does not affect the routing of outbound traffic through an Azure Firewall.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/app-service/network-secure-outbound-traffic-azure-firewall

- https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-create-route-table-portal

- https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview

---

### Question 35

You have a subscription named Subscription1. Subscription1 has one Azure virtual machine named VM1. You can’t seem to login to the server. What tool should you use to verify if the problem is the network security group?

**Options:**

- **A.** Azure Monitor VM metrics
- **B.** IP flow verify tool in Azure Network Watcher ✅
- **C.** Azure Virtual Network logs
- **D.** Azure Traffic Manager traffic view

**Correct answer:** B

**Explanation:**

**Correct Answer:**

**B. IP flow verify tool in Azure Network Watcher:** This is the correct answer. The IP flow verify tool in Network Watcher allows you to test network connectivity to and from a specific VM, including checking if NSG rules are blocking traffic. You specify the source and destination IP addresses and ports, and Network Watcher tells you whether the traffic is allowed or denied by NSGs, and if denied, which rule is causing the block. This is precisely what you need to troubleshoot NSG-related connectivity problems.

**Why other options are incorrect:**

**A. Azure Monitor VM metrics:** VM metrics provide performance data about the VM (CPU, memory, disk, network), but they don’t directly tell you if an NSG is blocking traffic. While network-related metrics might suggest a problem, they don’t pinpoint the NSG rule causing it. Metrics show what’s happening, not why.

**C. Azure Virtual Network logs:** While Network logs (including NSG flow logs) can be helpful for diagnosing network issues, they are not the most immediate tool for verifying NSG problems. Analyzing logs can be time-consuming. The IP flow verify tool provides a real-time, targeted test of NSG rules. Logs are useful for post-mortem analysis or long-term trends, but IP flow verify is best for immediate troubleshooting.

**D. Azure Traffic Manager traffic view:** Traffic Manager is used for global traffic routing and load balancing. It’s not relevant for troubleshooting connectivity problems with a single VM within a VNet. Traffic Manager works at the DNS level, directing traffic to different regions or instances, but it doesn’t inspect network traffic at the VM level.

---

### Question 44

You have an Azure virtual machine named VM1.

Azure collects events from VM1.

You are creating an alert rule in Azure Monitor to notify an administrator when an error is logged in the System event log of VM1.

Which target resource should you monitor in the alert rule?

**Options:**

- **A.** virtual machine extension
- **B.** virtual machine
- **C.** metric alert
- **D.** Azure Log Analytics workspace ✅

**Correct answer:** D

**Explanation:**

The correct answer is Azure Log Analytics workspace.

Here’s why:

**Azure Log Analytics workspace:**

Azure Monitor collects events from VM1 and stores them in a Log Analytics workspace.

Alert rules in Azure Monitor can query the Log Analytics workspace to detect specific events, such as errors in the System event log.

Therefore, you need to monitor the Log Analytics workspace to create an alert based on those logs.

Here’s why the other options are incorrect:

**virtual machine:** While the events originate from the virtual machine, you don’t directly monitor the VM for log events in this manner. The logs are sent to the Log Analytics workspace.

**virtual machine extension:** Virtual machine extensions are used to configure and manage VMs, not to monitor their event logs.

**metric alert:** Metric alerts monitor numerical values (metrics) like CPU utilization or disk I/O. Event logs are not metrics; they are event data.

---

### Question 45

You are using Azure Monitor Logs to query and analyze log data from your Azure resources. Which query languages and tools are supported by Azure Monitor Logs for performing advanced log analytics?

**Options:**

- **A.** Kusto Query Language (KQL) ✅
- **B.** Log Analytics Workspace
- **C.** PowerShell
- **D.** Azure CLI

**Correct answer:** A

**Explanation:**

Let’s analyze each option in the context of querying and analyzing log data from Azure resources using Azure Monitor Logs:

**Kusto Query Language (KQL):**

This is the primary query language used in Azure Monitor Logs. It’s designed for exploring and analyzing log data. 

KQL is the backbone of Azure Monitor Logs analysis.

**Log Analytics Workspace:**

This is the environment where log data is stored and queried. It’s a tool, not a query language.  

While you use the log analytics workspace to run the queries, it is not a query language itself.

**PowerShell:**

PowerShell can be used to interact with Azure Monitor Logs through cmdlets, but it’s not the primary query language for log analysis.

Powershell is used to manage and automate azure, including log analytics, but it is not the query language.

**Azure CLI:**

Similar to PowerShell, Azure CLI can be used to interact with Azure Monitor Logs, but it’s not the core query language.

Azure CLI is used to manage and automate azure, including log analytics, but it is not the query language.

**Analysis:**

KQL is the dedicated query language for Azure Monitor Logs.  

Log Analytics Workspace is the environment.

Powershell and Azure CLI are tools to interact with the service. 

**Conclusion:**

The primary query language supported by Azure Monitor Logs for performing advanced log analytics is:

**Kusto Query Language (KQL)**

---

### Question 53

A company has the following windows virtual machines deployed to their subscription in Azure

skillcertprovm1

skillcertprovm2

The Monitoring department needs to collect certain performance-based counters from the virtual machines. Which of the following could help accomplish this?

**Options:**

- **A.** A. Enable base collection of metrics
- **B.** B. Enable collection of boot diagnostics
- **C.** C. Enable collection of performance diagnostics
- **D.** D. Enable collection of guest OS diagnostics data ✅

**Correct answer:** D

**Explanation:**

If you enable collection of guest OS diagnostics data, you will have the ability to collect data on the performance counters on Windows based virtual machines. The Microsoft documentation mentions the following

The other options are invalid, because they won’t provide the ability to collect performance counters for Windows based virtual machines.

D. Enable collection of guest OS diagnostics data

✅ Explanation:

To collect performance-based counters (such as CPU usage, memory usage, disk I/O, and network usage) from Windows virtual machines in Azure, you must enable guest OS diagnostics.

This enables Azure Monitor to collect metrics and logs from inside the VM, such as:

Performance counters (CPU, disk, memory, etc.)

Event logs

Crash dumps

Azure Monitor can then be used to analyze and alert on these metrics.

❌ Other Options (Incorrect):

A. Enable base collection of metricsThis collects host-level metrics only, such as VM uptime, but not guest OS performance counters.

B. Enable collection of boot diagnosticsThis captures a screenshot and boot logs (serial output) of the VM during startup — not relevant to ongoing performance monitoring.

C. Enable collection of performance diagnosticsThis is not a specific Azure feature. It’s a vague term and not a valid configuration option in Azure.

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/monitor

---

### Question 3

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.

You manage a virtual network named VNet1 that is hosted in the West US Azure region.

VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.

You need to inspect all the network traffic from VM1 to VM2 for a period of three hours.

Solution: From Performance Monitor, you create a Data Collector Set (DCS).

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No

Explanation

Performance Monitor Data Collector Sets (DCS) in Windows Server are primarily for:

Collecting performance counters (CPU, memory, disk, etc.)

Tracking system performance over time

Inspecting all network traffic between two VMs (VM1 → VM2) requires packet-level analysis or flow logging, not just performance counters.

Recommended solutions:

Azure Network Watcher – Packet Capture

Network Security Group (NSG) Flow Logs with Traffic Analytics

Reference(s):

https://docs.microsoft.com/en-us/azure/azure-monitor/insights/network-performance-monitor

---

### Question 17

**Case Study: Contoso Ltd.’s Azure Storage Optimization**

(Note: There are multiple questions in this test based on this case study.)

Contoso Ltd., a medium-sized manufacturing company, recently migrated its on-premises infrastructure to Azure. The company is now focused on optimizing its storage solution to achieve better performance, cost-efficiency, and scalability.

Current Environment:

Contoso currently leverages Azure Blob Storage to store various file types, including logs, backups, and images. They are using a single general-purpose v2 storage account configured with Locally Redundant Storage (LRS) in the East US region. Application logs are frequently accessed for analysis, while backups are accessed less often. The company aims to minimize costs while upholding high availability and durability for their data.

Requirements:

- Optimize Storage: Tailor the storage solution for different data types, balancing performance with cost-efficiency.

- High Availability: Ensure frequently accessed data remains highly available, even during a regional outage.

- Cost-Effectiveness: Implement a cost-effective storage tier for data accessed infrequently.

- Minimal Overhead: Minimize the management overhead associated with the storage solution.

Security Requirements:

- Encryption: Protect sensitive data (e.g., backups) with robust encryption, both at rest and in transit.

- Access Restriction: Limit access to storage accounts to only authorized users and applications.

- Monitoring &amp; Auditing: Monitor and audit access to storage accounts for security and compliance.

- Data Protection: Implement measures to prevent accidental deletion of critical data.

Question:

To prevent accidental deletion of critical data in the storage accounts, which of the following features would you recommend Contoso enable?

**Options:**

- **A.** Azure Backup
- **B.** Azure Policy
- **C.** Soft delete for blobs ✅
- **D.** Blob versioning ✅

**Correct answer:** C, D

**Explanation:**

Both soft delete for blobs and blob versioning are essential features to prevent accidental deletion of critical data and provide the flexibility to recover previous versions of files.

Soft delete for blobs: This feature allows you to recover blobs (and their versions) that have been deleted, within a retention period that you specify. This is a safety net against accidental or malicious deletion.

Blob versioning: This feature keeps multiple versions of a blob, allowing you to restore a previous version if needed. This is useful if a file is accidentally overwritten or corrupted.

---

### Question 24

You plan to use Azure Network Watcher to perform the following task:

Identify a security rule that prevents a network packet from reaching an Azure virtual machine.

Which Azure feature should you use for this task?

**Options:**

- **A.** IP flow verify ✅
- **B.** Next hop
- **C.** Packet capture
- **D.** Security group view
- **E.** Traffic Analytics

**Correct answer:** A

**Explanation:**

IP Flow Verify ✅

Checks if a packet is allowed or denied to or from a VM based on NSG rules.

Tells you exactly which security rule blocked or allowed traffic.

Use case: Diagnose why a connection to a VM fails.

Next Hop

Determines the next hop of a packet from a VM to its destination.

Use case: Troubleshoot routing issues.

Not for NSG/security rule analysis. ❌

Packet Capture

Captures network traffic to and from a VM for detailed analysis.

Use case: Inspect packet contents, not NSG rule evaluation. ❌

Security Group View

Shows all NSG rules applied to a VM or subnet.

Use case: Visibility of rules, but does not analyze a specific packet. ❌

Traffic Analytics

Provides aggregated flow and traffic insights.

Use case: Monitoring and reporting, not per-packet rule evaluation. ❌

Reference:

https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview

Quick Preview:

---

### Question 29

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

Scenario:

You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.

Solution:

You create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Alerts in Azure Monitor can identify important information in your Log Analytics repository. They are created by alert rules that automatically run log searches at regular intervals, and if results of the log search match particular criteria, then an alert record is created and it can be configured to perform an automated response.

The Log Analytics agent collects monitoring data from the guest operating system and workloads of virtual machines in Azure, other cloud providers, and on-premises. It collects data into a Log Analytics workspace.

References:

https://docs.microsoft.com/en-us/azure/azure-monitor/learn/tutorial-response

https://docs.microsoft.com/en-us/azure/azure-monitor/platform/agents-overview

Quick Preview:

---

### Question 33

A company has the following resources defined in Azure:

- A Virtual Network named skillcertpro-net which connects to an on-premise network using a site-to-site VPN.

- The Virtual Network contains a subnet named SubnetA.

- The subnet is associated with a Network Security Group named skillcertpro-nsg.

- The subnet contains a Basic internal Load Balancer named skillcertprolg.

- The Load Balancer has three Azure Virtual Machines in the backend pool.

The company has a requirement to collect data about the IP addresses that connect to the Load Balancer. They also want their data team to run interactive queries from the Azure portal against the collected data.

Which of the following would be a resource that would need to be created for this purpose?

**Options:**

- **A.** A. An Azure Event Grid
- **B.** B. An Azure Log Analytics Workspace ✅
- **C.** C. An Azure Storage Account
- **D.** D. None of the above.

**Correct answer:** B

**Explanation:**

You can perform Interactive queries using Log Analytics. The below snapshot is taken from the Microsoft documentation

Option A is incorrect since this is used as an Event Hub

Option C is incorrect since this is used primarily for storage purposes

For more information on Log Analytics, please go to the below URL

https://docs.microsoft.com/en-us/azure/azure-monitor/overview

---

### Question 36

In Subscription1, you create an alert rule named Alert1. The Alert1 action group is configured as shown in the following exhibit:

Alert1 alert criteria is triggered every minute.

The number of email messages that Alert1 will send in an hour is ………. .

**Options:**

- **A.** 0
- **B.** 4
- **C.** 6
- **D.** 12
- **E.** 60 ✅

**Correct answer:** E

**Explanation:**

1. Alert Trigger Frequency

### Correct

**Option E. 60**

- **Correct.** Since the alert criteria is triggered **every minute**, the action group will send one email per trigger.

- Over the course of one hour (60 minutes), this results in **60 email messages** being sent.

- This matches the expected behavior of Azure Monitor alerts when no suppression or throttling is configured.

### Incorrect

**Option A. 0**

- **Incorrect.** The alert is configured and triggers every minute, so it will not send zero emails.

**Option B. 4**

- **Incorrect.** Four emails per hour would imply the alert triggers every 15 minutes, which is not the case here.

**Option C. 6**

- **Incorrect.** Six emails per hour would imply the alert triggers every 10 minutes. The actual frequency is every minute.

**Option D. 12**

- **Incorrect.** Twelve emails per hour would imply the alert triggers every 5 minutes. Again, the actual frequency is every minute.

The alert rule Alert1 is configured to evaluate every minute.

That means it checks its condition once per minute.

2. Action Group Behavior

The action group is configured to send an email notification when the alert is triggered.

By default, Azure Alerts send one email per trigger unless throttling or suppression is explicitly configured.

3. Calculating Emails per Hour

There are 60 minutes in an hour.

Since the alert triggers every minute:

Emails per hour=60 triggers/hour×1 email per trigger=60\text{Emails per hour} = 60 \text{ triggers/hour} \times 1 \text{ email per trigger} = 60Emails per hour=60 triggers/hour×1 email per trigger=60

✅ 4. Conclusion

The alert will send 60 emails per hour if there is no suppression or throttling applied.

https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-rate-limiting

Quick Preview:

---

### Question 38

You have an Azure subscription that contains several virtual machines (VMs) running in the East US region. You need to configure Azure Site Recovery (ASR) to replicate these VMs to the West US region for disaster recovery purposes. During failover, you want to ensure that the replicated VMs in the West US region are placed in a specific virtual network (VNET) and subnet.

Which of the following actions are REQUIRED to achieve this configuration? (Select all that apply)

**Options:**

- **A.** Customize the properties of each VM in the West US region after failover to ensure they are in the correct VNET and subnet.
- **B.** Create a Recovery Services vault in the West US region. ✅
- **C.** Enable replication for each VM in the East US region, selecting the West US region as the target. ✅
- **D.** Configure a replication policy in ASR, specifying the desired recovery point objective (RPO) and app-consistent snapshot frequency.
- **E.** Create a new virtual network (VNET) in the West US region. ✅
- **F.** Create a network mapping in ASR, associating the source VNET in the East US region with the target VNET and subnet in the West US region. ✅

**Correct answer:** B, C, E, F

**Explanation:**

Create a Recovery Services vault in the West US region

ASR requires a Recovery Services vault in the target region (not the source).

This vault orchestrates replication, failover, and recovery.

Enable replication for each VM in the East US region, selecting West US as the target

You must enable replication VM by VM.

The replication target must be the West US region.

Create a new virtual network (VNET) in the West US region

You need a target VNET in West US for failover VMs to connect to.

Without it, the VMs wouldn’t have a destination network.

Create a network mapping in ASR (East US → West US VNET and subnet)

Network mapping ensures that when failover happens, each VM connects to the correct VNET and subnet in the target region.

This is the step that guarantees your networking requirements are met.

❌ Not Required Actions:

Customize properties of each VM after failover → Optional. If network mapping is already set up, ASR will automatically connect VMs to the right subnet. Manual customization is only needed for special cases.

Configure a replication policy in ASR → Not required (a default policy is created automatically). You only configure one if you want to override default RPO/snapshot settings.

---

### Question 40

You need to create a custom Azure Policy definition to enforce specific tagging requirements for Azure resources.

How would you define the policy rule using Azure Policy language to ensure that resources are tagged with specific key-value pairs?

**Options:**

- **A.** Use Azure PowerShell to create and apply tagging policies.
- **B.** Use JSON to define the policy rule, including the required tag keys and values, and specify the “effect“ as “deny“ if resources are not tagged correctly. ✅
- **C.** Use Azure Resource Manager templates to define the tagging requirements.
- **D.** Use Azure Blueprints to package and deploy the tagging policy.

**Correct answer:** B

**Explanation:**

To define a Policy Rule using JSON, you can structure it as follows:

**More Details:**

- mode: This property is set to "All" to ensure the policy evaluates all resource types within its assigned scope.

- policyRule: This object encapsulates the core logic of the policy.

- if: This condition block defines the criteria for when the policy should be triggered.

- The first condition checks if the resource type is a Virtual Machine (Microsoft.Compute/virtualMachines).

- The second condition ensures that the ‘Environment’ tag either does not exist or its value is not one of the allowed options (“Production”, “Staging”, “Development”).

- The third condition verifies that the ‘CostCenter’ tag exists on the resource.

- then: This block specifies the action to be taken when the if conditions are met.

- The effect is set to "deny", which means that any attempt to create or update a Virtual Machine that does not comply with these tagging requirements will be blocked.

**2. Specify the “effect” (or other actions):**

The effect property in an Azure Policy rule dictates the action that Azure takes when a resource is non-compliant. Common effects include:

- deny: Blocks the creation or update of non-compliant resources, preventing them from being provisioned or modified in a way that violates the policy.

- audit: Logs a warning in the Azure Activity Log when a resource is non-compliant. This allows for monitoring and reporting of non-compliance without blocking operations.

- append: Adds the specified tags or settings to a resource if they are missing during creation or update. This is often used to enforce consistent tagging.

- modify: Replaces existing tag values or properties with the ones specified in the policy. This can be used to standardize or correct existing resource configurations.

- deployIfNotExists: Deploys a specified resource or template if a condition is not met. This is useful for automatically remediating non-compliant resources.

- disabled: Disables the policy assignment, effectively making it inactive without deleting it.

**Key Points:**

- Azure Policy utilizes aliases for tag names and values. It is crucial to refer to the official Azure documentation to find the correct alias for each resource type and property.

- You can leverage a variety of operators within your policy rules, such as equals, not, in, like, match, and more, to construct complex and precise tagging requirements.

- Parameters can be used to make your policy definitions more flexible and reusable across different assignments or environments.

**Additional Considerations:**

- Policy Initiatives: Consider grouping related policy definitions together into policy initiatives. This simplifies assignment and management of multiple policies that collectively enforce a set of standards.

- Regular Review and Updates: It’s essential to regularly review and update your policies to ensure they remain relevant and effective as your organizational requirements and Azure environment evolve.

- Azure Resource Graph (ARG): Utilize Azure Resource Graph (ARG) to query for resources that are not compliant with your policies. This powerful tool allows for efficient auditing and reporting of policy compliance across your subscriptions.

By carefully defining your Azure Policy rules and using the appropriate effects, you can enforce consistent tagging standards across your Azure environment, leading to better resource management, cost allocation, and security posture.

---

### Question 7

You have an Azure subscription named Sub1 that contains the resources shown in the following table.

**Sub1 contains the following alert rule:**

- **Name**: Alert1

- **Scope**: All resource groups in Sub1

– Include all future resources

- **Condition**: All administrative operations

- **Actions**: Action1

**Sub1 contains the following alert processing rule**

- **Name**: Rule1

- **Scope**: Sub1

- **Rule type**: Suppress notifications

- **Apply the rule**: On a specific time

– **Start**: August 10, 2022

– **End**: August 13, 2022

For the statement below, select Yes if the statement is true. Otherwise, select No.

**“If you add a tag to RG1 on August 15, 2022, an email message is sent to [email protected].”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Correct **

**option A. Yes**

Adding a tag to RG1 on August 15 triggers Alert1 (all administrative operations) which sends email via Action1. Rule1 suppression ended August 13, so notifications work normally.

**Incorrect **

**option B. No**

Rule1 suppression period (Aug 10-13) expired by August 15, so Alert1 processes the tag update and sends notification.

---

### Question 12

You have an Azure subscription that contains a virtual network named VNet1.

VNet1 uses two ExpressRoute circuits that connect to two separate on-premises datacenters.

You need to create a dashboard to display detailed metrics and a visual representation of the network topology.

What should you use?

**Options:**

- **A.** Azure Virtual Network Watcher
- **B.** Azure Monitor Network Insights ✅
- **C.** a Data Collection Rule (DCR)
- **D.** Log Analytics

**Correct answer:** B

**Explanation:**

**Correct **

**Option B (Azure Monitor Network Insights):** This provides a comprehensive dashboard with detailed metrics, health monitoring, and visual network topology representations across resources like VNets and ExpressRoute circuits without configuration.

**Incorrect**

**Option A (Azure Virtual Network Watcher):** Offers diagnostic tools and topology views but lacks the integrated dashboard for detailed metrics and comprehensive visual topology across multiple subscriptions.

**Option C (a Data Collection Rule (DCR)):** Configures data collection for Azure Monitor but does not provide dashboards, metrics visualization, or topology views.

**Option D (Log Analytics):** Stores and queries log data but requires custom workbooks for visualization and lacks built-in network topology or dashboard features.

---

### Question 20

You have an Azure subscription that contains an Azure Backup vault named Backup1, a Recovery Services vault named Recovery1, and the resources shown in the following table.

You plan to back up the resources.

Which resource can be backed up to **Recovery1**?

**Options:**

- **A.** App1
- **B.** DB1
- **C.** Disk1
- **D.** VM1 ✅

**Correct answer:** D

**Explanation:**

**Correct: D. VM1**

A **Recovery Services vault** is used to back up **Azure virtual machines** and workloads running inside VMs, such as SQL Server or SAP HANA hosted on Azure VMs. Azure VM backup is a core and long-standing capability of Recovery Services vaults and is fully supported for this resource type. Therefore, VM1 can be backed up to **Recovery1**.

**Incorrect: A. App1**

App1 represents an **Azure App Service**. App Services are not backed up using a Recovery Services vault. Instead, they use built-in App Service backup features or other Azure-native mechanisms. Recovery Services vaults do not support direct backup of App Service resources.

**Incorrect: B. DB1**

DB1 represents a **platform-as-a-service database** such as Azure SQL Database. These databases are not backed up to Recovery Services vaults. PaaS database backups are handled by the service itself or by newer Azure Backup vault–based solutions, not Recovery Services vaults.

**Incorrect: C. Disk1**

Disk1 represents a **managed disk**. Managed disk backup is not supported by Recovery Services vaults. Azure Disk Backup uses an **Azure Backup vault**, which is a different vault type specifically designed for newer backup scenarios such as disks and blobs.

In summary, among the listed resources, only **VM1** can be backed up to the **Recovery Services vault (Recovery1)**.

---

### Question 21

You have an Azure virtual machine that is protected by Azure Backup.

One week ago, two files were deleted from the virtual machine.

You need to restore the deleted files to an on-premises Windows Server 2016 computer as quickly as possible.

Which four actions should you perform in sequence?

**Options:**

- **A.** A. From the Azure portal, click Restore VM from the vault
Select a restore point that contains the delete files
Download and run the script to mount a drive on the local computer
Copy the files by using File Explorer
- **B.** From the Azure portal, click File Recovery from the vault
Select a restore point that contains the delete files
B. Download and run the script to mount a drive on the local computer
Copy the files by using File Explorer ✅
- **C.** C. From the Azure portal, click File Recovery from the vault
Select a restore point that contains the delete files
Download and run the script to mount a drive on the local computer
Copy the files by using AzCopy

**Correct answer:** B

**Explanation:**

**Correct:**

**Option B.**

From the Azure portal, click **File Recovery** from the Recovery Services vault → select a restore point that contains the deleted files → download and run the script to mount a recovery drive on the local computer → copy the files by using **File Explorer**.

This is the fastest way to restore individual files from an Azure VM backup to an on-premises Windows Server. File Recovery mounts the backup as a local volume, allowing quick file-level restore without performing a full VM restore.

**Incorrect:**

**Option A.**

Using **Restore VM** performs a full virtual machine restore. This is slower and unnecessary when only a few files need to be recovered, especially when restoring to an on-premises server.

**Option C.**

Although File Recovery is correctly selected, **AzCopy** is not used in the file recovery workflow. Files are copied directly from the mounted recovery drive using File Explorer, making this option incorrect.

---

### Question 25

You need to monitor the resource usage of a specific resource group in Azure. How can you configure Azure Monitor to collect resource usage data for this resource group and set up alerts for cost thresholds?

**Options:**

- **A.** Enable diagnostic settings for each resource in the resource group, sending data to a Log Analytics workspace.
- **B.** Use Azure Advisor recommendations to identify cost optimization opportunities and implement suggested changes.
- **C.** Create an Azure Monitor alert rule targeting the resource group and using metric conditions for cost thresholds. ✅
- **D.** Deploy Azure Cost Management and Billing to analyze cost data and trends for the resource group.

**Correct answer:** C

**Explanation:**

**Correct:**

**Option C. Create an Azure Monitor alert rule targeting the resource group and using metric conditions for cost thresholds**

Azure Monitor allows you to scope alert rules to a **resource group** and evaluate **metrics** across the resources within that group. By defining metric-based alert conditions tied to usage or cost-related metrics, you can proactively monitor resource consumption and trigger alerts when defined thresholds are exceeded. This directly meets the requirement to collect usage data and set up alerts for thresholds.

**Incorrect:**

**Option A. Enable diagnostic settings for each resource in the resource group, sending data to a Log Analytics workspace**

Diagnostic settings collect **logs and metrics** for analysis, but they do not by themselves configure **cost threshold alerts** at the resource group level. This option focuses on data collection rather than alerting on usage or cost.

**Option B. Use Azure Advisor recommendations to identify cost optimization opportunities and implement suggested changes**

Azure Advisor provides **recommendations**, not continuous monitoring or alerting. It cannot be used to configure real-time resource usage collection or cost threshold alerts.

**Option D. Deploy Azure Cost Management and Billing to analyze cost data and trends for the resource group**

Azure Cost Management is useful for **analyzing and reporting** costs, but it is not part of Azure Monitor and does not configure metric-based alerts for real-time resource usage monitoring within Azure Monitor.

---

### Question 29

You have a critical workload running on Azure VMs. You want to protect these VMs from unexpected deletions or modifications. Which Azure feature can you use to enforce resource locks and prevent accidental changes?

**Options:**

- **A.** Azure Blueprints
- **B.** Azure Resource Locks ✅
- **C.** Azure Policy
- **D.** Azure Backup

**Correct answer:** B

**Explanation:**

**Correct **

**Option B (Azure Resource Locks):** Resource Locks (CanNotDelete or ReadOnly) directly prevent accidental deletion or modification of Azure VMs and other resources at the resource, group, or subscription level.

**Incorrect**

**Option A (Azure Blueprints):** Deploys and manages resource templates consistently; doesn’t prevent runtime deletions/modifications.

**Option C (Azure Policy):** Enforces compliance rules and configurations but cannot block delete/modify operations like locks do.

**Option D (Azure Backup):** Provides data recovery snapshots; offers no protection against resource deletion itself.

---

### Question 33

You are configuring backup and disaster recovery for your Azure App Service web app. Which backup options are available in App Service?

**Options:**

- **A.** Backup with Continuous WebJobs
- **B.** Site Recovery
- **C.** Code Backup with Local Git
- **D.** Manual Backup ✅
- **E.** Automatic Backup ✅

**Correct answer:** D, E

**Explanation:**

**Correct**

** Option D. Manual Backup**

** Option E. Automatic Backup**

Azure App Service provides built-in backup functionality through the Azure portal with both manual (on-demand) and scheduled automatic backups. These create zip files containing app content, configuration, and linked databases stored in Azure Storage. Available on Standard/Premium tiers.

**Incorrect **

** Option A. Backup with Continuous WebJobs**

WebJobs execute background tasks but cannot perform App Service backups. Backup feature is native to App Service platform.

** Option B. Site Recovery**

Azure Site Recovery provides disaster recovery for VMs and servers, not PaaS services like App Service. App Service uses native backup/restore.

** Option C. Code Backup with Local Git**

Local Git deployment backs up source code to repository but excludes app configuration, databases, and runtime state. Not a complete App Service backup solution.

**AZ-104 Key Concept**

text

App Service → Backups blade → Manual or Scheduled → Storage Account

Includes: App files + Config + Databases (SQL/MySQL/PG)

Max size: 10GB per backup

Tiers: Standard/Premium/Isolated

---

### Question 34

You have a Recovery Service vault that you use to test backups. The test backups contain two protected virtual machines.

You need to delete the Recovery Services vault.

What should you do first?

**Options:**

- **A.** From the Recovery Service vault, delete the backup data.
- **B.** Modify the disaster recovery properties of each virtual machine.
- **C.** Modify the locks of each virtual machine.
- **D.** From the Recovery Service vault, stop the backup of each backup item. ✅

**Correct answer:** D

**Explanation:**

### Correct

**option D.** From the Recovery Service vault, stop the backup of each backup item.

Stops protection and enables vault deletion after data purge.

### Incorrect

**option A.** Delete the backup data.

Requires stopping backup first; data delete follows stop.

**option B.** Modify disaster recovery properties of each virtual machine.

Site Recovery setting, not Backup deletion step.

**option C.** Modify the locks of each virtual machine.

Locks prevent resource deletion but not vault-specific.

---

### Question 37

You have an Azure web app named webapp1.

Users report that they often experience HTTP 500 errors when they connect to webapp1.

You need to provide the developers of webapp1 with real-time access to the connection errors. The solution must provide all the connection error details.

What should you do first?

**Options:**

- **A.** From webapp1, enable Web server logging ✅
- **B.** From Azure Monitor, create a workbook
- **C.** From Azure Monitor, create a Service Health alert
- **D.** From webapp1, turn on Application Logging

**Correct answer:** A

**Explanation:**

**Correct:**

**Option A. From webapp1, enable Web server logging**

Web server logging in Azure App Service captures detailed HTTP request and response information, including **HTTP 500 errors**, status codes, client IPs, timestamps, and request URLs. Enabling it is the **first required step** to collect **real-time, detailed connection error data** so developers can immediately start analyzing the failures.

**Incorrect:**

**Option B. From Azure Monitor, create a workbook**

Workbooks are used to **visualize and analyze existing data**. They do not collect logs themselves, so they cannot provide error details unless logging is already enabled.

**Option C. From Azure Monitor, create a Service Health alert**

Service Health alerts notify about **Azure platform outages or maintenance events**, not application-level HTTP 500 errors generated by a specific web app.

**Option D. From webapp1, turn on Application Logging**

Application Logging captures logs written by the application code (such as trace or diagnostic logs). While useful, it does **not guarantee full HTTP connection error details**, and web server logging must be enabled first to capture request-level HTTP 500 errors.

---

### Question 44

A company plans to use Azure Network watcher to perform the following tasks

“Find out if a network security rule is preventing a network packet from reaching a virtual machine hosted in an Azure virtual network”

“Find out if there is outbound connectivity between an Azure virtual machine and an external host”

Which of the following network watcher feature would you use for the following requirement?

“Find out if a network security rule is preventing a network packet from reaching a virtual machine hosted in an Azure virtual network”

**Options:**

- **A.** A. IP Flow Verify ✅
- **B.** B. Next Hop
- **C.** C. Packet Capture
- **D.** D. Traffic Analysis

**Correct answer:** A

**Explanation:**

**Correct **

**Option A. IP Flow Verify** ✓

✅ **Verifies if traffic is allowed/denied** between source VM → destination IP/port/protocol

✅ Shows **exact NSG rule blocking traffic**

✅ **Core diagnostic tool**

**Incorrect**

**Option B. Next Hop**

❌ **Routing diagnostics only** – Shows next hop for VM traffic (UDR, NVA routing). Doesn’t verify traffic allowance.

**Option C. Packet Capture**

❌ **Traffic capture tool** – Captures actual packets for analysis. Not for verifying specific flows.

**Option D. Traffic Analysis**

❌ **Deprecated/renamed** – Now part of **Traffic Analytics** (NSG flow logs analysis). Not a direct Network Watcher tool.

---

### Question 45

In Subscription1, you create an alert rule named Alert1. The Alert1 action group is configured as shown in the following exhibit:

Alert1 alert criteria is triggered every minute.

The number of SMS alerts that Alert1 will send in an hour is ………. .

**Options:**

- **A.** 0
- **B.** 4
- **C.** 6
- **D.** 12 ✅
- **E.** 60

**Correct answer:** D

**Explanation:**

### Correct

**option D. 12**

SMS throttling in Azure action groups limits to 1 SMS per phone number every 5 minutes; with triggers every minute, only 12 alerts (60/5) send per hour per recipient.

### Incorrect

**option A – 0**

Alerts fire but SMS sends are throttled, not suppressed entirely.

**option B – 4**

Too low; doesn’t match standard 5-minute SMS cooldown.

**option C – 6**

Half the correct count; perhaps confusing with other limits like email.

**option E – 60**

Ignores throttling; would send one per trigger without limits.

---

### Question 47

You have an Azure virtual machine based on the Windows Server 2016 image. You implement Azure backup for the virtual machine. You want to restore the virtual machine by using the Replace existing option. Which of the following needs to be done first before you go ahead and replace the virtual machine using the Azure Backup option?

**Options:**

- **A.** A. Create a custom image
- **B.** B. Stop the virtual machine ✅
- **C.** C. Allocate a new disk
- **D.** D. Enable encryption on the disk

**Correct answer:** B

**Explanation:**

**Correct **

**Option B. Stop the virtual machine**

– **Azure Backup “Replace existing” restore requires VM to be stopped (deallocated)** before replacing disks. Azure cannot overwrite running VM disks.

**Azure Backup Replace Existing Workflow:**

**Stop VM** (deallocate state)

Select recovery point → **Replace existing**

Azure Backup creates temp disks from recovery point

**Replaces OS/data disks** on stopped VM

**Start VM** post-restore

**Incorrect**

**Option A. Create a custom image**

❌ **Wrong restore method** – Custom images used for **Create new VM** restore, not Replace existing.

**Option C. Allocate a new disk**

❌ **Opposite approach** – Replace existing **overwrites current disks**, doesn’t create new ones.

**Option D. Enable encryption on the disk**

❌ **Irrelevant** – Disk encryption unrelated to restore prerequisites.

---

### Question 50

**Scenario:** You have an **Azure subscription (Subscription1)**. In it, you create an **alert rule (Alert1)**. The action group for Alert1 is configured to send **SMS messages** to all users in the **Admins_Group**. The alert criteria is triggered **every minute**. The question asks: How many SMS messages will Alert1 send in one hour?

**Options:**

- **A.** 0
- **B.** 4
- **C.** 6
- **D.** 12 ✅
- **E.** 60

**Correct answer:** D

**Explanation:**

### Correct

**Option D. 12**

- **Correct because**:

- Azure Monitor alerts have **frequency limits** to avoid spamming.

- Even if the alert criteria is triggered every minute, **action groups (like SMS notifications)** are throttled.

- By default, SMS notifications are sent **once every 5 minutes** for repeating alerts.

- Therefore, in one hour (60 minutes ÷ 5 minutes), the total SMS messages sent = **12**.

### Incorrect

**Option A. 0**

- Incorrect because the alert is configured to send SMS notifications, so it will not send zero messages.

**Option B. 4**

- Incorrect because this would imply one SMS every 15 minutes, which is not the default throttling behavior.

**Option C. 6**

- Incorrect because this would imply one SMS every 10 minutes, which is also not the default behavior.

**Option E. 60**

- Incorrect because while the alert triggers every minute, Azure throttles SMS notifications to avoid flooding. It does not send one SMS per minute.

###

---

### Question 52

A company currently has a set of virtual machines created in Azure. They want to ensure that their IT administrative team is alerted if anyone of the virtual machines are shutdown.

They decide to create alerts in the Azure Advisor service.

Would this fulfil the requirement?

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

**Correct **

**Option B. No**

**Why “No” – Technical Limitation:**

text

VM States Monitored by Azure Monitor:

✅ Running → Heartbeat metric ✓

✅ CPU/Memory/Disk metrics ✓

✅ Availability (VM Availability Metric) ✓

❌ Power State transitions (no metric)

**Available Alternatives (Not Standard Alert Rules):**

**1. Activity Log Alerts** (Manual setup required)

text

AzureActivity

| where OperationName == "Stop Virtual Machine"

→ Email/SMS/Logic App notification

**2. VM Insights Heartbeat** (Indirect)

text

Heartbeat table (every 1-5 min)

No heartbeat → VM likely stopped

**3. VM Availability Metric** (Newer)

text

Percentage VM availability over time

Stops → 0% availability alert

**Incorrect **

**Option A. Yes**

❌ **Misleading** – No direct **metric alert rule** exists for VM shutdown. Requires **Activity Log alerts** or **Log Analytics queries**, not simple metric alerts.

---

### Question 1

You have several Azure virtual machines on a virtual network named VNet1.

You configure an Azure Storage account as shown below.

Based on the information presented in the graphic, select the answer choice that completes the following statement.

**“Azure Backup will be able to back up the unmanaged disks of the virtual machines in the storage account ________________________________.”**

**Options:**

- **A.** always
- **B.** during a backup
- **C.** never ✅

**Correct answer:** C

**Explanation:**

### Correct

**Option C. never**

- This is correct because **Azure Backup does not support backing up unmanaged disks stored in a storage account**.

- Azure Backup can protect **managed disks** attached to VMs, but unmanaged disks (stored as page blobs in a storage account) are not supported for backup through Recovery Services vaults.

- Therefore, the statement must be completed with **“never.”**

### Incorrect

**Option A. always**

- Incorrect because Azure Backup cannot back up unmanaged disks at all.

- Saying “always” would imply full support, which is not true.

**Option B. during a backup**

- Incorrect because this suggests that unmanaged disks could be backed up only at the time of backup operations.

- In reality, Azure Backup does not support unmanaged disks under any condition.

###

---

### Question 4

You purchase a new Azure subscription named Subscription1.

You create a virtual machine named VM1 in Subscription1. VM1 is not protected by Azure Backup.

You need to protect VM1 by using Azure Backup. Backups must be created at 01:00 and stored for 30 days.

What should you do?

**Options:**

- **A.** Location in which to store the backups: A blob container
- **B.** Location in which to store the backups: A fileshare
- **C.** Location in which to store the backups: A Recovery services vault ✅
- **D.** Location in which to store the backups: A storage account
- **E.** Object to use to configure the protection for VM1: A backup policy ✅
- **F.** Object to use to configure the protection for VM1: A batch schedule

**Correct answer:** C, E

**Explanation:**

### **Correct**

**Option C. Location in which to store the backups: A Recovery services vault**

- Azure VM backups are always stored in a **Recovery Services vault**, not in blob containers or file shares.

- The vault provides centralized management, retention policies, and monitoring.

- Correct because this is the required storage location for Azure Backup.

**Option E. Object to use to configure the protection for VM1: A backup policy**

- Backup policies define **schedule (01:00)** and **retention (30 days)**.

- Policies are applied to VMs to automate backup creation and retention.

- Correct because configuring a backup policy is the way to enforce timing and retention requirements.

### **Incorrect**

**Option A. Location in which to store the backups: A blob container**

- Blob containers are used for general storage, not for Azure VM backups.

- Incorrect because VM backups cannot be directly stored in blob containers.

**Option B. Location in which to store the backups: A fileshare**

- File shares are used for Azure File Sync or SMB shares, not VM backups.

- Incorrect because Azure Backup does not store VM backups in file shares.

**Option D. Location in which to store the backups: A storage account**

- While Recovery Services vaults internally use storage, you cannot directly configure VM backups to a storage account.

- Incorrect because the vault is the required abstraction layer.

**Option F. Object to use to configure the protection for VM1: A batch schedule**

- Batch schedules are not used for Azure Backup.

- Incorrect because backup policies, not batch schedules, define backup timing and retention.

---

### Question 8

You have an Azure subscription that contains multiple virtual machines in the West US Azure region.

You need to use Traffic Analytics in Azure Network Watcher to monitor virtual machine traffic.

Which two resources should you create?

**Options:**

- **A.** a storage account ✅
- **B.** a Microsoft Sentinel workspace
- **C.** a Log Analytics workspace ✅
- **D.** a Data Collection Rule (DCR) in Azure Monitor
- **E.** an Azure Monitor workbook

**Correct answer:** A, C

**Explanation:**

**Correct**

**Option A. a storage account**

because Traffic Analytics requires a **storage account** to store NSG flow logs. These logs capture traffic information from the virtual machines, which Traffic Analytics then processes.

**Option C. a Log Analytics workspace**

because Traffic Analytics uses a **Log Analytics workspace** to analyze and visualize the NSG flow logs. This workspace provides the query and reporting capabilities needed to monitor VM traffic effectively.

Together, these two resources (storage account + Log Analytics workspace) are mandatory for enabling Traffic Analytics in Azure Network Watcher.

**Incorrect**

**Option B. a Microsoft Sentinel workspace**

because Sentinel is a SIEM solution for security analytics, not required for Traffic Analytics. While Sentinel can ingest data from Log Analytics, it is not a prerequisite for Traffic Analytics.

**Option D. a Data Collection Rule (DCR) in Azure Monitor**

because DCRs are used for configuring data collection in Azure Monitor, but Traffic Analytics specifically relies on NSG flow logs stored in a storage account and analyzed in Log Analytics.

**Option E. an Azure Monitor workbook**

because workbooks are visualization tools for monitoring data. They can be used after Traffic Analytics is set up, but they are not required resources to enable Traffic Analytics itself.

---

### Question 9

You have an Azure subscription that is linked to an Azure AD tenant. The tenant contains two users named User1 and User2.

The subscription contains the resources shown in the following table.

The subscription contains the alert rules shown in the following table.

The users perform the following action:

- User1 creates a new virtual disk and attaches the disk to VM1.

- User2 creates a new resource tag and assigns the tag to RG1 and VM1.

Which alert rule is triggered by **User2**?

**Options:**

- **A.** No alert is triggered
- **B.** Only Alert1 is triggered
- **C.** Only Alert2 is triggered
- **D.** Alert1 and Alert2 are triggered ✅

**Correct answer:** D

**Explanation:**

**Correct**

**Option D. Alert1 and Alert2 are triggered**

because User2’s action of creating a **new resource tag** and assigning it to **RG1 and VM1** matches the conditions defined in both alert rules. In Azure Monitor, resource modification events such as adding or updating tags are captured and can trigger alerts if rules are scoped to those resources. Since RG1 and VM1 are both covered by the alert rules, **both Alert1 and Alert2 will be triggered**.

**Incorrect**

**Option A. No alert is triggered**

because alerts are configured to monitor resource changes, and tagging a resource is considered a modification event. Therefore, saying no alert is triggered is incorrect.

**Option B. Only Alert1 is triggered**

because this assumes only RG1’s tagging event is captured. However, VM1 is also tagged, and Alert2 is scoped to VM1, so both alerts should fire.

**Option C. Only Alert2 is triggered**

because this assumes only VM1’s tagging event is captured. In reality, RG1 is also tagged, and Alert1 is scoped to RG1, so both alerts should fire.

---

### Question 25

You are migrating your on-premises applications to Azure. You want to continue monitoring these applications using your existing monitoring tools. Which Azure service can you use to collect logs and metrics from your on-premises applications and send them to your existing monitoring system?

**Options:**

- **A.** Azure Event Hubs
- **B.** Azure Application Insights
- **C.** Azure Monitor Agent ✅
- **D.** Azure Log Analytics workspace

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Azure Monitor Agent**

- Correct because the **Azure Monitor Agent (AMA)** is designed to collect telemetry (logs and metrics) from both **Azure resources** and **on-premises environments**.

- It can forward this data to Azure Monitor, Log Analytics, or even external monitoring tools, enabling hybrid monitoring scenarios.

- This is the recommended solution for organizations migrating workloads to Azure but still relying on existing monitoring systems.

### Incorrect

**Option A. Azure Event Hubs**

- Incorrect because Event Hubs is a **data streaming platform** for ingesting large volumes of telemetry or event data.

- While it can be used for log ingestion pipelines, it is not the direct service for collecting logs/metrics from on-premises applications for monitoring purposes.

**Option B. Azure Application Insights**

- Incorrect because Application Insights is focused on **application performance monitoring (APM)** for live applications.

- It is not intended to act as a general-purpose log collector for on-premises systems.

**Option D. Azure Log Analytics workspace**

- Incorrect because a Log Analytics workspace is a **storage and query environment** for logs collected by agents.

- It does not itself collect logs; it requires the **Azure Monitor Agent** or other data sources to send telemetry into it.

---

### Question 28

You have the Azure virtual machines shown in the following table:

You have a Recovery Services vault that protects VM1 and VM2. You need to protect VM3 and VM4 by using Recovery Services.

What should you do first?

**Options:**

- **A.** Create a new Recovery Services vault ✅
- **B.** Create a storage account
- **C.** Configure the extensions for VM3 and VM4
- **D.** Create a new backup policy

**Correct answer:** A

**Explanation:**

**Correct**

**Option A. Create a new Recovery Services vault**

Reasoning:

- A Recovery Services vault is region-specific. You cannot use a vault in one region to protect VMs in another region.

- Since VM3 and VM4 are in a different region than the existing vault that protects VM1 and VM2, the first step is to **create a new Recovery Services vault in the same region as VM3 and VM4**.

- Only after creating the vault can you configure backup policies and extensions for those VMs.

**Incorrect**

**Option B. Create a storage account**

- Incorrect because: Backups for Azure VMs do not require you to manually create a storage account. Recovery Services vaults automatically manage storage for backups.

**Option C. Configure the extensions for VM3 and VM4**

- Incorrect because: Backup extensions are installed when you enable backup through a Recovery Services vault. You cannot configure them before the vault exists in the correct region.

**Option D. Create a new backup policy**

- Incorrect because: Backup policies define retention and schedule, but they require a Recovery Services vault first. Without a vault in the same region as VM3 and VM4, a backup policy cannot be applied.

---

### Question 45

You have two Azure virtual networks named VNet1 and VNet2. VNet1 contains an Azure virtual machine named VM1. VNet2 contains an Azure virtual machine named VM2.

VM1 hosts a frontend application that connects to VM2 to retrieve data. Users report that the frontend application is slower than usual. You need to view the average round-trip time (RTT) of the packets from VM1 to VM2.

Which Azure Network Watcher feature should you use?

**Options:**

- **A.** IP flow verify
- **B.** Connection troubleshoot ✅
- **C.** Connection monitor
- **D.** NSG flow logs

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Connection troubleshoot**

- Correct because **Connection troubleshoot** in Azure Network Watcher allows you to test connectivity between two endpoints (VM1 → VM2).

- It provides **latency metrics**, including **average round‑trip time (RTT)**, packet loss, and hop details.

- This directly addresses the requirement to measure RTT between the two VMs.

### Incorrect

**Option A. IP flow verify**

- Incorrect because **IP flow verify** checks whether traffic is allowed or denied by **NSG rules**.

- It does not measure RTT or latency.

**Option C. Connection monitor**

- Incorrect because **Connection monitor** provides **continuous monitoring** of connectivity over time.

- While useful for long‑term tracking, it is not the tool for immediate RTT measurement in troubleshooting scenarios.

**Option D. NSG flow logs**

- Incorrect because **NSG flow logs** capture traffic flow information for auditing and analysis.

- They do not provide RTT or latency metrics.

###

---

### Question 52

You have to deploy a web application for your company by using the Azure Web App Service. The backup and restore option should be available for the web application. Costs should also be minimized for hosting the application.

Which of the following would you choose as the underlying App Service Plan?

**Options:**

- **A.** A. Shared
- **B.** B. Basic
- **C.** C. Standard ✅
- **D.** D. Premium

**Correct answer:** C

**Explanation:**

**Correct: C. Standard**

- 
Feature Availability: The Backup and Restore feature in Azure App Service is officially supported starting at the Standard tier and above (Standard, Premium, and Isolated).

- 
Cost Optimization: Since the requirement is to minimize costs while maintaining the backup feature, the Standard tier is the most logical choice. It is the entry-level production tier that includes the necessary “Custom Backups” (both manual and scheduled) and “Automatic Backups.”

- 
Standard Capabilities: In addition to backups, the Standard tier provides up to 5 deployment slots, autoscale support, and a 99.95% SLA, making it the minimum viable tier for most production web applications.

**Incorrect**

- 
A. Shared: This is a “Dev/Test” tier. Resources are shared with other customers, and it does not support backups, custom domains (SSL), or scaling.

- 
B. Basic: While better than Shared, the Basic tier is designed for low-traffic apps and does not include the native Backup/Restore functionality. (Note: While some newer documentation mentions limited “Automatic Backup” availability in some regions for Basic, for the purpose of the AZ-104 exam, Standard remains the definitive threshold for the full Backup/Restore feature).

- 
D. Premium: The Premium tier (including P1v2, P1v3, etc.) definitely supports backup and restore. However, it is significantly more expensive than the Standard tier. Since the goal is to minimize cost, Premium is a “correct” technical solution but a “wrong” exam answer based on the cost constraint.

---

### Question 7

You have an Azure subscription that has a Recovery Services vault named Vault1. The subscription contains the virtual machines shown in the following table:

You plan to schedule backups to occur every night at 23:00.

Which virtual machines can you back up by using Azure Backup?

**Options:**

- **A.** VM1 and VM3 only
- **B.** VM1, VM2, VM3 and VM4 ✅
- **C.** VM1 and VM2 only
- **D.** VM1 only

**Correct answer:** B

**Explanation:**

### Correct

**Option B. VM1, VM2, VM3, and VM4**

- Azure Backup supports **all Azure VMs** (Windows and Linux) when they are deployed through the **Azure Resource Manager (ARM) model**.

- Backups are configured through a Recovery Services vault, and once enabled, all listed VMs can be protected.

- Azure Backup does not restrict based on OS type (Windows/Linux) or size, as long as the VM is supported in the ARM model.

- Therefore, all four VMs can be backed up nightly at 23:00.

### Incorrect

**Option A. VM1 and VM3 only**

- Incorrect because Azure Backup is not limited to just two VMs.

- Both Windows and Linux VMs are supported, so excluding VM2 and VM4 is wrong.

**Option C. VM1 and VM2 only**

- Incorrect because this excludes VM3 and VM4 unnecessarily.

- Azure Backup supports all VMs in the subscription when linked to the Recovery Services vault.

**Option D. VM1 only**

- Incorrect because Azure Backup is not restricted to a single VM.

- All VMs in the subscription can be protected.

###

---

### Question 8

You create a Recovery Services vault backup policy named Policy1 as shown in the following exhibit:

The backup that occurs on Sunday, March 1, will be retained for?

**Options:**

- **A.** 30 days
- **B.** 10 weeks
- **C.** 36 months
- **D.** 10 years ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. 10 years**

- In Azure Backup, you can configure **long-term retention (LTR)** for specific backups such as weekly, monthly, or yearly points.

- The exhibit indicates that the March 1 backup is designated as a **yearly retention point**, and the policy specifies retention for **10 years**.

- This aligns with compliance and archival requirements for enterprise workloads.

- **Correct answer.**

### Incorrect

**Option A. 30 days**

- 30‑day retention applies to **daily backups** under short‑term retention.

- The March 1 backup is not a daily backup; it is a long‑term retention point.

- **Incorrect.**

**Option B. 10 weeks**

- Weekly retention may apply to certain backups, but the exhibit specifies a much longer retention period.

- 10 weeks does not match the configured policy.

- **Incorrect.**

**Option C. 36 months**

- 36 months (3 years) is a possible retention option in Azure Backup.

- However, the policy explicitly states **10 years**, which overrides shorter retention settings.

- **Incorrect.**

###

---

### Question 9

You need to configure a VM to automatically scale out based on CPU utilization. Which Azure service can you use to define autoscaling rules and dynamically adjust the number of VM instances based on workload demands?

**Options:**

- **A.** Azure Monitor
- **B.** Azure Autoscale ✅
- **C.** Azure Automation
- **D.** Azure Logic Apps

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Azure Autoscale**

- **Explanation:**

- Azure Autoscale is the built-in service that allows you to define **rules based on metrics** (such as CPU utilization, memory, or custom metrics).

- It automatically increases or decreases the number of VM instances in a **Virtual Machine Scale Set (VMSS)** or App Service Plan.

- This is the correct service for implementing autoscaling in Azure.

### Incorrect

**Option A. Azure Monitor**

- **Explanation:**

- Azure Monitor collects and analyzes telemetry data from Azure resources.

- While it can trigger alerts based on CPU usage, it does not directly perform autoscaling.

- Autoscale rules are configured separately, though they can use metrics from Azure Monitor.

**Option C. Azure Automation**

- **Explanation:**

- Azure Automation is used for **runbooks, scripts, and process automation** (e.g., patching, configuration management).

- It is not designed for dynamic autoscaling based on workload metrics.

**Option D. Azure Logic Apps**

- **Explanation:**

- Logic Apps are used for **workflow automation and integration** (e.g., connecting services, automating business processes).

- They are not intended for managing VM scaling.

###

---

### Question 10

You have an Azure subscription named Subscription1 that contains the resources shown in the following table:

You create virtual machines in Subscription1 as shown in the following table:

You plan to use Vault1 for the backup of as many virtual machines as possible.

Which virtual machines can be backed up to Vault1?

**Options:**

- **A.** VM1 only
- **B.** VM3 and VMC only
- **C.** VM1, VM2, VM3, VMA, VMB, and VMC
- **D.** VM1, VM3, VMA, and VMC only ✅
- **E.** VM1 and VM3 only

**Correct answer:** D

**Explanation:**

### Correct

**Option D. VM1, VM3, VMA, and VMC only**

- This is the correct answer.

- Azure Backup (using Recovery Services Vault) supports backing up **Azure VMs in the same region and subscription as the vault**.

- VM1 and VM3 are in the same subscription and supported region as Vault1.

- VMA and VMC are also supported because they meet the subscription and region requirements.

- Other VMs either belong to a different subscription or are in unsupported configurations, so they cannot be backed up to Vault1.

### Incorrect

**Option A. VM1 only**

- Incorrect because more than one VM can be backed up. VM3, VMA, and VMC also qualify.

**Option B. VM3 and VMC only**

- Incorrect because VM1 and VMA also meet the requirements.

**Option C. VM1, VM2, VM3, VMA, VMB, and VMC**

- Incorrect because not all listed VMs are eligible. For example, VM2 and VMB may be in different subscriptions or unsupported regions.

**Option E. VM1 and VM3 only**

-

---

### Question 12

You plan to use Azure Network Watcher to perform the following task:

Validate outbound connectivity from an Azure virtual machine to an external host.

Which Azure feature should you use for this task?

**Options:**

- **A.** Connection troubleshoot ✅
- **B.** IP flow verify
- **C.** Next hop
- **D.** NSG flow logs
- **E.** Traffic Analytics

**Correct answer:** A

**Explanation:**

**Correct**

**Option A. Connection troubleshoot**

The **Connection troubleshoot** feature in Azure Network Watcher is specifically designed to validate connectivity between an Azure VM and an external host. It tests both inbound and outbound connections, providing detailed diagnostics on whether traffic can reach its destination and identifying where connectivity might fail. This directly addresses the requirement to validate **outbound connectivity from a VM to an external host**.

**Incorrect**

**Option B. IP flow verify** This feature checks whether a packet is allowed or denied by NSG rules for a given source/destination IP, port, and protocol. It does not validate full outbound connectivity to an external host; it only verifies NSG rule behavior.

**Option C. Next hop** This feature shows the next hop type (e.g., Internet, Virtual Appliance, Virtual Network) for a packet leaving a VM. It helps troubleshoot routing but does not validate end‑to‑end connectivity to an external host.

**Option D. NSG flow logs** Flow logs capture traffic flow information through NSGs for monitoring and analytics. They provide visibility into traffic patterns but do not actively validate outbound connectivity.

**Option E. Traffic Analytics** Traffic Analytics provides insights into traffic flow trends and security risks using NSG flow logs. It is useful for monitoring but does not perform direct connectivity validation.

---

### Question 20

Scenario: Monitoring Connection Attempts to an Azure Virtual Machine

Your company has an Azure subscription with the following resource providers registered:

Authorization

Automation

Resources

Compute

Network

Storage

Billing

Web

You have a virtual machine named skillcertlabvm configured with the following settings:

Configuration Item
Value

Private IP Address
10.1.0.4

Network Security Group
skillcertlabnsg

Public IP Address
None

Subnet
10.1.0.0/24

Location
East US

**Requirement:**

You must record all successful and failed connection attempts to the virtual machine.

**Question:**

Which of the following actions should you implement to meet this requirement?Select three answers from the options provided.

**Options:**

- **A.** A. Ensure to register the Microsoft.Insights resource provider
- **B.** B. Ensure to add the Network Watcher connection monitor ✅
- **C.** C. Enable the Azure Network Watcher service in the East US region ✅
- **D.** D. Create a storage account
- **E.** E. Enable the Azure Network Watcher flow logs ✅

**Correct answer:** B, C, E

**Explanation:**

### Correct

**Option B. Ensure to add the Network Watcher connection monitor**

- Correct because the connection monitor in **Azure Network Watcher** allows you to monitor connectivity between your VM and endpoints.

- This helps validate network performance and troubleshoot connectivity issues.

**Option C. Enable the Azure Network Watcher service in the East US region**

- Correct because Network Watcher must be enabled in the region where the VM resides before you can use monitoring features.

- Without enabling Network Watcher in the VM’s region, monitoring tools like connection monitor cannot function.

**Option E. Enable the Azure Network Watcher flow logs**

- Correct because flow logs capture information about IP traffic through network security groups (NSGs).

- This is essential for analyzing traffic patterns and ensuring network security and performance.

### Incorrect

**Option A. Ensure to register the Microsoft.Insights resource provider**

- Incorrect because while Microsoft.Insights is used for monitoring and diagnostics, the question specifically relates to **network monitoring for a VM**.

- The required provider here is **Network Watcher**, not Insights.

**Option D. Create a storage account**

- Incorrect because creating a storage account is not directly required for enabling VM network monitoring.

- Storage accounts may be used to store logs, but they are not the primary step in enabling monitoring for the VM.

---

## Practice Set 14

Source: https://skillcertpro.com/az-104-exam-questions/14/

### Question 4

Adventure Works requires the ability to restore VM backups in the paired region if the primary region is unavailable for an extended period. You will select the vault redundancy that enables this disaster-recovery scenario.
Which redundancy should you choose?

**Options:**

- **A.** A. Locally redundant storage
- **B.** B. Zone redundant storage
- **C.** C. Geo redundant storage ✅
- **D.** D. Read-access geo redundant storage

**Correct answer:** C

**Explanation:**

Geo redundant storage asynchronously copies backup data to the paired region, enabling cross-region restore when the primary region is down. In Azure Backup, choosing geo redundant storage in the vault is the prerequisite for enabling cross-region restore for supported workloads.
Why the others are incorrect:
A: Locally redundant storage has no regional replica; you cannot restore in a paired region.
B: Zone redundant storage stays within one region; it won’t help if the whole region is unavailable.
D: Read-access geo redundant storage is a storage-account option; for Azure Backup scenarios, geo redundant storage with cross-region restore is the supported path.

---

### Question 5

Contoso will use Azure Site Recovery to replicate 40 production VMs from East US to West US for disaster recovery. You have to pick where to create the vault so failover orchestration remains available even if East US is down.
Where should you create the vault?

**Options:**

- **A.** A. Recovery Services vault in source region
- **B.** B. Recovery Services vault in target region ✅
- **C.** C. Backup vault in source region
- **D.** D. Backup vault in target region

**Correct answer:** B

**Explanation:**

For Azure-to-Azure disaster recovery, you create a Recovery Services vault in the target (DR) region. The vault hosts replication policies, manages the replication extension, and orchestrates failover even if the source region is unavailable. Placing it in the DR region ensures the control plane you need is accessible during a regional outage and aligns with the standard ASR setup workflow.
Why the others are incorrect:
A: A vault in the source region may be unavailable during a source-region outage, undermining failover orchestration.
C: A Backup vault is for modern Azure Backup workloads (e.g., blobs, disks), not ASR VM replication.
D: Same issue—Backup vault is not used for Site Recovery; you need a Recovery Services vault.

---

### Question 14

You have an Azure subscription named Subscription1 that contains the resources as shown in the following table.

You plan to configure Azure Backup reports for Vault1.

You are configuring the diagnostic settings for the AzureBackupReports log.

Which **storage accounts** can you use for the Azure Backup reports of Vault1?

**Options:**

- **A.** A. Storage1 only
- **B.** B. Storage2 only
- **C.** C. Storage3 only ✅
- **D.** D. Storage1 and Storage3
- **E.** E. Storage2 and Storage3
- **F.** F. Storage1, Storage2, and Storage3

**Correct answer:** C

**Explanation:**

While Storage3 is a valid option for configuring the diagnostic settings for the AzureBackupReports log, the combination of Storage1, Storage2, and Storage3 is not specified as a valid choice for Azure Backup reports of Vault1.

Overall explanation

When you configure **Diagnostic settings** for a **Recovery Services vault** (to emit **AzureBackupReports** logs), the **archive destination Storage account must be in the same Azure region as the vault**.

- **Vault1** is in **West Europe** → the only compliant storage account here is **Storage3 (West Europe)**.

- **Storage1 (East US)** and **Storage2 (West US)** are in different regions, so they **cannot** be selected as the archive target for Vault1’s diagnostics.

This region-matching requirement applies to the **Storage account** destination for diagnostics of many Azure resources, including Recovery Services vaults. If you instead route diagnostics to a **Log Analytics workspace** or **Event Hub**, those services have their own placement rules, but for **Storage** archiving, keep the destination **co-located** with the resource.

**Why the other options are incorrect**

- **A / B:** Each picks an account in a **different region** than the vault.

- **D / E / F:** Include at least one storage account **not** in **West Europe**, so they don’t meet the same-region rule.

---

### Question 33

Contoso needs to centralize resource logs and metrics from a Storage account (Storage1) into a Log Analytics workspace for KQL queries and alerts. You have to stream platform logs + metrics from the resource itself (not just subscription events).
What should you configure?

**Options:**

- **A.** A. Activity log export
- **B.** B. VM Insights
- **C.** C. Metrics alerts
- **D.** D. Diagnostic settings ✅

**Correct answer:** D

**Explanation:**

Diagnostic settings at the resource scope route platform logs and metrics to a Log Analytics workspace, Storage, or Event Hubs. For Storage1, this captures resource logs (e.g., read/write/delete categories as applicable) and metrics so you can query with KQL, build workbooks, and create alerts. Activity Log is control-plane; diagnostic settings are the correct data plane/resource pipeline.
Why the others are incorrect:
A. Activity log export: Subscription-level control-plane events only; doesn’t collect Storage resource logs/metrics.
B. VM Insights: Targets VMs/VMSS perf and maps; unrelated to Storage1’s platform logs.
C. Metrics alerts: Create alerts on metrics but do not collect/route logs to a workspace.

---

### Question 35

You can’t reach DBVM from WebVM. Both the subnet and the NIC have NSGs applied. You need to see the merged inbound/outbound rules that actually apply to DBVM so you can spot which rule is blocking the flow.
What should you open?

**Options:**

- **A.** A. Subnet NSG rules
- **B.** B. Effective security rules ✅
- **C.** C. IP flow verify
- **D.** D. Activity log

**Correct answer:** B

**Explanation:**

Effective security rules (at the NIC) show the combined result of defaults plus subnet NSG and NIC NSG rules after priorities are resolved. This view reflects what the platform enforces on that NIC, so you can quickly identify the winner rule (allow/deny) and its source (subnet vs NIC) without cross-comparing two NSGs manually.
Why the others are incorrect:
A: Shows only the subnet NSG; it doesn’t include the NIC NSG or the final merged outcome.
C: IP flow verify tests a single 5-tuple (source/dest/port/proto) and returns allow/deny, but it doesn’t list the full effective rule set you need to review.
D: Activity log records control-plane events (create/update); it doesn’t show data-plane NSG evaluation.

---

### Question 37

Fabrikam wants the subscription Activity log archived to a Log Analytics workspace so admins can query who changed what and when across services. You have to configure this at the subscription level, not per-resource.
What should you configure?

**Options:**

- **A.** A. Activity log to workspace ✅
- **B.** B. Resource diagnostic settings
- **C.** C. NSG flow logs
- **D.** D. Boot diagnostics

**Correct answer:** A

**Explanation:**

Configure a diagnostic setting on the Activity log (subscription scope) to send control-plane events (creates, updates, deletes, policy evaluations) to a Log Analytics workspace. This preserves governance history, enables KQL queries and alerts, and centralizes auditing without touching individual resources.
Why the others are incorrect:
B. Resource diagnostic settings: These are per-resource and won’t capture subscription-level Activity log events.
C. NSG flow logs: Network flow telemetry via Network Watcher; not subscription audit events.
D. Boot diagnostics: VM console/screenshots; unrelated to Activity log export.

---

### Question 54

Contoso’s web app in East US drops user connections to an external payments API a few times per day. You have to continuously test end-to-end connectivity from WebVM to the provider’s FQDN on TCP 443, track latency/packet loss, and trigger alerts if thresholds are exceeded—without installing a full NPM agent or building your own scripts.
What should you use?

**Options:**

- **A.** A. Connection troubleshoot
- **B.** B. Connection Monitor ✅
- **C.** C. NSG flow logs
- **D.** D. Packet capture

**Correct answer:** B

**Explanation:**

Connection Monitor runs continuous, scheduled tests from Azure sources (VMs, endpoints) to destinations (FQDN/IP/URL/port). It records reachability, RTT, and packet loss, and can export to Logs for alerting and dashboards—ideal for catching intermittent failures on 443. You get end-to-end insight (including where failures occur) without managing a custom probe framework.
Why the others are incorrect:
A: Connection troubleshoot is a one-off diagnostic, not continuous monitoring with trends/alerts.
C: NSG flow logs capture flow records to storage/Traffic Analytics; they don’t run active tests or track latency.
D: Packet capture collects packets on a NIC and is heavyweight for continuous health checks.

---

### Question 55

You have an Azure subscription containing 100 virtual machines. You want to identify underutilized VMs so you can resize them to a less expensive SKU.
Which blade should you use?

**Options:**

- **A.** A. Azure Monitor
- **B.** B. Azure Advisor ✅
- **C.** C. Azure Metrics
- **D.** D. Azure Cost Analysis
- **E.** E. Azure Customer Insights
- **F.** F. Azure Resource Health

**Correct answer:** B

**Explanation:**

Choice B is correct. Azure Advisor provides personalized recommendations for cost, performance, security, and reliability. Under the Cost category, it identifies underutilized virtual machines that can be resized to smaller, less expensive SKUs. This helps optimize spending without affecting workload requirements.
Why the others are incorrect
A. Azure Monitor collects and visualizes metrics and logs but doesn’t offer cost optimization recommendations.
C. Azure Metrics displays raw performance counters but doesn’t interpret them into actionable insights.
D. Azure Cost Analysis helps visualize and track spending trends but doesn’t analyze VM utilization efficiency.
E. Azure Customer Insights is a Dynamics 365 customer data analytics tool, not related to Azure resource management.
F. Azure Resource Health reports the current health of your resources but doesn’t provide cost optimization advice.

---

### Question 57

Fabrikam can’t RDP to MgmtVM on TCP 3389 from a known public IP. You have to quickly check if the exact 5-tuple is allowed or denied on the VM’s NIC and identify the rule that’s winning—no continuous monitoring needed.
What should you use?

**Options:**

- **A.** A. Connection Monitor
- **B.** B. Next hop
- **C.** C. IP flow verify ✅
- **D.** D. NSG flow logs

**Correct answer:** C

**Explanation:**

IP flow verify evaluates a single source/destination/port/protocol against the VM’s effective NSG rules on the NIC and immediately returns Allow or Deny plus the matching rule name/priority. It’s the fastest way to confirm whether NSG policy is blocking RDP without building a test path or running captures.
Why the others are incorrect:
A: Connection Monitor is for continuous probes and trends; overkill for a one-time allow/deny check.
B: Next hop validates routing (e.g., Internet, NVA, gateway), not NSG allow/deny decisions.
D: NSG flow logs emit aggregated flow telemetry; they don’t give an instant policy verdict or the exact blocking rule.

---

### Question 58

Contoso must protect 100 Azure virtual machines in East US using Azure Backup. You have to use the standard VM backup experience and keep management simple. The vault must be co-located with the protected resources.
What should you create?

**Options:**

- **A.** A. Recovery Services vault (East US) ✅
- **B.** B. Backup vault (any region)
- **C.** C. Backup vault (East US)
- **D.** D. Recovery Services vault (West US)

**Correct answer:** A

**Explanation:**

Azure VM backup uses a Recovery Services vault, and the vault must be in the same region as the VMs. Creating the vault in East US lets you enable backup policies and restores for those VMs without cross-region complications. Recovery Services vaults handle snapshots, retention, and restore workflows for IaaS VMs.
Why the others are incorrect:
B: Backup vault is a different vault type (used for newer workloads like Azure Disks/Blobs). “Any region” also violates the co-location rule.
C: Even in East US, a Backup vault isn’t the standard choice for VM backup in AZ-104 scenarios; use a Recovery Services vault.
D: A vault in West US cannot protect East US VMs; vaults are region-scoped.

---

### Question 60

Fabrikam needs point-in-time protection for Azure Blob Storage in a storage account. Security forbids using account keys in scripts, and they want policy-based backups managed centrally by Azure Backup.
What should you create?

**Options:**

- **A.** A. Recovery Services vault
- **B.** B. Storage soft delete only
- **C.** C. Azure Site Recovery
- **D.** D. Backup vault ✅

**Correct answer:** D

**Explanation:**

Operational backup for blobs is managed through an Azure Backup vault with policies—no custom scripts or account keys. The Backup vault integrates with the storage account to protect blob data at scale and provides centralized monitoring through Backup Center.
Why the others are incorrect:
A: Recovery Services vault is used for workloads like Azure VMs and Azure Files; it’s not the modern pattern for blob protection.
B: Soft delete helps recovery from deletion but isn’t full backup with centralized policies/monitoring.
C: Azure Site Recovery is for disaster recovery (replication/failover), not blob backup.

---

## Practice Set 15

Source: https://skillcertpro.com/az-104-exam-questions/15/

### Question 2

Contoso’s Finance team requires proactive alerts when the actual monthly cost for the Production subscription hits 80% of the budget. You must avoid custom KQL and keep it in native Cost Management.
Current status
What should you configure?

**Options:**

- **A.** A. Azure Monitor metric alert on Cost* metrics
- **B.** B. Scheduled query alert on UsageDetails in Log Analytics
- **C.** C. Cost Management budget with an 80% actual threshold and email recipients ✅
- **D.** D. Azure Advisor cost recommendation alert

**Correct answer:** C

**Explanation:**

Cost Management Budgets provide native alerts on actual and forecasted spend at subscription or resource group scope. Configure a monthly budget of USD 100,000 with a notification threshold of 80% (actual) and add recipients (emails, groups, and/or an action group). This raises alerts when actual costs cross the threshold—no KQL, no custom ingestion.
why the others are incorrect:
A. Cost metrics aren’t first-class Azure Monitor metrics for direct budget thresholds; you’d still need a budget to define the “80%” logic.
B. Requires exporting usage to a workspace and writing KQL—explicitly not desired.
D. Advisor gives recommendations (RI/Savings Plans, right-size), not budget threshold alerts.

---

### Question 3

Fabrikam runs dozens of subscriptions. Leadership asks for a single place to review cost-saving recommendations (right-size underutilized compute, buy Savings Plans/Reserved Instances, remove idle public IPs) and then drill into details by subscription.
Where should you get these recommendations?

**Options:**

- **A.** A. Azure Advisor – Cost ✅
- **B.** B. Cost analysis (Accumulated costs)
- **C.** C. Pricing calculator
- **D.** D. Azure Monitor Workbooks

**Correct answer:** A

**Explanation:**

Azure Advisor – Cost aggregates cost optimization recommendations: right-size/stop underutilized VMs, purchase Savings Plans/Reservations, remove idle resources, and more. It can be scoped at management group, subscription, or resource group, and links each finding to potential monthly savings and remediation steps.
why the others are incorrect:
B. Cost analysis shows historical/forecasted spend, not prescriptive recommendations.
C. Pricing calculator estimates planned deployments; it doesn’t inspect your estate.
D. Workbooks visualize data; they don’t generate optimization advice.

---

### Question 4

Contoso wants an alert when the forecast shows the subscription will exceed next month’s budget. Finance also wants an email notification and webhook to their automation.
Target configuration
What should you implement?

**Options:**

- **A.** A. Budget alert with actual-cost threshold at 100%
- **B.** B. Azure Policy to deny deployments when spend is high
- **C.** C. Export usage to Log Analytics and alert via KQL forecast
- **D.** D. Cost Management budget with a 100% forecast threshold and notifications (email + action group) ✅

**Correct answer:** D

**Explanation:**

A Budget can trigger on forecasted spend crossing a set percentage of the budget, enabling proactive alerts before the overrun happens. Configure the budget at subscription scope, set the forecast threshold to 100%, and add both email recipients and an action group (for webhook/automation). This satisfies the forecast requirement and the Finance notification path.
why the others are incorrect:
A. Triggers only when actual costs have already hit 100%—too late.
B. Azure Policy doesn’t evaluate costs; it governs resource configurations.
C. Possible but heavy: requires exports, KQL, and manual forecasting—unnecessary when budgets do it natively.

---

### Question 5

Contoso has a storage account stprod01 used by an app in VNet-App/Subnet-API. You have to restrict data-plane access to that subnet and still allow Azure Backup to write backups to the account. Do not open the account to the public internet.
Current state
What should you configure on stprod01?

**Options:**

- **A.** A. Selected networks + add Subnet-API only
- **B.** B. Selected networks + add Subnet-API + enable “Allow trusted Microsoft services” ✅
- **C.** C. Selected networks + add Subnet-API + add app public IP
- **D.** D. Private endpoint + disable public network access, no other change

**Correct answer:** B

**Explanation:**

Storage firewalls set to Selected networks allow traffic only from added subnets (via service endpoints) and permitted exceptions. Azure Backup is a trusted Microsoft service; enabling “Allow trusted Microsoft services to access this storage account” lets Backup reach the account without exposing it publicly. Adding Subnet-API locks access to the app subnet; no public internet exposure.
why the others are incorrect:
A. Blocks Azure Backup (trusted services not allowed).
C. Public IP exceptions broaden exposure and don’t help Backup (it doesn’t originate from that IP).
D. Private endpoints work, but you’d also need Backup to target the private endpoint and DNS; requirement didn’t mandate private access for Backup—trusted services are the simpler fit.

---

### Question 17

A nightly pipeline overwrote reports/finances.xlsx. You have to restore just that blob without rolling back the whole container.
Which feature should you enable?

**Options:**

- **A.** A. Soft delete (blobs)
- **B.** B. Blob versioning ✅
- **C.** C. Container soft delete
- **D.** D. Change feed

**Correct answer:** B

**Explanation:**

Blob versioning keeps every update as an immutable version. After an overwrite, the previous bytes remain available by versionId. You can read/copy/promote that version to make it current, restoring precisely this one blob without touching other objects.
Why the others are incorrect:
A. Soft delete protects deletes, not overwrites; there’s nothing to “undelete.”
C. Container soft delete only helps if the entire container was deleted; it cannot roll back one blob’s content.
D. Change feed is an operational log (for auditing/ETL) and doesn’t hold data snapshots for restore.

---

### Question 18

Fabrikam needs to restore the entire cn-prod container to Friday 18:00 UTC in-place within the same account. You have to enable the features that make this possible.
Current settings
What configuration enables this recovery?

**Options:**

- **A.** A. Soft delete only
- **B.** B. Versioning only
- **C.** C. Versioning + Change feed + PITR ✅
- **D.** D. Container soft delete only

**Correct answer:** C

**Explanation:**

Container point-in-time restore reconstructs the container’s state at a timestamp by replaying operations. It requires (1) versioning to preserve historical object states, (2) change feed to supply an ordered log of changes, and (3) PITR enabled with a retention window covering the target time. With all three, Azure can roll cn-prod back to exactly Friday 18:00, consistently undoing mass overwrites/deletes.
Why the others are incorrect:
A. Soft delete can undelete individual blobs but cannot rebuild a consistent container state at a specific time.
B. Versioning alone would force manual per-blob rollbacks—slow, error-prone, and not a true timestamp restore.
D. Container soft delete only restores if the whole container was deleted; it won’t rewind an existing, corrupted container.

---

### Question 24

You have an Azure subscription named Subscription1 that contains the resources as shown in the following table.

You plan to configure Azure Backup reports for Vault1.

You are configuring the diagnostic settings for the AzureBackupReports log.

Which **Log Analytics workspaces** can you use for the Azure Backup reports of Vault1?

**Options:**

- **A.** A. Analytics1 only
- **B.** B. Analytics2 only
- **C.** C. Analytics3 only
- **D.** D. Analytics1, Analytics2, and Analytics3 ✅

**Correct answer:** D

**Explanation:**

Diagnostic settings for a **Recovery Services vault** can send logs (including **AzureBackupReports**) to a **Log Analytics workspace** **regardless of the workspace’s region**. Unlike the “archive to Storage account” destination—which requires the storage account to be in the **same region** as the emitting resource—sending diagnostics to **Log Analytics** **does not** require regional co-location with the vault.

Therefore, you can select **any** of the workspaces (**Analytics1**, **Analytics2**, **Analytics3**) for **Vault1**’s Azure Backup reports, assuming you have the necessary permissions and the workspaces are in the same **tenant**.

**Why the other options are incorrect**

- Analytics1 only / Analytics2 only / Analytics3 only: Each unnecessarily limits the choice to a single workspace. All three are valid targets for Vault1’s Azure Backup diagnostics.

---

### Question 27

You create a Recovery Services vault backup policy named Policy1 as shown in the following exhibit.

Based on the information provided, select the answer choice that completes the following statement correctly.

**“The backup that occurs on Sunday, March 1, will be retained for ___________.”**

**Options:**

- **A.** A. 30 days
- **B.** B. 10 weeks
- **C.** C. 36 months
- **D.** D. 12 months
- **E.** E. 7 years
- **F.** F. 10 years ✅

**Correct answer:** F

**Explanation:**

Azure VM backup retention evaluates a restore point against **daily, weekly, monthly, and yearly** retention tiers. When a restore point matches a **yearly retention point** (for example, a backup taken on **March 1** when the policy’s **yearly retention** is configured to retain the **March** backup), that restore point is promoted to **yearly** and kept for the **Yearly retention period** defined in the policy.

In the exhibit, the backup on **Sunday, March 1** aligns with the **yearly** schedule and therefore inherits the **10 years** retention defined for yearly backups—regardless of shorter daily/weekly/monthly settings.

**Why the other options are incorrect**

- **30 days:** Daily retention; does not apply when the point is selected as a **yearly** retention point.

- **10 weeks:** Weekly retention; superseded by the **yearly** tier for this date.

- **36 months / 12 months / 7 years:** These are **monthly** or other durations, not the configured **yearly = 10 years** value for the March retention point.

---

### Question 28

You have an Azure subscription named Sub1 that contains the resources shown in the following table.

**Sub1 contains the following alert rule:**

- **Name**: Alert1

- **Scope**: All resource groups in Sub1

– Include all future resources

- **Condition**: All administrative operations

- **Actions**: Action1

**Sub1 contains the following alert processing rule**

- **Name**: Rule1

- **Scope**: Sub1

- **Rule type**: Suppress notifications

- **Apply the rule**: On a specific time

– **Start**: August 10, 2022

– **End**: August 13, 2022

For the statement below, select Yes if the statement is true. Otherwise, select No.

**“If you create a resource group in Sub1 on August 11, 2022, Alert1 is listed in the Azure portal.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Choice Yes is correct. Alert1’s scope is configured at the **subscription level (Sub1)**, which automatically includes **all existing and future resource groups** within that subscription. Therefore, when a new resource group is created in Sub1 —for example, on August 11, 2022—it inherits that alert scope. As a result, **Alert1 will appear in the Azure portal for the newly created resource group** without any additional configuration.

The No option is incorrect because subscription-scoped alerts are not limited to pre-existing resource groups; they dynamically apply to all resources under that subscription, including those created after the alert definition.

---

### Question 32

You have an Azure subscription with VMs connected to VNet1. You plan to onboard the VMs to Azure Monitor VM Insights.
You must ensure all VM-to–Azure Monitor traffic goes privately via VNet1 only (no public endpoints).
What should you create first?

**Options:**

- **A.** A. A private endpoint to Azure Monitor
- **B.** B. An Azure Monitor Private Link Scope (AMPLS) ✅
- **C.** C. A Data Collection Rule (DCR)
- **D.** D. A Log Analytics workspace
- **E.** E. A Data Collection Endpoint (DCE)
- **F.** F. A Private DNS zone for Azure Monitor

**Correct answer:** B

**Explanation:**

To force Azure Monitor traffic over your VNet, you must use Azure Monitor Private Link. The control-plane object that enables this is the Azure Monitor Private Link Scope (AMPLS).
The correct high-level sequence is:
1. Create AMPLS and link your Azure Monitor resources to it (e.g., Log Analytics workspace, Insights components).
2. Create Private Endpoints in VNet1 that target the AMPLS.
3. Configure required Private DNS resolution to the private endpoints.
4. (For AMA/VM Insights) Apply your DCR (and DCE if used) to the VMs.
Creating AMPLS first is essential; private endpoints for Azure Monitor must reference an existing AMPLS. This is what enforces that VM agents reach Azure Monitor privately via VNet1 rather than public endpoints.
Why the other options are incorrect
A. Private endpoint: Needed, but you can’t create the Azure Monitor PE without an AMPLS to target. AMPLS comes first.
C. DCR: Defines what data to collect; it doesn’t establish private connectivity.
D. Log Analytics workspace: Required for VM Insights data storage, but it doesn’t enforce private paths by itself.
E. DCE: Used by AMA to route data, but it doesn’t create the private link to Azure Monitor services.
F. Private DNS zone: Required after you have private endpoints; DNS alone can’t enable private access without AMPLS + PEs.

---

### Question 36

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Fabrikam’s web app runs on Azure App Service with VNet Integration into prod-vnet. Azure SQL and Azure Storage are exposed only via Private Endpoints. After enabling Private Endpoints, the app can’t connect to SQL or Storage by FQDN.
Which TWO configurations should you implement to restore connectivity while keeping traffic private?

**Options:**

- **A.** A. Create a route table with UDRs to the private endpoint IPs and associate it to the vnet-integration subnet
- **B.** B. Create and link a private DNS zone privatelink.blob.core.windows.net to prod-vnet ✅
- **C.** C. Publish public A records for the storage account that point to the private endpoint IP
- **D.** D. Create and link a private DNS zone privatelink.database.windows.net to prod-vnet ✅
- **E.** E. Enable service endpoints for Storage and SQL on the vnet-integration subnet
- **F.** F. Add static host entries inside App Service for the Storage/SQL endpoints

**Correct answer:** B, D

**Explanation:**

Choice B and D are correct. Private Endpoints require private DNS so that the service’s public FQDN resolves to the private IP exposed inside your VNet. Linking the privatelink.blob.core.windows.net and privatelink.database.windows.net zones to prod-vnet lets the App Service (via VNet Integration) resolve Storage and SQL to private addresses, keeping data off the public internet and restoring name resolution cleanly.
Why the other options are incorrect
A: UDRs control routing after name resolution; they don’t fix DNS.
C: Never advertise Private Endpoint IPs in public DNS.
E: Service endpoints aren’t used by App Service and aren’t combined with Private Endpoints.
F: Host file hacks aren’t supported/operationally scalable for App Service.

---

### Question 60

At Contoso, you assigned a built-in policy that DeployIfNotExists diagnostic settings on storage accounts at the subscription scope. Compliance shows many accounts as noncompliant. Security requires least privilege when you remediate.
What should you configure before running the remediation task?

**Options:**

- **A.** A. Attach a user-assigned managed identity to the policy (or initiative) assignment and grant it only the minimal RBAC on the target scope ✅
- **B.** B. Grant Owner to your user at subscription, then re-run policy evaluation
- **C.** C. Enable system-assigned managed identity on every storage account
- **D.** D. Change the effect to Audit and use Azure Monitor alerts

**Correct answer:** A

**Explanation:**

DeployIfNotExists remediation runs using the managed identity on the policy/initiative assignment, not your user identity. Best practice is to attach a user-assigned managed identity (UAMI) to the assignment, grant it the minimal roles needed to deploy the diagnostic settings (for example, Storage Account Contributor or specific granular roles at the RG/resources), and then start a remediation task that uses this identity. This achieves least privilege and scales cleanly.
Why the others are incorrect:
B: Your user’s Owner role is unnecessary and violates least privilege; remediation won’t run as your user anyway.
C: System-assigned MIs on each storage account are irrelevant; the identity lives on the assignment, not on targets.
D: Switching to Audit avoids deployment, leaving the noncompliance unfixed.

---

## Practice Set 16

Source: https://skillcertpro.com/az-104-exam-questions/16/

### Question 2

Contoso needs guest-performance and process/dependency visibility across all VMs and VM scale sets in several subscriptions. They want Azure Monitor Agent (AMA) with data collection rules (DCRs) no per-VM click-ops and they want the VM insights experience (Performance/Map) enabled consistently.
You need to enable VM insights at scale using AMA and DCRs so teams can interpret CPU/memory trends and dependency maps without touching each VM. Which option should you choose?

**Options:**

- **A.** A. Install Log Analytics agent (MMA)
- **B.** B. Enable diagnostic settings on each VM
- **C.** C. Application Insights agent
- **D.** D. Azure Policy: VM insights initiative ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. The VM insights policy initiative deploys Azure Monitor Agent and associates the required data collection rule across targeted scopes (subs/RGs/VMSS), giving you a uniform VM insights experience (Performance charts; optional Map collection) without manual enablement per VM. This is the supported path post-MMA deprecation and is designed for fleet onboarding with compliance visibility.
Once enabled, operators can interpret guest CPU, memory, disk, and networking from the VM insights blades and pivot to the Map for process-to-process/service dependencies when that collection is turned on in the DCR. This reduces MTTR by localizing hot processes and noisy neighbors before deeper log queries
Why others are incorrect
A. MMA is deprecated for new onboarding; VM insights now uses AMA + DCR.
B. Diagnostic settings emit platform metrics/logs but don’t deliver the VM insights (guest-level) experience or AMA/DCR deployment at scale.
C. Application Insights agent targets app telemetry, not the VM insights guest-performance/dependency solution.

---

### Question 5

Contoso has several Azure file shares hosting Finance and HR data in a GPv2 account. An intern recently deleted a top-level folder, and the team is worried someone could even delete an entire share. The business requires quick recovery of accidentally deleted files or shares within a short retention window, with no servers or agents to manage and no change to SMB access
You need to protect against accidental deletion of both files and entire shares, enabling fast recovery within a retention window and minimal operational overhead. Which option should you choose?

**Options:**

- **A.** A. Enable soft delete for Azure Files at the storage account and set an appropriate retention period ✅
- **B.** B. Schedule daily manual snapshots via CLI and rely on users to restore from Previous Versions
- **C.** C. Enable Blob soft delete and container soft delete on the same account
- **D.** D. Deploy Azure File Sync with cloud tiering to keep versions available

**Correct answer:** A

**Explanation:**

Soft delete for Azure Files preserves deleted items for a configurable retention period, enabling quick undelete of both file shares and file/folder-level deletes directly from the service without extra infrastructure. It addresses accidental deletion while keeping normal SMB access and administrative processes unchanged.
Snapshots alone don’t protect you from entire share deletion—if the share goes, its snapshots go too. Soft delete specifically intercepts those deletes and allows rapid recovery, meeting the requirement with minimal overhead.
Why others are incorrect
B. Manual snapshots require scripting/ops effort and don’t protect against full share deletion.
C. Blob soft delete applies to the Blob service, not Azure Files.
D. Azure File Sync introduces servers/agents and is not required to meet the stated cloud-only undelete requirement.

---

### Question 6

Adventure Works manages 80+ Azure file shares across multiple storage accounts. They need automated, policy-based snapshots with centralized scheduling and retention, plus item-level restore and job monitoring/alerts—without custom scripts.
You need to implement centrally managed scheduled snapshots with retention and file/folder-level restores, and you want monitoring and alerts in one place. Which option should you choose?

**Options:**

- **A.** A. Enable point-in-time restore on each share and rely on ad-hoc restores when needed
- **B.** B. Turn on soft delete for Azure Files and set the retention to 30 days
- **C.** C. Configure Azure Backup for Azure Files using a Recovery Services vault and a backup policy ✅
- **D.** D. Use Azure Automation runbooks to take snapshots daily and delete older ones

**Correct answer:** C

**Explanation:**

Azure Backup for Azure Files provides policy-driven scheduling and retention using native share snapshots under the hood, with centralized management in a Recovery Services vault. It supports item-level restore, job tracking, and alerts—all without building or maintaining custom scripts.
Point-in-time restore and soft delete solve different problems (roll back a share to a prior state, or recover deletions) but don’t deliver centralized policy, monitoring, and alerting at scale. Azure Backup is purpose-built for these requirements and applies consistently across many shares and accounts.
Why others are incorrect
A. Point-in-time restore focuses on rolling a share back; it lacks central, policy-based scheduling/retention and vault-level monitoring.
B. Soft delete protects against accidental deletes; it doesn’t create scheduled recovery points or item-level backup workflows.
D. Runbooks can work, but they require custom scripting, maintenance, and limited monitoring, which the requirement rejects.

---

### Question 7

Tailwind Traders is formalizing backup for production VMs across two subscriptions. They want short RPOs for critical workloads and consistent, vault-based governance.
Problems / issues
RPO target ? 4 hours for selected VMs (multiple backups per day).
Keep snapshot-tier (Instant Restore) points for 7 days for fast restores.
Keep weekly for 12 weeks and monthly for 12 months in the vault.
Apply at scale without touching each VM; stay on Recovery Services vault.
Prefer zonal resiliency for snapshot-tier points where possible.
You need to meet these requirements with a single policy approach. Which option should you choose?

**Options:**

- **A.** A. Standard daily policy (Recovery Services vault)
- **B.** B. Enhanced policy (Recovery Services vault) ✅
- **C.** C. Diagnostic settings to Log Analytics
- **D.** D. Azure Automation runbook (custom snapshots)

**Correct answer:** B

**Explanation:**

Choice B is correct. An Enhanced policy for Azure VM backup supports multiple backups per day (as frequent as every 4 hours) to meet the short RPO, and lets you configure Instant Restore snapshot retention (for quick, same-region restores) alongside vault retention for weekly/monthly points. Because it’s defined in the Recovery Services vault, you can apply it at scale and report on compliance centrally.
Enhanced policy also provides zonal resiliency for snapshot-tier recovery points where supported, improving availability of near-term restores. Compared to scripting or standard daily policies, it combines frequency + retention controls in one place and removes per-VM scheduling drift.
Why others are incorrect
A. Standard policy is limited to one daily backup; it can’t achieve a 4-hour RPO.
C. Diagnostic settings export telemetry; they don’t create backups or retention.
D. Runbooks add operational overhead and lack vault-native retention/restore semantics.

---

### Question 27

You have an Azure subscription that contains a resource group named RG26.

RG26 is set to the West Europe location and is used to create temporary resources for a project.

RG26 contains the resources shown in the following table.

SQLDB01 is backed up to RGV1.

When the project is complete, you attempt to delete RG26 from the Azure portal. The deletion fails.

You need to delete RG26.

What should you do first?

**Options:**

- **A.** A. Delete VM1
- **B.** B. Delete sa001
- **C.** C. Stop the backup of SQLDB01 ✅
- **D.** D. Stop VM1
- **E.** E. Delete the Recovery Services vault RGV1
- **F.** F. Remove tags from RG26

**Correct answer:** C

**Explanation:**

Choice C is correct. An Azure **Recovery Services vault cannot be deleted while it has protected items** (backup items) or ongoing backup jobs. Because **SQLDB01** is protected by **RGV1**, the resource group deletion fails. The correct first step is to **stop backup (disable protection) for SQLDB01** in RGV1 and remove its backup item/data (you can choose Stop backup and delete backup data, or Stop backup and retain data first, then purge if needed, considering soft delete). After all protected items are removed from the vault and any soft-deleted items are purged, you can delete **RGV1**, and then delete **RG26**.

Why the others are incorrect

A: Deleting **VM1** doesn’t affect the protected item in RGV1; the vault still blocks deletion.

B: Deleting **sa001** is unrelated to the vault’s protected items, so RG26 deletion will still fail.

D: Stopping **VM1** doesn’t change backup protection state.

E: You **cannot** delete the vault first while it contains protected items; you must disable protection and remove items before the vault can be deleted.

F: Tags do not affect delete eligibility.

---

### Question 44

You need to enable scheduled App Service backups for a small dev site in the portal while keeping costs low.
What is the minimum App Service plan tier that supports backups?

**Options:**

- **A.** A. Shared
- **B.** B. Free
- **C.** C. Basic ✅
- **D.** D. Consumption

**Correct answer:** C

**Explanation:**

The App Service backup/restore feature is available starting at the Basic tier and continues through Standard and Premium. From Basic upward, you can configure a storage account/container and set a schedule directly in the portal. It’s the lowest-cost tier that meets the requirement.
Why the others are incorrect:
A. Shared — Also lacks the backup feature; it shares compute and is not suitable for scheduled backups.
B. Free — No backup/restore support; intended for testing only with tight limits.
D. Consumption — This is a Functions hosting tier, not an App Service plan tier for Web Apps, and it doesn’t provide the Web App backup feature.

---

### Question 52

Using the charts above (Aggregation = Average, Split by = Instance), you need to interpret what the data is telling you about load distribution across the VMSS instances.
Which statement best interprets the chart?

**Options:**

- **A.** A. Max aggregation shows both instances near 90%
- **B.** B. Metrics can’t split by instance; this must be logs
- **C.** C. Average per-instance series reveals a hotspot on vmss-app_0 while vmss-app_1 is lightly loaded ✅
- **D.** D. Percentage CPU requires a guest agent; without it the values are zero

**Correct answer:** C

**Explanation:**

With Aggregation = Average and Split by = Instance, Azure Monitor plots one series per instance, each showing that instance’s average CPU per time bucket. The data clearly shows load imbalance: vmss-app_0 is consistently hot (~90%), while vmss-app_1 is cool (~25%). The higher Disk Queue Length on vmss-app_0 reinforces that it’s handling most of the work. This points to uneven traffic (e.g., session pinning, skewed routing, or a stale backend pool).
Why the others are incorrect:
A: You are not using Max across instances; the view is per-instance averages, so both lines would not be ~90%.
B: Azure Metrics support dimension splits (like instance), so this is valid in Metrics.
D: Percentage CPU is a platform metric; it doesn’t require a guest agent for basic CPU utilization.

---

### Question 53

In the same investigation, you want a single line that shows the worst-case load across the scale set at each moment (if any instance spikes, the line spikes). You don’t want separate per-instance series for this view.
Which chart setting gives you that “worst-instance” line directly in Metrics?

**Options:**

- **A.** A. Aggregation = Max at the VMSS resource scope (no split) ✅
- **B.** B. Aggregation = Average, Split by Instance
- **C.** C. Query the Activity Log (Administrative) instead of Metrics
- **D.** D. Use a Log Analytics query in a workspace

**Correct answer:** A

**Explanation:**

Setting Aggregation = Max with no split tells Metrics to compute, for each time bucket, the maximum value among all instance series and plot that as one line. This is exactly the “any-instance-is-hot” view you want for quick severity assessment, alert tuning, and at-a-glance saturation checks.
Why the others are incorrect:
B: Average + split shows multiple per-instance lines and can mask hotspots by averaging.
C: The Activity Log contains control-plane events, not performance metrics like CPU.
D: Logs could approximate it, but the requirement was a direct Metrics chart setting without switching data sources.

---

### Question 54

You must protect 20 Azure VMs in East US with Azure Backup. Leadership wants regional resiliency and the ability to restore in the paired region if East US has a prolonged outage. You will manage everything in the Azure portal and use the standard VM backup experience. Backups must remain under Microsoft-managed encryption and use a first-party vault (no custom storage accounts).
What should you provision and configure?

**Options:**

- **A.** A. Create RecoveryVault1 in East US and set Backup Storage redundancy = GRS; enable Cross Region Restore ✅
- **B.** B. Create Backup1 storage account (GRS) and schedule VM snapshots to it with scripts
- **C.** C. Create RecoveryVault1 in West US and set Backup Storage redundancy = LRS
- **D.** D. Create a Backup vault in any region; VM backups will replicate automatically cross-region

**Correct answer:** A

**Explanation:**

Azure VM Backup uses a Recovery Services vault, which must be in the same region as the protected VMs. Setting Backup Storage redundancy = GRS gives geo-redundant backup storage, and enabling Cross Region Restore allows restores in the paired region (subject to feature support and region pairing). This exactly satisfies: protect East US VMs, keep vault in East US, provide regional resiliency, and allow paired-region restores.
Why the others are incorrect:
B: VM Backup does not back up to your own storage account. It uses a Recovery Services vault, not ad-hoc snapshot scripts and storage accounts.
C: A vault must be in the same region as the source VMs; a West US vault cannot back up East US VMs. LRS also lacks geo redundancy.
D: A Backup vault is a different vault type (used by “modern” workloads like operational backup for blobs). VM backup in AZ-104 is with a Recovery Services vault, and “automatic cross-region backups” is not how VM Backup is configured.

---

### Question 14

A VM in Spoke-A can’t reach a private endpoint over **TCP 443**. The security team wants to know **exactly which rule** is denying the flow from the VM to the destination IP.

You need to determine if the flow is **Allowed/Denied** and identify the **exact NSG rule** responsible for the decision. **Which option should you choose?**

**Options:**

- **A.** A. Next hop
- **B.** B. Effective security rules
- **C.** C. Connection troubleshoot
- **D.** D. IP flow verify ✅

**Correct answer:** D

**Explanation:**

**IP flow verify** evaluates a single **5-tuple (src/dst IP, port, protocol, direction)** against the **effective** NSG and admin rules applied to the VM’s NIC/subnet and returns **Allow/Drop with the exact rule name**. That’s the fastest way to answer “which rule is blocking 10.1.1.7 → 10.0.10.5:443?”—no packet capture or guesswork required.

Because it runs at the VM’s network interface context, it reflects merged policy (subnet + NIC + admin rules) and avoids confusion when multiple NSGs exist. For audit and RCA, the reported **rule name** is the key artifact the security team asked for.

Why others are incorrect

A. **Next hop** shows routing decisions, not L4 allow/deny or rule names.

B. **Effective security rules** lists merged rules but doesn’t evaluate a **specific flow** or return an allow/deny result.

C. **Connection troubleshoot** can show reachability and where it fails, but it won’t return the **precise rule name** that denied the flow.

---

### Question 15

Fabrikam operates multiple storage accounts used by different departments. Each account uses shared keys for programmatic access, but the IT security team is implementing key rotation policies to enhance security.

After Fabrikam’s IT team regenerates **key1** for storagefinance01, several legacy applications lose access to the storage account. They must restore functionality without rolling back the key. What should they do?

**Options:**

- **A.** A. Update the applications to use key2 instead of key1 ✅
- **B.** B. Delete and recreate the storage account with a new key pair
- **C.** C. Disable key rotation for all storage accounts
- **D.** D. Configure the storage account to allow anonymous access

**Correct answer:** A

**Explanation:**

Each Azure Storage account provides two access keys — **key1** and **key2** — to support **seamless key rotation**. When one key is regenerated, applications can temporarily use the other key while configurations are updated. This ensures business continuity during key rotation.

**Why others are incorrect:**

- **B:** Deleting the storage account would result in data loss and service disruption.

- **C:** Disabling key rotation undermines security and violates governance policy.

- **D:** Anonymous access is not supported for most storage types and poses a serious security risk.

---

### Question 17

A worker VM in a spoke must call an API on a hub VM over **TCP 8443**. There’s an **NVA in the hub**, and UDRs steer traffic through it. The app intermittently times out; ops need an **active test** from the worker VM to the API **FQDN** that shows **reachability, hops, and whether NSG/UDR is the cause**.

You need an **on-demand** test from the source VM to the destination **FQDN/port** that reports **reachability**, **path**, and whether a **platform vs. configuration** issue (NSG/UDR/port) is causing failure. **Which option should you choose?**

**Options:**

- **A.** A. IP flow verify
- **B.** B. Next hop
- **C.** C. Connection troubleshoot ✅
- **D.** D. Packet capture

**Correct answer:** C

**Explanation:**

**Connection troubleshoot** runs an **active end-to-end probe** from the chosen source to a destination (FQDN/IP and port), then reports **Reachable/Unreachable**, resolved IP, **hops**, and likely cause (for example, **NSG rule**, **UDR**, or **blocked port**). It’s ideal for intermittent app timeouts because you can run the test during an incident and see whether the platform or your configuration is at fault.

Unlike per-flow evaluations, it gives a **path-level view** across VNets and NVAs and highlights where along the route connectivity breaks, accelerating MTTR without building a persistent monitor.

Why others are incorrect

A. **IP flow verify** checks policy at the VM NIC for a fixed tuple; it doesn’t trace **hops** or test DNS/FQDN resolution.

B. **Next hop** only shows routing for a destination IP; it won’t validate ports, NSGs, or end-to-end reachability.

D. **Packet capture** is low-level and heavier to operate; it lacks **root-cause hints** and hop topology for quick triage.

---

### Question 24

You have an Azure subscription that contains the resources shown in the following table.

All virtual machines run Windows Server.

On VM1, you back up a folder named Folder1 as shown in the following exhibit.

You plan to restore the backup to a different virtual machine.

You need to restore the backup to VM2.

What should you do first?

**Options:**

- **A.** A. From VM2, install the Windows Server Backup feature
- **B.** B. From VM1, install the Microsoft Azure Recovery Services Agent
- **C.** C. From VM1, install the Windows Server Backup feature
- **D.** D. From VM2, install the Microsoft Azure Recovery Services Agent ✅
- **E.** E. From VM2, create a shared folder
- **F.** F. From VM1, enable file recovery mode

**Correct answer:** D

**Explanation:**

Choice D is correct. To restore an **Azure Backup (MARS)** backup to a **different VM**, that destination VM must be able to **communicate securely with the Recovery Services vault** and authenticate the backup data. This requires installing the **Microsoft Azure Recovery Services Agent** (MARS Agent) on **VM2**. Once installed, you can register VM2 with the same Recovery Services vault used by VM1 and perform a **“Restore”** operation to recover Folder1 to VM2.

The MARS Agent provides the integration layer between the on-premises or Azure VM OS and Azure Backup. It handles encryption/decryption, data transfer, and vault authentication. Without it, VM2 cannot browse or restore backup items stored in Azure.

Why the others are incorrect

A: The **Windows Server Backup** feature is a local backup utility; it cannot retrieve backups from a Recovery Services vault.

B: VM1 already has the MARS Agent installed (used for the initial backup). Installing it again doesn’t help restore to another VM.

C: Same as above—Windows Server Backup is unrelated to Azure Backup’s restore mechanism.

E: A shared folder isn’t required for restoring from a vault.

F: File recovery mode applies to restoring files on the same VM, not to a different machine.

---

### Question 43

Contoso runs nightly maintenance every Saturday 22:00–02:00 on resources in RG-App. During that window, alerts should be suppressed, but Sev0 incidents must still notify on-call. The ops team doesn’t want to edit hundreds of existing alert rules.
You need to implement scheduled suppression for alerts scoped to RG-App, excluding Sev0, without touching each alert rule. Which option should you choose?

**Options:**

- **A.** A. Metric alert (dynamic threshold)
- **B.** B. Action group (disable during maintenance)
- **C.** C. Alert processing rule ✅
- **D.** D. Activity log alert

**Correct answer:** C

**Explanation:**

Choice C is correct. An alert processing rule can apply post-creation logic across many alerts: suppress notifications on a schedule, scope to a resource group, and filter by severity so Sev0 is excluded. Because it operates outside individual rules, you avoid editing each alert while still enforcing consistent behavior during maintenance windows.
Processing rules are evaluated after an alert is fired, so they can add, replace, remove, or suppress action groups based on scope, severity, monitor service, or tags. This makes them the right tool for fleet-wide behaviors like maintenance suppression and routing tweaks.
Why others are incorrect
A. Dynamic thresholds change when a metric fires, not whether its notifications are suppressed on a schedule.
B. Action groups are reusable notification sets, but they don’t provide time-window suppression across rules.
D. Activity log alerts target control-plane events; they don’t solve scheduled suppression for existing alert rules.

---

### Question 44

Fabrikam operates dozens of VNets, gateways, app gateways, and load balancers across two regions. Operations wants a single view of health, alerts, and key metrics across all network resources with no extra configuration, so they can quickly identify hotspots and drill down.
You need an aggregated network health view with drill-downs built on Azure Monitor workbooks, without enabling agents first. Which option should you choose?

**Options:**

- **A.** A. Storage account insights
- **B.** B. VM insights
- **C.** C. Network insights ✅
- **D.** D. Connection monitor

**Correct answer:** C

**Explanation:**

Choice C is correct. Network insights surfaces an at-a-glance health and performance view across Azure network resources (VNets, gateways, LB, App GW, etc.) and lets you drill into metrics and affected resources—delivered as an Insights workbook experience and available without additional configuration. It’s designed to triage issues quickly and then pivot to the specific resource’s blade for deeper investigation.
From there, operators interpret patterns such as gateway utilization, load balancer data path health, and traffic anomalies across environments, accelerating detection of region- or service-level trends that wouldn’t be obvious from individual resource charts.
Why others are incorrect
A. Storage account insights targets Storage performance/capacity (E2E/server latency, throttling) rather than network estate health.
B. VM insights is for guest performance/process visibility on compute, not network estate roll-ups.
D. Connection monitor runs targeted tests; it’s not an aggregated, all-resource health view.

---

### Question 45

Fabrikam is onboarding Azure Files across multiple storage accounts. They want a central policy to protect shares with both operational and vaulted recovery points, and to update retention later without re-protecting.
Problems / issues
Protect dozens of file shares across storage accounts.
Daily operational backups with 30-day retention; weekly vaulted backups kept for 12 weeks.
No agents or custom scripts; manage centrally.
If policy changes, future backups must follow the new schedule and existing points should retain appropriately.
Private Link isn’t mandated; keep things simple.
You need a centrally managed configuration that defines schedule + retention for Azure Files and applies to many shares. Which option should you choose?

**Options:**

- **A.** A. Backup vault policy (Azure Files) ✅
- **B.** B. Recovery Services vault VM policy
- **C.** C. Storage lifecycle management (Blob tiering)
- **D.** D. Azure Automation snapshots (per share)

**Correct answer:** A

**Explanation:**

Choice A is correct. A Backup vault policy (Azure Files) defines when operational and vaulted recovery points are created and how long they’re retained, and the same policy can be applied to many shares across accounts. It’s agentless and administered centrally (Backup Center / vault), so you avoid scripts. When you modify a policy, upcoming jobs use the new schedule, and retention for existing points aligns to the updated settings according to vault rules.
This approach keeps protection consistent across teams, enables at-a-glance compliance, and gives you simple day-2 changes (for example, increasing weekly vaulted retention) without re-configuring each file share.
Why others are incorrect
B. A VM policy targets IaaS VMs, not Azure Files.
C. Lifecycle management handles Blob tiering; it is not a backup/restore mechanism.
D. Runbooks require custom scheduling, tracking, and cleanup with no vault governance.

---

### Question 52

You plan to use Azure Network Watcher to perform the following task:
Identify a security rule that prevents a network packet from reaching an Azure virtual machine (VM).
Which feature should you use for this task?

**Options:**

- **A.** A. Next hop
- **B.** B. IP flow verify ✅
- **C.** C. Packet capture
- **D.** D. Traffic Analytics
- **E.** E. Connection troubleshoot
- **F.** F. Network performance monitor

**Correct answer:** B

**Explanation:**

Choice B is correct. The IP flow verify feature in Azure Network Watcher is specifically designed to test whether traffic from or to a virtual machine is allowed or denied based on the effective network security group (NSG) rules applied to the VM’s network interface. It simulates the sending of a packet and determines:
Whether the packet is allowed or denied, and
Which NSG rule (name, priority, and direction) is responsible for the decision.
This tool is particularly useful for diagnosing connectivity problems and identifying which security rule in an NSG or application security group is preventing or allowing a connection.
Why the others are incorrect
A: Next hop identifies the route that traffic takes (e.g., Internet, virtual network, virtual appliance) but does not analyze NSG rules.
C: Packet capture records network packets for analysis but does not reveal which NSG rule affects them.
D: Traffic Analytics provides aggregated insights and trends using NSG flow logs, not per-packet rule evaluation.
E: Connection troubleshoot checks connectivity between two endpoints, but it doesn’t pinpoint the specific NSG rule blocking traffic.
F: Network performance monitor measures latency and packet loss between network nodes, not NSG filtering decisions.

---

### Question 58

Fabrikam wants a reusable notification and automation set that can be attached to multiple alert rules. Requirements: email to the Operations DL, SMS/voice to the on-call phone, and a webhook to the incident system—defined once and referenced everywhere.
You need to define a reusable notification/automation payload and attach it to alert rules across subscriptions. Which option should you choose?

**Options:**

- **A.** A. Action group ✅
- **B.** B. Log search alert
- **C.** C. Scheduled query rule
- **D.** D. Alert processing rule

**Correct answer:** A

**Explanation:**

Choice A is correct. An action group encapsulates notifications and actions—email, SMS, voice, webhook, Logic App, Function, ITSM, and more—so you define them once and reference the group from any alert rule. This centralizes recipients and integrations, supports testing of receivers, and is globally resilient across regions.
You can create multiple action groups (for example, Sev0 with phone/SMS, Sev2 email-only) and attach the appropriate group per rule. If you later need fleet-wide routing changes without editing rules, you can layer alert processing rules to add or replace action groups dynamically.
Why others are incorrect
B. A log search alert is a rule type, not a reusable notification definition.
C. A scheduled query rule defines log-based conditions, not cross-rule notifications.
D. Processing rules modify/suppress after an alert fires; they don’t replace the reusable definition of recipients/actions.

---

### Question 60

Refer to Northwind Traders (I) Case Study : AZ-104:
https://docs.google.com/document/d/1epkoAw5-c-Dg62nsP1g5j7KMVQZUnQNaeU21ZD-K0Z0/edit?usp=sharing
Blueprint files move to Azure Blob Storage. You must provide point-in-time restore for accidental delete/overwrite using an Azure-native, low-overhead solution that complements lifecycle tiering (Cool/Archive).
Which destination should you configure to protect the blobs?

**Options:**

- **A.** A. Recovery Services vault
- **B.** B. Lifecycle only (Cool/Archive); rely on rehydration for restores
- **C.** C. Backup vault ✅
- **D.** D. Azure Site Recovery

**Correct answer:** C

**Explanation:**

Choice C is correct. Operational backup for Azure Blobs uses a Backup vault to provide point-in-time restore within the storage account—no agents or custom jobs. It integrates cleanly with lifecycle policies so you can optimize cost (Cool/Archive) while still recovering from accidental deletion or overwrite.
Why the others are incorrect
A: Recovery Services vault protects workloads like VMs/Azure Files/SQL in VMs, not Blob containers.
B: Lifecycle tiers optimize cost and retention but don’t offer operational PITR; Archive requires rehydration and doesn’t replace backup.
D: Azure Site Recovery is for VM/workload replication/DR, not Blob backup/restore.

---

## Practice Set 18

Source: https://skillcertpro.com/az-104-exam-questions/18/

### Question 5

Leadership wants cross-subscription backup dashboards with trends, protectable vs protected counts, policy compliance, and job status history retained in Log Analytics. They don’t want to build custom workbooks from scratch.
“To get turnkey dashboards with historical trends backed by Azure Monitor Logs, enable __________ in Backup Center and point it at a Log Analytics workspace.”

**Options:**

- **A.** A. Activity Log
- **B.** B. Service Health
- **C.** C. Advisor
- **D.** D. Backup reports ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Backup reports in Backup Center ship built-in workbooks that read from a Log Analytics workspace, giving you ready-made dashboards across subscriptions and vaults: backup coverage, trends, policy compliance, jobs, and failures. By configuring data export to Azure Monitor Logs, you get retention, KQL analysis, and the flexibility to extend with your own queries while keeping a turnkey baseline.
Why the other options are incorrect
A: Activity Log tracks control-plane events, not detailed backup item/job metrics or long-term trends.
B: Service Health reports Azure platform incidents, not your backup posture.
C: Advisor offers recommendations; it doesn’t generate backup reports with historical charts.

---

### Question 9

You plan to back up Azure VMs and Azure Files running in Australia East. You want a platform service that provides backup policy/retention, soft delete/security settings, and restore in the same region as the protected resources. Management prefers a single, centrally managed construct.
Which option should you choose?

**Options:**

- **A.** A. Storage account
- **B.** B. Backup vault
- **C.** C. Recovery Services vault ✅
- **D.** D. Key Vault

**Correct answer:** C

**Explanation:**

Choice C is correct. A Recovery Services vault is the classic Azure Backup container for protecting Azure VMs and Azure Files. You create the vault in the same region as the resources and configure backup policies (schedule/retention), soft delete and security settings (e.g., multi-user authorization), then enable protection. The vault becomes your central point for jobs, restore points, and monitoring—ideal when you want one place to manage VM and Files backups.
Why the other options are incorrect
A: A storage account stores data; it doesn’t provide backup policies or restore orchestration.
B: A Backup vault targets modern workloads and scenarios, but for Azure VMs and Azure Files the Recovery Services vault is the expected container in AZ-104 contexts.
D: Key Vault secures secrets/certs; it isn’t a backup container.

---

### Question 11

A Windows VM protected by a Recovery Services vault had several folders deleted during a bad deployment. You need the fastest, least disruptive way to recover just those folders without rebuilding the VM or changing its identity/networking. Recovery should come from an existing restore point.
Which option should you choose?

**Options:**

- **A.** A. File Recovery ✅
- **B.** B. Restore VM
- **C.** C. Restore disk
- **D.** D. Azure Site Recovery

**Correct answer:** A

**Explanation:**

Choice A is correct. File Recovery mounts a recovery point as a temporary iSCSI session to your machine so you can browse and copy only the needed files/folders. It avoids VM redeployments, keeps the original VM intact, and is typically the fastest way to surgically recover content from a protected VM’s restore point.
Why the other options are incorrect
B: Restore VM creates a new VM from the restore point (or replaces disks), which is overkill when you only need a few folders.
C: Restore disk produces managed disks you then attach to a VM; still heavier than browsing and copying.
D: Azure Site Recovery is a DR/replication solution, not the VM backup restore workflow for recovering files.

---

### Question 20

Your ARM deployment intermittently fails because dependent resources aren’t fully provisioned before children/extensions run. Some references create implicit dependencies; others don’t. You want a **deterministic deployment order** without redesigning resources.

Which option should you choose?

**Options:**

- **A.** A. conditions
- **B.** B. dependsOn ✅
- **C.** C. tags
- **D.** D. apiVersion

**Correct answer:** B

**Explanation:**

Choice B is correct. **dependsOn** expresses an **explicit dependency** so the ARM engine **waits** for the parent resource to finish before starting the child/extension. While some template expressions (like directly referencing a property value) create **implicit dependencies**, many common patterns (e.g., supplying only a **resource ID** string) **do not**. For resources like **diagnostic settings** and **VM extensions**, adding a clear dependsOn ensures **repeatable ordering**, removes race conditions, and makes intent obvious to future maintainers:

- “dependsOn”: [

- “[resourceId(‘Microsoft.Storage/storageAccounts’, variables(‘stName’))]”

- ]

and

- “dependsOn”: [

- “[resourceId(‘Microsoft.Compute/virtualMachines’, variables(‘vmName’))]”

- ]

This keeps the template **idempotent** and deployments **predictable**.

Why the other options are incorrect

A: condition controls **whether** a resource deploys, not **when**. It doesn’t enforce ordering between resources.

C: tags are metadata; they don’t affect deployment sequencing.

D: Changing apiVersion won’t solve orchestration; it risks incompatibilities without addressing the **dependency** problem.

---

### Question 25

You’re choosing the **right restore workflow** for a protected VM based on what you need to recover and how quickly you need it online.

**Restore workflows (properties)**

****

You must get a **replacement VM online quickly** from a restore point to isolate an incident, with the **fewest manual steps**. Which option should you choose?

**Options:**

- **A.** A. File Recovery
- **B.** B. Restore VM ✅
- **C.** C. Restore disk
- **D.** D. Manual copy from snapshots

**Correct answer:** B

**Explanation:**

Choice B is correct. **Restore VM** provisions a **new VM automatically** from the recovery point, minimizing manual steps and getting you **up fast**. It’s ideal when you want a clean replacement VM for investigation or rollback without building from disks yourself.

Why the other options are incorrect

A: **File Recovery** is for **browsing/copying files**, not standing up a new VM.

C: **Restore disk** requires **additional steps** (create a VM or attach disks) before the workload runs.

D: **Snapshots/manual copy** aren’t the supported path for vault-based **VM** restore and add operational risk.

---

### Question 27

The ops team needs consistent **time-bucketed** insights across different log tables. Your goal is to standardize how they aggregate by time so dashboards don’t drift and everyone uses the same approach for hourly/daily rollups.

Requirements

Which option should you choose?

**Options:**

- **A.** A. bin() ✅
- **B.** B. join
- **C.** C. parse_json
- **D.** D. mv-expand

**Correct answer:** A

**Explanation:**

Choice A is correct. **bin()** is the **standard time bucketing function** in KQL. Pair it with summarize to ensure consistent, comparable rollups:

- Sign-in failures: … | summarize count() by bin(TimeGenerated, 1h), IPAddress

- Agent connections: … | summarize count() by bin(TimeGenerated, 5m), Computer

- Daily actives: … | summarize dcount(UserId) by bin(TimeGenerated, 1d), AppName

Using bin() keeps your charts aligned, prevents off-by-minutes grouping, and makes **dashboards stable** when queries refresh.

Why the other options are incorrect

B: join correlates tables; it **doesn’t** create time buckets.

C: parse_json extracts fields from JSON; unrelated to bucketing.

D: mv-expand explodes arrays; it won’t group events into time windows.

---

### Question 30

You manage **multiple vaults** across two subscriptions and want **centralized alerting** that covers both **backup failures** and **restore job failures**, with notifications to **email and Teams**. Alerts must be **policy-driven**, reusable, and visible in a single place.

**Alerting needs**

****

Which option should you choose?

**Options:**

- **A.** A. Classic backup alerts per vault
- **B.** B. Email notifications from each vault’s Jobs blade
- **C.** C. Azure Monitor alerts with Action Groups (Backup signals) ✅
- **D.** D. Activity Log only

**Correct answer:** C

**Explanation:**

Choice C is correct. **Azure Monitor alerts** provide **central, policy-based alert rules** across **subscriptions and vaults**. You select **Backup signals** (e.g., job failed/stopped), scope them to all relevant vaults, and wire **Action Groups** (email, Teams via webhook/Logic App). This yields **uniform alerting**, **one place to manage**, and **auditable** rule definitions.

Why the other options are incorrect

A: **Classic alerts** are **vault-local** and don’t give you subscription-level consistency or modern routing.

B: Ad-hoc **email from blades** is manual and **not policy-driven**; no Teams integration or reuse.

D: The **Activity Log** records events but doesn’t provide **rule-based notifications** or routing to channels.

---

### Question 33

Refer to Northwind Traders (I) Case Study : AZ-104:
https://docs.google.com/document/d/1epkoAw5-c-Dg62nsP1g5j7KMVQZUnQNaeU21ZD-K0Z0/edit?usp=sharing
Admin1 is designated as the Azure subscription Service Administrator and must receive email alerts for Azure service outages that impact Northwind’s region/services.
What should you configure to meet this requirement?

**Options:**

- **A.** A. Create a Service Health alert in Azure Monitor scoped to the subscription/services/regions and add an email Action Group for Admin1 ✅
- **B.** B. Rely on the Service Administrator assignment; service health emails are automatic, action groups will handle the monitoring
- **C.** C. Create metric alerts on each resource (App Service, SQL, Storage) for availability
- **D.** D. Enable Advisor alerts for recommendations

**Correct answer:** A

**Explanation:**

Choice A is correct. Service Health alerts (Azure Monitor) track service issues, planned maintenance, and health advisories at the platform level. Scoping the alert to the subscription and impacted regions/services and wiring an Action Group with Admin1’s email ensures timely outage notifications independent of individual resource metrics.
Why the others are incorrect
B: Being Service Administrator does not automatically subscribe a user to Service Health emails; you must configure alerts/action groups.
C: Metric alerts watch resource telemetry, not platform incidents; they won’t notify for Azure-wide outages.
D: Advisor alerts report optimization suggestions, not service incidents.

---

### Question 35

Your company’s Azure subscription contains an Azure virtual machine.
You need to back up the virtual machine every 12 hours.
What should you create first?

**Options:**

- **A.** A. a backup policy in a backup vault
- **B.** B. a standard backup policy in a recovery services vault
- **C.** C. an enhanced backup policy in a recovery services vault ✅

**Correct answer:** C

**Explanation:**

For Azure virtual machines, a Recovery Services vault is the vault type used to hold Azure IaaS VM backup data and the backup policies associated with protected VMs. Microsoft’s Recovery Services vault overview explicitly lists Azure IaaS VMs as supported, and the VM backup quickstart shows Azure VM backup being configured against a selected vault with a policy subtype.
The deciding factor is the 12-hour schedule. Microsoft says the Standard VM backup policy allows backup once a day, while the Enhanced policy allows multiple daily backups and supports hourly scheduling at 4, 6, 8, 12, and 24 hours. Because the requirement is every 12 hours, the first thing you need is an enhanced backup policy in a Recovery Services vault.
Why the other options are incorrect:
• A. a backup policy in a backup vault — For Azure virtual machine backup in this context, Microsoft documents the use of a Recovery Services vault. The Azure VM backup flow in Microsoft Learn is built around selecting a Recovery Services vault and then assigning the VM backup policy there.
• B. a standard backup policy in a recovery services vault — The vault type is right, but the policy subtype is not. Microsoft states that the Standard Backup policy allows an Azure VM backup once a day, which does not meet an every-12-hours requirement.

---

### Question 39

You have an Azure subscription that contains an Azure SQL Database named DB1.
You plan to use Azure Monitor to track the performance of DB1 and must be able to run queries to analyze log data.
Which destination should you configure in the Diagnostic settings of DB1?

**Options:**

- **A.** A. Archive to a storage account
- **B.** B. Send to a Log Analytics workspace ✅
- **C.** C. Stream to an Azure Event Hub
- **D.** D. Export to an Azure Data Explorer cluster
- **E.** E. Send to Azure Monitor Metrics
- **F.** F. Stream to a partner monitoring solution

**Correct answer:** B

**Explanation:**

Choice B is correct.
When you configure diagnostic settings for Azure SQL Database, choosing “Send to a Log Analytics workspace” allows Azure Monitor to store telemetry and logs in Log Analytics, where you can query the data using Kusto Query Language (KQL). This setup supports interactive querying, alerting, and visualization through Azure Monitor Workbooks, making it ideal for analyzing performance data.
Additionally, Log Analytics enables cross-resource analysis, integration with Microsoft Sentinel, and retention-based storage for operational insights—perfect for continuous monitoring of DB1’s behavior.
Why the others are incorrect
A: Archive to a storage account stores raw logs for long-term retention or offline analysis but does not support querying or visualization in Azure Monitor directly.
C: Stream to an Event Hub is designed for real-time streaming of logs to external SIEM or analytics systems (e.g., Splunk), not for running queries in Azure Monitor.
D: Export to Azure Data Explorer can be used for advanced analytics but requires manual setup and ingestion rules; Log Analytics is the native Azure Monitor destination for diagnostics.
E: Send to Azure Monitor Metrics collects numeric time-series data only (e.g., CPU %, DTU usage) but does not store or allow querying of logs.
F: Stream to a partner monitoring solution is for third-party integrations and not required when the goal is to analyze data within Azure Monitor itself.

---

### Question 40

You have an Azure subscription that contains an Azure disk named Disk1.
You plan to use Azure Backup to backup Disk1.
What should you deploy first?

**Options:**

- **A.** A. a Backup vault ✅
- **B.** B. a Storage account
- **C.** C. a Recovery Services vault
- **D.** D. an Azure Backup Server

**Correct answer:** A

**Explanation:**

Azure Disk Backup for managed disks uses a Backup vault, not a Recovery Services vault. Microsoft’s Azure Disk Backup documentation says that before you back up an Azure managed disk, you should create a Backup vault to store and manage the disk backup configuration and related backup objects.
This is one of the newer Azure Backup workload models. Microsoft’s Backup vault overview lists newer workloads supported by Backup vaults, and the Azure Disk Backup articles specifically use Backup vaults for managed disk protection and management.
Why the other options are incorrect:
• B. a Storage account — A storage account is not the first resource you deploy to enable Azure Disk Backup. Azure Disk Backup uses managed disk snapshots and Backup vault management, not a user-created storage account as the primary prerequisite for protection.
• C. a Recovery Services vault — Recovery Services vaults are used for workloads such as Azure VM backup, but Azure managed disk backup uses the newer Backup vault model instead. For this specific workload, Microsoft’s managed disk backup documentation points to Backup vault creation as the starting step.
• D. an Azure Backup Server — Azure Backup Server is for different backup scenarios and is not the required first deployment for native Azure managed disk backup. Azure Disk Backup is a native Azure service that protects managed disks through Azure Backup and Backup vaults.

---

### Question 44

A team accidentally deleted several containers and blobs. You need a simple, account-level safeguard so admins can undo deletions for 30 days with no app changes. It should cover both container deletes and blob deletes.
“To recover deleted data for 30 days, enable __________ and set retention to 30 days.”

**Options:**

- **A.** A. Soft delete (blobs & containers) ✅
- **B.** B. Blob versioning
- **C.** C. Point-in-time restore
- **D.** D. Change feed

**Correct answer:** A

**Explanation:**

Choice A is correct. Soft delete protects deleted blobs, and container soft delete lets you undelete containers. With a 30-day retention, admins can quickly restore accidentally removed containers or blobs without modifying applications.
Why the other options are incorrect
B: Versioning preserves prior blob versions but doesn’t protect container deletion.
C: Point-in-time restore helps roll back blobs in existing containers; it doesn’t replace container soft delete to recover deleted containers.
D: Change feed is an audit log; it doesn’t provide recovery by itself.

---

### Question 45

Problem (Tailwind Traders)
• Blob soft delete is already enabled (7 days).
• Teams sometimes delete whole containers by mistake.
• You must allow container recovery for 14 days with no app changes.
Which option should you choose?

**Options:**

- **A.** A. Increase blob soft delete to 14 days
- **B.** B. Enable container soft delete (14 days) ✅
- **C.** C. Turn on blob versioning
- **D.** D. Enable point-in-time restore

**Correct answer:** B

**Explanation:**

Choice B is correct. Container soft delete adds an undelete capability for containers with a retention window (e.g., 14 days). It works alongside blob soft delete and requires no application changes.
Why the other options are incorrect
A: Extending blob soft delete doesn’t protect container deletion.
C: Versioning helps with blob changes, not container recovery.
D: Point-in-time restore can roll back blobs but won’t bring back a deleted container.

---

### Question 46

Refer to Northwind Traders (I) Case Study : AZ-104:
https://docs.google.com/document/d/1epkoAw5-c-Dg62nsP1g5j7KMVQZUnQNaeU21ZD-K0Z0/edit?usp=sharing
Northwind mandates unmanaged standard storage for VM disks due to tooling. All App1 VMs must be protected by backups with straightforward restore (entire VM or disks).
What should you configure?

**Options:**

- **A.** A. Azure VM backup to a Recovery Services vault ✅
- **B.** B. Scripted snapshots of OS/data VHDs to another storage account
- **C.** C. Azure Disk Backup in a Backup vault (managed disks only)
- **D.** D. Export VHDs nightly to on-prem via AzCopy

**Correct answer:** A

**Explanation:**

Choice A is correct. Azure VM backup to a Recovery Services vault supports IaaS VMs with unmanaged disks, giving scheduled, application-consistent backups, policy-based retention, and simple restore (full VM or disks). It’s Azure-native, low-overhead, and aligns with the unmanaged-disk constraint.
Why the others are incorrect
B: DIY snapshots lack policy, catalog, and restore orchestration; operationally fragile.
C: Azure Disk Backup targets managed disks and doesn’t meet the unmanaged-disk requirement.
D: Exporting VHDs off-platform increases bandwidth/cost/complexity and lacks point-in-time restore semantics.

---

### Question 51

You have a Recovery Services vault named Vault1 that has soft delete enabled.
Vault1 stores backups for the following Azure resources:
an Azure virtual machine named VM1
an Azure file share named share1
a SQL Server on Azure virtual machine named SQL1
Which backups are protected by soft delete?

**Options:**

- **A.** A. share1 only
- **B.** B. VM1 and SQL1 only ✅
- **C.** C. VM1 only
- **D.** D. VM1, share1, and SQL1

**Correct answer:** B

**Explanation:**

Azure Backup soft delete is supported for Azure VM backups, and Microsoft also documents soft delete support for SQL Server in Azure VM backups. The SQL soft delete article explicitly says this support exists “in addition to the already supported Azure Virtual machine soft delete scenario.”
Azure Files is the exception here. Microsoft’s current Azure Backup guidance says soft delete is not supported for operational backups of Azure Files shares. For Azure Files, Azure Backup instead enables storage-account-level file share soft delete to protect deleted file shares and their snapshots. So share1 is protected through Azure Files soft delete on the storage account, not by Recovery Services vault soft delete in the same way as VM and SQL backup items.
Why the other options are incorrect:
• A. share1 only — This is incorrect because Azure VM backups and SQL Server in Azure VM backups are both covered by Azure Backup soft delete. Microsoft documents both workloads as supported soft delete scenarios.
• C. VM1 only — This is incomplete. VM1 is protected by soft delete, but Microsoft also documents soft delete support for SQL Server in Azure VM backups, so SQL1 must be included as well.
• D. VM1, share1, and SQL1 — This is close, but share1 makes it wrong. Microsoft says soft delete is not supported for operational backups of Azure Files shares; Azure Files protection against accidental deletion is handled through file-share soft delete at the storage account level instead.

---

### Question 57

Backends behind a Standard Load Balancer show as unhealthy even though the service is up. NSGs are applied to the subnet/NICs.
“To allow probe traffic to reach backends, add an NSG rule that permits inbound from the __________ service tag on the probe port.”

**Options:**

- **A.** A. Internet
- **B.** B. VirtualNetwork
- **C.** C. AzureTrafficManager
- **D.** D. AzureLoadBalancer ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Standard Load Balancer probes originate from the platform and are matched using the AzureLoadBalancer service tag. If NSGs block that source on the probe port, the LB will always mark instances unhealthy even when the app is fine. Adding an allow rule from AzureLoadBalancer to the probe port restores probe visibility, after which data plane flows can succeed.
Why the other options are incorrect
A: Internet is too broad and doesn’t consistently represent LB probe source addresses.
B: VirtualNetwork doesn’t include the platform probe source; still blocked.
C: AzureTrafficManager is unrelated to Load Balancer health probes.

---

### Question 4

You operate two Log Analytics workspaces (one per subscription). You need a single query to analyze HTTP 5xx rate for your API across both, grouped by cluster and service, over the last 30 minutes, with a 1-minute bin and a top-N view by failure rate. You prefer native KQL (no exports).
Requirements
• Cross-workspace query
• Group by cluster/service, bin 1m
• Calculate rate (5xx per minute)
• Show top offending services
Which approach fits best?

**Options:**

- **A.** A. Build a workbook pie chart per workspace
- **B.** B. Create a metric alert on 5xx count
- **C.** C. Use a cross-workspace KQL query (workspace(), union) with summarize by bin(1m) and compute rate ✅
- **D.** D. Export to Event Hub and process externally

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure Monitor Logs supports cross-workspace KQL using workspace(‘name‘) or workspaceResourceId() and union. Query AppRequests/AppServiceHTTPLogs (or your table), filter 5xx, then summarize count() by cluster, service, bin(1m) to compute a per-minute rate; finish with top/order by to surface the worst offenders. This stays in-platform, works over multiple workspaces, and is parameterizable in workbooks/alerts later.
Why the other options are incorrect
A: Separate charts don’t give a single, correlated view or rate math.
B: Metric alerts won’t express custom KQL rate logic across multiple workspaces.
D: Export adds operational friction and latency versus a native query.

---

### Question 5

An ingestion service occasionally overwrites existing blobs and sometimes deletes the current blob before re-uploading. You need automatic protection against these mistakes, the ability to restore prior content without backups, and a way to age-out old versions after one year to control costs — all policy-driven, no app changes.
Which option should you choose?

**Options:**

- **A.** A. Enable soft delete only
- **B.** B. Enable snapshots only
- **C.** C. Enable point-in-time restore only
- **D.** D. Enable blob versioning, then use lifecycle rules to delete noncurrent versions older than 365 days ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Blob versioning automatically creates a new version whenever a blob is overwritten or deleted, preserving the prior content as a noncurrent version. That gives you a built-in time-ordered history with no application changes: to recover, you simply promote a previous version (or copy it over the current). Pairing versioning with lifecycle rules lets you expire noncurrent versions beyond 365 days, which keeps storage growth in check while retaining enough history for audits and recovery. This combination directly addresses overwrite protection, delete protection, and cost control in a single, service-managed design.
Why the other options are incorrect
A: Soft delete can preserve deleted blobs for a retention window, but it doesn’t capture overwrites and doesn’t maintain a versioned history for fine-grained rollback.
B: Snapshots require explicit creation and management; they won’t automatically capture every overwrite/delete event, and large-scale governance is harder than policy-driven version aging.
C: Point-in-time restore rolls a container or prefix back in bulk; it’s powerful for broad recovery but not a substitute for per-blob version history and targeted restores. It also doesn’t by itself provide version aging controls.

---

### Question 12

You have an Azure subscription named Subscription1.

In Subscription1, you create an alert rule named Alert1.

The Alert1 action group is configured as shown in the following exhibit.

Alert1 alert criteria is triggered every minute.

**Question:**

Based on this configuration, complete the statement:

“The number of email messages that Alert1 will send in an hour _____.”

**Options:**

- **A.** A. 0
- **B.** B. 4
- **C.** C. 6
- **D.** D. 12
- **E.** E. 60 ✅

**Correct answer:** E

**Explanation:**

Choice E is correct.

Because the alert criteria triggers **once every minute**, the rule executes **60 times in one hour**. Each trigger invokes the action group and sends an email to the configured recipients, resulting in **60 emails per hour**.

Why the others are incorrect

A–D: These values underestimate the total number of alerts. Azure Monitor runs on the schedule specified in the alert rule configuration, so a 1-minute frequency produces one notification per minute unless throttling or suppression rules are explicitly configured (which this scenario does not mention).

---

### Question 13

You have an Azure subscription that contains the vaults shown in the following table:

You deploy the virtual machines shown in the following table:

You have the backup policies shown in the following table:

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM1 can be backed up by using Policy1.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Choice A is correct.

Azure Backup supports **Windows VMs with Azure Disk Encryption** when backed up via a **Recovery Services vault** using a **Standard backup policy**. There are no restrictions for encrypted disks in this configuration, as long as ADE uses supported key and secret management in Azure Key Vault and the VM resides in the same region as the vault.

Why the other answer is incorrect

B: “No” would only be valid if the VM used an unsupported configuration—such as unmanaged disks, unsupported OS, or a non-Recovery Services vault (e.g., a Backup vault with Enhanced policy and unsupported OS). That’s not the case here.

---

### Question 15

You have an Azure subscription that contains the vaults shown in the following table.

You create a storage account that contains the resources shown in the following table.

You need to determine to which vault you can **back up cont1**.

**Options:**

- **A.** A. Backup1 only ✅
- **B.** B. Recovery1 only
- **C.** C. Backup1 or Recovery1
- **D.** D. Cannot be backed up to Backup1 or Recovery1

**Correct answer:** A

**Explanation:**

Choice A is correct.

A **Backup vault** supports **Azure Blobs backup**, allowing operational backups directly from Blob storage accounts. It provides snapshot-based protection, enabling point-in-time recovery without requiring application or file-level agents. Because **Backup1** is a Backup vault, it can protect **cont1** (the blob container).

A **Recovery Services vault**, such as **Recovery1**, does **not** support blob backups. It’s used for **workload-level protection** like **Azure virtual machines, Azure Files, SQL in Azure VMs, and on-premises workloads**. Blob backup isn’t available in Recovery Services vaults since they use a different management model and data plane.

Thus, **only Backup1** can be used to back up **cont1**.

Why the others are incorrect

B: Recovery1 can’t back up Blob containers—it only handles VM and workload-level backups.

C: Blob backup is available through Backup vaults only, not Recovery Services vaults.

D: Incorrect because Backup1 (a Backup vault) fully supports Blob backup.

---

### Question 16

A team has accidentally deleted both containers and blobs several times during releases. You want a single, account-level safety net that lets admins undo deletes for 30 days with no application changes. It must protect container deletes and blob deletes alike so rollbacks are fast and self-service.
“To enable 30-day recovery for both container deletes and blob deletes, turn on __________ and set retention to 30 days.”

**Options:**

- **A.** A. Soft delete (blobs and containers) ✅
- **B.** B. Blob versioning
- **C.** C. Point-in-time restore
- **D.** D. Change feed

**Correct answer:** A

**Explanation:**

Choice A is correct. Soft delete for blobs preserves deleted blob objects for a retention window, and container soft delete does the same at the container level. Together, they give a unified “undelete” path across the account: admins can restore a deleted container (bringing back its contents as they existed at deletion) and can also restore individual blobs that were deleted within the retention period. Because this is handled by the storage service, applications don’t need code changes and your rollback becomes a simple management operation rather than a data restore pipeline.
Why the other options are incorrect
B: Versioning protects against overwrites and lets you roll back to earlier versions, but it does not restore a deleted container and doesn’t give a one-click undelete for a blob that was hard-deleted without versions retained.
C: Point-in-time restore can revert blob states inside an existing container to an earlier time, but it doesn’t recover a deleted container; you still need container soft delete for that.
D: Change feed provides an immutable event log of changes; it’s great for auditing and downstream processing, but it doesn’t provide recovery on its own.

---

### Question 24

You need **central, policy-like** cost controls for the same three subscriptions. Finance wants budgets with **email + Teams** notifications, and leadership wants **Advisor savings recommendations** reviewed monthly.

**Cost controls**

****

Which option should you choose to meet these needs **without custom code**?

**Options:**

- **A.** A. Cost exports to Storage + Logic Apps
- **B.** B. Budgets with Action Groups (Azure Monitor) ✅
- **C.** C. Azure Advisor only
- **D.** D. Activity Log alerts

**Correct answer:** B

**Explanation:**

Choice B is correct. **Azure Budgets** generate **threshold signals** that you wire to **Action Groups** (email, Teams via webhook/Logic App, ITSM). Budgets can be scoped **per subscription** (Sub-A/C) and **at a management group** to **cover Sub-B and future prod subscriptions** with the same rule. This yields **centralized, reusable, auditable** alerts without code. You can also schedule **Advisor** review separately; budgets handle hard **thresholding and notifications**, while Advisor suggests **savings** (RI/SP, right-size) that you review monthly.

Why the other options are incorrect

A: Exports + Logic Apps are custom and brittle; budgets already emit **first-class signals** with Action Groups.

C: Advisor provides **recommendations**, not budget thresholds or multi-channel alerts.

D: Activity Log alerts don’t express **spend thresholds** and won’t cover cost overruns.

---

### Question 27

Three SMB shares have different protection goals. You need to choose the **most direct feature** for each without putting broad secrets on clients.

**Shares &amp; goals**

****

For **projects**, which option should you choose?

**Options:**

- **A.** A. Enable share snapshots
- **B.** B. Enable share soft delete (e.g., 14 days) ✅
- **C.** C. Enable point-in-time restore
- **D.** D. Enable immutability policy

**Correct answer:** B

**Explanation:**

Choice B is correct. **Share soft delete** protects the **entire file share** from accidental deletion by retaining a recoverable copy for a chosen **retention period** (e.g., 14 days). If someone deletes the **projects** share, you can **undelete the share** instantly without reseeding data or re-creating permissions. It’s the only Azure Files feature that specifically addresses **whole-share deletion** with a built-in grace period.

Why the other options are incorrect

A: **Share snapshots** capture file-system state for **in-place previous versions** and point-in-time file restore, but they **don’t bring back a deleted share** once it’s gone.

C: **Point-in-time restore** uses snapshots to restore **files/directories** within an **existing** share to a prior timestamp; it does not recover a **deleted** share.

D: **Immutability** locks content for retention/compliance (WORM); it does not provide an **undelete** path and may **prevent** expected modifications.

---

### Question 28

You’re standardizing monitoring across three resource types. Pick the **enabling step** that unlocks the **stated Insight** for each without changing app code.

**Targets &amp; goals**

****

For **VM api-01** to show **dependency maps** and deep guest performance in VM Insights, what must you do?

**Options:**

- **A.** A. Enable VM insights with Azure Monitor Agent + Dependency agent, targeting a Log Analytics workspace ✅
- **B.** B. Turn on boot diagnostics to a Storage account
- **C.** C. Create metric alerts for CPU and memory only
- **D.** D. Export Activity Logs to a workspace

**Correct answer:** A

**Explanation:**

Choice A is correct. **VM insights** relies on the **Azure Monitor Agent (AMA)** to collect guest performance counters (CPU, memory, disk, networking) and on the **Dependency agent** to build the **service map** (process inventory and TCP dependency graph). Enabling VM insights wires the VM to a **Log Analytics workspace** via a **Data Collection Rule (DCR)** so the platform can continuously stream the right counters and connection data without app changes. For Azure VMs the agents are pushed as VM extensions; for Arc/on-prem servers you enable the same agents on the machine. Once enabled, the **Insights blade** lights up with performance charts, **map of inter-VM connections**, listening ports, and process-level views that help you spot bottlenecks and lateral dependency failures. The AMA path is the **current** and supported pipeline (replacing the legacy Log Analytics agent), and the dependency map specifically requires the Dependency agent—without it, you won’t see the topology even if perf data flows.

Why the other options are incorrect

B: **Boot diagnostics** only captures **console/boot screenshots and serial logs**; it has no guest perf or dependency data and doesn’t populate VM insights.

C: **Metric alerts** on CPU/memory use platform metrics but don’t deploy collectors or enable the **Insights** experience (process inventory, dependency map, detailed guest counters).

D: **Activity Logs** are control-plane events (create/update/delete); they don’t include **guest** performance or network dependency telemetry.

---

### Question 29

You run three web apps with different tiers and data footprints. You need **scheduled backups with retention**, the ability to **restore app content + optional DB**, and **no code changes**. Pick the right pattern for each, knowing backups write to a Storage account container.

**Apps &amp; constraints**

****

For **cms-prod**, which option should you choose to meet the requirement?

**Options:**

- **A.** A. Upgrade to Standard and configure App Service Backup to a Storage container with a schedule ✅
- **B.** B. Export deployment template weekly
- **C.** C. Enable Local Git and keep history
- **D.** D. Turn on diagnostic logs to Blob

**Correct answer:** A

**Explanation:**

**Choice A is correct.** **App Service Backup** is a platform feature that **captures site content and optional databases** to a **Storage account** on a **schedule with retention**—and it requires **Standard, Premium, or Isolated** tiers. Because **cms-prod** runs on **Basic**, backups aren’t available; you must **upgrade to Standard (or higher)**, then configure the backup profile (Storage container SAS, frequency, retention, and DB connections). This yields a **click-to-restore** path without changing application code, and it aligns with the need for **scheduled backups** and **policy-level retention**.

Why the other options are incorrect

B: **Exporting templates** saves infrastructure shape, **not** site data/content or DB payloads, and it isn’t scheduled retention.

C: **Local Git** is a deployment mechanism; it doesn’t back up **runtime content, uploads, or databases**.

D: **Diagnostic logs** capture telemetry, not **restorable site content**; they complement backup but don’t replace it.

---

### Question 32

You manage several VMs in West US. You plan to use Azure Network Watcher’s Traffic Analytics to monitor flows from NSGs attached to these VMs.
Which two resources should you create?

**Options:**

- **A.** A. a storage account ✅
- **B.** B. a Microsoft Sentinel workspace
- **C.** C. a Log Analytics workspace ✅
- **D.** D. a Data Collection Rule (DCR) in Azure Monitor
- **E.** E. an Azure Monitor workbook

**Correct answer:** A, C

**Explanation:**

Choice A is correct. Traffic Analytics relies on NSG flow logs, which are written to a storage account. Without a storage account configured on the NSG flow logs, Traffic Analytics has no data source.
Choice C is correct. Traffic Analytics processes the NSG flow logs and stores insights in a Log Analytics workspace, enabling KQL queries and dashboards.
Why the others are incorrect
B: Microsoft Sentinel is optional for SIEM use cases and not required to enable Traffic Analytics.
D: DCRs apply to Azure Monitor agent data; NSG flow logs/Traffic Analytics don’t require a DCR.
E: Workbooks are for visualization; they are not required to enable Traffic Analytics.

---

### Question 36

You manage an Azure subscription containing a Recovery Services vault named Vault1. To strengthen protection against accidental or malicious actions (for example, disabling soft delete or deleting backup items), you need to enable Multi-User Authorization (MAU) for Vault1.
Which resource should you create first?

**Options:**

- **A.** A. an administrative unit
- **B.** B. a managed identity
- **C.** C. a resource guard ✅
- **D.** D. a custom Azure role

**Correct answer:** C

**Explanation:**

Choice C is correct.
Before you can enable Multi-User Authorization (MAU) on a Recovery Services vault, you must first create a Resource Guard. The Resource Guard is a separate Azure resource that provides an additional layer of protection for privileged operations such as disabling soft delete, modifying backup policies, or stopping protection. Once a Resource Guard is created, it is linked to the vault and configured with an authorization list—typically a subset of users or groups who can approve critical actions. This ensures that high-impact operations require explicit consent from multiple parties, thereby implementing the principle of separation of duties and reducing insider threat risks.
Why the others are incorrect (expanded)
A: Administrative unit — Used in Microsoft Entra ID to delegate administrative rights over user or group subsets; it has no relationship to Recovery Services vault operations or MAU configuration.
B: Managed identity — Provides secure identity for apps or services to authenticate to Azure resources without credentials. It does not participate in MAU or resource protection workflows.
D: Custom Azure role — While roles and RBAC control access to Azure resources, MAU relies on a Resource Guard, not on role definitions, to enforce additional authorization. You may still use roles to control who can approve MAU operations, but that comes after the Resource Guard is deployed.

---

### Question 39

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
Design packages move to Azure Blob. You must (a) provide point-in-time restore for accidental delete/overwrite and (b) grant partners temporary, least-privilege upload/download without creating partner accounts.
Which TWO configurations best meet the requirements with minimal overhead?

**Options:**

- **A.** A. Configure blob backup in a Backup vault ✅
- **B.** B. Use a Recovery Services vault for blob backup
- **C.** C. Issue container-level SAS governed by a stored access policy ✅
- **D.** D. Enable versioning + soft delete only

**Correct answer:** A, C

**Explanation:**

Choice C is correct. A container-level SAS with a stored access policy gives time-bound, scoped permissions (read/write/list) and supports clean revocation by removing or rotating the policy—ideal for partner bursts without creating identities.
Choice A is correct. Operational backup for Azure Blobs is delivered via a Backup vault, enabling point-in-time restore within the account without custom pipelines. It complements lifecycle tiering and versioning for robust recovery.
Why the others are incorrect
B: A Recovery Services vault doesn’t protect Blobs; it’s for VMs, Azure Files, SQL in VMs, etc.
D: Versioning/soft delete help, but they don’t replace PITR coverage and governance you get from Azure Backup.

---

### Question 40

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
AppX VMs must be protected with Azure-native backups. A legacy tool requires unmanaged standard storage for all VM disks. You also need file-level restores when needed.
What should you configure?

**Options:**

- **A.** A. Azure Disk Backup (Backup vault)
- **B.** B. Azure VM Backup to a Recovery Services vault ✅
- **C.** C. Azure Site Recovery to a paired region
- **D.** D. Nightly AzCopy export of VHDs to on-prem

**Correct answer:** B

**Explanation:**

Choice B is correct. Azure VM Backup (to a Recovery Services vault) supports unmanaged disks, provides application-consistent snapshots (VSS), policy-based retention, file-level recovery, and full-VM/disk restores—all with minimal administration. This directly satisfies the unmanaged-disk constraint and restore requirements.
Why the others are incorrect
A: Disk Backup targets managed disks; it doesn’t support unmanaged disks.
C: ASR is replication/DR (RPO/RTO), not a backup/restore catalog with file-level recovery.
D: DIY exports are operationally brittle, costly to move/retain, and lack policy/reporting and easy restores.

---

### Question 42

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
You must (1) deny public network access on all Storage accounts and (2) ensure required tags (Owner, CostCenter, Environment) are present on every resource with minimal admin effort. Dev RG is excluded.
Which TWO policy assignments best meet the requirements?

**Options:**

- **A.** A. Assign “Storage accounts should disable public network access” with Deny at subscription; exclude Dev RG ✅
- **B.** B. Assign “Require a tag and its value” for each required tag with Deny at subscription; exclude Dev RG ✅
- **C.** C. Assign “Inherit a tag from the resource group” with Modify for all tags; no remediation task
- **D.** D. Use RBAC to block creation of storage accounts without tags
- **E.** E. Create activity log alerts for storage public access

**Correct answer:** A, B

**Explanation:**

A enforces the platform control: the built-in policy denies creation/update of Storage accounts with Public network access enabled, satisfying the “disable public access” guardrail while honoring the RG exclusion.
B guarantees tags exist by denying non-compliant deployments (fast feedback, low ops). Where you prefer auto-fix, you can pair Modify with a remediation task—but the question prioritizes minimal admin effort and clear enforcement, which Deny provides out of the box.
Why the others are incorrect
C: Modify can auto-append tags, but without a remediation task existing resources won’t be updated; also “inherit RG tags” may not match required tag values policy-wide.
D: RBAC doesn’t validate resource properties like tags or public access; Policy is the right control plane.
E: Alerts don’t prevent misconfiguration; they only notify after the fact.

---

### Question 44

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
Security requires multi-user authorization for destructive actions such as Key Vault purge and disabling backup protections, while keeping workloads functional day-to-day.
What should you create and link?

**Options:**

- **A.** A. Resource Guard and link it to the vaults’ critical operations ✅
- **B.** B. Managed identity on the vault
- **C.** C. Custom RBAC roles for purge
- **D.** D. Administrative unit in Entra ID

**Correct answer:** A

**Explanation:**

A is correct. Resource Guard enforces Multi-User Authorization (MAU) by requiring an independent approver before critical operations (e.g., Key Vault purge, disable soft delete/backup) can proceed. You create a Resource Guard, configure protected operations, and link it to the Key Vault and Backup/Recovery Services vault(s). Day-to-day reads/writes continue normally; only sensitive actions require approval—achieving separation of duties without breaking workloads.
Why the others are incorrect
B: Managed identity is for workload authentication, not approval workflows for destructive ops.
C: Custom roles can restrict permissions but don’t implement a two-person rule across services.
D: Administrative units scope directory admin, not cross-service MAU for vault operations.

---

### Question 49

Multiple App Service apps, plans, and Application Insights resources live in apps-prod-rg. The DevOps team needs to deploy/manage only those resources, and any new resources in that RG should be covered automatically. They must not gain rights in other RGs or subscriptions.
Requirements
• Scope rights to apps-prod-rg only
• Inherit to existing and future resources in that RG
• Avoid subscription-wide impact
Which option should you choose?

**Options:**

- **A.** A. Assign role at the management group
- **B.** B. Assign role at the subscription
- **C.** C. Assign role at the resource group ✅
- **D.** D. Assign role at each individual resource

**Correct answer:** C

**Explanation:**

Choice C is correct. Assigning at the resource group gives automatic inheritance to all current and future resources in that RG while excluding other RGs/subscriptions. This is the cleanest way to keep DevOps permissions scoped and future-proof: one assignment, inherited downward, no bleed-over to adjacent workloads.
Why the other options are incorrect
A: Management group scopes cascade to all subscriptions/RGs under it—far too broad.
B: Subscription scope grants access to every RG in that subscription.
D: Per-resource assignments meet least privilege but cause operational sprawl and miss future resources unless constantly maintained.

---

### Question 59

You need continuous, end-to-end tests from a VM in SpokeA to a Storage account Private Endpoint in SpokeB (TCP 443). Results must track packet loss/latency/reachability and alert on failures. One-off checks aren’t enough; you want ongoing monitoring that understands private DNS resolution.
Requirements
• Ongoing tests (not one-time)
• Private FQDN resolves to private IP
• Metrics for reachability/latency; alertable
Which feature should you use?

**Options:**

- **A.** A. IP Flow Verify
- **B.** B. Connection Monitor ✅
- **C.** C. Next Hop
- **D.** D. NSG flow logs only

**Correct answer:** B

**Explanation:**

Choice B is correct. Connection Monitor runs continuous, scheduled tests from defined sources (e.g., a VM in SpokeA with the agent) to destinations (FQDN or IP—your Storage Private Endpoint on 443). It measures reachability, round-trip latency, and packet loss, and it resolves FQDNs using the source VM’s DNS—so if your private DNS is set up correctly, the test will follow the private name to the private IP. Results are stored for trend analysis, and you can wire them into Azure Monitor alerts (metrics or log-based) to page when reachability drops or latency bursts. It’s built for ongoing validation across spokes and on-prem, catching regressions from NSG/UDR/DNS drift that a one-time check would miss.
Why the other options are incorrect
A: IP Flow Verify is a point-in-time NSG evaluation (allow/deny) for a single tuple; it doesn’t continuously test end-to-end reachability/latency or validate DNS.
C: Next Hop tells you which route a packet would take; it doesn’t confirm the endpoint is reachable, nor does it measure performance or consider FQDN/DNS resolution.
D: NSG flow logs are passive records written after the fact; they’re useful for forensics but don’t provide active, scheduled testing or alerting on failures.

---

### Question 60

You plan access-based lifecycle rules: move blobs to Cool after 30 days since last access, and to Archive after 180 days since last access. No scripts—policy only.
“To enable access-based lifecycle actions, first turn on __________ at the account.”

**Options:**

- **A.** A. Immutability policy
- **B.** B. Versioning
- **C.** C. Change feed
- **D.** D. Last access time tracking ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Last access time tracking records when a blob was last read so lifecycle rules can evaluate days since last access for automatic tiering to Cool/Archive. Without it, rules can only use last modified time.
Why the other options are incorrect
A: Immutability locks retention and can block deletes/tiering; it doesn’t provide access timestamps.
B: Versioning enables version restore and copy behaviors, not access-based tiering.
C: Change feed tracks events but isn’t the signal lifecycle uses for “since last access.”

---

## Practice Set 20

Source: https://skillcertpro.com/az-104-exam-questions/20/

### Question 1

Scenario
A VM intermittently fails to reach a storage account over TCP 443. The NIC has an NSG; the subnet also has an NSG. You must see the full, merged rule set applied to the NIC (including subnet NSG and defaults) to understand precedence before you change anything.
Proposed solution
Use Network Watcher – IP flow verify on the VM’s NIC for destination Storage FQDN:443 and inspect the result.
Does the proposed solution meet the goal?

**Options:**

- **A.** Yes / No
- **B.** Yes
- **C.** No ✅

**Correct answer:** C

**Explanation:**

IP flow verify tests a single 5-tuple and returns allow/deny plus the matching rule. It’s great to confirm whether a specific flow is blocked and by which rule, but it does not list the complete effective rule set across subnet + NIC NSGs and defaults. To review the entire merged policy, use Network Watcher – Effective security rules, which enumerates all applicable rules and their final precedence as applied to the NIC.
Why the other option is incorrect
Yes: Assumes IP flow verify presents the whole ruleset. It doesn’t; it only evaluates the specified flow. Use Effective security rules for full policy inspection.

---

### Question 5

You must stream platform logs and metrics from a storage account and an App Service into a Log Analytics workspace and Event Hub, with category-level selection and no agents on the PaaS services.
“To route platform logs/metrics to a workspace and Event Hub, create a __________ on each resource and select the categories and destinations.”

**Options:**

- **A.** A. Data collection rule
- **B.** B. Diagnostic setting ✅
- **C.** C. Agent configuration
- **D.** D. Workbook

**Correct answer:** B

**Explanation:**

Choice B is correct. A diagnostic setting on a resource is the platform pipeline for platform logs and (multi-dimensional) metrics. You can send data to one or more destinations (Log Analytics, Storage, Event Hub), choose log categories (e.g., AppServiceHTTPLogs, StorageRead), and enable metric export as time-series. This is agentless for PaaS resources and supports multiple settings per resource, so you can split destinations (e.g., ops workspace + SIEM Event Hub) without redeploying the service.
Why the other options are incorrect
A: Data collection rules govern agent-based VM/AMA data, not PaaS platform logs.
C: There’s no “agent configuration” for these PaaS signals; it’s handled by diagnostic settings.
D: Workbooks visualize data; they don’t configure ingestion.

---

### Question 6

A two-VM app (web + API) in Australia East must replicate to Australia Southeast. During a failover you need app-consistent points, multi-VM consistency, no public IPs in target, and pre-created target networking with subnet/NSG mapping. You also want a Recovery Plan for ordered failover and runbooks.
Which approach fits?

**Options:**

- **A.** A. Nightly VM backups with GRS storage
- **B.** B. Export templates and redeploy in the target region
- **C.** C. In a Recovery Services vault, enable replication to AU SE, set a replication policy (frequency/retention), map VNets/subnets, enable multi-VM consistency, and create a Recovery Plan ✅
- **D.** D. Snapshot managed disks and copy to the target region

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure Site Recovery for Azure VMs is configured from a Recovery Services vault: you enable replication per VM (choosing the target region, resource group, disks, and compute), define a replication policy (RPO, app-consistent snapshot cadence, retention), and map source to target VNets/subnets so NICs land on private subnets with the right NSGs. For multi-tier apps, enable multi-VM consistency to capture crash/app-consistent points across VMs, and use a Recovery Plan to orchestrate startup order, manual actions, and automation runbooks. This delivers repeatable, low-touch DR aligned to your networking and security model.
Why the other options are incorrect
A: Backups provide data recovery, not near-zero RTO failover orchestration, network mapping, or continuous replication.
B: Template redeploy is manual, slow, and error-prone; it lacks RPO, recovery points, and push-button failover.
D: Disk snapshots/copies miss orchestration, app consistency, and automated NIC/network binding.

---

### Question 9

Scenario
You must continuously verify TCP 443 connectivity from a VM in SpokeA to a private endpoint in Hub and surface results in a Log Analytics workspace. Use Azure-native tooling only.
Requirements
Region-scoped Network Watcher enabled
Connection Monitor with test groups, endpoints, and a TCP 443 test configuration (1-minute frequency)
Results stored in a Log Analytics workspace
Which sequence meets the requirements?

**Options:**

- **A.** A.Enable Network Watcher in any regionStart packet capture on private endpointExport capture to Storage
- **B.** B.Enable Network Watcher in the target regionCreate Connection Monitor (workspace-based): add endpoints (SpokeA VM NIC, Hub PE FQDN/IP), test config TCP:443, frequency 1mLink to Log Analytics workspace; review test groups and results ✅
- **C.** C.Create NSG flow logsEnable Traffic AnalyticsInfer health from deny count
- **D.** D.Run Connection Troubleshoot ad-hocScreenshot outputRe-run hourly

**Correct answer:** B

**Explanation:**

The modern Connection Monitor (workspace-based) continuously tests endpoint reachability with configurable test groups and test configurations (e.g., TCP 443 every 1 minute). It requires Network Watcher in the same region and can write results to a Log Analytics workspace for dashboards and alerts. This provides durable health telemetry between the SpokeA VM and the Hub private endpoint without custom agents/scripts.
Why the other options are incorrect
A: You cannot packet-capture on a private endpoint (service-managed). This doesn’t produce continuous health telemetry.
C: NSG flow logs/Traffic Analytics show flows but don’t actively test endpoint reachability or app-level health on a fixed schedule.
D: Connection troubleshoot is ad-hoc; it doesn’t generate continuous monitoring/records or workspace-based history.

---

### Question 10

Scenario
A data lake team wants to protect against accidental overwrites and deletions of blobs and also guard against entire container deletion. They want a 30-day recovery window and must be able to self-restore without backup.
Which THREE actions together meet the goal?

**Options:**

- **A.** A. Enable Blob soft delete (30 days) ✅
- **B.** B. Enable Container soft delete (30 days) ✅
- **C.** C. Enable Blob versioning ✅
- **D.** D. Enable Change feed
- **E.** E. Enable Immutable (time-based) policies on the container
- **F.** F. Set delete retention to 0 days to minimize cost

**Correct answer:** A, B, C

**Explanation:**

To survive deletes and overwrites at the blob level, you need Blob soft delete and Blob versioning. Blob soft delete preserves deleted data for a configured retention window (e.g., 30 days), enabling self-service undeletion; versioning retains prior versions, allowing recovery from accidental overwrites. To protect against container-level deletion, you must enable Container soft delete, which keeps the container and its content recoverable within the same retention period. The trio (A+B+C) provides comprehensive, in-place protection without requiring backups or external tooling.
Why the other options are incorrect
D: Change feed records events for downstream processing/audit but doesn’t make data recoverable by itself.
E: Immutability (WORM) locks data against changes/deletes; it’s for compliance retention, not general “oops” recovery, and would block legitimate modification workflows.
F: A 0-day retention disables soft delete protection and defeats the recovery requirement.

---

### Question 11

Scenario
Prod resources in rg-prod must be protected from accidental deletion while allowing day-to-day updates (scale, extension installs, backups). Teams must keep operating without change windows.
Proposed solution
Apply a ReadOnly lock at the rg-prod scope.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Choice No is correct. ReadOnly locks block all write operations (PUT/PATCH/DELETE). That prevents scaling, extension updates, VM agent changes, Policy remediation, and many backup/restore tasks—violating the need to keep operations running. To protect against accidental deletes while permitting writes, use a CanNotDelete lock at the required scope (resource or RG). CanNotDelete prevents deletion but still allows updates, matching the operational requirement. If only specific resources need protection (e.g., vnet/shared kv), apply the lock at resource scope to minimize blast radius; otherwise use RG scope for broad coverage.
Why Yes is incorrect
A ReadOnly lock is overly restrictive for continuous operations. It blocks legitimate write workflows (autoscale, extension deployments, backup jobs) and becomes a friction point that teams will attempt to bypass, undermining governance.

---

### Question 16

A VM has an NSG on its NIC that denies 3389, while the subnet NSG allows 3389 from Ops. You need to confirm the computed result after Azure merges subnet + NIC rules and defaults.
Where do you see the computed (effective) security rules for that NIC?

**Options:**

- **A.** A. NSG flow logs only
- **B.** B. Effective security rules (Network Watcher) on the NIC ✅
- **C.** C. Activity Log
- **D.** D. Effective routes

**Correct answer:** B

**Explanation:**

Choice B is correct. Network Watcher ? Effective security rules queries the platform’s evaluation engine for a NIC and shows the final allow/deny set after combining subnet NSG, NIC NSG, and default rules. In your scenario, you’ll observe deny takes effect because a specific NIC-level deny overrides a broader subnet allow.
Why the other options are incorrect
A: Flow logs are telemetry exported to storage; they don’t show the merged rule table.
C: Activity Log records control-plane operations, not data-plane policy.
D: Effective routes are for UDR/system routing, not NSG policy.

---

### Question 22

You’re standardizing **Azure VM backup** in a Recovery Services vault. Ensure **consistent schedules**, **GFS-style retention**, and **fast restores** from recent snapshots.

**Workloads &amp; retention goals**

****

How should you implement **payroll-prod**?

**Options:**

- **A.** A. Create a VM backup policy in the Recovery Services vault with daily 01:00, GFS retention (D/W/M/Y), and Instant Restore = 7 days; assign the VM ✅
- **B.** B. Take nightly snapshots via Automation
- **C.** C. Use a Backup vault (Data Protection) disk policy
- **D.** D. Export templates weekly

**Correct answer:** A

**Explanation:**

**Choice A is correct.** A **Recovery Services vault VM backup policy** lets you set a **daily schedule**, **grandfather-father-son** retention (**daily/weekly/monthly/yearly**) and **Instant Restore** snapshot retention. Assigning the policy to **payroll-prod** enforces **long-term retention** while keeping **recent snapshots** on the source for **fast file/VM restores**. Policies are **central**, reusable across VMs, and changes apply without touching the workload.

Why the other options are incorrect

B: Ad-hoc **snapshots** lack **policy, vault immutability, GFS retention, reporting,** and governed restore workflows.

C: A **Backup vault** targets **Disk Backup/Data Protection**, not **Azure VM backup** in an RS vault.

D: **Exporting templates** preserves infrastructure shape, not application data or backup state.

---

### Question 25

During a traffic spike, users report latency. Your dashboard shows conflicting signals depending on the chart settings. Decide how to interpret the data and what to change.

**Current charts**

****

Which action best explains the discrepancy **and** gives you a truer picture for scaling?

**Options:**

- **A.** A. Switch to 1-minute granularity and use Max or P95 aggregation, split by instance ✅
- **B.** B. Keep 5-minute averages; add a schedule to pre-scale at noon
- **C.** C. Turn on Activity Log analytics for the plan
- **D.** D. Replace queue length with CPU for scale rules

**Correct answer:** A

**Explanation:**

**Choice A is correct.** **Short spikes are averaged away** at 5-minute granularity, especially on **average** aggregation. The queue can be **briefly saturated** while the 5-minute average still looks low. Moving to **1-minute** granularity with **Max/P95** and splitting by **instance** reveals **per-worker hot spots** and short-lived backlogs that correlate with the 5xx spikes. Once visible, you can scale on the **earliest signal** (queue length) with tight lookbacks and cooldowns, preventing head-of-line blocking even when CPU remains moderate.

Why the other options are incorrect

B: A schedule ignores real-time bursts and doesn’t fix the **aggregation blind spot**.

C: The **Activity Log** is control-plane, not data-plane performance.

D: CPU often **lags** connection pressure; swapping signals hides the real bottleneck.

---

### Question 30

A VMSS-based web tier in Australia East should alert when **average Percentage CPU &gt; 80% for 10 minutes** across the scale set. An existing alert never fires even when instances show ~85% CPU. Review the candidate configurations and pick the one that correctly implements the requirement.

**Candidates**

****

**Question**

Which row meets the requirement?

**Options:**

- **A.** A. Row A
- **B.** B. Row B
- **C.** C. Row C
- **D.** D. Row D ✅

**Correct answer:** D

**Explanation:**

Metric alerts must target the **correct scope** and **metric** with the **right aggregation window**. For a scale set, use **Percentage CPU** from the **VM/Compute** metric namespace at the **VMSS scope** so the platform evaluates across instances. The requirement is **average over 10 minutes**; using **Average** with a **10-minute window** and a frequent **1-minute evaluation** captures sustained load and triggers predictably. Row D is the only candidate that gets all three (scope/metric/aggregation) right.

Why the other options are incorrect

- A: Targets **one VM** and uses **Max** over 5m; it won’t reflect the scale set’s average and can miss alerts when other instances are hot.

- B: **Subscription** scope and the **CPU Credits** metric are irrelevant to VMSS CPU saturation; wrong metric/scope.

- C: **InsightsMetrics** is a **logs-based** signal; the requirement is a **metric alert** on the compute metric “Percentage CPU,” not a log query.

---

### Question 50

You will protect Azure VMs (Windows/Linux) with policy-based backups, Instant Restore from snapshots, cross-region restore capability, soft delete/immutability, and item-level restores—all agentless for Azure VMs.
“To back up Azure VMs with these capabilities, create a __________ and configure backup policies there.”

**Options:**

- **A.** A. Backup vault
- **B.** B. Storage account with snapshots
- **C.** C. Recovery Services vault ✅
- **D.** D. Key Vault

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure VM Backup is driven from a Recovery Services vault, which acts as the control plane for policies, jobs, restore points, and security features. When you enable backup for Azure VMs in a vault, the platform performs snapshot-based backups (agentless for Azure VMs), retains Instant Restore snapshots locally for fast near-term recovery, and transfers recovery points into the vault according to your schedule and retention. The vault supports soft delete and immutability to protect against accidental or malicious deletion, and (when configured with geo-redundant storage) can enable Cross Region Restore so you can restore a VM in the paired region without initiating a failover. From the same vault, you can perform file/item-level restores by mounting a recovery point, run restore to new VM for break-glass testing, and audit all actions with RBAC and vault-level security PINs. This provides a governed, policy-based, enterprise backup plane without installing guest agents for Azure VMs.
Why the other options are incorrect
A: A Backup vault belongs to the Azure Backup (Data Protection) plane (e.g., Azure Disk Backup, SAP HANA, Blob operational backup). It’s not the control plane for Azure VM backups.
B: Storage snapshots + scripts don’t provide schedules, retention, vault immutability, soft delete, CRR, or centralized RBAC/reporting; you’re rebuilding what the vault gives you out of the box.
D: Key Vault stores secrets/keys/certs; it has no backup policy orchestration for VMs.

---

### Question 52

You want agentless backups for Azure Disks used by critical stateful services, with vault-locked immutability, per-policy schedule/retention, and at-scale management via Backup Center. You do not want to move to Recovery Services vaults for this scenario.
What should you deploy?

**Options:**

- **A.** A. Recovery Services vault and MARS agent
- **B.** B. Storage snapshots + scripts
- **C.** C. Backup vault (Data Protection) and enable Azure Disk Backup ✅
- **D.** D. App Service backups

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure Disk Backup is provided through the Azure Backup (Data Protection) platform using a Backup vault (Microsoft.DataProtection/backupVaults). It’s agentless (no guest extension), leverages incremental snapshots under the hood, and gives you policy-based scheduling and retention with vault-locked immutability so recovery points can’t be altered outside policy. You manage at scale through Backup Center, apply consistent policies across many disks, and restore by creating a new managed disk from a chosen recovery point (then attach to a VM). This separates VM backup (Recovery Services vault) from disk-level backup (Backup vault), letting you protect stateful disks even when VM-level backup isn’t appropriate, and it integrates with RBAC, tags, and reporting for governance.
Why the other options are incorrect
A: Recovery Services vault + MARS agent targets files/folders on Windows machines (often on-prem/IAAS) and isn’t the mechanism for Azure Disk Backup; it also introduces agents you explicitly want to avoid.
B: Snapshots + scripts lack policies, immutability, centralized lifecycle, and easy audit/restore workflows; you’d own orchestration and failure handling.
D: App Service backups protect web app content/config and optional DB exports—unrelated to managed disk protection.

---

### Question 56

You already have dozens of alert rules and action groups. Ops asks to suppress all nonprod alerts during a weekly maintenance window and to reroute Sev0 alerts to on-call SMS + Teams without editing each alert rule. You also want this scoped to specific resource groups.
What should you configure?

**Options:**

- **A.** A. Clone alert rules and change action groups
- **B.** B. Dynamic thresholds on the rules
- **C.** C. New action groups only
- **D.** D. Alert processing rules with time windows, scope filters, and action overrides ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Alert processing rules (post-evaluation) let you suppress, route, or enrich alerts after the alert rule fires, based on scope (RGs/subscriptions), severity, monitor service, or schedule. You can define a rule that suppresses alerts for nonprod during maintenance, and another that overrides routing for Sev0 to the on-call action group, all without touching existing alert rules. This central layer is ideal for governance-scale changes and maintenance policies.
Why the other options are incorrect
A: Cloning rules is brittle and multiplies maintenance; you still can’t schedule suppression cleanly.
B: Dynamic thresholds help detection but don’t suppress or reroute.
C: New action groups alone won’t apply unless you edit every alert rule; you need a processing layer.

---

### Question 57

A Web App calls a Storage account via Private Endpoint. The app has VNet Integration into AppSubnet. Storage has Public network access: Disabled. Requests fail (403/timeout). nslookup account.blob.core.windows.net from the app returns a public IP.
What change will restore private connectivity?

**Options:**

- **A.** A. Add a service endpoint to Storage
- **B.** B. Create a Private DNS Zone privatelink.blob.core.windows.net, link it to the VNet used by VNet Integration, and ensure an A record exists for the PE ✅
- **C.** C. Open outbound to Internet in NSG
- **D.** D. Add 0.0.0.0/0 UDR to an NVA

**Correct answer:** B

**Explanation:**

Choice B is correct. Private Endpoints rely on DNS to resolve the public FQDN to the private IP. Because lookups are returning a public address, the app is hitting the blocked public endpoint. Creating the Private DNS Zone for the storage privatelink domain, linking it to the VNet used by VNet Integration, and ensuring the endpoint’s A-record resolves to the private IP fixes name resolution and restores the private path.
Why the other options are incorrect
A: Service endpoints still use the public endpoint and don’t work when Public network access is disabled.
C: Opening Internet egress doesn’t change DNS and still won’t reach a disabled public endpoint.
D: Sending default traffic to an NVA doesn’t fix the name resolution mistake; PE requires the privatelink zone.

---

### Question 58

You want cross-subscription, cross-vault reporting with trend and compliance views, and you need alerting to Teams/SMS/email without editing every alert rule per vault. Prefer platform features over custom code.
“To centralize reporting and alerting, enable vault diagnostic settings to a Log Analytics workspace, use Backup Reports for insights, and create Azure Monitor alerts with Action Groups. This is configured at the __________ level.”

**Options:**

- **A.** A. Recovery Services vault ✅
- **B.** B. Resource group
- **C.** C. Subscription policy only
- **D.** D. VM

**Correct answer:** A

**Explanation:**

Choice A is correct. Configure each Recovery Services vault with diagnostic settings that send Backup jobs/alerts/reports to a central Log Analytics workspace. The Backup Reports workbook reads that workspace for job status, trends, policy compliance, storage usage, and optimization insights across vaults/subscriptions. For alerting, create Azure Monitor alerts (built-in backup signals or custom KQL) targeting Action Groups (email/SMS/Teams/ITSM). This approach scales without touching each protected item and keeps governance in Backup Center and Azure Monitor.
Why the other options are incorrect
B: A resource group alone doesn’t collect backup telemetry—you must configure each vault.
C: Subscription policy can help enforce diagnostics, but reports/alerts still rely on vault-level diagnostics to a workspace.
D: Per-VM settings don’t centralize vault jobs, restore points, or alerts.

---

### Question 60

A user deleted a folder on a Windows VM protected by VM backup. You need a fast, targeted restore with no VM redeploy and minimal downtime.
What should you do?

**Options:**

- **A.** A. Restore VM (overwrite)
- **B.** B. File Recovery: mount the recovery point, copy back the folder ✅
- **C.** C. ASR test failover to a clean VM
- **D.** D. Recreate the folder from a storage snapshot

**Correct answer:** B

**Explanation:**

Choice B is correct. File Recovery mounts a selected recovery point from the vault to the running VM (via a temporary iSCSI/PowerShell experience), letting you copy only the missing files back. It’s fast, non-disruptive, and avoids a full VM restore. You choose the restore point, mount, copy, and detach—ideal for surgical recoveries.
Why the other options are incorrect
A: A full VM overwrite is heavy, risks config drift, and causes downtime.
C: ASR test failover is for DR validation, not file-level recovery.
D: The VM’s OS disk isn’t guaranteed to align with any storage snapshot you may have; Azure Backup already maintains consistent recovery points for the VM.

---

## Practice Set 21

Source: https://skillcertpro.com/az-104-exam-questions/21/

### Question 2

Scenario
A Linux VM was corrupted by a bad deploy. You only need to recover /etc/app/config.yml quickly with no VM downtime. The VM is protected by a Recovery Services vault with recent restore points. After recovery, you’ll roll forward normally.
Which TWO actions meet the goal?

**Options:**

- **A.** A. Restore VM (Create new) and copy the file from the new VM
- **B.** B. File Recovery: start from the chosen restore point, download the mount script, mount the recovery volumes on the running VM, copy the file ✅
- **C.** C. Replace existing disks from a restore point
- **D.** D. Take a crash-consistent snapshot using Azure Compute and attach it
- **E.** E. Run File Recovery from Backup Center on a Blob container
- **F.** F. After copying, unmount the recovery volumes and stop the File Recovery session ✅

**Correct answer:** B, F

**Explanation:**

For single-file restore without downtime, use File Recovery from the Recovery Services vault. You select a restore point and the portal generates a script (Linux: shell; Windows: PowerShell) that securely mounts read-only recovery volumes over iSCSI to the running VM. You then copy /etc/app/config.yml back to its location. When done, you unmount and end the File Recovery session, which removes the temporary exposure and cleans up. This flow avoids creating/replacing VMs or disks and meets the “fast, minimal impact” requirement.‘
Why the other options are incorrect
A: Works but is heavy, slow, and costly—spins up a full VM just to fetch one file.
C: Replacing disks causes downtime and is unnecessary for a single file.
D: Ad-hoc snapshots aren’t part of the Azure Backup workflow and don’t help with past restore points.
E: File Recovery from VM backup is run against VM restore points, not Blob containers; Blob Backup is a different workload.

---

### Question 4

Scenario
Your production plan hosts a CPU-bound API. Target behavior: maintain at least 2 instances at all times; scale out rapidly when CPU &gt; 70%; scale in conservatively when CPU &lt; 40%; and pre-warm to 6 instances on weekdays 08:00–18:00 AEST.
Select TWO actions to implement.

**Options:**

- **A.** A. Enable Always On; set min instances = 0; rely on manual scale
- **B.** B. Create an Autoscale setting with metric rules: scale out +1 at CPU > 70% (cooldown 10m); scale in ?1 at CPU < 40% (cooldown 15m ✅
- **C.** C. Use Deployment Slots “traffic %” to auto-scale production
- **D.** D. Configure a Scheduled profile in the same Autoscale setting: weekdays 08:00–18:00 AEST, default instance count = 6
- **E.** E. Set plan maximum instance count = 20; leave min = 2 for off-hours ✅
- **F.** F. Set Always On = Off to allow cold start and save cost

**Correct answer:** B, E

**Explanation:**

Autoscale is delivered by Azure Monitor Autoscale for App Service plans. You define metric rules (e.g., CPU thresholds with separate cooldowns) and a capacity envelope (min/default/max). Setting max = 20 and leaving min = 2 ensures resiliency off-hours while permitting burst scale-out. Metric-driven rules handle dynamic load; you can additionally add a scheduled profile to pre-warm, but the two must-have steps to fulfill CPU triggers and guardrails are the autoscale rules plus capacity bounds.
Why the other options are incorrect
A: Min=0 conflicts with “at least 2 instances”; manual scaling defeats the autoscale requirement.
C: Deployment Slot traffic routing is for release management, not autoscale.
D: Useful for pre-warm, but without metric rules and capacity you won’t meet the CPU-based behavior alone.
F: Disabling Always On increases cold starts; it doesn’t implement scale goals.

---

### Question 9

Scenario
A VM in SpokeA cannot reach an Azure SQL private endpoint in the Hub. DNS is supposed to resolve the SQL FQDN to a private IP in the hub. You need a fast, systematic diagnosis using Azure-native tools to confirm DNS resolution, routing, and NSG behavior before escalating.
Which troubleshooting sequence is best?

**Options:**

- **A.** A.Start a packet capture on the SQL private endpointEnable verbose NSG logs on the SQL NICReboot the VM
- **B.** B.Use IP flow verify on the VM’s NIC for the SQL FQDNIf allowed, stop thereOtherwise, open all NSG rules
- **C.** C.Run Connection troubleshoot from the VM’s NIC to the SQL FQDN (validates reachability and DNS)Check Next hop on the VM’s NIC for the SQL private IP (verifies effective routing/UDR)If still failing, run IP flow verify on that 5-tuple (shows the exact allow/deny rule) ✅
- **D.** D.Run traceroute to the SQL public IPDisable private DNS zonesSwitch SQL to public endpoint

**Correct answer:** C

**Explanation:**

Start with Connection troubleshoot (Network Watcher) targeting the FQDN—it resolves DNS and tests reachability, quickly exposing name resolution or path issues. Then check Next hop for the resolved private IP to confirm the VM’s effective route to the private endpoint (e.g., via peering, route tables, or accidental Internet routes). If traffic is still blocked, run IP flow verify on that exact 5-tuple to see whether an NSG (on NIC or subnet) is denying and which rule is responsible. This trio gives end-to-end visibility: DNS ? route ? security, with minimal intrusion.
Why the other options are incorrect
A: You can’t capture at a private endpoint like a NIC; PE is a service-managed resource. NSG logs on PE don’t exist; rebooting the VM is not diagnostic.
B: IP flow verify alone doesn’t validate DNS or routing; opening NSGs blindly is risky and non-deterministic.
D: Traceroute to a public IP and disabling private DNS contradict a private endpoint design; switching to public endpoint sidesteps the requirement.

---

### Question 12

Scenario
You need a chart of 95th percentile request duration by operation name in 1-minute bins over the last 15 minutes for /v2/ API calls in Application Insights.
Which single KQL query fits?

**Options:**

- **A.** A. Perf | where TimeGenerated > ago(15m) | summarize avg(CounterValue) by Computer
- **B.** B. requests | where timestamp > ago(15m) | summarize avg(duration) by operation_Name
- **C.** C. requests | where timestamp > ago(15m) and url has “/v2/“ | summarize p95=percentile(duration, 95) by bin(timestamp, 1m), operation_Name ✅
- **D.** D. AzureActivity | summarize percentile(DurationMs, 95) by bin(TimeGenerated, 1m), OperationName

**Correct answer:** C

**Explanation:**

The requests table holds Application Insights request telemetry. Filtering to last 15 minutes and /v2/ narrows the dataset. The percentile() aggregation computes p95 latency, and bin(timestamp, 1m) groups into 1-minute time buckets while splitting by operation_Name for per-operation series. Option C exactly matches the statistical and grouping requirements.
Why the other options are incorrect
A: Perf is guest metrics (counters) and unrelated to App Insights requests or latency.
B: Uses average instead of p95 and lacks 1-minute binning.
D: AzureActivity logs control-plane events, not app request timings; wrong table/columns.

---

### Question 14

Scenario
Contoso must protect 150 Azure VMs in Australia East and several on-premises Windows servers (files/folders) via MARS. Security requires soft delete, GRS for regional resilience, and the ability to restore VMs even if the primary region is unavailable. Operations wants vault-level RBAC and to keep the vault in the same subscription/RG used by the ops team.
Requirements
Protect Azure VMs + on-prem (MARS agent)
Soft delete enabled; GRS replication
Same-region vault for protected Azure VMs; support cross-region restore
RBAC on the vault resource
Which approach meets the requirements?

**Options:**

- **A.** A. Create an Azure Backup vault (Data Protection) in Australia East; LRS; disable soft delete
- **B.** B. Create a Recovery Services vault in Australia East; set Backup Storage redundancy = GRS; enable soft delete; configure policies; register MARS and Azure VM backups ✅
- **C.** C. Create an RSV in Australia Southeast; protect Australia East VMs across regions by default
- **D.** D. Use Storage account snapshots; upload MARS data to Blob; no vault

**Correct answer:** B

**Explanation:**

A Recovery Services vault (RSV) is the correct control plane for Azure VM backups and MARS (files/folders) on-prem. RSVs must be in the same region as the Azure VMs being protected; selecting GRS gives regionally redundant backup storage, and with supported regions you can enable cross-region restore to recover in the paired region if the primary is unavailable. Soft delete protects against malicious/accidental deletion of backup items. Because the vault is an ARM resource, you apply RBAC at the vault for least-privilege operations (backup operator, restore operator, etc.). This configuration satisfies workload coverage (Azure VMs + MARS), resilience, and governance.
Why the other options are incorrect
A: An Azure Backup vault (Data Protection) doesn’t cover MARS/VM-in-guest workloads; LRS and disabling soft delete violate requirements.
C: Vault must be co-located with protected Azure VMs; creating it in another region blocks protection of Australia East VMs.
D: Storage snapshots/Blob alone aren’t Azure Backup; you lose policy, retention, soft delete, and item-level restore workflows.

---

### Question 27

Scenario
A platform team needs to protect Azure managed disks (crash-consistent snapshots + long-term retention) and Azure Blob containers with policy-based backups managed centrally through Backup Center. They prefer the modern Data Protection experience, no public endpoints, and hardened deletion behavior.
Requirements
Use Azure Backup vault (Data Protection)
Back up Azure Disks and Azure Blobs with policies
Integrate via Backup Center; use RBAC
Private networking (where applicable) and strong delete protection
Which approach meets the requirements?

**Options:**

- **A.** A. Recovery Services vault; VM backup policy for disks; Storage lifecycle rules for blobs
- **B.** B. RSV + MARS agent for blobs; per-container scripts for snapshots
- **C.** C. Backup to a Storage account with immutability; manage in Azure Monitor
- **D.** D. Create an Azure Backup vault (Data Protection) in the target region; configure Disk Backup and Blob Backup policies in Backup Center; apply RBAC; enable recommended security settings ✅

**Correct answer:** D

**Explanation:**

The Azure Backup vault (resource type Microsoft.DataProtection/backupVaults) under Azure Backup (Data Protection) is the control plane for Disk Backup and Blob Backup. You create a Backup vault in the region, onboard workloads via Backup Center, and assign policy-based protection (schedules, retention). The vault is an ARM resource with RBAC, built-in security features (soft delete, vault-level protections), and optional network isolation where supported. This is the modern path for disks/blobs—distinct from Recovery Services vault, which primarily covers Azure VMs, SQL/SAP HANA in VM, and MARS.
Why the other options are incorrect
A: RSV VM policies don’t manage Disk Backup (Data Protection) or Blob Backup; lifecycle rules are storage governance, not Azure Backup.
B: MARS is for files/folders on Windows machines—not for Blob containers.
C: Storage immutability is valuable but doesn’t provide Azure Backup’s policy/restore workflows or centralized management in Backup Center.

---

### Question 35

An app in a VNet uses a private endpoint to a storage account. Security wants only this app and trusted Microsoft services (e.g., Azure Backup/Monitor) to reach the account; everything else on the public Internet must be blocked.
Requirements
Private endpoint from the app subnet
Allow trusted Microsoft services
Block other public traffic
Which configuration fits?

**Options:**

- **A.** A. Public network access: Disabled; no endpoints
- **B.** B. Selected networks; add VNet subnet only
- **C.** C. Selected networks; private endpoint; enable “Allow trusted Microsoft services”; no public IP ranges ✅
- **D.** D. Allow all networks; rely on RBAC only

**Correct answer:** C

**Explanation:**

Choice C is correct. “Selected networks” turns on the storage firewall so public traffic is denied by default unless explicitly allowed. Creating a private endpoint gives the VNet a private IP path that ignores the public firewall. Enabling “Allow trusted Microsoft services” carves a narrow exception for specific first-party services that must reach the account for backups, monitoring, import/export, etc. Leaving the IP allowlist empty prevents any arbitrary public IP from getting through, so only the private endpoint and trusted services work. This is the precise combo for “PE + trusted services only.”
Why the others are incorrect
A: Public network access “Disabled” blocks all public traffic—including trusted Microsoft services. You would break backup/monitoring scenarios that rely on the trusted services exception.
B: Adding the VNet subnet (service endpoint) doesn’t apply to private endpoints and still blocks trusted services unless you toggle the specific allow-list; also, private endpoint is the recommended pattern over service endpoints for strict isolation.
D: “Allow all networks” leaves the account exposed to the Internet. RBAC governs who, not where; it does not enforce network isolation.

---

### Question 37

Scenario
Your data engineering team frequently overwrites parquet files during daily loads and occasionally deletes the wrong files. They want built-in recovery without backups: instant rollback after an overwrite and self-restore after a delete. They also want to keep a short journal of changes for operational auditing but can’t tolerate heavy operational overhead.
Which TWO features must be enabled to meet the rollback and undelete goals?

**Options:**

- **A.** A. Blob versioning ✅
- **B.** B. Change feed
- **C.** C. Cross-region replication (GRS/RA-GRS)
- **D.** D. Container soft delete
- **E.** E. Immutability (time-based)
- **F.** F. Blob soft delete ✅

**Correct answer:** A, F

**Explanation:**

Blob versioning creates a new version on every write, letting you recover the previous version after a bad overwrite with a simple promote or read of the prior version—no external backup system needed. Blob soft delete protects against accidental deletions by retaining the deleted object for a configured retention window, enabling straightforward undeletion. Combined, these two controls directly address the two failure modes (overwrite and delete) while keeping operations lightweight and user-driven.
Why the other options are incorrect
B (Change feed): Great for auditing/ETL triggers, but it’s only an event log; it doesn’t preserve content you can roll back to.
C (GRS/RA-GRS): Geo-redundancy improves durability/DR posture but doesn’t provide point-in-time local recovery from user error (overwrite/delete).
D (Container soft delete): Protects against container-level deletion, not blob overwrites or single-blob deletes inside the container.
E (Immutability): WORM locks content (compliance). It prevents overwrites/deletes rather than enabling easy rollback/undelete; it also complicates normal operations.

---

### Question 44

Scenario
Production VMSS must raise: P1 SMS/Teams when Percentage CPU &gt; 80% for 10 minutes; P2 email for warnings. During a weekly maintenance window (Saturdays 22:00–23:00 AEST) all alerts should be suppressed for the Prod resource group. Two action groups already exist: AG-P1 (SMS+Teams) and AG-P2 (Email).
Select THREE actions that together meet the goal.

**Options:**

- **A.** A. Create a metric alert rule at the VMSS scope: Percentage CPU > 80% over 10m, evaluation frequency 1m ✅
- **B.** B. Replace AG-P1/AG-P2 with a single action group to simplify routing
- **C.** C. Create an alert processing rule (Suppression) for the Prod RG: Saturdays 22:00–23:00 AEST ✅
- **D.** D. Use dynamic thresholds on all metrics across subscriptions to auto-tune severity
- **E.** E. Create an alert processing rule (Route) scoped to Prod RG: send Sev0/Sev1 to AG-P1; send Sev2+ to AG-P2 ✅
- **F.** F. Set the alert rule to “auto resolve” only, relying on Smart Groups for all deduplication

**Correct answer:** A, C, E

**Explanation:**

You need one metric alert rule to produce the CPU signals at the VMSS scope with the required window (10m) and frequency (1m) (A). To handle weekly quiet time, configure an alert processing rule (Suppression) for the Prod resource group with the exact schedule; this silences any alerts that would fire during that window without changing the rules themselves (C). Finally, to implement differential routing by severity, use an alert processing rule (Route) that inspects Severity and targets the appropriate action group (Sev0/Sev1 ? AG-P1 for SMS/Teams; Sev2+ ? AG-P2 for email) (E). This trio yields correct signal creation, calendar-based suppression, and policy-driven delivery.‘
Why the other options are incorrect
B: Collapsing action groups removes the ability to route by severity to different destinations.
D: Dynamic thresholds can be useful but don’t implement the explicit &gt;80%/10m or severity-based routing requirements.
F: “Auto resolve”/Smart Groups affect incident lifecycle/grouping, not scheduled suppression or severity-based routing to different actions.

---

### Question 45

Scenario
A Standard internal Load Balancer on TCP 443 isn’t distributing traffic; only one VM is hit. Use Azure-native tools to verify path, backend health, and NSG rules before touching app code. NSG is on the subnet.
Select THREE actions that together isolate the issue correctly.

**Options:**

- **A.** A. Change LB SKU to Basic
- **B.** B. Check Backend health and probe status per NIC ✅
- **C.** C. Ensure NSG allows AzureLoadBalancer to the probe port ✅
- **D.** D. Disable the NSG entirely
- **E.** E. Verify each VM listens/responds on the probe endpoint (e.g., TCP 443 or specific HTTP path) ✅
- **F.** F. Use Connection troubleshoot to the LB private IP:443

**Correct answer:** B, C, E

**Explanation:**

When a Standard LB sends traffic to only one VM, the usual cause is that the others are Unhealthy. Start in the LB’s Backend health blade to inspect each backend NIC: it shows real-time probe status and often a textual reason (timeout, connection refused, wrong HTTP code/path). If a backend is Unhealthy, it won’t receive flows, even if the app is up on another port. Next, confirm your NSG allows the AzureLoadBalancer service tag to the probe port. A custom deny that overrides defaults will silently block probes and make instances Unhealthy. Finally, validate that each VM actually listens and responds on the probe endpoint you configured. For a TCP probe, ensure the service returns SYN-ACK on 443; for an HTTP probe, confirm the exact path returns a 200 OK (not a redirect/403/health-off response). Only when probes pass will the LB include that backend in the distribution set.
Why the other options are incorrect
A: Downgrading to Basic removes features and doesn’t address misconfigured probes, closed ports, or NSG blocks.
D: Disabling the NSG is a blunt instrument that hides the root cause and violates change control; precise allow rules are the right fix.
F: Connection troubleshoot validates end-to-end reachability to the frontend IP:port, but it does not tell you why specific backends are excluded. Probe health is what drives per-instance inclusion.

---

