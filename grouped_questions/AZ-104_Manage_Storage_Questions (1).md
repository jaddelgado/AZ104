# AZ-104 Practice Questions: Implement and Manage Storage

This document contains a curated subset of 362 questions extracted from the main practice set, specifically focusing on **Azure Storage** (Storage Accounts, Replication Stratagems, Access Tiers, Azure Files, File Sync, Security/SAS tokens, and Data Migration utilities).

---

### Question 15

Your on‑premise network consists of two servers named Serve1 and Serve2, both running Windows Server 2019 Datacenter. On Serve1, a file exists named file1.txt. On Serve2, a file exists also named file1.txt, but its contents are different. You set up a file sync service in Azure to sync the folders that contain both versions of file1.txt to a cloud endpoint. First, you setup Serve1 as a server endpoint, then a few hours later, Serve2. What will happen to file1.txt?

**Options:**

- **A.** file1.txt on Serve1 will be moved to another folder
- **B.** file1.txt from Serve1 is renamed file1-Serve1.txt ✅
- **C.** file1.txt will be overwritten as soon as Serve2 server endpoint is added
- **D.** file1.txt on Serve1 will be renamed file1-old.txt

**Correct answer:** B

**Explanation:**

### Correct

**Option B. file1.txt from Serve1 is renamed file1‑Serve1.txt** This is correct. Azure File Sync detects conflicts when files with the same name but different contents exist across endpoints. To preserve both versions, the service renames one of the files (in this case, the earlier one from Serve1) to include the server name suffix. This ensures no data loss and both versions remain accessible.

### Incorrect

**Option A. file1.txt on Serve1 will be moved to another folder** Incorrect because Azure File Sync does not move files into separate folders to resolve conflicts. It uses renaming conventions instead.

**Option C. file1.txt will be overwritten as soon as Serve2 server endpoint is added** Incorrect because Azure File Sync does not overwrite conflicting files automatically. It preserves both versions by renaming one of them.

**Option D. file1.txt on Serve1 will be renamed file1‑old.txt** Incorrect because the renaming convention is not “‑old.txt.” Azure File Sync specifically appends the server name to the file to indicate the source of the conflict.

---

### Question 18

You have an Azure subscription. You need to transfer 34TB of data from an on-premise Windows 2016 server to your Azure storage account. You need to ensure that the data transfer has zero impact on the network, preserves your existing drives and is the fastest and most secure method. What should be your first step?

**Options:**

- **A.** Start an Import Job via the Azure Portal
- **B.** Order an Azure Databox via the Azure Portal ✅
- **C.** Open a ticket with Microsoft Support
- **D.** Prepare your hard drives using the WAImportExport tool

**Correct answer:** B

**Explanation:**

The Microsoft Azure Data Box cloud solution lets you send terabytes of data into and out of Azure in a quick, inexpensive, and reliable way.

https://docs.microsoft.com/en-us/azure/databox/data-box-overview

INCORRECT ANSWERS:

Start an Import Job via the Azure Portal – This is required for disk shipment that does not support the volume of data in the question.

Open a ticket with Microsoft Support – MS support not required.

Prepare your hard drives using the WAImportExport tool – This is required for disk shipment that does not support the volume of data in the question.

---

### Question 21

You have an Azure subscription named Subscription1.

You create an Azure Storage account named storageaccount1, and then you create a file share named data.

Which UNC path should you include in a script that references files from the data file share?

**Options:**

- **A.** \\storageaccount1.file.core.windows.net\data ✅
- **B.** \\storageaccount1.blob.core.windows.net\data
- **C.** \\subscription1.file.core.windows.net\storageaccount1\data
- **D.** \\subscription1.blob.core.windows.net\storageaccount1\data

**Correct answer:** A

**Explanation:**

The UNC path format is \\.file.core.windows.net\. For example: \\anexampleaccountname.file.core.windows.net\example-share-name.

https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-windows

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

### Question 26

You have an Azure subscription named **Subscription1**. You have **5 TB of data** that you need to transfer to Subscription1. You plan to use an **Azure Import/Export job**. What can you use as the destination of the imported data?

**Options:**

- **A.** a virtual machine
- **B.** an Azure Cosmos DB database
- **C.** Azure File Storage ✅
- **D.** the Azure File Sync Storage Sync Service

**Correct answer:** C

**Explanation:**

### **Correct**

- **Option C. Azure File Storage**

- Correct because the **Azure Import/Export service** supports importing data directly into **Azure Storage accounts** (Blob storage or Azure Files).

- This is the intended destination for bulk offline data transfer jobs.

- With 5 TB of data, Azure File Storage is a valid and supported target.

### **Incorrect**

- **Option A. a virtual machine**

- Incorrect because Import/Export jobs cannot write directly to a VM. Data must first be imported into Azure Storage, and then a VM can access it if needed.

- **Option B. an Azure Cosmos DB database**

- Incorrect because Cosmos DB is not supported as a direct destination for Import/Export jobs. Data must be ingested into Cosmos DB through supported APIs or migration tools after being staged in Azure Storage.

- **Option D. the Azure File Sync Storage Sync Service**

- Incorrect because Azure File Sync is used to synchronize on‑premises file servers with Azure Files. It is not a direct destination for Import/Export jobs.

---

### Question 27

You have an Azure subscription.

You create the Azure Storage account shown in the following exhibit.

The minimum number of copies of the data that storage account will contain?

**Options:**

- **A.** 1
- **B.** 2
- **C.** 3 ✅
- **D.** 4

**Correct answer:** C

**Explanation:**

The replication configured for the storage account is LRS.

Locally redundant storage (LRS) copies your data synchronously three times within a single physical location in the primary region. LRS is the least expensive replication option, but is not recommended for applications requiring high availability.

https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy

---

### Question 28

You have an Azure subscription.

You create the Azure Storage account shown in the following exhibit.

To reduce the cost of infrequently accessed data in the storage account, you must modify which setting?

**Options:**

- **A.** Access tier ✅
- **B.** Performance
- **C.** Account Kind
- **D.** Replication

**Correct answer:** A

**Explanation:**

Azure storage offers different access tiers, which allow you to store blob object data in the most cost-effective manner. The available access tiers include:

· Hot – Optimized for storing data that is accessed frequently.

· Cool – Optimized for storing data that is infrequently accessed and stored for at least 30 days.

· Archive – Optimized for storing data that is rarely accessed and stored for at least 180 days with flexible latency requirements (on the order of hours).

To reduce the costs, you can change the access tier to cool or archive.

https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers?tabs=azure-portal

---

### Question 29

You have an Azure subscription named **Subscription1**. You have **5 TB of data** that you need to transfer to Subscription1. You plan to use an **Azure Import/Export job**.

**What can you use as the destination of the imported data?**

**Options:**

- **A.** an Azure Cosmos DB database
- **B.** Azure Blob storage ✅
- **C.** Azure Data Lake Store
- **D.** the Azure File Sync Storage Sync Service

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Azure Blob storage**

- This is correct because the **Azure Import/Export service** supports importing data directly into **Azure Blob storage**.

- You ship encrypted hard drives to Microsoft, and the data is copied into your designated Blob storage account.

- Blob storage is the supported destination for large-scale offline data transfer.

### Incorrect

**Option A. An Azure Cosmos DB database**

- Incorrect because Import/Export does not support Cosmos DB as a destination.

- Cosmos DB requires data migration tools or APIs, not offline disk shipping.

**Option C. Azure Data Lake Store**

- Incorrect because Import/Export jobs cannot directly import into Data Lake Store.

- You would first import into Blob storage and then move data into Data Lake using other services (like Azure Data Factory).

**Option D. The Azure File Sync Storage Sync Service**

- Incorrect because Azure File Sync is used to synchronize on-premises file servers with Azure Files.

- It is not a destination for Import/Export jobs.

---

### Question 30

You have an on-premises server that contains a folder named D:\Important_Data.

You need to copy the contents of D:\Important_Data to the public container in an Azure Storage account named az104data.

Which command should you run?

**Options:**

- **A.** https://az104data.blob.core.windows.net/public
- **B.** azcopy sync D:\Important_Data https://az104data.blob.core.windows.net/public --snapshot
- **C.** azcopy copy D:\Important_Data https://az104data.blob.core.windows.net/public --recursive ✅
- **D.** az storage blob copy start-batch D:\Important_Data https://az104data.blob.core.windows.net/public

**Correct answer:** C

**Explanation:**

The azcopy copy command copies a directory (and all of the files in that directory) to a blob container. The result is a directory in the container by the same name.

Reference:

https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs

Quick Preview:

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

### Question 39

You have created a storage account named skillcertlabstore. You have created a file share named demo using the file service. You need to ensure that users can connect to the file share from their home computers. Which of the following port should be open to ensure the connectivity?

**Options:**

- **A.** A. 80
- **B.** B. 443
- **C.** C. 445 ✅
- **D.** D. 3389

**Correct answer:** C

**Explanation:**

This is clearly given in the Microsoft documentation

For more information on using file shares in Azure, please visit the below URL

https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-windows

---

### Question 40

**A company has created a storage account in their Azure subscription. The name of the storage account is **skillcertlabstore**. They have also created a file share named **demo**. They need to access the files. Which endpoint should be used?**

**Options:**

- **A.** A. blob
- **B.** B. blob.core.windows.net
- **C.** C. portal.azure.com
- **D.** D. file
- **E.** E. file.core.windows.net
- **F.** F. skillcertlabstore ✅

**Correct answer:** F

**Explanation:**

### Correct

**Option F. skillcertlabstore**

- Correct because the **storage account name** (skillcertlabstore) is required in the UNC path to access the Azure file share.

- The full path to access the file share would be: \\skillcertlabstore.file.core.windows.net\demo

- Without the storage account name, the endpoint cannot resolve to the correct file share.

### Incorrect

**Option A. blob**

- Incorrect because blob refers to Blob storage, not File storage.

- File shares cannot be accessed using the blob endpoint.

**Option B. blob.core.windows.net**

- Incorrect because this is the endpoint for Blob containers, not file shares.

**Option C. portal.azure.com**

- Incorrect because this is the Azure Portal URL, used for management, not for direct file share access.

**Option D. file**

- Incorrect because file alone is incomplete. It must be combined with the storage account name and domain.

**Option E. file.core.windows.net**

- Incorrect because while this is the correct domain for Azure Files, it is incomplete without the **storage account name** (skillcertlabstore).

###

---

### Question 42

**A company has created a storage account in their Azure subscription. The name of the storage account is **skillcertlabstore**. They have also created a file share named **demo**. They need to access the files. Which endpoint should be used?**

**Options:**

- **A.** A. blob
- **B.** B. blob.core.windows.net
- **C.** C. portal.azure.com
- **D.** D. file
- **E.** E. file.core.windows.net ✅
- **F.** F. skillcertlabstore

**Correct answer:** E

**Explanation:**

### Correct

**Option E. file.core.windows.net**

- Correct because Azure **File shares** are accessed via the **file.core.windows.net** endpoint.

- The full UNC path would be: \\skillcertlabstore.file.core.windows.net\demo

- This is the proper way to access Azure Files, ensuring connectivity to the file share.

### Incorrect

**Option A. blob**

- Incorrect because **blob** refers to Blob storage, not File storage.

- Blob storage is used for unstructured data, not file shares.

**Option B. blob.core.windows.net**

- Incorrect because this is the endpoint for **Blob storage containers**, not file shares.

**Option C. portal.azure.com**

- Incorrect because this is the Azure Portal URL, used for management, not for accessing file shares directly.

**Option D. file**

- Incorrect because file alone is incomplete. The correct endpoint must be file.core.windows.net.

**Option F. skillcertlabstore**

- Incorrect because this is just the **storage account name**, not the endpoint.

- It must be combined with the correct domain (file.core.windows.net) to form the full path.

###

---

### Question 43

You have an Azure Storage account named storage-01. You plan to use AzCopy to copy data to storage-01.

Which of the following are valid storage services in storage-01 that you can copy data to?

**Options:**

- **A.** blob, file, table, and queue
- **B.** blob and file only ✅
- **C.** file and table only
- **D.** file only
- **E.** blob, table, and queue only

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Blob and file only**

- AzCopy is a command-line utility designed specifically for copying data **to and from Azure Blob Storage and Azure File Storage**.

- It does **not** support copying directly to Table storage or Queue storage.

- Therefore, the valid services for AzCopy in this context are **Blob** and **File**.

### Incorrect

**Option A. Blob, file, table, and queue**

- Incorrect because AzCopy does not support Table or Queue storage.

- Including all four services is misleading.

**Option C. File and table only**

- Incorrect because AzCopy supports File but not Table.

- Table storage is excluded from AzCopy operations.

**Option D. File only**

- Incorrect because AzCopy supports both Blob and File, not just File.

- Limiting to File alone ignores Blob support.

**Option E. Blob, table, and queue only**

- Incorrect because Blob is supported, but Table and Queue are not.

- This option mixes valid and invalid services.

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

### Question 3

Scenario:
Your company is experiencing rapid growth and needs to deploy standardized sets of Azure resources (VMs, networks, storage accounts, etc.) across various environments (development, testing, production). This is a time-consuming process prone to manual errors and inconsistencies between environments.
Your team needs a solution that will:
1. Automate the deployment process to save time and reduce the chance of errors.
2. Standardize the configuration of resources across different environments to ensure consistency and reliability.
3. Streamline the management of infrastructure changes throughout the development lifecycle.
Question:
Which Azure tool would be the MOST efficient for defining and deploying these standardized infrastructure configurations across your different environments?

**Options:**

- **A.** Azure portal manual deployment
- **B.** Azure CLI commands
- **C.** Azure PowerShell scripts
- **D.** Azure Resource Manager (ARM) templates ✅

**Correct answer:** D

**Explanation:**

The  is Azure Resource Manager (ARM) templates. Here‘s why:
Declarative Infrastructure as Code: ARM templates are JSON files that define the desired state of your Azure resources. This declarative approach allows you to define your entire infrastructure in code, making it easy to version control, automate, and deploy consistently.
Modularity and Reusability: ARM templates can be broken down into smaller, reusable components (linked templates), making it easier to manage complex infrastructure.
Parameterization: You can parameterize ARM templates to customize deployments for different environments, providing flexibility while maintaining standardization.
Integration with DevOps Tools: ARM templates integrate seamlessly with Azure DevOps, enabling automated deployment pipelines for continuous integration and delivery (CI/CD).
Why other options are less suitable:
Azure PowerShell scripts: While powerful, PowerShell scripts require scripting knowledge and are less declarative than ARM templates.
Azure CLI commands: Similar to PowerShell, CLI commands require scripting and can be more difficult to manage for complex deployments.
Azure portal manual deployment: This is a time-consuming and error-prone approach, unsuitable for large-scale, standardized deployments.
Key Points:
ARM templates are the preferred method for defining and deploying infrastructure as code in Azure.
This scenario highlights the importance of automation, standardization, and infrastructure as code for efficient and reliable cloud infrastructure management.

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

### Question 8

Your development team is working on a new cloud-native application that requires highly scalable and available storage.
Which Azure Storage account type would be the best fit for their needs?

**Options:**

- **A.** Blob storage
- **B.** BlockBlobStorage
- **C.** File storage
- **D.** General-purpose v2 ✅

**Correct answer:** D

**Explanation:**

General-purpose v2 storage accounts are the most versatile and scalable option, making them suitable for a wide range of cloud-native applications that require different types of storage services.

---

### Question 9

You are designing a Bicep file to deploy a web application that requires multiple Azure services (e.g., App Service, SQL Database, Storage Account). Which Bicep modules or constructs can you use to organize your code, manage dependencies, and improve the overall readability and maintainability of the file?

**Options:**

- **A.** Modules ✅
- **B.** Conditions
- **C.** Variables
- **D.** Outputs

**Correct answer:** A

**Explanation:**

Modules in Bicep enable you to organize code into reusable components, improving readability and maintainability while managing dependencies.

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

### Question 17

You have an Azure subscription named Subscription1. You create an Azure Storage account named contosostorage, and then you create a file share named data.

Which UNC path should you include in a script that references files from the data file share?

\\  ……….  .  ………. \ ……….

Please select the correct order that forms the path, from the below options:

(1) blob

(2) contosostorage

(3) file

(4) portal.azure.com

(5) blob.core.windows.net

(6) data

(7) file.core.windows.net

(8) subscription1

**Options:**

- **A.** 2 – 5 – 6
- **B.** 2 – 7 – 6 ✅
- **C.** 2 – 4 – 6
- **D.** 6 – 5 – 1

**Correct answer:** B

**Explanation:**

### Correct

**Option B. 2 – 7 – 6**

- Correct because the proper UNC path for Azure Files is:

Code

\\&lt;storage-account-name&gt;.file.core.windows.net\&lt;file-share-name&gt;

- In this case:

- **2 = contosostorage** (storage account name)

- **7 = file.core.windows.net** (Azure Files endpoint)

- **6 = data** (file share name)

- So the correct UNC path is:

Code

\\contosostorage.file.core.windows.net\data

### Incorrect

**Option A. 2 – 5 – 6**

- Incorrect because blob.core.windows.net is used for **Blob storage**, not File shares.

- The UNC path must reference the **File service**, not Blob.

**Option C. 2 – 4 – 6**

- Incorrect because portal.azure.com is the Azure management portal, not a storage endpoint.

- It cannot be used in UNC paths for accessing file shares.

**Option D. 6 – 5 – 1**

- Incorrect because this mixes the file share name (data) with the Blob endpoint (blob.core.windows.net) and blob.

- This is not a valid UNC path for Azure Files.

###

---

### Question 19

You have several Azure virtual machines on a virtual network named vNET2. You configure an Azure Storage account as shown in the following exhibit:

Please select the option that is true for the following statement:

The virtual machines on 10.2.9.0/24 subnet will have network connectivity to the file shares in the storage account.

**Options:**

- **A.** always
- **B.** during a backup
- **C.** never ✅

**Correct answer:** C

**Explanation:**

Subnet 10.2.9.0/24 hasn’t been enabled under vNET2, only VMs in 10.2.0.0/24 will have access to file shares in this storage account.

Reference:

https://docs.microsoft.com/en-us/azure/storage/common/storage-network-security

Quick Preview:

---

### Question 31

Your company wants to deploy a blogging solution on Azure. Below are the key deployment requirements

– Ability to connect to Azure BLOB storage as the origin

– Ensure that users across the world get the same performance when they access the blogging site

You provide a solution of using the cloud tiering service. Does this solution meet the requirement?

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

The cloud tiering feature is used to ensure volumes have a percentage of free space when you use the Azure File Sync service. The ideal solution to use here is the Content Delivery service

For more information on cloud tiering, one can go to the below URL

https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-cloud-tiering

---

### Question 42

You have an Azure subscription that includes the following Azure file shares:

You have the following on-premises servers:

You create a Storage Sync Service named Sync1 and an Azure File Sync group named Group1. Group1 uses share1 as a cloud endpoint.

You register Server1 and Server2 in Sync1. You add D:\Folder1 on Server1 as a server endpoint of Group1.

Please evaluate if the following statement is True or False.

Share2 can be added as a cloud endpoint for Group1.

**Options:**

- **A.** TRUE
- **B.** FALSE ✅

**Correct answer:** B

**Explanation:**

Group1 already has a cloud endpoint named Share1.

A sync group must contain one cloud endpoint, which represents an Azure file share and one or more server endpoints.

Reference:

https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-deployment-guide?tabs=azure-portal%2Cproactive-portal

Quick Preview:

N

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

### Question 1

You need to configure lifecycle management policies for Azure Blob Storage to automatically transition objects to different storage tiers based on their age or usage patterns.
How would you implement these policies to optimize storage costs and data management?

**Options:**

- **A.** Set policies using Azure CLI
- **B.** Configure rules in Azure Portal
- **C.** Implement policy using ARM templates
- **D.** Use Azure Storage lifecycle management ✅

**Correct answer:** D

**Explanation:**

Azure Storage lifecycle management policies allow you to define rules that automatically transition objects to different storage tiers based on their age or usage patterns, optimizing storage costs and data management.

---

### Question 4

You need to allocate additional storage to an existing Azure VM. Which Azure Storage service should you use to attach extra disks to the VM and expand its storage capacity?

**Options:**

- **A.** Azure File Storage
- **B.** Azure Blob Storage
- **C.** Azure Managed Disks ✅
- **D.** Azure Disks

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Azure Managed Disks**

**Why correct:** Azure Managed Disks are the recommended storage option for attaching extra disks to Azure VMs. They provide simplified management, high availability, and durability. You can easily add managed disks to a VM to expand its storage capacity without worrying about the underlying storage account.

### Incorrect

**Option A. Azure File Storage** **Why incorrect:** Azure File Storage is designed for file shares accessible via SMB protocol. It is not used to attach disks directly to VMs.

**Option B. Azure Blob Storage** **Why incorrect:** Blob Storage is object storage for unstructured data (e.g., images, backups, logs). It cannot be directly attached as a disk to a VM.

**Option D. Azure Disks** **Why incorrect:** While Azure Disks exist conceptually, the actual recommended and supported way to attach disks to VMs is through **Azure Managed Disks**, which abstracts and manages Azure Disks for you. Choosing “Azure Disks” alone is incomplete and not the best practice answer for the exam.

###

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

### Question 10

Your company is migrating on-premises resources to Azure. How can you use Azure Site Recovery to protect and replicate virtual machines, ensuring business continuity and disaster recovery?

**Options:**

- **A.** Set up Azure Site Recovery to replicate on-premises VMs to Azure, creating recovery plans for failover in case of disaster. ✅
- **B.** Use Azure Site Recovery to configure load balancing for on-premises VMs.
- **C.** Use Azure Site Recovery to back up on-premises VMs to Azure Blob Storage.
- **D.** Use Azure Site Recovery to migrate on-premises VMs to Azure without any data replication.

**Correct answer:** A

**Explanation:**

Azure Site Recovery is a disaster recovery service that replicates VMs from on-premises or Azure to another Azure region, allowing for failover in case of primary site issues.

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

### Question 15

You are using Azure Site Recovery to replicate Azure VMs. Which network configurations and considerations are important to ensure successful replication and failover of VMs between Azure regions?

**Options:**

- **A.** NSG (Network Security Group) rules ✅
- **B.** Subnet configurations ✅
- **C.** Network connectivity between source and target regions ✅
- **D.** Reserved IP addresses ✅
- **E.** Virtual networks in both regions ✅

**Correct answer:** A, B, C, D, E

**Explanation:**

### Correct

**Option A. NSG (Network Security Group) rules** Correct because NSGs control inbound and outbound traffic to VMs. Proper NSG rules must be configured to allow replication traffic and ensure failover VMs can communicate after recovery.

**Option B. Subnet configurations** Correct because subnets must be properly defined in both source and target regions to ensure replicated VMs can be placed in the correct network segments during failover.

**Option C. Network connectivity between source and target regions** Correct because replication requires reliable connectivity between the source and target regions. Without proper connectivity, replication traffic cannot flow, and failover will fail.

**Option D. Reserved IP addresses** Correct because Azure Site Recovery requires consistent IP addressing for failover scenarios. Reserved IPs ensure that critical workloads retain the same IP addresses after failover, minimizing disruption.

**Option E. Virtual networks in both regions** Correct because failover VMs must be connected to a virtual network in the target region. Properly configured VNets in both regions are essential for replication and recovery.

###

---

### Question 23

Your team is developing a web application that requires access to Azure Storage resources. Which authorization mechanism would you use to grant the application the necessary permissions without compromising security?

**Options:**

- **A.** Shared Access Signatures (SAS)
- **B.** Shared Key Authentication
- **C.** None of the above
- **D.** Managed Identities ✅

**Correct answer:** D

**Explanation:**

Managed Identities offer the most secure and manageable way to grant your web application access to Azure Storage resources without the need to embed credentials in your code.

---

### Question 26

You are setting up Azure Blob Storage to store large scientific datasets.

Which storage tier would you choose to optimize for infrequent access and minimize storage costs while still ensuring data durability?

**Options:**

- **A.** Premium tier
- **B.** Archive tier
- **C.** Cool tier ✅
- **D.** Hot tier

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Cool tier**

- Correct.

- The **Cool tier** is designed for data that is infrequently accessed but must remain durable and available when needed.

- It offers lower storage costs compared to the **Hot tier**, while still ensuring high durability and availability.

- This makes it ideal for large scientific datasets that are not accessed frequently but must be retained securely.

### Incorrect

**Option A. Premium tier**

- Incorrect.

- The **Premium tier** is optimized for low-latency, high-throughput workloads where data is accessed frequently.

- It is the most expensive option and not suitable for infrequent access scenarios.

**Option B. Archive tier**

- Incorrect.

- The **Archive tier** provides the lowest storage cost but is intended for data that is rarely accessed and can tolerate **hours of retrieval latency**.

- Since scientific datasets may still need occasional access with reasonable performance, Archive is not the right choice here.

**Option D. Hot tier**

- Incorrect.

- The **Hot tier** is optimized for frequently accessed data.

- It has higher storage costs compared to the Cool tier, making it inefficient for infrequent access scenarios.

---

### Question 27

Scenario:

Your organization, a healthcare provider, is leveraging Azure Blob Storage to store vast amounts of sensitive patient data, including medical records, diagnostic images, and personal information. As the Azure Administrator responsible for data security, you need to implement comprehensive encryption mechanisms to protect this data and ensure compliance with HIPAA regulations.

Challenge:

The data needs to be protected both at rest within the storage account and in transit as it is transmitted over the network. You must choose the encryption mechanisms that provide the highest level of security and control while minimizing any impact on the performance and accessibility of the data.

Question:

Which encryption mechanisms should you implement in Azure Blob Storage to protect sensitive patient data at rest and in transit?

**Options:**

- **A.** Double encryption using both server-side encryption with customer-managed keys (SSE with CMK) and client-side encryption with keys stored in Azure Key Vault, along with HTTPS for in-transit encryption. ✅
- **B.** Server-side encryption with Microsoft-managed keys (SSE with Microsoft-managed keys) for both at-rest and in-transit encryption.
- **C.** Client-side encryption with keys stored in Azure Key Vault for at-rest encryption and HTTPS for in-transit encryption.
- **D.** Server-side encryption with customer-managed keys (SSE with CMK) for at-rest encryption and HTTPS for in-transit encryption.

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Double encryption using both SSE with CMK and client-side encryption with keys stored in Azure Key Vault, along with HTTPS for in-transit encryption** Correct because this provides the **highest level of security and control**.

- **At rest:** Data is encrypted twice — once by Azure Storage using customer-managed keys (CMK) and again by client-side encryption before upload.

- **In transit:** HTTPS ensures secure transmission over the network. This layered approach aligns with HIPAA compliance requirements and minimizes risk, though it introduces some complexity.

### Incorrect

**Option B. SSE with Microsoft-managed keys for both at-rest and in-transit encryption** Incorrect because while SSE with Microsoft-managed keys does encrypt data at rest, it provides less control compared to customer-managed keys. Also, in-transit encryption is not handled by SSE — HTTPS must be explicitly used.

**Option C. Client-side encryption with keys stored in Azure Key Vault for at-rest encryption and HTTPS for in-transit encryption** Incorrect because while client-side encryption adds security, relying solely on it without server-side encryption reduces manageability and compliance assurance. HIPAA typically requires stronger governance, which is better achieved with CMK.

**Option D. SSE with CMK for at-rest encryption and HTTPS for in-transit encryption** Incorrect because although this is a strong option (and often sufficient for compliance), it does not provide the **double encryption** that offers the highest level of protection. Option A is more comprehensive.

---

### Question 28

You are implementing Azure Storage for a media streaming application. Which storage access tier would you choose to optimize for streaming scenarios and reduce egress costs?

**Options:**

- **A.** Hot tier ✅
- **B.** Premium tier
- **C.** Archive tier
- **D.** Cool tier

**Correct answer:** A

**Explanation:**

The hot tier is optimized for frequently accessed data, providing low latency and high performance, making it ideal for streaming scenarios.

---

### Question 29

Scenario:
Your company‘s finance department is migrating their sensitive financial data to Azure. As the Azure Administrator, you‘re tasked with configuring a secure storage solution in Azure Storage. The finance team emphasizes the importance of data protection and compliance with industry regulations. They require that the data be encrypted both at rest and in transit to ensure confidentiality and integrity.
Question:
Which encryption options should you enable in the Azure Storage account to meet the finance department‘s security requirements and protect their sensitive financial data?

**Options:**

- **A.** Enable Azure Storage Service Encryption (SSE) with Microsoft-managed keys for data at rest and use client-side encryption for data in transit.
- **B.** Enable Azure Storage Service Encryption (SSE) with Microsoft-managed keys for data at rest and HTTPS for data in transit.
- **C.** Enable Azure Storage Service Encryption (SSE) with customer-managed keys stored in Azure Key Vault for data at rest and SMB 3.0 with encryption for data in transit. ✅
- **D.** Use Azure Disk Encryption for data at rest and HTTPS for data in transit.

**Correct answer:** C

**Explanation:**

More details:
Azure Storage Service Encryption (SSE) with customer-managed keys: This option provides the highest level of control over encryption keys for data at rest. By storing the keys in Azure Key Vault, the finance department can manage access and rotation of the keys independently, meeting their security and compliance needs.
SMB 3.0 with encryption: This protocol ensures that data in transit is encrypted when transferred between the storage account and client applications over a network, further enhancing the security of sensitive financial data.
Why other options are not as suitable:
Microsoft-managed keys offer a basic level of encryption, but they don‘t provide the same degree of control as customer-managed keys.
Azure Disk Encryption is designed for encrypting virtual machine disks, not directly for data within storage accounts.
Client-side encryption puts the responsibility of key management on the client application, which might not be ideal for the finance department‘s compliance requirements.

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

### Question 42

**You are designing a data archiving solution using Azure Blob Storage. How can you utilize blob lifecycle management policies to automatically move older data to archive tier storage and reduce storage costs?**

**Options:**

- **A.** Use Azure Storage lifecycle management policies ✅
- **B.** Set rules in Azure Blob Storage to transition data to the archive tier
- **C.** Implement blob lifecycle management policies using Azure Portal
- **D.** Define a lifecycle management policy with ‘Delete‘ action for old data

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Use Azure Storage lifecycle management policies**

- Correct because Azure Blob Storage supports **lifecycle management policies** that automatically transition data between tiers (Hot, Cool, Archive) based on rules such as age or last access time.

- This is the official and recommended way to reduce storage costs for older data.

### Incorrect

**Option B. Set rules in Azure Blob Storage to transition data to the archive tier**

- Incorrect because while this sounds close, it is not the precise terminology used in Azure. The exam expects recognition of **lifecycle management policies**, not generic “rules.”

**Option C. Implement blob lifecycle management policies using Azure Portal**

- Incorrect because although you can configure policies in the Azure Portal, the exam question is asking about the **feature itself**, not the interface. The correct answer is the feature name: **Azure Storage lifecycle management policies**.

**Option D. Define a lifecycle management policy with ‘Delete’ action for old data**

- Incorrect because the requirement is to **archive** older data, not delete it. The Delete action removes data permanently, which does not meet the goal of archiving.

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

### Question 58

You need to create an Azure Storage account that meets the following requirements:

– Minimizes costs

– Supports hot, cool, and archive blob tiers

– Provides fault tolerance if a disaster affects the Azure region where the account resides

How should you complete the command?

**Options:**

- **A.** az storage account create -n storageaccount1 -g RG1 --kind BlobStorage --sku Standard_GRS
- **B.** az storage account create -n storageaccount1 -g RG1 --kind Storage --sku Standard_GRS
- **C.** az storage account create -n storageaccount1 -g RG1 --kind StorageV2 --sku Standard_GRS ✅
- **D.** az storage account create -n storageaccount1 -g RG1 --kind StorageV2 --sku Standard_LRS
- **E.** az storage account create -n storageaccount1 -g RG1 --kind StorageV2 --sku Standard_GAGRS

**Correct answer:** C

**Explanation:**

Bash

az storage account create -n storageaccount1 -g RG1 --kind StorageV2 --sku Standard_GRS

This command creates a Storage V2 account with the Standard_GRS SKU, which meets all the specified requirements:

**Minimizes costs:** The Standard_GRS SKU offers cost-effective storage for long-term archival data.

**Supports hot, cool, and archive blob tiers:** Storage V2 accounts support all three tiers, allowing you to optimize storage costs based on data access frequency.

**Provides fault tolerance:** Azure Storage V2 is highly available and durable, with automatic replication across multiple regions to protect against data loss in case of a regional disaster.

https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy?toc=/azure/storage/blobs/toc.json#redundancy-in-a-secondary-region

---

## Practice Set 5

Source: https://skillcertpro.com/az-104-exam-questions/5/

### Question 4

You have an Azure Storage account named storage1 that contains a container named container1. The container1 container stores thousands of image files.

You plan to use an Azure Resource Manager (ARM) template to create a blob inventory rule named rule1.

You need to ensure that only blobs whose names start with the word “finance” are stored daily as a CSV file in container1.

You need to complete rule1.

Which value should you choose for **Placeholder 1**?

**Options:**

- **A.** appendBlob
- **B.** blockBlob ✅
- **C.** pageBlob

**Correct answer:** B

**Explanation:**

**blockBlob** is the **correct** answer. Block blobs are designed to store large amounts of unstructured data, such as images or backups, which is the use case described here with thousands of image files. Additionally, block blobs are more suitable for use cases where data needs to be frequently accessed, stored, or replaced (such as in a daily CSV file). This fits the requirements for the blob inventory rule where you need to filter blobs whose names start with “finance.”

**appendBlob** is **incorrect** because it is generally used for log data where the need is to continuously append new data. It is not optimized for image storage or daily CSV storage.

**pageBlob** is **incorrect** because page blobs are typically used for storing virtual hard disks (VHDs) for Azure virtual machines, not for storing images or daily CSV files.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction

- https://learn.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs–append-blobs–and-page-blobs

---

### Question 5

You have an Azure Storage account named storage1 that contains a container named container1. The container1 container stores thousands of image files.

You plan to use an Azure Resource Manager (ARM) template to create a blob inventory rule named rule1.

You need to ensure that only blobs whose names start with the word “finance” are stored daily as a CSV file in container1.

You need to complete rule1.

Which value should you choose for **Placeholder 2**?

**Options:**

- **A.** container1/*
- **B.** container1/finance ✅
- **C.** finance

**Correct answer:** B

**Explanation:**

**container1/finance** is the **correct** answer. According to the documentation, the prefix match string in a blob policy must always start with the container name followed by the desired blob name prefix. In this case, “container1” is the container, and “finance” is the required blob prefix, making container1/finance the appropriate match string for blobs starting with the word “finance.”

**container1/*** is **incorrect** because it would match all blobs within the container and not only those starting with “finance.”

**finance** is **incorrect** because it does not include the container name as required by the blob policy format.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-faq#the-blob-prefix-match-string-didn-t-apply-the-policy-to-the-expected-blobs

---

### Question 6

You have an Azure Storage account named storage1 that stores images.
You need to create a new storage account and replicate the images in storage1 to the new account by using object replication.
You need to configure the new account.
Which account type should you choose?

**Options:**

- **A.** StorageV2 only
- **B.** StorageV2 or FileStorage only
- **C.** StorageV2 or BlobStorage only ✅
- **D.** StorageV2, BlobStorage, or FileStorage

**Correct answer:** C

**Explanation:**

StorageV2 or BlobStorage only is correct because object replication is supported by both general-purpose v2 storage accounts (StorageV2) and premium block blob storage accounts (BlobStorage). These account types meet the requirements for object replication, allowing replication of blobs between the source and destination accounts.
StorageV2 only is incorrect because while StorageV2 supports object replication, premium block blob storage accounts (BlobStorage) also support object replication, and they should not be excluded from the correct answer.
StorageV2 or FileStorage only and StorageV2, BlobStorage, or FileStorage are incorrect because FileStorage accounts do not support blob storage, which is necessary for object replication.
Reference(s):
https://learn.microsoft.com/en-us/azure/storage/blobs/object-replication-overview

---

### Question 9

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.
You have an Azure Storage account named storage1.
You need to enable a user named User1 to list and regenerate storage account keys for storage1.
Solution: You assign the Storage Account Key Operator Service Role to User1.
Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Yes is correct because the Storage Account Key Operator Service Role grants the necessary permissions to list and regenerate storage account keys without providing broader access to the storage account‘s data. This role is specifically designed for key management tasks, allowing the user to perform actions related to storage account keys.
Assigning this role to User1 will enable them to list and regenerate the keys for storage1 as required.
Reference(s):
https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-account-key-operator-service-role
https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal

---

### Question 10

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.
You have an Azure Storage account named storage1.
You need to enable a user named User1 to list and regenerate storage account keys for storage1.
Solution: You assign the Reader and Data Access role to User1.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No is correct because the Reader and Data Access role allows a user to view storage account data and metadata but does not provide the necessary permissions to list or regenerate storage account keys. To achieve the goal of allowing User1 to list and regenerate storage account keys, the appropriate role would be the Storage Account Key Operator Service Role or a more privileged role like Contributor.
The Reader and Data Access role is insufficient for key management tasks.
Reference(s):
https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-account-key-operator-service-role

---

### Question 14

You have a Microsoft Entra tenant that is linked to the subscriptions shown in the following table.

You have the resource groups shown in the following table.

You assign roles to users as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User2 can create a new storage account in RG1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because User2 has the Storage Account Contributor role assigned specifically to storage1, not to the entire resource group (RG1). The Storage Account Contributor role allows User2 to manage the specific storage account (storage1) but does not provide the ability to create new storage accounts or manage other resources within RG1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-account-contributor

---

### Question 21

You need to upload large files to **Azure Blob Storage** efficiently. Which tools or libraries would you recommend for optimizing the upload process and ensuring reliable data transfer?

**Options:**

- **A.** Azure Storage Estimator
- **B.** Azure Blob Storage client library for .NET ✅
- **C.** Azure Data Box
- **D.** AzCopy ✅

**Correct answer:** B, D

**Explanation:**

### Correct

**Option B. Azure Blob Storage client library for .NET**

- Correct because the **Blob Storage client libraries** (for .NET, Python, Java, etc.) support advanced features like **chunked uploads, retries, and parallel transfers**.

- They are designed to handle large files efficiently and ensure reliability during data transfer.

- Developers can integrate these libraries directly into applications for programmatic control.

**Option D. AzCopy**

- Correct because **AzCopy** is a command-line utility optimized for transferring large amounts of data to and from Azure Blob Storage.

- It supports **parallelism, resumable uploads, and high-performance transfers**, making it ideal for bulk or large file uploads.

- Recommended by Microsoft for production-scale data movement.

### Incorrect

**Option A. Azure Storage Estimator**

- Incorrect because the **Storage Estimator** is a planning tool used to estimate costs and capacity requirements.

- It does not upload files or optimize transfers.

**Option C. Azure Data Box**

- Incorrect because **Data Box** is a physical appliance used for **offline bulk data transfer** to Azure.

- It is not intended for routine large file uploads over the network, but rather for scenarios involving **massive datasets** where online transfer is impractical.

###

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

### Question 24

You have an Azure subscription. You create the Azure Storage account shown in the following exhibit:

Please select the answer choice that completes the following statement based on the information presented in the graphic.

The minimum number of copies of the storage account will be ………. .

**Options:**

- **A.** 1
- **B.** 2
- **C.** 3 ✅
- **D.** 4

**Correct answer:** C

**Explanation:**

### Correct

**Option C. 3**

- This is the correct answer.

- By default, when you create an Azure Storage account with **Locally Redundant Storage (LRS)**, Azure maintains **three copies** of your data within a single datacenter.

- These three copies ensure durability and protection against hardware failures.

- The minimum number of copies is therefore **3**, not 1, 2, or 4.

### Incorrect

**Option A. 1**

- Incorrect because Azure never stores just a single copy of data.

- At least three copies are maintained for redundancy.

**Option B. 2**

- Incorrect because two copies would not meet Azure’s durability requirements.

- The minimum is three copies, even for LRS.

**Option D. 4**

- Incorrect because four copies are not the minimum.

- Some replication options (like **ZRS or GRS**) may involve more than three copies across zones or regions, but the minimum baseline is **3**.

---

### Question 25

You‘re working with an ARM template that deploys multiple resources. You need to ensure that a specific resource (e.g., a storage account) is created before other resources that depend on it. Which ARM template concept should you use to enforce this dependency order?

**Options:**

- **A.** DependsOn ✅
- **B.** Tags
- **C.** Resources
- **D.** Outputs

**Correct answer:** A

**Explanation:**

The ‘dependsOn‘ property in ARM templates ensures that resources are created in the correct order, with dependencies enforced.

---

### Question 30

You are configuring a storage account for a web application that requires frequent access to static content like images and CSS files. Which storage access tier would be the most cost-effective option for this scenario?

**Options:**

- **A.** Archive
- **B.** Premium
- **C.** Hot ✅
- **D.** Cool

**Correct answer:** C

**Explanation:**

The Hot access tier is the most cost-effective option for a web application that requires frequent access to static content. It balances performance and cost by optimizing for frequently accessed data, ensuring fast retrieval of images and CSS files for your website visitors while keeping storage costs reasonable.

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

### Question 37

**You have an Azure subscription. You create the Azure Storage account shown in the exhibit. Based on the information presented, select the answer choice that completes the following statement correctly.**

“To reduce the cost of infrequently accessed data in the storage account, you must modify the __________ setting.”

Please select the answer choice that completes the following statement based on the information presented in the graphic.

To reduce the cost of infrequently accessed data in the storage account, you must modify the ……….  setting.

**Options:**

- **A.** Access tier (default) ✅
- **B.** Performance
- **C.** Account kind
- **D.** Replication

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Access tier (default)**

- Correct because the **Access tier (Hot, Cool, Archive)** setting determines the cost model for data stored in Azure Blob Storage.

- For **infrequently accessed data**, switching from **Hot** to **Cool** or **Archive** reduces storage costs.

- Hot tier = optimized for frequent access (higher cost).

- Cool tier = lower cost, moderate access latency.

- Archive tier = lowest cost, but retrieval can take hours.

- Therefore, modifying the **Access tier (default)** is the right way to reduce costs for infrequently accessed data.

### Incorrect

**Option B. Performance**

- Incorrect because Performance refers to **Standard vs Premium storage**.

- Premium is optimized for low‑latency workloads, not cost savings for infrequent access.

**Option C. Account kind**

- Incorrect because Account kind defines the **type of storage account** (General Purpose v2, BlobStorage, etc.).

- While GPv2 supports tiering, the actual cost optimization comes from modifying the **Access tier**, not the account kind itself.

**Option D. Replication**

- Incorrect because Replication (LRS, GRS, RA‑GRS, ZRS) affects **durability and availability across regions**, not cost optimization for infrequently accessed data.

###

---

### Question 40

Your organization is expanding its presence in Southeast Asia. You need to create a new storage account that will be accessed primarily by users in that region.
How can you ensure optimal performance and compliance with data sovereignty regulations?

**Options:**

- **A.** Create the storage account in the Southeast Asia region. ✅
- **B.** Create the storage account in the East US region.
- **C.** Create the storage account in the West Europe region.
- **D.** Create the storage account in any Azure region.

**Correct answer:** A

**Explanation:**

Creating the storage account in the Southeast Asia region ensures optimal performance by minimizing latency and adhering to data sovereignty regulations by keeping data within the required geographic boundaries.

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

### Question 50

A company currently has an Azure Web App in place located in the Central US region. After deployment of the application to users across the world, some of the users are complaining of slow response times. Which of the following can be done to improve the response times for the web application to users across the world?

**Options:**

- **A.** A. Scale up the App service plan
- **B.** B. Configure an Azure Content Delivery Network endpoint ✅
- **C.** C. Scale out the App Service plan
- **D.** D. Place the web application onto Azure BLOB storage

**Correct answer:** B

**Explanation:**

You can better response times for users across the world by using the Azure Content Delivery service. The Microsoft documentation mentions the following

Options A and C are incorrect since scaling here is not the issue

Option D is incorrect since using Azure Web Apps is the right service for the web application

For more information on the Azure CDN service, please visit the below URL

https://docs.microsoft.com/en-us/azure/cdn/cdn-overview

---

### Question 52

A company has setup a web application on a set of Azure virtual machines. The web application will be used by users across the world. The company is planning on setting up a Content Delivery profile to ensure that users get the ideal response times no matter where they are located.

Which of the following would they need to fill out additionally to complete the configuration of the CDN Endpoint?

**Options:**

- **A.** A. Storage Account Keys
- **B.** B. Cloud Service Name
- **C.** C. App Service Plan
- **D.** D. Origin hostname ✅

**Correct answer:** D

**Explanation:**

Since this is clear from the implementation, all other options are incorrect

For more information on creating endpoints, please visit the below URL

https://docs.microsoft.com/en-us/azure/cdn/cdn-create-endpoint-how-to

---

### Question 54

You have an Azure subscription that contains an Azure Storage account.

You plan to create an Azure container instance named container1 that will use a Docker image named Image1. Image1 contains a Microsoft SQL Server instance that requires persistent storage.

You need to configure a storage service for Container1.

What should you use?

**Options:**

- **A.** Azure Files ✅
- **B.** Azure Blob storage
- **C.** Azure Queue storage
- **D.** Azure Table storage

**Correct answer:** A

**Explanation:**

Azure file shares can be used as persistent volumes for stateful containers. Containers deliver “build once, run anywhere” capabilities that enable developers to accelerate innovation. For the containers that access raw data at every start, a shared file system is required to allow these containers to access the file system no matter which instance they run on.

https://docs.microsoft.com/en-us/azure/storage/files/storage-files-introduction

INCORRECT ANSWERS:

Azure Blob storage –  Blob storage is optimized for storing massive amounts of unstructured data.

Azure Queue storage – Queue storage is for storing messages in distributed applications.

Azure Table storage – Table storage is for storing semi-structured data.

---

### Question 11

You have an Azure subscription.
You plan to create an Azure container registry named ContReg1.
You need to ensure that you can push and pull signed images for ContReg1.
What should you do for ContReg1?

**Options:**

- **A.** Enable encryption by using a customer-managed key.
- **B.** Create a connected registry.
- **C.** Add a token.
- **D.** Enable content trust. ✅

**Correct answer:** D

**Explanation:**

Enable content trust is the correct answer here. To ensure that you can push and pull signed container images in ContReg1, you need to enable content trust. Content trust ensures that the integrity of the images is maintained by verifying that the images are signed and have not been tampered with. This allows only trusted and signed images to be pushed and pulled from the registry.
Enable encryption by using a customer-managed key is incorrect because encryption protects data at rest but does not address image signing.
Create a connected registry is incorrect because connected registries are used for geo-replication and scaling deployments but do not address signed images.
Add a token is incorrect because tokens are used to manage authentication for accessing the registry, not for image signing.
Reference(s):
https://learn.microsoft.com/en-us/azure/container-registry/container-registry-content-trust
https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview

---

### Question 12

You create an Azure Storage account.

You plan to add 10 blob containers to the storage account.

For one of the containers, you need to use a different key to encrypt data at rest.

What should you do before you create the container?

**Options:**

- **A.** Rotate the access keys.
- **B.** Create an encryption scope. ✅
- **C.** Modify the minimum TLS version.
- **D.** Generate a shared access signature (SAS).

**Correct answer:** B

**Explanation:**

**Create an encryption scope** is the **correct** answer because to use a different key for encrypting data at rest for a specific blob container, you need to create an encryption scope in Azure Storage. Once created, the encryption scope can be assigned to individual containers, allowing them to use a distinct encryption key.

**Rotate the access keys** is **incorrect** because rotating access keys changes the authentication keys used to access the storage account but does not provide a way to use a different encryption key for a specific container.

**Modify the minimum TLS version** is **incorrect** because modifying the TLS version affects the security protocol for data in transit, not the encryption of data at rest.

**Generate a shared access signature (SAS)** is **incorrect** because a SAS provides controlled access to the storage account resources but does not influence encryption settings for data at rest.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/blobs/encryption-scope-overview

- https://learn.microsoft.com/en-us/azure/storage/blobs/encryption-scope-manage?tabs=portal

---

### Question 15

You have an Azure Storage account named storage1 that contains a blob container named container1.
You need to prevent new content added to container1 from being modified for one year.
What should you configure?

**Options:**

- **A.** The Access control (IAM) settings
- **B.** An access policy ✅
- **C.** The access level
- **D.** The access tier

**Correct answer:** B

**Explanation:**

An access policy is the correct answer because it allows you to configure immutability policies, such as time-based retention or legal hold, on a blob container. To prevent new content in the container from being modified for one year, you would set a time-based retention policy using a stored access policy that specifies the duration of the immutability period.
The Access control (IAM) settings is incorrect because IAM settings control role-based access to the storage account, not the immutability or modification rights of the data itself.
The access level is incorrect because this refers to the public access settings of the container, which determine if blobs are publicly accessible over the internet. It doesn‘t affect the ability to modify data within the container.
The access tier is incorrect because it defines the storage tier (Hot, Cool, or Archive) based on usage and access frequency, but it does not control modification or retention of content.
Reference(s):
https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview
https://docs.microsoft.com/en-us/azure/storage/blobs/immutable-time-based-retention-policy-overview

---

### Question 19

**You have an on‑premises server that contains a folder named **D:\Folder1**. You need to copy the contents of **D:\Folder1** to the public container in an Azure Storage account named **contosodata**. Which command should you run?**

**Options:**

- **A.** az storage blob copy start D:\Folder1 https://contosodata.blob.core.windows.net/public
- **B.** azcopy copy D:\folder1 https://contosodata.blob.core.windows.net/public --recursive ✅
- **C.** azcopy sync D:\folder1 https://contosodata.blob.core.windows.net/public --snapshot
- **D.** az storage blob copy start-batch D:\Folder1 https://contosodata.blob.core.windows.net/public

**Correct answer:** B

**Explanation:**

### Correct

**Option B. azcopy copy D:\folder1 ****https://contosodata.blob.core.windows.net/public**** –recursive**

- Correct because **AzCopy** is the recommended tool for copying files from on‑premises to Azure Blob Storage.

- The copy command with the --recursive flag ensures that all files and subfolders inside D:\Folder1 are copied into the specified container.

- This is the exact syntax required for bulk data transfer into Blob Storage.

### Incorrect

**Option A. az storage blob copy start**

- Incorrect because this command is used to copy blobs **within Azure Storage**, not from an on‑premises folder.

- It cannot directly copy local files into Blob Storage.

**Option C. azcopy sync … –snapshot**

- Incorrect because sync is used to synchronize differences between a source and destination, not for initial bulk copy.

- The --snapshot flag is not valid for this scenario.

**Option D. az storage blob copy start-batch**

- Incorrect because start-batch is also intended for copying blobs between Azure storage accounts or containers.

- It does not support copying local files from a server folder.

###

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

### Question 29

You need to create an Azure Storage account named storage1. The solution must meet the following requirements:
Support Azure Data Lake Storage.
Minimize costs for infrequently accessed data.
Automatically replicate data to a secondary Azure region.
Which three options should you configure for storage1?

**Options:**

- **A.** geo-redundant storage (GRS) ✅
- **B.** hierarchical namespace ✅
- **C.** zone-redundant storage (ZRS)
- **D.** the Hot access tier
- **E.** the Cool tier ✅

**Correct answer:** A, B, E

**Explanation:**

geo-redundant storage (GRS) is correct because the requirement states that data must automatically replicate to a secondary Azure region. GRS provides this replication capability, ensuring redundancy across regions.
hierarchical namespace is correct because enabling the hierarchical namespace is necessary to support Azure Data Lake Storage, which uses this feature to organize data in a directory-based structure.
the Cool tier is correct because the Cool access tier minimizes costs for infrequently accessed data. This is aligned with the requirement to reduce costs for such data usage scenarios.
zone-redundant storage (ZRS) is incorrect because ZRS replicates data only within a single region across availability zones and does not provide cross-region replication, which is a requirement in this scenario.
the Hot access tier is incorrect because the Hot tier is optimized for frequently accessed data, which would result in higher costs for infrequently accessed data, contradicting the requirement to minimize costs.
Reference(s):
https://learn.microsoft.com/en-us/azure/storage/common/storage-account-options
https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction

---

### Question 30

You have an Azure subscription that contains a user named User1 and the resources shown in the following table.

NSG1 is associated to networkinterface1.

User1 has role assignments for NSG1 as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User1 can modify the DNS settings of networkinterface1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because User1 has the Contributor role assigned only at the NSG1 resource scope, not at the networkinterface1 scope. The Contributor role on NSG1 allows User1 to manage the Network Security Group (NSG1), but it does not extend permissions to manage or modify DNS settings of the associated network interface (networkinterface1).

Additionally, the Reader role at the Subscription level only grants read permissions and does not allow modification of resources. Similarly, the Storage Account Contributor role at the Resource Group (RG1) level is specific to storage accounts and does not provide permissions to modify network interface settings.

Therefore, User1 cannot modify the DNS settings of networkinterface1.

**Reference(s):**

https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

https://learn.microsoft.com/en-us/azure/role-based-access-control/overview

https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal

---

### Question 33

You have an Azure subscription that contains an Azure Storage account.

You plan to copy an on-premises virtual machine image to a container named vmimages.

You need to create the container for the planned image.

You need to run the below command.

Which command should you run?

**Options:**

- **A.** azcopy sync ‘https://mystorageacount. blob .core.windows.net/vmimages’
- **B.** azcopy make ‘https://mystorageacount.queue.core.windows.net/vmimages’
- **C.** azcopy copy ‘https://mystorageacount.table.core.windows.net/vmimages’
- **D.** azcopy sync ‘https://mystorageacount.dfs.core.windows.net/vmimages’
- **E.** azcopy make ‘https://mystorageacount.blob.core.windows.net/vmimages’ ✅
- **F.** azcopy copy ‘https://mystorageacount.images.core.windows.net/vmimages’

**Correct answer:** E

**Explanation:**

**azcopy make ‘https://mystorageaccount.blob.core.windows.net/vmimages’** is **correct** because the make command in **AzCopy** is specifically used to **create a new container** in an Azure Blob Storage account.

- The **blob** endpoint (blob.core.windows.net) is the correct endpoint for creating containers in **Blob Storage**.

- The container name **vmimages** indicates that it is intended for storing blobs, which aligns with the **blob** endpoint.

- The correct syntax for creating a new blob container using AzCopy is:

azcopy make ‘https://&lt;storage-account-name&gt;.blob.core.windows.net/&lt;container-name&gt;’

azcopy sync ‘https://mystorageaccount.blob.core.windows.net/vmimages’

Sync is used to **synchronize data between a source and a destination**, not to create a container.

azcopy make ‘https://mystorageaccount.queue.core.windows.net/vmimages’

The **queue** endpoint is for Azure Queue Storage, not Blob Storage.

azcopy copy ‘https://mystorageaccount.table.core.windows.net/vmimages’

The **table** endpoint is for Azure Table Storage, not Blob Storage.

azcopy sync ‘https://mystorageaccount.dfs.core.windows.net/vmimages’

The **dfs** endpoint is for Azure Data Lake Storage, not Blob Storage.

azcopy copy ‘https://mystorageaccount.images.core.windows.net/vmimages’

The **images** endpoint is invalid in Azure Storage.

**Reference(s)**:

https://learn.microsoft.com/en-us/azure/storage/common/storage-ref-azcopy-make

---

### Question 36

Your network contains an on-premises Active Directory Domain Services (AD DS) domain.

The domain contains the identities shown in the following table.

You have an Azure subscription that contains a storage account named storage1. The file shares in storage1 have an identity source of AD DS and Default share-level permissions set to Enable permissions for all authenticated users and groups.

You create an Azure Files share named share1 that has the roles shown in the following table.

You have a Microsoft Entra tenant that contains a cloud-only user named User3.

You use Microsoft Entra Connect to sync OU1 from the AD DS domain to the Microsoft Entra tenant.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User2 can access content in share1.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is **correct** because it is part of OU1 and OU1 is synced to Microsoft Entra ID. Also, User2 is assigned SMB File Reader role so it can access the content in share1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/files/storage-files-identity-ad-ds-assign-permissions?tabs=azure-portal

---

### Question 37

Your network contains an on-premises Active Directory Domain Services (AD DS) domain.

The domain contains the identities shown in the following table.

You have an Azure subscription that contains a storage account named storage1. The file shares in storage1 have an identity source of AD DS and Default share-level permissions set to Enable permissions for all authenticated users and groups.

You create an Azure Files share named share1 that has the roles shown in the following table.

You have a Microsoft Entra tenant that contains a cloud-only user named User3.

You use Microsoft Entra Connect to sync OU1 from the AD DS domain to the Microsoft Entra tenant.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User3 can access content in share1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** as this user is a cloud-only user, and there is no indication that User3 has been assigned any permissions on share1. Without explicit role assignments, User3 cannot access share1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/files/storage-files-identity-ad-ds-assign-permissions?tabs=azure-portal

---

### Question 39

You have an Azure subscription that contains a storage account named storage1.
You need to allow access to storage1 from selected networks and your home office. The solution must minimize administrative effort.
What should you do first for storage1?

**Options:**

- **A.** Add a private endpoint.
- **B.** Modify the Public network access settings. ✅
- **C.** Select Internet routing.
- **D.** Modify the Access Control (IAM) settings.

**Correct answer:** B

**Explanation:**

Modify the Public network access settings is the correct answer here. To allow access to storage1 from selected networks and your home office while minimizing administrative effort, you should first modify the Public network access settings. By selecting the option to allow access only from selected virtual networks and IP addresses, you can define specific networks and IP addresses, such as your home office‘s public IP address, without needing to configure more complex solutions like private endpoints.
Add a private endpoint is incorrect because private endpoints require additional setup and would only allow access through a private network, not minimizing administrative effort.
Select Internet routing is incorrect because this would open the storage account to access from the internet, which doesn‘t fulfill the requirement of limiting access to selected networks and your home office.
Modify the Access Control (IAM) settings is incorrect because IAM controls user and group permissions for accessing resources but does not control network access.
Reference(s):
https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security?tabs=azure-portal
https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security?tabs=azure-portal#public-network-access

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

### Question 46

You have an Azure subscription that contains a Standard SKU Azure container registry named ContReg1.
You need to ensure that ContReg1 supports geo-replication.
What should you do first for ContReg1?

**Options:**

- **A.** Enable Admin user.
- **B.** Add a scope map.
- **C.** Add an automation task.
- **D.** Create a cache rule.
- **E.** Upgrade the SKU. ✅

**Correct answer:** E

**Explanation:**

Upgrade the SKU is the correct answer here. Geo-replication in Azure Container Registry is only supported in the Premium SKU. Since ContReg1 is currently using the Standard SKU, the first step to enable geo-replication is to upgrade the SKU to Premium. Once the SKU is upgraded, you can configure geo-replication across multiple regions.
Enable Admin user is incorrect because this is related to authentication and does not enable geo-replication.
Add a scope map is incorrect because scope maps are used for defining permissions for tokens, not for geo-replication.
Add an automation task is incorrect because automation tasks are used for building and pushing images, not for geo-replication.
Create a cache rule is incorrect because cache rules are unrelated to geo-replication.
Reference(s):
https://learn.microsoft.com/en-us/azure/container-registry/container-registry-geo-replication
https://learn.microsoft.com/en-us/azure/container-registry/container-registry-skus

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

### Question 7

You have an Azure subscription that contains a virtual machine named VM1.

To VM1, you plan to add a 1-TB data disk that meets the following requirements:

Provides data resiliency in the event of a datacenter outage.

Provides the lowest latency and the highest performance.

Ensures that no data loss occurs if a host fails.

Which storage type would you recommend?

**Options:**

- **A.** Premium SSD that uses locally-redundant storage (LRS)
- **B.** Premium SSD that uses zone-redundant storage (ZRS) ✅
- **C.** Standard SSD that uses locally-redundant storage (LRS)
- **D.** Standard SSD that uses zone-redundant storage (ZRS)

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Premium SSD that uses zone-redundant storage (ZRS)** This is correct because **Premium SSD ZRS** provides:

- **High performance and low latency** (Premium SSDs are optimized for IOPS and throughput).

- **Resiliency across Availability Zones** (ZRS replicates data synchronously across three zones in a region, protecting against datacenter-level failures).

- **No data loss if a host fails** (ZRS ensures durability and availability).

This option meets all requirements with minimal complexity.

### Incorrect

**Option A. Premium SSD that uses locally-redundant storage (LRS)** Incorrect because LRS replicates data only within a single datacenter. While it provides performance, it does not protect against datacenter outages, failing the resiliency requirement.

**Option C. Standard SSD that uses locally-redundant storage (LRS)** Incorrect because Standard SSDs provide lower performance compared to Premium SSDs. LRS also lacks resiliency against datacenter outages. This option fails both the performance and resiliency requirements.

**Option D. Standard SSD that uses zone-redundant storage (ZRS)** Incorrect because while ZRS provides resiliency across zones, Standard SSDs do not deliver the lowest latency or highest performance. This option fails the performance requirement.

###

---

### Question 9

You have an Azure subscription that contains the storage accounts shown in the following table.

You need to identify which storage accounts support lifecycle management.

What should you identify for the above requirement?

**Options:**

- **A.** storage1 only
- **B.** storage2 only
- **C.** storage1 and storage3 only
- **D.** storage2 and storage3 only
- **E.** storage1, storage2, and storage3 ✅

**Correct answer:** E

**Explanation:**

### Correct

**Option E. storage1, storage2, and storage3** Explanation: This is correct. In Azure, **lifecycle management** is supported for **General-purpose v2 (GPv2), Blob storage accounts, and Premium Block Blob storage accounts**. These account types allow you to define rules to automatically transition blobs between access tiers (Hot, Cool, Archive) or delete them after a specified period. Since all three storage accounts in the scenario meet these requirements, they all support lifecycle management.

### Incorrect

**Option A. storage1 only** Incorrect. Lifecycle management is not limited to just one account type. Multiple storage account types support it, so this option is incomplete.

**Option B. storage2 only** Incorrect. Similar to Option A, this is incomplete. Lifecycle management is supported by more than one account type.

**Option C. storage1 and storage3 only** Incorrect. This excludes storage2, which also supports lifecycle management.

**Option D. storage2 and storage3 only** Incorrect. This excludes storage1, which also supports lifecycle management.

###

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

### Question 12

You have an Azure subscription.

You plan to deploy a new storage account.

You need to configure encryption for the account. The solution must meet the following requirements:

Use a customer-managed key stored in a key vault.

Use the maximum supported bit length.

Which type of key should you use?

**Options:**

- **A.** AES
- **B.** 3DES
- **C.** RSA ✅

**Correct answer:** C

**Explanation:**

### Correct

**Option C. RSA**

- Correct because Azure Storage supports **customer‑managed keys (CMK)** stored in **Azure Key Vault**, and these keys must be **RSA keys**.

- The maximum supported bit length for RSA keys in Azure Key Vault is **RSA 4096**, which satisfies the requirement for maximum strength.

- AES is used internally for data encryption at rest, but when you configure CMK, you provide an RSA key for wrapping/unwrapping the AES encryption keys.

### Incorrect

**Option A. AES**

- Incorrect because while Azure Storage uses **AES‑256** for encrypting data at rest, you cannot directly store or manage AES keys in Key Vault for CMK scenarios.

- AES is the algorithm used internally, but the customer‑managed key must be RSA.

**Option B. 3DES**

- Incorrect because **Triple DES (3DES)** is deprecated and not supported for Azure Storage encryption.

- It does not meet modern security standards and is not available as a CMK option in Key Vault.

###

---

### Question 13

**You have an Azure Storage account named **storage1**. You plan to use AzCopy to copy data to **storage1**. You need to identify the storage services in **storage1** to which you can copy the data. Which storage services should you identify?**

**Options:**

- **A.** file only
- **B.** blob and file only ✅
- **C.** file and table only
- **D.** blob, table, and queue only
- **E.** blob, file, table, and queue

**Correct answer:** B

**Explanation:**

### Correct

**Option B. blob and file only**

- Correct because **AzCopy** is a command‑line utility designed specifically for copying data to and from **Azure Blob Storage** and **Azure Files**.

- It supports uploads, downloads, and synchronization for these two services.

- AzCopy does **not** support copying data directly into **Table Storage** or **Queue Storage**, which are structured and messaging services rather than file/object storage.

### Incorrect

**Option A. file only**

- Incorrect because AzCopy supports both **Blob** and **File** services, not just File.

**Option C. file and table only**

- Incorrect because AzCopy does not support **Table Storage**.

- It only supports Blob and File.

**Option D. blob, table, and queue only**

- Incorrect because while Blob is supported, **Table** and **Queue** are not supported by AzCopy.

**Option E. blob, file, table, and queue**

- Incorrect because this suggests AzCopy supports all four storage services, which is not true.

- Only Blob and File are supported.

###

---

### Question 15

You have an Azure subscription that contains a virtual machine named VM1 and an Azure key vault named KV1.
You need to configure encryption for VM1. The solution must meet the following requirements:
Store and use the encryption key in KV1.
Maintain encryption if VM1 is downloaded from Azure.
Encrypt both the operating system disk and the data disks.
Which encryption method should you use?

**Options:**

- **A.** customer-managed keys
- **B.** Azure Disk Encryption ✅
- **C.** Confidential disk encryption
- **D.** encryption at host

**Correct answer:** B

**Explanation:**

Azure Disk Encryption is correct because it supports encrypting both the operating system and data disks of virtual machines using customer-managed keys stored in an Azure Key Vault. It ensures that the encryption persists even if the virtual machine disks are downloaded from Azure, meeting the specified requirements.
customer-managed keys is incorrect because while they allow managing encryption keys in Azure Key Vault, they are typically used for server-side encryption at the storage account level, not for encrypting the disks of virtual machines directly.
Confidential disk encryption is incorrect because it is designed for confidential computing environments where the data is encrypted in use, but it doesn‘t meet the requirement to persist encryption when VM disks are downloaded.
encryption at host is incorrect because this feature encrypts data stored on the host for VMs but does not encrypt the disks themselves, nor does it persist when the VM is downloaded.
Reference(s):
https://learn.microsoft.com/en-us/azure/virtual-machines/linux/disk-encryption-overview
https://learn.microsoft.com/en-us/azure/key-vault/general/customer-managed-keys-overview

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

### Question 20

You have an Azure subscription named Subscription1 that contains the following resource group:

- Name: RG1

- Region: West US

- Tag: “tag1”: “value1”

You assign an Azure policy named Policy1 to Subscription1 by using the following configurations:

- Exclusions: None

- Policy definition: Append a tag and its value to resources

- Assignment name: Policy1

- Parameters:

- Tag name: tag2

- Tag value: value2

After Policy1 is assigned, you create a storage account that has the following configurations:

- Name: storage1

- Region: West US

- Resource group: RG1

- Tags: “tag3”: “value3”

Which tags are assigned to **RG1**?

**Options:**

- **A.** “tag1“ : “value1“ only ✅
- **B.** “tag2“ : “value2“ only
- **C.** “tag1“ : “value1“ and “tag2“ : “value2“

**Correct answer:** A

**Explanation:**

### Correct

**Option A. “tag1” : “value1” only**

- Correct because the **Append tag policy** applies to **newly created resources** (like the storage account), not to existing resources such as RG1.

- RG1 already had the tag “tag1” : “value1” before the policy was assigned, and the policy does not retroactively add tags to existing resources.

- Therefore, RG1 retains only its original tag.

### Incorrect

**Option B. “tag2” : “value2” only**

- Incorrect because RG1 already had “tag1” : “value1” and policies do not remove existing tags.

- Also, the append policy does not apply retroactively to RG1.

**Option C. “tag1” : “value1” and “tag2” : “value2”**

- Incorrect because while the storage account created after the policy assignment would get “tag2” : “value2” appended, RG1 itself does not get updated with the new tag.

- The policy does not modify existing resource groups.

###

---

### Question 26

**You have an Azure subscription named Subscription1 that is used by several departments at your company. Subscription1 contains the resources in the following table.** **Another administrator deploys a virtual machine named VM1 and an Azure Storage account named storage2 by using a single Azure Resource Manager template.** **You need to view the template used for the deployment.** **From which blade can you view the template that was used for the deployment?**

###

**Options:**

- **A.** container1
- **B.** RG1 ✅
- **C.** storage1
- **D.** VM1

**Correct answer:** B

**Explanation:**

### Correct

**Option B. RG1**

- Correct because the **Resource Group blade** (RG1) contains the **Deployments** section.

- From the **Deployments blade**, you can view the details of the deployment, including the **ARM template** used.

- This is the only place where Azure stores the deployment history and template information for resources deployed via ARM.

### Incorrect

**Option A. container1**

- Incorrect because container1 is a blob container inside a storage account.

- It does not store or expose ARM templates used for deployments.

**Option C. storage1**

- Incorrect because the storage account blade shows configuration and monitoring options for that resource, but not the ARM template used for deployment.

**Option D. VM1**

- Incorrect because the VM blade shows settings and monitoring for the virtual machine, but does not provide access to the deployment template.

---

### Question 29

You create an Azure Storage account named contosostorage.
You plan to create a file share named data.
Users need to map a drive to the data file share from home computers that run Windows 10.
Which outbound port should you open between the home computers and the data file share?

**Options:**

- **A.** 80
- **B.** 443
- **C.** 445 ✅
- **D.** 3389

**Correct answer:** C

**Explanation:**

445 is the correct answer here because SMB (Server Message Block) protocol, which is used to access Azure file shares, operates over port 445. Windows clients need access to port 445 to map a drive to the Azure file share, which allows users to access the data remotely from their home computers.
80 is incorrect because port 80 is typically used for HTTP traffic, which is not used for SMB file share connections.
443 is incorrect because port 443 is commonly used for HTTPS traffic, which is not required for SMB file share connections.
3389 is incorrect because port 3389 is used for Remote Desktop Protocol (RDP) connections, not for mapping file shares.
Reference(s):
https://docs.microsoft.com/en-us/azure/storage/files/storage-troubleshoot-windows-file-connection

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

### Question 37

You have an Azure Storage account that contains 5,000 blobs accessed by multiple users.
You need to ensure that the users can view only specific blobs based on blob index tags.
What should you include in the solution?

**Options:**

- **A.** a stored access policy
- **B.** a role assignment condition ✅
- **C.** just-in-time (JIT) VM access
- **D.** a shared access signature (SAS)

**Correct answer:** B

**Explanation:**

a role assignment condition is correct because role assignment conditions in Azure can enforce granular access control based on blob index tags. By using conditions in role assignments, you can ensure that users are restricted to viewing only the blobs that match specific index tags. This is an advanced Azure Role-Based Access Control (RBAC) feature designed for fine-grained access control scenarios.
a stored access policy is incorrect because stored access policies are used in conjunction with Shared Access Signatures (SAS) to manage shared access over time, but they cannot enforce access based on blob index tags.
just-in-time (JIT) VM access is incorrect because JIT VM access is designed to provide temporary access to virtual machines and has no relevance to blob access control or index tags.
a shared access signature (SAS) is incorrect because while SAS can provide temporary access to blobs, it cannot enforce blob index tag-based conditions for granular access control.
Reference(s):
https://learn.microsoft.com/en-us/azure/role-based-access-control/conditions-custom-security-attributes
https://docs.microsoft.com/en-us/azure/role-based-access-control/conditions-overview
https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-index-how-to
https://docs.microsoft.com/en-us/azure/security-center/just-in-time-explained

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

### Question 41

You have an Azure subscription.
You plan to deploy a new storage account.
You need to configure encryption for the account. The solution must meet the following requirements:
Use a customer-managed key stored in a key vault.
Use the maximum supported bit length.
Which bit length should you use?

**Options:**

- **A.** 2048
- **B.** 3072
- **C.** 4096 ✅
- **D.** 8192

**Correct answer:** C

**Explanation:**

4096 is the correct answer here because, for customer-managed keys stored in Azure Key Vault, the maximum supported bit length for RSA encryption keys is 4096 bits. This is the highest supported bit length in Azure Key Vault for customer-managed keys used for storage account encryption, meeting the requirement for maximum security.
2048 is incorrect because, although 2048-bit keys are secure, they do not meet the requirement to use the maximum supported bit length.
3072 is incorrect because, while 3072-bit keys offer stronger encryption than 2048-bit keys, they still do not meet the requirement to use the maximum supported bit length.
8192 is incorrect because Azure Key Vault does not support RSA keys with an 8192-bit length. The maximum supported bit length for customer-managed RSA keys in Azure Key Vault is 4096 bits.
Reference(s):
https://docs.microsoft.com/en-us/azure/storage/common/storage-service-encryption
https://learn.microsoft.com/en-us/azure/storage/common/customer-managed-keys-overview

---

### Question 2

You have an Azure subscription that contains eight virtual machines and the resources shown in the following table.

You need to configure access for VNET1. The solution must meet the following requirements:

- The virtual machines connected to VNET1 must be able to communicate with the virtual machines connected to VNET2 by using the Microsoft backbone.

- The virtual machines connected to VNET1 must be able to access storage1, storage2, and Azure AD by using the Microsoft backbone.

What is the minimum number of service endpoints you should add to VNET1?

**Options:**

- **A.** 1 ✅
- **B.** 2
- **C.** 3
- **D.** 5

**Correct answer:** A

**Explanation:**

**1** is **correct** because we can use 1 service endpoint for all storage accounts deployed in the same region. Apart from this, the service endpoint is not needed for Azure AD, because VMs accessing Azure AD users (e.g., for user management, authentication, or authorization purposes) relies on Azure AD’s authentication and authorization mechanisms, and it doesn’t require a service endpoint. Azure AD is a cloud-based identity and access management service that operates independently of a VNet’s service endpoints.

Setting up a service endpoint for Azure AD can be advantageous in specific situations, like when VMs require secure access to Azure AD-related APIs. However, it’s not mandatory for VMs to connect with Azure AD users or entities.

While it’s possible to use two service endpoints for two separate storage accounts, the question asks for the least number of endpoints necessary.

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview

- https://docs.microsoft.com/en-us/azure/storage/common/storage-network-securit

- https://docs.microsoft.com/en-us/azure/key-vault/general/network-security

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

### Question 8

You have an Azure subscription.

You plan to deploy a storage account named storage1 by using the Azure Resource Manager (ARM) template as shown in the below exhibit.

For the statement below, select Yes if the statement is true. Otherwise, select No.

**“Three copies of storage1 will be maintained in the East US Azure region.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is the **correct** answer because the sku property in the ARM template specifies:

- “name”: “Standard_LRS”

LRS (Locally Redundant Storage) ensures that three copies of the data are maintained within a single Azure region (East US in this case). These copies are stored synchronously across multiple fault domains and update domains within the same region to provide redundancy against hardware failures.

If regional redundancy was intended (e.g., data being replicated to another region), a different SKU like Geo-Redundant Storage (GRS) or Zone-Redundant Storage (ZRS) would have been specified instead of Standard_LRS.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy

---

### Question 9

You have an Azure subscription that contains the Azure container instances shown in the following table.

You create a storage account that contains a file share named storage1 in the East US Azure region.

You need to mount storage1 to the container instances.

To which container instances can you mount storage1?

**Options:**

- **A.** container1 only
- **B.** container3 only
- **C.** container1 and container2 only
- **D.** container1 and container3 only ✅
- **E.** container1, container2, and container3

**Correct answer:** D

**Explanation:**

**container1 and container3 only** is the **correct** answer because Azure file shares can only be mounted to container instances that are in the same region as the storage account.

- The storage account containing storage1 is located in the East US region.

- container1 is also in the East US region and runs a Windows image, which supports Azure Files mounting.

- container3 is in the East US region and runs a Linux image, which also supports Azure Files mounting.

**container2** is located in the West US region, which makes it ineligible to mount the file share from a storage account in East US.

Azure File Shares cannot be mounted across regions, regardless of the operating system or image type of the container instance.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction

- https://learn.microsoft.com/en-us/azure/container-instances/container-instances-resource-and-quota-limits

---

### Question 11

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains blobs in a container named container1.

You plan to share access to storage1.

You need to generate a shared access signature (SAS). The solution must meet the following requirements:

- Ensure that the SAS can only be used to enumerate and download blobs stored in container1.

- Use the principle of least privilege.

Which **three** settings should you enable?

**Options:**

- **A.** File
- **B.** Container ✅
- **C.** Object
- **D.** Read ✅
- **E.** List ✅
- **F.** Filter

**Correct answer:** B, D, E

**Explanation:**

### Correct

**Option B. Container** Explanation: This is correct. The SAS must be scoped to the **container level** (container1) to ensure access is limited only to blobs within that container, following least privilege principles.

**Option D. Read** Explanation: This is correct. The **Read permission** allows downloading blobs, which is explicitly required. Without this, users cannot retrieve blob content.

**Option E. List** Explanation: This is correct. The **List permission** allows enumeration of blobs in the container. Since the requirement includes enumerating blobs, this permission must be enabled.

### Incorrect

**Option A. File** Incorrect. SAS for **File shares** applies to Azure Files, not Blob storage. Since the requirement is specifically for blobs in container1, this is not relevant.

**Option C. Object** Incorrect. “Object” is not a valid SAS permission scope in Azure Storage. Permissions are defined at the account, container, or blob level.

**Option F. Filter** Incorrect. “Filter” is not a valid SAS permission setting. Filtering is not part of SAS configuration.

### Correct

**Option B. Container** Explanation: This is correct. The SAS must be scoped to the **container level** (container1) to ensure access is limited only to blobs within that container, following least privilege principles.

**Option D. Read** Explanation: This is correct. The **Read permission** allows downloading blobs, which is explicitly required. Without this, users cannot retrieve blob content.

**Option E. List** Explanation: This is correct. The **List permission** allows enumeration of blobs in the container. Since the requirement includes enumerating blobs, this permission must be enabled.

### Incorrect

**Option A. File** Incorrect. SAS for **File shares** applies to Azure Files, not Blob storage. Since the requirement is specifically for blobs in container1, this is not relevant.

**Option C. Object** Incorrect. “Object” is not a valid SAS permission scope in Azure Storage. Permissions are defined at the account, container, or blob level.

**Option F. Filter** Incorrect. “Filter” is not a valid SAS permission setting. Filtering is not part of SAS configuration.

---

### Question 15

You have an Azure Storage account named storage1.

For storage1, you create an encryption scope named Scope1.

Which storage types can you encrypt by using Scope?

**Options:**

- **A.** file shares only
- **B.** containers only ✅
- **C.** file shares and containers only
- **D.** containers and tables only
- **E.** file shares, containers, and tables only
- **F.** file shares, containers, tables, and queues

**Correct answer:** B

**Explanation:**

**containers only** is **correct** because encryption scopes in Azure Storage are applicable to Azure Blob Storage and Data Lake Gen2 storage accounts. Since blobs are stored within containers, encryption scopes can be used to encrypt containers, but not other storage types such as file shares, tables, or queues.

**Reference(s):**

https://learn.microsoft.com/en-us/azure/storage/blobs/encryption-scope-manage?tabs=portal

---

### Question 17

**You have an Azure subscription that contains a virtual network named VNET1 in the East US 2 region. Network interfaces named VM1‑NI and VM2‑NI are connected to VNET1.** **You successfully deploy the following Azure Resource Manager template.** **For the following statement, select Yes if the statement is true. Otherwise, select No.** **“If the East US 2 region becomes unavailable, VM1 or VM2 will be available.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- This is correct because both VM1 and VM2 are deployed in the **East US 2 region**.

- If the entire region becomes unavailable, all resources in that region—including VMs, NICs, and VNET1—will be unavailable.

- Regional outages cannot be mitigated by a single VNET or NIC; high availability requires **cross‑region deployment** (e.g., Azure Site Recovery, paired regions, or geo‑redundant services).

### Incorrect

**Option A. Yes**

- Incorrect because availability is tied to the region where resources are deployed.

- Without replication or failover to another region, VMs in East US 2 cannot remain available if the region itself goes down.

- The statement assumes resiliency that does not exist in this configuration.

###

---

### Question 19

**You have an Azure subscription. You plan to create the Azure Storage account as shown in the exhibit. Based on the information presented, select the answer choice that completes the following statement correctly.**

“To reduce the cost of infrequently accessed data in the storage account, you must modify the ____________________ setting.”

**Options:**

- **A.** Access tier (default) ✅
- **B.** Performance
- **C.** Account kind
- **D.** Replication

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Access tier (default)**

- Correct because the **Access tier (Hot, Cool, Archive)** setting determines the cost structure for data stored in Azure Storage.

- For **infrequently accessed data**, switching from **Hot** to **Cool** or **Archive** reduces storage costs while still keeping the data available (Cool = lower cost, moderate access latency; Archive = lowest cost, hours of retrieval latency).

- This directly addresses the requirement to minimize costs for infrequently accessed data.

### Incorrect

**Option B. Performance**

- Incorrect because Performance refers to **Standard vs Premium storage**.

- Premium is optimized for low‑latency workloads, not cost reduction for infrequently accessed data.

**Option C. Account kind**

- Incorrect because Account kind determines the **type of storage account** (e.g., General Purpose v2, BlobStorage).

- While GPv2 supports tiering, the actual cost optimization comes from modifying the **Access tier**, not the account kind itself.

**Option D. Replication**

- Incorrect because Replication (LRS, GRS, RA‑GRS, ZRS) affects **data durability and availability across regions**, not cost optimization for infrequently accessed data.

- Choosing replication impacts resilience, not the storage tier pricing model.

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

### Question 25

You have an Azure subscription that contains a virtual network named VNET1 in the East US 2 region. Network interfaces named VM1-NI and VM2-NI are connected to VNET1.

You successfully deploy the following Azure Resource Manager template.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“If an Azure datacenter becomes unavailable, VM1 or VM2 will be available.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct: If a **datacenter outage** occurs, both VM1 and VM2 will be unavailable because they are deployed in the same region (East US 2).

- Azure VMs tied to a single region cannot survive a regional or datacenter failure unless you configure **availability zones, paired regions, or cross‑region disaster recovery**.

- The statement assumes resiliency that does not exist in this setup.

### Incorrect

**Option A. Yes**

- Incorrect: Saying “Yes” implies that at least one VM would remain available during a datacenter outage.

- This is false because both VMs are in the same region and connected to the same VNET.

- Without cross‑region deployment or replication, **all resources in that region fail together**.

---

### Question 28

You have an Azure subscription that contains the storage accounts shown in the following table.

You deploy a web app named App1 to the West US Azure region.

You need to back up App1. The solution must minimize costs.

Which storage account should you use as the target for the backup?

**Options:**

- **A.** storage1
- **B.** storage2 ✅
- **C.** storage3
- **D.** storage4

**Correct answer:** B

**Explanation:**

### Correct

- **Option B. storage2** Correct because when backing up an Azure Web App, the backup must target a **General-purpose v2 storage account with Blob storage in the same region** as the app. This minimizes latency and cost. Storage2 meets these requirements, making it the most cost‑effective and compliant choice for App1 in West US.

### Incorrect

- **Option A. storage1** Incorrect because storage1 does not meet the required configuration for web app backups (likely wrong region or unsupported type). Using it would increase costs or fail compliance.

- **Option C. storage3** Incorrect because storage3 is not suitable for web app backups (possibly wrong redundancy or region). It does not minimize costs compared to storage2.

- **Option D. storage4** Incorrect because storage4 does not meet the requirements for App Service backups (wrong type or region). It would not be the recommended solution.

###

---

### Question 32

You have an Azure subscription that contains an Azure Storage account.

You plan to create an Azure container instance named container1 that will use a Docker image named Image1. Image1 contains a Microsoft SQL Server instance that requires persistent storage.

You need to configure a storage service for container1.

What should you use?

**Options:**

- **A.** Azure Queue storage
- **B.** Azure Blob storage
- **C.** Azure Table storage
- **D.** Azure Files ✅

**Correct answer:** D

**Explanation:**

**Azure Files** is the **CORRECT** answer here. Azure Files provides a fully managed file share in the cloud that can be mounted as a persistent storage solution for Azure container instances. This makes it suitable for scenarios requiring persistent storage, like hosting a Microsoft SQL Server instance within a container.

**Azure Queue storage** is **INCORRECT** because it is designed for message queuing between components and does not provide file storage for persisting data across container restarts.

**Azure Blob storage** is **INCORRECT** because, although it is used for storing unstructured data, it is not ideal for use as persistent storage for file system needs in containers like Azure Files.

**Azure Table storage** is **INCORRECT** because it is a NoSQL key-value store used for structured data and is not suitable for mounting as a persistent file share for containers.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/container-instances/container-instances-volume-azure-files

- https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction

---

### Question 38

You have a Microsoft Entra user named User1 and a read-access geo-redundant storage (RA-GRS) account named contoso2023.

You need to meet the following requirements:

- User1 must be able to write blob data to contoso2023.

- The contoso2023 account must fail over to its secondary endpoint.

Which **two** settings should you configure?

**Options:**

- **A.** Access Control (IAM) ✅
- **B.** Access Keys
- **C.** Shared access signature
- **D.** Redundancy ✅

**Correct answer:** A, D

**Explanation:**

**Access Control (IAM)** is **correct** because to enable User1 to write blob data to contoso2023, you can assign the Storage Blob Data Contributor role to User1 through Access Control (IAM). This role provides the necessary permissions for writing blob data without using account keys or SAS tokens, aligning with best practices for managing access in Azure.

**Redundancy** is **correct** because to configure contoso2023 to fail over to its secondary endpoint, you need to adjust the Redundancy setting. This setting allows you to manage the geo-redundant failover behavior for the storage account, enabling automatic or manual failover to the secondary region when needed.

**Access Keys** is **incorrect** because using access keys would not meet the principle of least privilege and would grant full access rather than just write permissions.

**Shared access signature** is **incorrect** because while it can provide specific permissions, using IAM roles is a more secure and manageable way to provide User1 with write access.

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy#read-access-geo-redundant-storage

- https://docs.microsoft.com/en-us/azure/storage/common/storage-initiate-account-failover?tabs=azure-portal

- https://docs.microsoft.com/en-us/azure/role-based-access-control/overview

- https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview

- https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage

---

### Question 43

You have an Azure subscription that contains the resources shown in the following table.

You need to ensure that data transfers between storage1 and VM1 do NOT traverse the internet

What should you configure for storage1?

**Options:**

- **A.** a shared access signature (SAS)
- **B.** data protection
- **C.** a private endpoint ✅
- **D.** Public network access in the Firewalls and virtual networks settings

**Correct answer:** C

**Explanation:**

**a private endpoint** is **correct** because configuring a private endpoint for storage1 ensures that data transfers between VM1 and storage1 occur entirely within the Azure virtual network. A private endpoint maps the storage account to a private IP address in the virtual network, preventing traffic from traversing the internet and providing a secure connection.

**a shared access signature (SAS)** is **incorrect** because an SAS provides granular access to resources in a storage account but does not ensure that the data transfer stays within the Azure virtual network.

**data protection** is **incorrect** because it relates to enabling recovery options and configuring soft delete features for protecting data but does not control the network path used for data transfer.

**Public network access in the Firewalls and virtual networks settings** is **incorrect** because disabling public network access would block all internet-based traffic but does not ensure that traffic is routed privately within Azure.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview

- https://learn.microsoft.com/en-us/azure/storage/common/storage-private-endpoints

---

### Question 47

You have an Azure subscription that contains a storage account named storage1.

You have the devices shown in the following table.

From which devices can you use AzCopy to copy data to storage1?

**Options:**

- **A.** Device1 and Device2 only
- **B.** Device1 only
- **C.** Device1 and Device3 only
- **D.** Device1, Device2, and Device3 ✅

**Correct answer:** D

**Explanation:**

**Device1, Device2, and Device3** is **correct** because AzCopy is a cross-platform command-line utility available for Windows, Linux, and macOS. This means it can be used on all three devices listed in the table to copy data to an Azure storage account.

**Reference(s):**

https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10?tabs=dnf#download-azcopy

---

### Question 48

You have an Azure subscription named Subscription1.

You create an Azure storage account named contosostorage, and then you create a file share named data.

Which UNC path should you include in a script that references files from the data file share?

UNC Path to include:

Values to choose from:

**Options:**

- **A.** contosostorage.file.core.windows.net\data ✅
- **B.** data.file.core.windows.net\contosostorage
- **C.** contosostorage.blob.core.windows.net\data
- **D.** data.blob.core.windows.net\contosostorage
- **E.** file.subscription1\portal.azure.com
- **F.** blob.data\file.core.windows.net

**Correct answer:** A

**Explanation:**

**contosostorage.file.core.windows.net\data** is **correct**.

The correct UNC path to include in a script that references files from the data file share in the contosostorage storage account would be:

**\\contosostorage.file.core.windows.net\data**

Here’s why this is correct:

- The correct format for accessing an Azure file share is \\&lt;storage-account-name&gt;.file.core.windows.net\&lt;file-share-name&gt;.

- In this case:

- &lt;storage-account-name&gt; is contosostorage

- &lt;file-share-name&gt; is data

Thus, **\\contosostorage.file.core.windows.net\data** is the appropriate path.

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-windows

---

### Question 50

You have an Azure subscription that contains the storage accounts shown in the following table.

You plan to use AzCopy to copy a blob from container1 directly to share1. You need to identify which authentication method to use when you use AzCopy.

Which authentication method would you use for “**storage1**”?

**Options:**

- **A.** OAuth
- **B.** Anonymous
- **C.** A storage account access key
- **D.** A shared access signature (SAS) token ✅

**Correct answer:** D

**Explanation:**

**A Shared Access Signature (SAS) token** is **correct** because in this scenario, AzCopy requires a SAS token for copying a blob from a container that has “No public access” set. The SAS token provides limited, scoped permissions, allowing access only to the specific blob container and file share, ensuring secure data transfer between storage resources. This approach adheres to the principle of least privilege by not exposing full access to the storage account.

**OAuth** is **incorrect** because OAuth cannot be used as the source URL for copying from a blob container to a file share. OAuth is suitable for blob-to-blob copies but not when file shares are involved.

**Anonymous** is **incorrect** because public access is disabled on the container, so a SAS token or other authentication method is required.

**A Storage Account Access key** is **incorrect** because it grants broader permissions than necessary, covering the entire storage account, which goes against the principle of least privilege and poses a security risk for this specific transfer.

**Reference(s)**:

- https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10

- https://learn.microsoft.com/en-us/azure/storage/common/storage-ref-azcopy-copy?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json

---

### Question 51

You have an Azure subscription that contains a storage account named storage1. The storage account contains a container named container1.

You create a blob lifecycle rule named rule1.

You need to configure rule1 to automatically move blobs that were NOT updated for 45 days from container1 to the Cool access tier.

You need to complete the following rule.

What should you choose for **Dropdown 1**?

**Options:**

- **A.** “daysAfterCreationGreaterThan“
- **B.** “daysAfterLastAccessTimeGreaterThan“
- **C.** “daysAfterModificationGreaterThan“ ✅

**Correct answer:** C

**Explanation:**

**daysAfterModificationGreaterThan** is **correct** because it specifies the condition to move blobs that have not been modified within the specified period (45 days, in this case) to the Cool access tier. This meets the requirement of moving blobs based on the last modification date.

**daysAfterCreationGreaterThan** is **incorrect** because it moves blobs based on the number of days since creation, not since the last modification or update.

**daysAfterLastAccessTimeGreaterThan** is **incorrect** because it uses the last access time, which is not the required condition for this scenario. The requirement is based on the last modification date.

**Reference(s):**

https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview#rule-actions

---

### Question 52

You have an Azure subscription that contains a storage account named storage1. The storage account contains a container named container1.

You create a blob lifecycle rule named rule1.

You need to configure rule1 to automatically move blobs that were NOT updated for 45 days from container1 to the Cool access tier.

You need to complete the following rule.

What should you choose for **Dropdown 2**?

**Options:**

- **A.** “AppendBlob“
- **B.** “Blockblob“ ✅
- **C.** “Pageblob“

**Correct answer:** B

**Explanation:**

**Blockblob** is **correct** because block blobs are typically used for storing general-purpose files and are the default choice for most Azure blob storage scenarios, including lifecycle management. Since the requirement involves moving blobs to a different access tier, block blobs are the appropriate selection.

**AppendBlob** is **incorrect** because append blobs are used for scenarios like logging, where data is continuously appended to the end of the blob. They are not typically managed by lifecycle policies for tiering.

**Pageblob** is **incorrect** because page blobs are primarily used for Azure Virtual Machine disks and are not suited for lifecycle tiering in this context.

**Reference(s):**

https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview#rule-filters

---

### Question 3

You have an Azure Storage account named storage1.

You have Azure App Service apps named App1 and App2 that run in an Azure container instance. Each app uses a managed identity.

You need to ensure that App1 and App2 can read blobs from storage1. The solution must meet the following requirements:

- Minimize the number of secrets used.

- Ensure that App2 can only read from storage1 for the next 30 days.

What should you configure in storage1 for **App1**?

**Options:**

- **A.** Access keys
- **B.** Advanced security
- **C.** Access control (IAM) ✅
- **D.** Shared access signatures (SAS)

**Correct answer:** C

**Explanation:**

The most appropriate configuration for App1 in storage1 is **Access control (IAM)**.

Here’s why:

**Access control (IAM):**

Using IAM roles is the best practice for granting permissions to Azure resources, especially when dealing with managed identities.

It eliminates the need for managing secrets, which aligns with the requirement to minimize the number of secrets used.

You can assign the “Storage Blob Data Reader” role to App1’s managed identity, granting it read access.

Here’s why the other options are less suitable:

**Access keys:**

Access keys are secrets and should be avoided when managed identities are available. They provide broad access to the storage account, which is not ideal for least privilege.

**Advanced security:**

Advanced security features, like Azure Defender for Storage, do not directly grant read access to blobs.

**Shared access signatures (SAS):**

While SAS tokens can grant access, they are secrets and require management.

While SAS tokens are used for granting time limited access, as required for app2, IAM is the best option for app1.

Therefore, IAM is the most secure and efficient way to grant App1 read access to storage1.

**Access keys** is **incorrect** because access keys provide full access to the storage account, which does not align with the principle of least privilege and involves using secrets.

**Advanced security** is **incorrect** because, while it enhances security features, it doesn’t specifically manage read access for apps with managed identities.

**Shared access signatures (SAS)** is **incorrect** because SAS tokens require managing secrets and don’t provide direct access duration management like RBAC. SAS tokens are less secure for managed identity-based access.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/role-based-access-control/overview

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/managed-applications/publish-managed-identity#granting-access-to-azure-resources

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

### Question 8

You have an Azure subscription that contains the resources shown in the following table.

You need to assign User1 the Storage File Data SMB Share Contributor role for share1.

What should you do first?

**Options:**

- **A.** Enable identity-based data access for the file shares in storage1.
- **B.** Modify the security profile for the file shares in storage1.
- **C.** Select Default to Azure Active Directory authorization in the Azure portal for storage1.
- **D.** Configure Access control (IAM) for share1. ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Configure Access control (IAM) for share1**

- Correct because assigning the **Storage File Data SMB Share Contributor** role requires configuring **Access Control (IAM)** at the scope of the file share (share1).

- This ensures User1 has the necessary permissions to read, write, and delete files/directories in the SMB share.

- IAM role assignment is the first step before User1 can access the share with Azure AD credentials.

### Incorrect

**Option A. Enable identity‑based data access for the file shares in storage1**

- Incorrect because enabling identity‑based access is a prerequisite for Azure AD authentication, but it does not itself assign the role.

- The question asks specifically about assigning the role, which is done through IAM.

**Option B. Modify the security profile for the file shares in storage1**

- Incorrect because “security profile” is not a configurable option for Azure Storage file shares.

- Security is managed through IAM and Azure AD, not a separate profile.

**Option C. Select ****Default to Azure Active Directory authorization**** in the Azure portal for storage1**

- Incorrect because while enabling Azure AD authorization is necessary for identity‑based access, it does not assign the **Storage File Data SMB Share Contributor** role.

- Role assignment must still be done via IAM.

---

### Question 9

You have an Azure subscription that contains the storage account shown in the following exhibit.

Based on the information provided, select the answer choice that completes the following statement correctly.

**“The maximum number of additional stored access policies that you can create for container1 is ________.”**

**Options:**

- **A.** 1
- **B.** 3 ✅
- **C.** 5
- **D.** 6

**Correct answer:** B

**Explanation:**

**3** is the **correct** answer because Azure Storage accounts support a maximum of 5 stored access policies per container. Since there are already 2 stored access policies (Policy1 and Policy2) defined for container1, you can add 3 more policies to reach the limit of 5.

**Reference(s):**

- https://learn.microsoft.com/en-us/rest/api/storageservices/define-stored-access-policy

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

### Question 16

You have an Azure subscription that has offices in the East US and West US Azure regions.

You plan to create the storage account shown below.

Based on the information presented in the graphic, select the answer choice that completes the following statement correctly.

**“To minimize the network costs of accessing adatum22, modify the ____________________ setting.”**

**Options:**

- **A.** Default routing tier ✅
- **B.** Endpoint type
- **C.** Location
- **D.** Network connectivity
- **E.** Performance

**Correct answer:** A

**Explanation:**

**Default routing tier **is **correct** because by default the routing method is set to be through Microsoft global network . But this configuration sometimes increases the network costs if the data you are trying to access is in another region, and in order to reach your system it has to traverse through Microsoft global network to a great extent. In order to minimize this, you can change to Internet routing where it is passed on to the transit ISP at the earliest opportunity.

**Endpoint type** is **incorrect** as changing the endpoint type will not have any effect on the network costs of the traffic coming in or going out from the storage account.

**Location** is **incorrect** because we do not know as of now where the user, who is trying to access the file share is located. So changing the location will not help.

**Network connectivity** is **incorrect** because this defines how you connect to different services in the storage account. If you select Public endpoints then you can access them over the internet otherwise your requests should be coming in from inside the VNet provided VNet integration is already enabled.

**Performance** is **incorrect** because this chooses the tier in which your storage account runs. It basically defines the resources available to the services to handle your data and requests. Changing this may have effect on billing cost but it would not affect the networking cost.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/common/network-routing-preference

---

### Question 18

You have an Azure subscription that has offices in the East US and West US Azure regions.

You plan to create the storage account shown below.

Based on the information presented in the graphic, select the answer choice that completes the following statement correctly.

**“After adatum22 is created, you can modify the ___________________________ setting.”**

**Options:**

- **A.** Enable infrastructure encryption
- **B.** Enable support for customer-managed keys
- **C.** Encryption type ✅
- **D.** Premium account type

**Correct answer:** C

**Explanation:**

**Encryption Type **is **correct** as we can change this setting even after creation of the storage account. It can be changed to customer-managed keys from Microsoft managed keys or vice-versa.

**Enable infrastructure encryption** is **incorrect** because we can only configure this option during the creation of the storage account.

**Enable support for customer-managed keys** is **incorrect** because this setting is final once configured during the creation. It cannot be changed later.

**Premium account type** is **incorrect** because we can only decide what type of account service we need during its creation. It cannot be extended later to include other services which were excluded before.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/common/storage-service-encryption

---

### Question 20

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1.

You need to create a lifecycle management rule for storage1 that will automatically move the blobs in container1 to the lowest-cost tier after 90 days.

You need to complete the following rule.

What should you choose for **dropdown1**?

**Options:**

- **A.** “enableAutoTierToHotFromCool”: {
- **B.** “tierToArchive”: { ✅
- **C.** “tierToCool”: {

**Correct answer:** B

**Explanation:**

**tierToArchive”: { **is **correct** because here you define the action you want to take via the policy. As per the requirement we need to move the blobs to the lowest-cost tier which is the Archive tier after 90 days.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-policy-configure?tabs=azure-portal

---

### Question 22

You have an Azure subscription. The subscription contains a storage account named storage1 that has a life cycle management rules shown in the following table.

On June 1, you store two blobs in storage1 as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“On June 1, File2 will be stored in the Cool access tier.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because Rule3 states that blobs in **c**ontainer2/ older than 10 days will be deleted, and Rule4 moves blobs older than 15 days to archive storage. File2, added on June 1, does not meet the conditions for any lifecycle management rule to trigger. Therefore, it remains in the Hot tier, and no rule moves it to the Cool tier.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/blobs/archive-rehydrate-overview

---

### Question 23

You have an Azure subscription. The subscription contains a storage account named storage1 that has a life cycle management rules shown in the following table.

On June 1, you store two blobs in storage1 as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“On June 16, File2 will be stored in the Archive access tier.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because after 10 days, rule3 deletes the file2 and hence it will not be available to be put to archive tier after 15 days by rule4.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/blobs/archive-rehydrate-overview

---

### Question 24

You have an Azure subscription.

You create the following file named Deploy.json.

You connect to the subscription and run the following commands.

- New-AZResourceGroup -Name RG1 -Location “centralus”

- New-AZResourceGroupDeployment -ResourceGroupName RG1 -TemplateFile “deploy.json”

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“The first storage account that is created will have a prefix of 0.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is **correct** because there is a copy loop running in the template which deploys three count of storage account. And the indexing of this loop, like any other programming language, starts with 0.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/copy-resources#resource-iteration

---

### Question 29

You have an Azure Storage account named contoso2024 that contains the resources shown in the following table.

You have users that have permissions for contoso2024 as shown in the following table.

The contoso2024 account is configured as shown below.

For the statement below, select Yes if the statement is true. Otherwise, select No.

**“User3 can read File1 and File2.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because access to Storage account via Access Keys has been disabled. So User3 cannot do anything in the storage account.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

- https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal

---

### Question 33

Your company’s compliance requirements mandate the use of customer‑managed keys for encrypting data at rest in Azure Storage. How would you implement customer‑managed keys using Azure Key Vault and configure your storage accounts to use them?

**Options:**

- **A.** Enable Azure Disk Encryption with customer-managed keys from Key Vault
- **B.** Store keys in Azure Key Vault and configure storage encryption settings
- **C.** Generate keys in Azure Key Vault and link them to the storage account ✅
- **D.** Use Key Vault keys and configure Key Vault firewall and access policies

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Generate keys in Azure Key Vault and link them to the storage account**

- Correct because the proper way to implement **customer‑managed keys (CMK)** for Azure Storage is to generate or import the RSA key into **Azure Key Vault**, then configure the storage account to use that key for encryption.

- This ensures compliance by giving the organization full control over key lifecycle management, including rotation and revocation.

### Incorrect

**Option A. Enable Azure Disk Encryption with customer‑managed keys from Key Vault**

- Incorrect because **Azure Disk Encryption** applies to **VM disks**, not to Azure Storage accounts.

- This does not meet the requirement for encrypting data at rest in **Azure Storage**.

**Option B. Store keys in Azure Key Vault and configure storage encryption settings**

- Incorrect because while storing keys in Key Vault is part of the process, this option is incomplete.

- You must explicitly **link the Key Vault key to the storage account** to enforce CMK encryption.

**Option D. Use Key Vault keys and configure Key Vault firewall and access policies**

- Incorrect because firewall and access policies secure Key Vault itself, but they do not configure the storage account to use CMKs.

- This option addresses security of Key Vault, not the encryption requirement for storage.

###

---

### Question 34

**A company has two applications, **skillcertlabappA** and **skillcertlabAppB**.** skillcertlabappA** is deployed to an Azure Web App and uses a Managed Identity.** **Which authentication method should be used for secure communication between the applications?**

**Options:**

- **A.** A. CORS
- **B.** B. Access Keys
- **C.** C. Shared Access Signatures
- **D.** D. Managed Identity ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Managed Identity**

- Correct because **Managed Identity** is the recommended way for Azure resources (like Web Apps) to securely authenticate and access other Azure services without storing credentials in code.

- It provides token‑based authentication via Azure AD, eliminating the need for secrets or keys.

- This directly satisfies the requirement for secure communication between applications in Azure.

### Incorrect

**Option A. CORS**

- Incorrect because **Cross‑Origin Resource Sharing (CORS)** is a browser security feature that controls which domains can call APIs.

- It does not provide authentication or secure identity management between applications.

**Option B. Access Keys**

- Incorrect because **Access Keys** (like those for Storage Accounts) are static secrets.

- Using them increases the risk of credential leakage and does not align with best practices for secure communication between Azure services.

**Option C. Shared Access Signatures (SAS)**

- Incorrect because SAS tokens are used to grant limited access to storage resources.

- They are not the right mechanism for authenticating communication between applications in this scenario.

---

### Question 37

Scenario:

A company utilizes an Azure subscription containing the resources detailed in the table below:

**Name**
**Type**

skillcertlabs-rg
Resource Group

skillcertlabstore
Azure Storage account

skillcertlabsync
Azure File Sync

The skillcertlabstore Azure Storage account hosts a file share named documents, which contains 1000 files.

Requirement:

You are tasked with synchronizing the files within the documents file share to an on-premise server named skillcertlabserver.

Question:

Which three (3) of the following options would you need to implement to fulfill this requirement? Choose 3 answers from the options given below.

**Options:**

- **A.** A. Download an automation script.
- **B.** B. Create a container instance.
- **C.** C. Create a sync group. ✅
- **D.** D. Register skillcertlabserver. ✅
- **E.** E. Install the Azure File Sync agent on skillcertlabserver. ✅

**Correct answer:** C, D, E

**Explanation:**

So, the Microsoft documentation gives the list of steps for using the Azure File Sync service

Since this is clearly given in the Microsoft documentation, all other options are incorrect

For more information on deploying Azure File Sync share, please go to the below URL

https://docs.microsoft.com/en-us/azure/storage/files/storage-sync-files-deployment-guide?tabs=portal

---

### Question 39

You have a **general purpose v1 storage account** named storageaccount1 that has a **private container** named container1. You need to allow **read access** to the data inside container1, but only within a **14‑day window**.

**How do you accomplish this?**

**Options:**

- **A.** Create a stored access policy
- **B.** Create a service SAS ✅
- **C.** Create a shared access signatures
- **D.** Upgrade the storage account to general purpose v2

**Correct answer:** B

**Explanation:**

### **Correct**

- **Option B. Create a service SAS**

- Correct: A **service SAS (Shared Access Signature)** allows you to grant **time‑bound access** to specific resources (like blobs in a container).

- You can configure the SAS to allow **read access only** and set the expiry to **14 days**, meeting the requirement exactly.

- This is the exam‑expected answer because service SAS is the mechanism for **fine‑grained, time‑limited access** to storage resources.

### **Incorrect**

- **Option A. Stored access policy**

- Incorrect: Stored access policies define reusable constraints for SAS tokens, but by themselves they do not grant access. You still need a SAS.

- **Option C. Shared access signature (generic)**

- Incorrect: While SAS is the right concept, the question specifically requires **service SAS**. A generic SAS option is too broad and not precise enough for the exam answer.

- **Option D. Upgrade to general purpose v2**

- Incorrect: Upgrading the storage account type does not solve the requirement. Access control is handled through SAS, not account tier.

###

---

### Question 42

A company has setup an Azure subscription and a tenant. They want to ensure that only Virtual Machines of a particular SKU size can be launched in their Azure account.

They decide to implement Role Based access policies

Does this fulfil the requirement?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

✅ **No.**

While **Azure Role-Based Access Control (RBAC)** is a powerful tool for managing access to Azure resources, it primarily focuses on controlling who can perform what actions on Azure resources. RBAC allows you to grant permissions to users, groups, and service principals to create, manage, and delete virtual machines, networks, storage accounts, etc.

However, **RBAC alone cannot directly restrict the specific SKU sizes** that users are allowed to deploy for virtual machines. RBAC operates at a broader level of resource management actions.

To enforce restrictions on VM SKU sizes, you would typically need to use **Azure Policy**. Azure Policy allows you to define rules and enforce configurations across your Azure environment. You can create a policy that specifically restricts the allowed VM SKUs within a subscription or resource group.

For more information on role-based access control, please visit the below URL

https://docs.microsoft.com/en-us/azure/role-based-access-control/overview

---

### Question 4

You have an Azure subscription named Subscription1 that contains the following resource group:

- Name: RG1

- Region: West US

- Tag: “tag1”: “value1”

You assign an Azure policy named Policy1 to Subscription1 by using the following configurations:

- Exclusions: None

- Policy definition: Append a tag and its value to resources

- Assignment name: Policy1

- Parameters:

- Tag name: tag2

- Tag value: value2

After Policy1 is assigned, you create a storage account that has the following configurations:

- Name: storage1

- Region: West US

- Resource group: RG1

- Tags: “tag3”: “value3”

Which tags are assigned to storage1?

**Options:**

- **A.** “tag3“ : “value3“ only
- **B.** “tag1“ : “value1“ and “tag3“ : “value3“ only
- **C.** “tag2“ : “value2“ and “tag3“ : “value3“ only ✅
- **D.** “tag1“ : “value1“, “tag2“ : “value2“, and “tag3“ : “value3“

**Correct answer:** C

**Explanation:**

**“tag2” : “value2” and “tag3” : “value3” only** is the **correct** answer here. Tags are not inherited automatically from a resource group or subscription to the resources within them. However, in this case, Policy1 was applied to Subscription1 with the definition to append a specific tag to all new resources created in this subscription. The policy was configured with Exclusions: None and parameters Tag name: “tag2” and Tag value: “value2”. This means that all resources created after this policy assignment will automatically have “tag2” : “value2” appended.

When storage1 was created in RG1 after the policy was assigned, it had “tag3” : “value3” specified. Since Policy1 was already in effect, “tag2” : “value2” was appended to storage1 due to the policy, resulting in storage1 having the tags “tag2” : “value2” and “tag3” : “value3” only.

**“tag3” : “value3” only** is **incorrect** because the policy enforces **“tag2” : “value2”** on all new resources in the subscription.

**“tag1” : “value1” and “tag3” : “value3” only** is **incorrect** because **“tag1” : “value1”** is assigned only to **RG1** and does not get inherited by resources within the group.

**“tag1” : “value1”, “tag2” : “value2”, and “tag3” : “value3”** is **incorrect** because **storage1** does not inherit **“tag1” : “value1”** from **RG1**.

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-policies

- https://docs.microsoft.com/en-us/azure/governance/policy/concepts/effects#append

---

### Question 5

You have an Azure subscription that has the Azure container registries shown in the following table.

You plan to use ACR Tasks and configure private endpoint connections.

Which container registries support ACR Tasks?

**Options:**

- **A.** ContReg1 only
- **B.** ContReg1 and ContReg2 only
- **C.** ContReg1, ContReg2, and ContReg3 ✅

**Correct answer:** C

**Explanation:**

ContReg1, ContReg2, and ContReg3 ✅

Explanation:

ACR Tasks is a feature of Azure Container Registry (ACR) that allows you to automate container image builds, tests, and deployments. The key points to consider:

ACR Tiers:

Basic: Supports ACR Tasks.

Standard: Supports ACR Tasks.

Premium: Supports ACR Tasks and additional features like private endpoints, geo-replication, and task runs across regions.

Private Endpoints:

ACR Tasks are fully compatible with private endpoint connections, but the tier of the registry matters for advanced capabilities.

Why all three registries support ACR Tasks:

If ContReg1, ContReg2, and ContReg3 are Basic, Standard, or Premium, they all support ACR Tasks.

There is no restriction preventing any tier from using ACR Tasks as long as it’s an Azure Container Registry.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/container-registry/container-registry-skus

---

### Question 9

You have an Azure subscription that contains the storage accounts shown in the following table. You plan to use **AzCopy** to copy a blob from container1 directly to share1. You need to identify which authentication method to use when you use AzCopy. Which authentication method would you use for **storage2**?

You plan to use AzCopy to copy a blob from container1 directly to share1. You need to identify which authentication method to use when you use AzCopy.

Which authentication method would you use for “**storage2**”?

**Options:**

- **A.** A. OAuth
- **B.** B. Anonymous
- **C.** C. A storage account access key
- **D.** D. A shared access signature (SAS) token ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. A shared access signature (SAS) token**

For **Azure Files** (like share1 in storage2), AzCopy requires either a **storage account key** or a **SAS token**. Since the question specifies storage2 and the scenario involves secure delegated access, the correct method is a **SAS token**. This allows temporary, scoped access to the file share without exposing the full account key.

### Incorrect

**Option A. OAuth**

- Incorrect because AzCopy does not support OAuth directly for Azure Files. OAuth is used for Azure AD authentication in some services, but not for this scenario.

**Option B. Anonymous**

- Incorrect because Azure Files does not allow anonymous access. Authentication is always required.

**Option C. A storage account access key**

- Incorrect in this context because while access keys can be used, the question specifically points to **storage2** where SAS is the recommended method for secure delegated access.

---

### Question 10

You have an Azure subscription named Sub1 that contains the blob containers shown in the following table.

Sub1 contains two users named User1 and User2. Both users are assigned the Reader role at the Sub1 scope.

You have a condition named **Condition1** as shown below.

You have a condition named **Condition2** as shown below.

You assign roles to User1 and User2 as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User1 can read blob3.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A: Yes**

- Correct because User1 has the **Reader role at the subscription scope**, which grants read access to all resources within the subscription, including blob containers and their contents.

- Even if conditions are applied at lower scopes, the Reader role at the subscription level ensures User1 can read blob3.

- Therefore, the statement “User1 can read blob3” is **true**.

### Incorrect

**Option B: No**

- Incorrect because denying read access would contradict the permissions inherited from the Reader role at the subscription scope.

- Unless an explicit **Deny assignment** is configured (which is rare in Azure RBAC), User1 retains read access.

###

---

### Question 15

**Case Study: Contoso Ltd.’s Azure Storage Optimization**

(Note: There are multiple questions in this test based on this case study.)

Contoso Ltd., a medium-sized manufacturing company, recently migrated its on-premises infrastructure to Azure. The company is now focused on optimizing its storage solution to achieve better performance, cost-efficiency, and scalability.

Current Environment:

Contoso currently leverages Azure Blob Storage for various file types, including logs, backups, and images. They are using a single general-purpose v2 storage account configured with Locally Redundant Storage (LRS) in the East US region. Application logs are frequently accessed for analysis, while backups are accessed less often. The company aims to minimize costs while upholding high availability and durability for their data.

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

To address Contoso’s requirement for protecting sensitive data with strong encryption, which of the following options would you recommend?

**Options:**

- **A.** Enable Azure Storage Service Encryption (SSE) with customer-managed keys stored in Azure Key Vault. ✅
- **B.** Enable Azure Storage Service Encryption (SSE) with Microsoft-managed keys only.
- **C.** Implement HTTPS for all communication with the storage accounts.
- **D.** Use Azure Disk Encryption on the virtual machines accessing the storage accounts.

**Correct answer:** A

**Explanation:**

**Data Encryption for Sensitive Data in Azure Storage**

While all listed options contribute to data security, using customer-managed keys (CMK) in Azure Key Vault for Server-Side Encryption (SSE) provides the highest degree of control and security for sensitive data stored in Azure. Here’s a breakdown:

- Server-Side Encryption (SSE) with Microsoft-managed keys:

- This is the default encryption method for Azure Storage and is suitable for most general scenarios.

- Limitation: It does not provide you with direct control over the encryption keys themselves, as Microsoft manages them.

- Server-Side Encryption (SSE) with customer-managed keys (Recommended for sensitive data):

- This option allows you to manage your own encryption keys within Azure Key Vault.

- Benefit: It grants you greater control over the entire key lifecycle, including key generation, rotation, and access policies. This provides an additional layer of security and helps meet stringent compliance requirements for highly sensitive data.

- Azure Disk Encryption:

- This technology is designed to protect data on virtual machine disks.

- Limitation: It does not directly address the encryption of data at rest within the Azure Storage account itself (e.g., Blobs, Files, Queues, Tables).

- HTTPS:

- Purpose: HTTPS ensures secure communication between clients and the storage service by encrypting data in transit.

- Limitation: It does not provide encryption for data at rest within the storage account.

**Key Benefits of Using Customer-Managed Keys in Azure Key Vault for SSE:**

- Enhanced Security: You retain complete control over the encryption keys used for your data, significantly reducing the risk of unauthorized access.

- Regulatory Compliance: For organizations needing to adhere to specific regulatory standards (e.g., GDPR, HIPAA, PCI DSS), using customer-managed keys can be a critical component in meeting those compliance obligations.

- Advanced Key Management Features: Azure Key Vault provides robust features such as automated key rotation, comprehensive auditing of key usage, and granular access control policies, offering superior flexibility and control over your key management practices.

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

### Question 19

Your company has an Azure account and subscription. The subscription contains the resources in the following table:

**Name**
**Type**

skillcertlabstore
Storage container

skillcertlabs-rg
Resource Group

documents
BLOB container

demo
File share

Your IT administrator has deployed a virtual machine called demovm and a storage account called skillcertlabs-temp by using a single Azure Resource Manager template. You want to do a review of the template that was used for the deployment.

Which of the following resource blade could be used to view the template that was used for the deployment?

**Options:**

- **A.** A. skillcertlabs-rg ✅
- **B.** B. demovm
- **C.** C. skillcertlabs-temp
- **D.** D. skillcertlabstore

**Correct answer:** A

**Explanation:**

The correct answer is A. skillcertlabs-rg.

Azure Resource Manager templates are deployed at the resource group level. Therefore, to view the template used for a deployment, you need to go to the resource group where the resources were deployed. In this case, the resources demovm and skillcertlabs-temp were deployed in the resource group skillcertlabs-rg, so that is where you will find the template.

---

### Question 22

You have an Azure Storage account named storage1 and an Azure virtual machine named VM1. VM1 has a premium SSD managed disk.

You need to enable Azure Disk Encryption for VM1.

Which three actions should you perform in sequence?

**Options:**

- **A.** Create an Azure Key Vault
Configure storage1 to use a customer-managed key
Run the Set-AzVMDiskEncryptionExtension cmdlet
- **B.** Create an Azure Key Vault
Set the Key Vault access policy to Enable access to Azure Disk Encryption for volume encryption
Run the Set-AzVMDiskEncryptionExtension cmdlet ✅
- **C.** Create an Azure Key Vault
Set the Key Vault access policy to Enable access to Azure Virtual Machines for deployment
Run the Set-AzVMDiskEncryptionExtension cmdlet

**Correct answer:** B

**Explanation:**

Create an Azure Key Vault ✅

Disk encryption keys must be stored in an Azure Key Vault.

Set the Key Vault access policy to Enable access to Azure Disk Encryption for volume encryption ✅

This allows Azure Disk Encryption to access the keys to encrypt the VM’s OS and data disks.

Run the Set-AzVMDiskEncryptionExtension cmdlet ✅

This enables disk encryption on the VM using the keys stored in Key Vault.

Explanation:

To enable Azure Disk Encryption (ADE) on a VM with a premium SSD:

Step 1: Key Vault is required because ADE uses either platform-managed or customer-managed keys stored in Key Vault.

Step 2: You must configure the Key Vault access policy to allow Azure Disk Encryption access, not just deployment or VM access.

Step 3: Use the Set-AzVMDiskEncryptionExtension PowerShell cmdlet to apply encryption to the VM’s OS and data disks.

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/disk-encryption-key-vault#install-tools-and-connect-to-azure

---

### Question 27

You have an Azure subscription that contains a user named User1. You need to ensure that User1 can deploy virtual machines and manage virtual networks. The solution must use the principle of least privilege.

Which role-based access control (RBAC) role should you assign to User1?

**Options:**

- **A.** Owner
- **B.** Virtual Machine Contributor
- **C.** Contributor ✅
- **D.** Virtual Machine Administrator Login

**Correct answer:** C

**Explanation:**

Owner

Full control over resources, including RBAC assignments.

❌ Too many privileges — not least privilege.

Virtual Machine Contributor

Can manage VMs only, but cannot manage virtual networks.

❌ Insufficient — fails requirement #2.

Contributor

Can create and manage all Azure resources (VMs, VNets, etc.).

Cannot assign RBAC roles.

✅ Correct choice — satisfies both VM + VNet management with least privilege.

Virtual Machine Administrator Login

Grants login rights to VMs (RDP/SSH), not management of Azure resources.

❌ Not relevant.

Virtual Machine Contributor: Lets you manage virtual machines, but not access to them, and not the virtual network or storage account they’re connected to.

And because the requirement is to manage Virtual Machines and Virtual Networks, the unique RBAC Role satisfying the requirement is Contributor.

Reference:

https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

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

### Question 41

**Azure File Sync Scenario Analysis**

A company has configured the following Azure file shares within their Azure subscription:

**Name**
**Storage Account**
**Location**

skillcertlabshare1
skillcertlabstorage1
West US

skillcertlabshare2
skillcertlabstorage1
West US

They also maintain the following on-premise servers:

**Name**
**Folders**

skillcertlabserver1
D:\skillcertlab1, E:\skillcertlab2

skillcertlabserver2
D:\Data

**The company has performed the following Azure File Sync tasks:**

- A new Storage Sync service named skillcertlabsync was created.

- A new Azure File Sync group named skillcertlabgroup was established.

- skillcertlabshare1 was added as a cloud endpoint in skillcertlabgroup.

- Both skillcertlabserver1 and skillcertlabserver2 are registered as servers with the skillcertlabsync service.

- skillcertlabserver1 with the path D:\skillcertlab1 was added as a server endpoint in skillcertlabgroup.

Question:

Can you now add skillcertlabserver1 along with the path E:\skillcertlab2 as another server endpoint in skillcertlabgroup?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because Azure file shares are tied to their **storage account and region**.

- You cannot directly combine or replicate file shares across different storage accounts or regions for seamless usage.

- If the requirement is to use them together as if they were one share, the answer is **No**.

- To achieve cross-region or cross-account access, you would need additional configurations such as **Azure File Sync** or replication, but not direct usage as a single share.

### Incorrect

**Option A. Yes**

- Incorrect because this assumes that file shares across different storage accounts and regions can be directly combined or accessed as one.

- Azure does not support merging file shares across accounts/regions natively.

- Without extra services like File Sync, this option is not valid.

---

### Question 43

**A company has the following resources:**

- A file share named **skillcertlabshare** in an Azure storage account.

- The file share contains a file named **skillcertlab1.txt**.

- An **Azure File Sync Service** resource.

**Statement:** “User1 can resize VM1.” Select **Yes** or **No**.

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because resizing a VM requires **Contributor‑level permissions** (or higher) on the resource group or subscription where the VM resides.

- The scenario describes resources related to **Azure File Sync and storage**, not VM role assignments.

- Since User1 does not have the necessary role assignment for VM1, the statement is false.

### Incorrect

**Option A. Yes**

- Incorrect because User1 does not have the required permissions to resize VM1.

- Without a role such as **Virtual Machine Contributor** or **Contributor** on the resource group containing VM1, resizing is not possible.

###

---

### Question 51

A company has the following set of servers that need to be migrated to an Azure subscription:

**Name**
**Operating System**
**Configuration**

skillcertproer1
Windows Server 2012 R2
Domain Controller

skillcertproer2
Windows Server 2016
Microsoft SQL Server 2016

skillcertproer3
Red Hat Linux Enterprise 7.5
File Server

The company decides to use the Azure Site Recovery tool to move the servers to Azure.

Would this fulfill the requirement?

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

**B. No, Azure Site Recovery would not fulfill the requirement for all servers in this scenario.**

Here’s why:

**Skillcertproer1 (Domain Controller):** Azure Site Recovery primarily supports replicating and recovering **virtual machines (VMs)** to Azure. While it can potentially replicate physical servers, it’s not designed for migrating Domain Controllers due to their complex dependencies and Active Directory synchronization requirements. A dedicated solution like Azure Migrate is recommended for domain controller migration.

**Skillcertproer2 (Microsoft SQL Server 2016):** Azure Site Recovery supports migrating SQL Server VMs, but it’s important to ensure compatibility with the specific version and configuration. Additionally, migrating production databases requires careful planning and considerations beyond replication. Additional tools or processes might be needed for a successful migration.

**Skillcertproer3 (Red Hat Linux Enterprise 7.5 File Server):** Azure Site Recovery supports migrating Linux VMs, including Red Hat Enterprise 7.5. However, it’s crucial to ensure proper configuration and application compatibility in the Azure environment.

Therefore, while Azure Site Recovery might be suitable for migrating some servers, it’s not a one-size-fits-all solution for all scenarios, especially considering Domain Controllers and complex database migrations.

Here are some alternative solutions to consider based on the specific server details:

**Domain Controller:** Azure Migrate or manual migration with active directory synchronization.

**SQL Server:** Azure Migrate, Azure Database Migration Service, or manual migration with careful planning and testing.

**Linux File Server:** Azure Site Recovery with proper configuration and application compatibility testing.

---

### Question 1

**You have an Azure Storage account named storage1. You need to enable a user named User1 to list and regenerate storage account keys for storage1.** **Solution: You assign the Storage Account Contributor role to User1.** **Does this meet the goal?**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because the **Storage Account Contributor role** provides permissions to manage a storage account, including **listing and regenerating access keys**.

- This role allows User1 to perform management operations on the storage account but does not grant access to the data itself (for example, reading or writing blobs).

- Therefore, assigning this role meets the stated goal of enabling User1 to list and regenerate keys.

### Incorrect

**Option B. No**

- Incorrect because denying this solution would imply that the Storage Account Contributor role does not allow key management.

- In reality, this role explicitly includes permissions for **listing and regenerating keys**, so the solution does meet the requirement.

###

---

### Question 2

You have several Azure virtual machines on a virtual network named VNet1.

You configure an Azure Storage account as shown below.

Based on the information presented in the graphic, select the answer choice that completes the following statement.

**“The virtual machines on the 10.2.9.0/24 subnet will have network connectivity to the file shares in the storage account ________________________________.”**

**Options:**

- **A.** always
- **B.** during a backup
- **C.** never ✅

**Correct answer:** C

**Explanation:**

### Correct

**Option C. never**

- **Correct because**:

- Azure Storage accounts can be restricted by **virtual network rules** and **firewall settings**.

- If the subnet **10.2.9.0/24** is **not included** in the storage account’s network rules, then VMs in that subnet will **never** have connectivity to the file shares.

- Connectivity is only possible if the subnet is explicitly allowed in the storage account configuration.

### Incorrect

**Option A. always**

- Incorrect because connectivity is not guaranteed unless the subnet is explicitly permitted.

- If the subnet is excluded, VMs cannot connect at all.

**Option B. during a backup**

- Incorrect because backup operations do not override network restrictions.

- Connectivity rules are enforced consistently, regardless of backup processes.

###

---

### Question 3

Scenario:

Your organization, a rapidly growing tech company, has expanded its Azure environment significantly in the past year. To maintain security, compliance, and cost control, the IT team has decided to implement Azure Policy. You, as the Azure Administrator, are tasked with creating policy definitions that will enforce various rules across the organization‘s Azure subscriptions.

These rules include:

Restricting the allowed resource types that can be deployed

Enforcing specific tagging conventions on resources

Ensuring that all storage accounts use a specific encryption type

Limiting the regions where virtual machines can be created

Preventing public access to storage accounts

You need to choose the right policy definition types to achieve these objectives.

Question:

Given the scenario and the required rules, which Azure Policy definition types would you primarily use to enforce these governance and compliance standards across your organization‘s Azure environment?

**Options:**

- **A.** Built-in policy definitions ✅
- **B.** Policy exemptions
- **C.** Custom policy definitions ✅
- **D.** Initiative definitions only

**Correct answer:** A, C

**Explanation:**

**Correct **

**Option A. Built-in policy definitions**

✅ **Pre-existing Microsoft policies** cover common requirements:

“Allowed resource types” (deny list)

“Allowed locations/regions” for VMs

“Storage accounts should use customer-managed keys”

“Storage accounts should restrict public access”

**Option C. Custom policy definitions**

✅ **Organization-specific rules** requiring custom policies:

**Specific tagging conventions** (company standards)

**Specific encryption type** for storage accounts

Complex combinations of above requirements

**Incorrect **

**Option B. Policy exemptions**

❌ **Bypasses enforcement** – opposite of governance objective.

**Option D. Initiative definitions only**

❌ **Initiatives group policies** but don’t create definitions. Still need underlying policy definitions.

---

### Question 5

Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com. The domain contains the servers shown in the following table.

You plan to migrate contoso.com to Azure.

You create an Azure virtual network named VNET1 that has the following settings:

- Address space: 10.0.0.0/16

- Subnet:

- Name: Subnet1

- IPv4: 10.0.1.0/24

You need to move DC1 to VNET1. The solution must ensure that the member servers in contoso.com can resolve AD DS DNS names.

How would you configure the **Name resolution**?

**Options:**

- **A.** Configure VNET1 to use a custom DNS server. ✅
- **B.** Configure VNET1 to use the default Azure-provided DNS server.
- **C.** Create an Azure Private DNS zone named contoso.com.
- **D.** Create an Azure public DNS zone named contoso.com.

**Correct answer:** A

**Explanation:**

**Option A: Configure VNET1 to use a custom DNS server**

**DC1 (domain controller)** provides **authoritative DNS** for contoso.com. Set VNET1 **custom DNS server IP** to DC1’s private IP (10.0.1.x). All VMs in VNET1 use **DC1 for AD DS name resolution** – essential for domain joins, authentication, Group Policy.

### Incorrect

**Option B: Default Azure DNS**

**Azure DNS (168.63.129.16)** cannot resolve **private AD DS domain names** (contoso.com internal records).

**Option C: Azure Private DNS zone**

**Hosts static DNS records**. Cannot provide **dynamic AD-integrated DNS** replication or **multi-master updates** required for domain controllers.

**Option D: Azure public DNS zone**

**Internet-facing public records only**. Exposes internal domain publicly – **security risk**.

---

### Question 10

You want to replicate Azure VMs to a secondary region for disaster recovery purposes. Which Azure Site Recovery replication type would you choose to minimize data loss and ensure the quickest recovery time in case of a disaster?

**Options:**

- **A.** Asynchronous Replication
- **B.** Continuous Replication ✅

**Correct answer:** B

**Explanation:**

**Correct **

**Option B (Continuous Replication):** Azure Site Recovery exams test disaster recovery replication methods. Continuous replication provides near-real-time data synchronization with low RPO (seconds) and fastest RTO through VM snapshots and metadata in the secondary region.

**Incorrect**

**Option A (Asynchronous Replication):** General term implying higher latency; doesn’t specify ASR’s optimized continuous method for minimal data loss and quick recovery.

---

### Question 13

You have an Azure subscription that contains a virtual machine named VM1.

To VM1, you plan to add a 1-TB data disk that meets the following requirements:

Provides data resiliency in the event of a datacenter outage.

Provides the lowest latency and the highest performance.

Ensures that no data loss occurs if a host fails.

Which host caching would you recommend?

**Options:**

- **A.** None
- **B.** Read-only ✅
- **C.** Read/Write

**Correct answer:** B

**Explanation:**

**Correct**

**Option B (Read-only):** Read-only caching provides the lowest latency and highest performance for data disks by serving frequent reads from local host cache while ensuring data resiliency through Azure’s geo-redundant storage and no data loss on host failure via platform-managed replication.

**Incorrect**

**Option A (None):** No caching bypasses host cache entirely, resulting in higher latency and lower IOPS as all reads/writes go directly to remote storage, failing to meet performance requirements.

**Option C (Read/Write):** Read/write caching risks data loss on host failure since writes remain in volatile host cache before durable storage commitment, violating the no-data-loss requirement.

---

### Question 28

You have 70 TB of files on your on-premises file server.

You need to recommend a solution for importing data to Azure. The solution must minimize cost.

What Azure service should you recommend?

**Options:**

- **A.** Azure StorSimple
- **B.** Azure Batch
- **C.** Azure Data Box ✅
- **D.** Azure Stack

**Correct answer:** C

**Explanation:**

**Correct **

**Option C. Azure Data Box**

Azure Data Box ships physical devices with 80TB+ capacity to Azure data centers, providing the lowest cost solution for importing 70TB of on-premises files by avoiding expensive network data transfer bandwidth.

**Incorrect **

**Option A. Azure StorSimple**

Hybrid storage appliance designed for ongoing cloud tiering, not one-time bulk data import. Ongoing subscription costs make it more expensive than Data Box.

**Option B. Azure Batch**

Parallel compute service for running large-scale batch processing jobs, not a data import or migration solution.

**Option D. Azure Stack**

On-premises hybrid cloud platform for running Azure services locally, doesn’t import data to Azure cloud storage services.

---

### Question 32

Your company is migrating from on-premises storage to Azure Storage. Which Azure tools or services can you use to assess your current storage environment, plan your migration strategy, and estimate costs for Azure Storage?

**Options:**

- **A.** Azure Migrate ✅
- **B.** Azure Storage Migration Service
- **C.** Azure Pricing Calculator ✅
- **D.** Azure Cost Management ✅
- **E.** Azure Data Box

**Correct answer:** A, C, D

**Explanation:**

### Correct

**option A. Azure Migrate**

Assesses on-premises storage, plans migration, estimates costs.

**option C. Azure Pricing Calculator**

Estimates Azure Storage costs from current environment.

**option D. Azure Cost Management**

Forecasts and analyzes migration storage expenses.

### Incorrect

**option B. Azure Storage Migration Service**

Executes file migrations, no assessment.

**option E. Azure Data Box**

Offline data transfer appliance only.

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

### Question 38

You are implementing Azure Site Recovery for your on-premises VMware virtual machines. Which Azure Site Recovery component would you install on your on-premises vCenter Server to enable replication to Azure?

**Options:**

- **A.** Configuration Server
- **B.** Process Server
- **C.** Mobility Service ✅

**Correct answer:** C

**Explanation:**

### **Correct**

- **Option C. Mobility Service**

- Correct: The **Mobility Service agent** must be installed on each VMware VM (or physical server) to enable replication to Azure.

- It captures data changes on the VM and forwards them to the **Process Server**, which then sends them to Azure.

- Without the Mobility Service, replication cannot occur.

### **Incorrect**

- **Option A. Configuration Server**

- Incorrect: The Configuration Server is deployed separately (not on vCenter) and acts as the **central coordination point** for replication. It manages communication between on‑premises components and Azure, but it is not installed on vCenter itself.

- **Option B. Process Server**

- Incorrect: The Process Server handles **replication traffic**, compresses and encrypts data, and sends it to Azure. It is typically installed alongside the Configuration Server, not directly on vCenter.

---

### Question 39

You have Azure Storage accounts as shown in the following exhibit:

You can use ………. for Azure Blob Storage.

Please select the answer choice that completes the above statement correctly.

**Options:**

- **A.** storageaccount3az104
- **B.** storageaccount2az104 and storageaccount3az104
- **C.** storageaccount1az104 and storageaccount3az104
- **D.** all storage accounts ✅

**Correct answer:** D

**Explanation:**

**Correct**

**Option D (all storage accounts):** All Azure storage account types universally support Azure Blob Storage services for block, append, and page blobs regardless of performance tier (Standard/Premium) or optimization (StorageV2, BlobStorage, etc.).

**Incorrect**

**Option A (storageaccount3az104):** Limits to single account; Blob Storage works across all account kinds shown in typical AZ-104 exhibits.

**Option B (storageaccount2az104 and storageaccount3az104):** Partial selection excludes valid accounts; no specific pairing restriction exists.

**Option C (storageaccount1az104 and storageaccount3az104):** Incomplete combination ignores universal Blob Storage compatibility in all accounts.

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

### Question 12

**Scenario:** You have an **Azure subscription** with a user named **User1** and a storage account named **storage1**. The storage account contains resources (Table1, container1, folder1, etc.). User1 is assigned the following roles:

- **Storage Blob Data Reader**

- **Storage Table Data Contributor**

- **Storage File Data SMB Share Contributor**

You create a **Shared Access Signature (SAS1)** with specific settings. The question asks: To which resources can User1 write by using SAS1?

###

**Options:**

- **A.** Table1 only ✅
- **B.** Table1 and container1 only
- **C.** folder1 and Table1 only
- **D.** folder1 and container1 only
- **E.** Table1, folder1, and container1

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Table1 only**

- **Correct because**:

- User1 has **Storage Table Data Contributor**, which grants **write permissions** to Azure Table storage.

- The **SAS1** provides access, but effective permissions are the **intersection of SAS and role assignments**.

- For blobs (container1, folder1), User1 only has **Blob Data Reader**, which allows read‑only access.

- For file shares (folder1), User1 has **File Data SMB Share Contributor**, but SAS1 does not grant write permissions to file shares in this scenario.

- Therefore, the only resource User1 can **write to** is **Table1**.

### Incorrect

**Option B. Table1 and container1 only**

- Incorrect because User1 has **read‑only** access to container1 (Blob Data Reader). They cannot write to blobs.

**Option C. folder1 and Table1 only**

- Incorrect because while User1 can write to Table1, folder1 is part of a file share, and SAS1 does not grant write access there.

**Option D. folder1 and container1 only**

- Incorrect because User1 cannot write to either container1 (read‑only) or folder1 (no SAS write permission).

**Option E. Table1, folder1, and container1**

- Incorrect because only Table1 is writable. Including folder1 and container1 is wrong.

###

---

### Question 13

You are configuring Microsoft Entra authentication for an Azure Storage account named storage1.

You need to ensure that the members of a group named Group1 can upload files by using the Azure portal.

The solution must use the principle of least privilege.

Which two roles should you assign to Group1?

**Options:**

- **A.** Reader ✅
- **B.** Storage Blob Data Reader
- **C.** Storage Blob Data Contributor ✅
- **D.** Storage Account Contributor
- **E.** Contributor

**Correct answer:** A, C

**Explanation:**

### **Correct**

**Option A. Reader**

- Correct because the **Reader** role allows members of Group1 to view the storage account and its configuration in the Azure portal.

- This is necessary so they can navigate to the storage account and access the interface for uploading files.

**Option C. Storage Blob Data Contributor**

- Correct because the **Storage Blob Data Contributor** role grants permissions to read, write, and delete blob data.

- This is the least-privilege role that allows uploading files into containers in the storage account.

Together, these roles ensure Group1 can **see the storage account in the portal (Reader)** and **upload files (Storage Blob Data Contributor)** without granting unnecessary administrative permissions.

### **Incorrect**

**Option B. Storage Blob Data Reader**

- Incorrect because this role only allows **read access** to blob data. It does not permit uploading or modifying files.

**Option D. Storage Account Contributor**

- Incorrect because this role allows management of the entire storage account (create/delete containers, configure settings). This exceeds the least privilege requirement.

**Option E. Contributor**

- Incorrect because this role grants broad permissions across all resources in the subscription or resource group. It is far more than what is needed for simply uploading files.

---

### Question 14

You have an Azure subscription linked to a hybrid Microsoft Entra tenant. The tenant contains the users shown in the following table.

You create the Azure Files shares shown in the following table.

You configure identity-based access for contoso2024 as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User2 can access the content in share2.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Yes.

To access an Azure File share using identity-based authentication, two layers of permissions must be satisfied:

- 
Share-level permissions: (RBAC roles like Storage File Data SMB Share Contributor).

- 
Directory/File-level permissions: (NTFS/ACLs).

**1. Identity Compatibility**

- 
User2 has “On-premises sync enabled: Yes.” This means User2 is a hybrid identity.

- 
The exhibit shows that Azure AD Kerberos is “Already configured.”

- 
Azure AD Kerberos specifically requires hybrid identities (users synced from AD to Entra ID) to function. Since User2 is synced, they meet the identity requirement for this authentication method.

2. Share-Level Permissions (The Exhibit)

- 
The exhibit shows that for storage account contoso2024, “Step 2: Set share-level permissions” is configured to Enable permissions.

- 
The dropdown selected is Storage File Data SMB Share Contributor.

- 
This setting applies the “Default Share-level Permission” to all authenticated users. Since User2 is an authenticated hybrid user in the tenant, they automatically inherit this share-level role for any share within that storage account (which includes share2).

3. Storage Account Mapping

- 
share2 is located on the storage account contoso2024.

- 
The configuration in the exhibit specifically targets contoso2024. Therefore, the permissions apply to share2.

---

### Question 16

Scenario:

Your company‘s software development team is embarking on a new project that requires close collaboration between multiple developers located in different geographic regions. The team needs a secure and centralized repository to store their source code, allowing for simultaneous editing, version control, and easy access for all team members.

Security is paramount, as the codebase contains sensitive intellectual property. Additionally, the solution should integrate seamlessly with the team‘s existing development tools and processes.

Question:

Given the scenario and requirements, which Azure storage service would you recommend for this collaborative development project?

**Options:**

- **A.** Azure Files
- **B.** Azure Data Lake Storage
- **C.** Azure Blob Storage
- **D.** Azure Repos ✅

**Correct answer:** D

**Explanation:**

**Correct: ****D. Azure Repos**

The scenario explicitly describes a **source code repository** for collaborative software development with requirements for version control, simultaneous editing, and integration with development tools. Azure Repos is the service specifically designed for this purpose.

- 
**Azure Repos** provides **Git repositories** or **Team Foundation Version Control (TFVC)** for source control. It is a core component of **Azure DevOps Services**, built for developer teams. It offers:

- 
Secure, private Git repos.

- 
Full version control (branching, pull requests, commits).

- 
Built-in features for collaboration and code reviews.

- 
Seamless integration with CI/CD pipelines, work item tracking, and other development tools.

**Incorrect:**

- 
**A. Azure Files** – This is a managed **file share** service (supporting SMB and NFS protocols). It is ideal for storing shared application files, configuration files, or development tools that need to be mounted as a network drive. It is **not** a source code repository service and lacks built-in version control, branching, and pull request workflows essential for modern development.

- 
**B. Azure Data Lake Storage** – This is a massively scalable and optimized storage service for **big data analytics** workloads. It is designed for storing vast amounts of structured or unstructured data (like logs, IoT data, telemetry) for processing by analytics frameworks. It is completely unsuitable for storing and managing source code with version control.

- 
**C. Azure Blob Storage** – This is a general-purpose, scalable object storage service for storing massive amounts of **unstructured data** such as text, images, videos, backups, and static website content. While you could theoretically store source code files as blobs, it provides **none** of the collaborative version control, branching, merging, or development lifecycle features required by the scenario. It is not a source code management tool.

---

### Question 19

Your network contains an on-premises Active Directory Domain Services (AD DS) domain.

The domain contains the identities shown in the following table.

You have an Azure subscription that contains a storage account named storage1. The file shares in storage1 have an identity source of AD DS and Default share-level permissions set to Enable permissions for all authenticated users and groups.

You create an Azure Files share named share1 that has the roles shown in the following table.

You have a Microsoft Entra tenant that contains a cloud-only user named User3.

You use Microsoft Entra Connect to sync OU1 from the AD DS domain to the Microsoft Entra tenant.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User1 can access content in share1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- **Correct because**:

- Azure Files with **AD DS authentication** requires that the user identity be part of the **synchronized AD DS domain**.

- User1 is an **on‑premises AD DS identity**, but unless explicitly synced into Microsoft Entra ID and granted access, User1 cannot authenticate to Azure Files.

- The default setting “Enable permissions for all authenticated users” applies only to authenticated identities recognized by the configured identity source.

- Since User1 does not have the required Azure AD/Entra integration for storage1, they cannot access share1.

### Incorrect

**Option A. Yes**

- Incorrect because simply being an AD DS user does not guarantee access. Without proper synchronization and role assignment, User1 cannot authenticate to Azure Files.

---

### Question 31

You have a sync group named Sync1 that has a cloud endpoint. The cloud endpoint includes a file named File1.txt.

Your on-premises network contains servers that run Windows Server 2016. The servers are configured as shown in the following table:

You add Share1 as an endpoint for Sync1. One hour later, you add Share2 as an endpoint for Sync1.

True or False.

File1.txt from Share1 replicates to Share2.

**Options:**

- **A.** TRUE ✅
- **B.** FALSE

**Correct answer:** A

**Explanation:**

**Correct**

**Option A. TRUE**

because: In Azure File Sync, when you add multiple endpoints to a sync group, files replicate across all endpoints through the **cloud endpoint**. Since File1.txt  already exists in the cloud endpoint and Share1 is added first, the file synchronizes to Share1. When Share2 is later added to the same sync group, it also synchronizes with the cloud endpoint, meaning File1.txt  will replicate from Share1 (via the cloud endpoint) to Share2. This ensures consistency across all endpoints in the sync group.

**Incorrect**

**Option B. FALSE**

because: Saying “False” would imply that File1.txt  does not replicate to Share2. This is incorrect because Azure File Sync ensures that all endpoints in a sync group remain consistent with the cloud endpoint. Once Share2 is added, it automatically receives the files already present in the cloud endpoint, including File1.txt..

---

### Question 33

Your organization needs to secure access to Azure Storage accounts so that they are accessible only from specific VNets and public access is restricted. Which **Azure storage security feature** should you use to achieve this?

**Options:**

- **A.** A. Private Endpoints (Azure Private Link) ✅
- **B.** B. Microsoft Entra ID
- **C.** C. Network Security Groups (NSGs)
- **D.** D. Azure Firewall

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Private Endpoints (Azure Private Link)**

- **Correct because**:

- Private Endpoints provide secure connectivity to Azure Storage accounts via a **private IP address** in your VNet.

- This ensures traffic stays within the Microsoft backbone network and **blocks public endpoint access**.

- It directly meets the requirement of restricting access to **specific VNets** while preventing public exposure.

### Incorrect

**Option B. Microsoft Entra ID**

- Incorrect because Entra ID (Azure AD) provides **identity and access management**, not network‑level restrictions. It controls authentication/authorization but does not restrict access by VNet.

**Option C. Network Security Groups (NSGs)**

- Incorrect because NSGs control traffic between **subnets and VMs**, not access to **PaaS services like Azure Storage**. NSGs cannot enforce VNet‑only access to storage accounts.

**Option D. Azure Firewall**

- Incorrect because Azure Firewall provides centralized traffic filtering and protection, but it is not the recommended solution for restricting storage account access to VNets. It adds complexity and cost compared to Private Endpoints.

###

---

### Question 36

**Case Study: Contoso Ltd.’s Azure Storage Optimization**

(Note: There are multiple questions in this test based on this case study.)

Contoso Ltd., a medium-sized manufacturing company, recently migrated its on-premises infrastructure to Azure. The company is now focused on optimizing its storage solution to achieve better performance, cost-efficiency, and scalability.

Current Environment:

Contoso currently leverages Azure Blob Storage to store various file types, including logs, backups, and images. They are using a single general-purpose v2 storage account configured with Locally Redundant Storage (LRS) in the East US region. Application logs are frequently accessed for analysis, while backups are accessed less often. The company aims to minimize costs while upholding high availability and durability for their data.

Requirements:

- Optimize Storage: Tailor the storage solution for different data types, balancing performance with cost-efficiency.

- High Availability: Ensure frequently accessed data remains highly available, even in the event of a regional outage.

- Cost-Effectiveness: Implement a cost-effective storage tier for data accessed infrequently.

- Minimal Overhead: Minimize the management overhead associated with the storage solution.

Security Requirements:

- Encryption: Protect sensitive data (e.g., backups) with robust encryption, both at rest and in transit.

- Access Restriction: Limit access to storage accounts to only authorized users and applications.

- Monitoring &amp; Auditing: Monitor and audit access to storage accounts for security and compliance.

- Data Protection: Implement measures to prevent accidental deletion of critical data.

Question:

To restrict access to Contoso’s storage accounts, which of the following network security controls would be most appropriate?

**Options:**

- **A.** Use Azure Private Link to create private endpoints for the storage accounts, accessible only within Contoso‘s virtual network. ✅
- **B.** Implement Network Security Groups (NSGs) to allow traffic only from specific IP addresses or ranges.
- **C.** All of the above.
- **D.** Enable Azure Firewall and create rules to control inbound and outbound traffic to the storage accounts.

**Correct answer:** A

**Explanation:**

The correct answer is A. Use Azure Private Link to create private endpoints for the storage accounts, accessible only within Contoso‘s virtual network.

The case study emphasizes protecting sensitive data and limiting access to authorized users/applications within their infrastructure.

- 
Private Endpoints: When you use a Private Endpoint, the storage account is assigned a private IP address from your VNet. This effectively brings the storage service into your private network.

- 
Security Benefit: It eliminates exposure to the public internet entirely. Traffic between your VNet and the storage account travels over the Microsoft backbone network, satisfying the “Access Restriction” requirement with the highest level of security.

- 
Case Study Alignment: It provides the “robust encryption in transit” and “access restriction” required without the complexity of managing large lists of IP addresses.

**Incorrect:**

B. Implement Network Security Groups (NSGs)

- 
NSGs are used to filter traffic entering or leaving a subnet. They cannot be applied directly to an Azure Storage Account (PaaS). While you could use an NSG to control traffic from a VM toward a storage account, it doesn’t “restrict access to the storage account” itself from other sources or the public internet effectively on its own.

D. Enable Azure Firewall

- 
While Azure Firewall can filter traffic, it is generally used for protecting the perimeter of a VNet or controlling outbound traffic (Egress). Implementing a full Azure Firewall instance just to restrict access to storage accounts introduces significant management overhead and cost, which violates the requirement for “Minimal Overhead.”

---

### Question 38

You have an Azure subscription that contains the file shares shown in the following table.

You have the on-premises file shares shown in the following table.

You create an Azure file sync group named Sync1 and perform the following actions:

Add share1 as the cloud endpoint for Sync1.

Add data1 as a server endpoint for Sync1.

Register Server1 and Server2 to Sync1.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

1. You can add share3 as an additional cloud endpoint for Sync1

2. You can add data2 as an additional server endpoint for Sync1

3. You can add data3 as an additional server endpoint for Sync1

**Options:**

- **A.** Yes, Yes, Yes
- **B.** Yes, No, No
- **C.** No, Yes, No ✅
- **D.** Yes, Yes, No
- **E.** No, Yes, Yes

**Correct answer:** C

**Explanation:**

Statement 1: You can add share3 as an additional cloud endpoint for Sync1

Answer: No

- 
Logic: A Sync Group can have exactly one Cloud Endpoint. The Cloud Endpoint represents the “source of truth” in the cloud (the Azure File Share).

- 
Why it’s No: Since share1 has already been added as the cloud endpoint for Sync1, you cannot add another file share (share3) to the same group. If you wanted to sync share3, you would need to create a new Sync Group (Sync2).

Statement 2: You can add data2 as an additional server endpoint for Sync1

Answer: Yes

- 
Logic: Unlike cloud endpoints, a Sync Group can contain multiple Server Endpoints. These represent paths on registered servers that you want to keep in sync with the cloud endpoint.

- 
Why it’s Yes: You have already registered Server2 to the Storage Sync Service. Since data2 is a unique path on a registered server, it can be added to Sync1. All files in data1 (Server1), data2 (Server2), and share1 (Azure) will stay synchronized.

Statement 3: You can add data3 as an additional server endpoint for Sync1

Answer: No

- 
Logic: To add a server endpoint, the server must first be registered with the Storage Sync Service that contains the Sync Group.

- 
Why it’s No: Looking at the “actions performed” section, only Server1 and Server2 were registered. Server3 (which hosts data3) has not been registered. Therefore, data3 cannot be used as a server endpoint until the agent is installed on Server3 and the server is registered to the service.

---

### Question 39

**Scenario:** Your organization needs to implement **Immutable Storage (Write Once, Read Many – WORM)** for **Azure Blob Storage** to protect critical data against accidental deletion or modification.

**Question:** Which blob types and storage tiers support Immutable Storage, and what are the key considerations for implementing it?

**Options:**

- **A.** A. Block blobs ✅
- **B.** B. Append blobs ✅
- **C.** C. Page blobs
- **D.** D. Hot tier ✅
- **E.** E. Archive tier ✅

**Correct answer:** A, B, D, E

**Explanation:**

### Correct

**Option A. Block blobs**

- **Correct because** Immutable Storage policies (WORM) are supported for **block blobs**.

- Block blobs are the most common type used for storing documents, media, and backups, making them ideal for compliance scenarios.

**Option B. Append blobs**

- **Correct because** append blobs also support Immutable Storage.

- Append blobs are often used for logging scenarios, and WORM ensures logs cannot be tampered with once written.

**Option D. Hot tier**

- **Correct because** Immutable Storage can be applied across **all access tiers** (Hot, Cool, and Archive).

- The Hot tier is frequently accessed data, and WORM ensures compliance while still allowing reads.

**Option E. Archive tier**

- **Correct because** Immutable Storage is supported in the Archive tier as well.

- This is particularly useful for long‑term retention of compliance data at the lowest cost.

### Incorrect

**Option C. Page blobs**

- **Incorrect because** Immutable Storage is **not supported for page blobs**.

- Page blobs are used for Azure virtual machine disks, which require read/write operations, making WORM unsuitable.

---

### Question 43

You have an Azure subscription that contains 100 virtual machines. You regularly create and delete virtual machines. You need to identify unattached disks that can be deleted.

What should you do?

**Options:**

- **A.** From Azure Cost Management, view Cost Analysis
- **B.** From Azure Advisor, modify the Advisor configuration
- **C.** From Microsoft Azure Storage Explorer, view the Account Management properties
- **D.** From Azure Cost Management, view Advisor Recommendations ✅

**Correct answer:** D

**Explanation:**

**Correct**

**Option D. From Azure Cost Management, view Advisor Recommendations** because Azure Advisor provides recommendations to optimize costs, including identifying **unattached disks** that are incurring charges but are no longer associated with any virtual machines. This is the correct way to detect and safely delete unused disks in an Azure subscription.

**Incorrect**

**Option A. From Azure Cost Management, view Cost Analysis** because Cost Analysis shows spending trends and resource costs but does not specifically identify unattached disks. It is useful for monitoring expenses but not for pinpointing unused resources.

**Option B. From Azure Advisor, modify the Advisor configuration** because modifying Advisor configuration changes recommendation settings but does not directly identify unattached disks. The recommendations themselves must be viewed, not the configuration.

**Option C. From Microsoft Azure Storage Explorer, view the Account Management properties** because Storage Explorer is used for managing storage accounts, blobs, and files. It does not provide visibility into unattached managed disks in virtual machines.

---

### Question 47

You have an Azure subscription named Subscription1 that contains the following resource group:

- Name: RG1

- Region: West US

- Tag: “tag1”: “value1”

You assign an Azure policy named Policy1 to Subscription1 by using the following configurations:

- Exclusions: None

- Policy definition: Append a tag and its value to resources

- Assignment name: Policy1

- Parameters:

- Tag name: tag2

- Tag value: value2

After Policy1 is assigned, you create a storage account that has the following configuration:

- Name: storage1

- Location: West US

- Resource group: RG1

- Tags: “tag3”: “value3”

You need to identify which tags are assigned to storage1 resource.

**Options:**

- **A.** "tag3" : "value3" only
- **B.** "tag1" : "value1" and  "tag3" : "value3" only
- **C.** "tag2" : "value2" and  "tag3" : "value3" only ✅
- **D.** "tag1" : "value1", "tag2" : "value2" and "tag3" : "value3"

**Correct answer:** C

**Explanation:**

### **Correct**

**Option C: **"tag2":"value2"** and **"tag3":"value3"** only**

- This is the correct answer.

- The storage account was created with "tag3":"value3".

- The **Append policy** automatically adds "tag2":"value2" to all new resources.

- Resource group tags ("tag1":"value1") are **not inherited** by resources unless explicitly configured with an inherit policy.

- Therefore, storage1 ends up with **two tags**: "tag2":"value2" and "tag3":"value3".

### **Incorrect**

**Option A: **"tag3":"value3" only

- Incorrect because the policy appends "tag2":"value2".

- Storage1 will not have only "tag3".

**Option B: **"tag1":"value1"** and **"tag3":"value3" only

- Incorrect because resource group tags are not automatically inherited.

- "tag1":"value1" will not appear unless an inheritance policy is applied.

**Option D: **"tag1":"value1"**, **"tag2":"value2"**, and **"tag3":"value3"

- Incorrect because "tag1":"value1" from RG1 does not propagate to storage1.

- Only "tag2" (from policy) and "tag3" (manually added) are applied.

---

### Question 48

**Azure File Sync Scenario: Initial Sync Behavior** A company has the following resources configured:

- **Azure File Share**: skillcertlabshare within an Azure storage account, containing a file named skillcertlab1.txt.

- **Azure File Sync Service resource**.

Additionally, the company operates the following on‑premise Windows 2016 servers with their respective file shares and contents:

Name
Share
Contents

skillcertlabsrv1
D:\skillcertlabdata1
skillcertlab1.txt, skillcertlab2.txt

skillcertlabsrv2
D:\skillcertlabdata2
skillcertlab2.txt, skillcertlab3.txt

Steps performed sequentially:

- The skillcertlabshare file share is added as a **cloud endpoint** to a Sync Group named skillcertlabgroup.

- The server skillcertlabsrv1 with path D:\skillcertlabdata1 is added as a **server endpoint**.

- The server skillcertlabsrv2 with path D:\skillcertlabdata2 is added as a **server endpoint**.

**Question:** Given these steps, would the file skillcertlab1.txt on the cloud endpoint (Azure file share) be overwritten by skillcertlab1.txt from the D:\skillcertlabdata1 share on skillcertlabsrv1?

###

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- During the **initial sync**, Azure File Sync does not overwrite existing files in the cloud endpoint if the same file already exists.

- Instead, it performs a reconciliation process. If a file with the same name exists both in the cloud and on the server, Azure File Sync treats this as a **file conflict**.

- In conflict scenarios, the cloud version is preserved, and the server copy is renamed with a suffix (e.g., skillcertlab1-&lt;servername&gt;.txt) to avoid overwriting.

- Therefore, the file skillcertlab1.txt in the cloud endpoint will **not** be overwritten by the server’s version.

### Incorrect

**Option A. Yes**

- Choosing “Yes” would imply that the server’s file automatically overwrites the cloud file during initial sync.

- This is incorrect because Azure File Sync is designed to **prevent data loss** by avoiding overwrites in conflict situations.

- Instead of overwriting, it creates a conflict copy, ensuring both versions of the file are retained.

---

### Question 53

A company has an Azure subscription that contains the following resource groups

The resource group “skillcertlabs-rg1” contains the following resources

Would you be able to move the resource “skillcertlabstore2090” from the resource group “skillcertlabs-rg1” to “skillcertlabs-rg2”?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### No

To move a resource between resource groups, Azure performs a specific validation and execution process. This operation is impacted by the locks on the source resource, the source resource group, and the destination resource group.

While a Delete lock technically allows most “write” operations, a move operation in Azure is treated as a complex multi-step process that involves “deleting” the resource from the source scope and “writing” it to the target scope.

- 
Source Resource Lock: The storage account skillcertlabstore2090 has a Delete lock (skillcertlablock2). For most move operations, a Delete lock at the resource level or resource group level prevents the move because the ARM engine must be able to remove the resource from the source group.

- 
Destination Resource Group Lock: The destination group skillcertlabs-rg2 has a Delete lock (skillcertlablock1). During a move, both the source and destination resource groups are temporarily locked to prevent other modifications. However, the presence of a pre-existing management lock often blocks the move request during the Validation phase.

- 
The “Read-Only” Constraint (The Hidden Trap): Even if we ignored the Delete locks, look at the other resources in the source group. The virtual network skillcertlabnetwork has a Read-only lock. If the storage account has any hidden dependencies or if the move operation triggers a “write” action on the source Resource Group’s metadata, the Read-only lock at the source will block the modification required to finalize the move.

---

### Question 2

You have an Azure subscription that contains a user named User1 and a storage account named storage1. The storage1 account contains the resources shown in the following table.

User1 is assigned the following roles for storage1:

- Storage Blob Data Reader

- Storage Table Data Contributor

- Storage File Data SMB Share Contributor

For storage1, you create a shared access signature (SAS) named SAS1 that has the settings shown in the following exhibit.

To which resources can User1 write by using **key1**?

**Options:**

- **A.** Table1 only
- **B.** Table1 and container1 only
- **C.** folder1 and Table1 only
- **D.** folder1 and container1 only
- **E.** Table1, folder1, and container1 ✅

**Correct answer:** E

**Explanation:**

### Correct

**Option E. Table1, folder1, and container1**

- **Correct** because:

- **Table1:** User1 has **Storage Table Data Contributor**, which allows **read/write access** to Azure Table Storage.

- **folder1:** User1 has **Storage File Data SMB Share Contributor**, which allows **read/write access** to Azure Files (SMB shares).

- **container1:** With SAS1 configured for write permissions, User1 can write to blobs in container1.

- Together, these permissions allow User1 to write to **all three resources**.

### Incorrect

**Option A. Table1 only**

- **Incorrect** because User1 also has permissions to write to **folder1 and container1**, not just Table1.

**Option B. Table1 and container1 only**

- **Incorrect** because this ignores **folder1**, which User1 can also write to via SMB share contributor role.

**Option C. folder1 and Table1 only**

- **Incorrect** because this excludes **container1**, which is accessible with SAS write permissions.

**Option D. folder1 and container1 only**

- **Incorrect** because this excludes **Table1**, where User1 has contributor rights.

---

### Question 4

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.

You have an Azure Storage account named storage1.

You need to enable a user named User1 to list and regenerate storage account keys for storage1.

Solution: You assign the Storage Account Encryption Scope Contributor Role to User1.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- **Explanation:**

- The **Storage Account Encryption Scope Contributor** role allows management of encryption scopes within a storage account.

- It does **not** grant permissions to **list or regenerate storage account keys**.

- To meet the requirement, User1 would need a role such as **Storage Account Key Operator Service Role** or **Storage Account Contributor**, which specifically includes permissions to list and regenerate keys.

- Therefore, the proposed solution does **not** meet the goal.

### Incorrect

**Option A. Yes**

- Incorrect because assigning the **Storage Account Encryption Scope Contributor** role does not provide the necessary permissions for key management.

- This role is focused on encryption scope operations, not on storage account key operations.

---

### Question 11

You have an Azure subscription that contains the storage accounts shown in the following exhibit.

In which storage accounts you can use the archive access tier?

**Options:**

- **A.** Contoso101 only
- **B.** Contoso104 only
- **C.** Contoso101 or contoso103 only ✅
- **D.** Contoso101, Contoso102 or contoso103 only
- **E.** Contoso101, Contoso102, Contoso103 or contoso104 only

**Correct answer:** C

**Explanation:**

### Correct 

Option C: Contoso101 or contoso103 only

To use the Archive access tier, a storage account must meet specific criteria:

- 
Account Kind: It must be StorageV2 (General Purpose v2) or BlobStorage.

- 
Performance Tier: It must be Standard. Premium storage (Premium Block Blobs) does not support the Archive tier; it is designed for high-performance, low-latency access.

Why these two?

- 
Contoso101: (Assuming it is StorageV2, Standard) General Purpose v2 accounts are the default recommendation and support Hot, Cool, and Archive tiers.

- 
Contoso103: (Assuming it is BlobStorage, Standard) Dedicated Blob Storage accounts also support all three access tiers.

### Incorrect 

Option A &amp; B: Contoso101 only / Contoso104 only

- 
Reasoning: These are too restrictive. Both StorageV2 and BlobStorage (Standard) support Archive, so a single-account answer is usually incorrect if both types are present in the exhibit.

Option D: Contoso101, Contoso102 or contoso103 only

- 
Reasoning: Contoso102 is likely a Storage (General Purpose v1) account. GPv1 accounts do not support access tiers (Hot/Cool/Archive) at all. To use tiers, you must upgrade a GPv1 account to GPv2.

Option E: Contoso101, Contoso102, Contoso103 or contoso104 only

- 
Reasoning: Contoso104 is likely a Premium storage account. Archive is an offline tier meant for data that is rarely accessed, which is the exact opposite of the use case for Premium storage. Premium accounts stay “online” and do not support tiering to Archive.

---

### Question 17

You are setting up a new Azure Storage account for your company‘s marketing team.

Which performance tier should you choose if they require high transaction rates and low latency for their frequently accessed media files?

**Options:**

- **A.** Zone-redundant storage (ZRS)
- **B.** Standard
- **C.** Premium ✅
- **D.** Basic

**Correct answer:** C

**Explanation:**

### Correct 

Option C: Premium

- 
The Logic: The Premium performance tier uses Solid State Drives (SSDs) to store data. It is specifically engineered for workloads that require low latency and high transaction rates.

- 
The Use Case: Frequently accessed media files, database logs, and high-performance messaging scenarios benefit most from this tier. While more expensive than Standard, it provides consistent, sub-millisecond latency for I/O operations.

### Incorrect 

Option A: Zone-redundant storage (ZRS)

- 
Reasoning: ZRS is a redundancy (replication) strategy, not a performance tier. Redundancy defines how many copies of your data exist and where they are located (across three availability zones in a region). You can have ZRS on both Standard and Premium tiers, but it doesn’t inherently determine transaction speed.

Option B: Standard

- 
Reasoning: The Standard tier uses Magnetic Hard Disk Drives (HDDs). While it is cost-effective and provides high capacity, it cannot match the low latency or high transaction throughput of SSD-backed Premium storage. It is better suited for bulk storage or data that is accessed less frequently.

Option D: Basic

- 
Reasoning: This is a distractor. While “Basic” is a tier for some other Azure services (like App Service or Azure SQL), it is not a valid performance tier for Azure Storage Accounts.

---

### Question 19

**Azure Resource Relocation Scenario with Locks**

A company has an Azure subscription with the following resource groups and their associated locks:

Resource Group Name
Lock Name
Lock Type

skillcertlabs-rg1
None
None

skillcertlabs-rg2
skillcertlablock1
Delete

The skillcertlabs-rg1 resource group contains the following resources, each with its own specific locks:

**Resource Name**
**Type**
**Lock Name**
**Lock Type**

skillcertlabstore2090
Storage account
skillcertlablock2
Delete

skillcertlabnetwork
Virtual network
skillcertlablock3
Read-only

skillcertlabip
Public IP address
None
None

Question:

Would you be able to move the resource skillcertlabnetwork from the resource group skillcertlabs-rg1 to skillcertlabs-rg2?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- **Correct** because a **Delete lock** prevents deletion of the resource group and its resources, but it does **not** prevent modifications or updates to resources inside the group.

- Therefore, the presence of a Delete lock does not stop configuration changes or updates, only deletion.

- The answer is **No**, since the lock does not enforce the restriction implied in the question.

### Incorrect

**Option A. Yes**

- **Incorrect** because answering “Yes” would imply that the Delete lock prevents all changes, which is not true.

- Delete locks only block deletion, not updates or modifications.

- To prevent modifications, a **Read‑only lock** would be required.

###

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

### Question 6

Fabrikam has already enabled Azure Site Recovery from Central US to South Central US. They want to validate recovery without user impact, confirm runbooks and networking, and then discard the test environment when done.
What should you run?

**Options:**

- **A.** A. Test failover to an isolated VNet ✅
- **B.** B. Planned failover
- **C.** C. Unplanned failover
- **D.** D. Restart source VMs

**Correct answer:** A

**Explanation:**

A test failover creates recovery VMs in an isolated test network so you can validate boot, app dependencies, and automation without affecting production and without DNS cutover. When validation is complete, you clean up the test environment. It’s the standard, non-disruptive ASR drill.
Why the others are incorrect:
B: Planned failover shuts down source VMs and performs a coordinated failover—disruptive; used for real cutovers.
C: Unplanned failover is for outages and can proceed with potential data loss depending on replication state; not a safe drill.
D: Restarting source VMs doesn’t validate DR; it leaves recovery orchestration, networking, and runbooks untested.

---

### Question 8

You applied a **Delete** lock (CanNotDelete) at the **RG-App** resource group. The group contains VM1, stprod (Storage), and nsg-web. You need to validate what’s still allowed.

Which action is allowed?

**Options:**

- **A.** A. Delete VM1
- **B.** B. Delete RG-App
- **C.** C. Start VM1 ✅
- **D.** D. Delete stprod

**Correct answer:** C

**Explanation:**

A **Delete (CanNotDelete)** lock **prevents delete** operations at the scope and all child resources, but **allows reads and modifications**. VM lifecycle actions like **Start/Stop/Resize** are **writes** but not deletes, so they still succeed. Deleting the VM, the storage account, or the entire RG is blocked by the lock.

**Incorrect:**

- **A. Delete VM1:** Blocked by CanNotDelete at the RG scope.

- **B. Delete RG-App:** Blocked; you cannot delete a locked scope or its children.

- **D. Delete stprod:** Also blocked; delete is not permitted under CanNotDelete.

---

### Question 12

For **DataLake** in **West Europe**, compliance forbids **any** cross-region replication, but the platform must still survive a **zone** failure inside the region.

**Question:** Which redundancy should you choose?

**Options:**

- **A.** A. Locally redundant storage
- **B.** B. Geo-redundant storage
- **C.** C. Zone-redundant storage ✅
- **D.** D. Read-access geo-redundant storage

**Correct answer:** C

**Explanation:**

Zone-redundant storage spreads data **across multiple availability zones within the same region**, giving resilience to a **single zone outage** without sending data outside the region. This satisfies both parts: **zone** durability and strict **data residency** (no cross-region replication).

**Why the others are incorrect:**

- **Locally redundant storage:** All copies are in **one zone**; a zone failure could impact availability, so it doesn’t meet the zone-survivability requirement.

- **Geo-redundant storage:** Replicates data to a **different region**, which directly violates the “no cross-region replication” constraint—even though it offers regional DR.

- **Read-access geo-redundant storage:** Also replicates to another region (and adds read access there), so it likewise **breaks residency** requirements.

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

### Question 15

For **Backup1** in **East Asia**, compliance requires **cross-region copy** and the ability to **read from the secondary** during scheduled DR drills. There’s **no requirement** for zone-level durability in the primary.

**Question:** Which redundancy should you choose?

**Options:**

- **A.** A. Read-access geo-redundant storage ✅
- **B.** B. Geo-redundant storage
- **C.** C. Zone-redundant storage
- **D.** D. Locally redundant storage

**Correct answer:** A

**Explanation:**

**Read-access geo-redundant storage** provides the same cross-region replication as GRS **plus** the ability to **read from the secondary** at any time. That matches the drill requirement exactly—validators and auditors can access data in the paired region **without failover**. Since zone durability in the primary isn’t mandated, RA-GRS is the most accurate fit.

**Why the others are incorrect:**

- **Geo-redundant storage:** Creates the secondary copy but **does not allow reads** until failover; fails the “read during drills” requirement.

- **Zone-redundant storage:** In-region **zone** protection only; **no** cross-region copy or secondary reads.

- **Locally redundant storage:** Single datacenter scope; no zone or regional protection—doesn’t meet **either** cross-region or read-secondary needs.

---

### Question 16

Tailwind Traders must keep VM backup data in the same region but survive a zone outage. Compliance forbids any cross-region replication of backup data. You will configure redundancy on the vault that stores the backups.
Which redundancy should you choose?

**Options:**

- **A.** A. Locally redundant storage
- **B.** B. Zone redundant storage ✅
- **C.** C. Geo redundant storage
- **D.** D. Read-access geo redundant storage

**Correct answer:** B

**Explanation:**

Zone redundant storage keeps multiple copies across availability zones within the same region, so backups survive a single zone failure without leaving the region. This satisfies both residency (no cross-region copy) and resiliency (zone-level durability).
Why the others are incorrect:
A: Locally redundant storage stores copies in one datacenter; it doesn’t protect against zone failure.
C: Geo redundant storage replicates to a paired region, which violates the no cross-region requirement.
D: Read-access geo redundant storage also replicates to another region (adds read access there), still breaking residency rules.

---

### Question 24

VNetB clients can’t resolve storage1.blob.core.windows.net to the private endpoint IP. You have to fix name resolution without enabling public access.

What should you do?

**Options:**

- **A.** A. Link VNetB to the private DNS zone ✅
- **B.** B. Enable service endpoints to Storage
- **C.** C. Add NSG allow rules on VNetB subnets
- **D.** D. Re-enable public network access on Storage1

**Correct answer:** A

**Explanation:**

Private Endpoints rely on **service-specific private DNS zones**. Your Blob PE created/uses privatelink.blob.core.windows.net. Because only **VNetA** is linked to that zone, VNetB can’t resolve the PE’s private name. **Link the zone to VNetB** (or use DNS forwarders) so VNetB resolves the Blob FQDN to the **private IP** and reaches the PE while public access stays disabled.

**Why the others are incorrect:**

- **B:** Service endpoints secure traffic to Azure Storage **public endpoints**; they don’t resolve or route to **Private Endpoints**.

- **C:** NSGs filter traffic but don’t fix **DNS resolution**; name still won’t map to the private IP.

- **D:** Re-enabling public access bypasses the private path and violates the **private-only** requirement.

---

### Question 29

You now need **Azure Files** private access from VNetA to Storage1. Only a **Blob** private endpoint exists today, and public network access must remain disabled.

What should you do?

**Options:**

- **A.** A. Use the existing Blob private endpoint for Files
- **B.** B. Add a service endpoint for Files
- **C.** C. Allow SMB over Internet temporarily
- **D.** D. Create a File private endpoint (separate subresource) ✅

**Correct answer:** D

**Explanation:**

Azure Storage exposes **separate subresources** for Private Endpoints (Blob, **File**, Queue, Table). A Blob PE does **not** cover Azure Files. Create a **File** private endpoint and ensure the **Files** private DNS zone (privatelink.file.core.windows.net) is present/linked so SMB name resolution maps to the private IP. Public access can remain disabled.

**Why the others are incorrect:**

- **A:** One PE doesn’t span multiple subresources; Blob ≠ Files.

- **B:** Service endpoints use public endpoints and won’t meet **private-only** access.

- **C:** Opening SMB over Internet breaks the **private-only** requirement and security posture.

---

### Question 30

You have an Azure subscription that contains the virtual machines shown in the following table.

The subscription contains a storage account named contoso2024 as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM1 can connect to contoso2024 by using 131.107.10.10.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

With **Selected networks** enabled, a storage account will accept traffic only from:

- **Explicit IP allowlist entries**, and/or

- **VNet rules** (subnets with Microsoft.Storage service endpoint or private endpoint paths)

In this scenario, **131.107.10.10**—the **public IP** of **VM1**—is explicitly included in the storage account’s **IP allowlist**, and **VNet1/Subnet1** is also permitted. Either allowance is sufficient for connectivity. When VM1 initiates traffic using its public IP (e.g., via NAT through an internet path), the storage firewall matches the request source to the **allowed IP 131.107.10.10** and permits the connection. Additionally, because **VNet1/Subnet1** is allowed, VM1 can also reach the account over the **service endpoint** path if configured, but the statement specifically asks about using **131.107.10.10**, which is **allowed**.

Why “No” is incorrect

Deny would apply only if the source IP/subnet were **not** allowed or if the account was restricted to a different region/VNet path exclusively. Here, the **public IP is explicitly permitted**, so the firewall does not block traffic from VM1 when sourced as **131.107.10.10**.

---

### Question 31

You’re reading a Bicep/ARM file another team wrote. It has parameters, variables, and a section that names a resource type like Microsoft.Storage/storageAccounts@2023-01-01. You need to know which part of the file actually creates the storage account in Azure.
What is that part called?

**Options:**

- **A.** A. The resources section ✅
- **B.** B. The outputs section
- **C.** C. The parameters file
- **D.** D. The metadata block

**Correct answer:** A

**Explanation:**

In both ARM JSON and Bicep, the resources section (or a resource declaration in Bicep) is what tells Azure to create/update something — the type, name, API version, and properties. If it’s not in resources, it doesn’t get deployed.
Why the others are incorrect:
B. Outputs just return values after deployment; they don’t deploy anything.
C. A parameters file only supplies values to the template; no resource is created there.
D. Metadata is descriptive (info about the template); it’s not a deployable resource.

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

### Question 38

An app running on an Azure VM (managed identity) must upload files into a single Blob container for one hour. Security forbids account keys and long-lived credentials. The app will request tokens at runtime and call the Blob REST API.
What should you issue to the app?

**Options:**

- **A.** A. User delegation SAS ✅
- **B.** B. Account key
- **C.** C. Account SAS
- **D.** D. Storage firewall exception

**Correct answer:** A

**Explanation:**

A user delegation SAS is signed with a user delegation key obtained via Microsoft Entra ID, so no account key is exposed. You can scope it to the target container, limit permissions (e.g., c,w), and set a 1-hour expiry—perfect for least-privilege, time-bound uploads from an identity-enabled workload using Blob REST.
Why the others are incorrect:
B. Account key: Violates “no account keys”; broad, long-lived credential.
C. Account SAS: Still requires the account key to sign; fails the security requirement.
D. Firewall exception: Controls network path, not authorization; doesn’t grant scoped, time-bound upload rights.

---

### Question 39

You generate many download links for a Blob container each morning. If a leak occurs, you must be able to revoke all those links at once without rotating account keys or breaking other apps. Links must remain time-scoped day-to-day.
How should you issue and manage the links?

**Options:**

- **A.** A. Service SAS tied to a stored access policy (on the container) ✅
- **B.** B. User delegation SAS (ad-hoc for each link)
- **C.** C. Regenerate account keys
- **D.** D. Remove RBAC Reader from users

**Correct answer:** A

**Explanation:**

Create a stored access policy on the container, then issue Service SAS tokens that reference that policy. If there’s a leak, delete or update the policy to immediately invalidate all SAS linked to it—no account-key rotation, minimal blast radius, and you keep issuing fresh, time-scoped SAS daily.
Why the others are incorrect:
B. User delegation SAS: Good for keyless issuance, but there’s no single handle to revoke a batch of ad-hoc SAS already minted.
C. Regenerate account keys: Revokes everything signed with that key and disrupts other services; heavy-handed.
D. Remove RBAC Reader: SAS is pre-signed; RBAC changes don’t invalidate tokens already issued.

---

### Question 41

A company wants to prevent accidental deletion of a production storage account during a migration weekend. One admin suggests applying a Read-only lock, while another suggests a Delete lock so the storage account can still be updated if needed but not removed.
Statement: A Delete lock prevents the storage account from being deleted while still allowing authorized users to modify it.

**Options:**

- **A.** A. True ✅
- **B.** B. False

**Correct answer:** A

**Explanation:**

This is true because an Azure Delete lock prevents deletion of the resource but still allows read and modification operations. A Read-only lock is more restrictive because it blocks changes as well, so it would not match the requirement to keep updates possible during the migration.
This is a classic AZ-104 distinction: both lock types protect resources, but they do so at different levels. The right answer depends on understanding the operational requirement, not just knowing that “locks protect resources.”
Why B is wrong:
False is wrong because it confuses the behavior of Delete locks with Read-only locks. Delete locks are specifically intended to stop removal while permitting other management operations, which is exactly what the scenario describes.

---

### Question 43

You’re creating a new archive container for compliance. Requirements:
Write-once, read-many (WORM) for 7 years (no edits or deletes).
Must still allow append-only log writes during the retention period (append blocks only).
Administrators manage via RBAC; no anonymous access.
How should you configure the container?

**Options:**

- **A.** A. Public access: Blob
- **B.** B. Soft delete (blobs) = 7 years
- **C.** C. Container immutability policy: time-based retention (7 years)
- **D.** D. Container immutability policy: time-based retention (7 years) + Allow protected append blobs ✅

**Correct answer:** D

**Explanation:**

A container immutability policy with time-based retention (7 years) enforces WORM (no updates/deletes). Enabling Allow protected append blobs permits append-only writes to append blobs during the retention window—ideal for ongoing log ingestion while preserving immutability guarantees.
Why the others are incorrect:
A. Public access: Blob — Controls anonymous read; doesn’t enforce WORM or retention.
B. Soft delete (blobs) — Helps recover deletions, but content can still be overwritten and soft delete can be bypassed by retention limits; it’s not regulatory WORM.
C. Immutability (time-based) without append — Enforces WORM but blocks further appends; requirement demands append-only logging during retention.

---

### Question 44

A marketing team needs a new images container that supports anonymous read of blob objects for a public website, but you must avoid listing the container. The storage account currently disallows public access (default).
How should you configure access?

**Options:**

- **A.** A. Enable account setting Allow public blob access, then set container public access = Blob ✅
- **B.** B. Set container public access = Container
- **C.** C. Keep container Private and share SAS links only
- **D.** D. Create $web container and enable static website

**Correct answer:** A

**Explanation:**

To permit any anonymous read, the account-level setting must allow public access. Then, set the container to Public access: Blob, which allows anonymous download of blob objects without exposing container listing—exactly what a public website needs.
Why the others are incorrect:
B. Container — Allows anonymous blob reads and container listing; requirement says no listing.
C. Private + SAS — Works, but it requires signed URLs and token management; the requirement explicitly asks for anonymous access.
D. $web — Static website hosting feature; not required here and still relies on the account’s public access posture.

---

### Question 59

You have an Azure container registry that stores an image named Image1 and a Windows Server Azure virtual machine named VM1.
You need to ensure that you can run Image1 in VM1.
What should you install in VM1?

**Options:**

- **A.** A. Azure Storage Explorer
- **B.** B. Docker ✅
- **C.** C. Hyper-V role
- **D.** D. .NET Framework 4.8

**Correct answer:** B

**Explanation:**

Azure Container Registry stores container images, and Microsoft’s Azure Container Registry quickstart shows that you pull and run images from a registry by using Docker commands such as docker run. That means the VM needs a container runtime capable of pulling and running the image, which makes Docker the correct choice here.
Microsoft’s Windows containers guidance also describes preparing Windows Server for containers by installing a container runtime, and the training module for running containers on Windows Server explicitly calls out learning Docker and preparing Windows Server to run container workloads. Hyper-V can be involved for certain isolation scenarios, but it is not the core requirement to run a container image from a registry on a Windows Server VM.
Why the other options are incorrect:
• A. Azure Storage Explorer — Azure Storage Explorer is for working with Azure Storage resources such as blobs, files, queues, and tables. It does not provide container image pull or container runtime capability, so it cannot run Image1 on VM1.
• C. Hyper-V role — Hyper-V can be relevant for Hyper-V isolation or nested virtualization scenarios, but Microsoft’s container requirements say that requirement applies when hosting Hyper-V-isolated containers in a Hyper-V VM. The question asks what you should install to run the image, and the required runtime is Docker, not Hyper-V by itself.
• D. .NET Framework 4.8 — .NET Framework is an application framework, not a container runtime. Whether a containerized app uses .NET is separate from what the host VM needs in order to pull and run a container image from Azure Container Registry.

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

### Question 1

Contoso’s data team wants one SMB share for media assets. You have to create a single share sized 80 TiB on Standard storage; no Premium required.
Current state
What should you do?

**Options:**

- **A.** A. Enable Large file shares on the GPv2 account, then create an SMB share and set the quota to 80 TiB ✅
- **B.** B. Create four 20 TiB shares and stitch with DFS-N
- **C.** C. Migrate to Premium FileStorage; create an 80 TiB SMB share
- **D.** D. Use Blob containers instead; they scale beyond 80 TiB

**Correct answer:** A

**Explanation:**

Standard GPv2 accounts can host up to 100 TiB per share when Large file shares is enabled. Turn on Large file shares at the storage account level, then create the SMB share and set its quota to 80 TiB. This meets the “single share on Standard” requirement without moving to Premium.
Why the other options are incorrect:
B. Multiple shares + DFS-N: Increases operational complexity and does not satisfy the “single share” requirement.
C. Premium FileStorage: Works, but the scenario explicitly says no Premium required; Standard with Large file shares already meets the target size.
D. Blob containers: Blob isn’t a file share (different API/protocol); Windows SMB workloads expect Azure Files, not Blob.

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

### Question 6

Fabrikam must lock down storage account stcoreeu so no public network access is possible. All access must come from on-prem via ExpressRoute private peering to Azure VNets. Apps run in VNet-Hub and VNet-Spoke1 (peered).
Environment
What should you implement to meet the requirement?

**Options:**

- **A.** A. Service endpoints on both VNets; set Selected networks
- **B.** B. Selected networks; add on-prem public IP ranges
- **C.** C. Create a private endpoint in VNet-Spoke1; disable public network access; integrate privatelink DNS ✅
- **D.** D. NSG rules to deny Internet; keep storage firewall disabled

**Correct answer:** C

**Explanation:**

To eliminate public exposure, use a Private Endpoint for stcoreeu. Then disable public network access on the account so only the private interface is reachable. Configure privatelink DNS (e.g., privatelink.blob.core.windows.net) and link it to VNet-Spoke1 (and resolve from on-prem via conditional forwarders). Traffic from on-prem over ER private peering reaches the private endpoint; no public paths remain.
why the others are incorrect:
A. Service endpoints still use the public endpoint; they don’t block the internet path outright.
B. IP firewall uses public IP allowlists; requirement is no public access.
D. NSGs don’t control storage service exposure; without storage firewall/PE, the public endpoint still exists.

---

### Question 7

You have an Azure storage account named storage1.
You need to ensure that a user named User1 can access storage1 only from January 1, 2026 to January 31, 2026.
What should you do?

**Options:**

- **A.** A. Create a conditional access policy for User1
- **B.** B. Provide User1 with a shared access signature (SAS) ✅
- **C.** C. Provide User1 with a storage1 access key
- **D.** D. Use a condition when assigning User1 an RBAC role on storage1

**Correct answer:** B

**Explanation:**

A shared access signature (SAS) is designed for this exact kind of requirement because it provides delegated access with granular controls over permissions, accessible resources, and how long the SAS is valid. Microsoft’s Azure Storage SAS documentation explicitly lists validity duration as one of the controls and explains that stored access policies can define the start time and expiry time for a SAS.
That makes SAS the best answer for a fixed access window from January 1, 2026 through January 31, 2026. In real implementations, Microsoft recommends a user delegation SAS when possible because it is secured with Microsoft Entra credentials rather than the storage account key.
Why the other options are incorrect:
• A. Create a conditional access policy for User1 — Conditional Access is not the feature used to set a simple start-and-end access window for Azure Storage data in this way. Microsoft’s current storage guidance discusses Conditional Access in the context of protecting storage accounts with Microsoft Entra Conditional Access policies and notes that you must disallow Shared Key authorization to use those policies. That is a different control objective from issuing a time-bounded access token for a specific period.
• C. Provide User1 with a storage1 access key — Storage account access keys are far too broad for this requirement. Microsoft says access keys provide full access to the storage account’s data and the ability to generate SAS tokens, so they do not enforce a limited validity window such as January 1–31, 2026.
• D. Use a condition when assigning User1 an RBAC role on storage1 — Azure RBAC conditions are for more fine-grained authorization checks such as attributes on requests or resources. Microsoft’s role-assignment condition documentation describes them as optional checks and gives examples like requiring an object to have a specific tag; it does not describe them as the mechanism for setting a simple calendar-based access period for storage access.

---

### Question 8

Contoso’s devs are working remotely for one week. You have to let them browse blobs in stdev01 via the Azure portal from their home networks, while keeping the account otherwise restricted. The account currently uses Selected networks with only VNet-Dev/Subnet-Tools allowed. You must avoid creating private endpoints.
What should you do?

**Options:**

- **A.** A. Add the developers’ current public IPs to the storage firewall IP rules ✅
- **B.** B. Enable “Blob public access” on the account
- **C.** C. Generate SAS for each container; no firewall changes needed
- **D.** D. Switch firewall to “All networks”; re-enable Selected networks next week

**Correct answer:** A

**Explanation:**

With firewalls set to Selected networks, remote clients must be allowed by IP rules. Add the devs’ home public IPs for the week, then remove them later. This preserves restricted posture and avoids private endpoint setup.
why the others are incorrect:
B. “Blob public access” controls anonymous blob/container ACLs, not network firewall.
C. SAS doesn’t bypass storage firewalls; network rules still apply.
D. Opening to All networks violates the security requirement, even temporarily.

---

### Question 10

Fabrikam has on-prem AD DS and hybrid-joined VMs in Azure. Users must access Azure Files over SMB using their existing AD accounts and NTFS ACLs. You must not rely on Entra-only Kerberos.
Environment

**Options:**

- **A.** What should you configure?
- **B.** A. Entra Kerberos only
- **C.** B. AD DS auth for Azure Files ✅
- **D.** C. Local users per share
- **E.** D. SAS tokens for SMB

**Correct answer:** C

**Explanation:**

Enable Active Directory Domain Services authentication for Azure Files on the storage account (set AD domain props). Grant users/groups the Storage File Data SMB Share RBAC role(s) and manage access with NTFS ACLs using their AD identities.
why the others are incorrect:
A. Doesn’t use your AD identities/SIDs.
C. Not identity-based; hard to audit/scale.
D. SAS is for REST; SMB uses Kerberos/NTLM with AD.

---

### Question 11

A line-of-business app running on an Azure VM (system-assigned managed identity) must upload and list files in an Azure file share using REST (not SMB). You must grant least privilege via RBAC.
Which role should you assign to the managed identity?

**Options:**

- **A.** A. Storage File Data SMB Share Reader
- **B.** B. Storage Blob Data Contributor
- **C.** C. Storage File Data Contributor ✅
- **D.** D. Reader

**Correct answer:** C

**Explanation:**

Correct answer: C. Storage File Data Contributor
You’re using a managed identity and the Azure Files REST API (not SMB).
The role that grants data-plane permissions for Azure Files over REST is Storage File Data Contributor. It allows create/read/update/delete on shares, directories, and files via REST, which covers “upload and list files.”
Assign it at the file share scope (least privilege). The app then requests an OAuth token for https://storage.azure.com/ and calls REST endpoints (e.g., PUT file, PUT range, GET directory?resource=directory, LIST).
Why the others are incorrect:
A. Storage File Data SMB Share Reader — SMB only and read-only. No REST writes.
B. Storage Blob Data Contributor — Blob service, not Azure Files.
D. Reader — Management plane only; no data-plane access to files.

---

### Question 12

Contoso’s data team is moving Spark jobs to Azure. You have to provide atomic directory operations (rename/move) and POSIX-like ACLs for large analytics workloads. The existing GPv2 account hosts 40 TB of data and does not have hierarchical namespace enabled. Minimal downtime is acceptable; correctness is mandatory.
What should you do?

**Options:**

- **A.** A. Create a new StorageV2 account with hierarchical namespace enabled and migrate data ✅
- **B.** B. Turn on hierarchical namespace on the existing account in-place
- **C.** C. Upgrade to Premium BlockBlobStorage to gain directory semantics
- **D.** D. Enable SFTP; Spark will infer directory support automatically

**Correct answer:** A

**Explanation:**

Hierarchical namespace (HNS)—the foundation of Azure Data Lake Storage Gen2—is selected only at account creation. It’s what gives you atomic directory operations and POSIX-style ACLs Spark expects. Therefore, the correct approach is to provision a new HNS-enabled account and migrate. Use tools like AzCopy v10 (sync/incremental), DistCp, or ADLS Gen2 SDKs to minimize downtime and cut over cleanly.
Why the other options are incorrect:
B. In-place HNS enablement isn’t supported; you can’t toggle HNS on an existing account. Any approach claiming this would risk data and is not available in Azure.
C. Premium BlockBlobStorage improves performance/latency but does not add HNS or directory semantics; it’s still a flat namespace for Blob.
D. Enabling SFTP provides an SFTP endpoint but doesn’t create HNS or POSIX semantics by itself; Spark’s directory operations still rely on HNS capabilities.

---

### Question 13

Fabrikam wants to enforce identity-based access only to Blob data—no account keys, no shared-key SAS. You have to keep the public endpoint but require OAuth (Microsoft Entra) for data-plane access.
Current state
What should you change?

**Options:**

- **A.** A. Disable public network access and use private endpoints only
- **B.** B. Leave keys enabled and disable “Blob public access”
- **C.** C. Require secure transfer only (HTTPS) and TLS 1.2+
- **D.** D. Disable shared key access on the account and use Entra RBAC ✅

**Correct answer:** D

**Explanation:**

To prevent shared key authentication (account keys and key-based SAS) and force OAuth, set “Allow storage account key access” = Disabled. Then grant data-plane RBAC (e.g., Storage Blob Data Reader/Contributor/Owner) to identities in Microsoft Entra ID. Clients must request tokens for https://storage.azure.com/ and call Blob APIs with OAuth—shared keys will no longer work.
Why the other options are incorrect:
A. Private endpoints remove public routing but don’t disable shared keys; a caller on the private network could still use account keys unless you explicitly turn them off.
B. Disabling “Blob public access” blocks anonymous (public) access but does not affect authentication with account keys or key-based SAS. Shared keys would still function.
C. “Secure transfer required” + TLS 1.2 harden transport but don’t change the auth method; shared keys remain valid unless explicitly disabled.

---

### Question 14

A third-party vendor must upload files to a single container in stfiles01 over SFTP using SSH keys. You have to keep the scope as narrow as possible and avoid domain joins.
What should you configure?

**Options:**

- **A.** A. Enable AD DS auth for Azure Files and grant share permissions
- **B.** B. Enable SFTP; create a local user with an SSH public key and container-scoped permissions ✅
- **C.** C. Generate SAS tokens and have the vendor use SFTP with SAS
- **D.** D. Enable NFSv3 for Blob and share the export

**Correct answer:** B

**Explanation:**

For Azure Blob SFTP, enable SFTP at the storage account, then create local users with SSH keys and assign container-level permissions (Container/Directory/File). This provides least-privilege, SFTP-native access without Entra/AD DS.
Why the other options are incorrect:
A. AD DS for Azure Files applies to SMB on Azure Files, not Blob SFTP; wrong service and protocol.
C. SAS with SFTP isn’t a thing; SAS is HTTP(S)-based and won’t authenticate an SFTP session.
D. Blob NFSv3 is for POSIX clients over NFS, not SFTP; it also requires different network and client considerations and doesn’t meet the vendor’s SFTP requirement.

---

### Question 15

Fabrikam is lifting a Linux analytics app to Azure. You have to create an NFS file share with low, predictable latency and no domain controllers. SMB is not required.
Which configuration should you create?

**Options:**

- **A.** A. GPv2 account + SMB share
- **B.** B. GPv2 account + NFS share
- **C.** C. Premium FileStorage account + NFS share ✅
- **D.** D. Premium FileStorage account + SMB share

**Correct answer:** C

**Explanation:**

Azure Files NFS 4.1 shares are supported on Premium FileStorage accounts. Premium gives low-latency, provisioned performance appropriate for analytics pipelines, and it doesn’t require AD DS/AAD DS. Create a FileStorage (Premium) account, enable NFS, and create the share—Linux clients mount via NFSv4.1.
Why the other options are incorrect:
A. GPv2 + SMB: SMB is a different protocol; not NFS, and doesn’t meet the requirement.
B. GPv2 + NFS: NFS for Azure Files is not supported on Standard GPv2; it’s Premium-only.
D. Premium + SMB: Premium is fine, but this config is SMB, not the requested NFS.

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

### Question 19

Policy: keep the current blob and versions from the last 90 days only. You have to automate cleanup.
What should you configure?

**Options:**

- **A.** A. Lifecycle rule: delete previous versions > 90 days ✅
- **B.** B. Set access tier to Cool
- **C.** C. Legal hold (immutability)
- **D.** D. Change feed

**Correct answer:** A

**Explanation:**

Blob lifecycle management can target previous versions with age filters (e.g., “delete previous versions older than 90 days”). Rules run continuously at the chosen scope (account/container/prefix), enforcing retention automatically while controlling storage cost.
Why the others are incorrect:
B. Cool affects pricing/latency, not retention; old versions persist and keep accruing cost.
C. Legal hold blocks deletion (the opposite of pruning) until the hold is lifted/expired under strict controls.
D. Change feed is an event log; it doesn’t delete or manage stored data.

---

### Question 21

Hierarchy &amp; assignments

Notes: Role evaluations are cumulative; the **most permissive** applicable role at/above the target scope is effective. Built-in roles: **Owner**, **Contributor**, **Reader**, **User Access Administrator**, etc.

**Scenario:** You’re reviewing permissions for **DevOpsTeam** on the **stlogs storage account** in **RG-Logs** (Sub-Prod). Based on the table above, what is DevOpsTeam’s **effective role** on stlogs?

**Options:**

- **A.** A. Reader
- **B.** B. Owner
- **C.** C. Contributor ✅
- **D.** D. User Access Administrator

**Correct answer:** C

**Explanation:**

DevOpsTeam has **Contributor at the management group (Corp-MG)**. That assignment **flows down** to all child subscriptions, resource groups, and resources—including stlogs in RG-Logs. Although DevOpsTeam is only **Reader at the subscription**, the effective permission is the **union** of assignments, so the **higher permission (Contributor) from the higher scope** applies at the resource.

**Why the others are incorrect:**

- **A. Reader:** DevOpsTeam does have Reader at Sub-Prod, but it’s **superseded** by Contributor at the higher scope.

- **B. Owner:** No Owner is assigned anywhere for DevOpsTeam, so Owner does **not** apply.

- **D. User Access Administrator:** That role wasn’t assigned to DevOpsTeam at any scope here.

---

### Question 22

You have an Azure subscription that contains the virtual machines shown in the following table.

The subscription contains a storage account named contoso2024 as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM2 can connect to contoso2024 by using 150.120.10.10.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

When a storage account is set to **Selected networks**, access is allowed only from:

- **Explicit IP rules** (public IPs or ranges), and/or

- **VNet rules** (subnets with Microsoft.Storage service endpoints or private endpoints)

Here, the storage account’s firewall explicitly includes **150.120.10.10**, which is **VM2’s public IP**. That IP rule alone is sufficient to permit traffic **from VM2** to **contoso2024** when the request originates from that public IP (e.g., outbound NAT). The VM’s subnet (whether it’s Subnet1 or Subnet2) does **not** matter for the IP-allowlist path; the firewall evaluates the **source public IP** and finds a match, so the connection is **allowed**.

If the account also had VNet rules, VM2 could alternatively connect via a service endpoint/private endpoint path if its subnet were included; but that’s **not required** for this statement. The question asks specifically about using **150.120.10.10**, and since that IP is on the allowlist, **VM2 can connect**.

Why “No” is incorrect

“No” would be correct only if the source IP were **not** allowed (no matching IP rule) and there were **no applicable VNet rule**. In this case, an explicit **IP rule** for **150.120.10.10** exists, so denying the connection would contradict the configured firewall policy.

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

### Question 31

You have an Azure subscription that contains the following resources:
a storage account named storage123
a container instance named container1
The subscription contains a virtual network named VirtualNet4 that has the following subnets:
SubnetA – has a Microsoft.Storage service endpoint.
SubnetB – container1 is deployed to SubnetB.
SubnetC – No resources are connected to SubnetC.
You plan to deploy an Azure container instance named container5 to VirtualNet4.
To which subnets can you deploy container5?

**Options:**

- **A.** A. SubnetA, SubnetB, and SubnetC
- **B.** B. SubnetB and SubnetC only ✅
- **C.** C. SubnetB only
- **D.** D. SubnetC only

**Correct answer:** B

**Explanation:**

Azure Container Instances must be deployed to a delegated subnet. Microsoft’s current deployment guidance says you can use an existing subnet in which a container group is already deployed or an existing subnet emptied of all other resources and configuration. It also states that the subnet used for container groups can contain only container groups.
That makes SubnetB valid because it already hosts container1, so it is the kind of subnet that can host additional container groups. SubnetC is also valid because it has no connected resources, so it can be delegated and used for the new container instance. SubnetA is not valid because it already has subnet-level configuration in place, namely a Microsoft.Storage service endpoint, so it is not an empty subnet with no prior configuration for ACI use.
Why the other options are incorrect:
• A. SubnetA, SubnetB, and SubnetC — This is incorrect because SubnetA is not a clean candidate for ACI deployment. Microsoft says an existing subnet must either already host a container group or be emptied of other resources and configuration before ACI deployment. A service endpoint is existing subnet configuration, so SubnetA does not meet that requirement.
• C. SubnetB only — This is too restrictive. SubnetB is valid because it already contains a container group, but SubnetC is also valid because it has no connected resources and can be delegated for Azure Container Instances.
• D. SubnetC only — This ignores the fact that Microsoft explicitly allows deploying more container groups to a subnet that already contains a container group. Since container1 is already in SubnetB, SubnetB remains a valid deployment target for container5.

---

### Question 35

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Partners need temporary, secure access to the partner container in a Storage account. Fabrikam wants time-bound access without creating partner user accounts.
What should you do?

**Options:**

- **A.** A. Share the Storage account access keys with partners
- **B.** B. Generate a SAS token for the partner container with start/expiry and minimal permissions ✅
- **C.** C. Assign Storage Blob Data Contributor to “Everyone” and revoke later
- **D.** D. Publish the container publicly with anonymous write disabled using Microsoft SharePoint

**Correct answer:** B

**Explanation:**

Choice B is correct. A Shared Access Signature (SAS) provides scoped, time-limited permissions (e.g., write/list for 24 hours) without creating identities or disclosing the account keys. It supports least privilege by limiting permissions, IP ranges, and times, and can be invalidated by removing a stored access policy or rotating keys.
Why the others are incorrect
A: Sharing account keys exposes full account permissions and is hard to revoke safely.
C: RBAC to a broad group violates least privilege and is operationally risky.
D: Public access increases exposure and still doesn’t give fine-grained, time-bound control.

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

### Question 38

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
Fabrikam stores product images in a blob container. To reduce costs without manual jobs, images not accessed for 60 days must move to Cool, and after 180 days to Archive.
Which configuration best meets the requirement with the least administrative effort?

**Options:**

- **A.** A. Blob lifecycle management rules on the storage account ✅
- **B.** B. Enable operational backup for blobs in a Backup vault
- **C.** C. Monthly Azure Data Factory pipelines to move blobs to new tiers
- **D.** D. Azure Policy (Append) to set the access tier automatically

**Correct answer:** A

**Explanation:**

Choice A is correct. Lifecycle management is a built-in policy engine for Blob Storage that evaluates object age and last access time (when enabled) and applies actions like move to Cool and move to Archive. It’s automatic, cost-effective, and requires no orchestration, directly satisfying the tiering goals.
Why the other options are incorrect
B: Operational backup provides recovery points, not ongoing tier changes.
C: ADF can move data but adds unnecessary pipelines, triggers, and code.
D: Azure Policy can enforce configurations but cannot dynamically retier individual blobs by age/access.

---

### Question 39

Refer to Fabrikam, Inc. (I) Case Study : AZ-104
https://docs.google.com/document/d/19qsvfvAHgsF9tLUqtaK7WPeIhTPeUbxsnpYeCcS4Y0M/edit?usp=sharing
The web app needs to retrieve connection strings and secrets from Azure Key Vault. Fabrikam wants to avoid managing client secrets and keep administration simple while following least-privilege access.
What should you do?

**Options:**

- **A.** A. Create a service principal and store its client secret in App Service settings
- **B.** B. Enable a system-assigned managed identity on the web app and grant it Key Vault read access ✅
- **C.** C. Store secrets directly as App Settings and sync during deployments
- **D.** D. Assign Storage Account Contributor to the app and read Storage keys directly, Assign Owner to the Head Administrator

**Correct answer:** B

**Explanation:**

Choice B is correct. A system-assigned managed identity gives the app an Azure-managed identity with no credentials to rotate or store. Granting that identity read permissions to Key Vault (via RBAC or access policies) lets the app fetch secrets securely, reduces administrative effort, and aligns with least privilege and centralized secret governance.
Why the other options are incorrect
A: You’d have to manage/rotate a client secret—exactly what Fabrikam wants to avoid.
C: App Settings increase exposure and lack centralized secret lifecycle/auditing.
D: Over-privileged; bypasses Key Vault and requires managing Storage keys.

---

### Question 44

You have an Azure subscription.
You plan to create an Azure Container Registry named ContReg1.
You need to ensure that you can push and pull signed container images for ContReg1.
What should you do for ContReg1?

**Options:**

- **A.** A. Upgrade ContReg1 to the Premium SKU and enable geo-replication.
- **B.** B. Enable the admin user on ContReg1 and use its username/password when pushing images.
- **C.** C. Enable content trust on ContReg1. ✅
- **D.** D. Configure a private endpoint and disable public network access.
- **E.** E. Enable anonymous pull on ContReg1.

**Correct answer:** C

**Explanation:**

To use signed images with Azure Container Registry, the registry must have content trust enabled. Content trust enforces that images pushed to and pulled from the registry are digitally signed (e.g., via Docker Content Trust/Notary-style signing). Enabling content trust is the registry-side requirement; you’ll also sign images from the client side when pushing. Without enabling content trust on the registry, signed image enforcement won’t apply.
Why the others are incorrect
A. Premium + geo-replication — Premium features improve scale and multi-region availability but are unrelated to image signing.
B. Enable the admin user… — Admin credentials control authentication, not signing. This doesn’t enforce or enable signed images.
D. Private endpoint + disable public access — This hardens network access, not content signing. You can still push unsigned images over a private link.
E. Enable anonymous pull — Anonymous access reduces access control and does nothing to enforce or enable signed images.

---

### Question 45

You created an Azure Storage account and will add 10 blob containers. For one container, data at rest must use a different encryption key than the rest.
What should you do before creating that container?

**Options:**

- **A.** A. Enable customer-managed keys at the storage account level
- **B.** B. Create an encryption scope using a Key Vault CMK and use that scope for the container ✅
- **C.** C. Enable infrastructure encryption (double encryption) on the account
- **D.** D. Rotate the storage account access keys

**Correct answer:** B

**Explanation:**

Azure Blob Storage supports encryption scopes, which let you apply different encryption keys at a finer granularity than the storage account. To make one container use a different key, you first create an encryption scope in the storage account that references a customer-managed key (CMK) in Azure Key Vault or Managed HSM. When you create the container, you set that encryption scope as the container’s default. Other containers can continue using the account’s default encryption (either Microsoft-managed keys or a separate CMK), so you achieve per-container key separation without new accounts.
Why the other options are incorrect:
A. Enabling CMK at the storage account level sets a single key for the entire account; it does not provide per-container key isolation.
C. Infrastructure encryption adds a second layer of platform-managed encryption (double encryption) but does not allow selecting a different key per container.
D. Rotating storage account access keys affects authentication/authorization to the account; it has no effect on which encryption key protects data at rest.

---

### Question 47

You have an Azure subscription that contains the storage account shown in the following exhibit.
Based on the information provided, select the answer choice that completes the following statement correctly.
“The maximum number of additional stored access policies that you can create for container1 is ________.”

**Options:**

- **A.** A. 5
- **B.** B. 0
- **C.** C. 1
- **D.** D. 3 ✅

**Correct answer:** D

**Explanation:**

3 is correct because a container can have at most 5 stored access policies. Container1 already has Policy1 and Policy2, so you can add 3 more to reach the limit.

---

### Question 55

Developers need to read blob contents from a storage account named stsappdata without using account keys or SAS. They must not be able to modify any resources in the resource group. You will assign a single built-in role on the storage account.
Which role meets the requirement?

**Options:**

- **A.** A. Storage Blob Data Reader ✅
- **B.** B. Reader
- **C.** C. Storage Blob Data Contributor
- **D.** D. Contributor

**Correct answer:** A

**Explanation:**

Storage Blob Data Reader grants data-plane read access to blob contents via Azure AD (OAuth) without control-plane rights. Reader and Contributor are management-plane roles and do not grant data-plane blob read; Storage Blob Data Contributor allows write, which is more than required.
Why the others are incorrect
B. Reader allows viewing the storage account’s control-plane metadata only, not blob data.
C. Storage Blob Data Contributor permits write/delete to blobs; exceeds requirement.
D. Contributor grants control-plane modifications on the storage account; not needed and still doesn’t confer data-plane read by itself.

---

### Question 58

You have an Azure Storage account named storage1.
You create the following encryption scopes for storage1:
Scope1 that has an encryption type of Microsoft-managed keys
Scope2 that has an encryption type of Customer-managed keys
Which storage services can be used with Scope2?

**Options:**

- **A.** A. blob and file only
- **B.** B. blob, file, table, and queue
- **C.** C. blob only ✅
- **D.** D. file only
- **E.** E. table and queue only

**Correct answer:** C

**Explanation:**

Encryption scopes in Azure Storage are a Blob storage feature. Microsoft’s current documentation is titled “Encryption scopes for Blob storage” and says encryption scopes let you manage encryption with a key scoped to a container or an individual blob. It also states that when an encryption scope is applied, it applies to blobs in that container or to an individual blob.
The fact that Scope2 uses a customer-managed key does not expand encryption scopes to other storage services. Microsoft says an encryption scope can be protected with either a Microsoft-managed key or a customer-managed key, but the scope itself still applies to Blob storage. Azure Files, Table storage, and Queue storage can use customer-managed keys at the storage account encryption level, but that is a different feature from encryption scopes.
Why the other options are incorrect:
• A. blob and file only — Azure Files can use customer-managed keys at the account level, but Microsoft’s encryption scope documentation limits encryption scopes to Blob storage containers and blobs. So this mixes two different features.
• B. blob, file, table, and queue — All four services can use a customer-managed key when the storage account is configured appropriately, but that is account-level encryption, not encryption scopes. Microsoft’s encryption scope feature is still specifically for Blob storage.
• D. file only — This is incorrect because encryption scopes are not a Files feature. Microsoft describes them as being scoped to a blob container or an individual blob.
• E. table and queue only — Table and Queue can be configured to use customer-managed keys through account-scoped encryption settings, but not through encryption scopes. Encryption scopes remain a Blob storage feature.

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

### Question 1

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the subnets shown in the following table.

The subscription contains the storage accounts shown in the following table.

You create a service endpoint policy named Policy1 in the South Central US Azure region to allow connectivity to all the storage accounts in the subscription.

For the statement below, select Yes if the statement is true. Otherwise, select No.

“Only storage1 and storage2 can be accessed from VNet2.”

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Where the traffic originates

VNet2 (and Subnet2) are located in Southeast Asia.

Subnet2 has the Microsoft.Storage service endpoint enabled, but no service endpoint policy is applied to it.

A policy created in South Central US (Policy1) does not affect Subnet2 in Southeast Asia unless that policy is explicitly associated with Subnet2.

Service endpoint policies are evaluated on the subnet where the traffic originates.

What service endpoints do (subnet-side)

Enabling a service endpoint on a subnet:

Prioritizes and identifies traffic to the selected Azure service (in this case, Microsoft.Storage) over the Azure backbone.

By itself, a service endpoint does not grant or deny access.

It simply makes the subnet’s VNet identity available to the Azure service so firewall rules can evaluate it.

What actually controls access (service-side)

Access is controlled by Storage account network rules (firewalls).

For Azure Storage, when using Selected networks:

You can add VNet rules only if the VNet and Storage account are in the same Azure region.

This regional limitation is critical.

Examples:

A subnet in Southeast Asia can be whitelisted on a Southeast Asia storage account.

That same subnet cannot be added as a VNet rule on a West Europe or South Central US storage account.

Applying this to the scenario

storage3

Located in Southeast Asia

Same region as VNet2/Subnet2

If using Selected networks, Subnet2 can be added as an allowed VNet rule

Therefore:

✅ VNet2 → storage3 works

storage1

Located in West Europe

storage2

Located in South Central US

These are in different regions from Subnet2, so:

Subnet2 cannot be added as a VNet rule

Therefore:

❌ VNet2 cannot access storage1 via VNet rules❌ VNet2 cannot access storage2 via VNet rules

Impact of Policy1

The fact that Policy1 (a service endpoint policy) was created in South Central US is irrelevant to VNet2 unless it is explicitly applied to Subnet2.

Because the policy is not associated, it has:

No effect

No filtering impact

No access restriction behavior

Conclusion

The statement:

“Only storage1 and storage2 can be accessed from VNet2”

is false.

In this configuration, the only storage account that can be accessed from VNet2 using service endpoint/VNet rules is:

✅ storage3

Reason:

It is in the same region as VNet2/Subnet2

Therefore, the correct answer is:

✅ No

Why “Yes” is incorrect

Ignores the regional requirement

Storage VNet rules require the VNet and Storage account to be in the same region

Assumes Policy1 automatically affects Subnet2

Service endpoint policies are not global

They only apply where they are explicitly attached

Reverses the actual behavior

The cross-region accounts (storage1 and storage2) are the ones that cannot be accessed through VNet rules from VNet2.

---

### Question 3

Contoso is migrating large media content and logs between storage accounts in the same tenant. The operations team needs reliable, high-performance transfers that preserve metadata and can resume after interruptions. Non-technical support staff need an easy GUI for ad-hoc browsing, small uploads/downloads, and setting container access properties.
Support staff need to browse containers, download single files, edit blob metadata, and set container public access for a marketing site. They prefer a GUI and must NOT handle service account keys directly. Which tool best fits their needs?

**Options:**

- **A.** A. AzCopy
- **B.** B. Azure CLI only
- **C.** C. Azure Portal only
- **D.** D. Azure Storage Explorer ✅

**Correct answer:** D

**Explanation:**

Azure Storage Explorer provides an easy-to-use GUI for browsing accounts/containers, downloading individual blobs, editing metadata, and changing container-level access. It supports authentication via Azure AD (so staff don’t need account keys), integrates with subscriptions and storage accounts, and is ideal for ad-hoc support tasks and small uploads/downloads without scripting or heavy orchestration.
Why the others are incorrect:
A: AzCopy is powerful for scripted/high-performance tasks but is CLI-based and less suitable for non-technical GUI-driven support work.
B: Azure CLI is script-first and requires more operational knowledge; not a friendly GUI for support staff.
C: The Azure Portal can perform many actions but the Explorer provides a faster, desktop-based experience with bulk operations and better local workflow for ad-hoc file handling.

---

### Question 4

You have an Azure subscription that contains a storage account named storage1 and the following virtual machines:
VM1 has a public IP address of 13.68.158.24 and is connected to VNET1/Subnet1
VM2 has a public IP address of 52.255.145.76 and is connected to VNET1/Subnet1
VM3 has a public IP address of 13.68.158.50 and is connected to VNET1/Subnet2
The subnets have the following service endpoints:
Subnet1 has a Microsoft.Storage service endpoint
Subnet2 does NOT have any service endpoint
Storage1 has a firewall configured to allow access from the 13.68.158.0/24 IP address range only.
Which virtual machines can access storage1?

**Options:**

- **A.** A. VM1 and VM2 only
- **B.** B. VM1 and VM3 only
- **C.** C. VM1 only
- **D.** D. VM1, VM2, and VM3
- **E.** E. VM3 only ✅

**Correct answer:** E

**Explanation:**

Azure Storage IP network rules allow traffic from specific public IP address ranges. Since storage1 allows 13.68.158.0/24, VM3 would match that rule because its public IP is 13.68.158.50 and Subnet2 does not have a Microsoft.Storage service endpoint. That means VM3 continues to reach the storage account by using its public IP path.
VM1 and VM2 are in Subnet1, which has a Microsoft.Storage service endpoint enabled. Microsoft states that once a service endpoint is enabled for a subnet, traffic from that subnet to Azure Storage no longer uses the VM’s public IP address and instead uses the subnet’s private IP address as the source. Microsoft also states that IP network rules permitting those public IPs no longer have an effect for traffic from that subnet. Because the question gives only an IP rule and no virtual network rule for Subnet1, VM1 and VM2 cannot use that IP-based firewall exception to access storage1.
Why the other options are incorrect:
• A. VM1 and VM2 only — This is incorrect because both VMs are in Subnet1, and Subnet1 has a Microsoft.Storage service endpoint. Once that service endpoint is enabled, Azure Storage traffic from that subnet stops using the VMs’ public IP addresses, so the storage account’s public IP rule does not help either VM. VM2 would also fail even under simple IP matching because its public IP is outside 13.68.158.0/24.
• B. VM1 and VM3 only — VM3 is valid, but VM1 is not. Even though VM1’s public IP falls inside the allowed range, the service endpoint on Subnet1 changes the source identity used for Azure Storage traffic, so the public-IP firewall rule no longer applies to VM1’s traffic.
• C. VM1 only — This is incorrect for the same reason. VM1 is in the subnet with the Microsoft.Storage service endpoint, so the storage firewall’s public IP rule is no longer effective for VM1’s access path to storage1.
• D. VM1, VM2, and VM3 — This overstates access. VM3 can use the allowed public IP range because Subnet2 has no service endpoint, but VM1 and VM2 cannot rely on their public IPs once the storage service endpoint is enabled on Subnet1.

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

### Question 13

You have an Azure subscription named Sub1 that contains the blob containers shown in the following table.

Sub1 contains two users named User1 and User2. Both users are assigned the Reader role at the Sub1 scope.

You have a condition named Condition1 as shown below.

You have a condition namedCondition2as shown below.

You assign roles to User1 and User2 as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

“User2 can read blob1.”

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

User2 can read blob1 because their data-plane RBAC assignment  Storage Blob Data Owner on the storage1 account  grants full read/write permissions to all blob containers and blobs within that account. Scope matters: assigning at the storage account automatically scopes down to every child resource (containers and blobs). In Azure RBAC, access is evaluated per operation against the effective role assignments at the relevant scope; if a matching allow exists and no applicable deny/condition blocks that specific operation, access is granted.

Here, Condition2 is attached to the same role assignment but applies only to write operations and only when the blob path matches *2*. User2 is performing a read (data-plane “Get Blob”/“Read”), not a write (Put, Delete, Set Tier, etc.). Because the condition does not target reads, it doesn’t restrict the operation. With no additional deny or conflicting condition in play, the default read permission from Storage Blob Data Owner remains effective, so User2 can read blob1.

Key points, succinctly:

Role &amp; scope: “Storage Blob Data Owner” at storage account scope ? read/write over all blobs in that account.

Operation type: The condition filters writes only; reads are unaffected.

Path filter: Even for writes, it would apply only if the blob path matched *2*; it doesn’t come into play for a read of blob1.

Result: Access allowed for the read.

---

### Question 16

You have an Azure subscription that contains a virtual machine named VM1 and a storage account named storage1.
You need to ensure that VM1 can access storage1 by using a private IP address.
What should you use?

**Options:**

- **A.** A. a point to site (P2S) connection
- **B.** B. a service endpoint ✅
- **C.** C. a VPN gateway
- **D.** D. the Azure Front Door service

**Correct answer:** B

**Explanation:**

Among the listed choices, service endpoint is the correct answer. Microsoft’s current documentation says virtual network service endpoints allow private IP addresses to reach Azure services without requiring public IP addresses, and for Azure Storage specifically, traffic from a subnet with a service endpoint uses the subnet’s private IP address as the source IP when communicating with the storage account.
There is an important nuance here. Microsoft also distinguishes service endpoints from private endpoints: a private endpoint gives the storage account a private IP in your virtual network, while a service endpoint keeps the storage service publicly routable and changes how traffic from the subnet reaches it. If private endpoint had been one of the answer choices, that would be the feature that assigns a private IP to the storage account itself. But with the options provided, the expected AZ-104 answer is service endpoint.
Why the other options are incorrect:
• A. a point to site (P2S) connection — P2S is used for client devices connecting into an Azure virtual network over VPN. It is not the feature used to let an Azure VM securely reach Azure Storage over Azure’s internal service networking model.
• C. a VPN gateway — A VPN gateway is used for site-to-site, point-to-site, or VNet-to-VNet connectivity. It does not by itself configure Azure Storage access from a VM by using the storage service integration mechanism described in this question.
• D. the Azure Front Door service — Azure Front Door is a global application delivery and web traffic routing service. It is not used to provide private network access from a VM to an Azure Storage account.

---

### Question 17

You have an Azure subscription that contains an Azure Storage account.

You plan to copy an on-premises virtual machine image to a container named vmimages.

You need to create the container for the planned image.

You need to run the below command.

Which command should you run?

**Options:**

- **A.** A. azcopy sync ‘https://mystorageaccount.blob.core.windows.net/vmimages‘
- **B.** B. azcopy make ‘https://mystorageaccount.queue.core.windows.net/vmimages‘
- **C.** C. azcopy copy ‘https://mystorageaccount.table.core.windows.net/vmimages‘
- **D.** D. azcopy sync ‘https://mystorageaccount.dfs.core.windows.net/vmimages‘
- **E.** E. azcopy make ‘https://mystorageaccount.blob.core.windows.net/vmimages‘ ✅
- **F.** F. azcopy copy ‘https://mystorageaccount.images.core.windows.net/vmimages‘

**Correct answer:** E

**Explanation:**

Use azcopy make to create a blob container. The correct endpoint for Blob Storage containers is

https://.**blob.core.windows.net**/, so:

azcopy make ‘https://mystorageaccount.blob.core.windows.net/vmimages‘

This creates the vmimages container in the specified storage account (assuming you’re authenticated via azcopy login or SAS).

Why the other options are incorrect

A (sync … blob): sync synchronizes data; it does not create containers.

B (make … queue): Queue endpoint is for Queue Storage, not Blob containers.

C (copy … table): Table endpoint is for Table Storage, not Blob containers.

D (sync … dfs): dfs.core.windows.net is the ADLS Gen2 (HNS) endpoint; sync still doesn’t create containers.

F (… images.core.windows.net): images is not a valid Azure Storage endpoint.

---

### Question 18

You have an Azure Storage account named storage1 that contains a container named container1. The container1 container stores thousands of image files.

You plan to use an Azure Resource Manager (ARM) template to create a blob inventory rule named rule1.

You need to ensure that only blobs whose names start with the word “finance“ are stored daily as a CSV file in container1.

You need to complete rule1.

Which value should you choose for Placeholder 2?

**Options:**

- **A.** A. container1/*
- **B.** B. container1/finance ✅
- **C.** C. finance
- **D.** D. /container1/finance
- **E.** E. container1/finance/*
- **F.** F. container1

**Correct answer:** B

**Explanation:**

For Azure Storage Inventory filters, the prefixMatch entries must be in the form:

“/“ (no leading slash, no wildcards).

You want only blobs whose names start with “finance” inside container1, so the correct prefix string is container1/finance. This limits the inventory output (CSV) to those matching blobs when your schedule runs daily.

Why the other options are incorrect

A (container1/*): Uses a wildcard. prefixMatch doesn’t support *; it would also imply “all blobs” rather than only finance*.

C (finance): Missing the container name. The value must start with the container followed by the prefix.

D (/container1/finance): Leading slash is not allowed; paths are specified without a leading /.

E (container1/finance/*): Wildcards aren’t supported in prefixMatch; use the pure prefix string instead.

F (container1): Valid format but matches the entire container, not just names beginning with finance.

---

### Question 19

You have an Azure Storage account named storage1 that contains a container named container1. The container1 container stores thousands of image files.

You plan to use an Azure Resource Manager (ARM) template to create a blob inventory rule named rule1.

You need to ensure that only blobs whose names start with the word “finance“ are stored daily as a CSV file in container1.

You need to complete rule1.

Which value should you choose for Placeholder 1?

**Options:**

- **A.** A. appendBlob
- **B.** B. all
- **C.** C. pageBlob
- **D.** D. blockBlob ✅
- **E.** E. snapshot
- **F.** F. container

**Correct answer:** D

**Explanation:**

Use blockBlob. Azure Storage Inventory’s blobTypes filter expects actual blob types: blockBlob, appendBlob, or pageBlob. In your scenario, you’re inventorying thousands of image files and outputting a daily CSV listing only blobs whose names start with “finance”. Images are normally stored as block blobs, so setting blobTypes: [“blockBlob“] (with your prefixMatch: [“finance“]) aligns with the data you have and the inventory filter you need.

Why the other options are incorrect

appendBlob: Valid blob type but mainly for append-only logs; not the right filter for image files.

pageBlob: Valid blob type but used for random-access pages (e.g., VHDs); not typical for images.

snapshot: Not a blob type; it’s a state of a blob. Inventory can include snapshot metadata, but blobTypes cannot be set to snapshot.

container: Not a blob type; it’s a namespace that holds blobs.

all: Not a valid value for blobTypes; you must specify one or more of the concrete types (blockBlob, appendBlob, pageBlob).

---

### Question 22

Fabrikam is consolidating workloads into **Australia Southeast**. You must move an app VM and all dependencies from **Australia East** with **pre-move dependency analysis**, **orchestration**, and **minimal manual wiring**. A controlled cutover window is acceptable.

You need a **region-to-region move** with **dependency discovery**, **guided orchestration**, and a **single control plane** for planning and cutover. **Which option should you choose?**

**Options:**

- **A.** A. Move resources (to another subscription)
- **B.** B. Azure Resource Mover ✅
- **C.** C. Azure Site Recovery (ASR)
- **D.** D. Snapshot disks and create a new VM in the target region

**Correct answer:** B

**Explanation:**

**Azure Resource Mover** is built for **cross-region moves**. It automates **dependency analysis**, prepares target resources (such as VNets, NSGs, and public IPs), and coordinates **replication** and **cutover** steps for VMs with a guided workflow. This reduces manual effort and provides a **single place** to track readiness and execution, aligning with the scenario’s orchestration requirement.

While ASR can replicate VMs to another region, it lacks the **holistic cross-resource orchestration** and dependency planning that Resource Mover provides. Manual approaches (snapshots + rebuild) increase risk and effort, and “Move resources (to another subscription)” does not address **region changes**.

Why others are incorrect

A. The ARM **Move** action does not support changing **regions**.

C. ASR handles VM replication/failover but lacks **end-to-end dependency orchestration** for the broader resource set.

D. Manual snapshots/new VM require extensive **re-creation and reconfiguration**, increasing downtime and risk.

---

### Question 24

Fabrikam operates multiple storage accounts used by different departments. Each account uses shared keys for programmatic access, but the IT security team is implementing key rotation policies to enhance security.

Fabrikam’s IT team needs to enforce key rotation on all storage accounts without modifying existing applications that use these keys. Which approach should they use?

**Options:**

- **A.** A. Regenerate the access keys manually for each storage account every 30–90 days
- **B.** B. Enable Azure Key Vault integration and use managed identities for applications ✅
- **C.** C. Delete and recreate the storage accounts to refresh the access keys
- **D.** D. Use Azure AD conditional access policies to rotate keys automatically

**Correct answer:** B

**Explanation:**

Integrating **Azure Key Vault** with **managed identities** allows applications to authenticate securely without using static storage account keys. This eliminates the need for manual rotation and aligns with Microsoft’s best practices for credential management.

**Why others are incorrect:**

- **A:** Manual key rotation is prone to operational errors and downtime during updates.

- **C:** Recreating storage accounts would delete data and disrupt services — completely impractical.

- **D:** Conditional access policies manage sign-in conditions, not key rotation.

---

### Question 25

You must enable object replication to copy block blobs from storage-src → storage-dr, filter to the images/ prefix, and backfill older objects starting 2025-01-01. Currently, neither account has blob versioning or change feed enabled.

What must you enable before creating the replication policy?

**Options:**

- **A.** A. Soft delete on both accounts
- **B.** B. Blob versioning on both accounts and change feed on the source ✅
- **C.** C. Hierarchical namespace on both accounts
- **D.** D. Allow cross-tenant replication = true

**Correct answer:** B

**Explanation:**

Allowing cross-tenant replication is not a requirement for enabling object replication between storage accounts within the same tenant. Cross-tenant replication is used when replicating data across different tenants, which is not the case in this scenario.

Overall explanation

Object replication requires **blob versioning enabled on both the source and destination** and **change feed enabled on the source** so the service can detect writes/deletes to replicate. Without those features the replication pipeline cannot enumerate and replicate historical or incremental changes (backfill or ongoing). Also object replication only supports block blobs and certain account types, so enabling versioning and change feed is the required prerequisite before you create container-pair rules and a replication policy.

**Why the others are incorrect:**

- **A:** Soft delete helps recover deleted blobs but is **not** a prerequisite for object replication; it won’t allow replication to start.

- **C:** Hierarchical namespace (Data Lake) is **not supported** for object replication—enabling it would actually block replication.

- **D:** Allow cross-tenant replication controls cross-tenant policy behavior; it’s unrelated to the core prerequisites of versioning and change feed.

---

### Question 26

Your architect asks which storage account and blob types are supported by object replication so you can design the DR topology. Which statement is correct?

**Options:**

- **A.** A. Any storage account type and any blob type
- **B.** B. Accounts with hierarchical namespace and append blobs supported
- **C.** C. General-purpose v2 or premium block blob accounts; block blobs only ✅
- **D.** D. Only accounts encrypted with customer-provided keys

**Correct answer:** C

**Explanation:**

This statement is incorrect. Object replication for DR purposes is not limited to only accounts encrypted with customer-provided keys. The focus is on the storage account type and blob type compatibility for object replication, rather than encryption methods.

Overall explanation

Object replication supports **general-purpose v2** and **premium block blob** accounts and replicates **block blobs only**. It does **not** support accounts with hierarchical namespace enabled, page blobs, or append blobs. Customer-provided keys also block replication; while customer-managed keys are supported, replication is not supported when blobs use customer-provided encryption keys. Knowing these limits is crucial for architecting a reliable replication/DR design.

**Why the others are incorrect:**

- **A:** Not true — there are explicit account and blob-type restrictions; snapshots and page/append blobs aren’t replicated.

- **B:** Accounts with hierarchical namespace (Data Lake) are **not supported**; append blobs are not replicated.

- **D:** Customer-managed keys are supported, but **customer-provided keys** prevent replication; restriction isn’t “only” CPK accounts.

---

### Question 28

You have an Azure subscription that contains a **storage account** named **storage1**.

The **storage1** account contains blobs in a container named **container1**.

You plan to **share access** to **storage1**.

You need to generate a **Shared Access Signature (SAS)** that meets the following requirements:

- The SAS can only be used to **enumerate and download blobs** stored in **container1**.

- The solution must follow the **principle of least privilege**.

Which three settings should you enable?

**Options:**

- **A.** A. File
- **B.** B. Container ✅
- **C.** C. Object
- **D.** D. Read ✅
- **E.** E. List ✅
- **F.** F. Filter

**Correct answer:** B, D, E

**Explanation:**

Choice B, D, and E are correct. To share limited access for enumerating and downloading blobs, the SAS must allow only the minimum permissions required for those operations within the specific container scope.

- **Container** – Select this resource type to scope the SAS to a specific container (container1). This ensures the SAS applies only to the container and the blobs inside it, not to the entire storage account or other containers.

- **Read** – Grants permission to **read or download** blobs from the container. Without this, users couldn’t open or download any blob content.

- **List** – Grants permission to **enumerate blobs** within the container. This allows users to view the list of blob names in container1.

These three settings collectively ensure that users can **see and download blobs**, but **cannot upload, modify, or delete** data—perfectly aligned with the **principle of least privilege**.

Why the others are incorrect

A: **File** – Applies to Azure File Shares, not Blob containers.

C: **Object** – Would allow access to a single blob but not the ability to list all blobs in the container.

F: **Filter** – Not a valid permission type in SAS configuration.

---

### Question 30

Fabrikam uses Azure Files (SMB) for several departmental shares in a standard (HDD) GPv2 account. One share named **Compliance** holds PDFs that are rarely accessed but must remain **online** with **no rehydration**. You need to reduce cost for **that single share** without affecting others.

You need to lower the cost of the **Compliance** share only, while keeping it **online**. **Which option should you choose?**

**Options:**

- **A.** A. Change the storage account’s default access tier to Cool
- **B.** B. Configure a blob lifecycle rule to move the Compliance data to Cool
- **C.** C. Convert the account to Premium file shares (FileStorage)
- **D.** D. Change the Compliance file share tier to Cool via Size + performance ✅

**Correct answer:** D

**Explanation:**

Azure Files supports **share-level tiers** for standard accounts (**Hot, Cool, Transaction optimized**). Changing the **Compliance** share’s tier to **Cool** targets just that share, **reduces cost**, and keeps the data **online**—no rehydration model applies to Azure Files tiers. This is the most precise, cost-efficient change with minimal operational impact.

Why others are incorrect

A. The account **default tier** doesn’t retroactively change existing shares and won’t isolate the change to a single share.

B. **Lifecycle policies** apply to **Blob** storage, not Azure Files.

C. **Premium** improves performance at higher cost; it’s not appropriate for a rarely accessed workload.

---

### Question 32

You have an Azure storage account that contains a blob container named container1.
You need to configure access to container1.
Which authorization types can you use?

**Options:**

- **A.** A. Microsoft Entra ID only
- **B.** B. Microsoft Entra ID, shared access signature or certificate only
- **C.** C. Microsoft Entra ID, storage key or shared access signature only ✅
- **D.** D. Microsoft Entra ID, storage key, shared access signature or certificate
- **E.** E. Storage key or shared access signature only

**Correct answer:** C

**Explanation:**

Azure Blob Storage supports data access by using Microsoft Entra ID, the storage account access key through Shared Key authorization, or a shared access signature (SAS). Microsoft’s Blob authorization guidance and Azure CLI authorization guidance both list these as the supported ways to authorize blob data operations.
A certificate is not listed as a direct authorization type for accessing a blob container. Certificates may be involved indirectly in broader identity or application authentication patterns, but for Blob Storage container access itself, the supported authorization choices are Entra ID, Shared Key, or SAS.
Why the other options are incorrect:
• A. Microsoft Entra ID only — Microsoft recommends Microsoft Entra ID for security, but it is not the only supported authorization method. Blob data operations can also be authorized with the storage account access key or a SAS token.
• B. Microsoft Entra ID, shared access signature or certificate only — This is incorrect because it omits the storage key, which is a valid authorization method for blob data access. It also includes certificate, which is not a standard Blob Storage authorization type in Microsoft’s storage authorization documentation.
• D. Microsoft Entra ID, storage key, shared access signature or certificate — The first three items are valid, but certificate makes the option incorrect. Microsoft’s storage authorization documentation does not list certificate as a direct authorization type for blob container access.
• E. Storage key or shared access signature only — This is incorrect because Microsoft Entra ID is also a supported authorization method for blob data access, and Microsoft recommends it whenever possible.

---

### Question 38

Environment
Requirements
A single Azure Container Registry serving both regions.
Regional pulls without cross-region egress; images available close to each AKS cluster.
Private network access from both VNets; no public endpoint exposure.
No shared/admin passwords; use Azure RBAC to grant pull/push to workloads and CI/CD.
Manage everything in the Azure portal (creation and configuration).
Proposed solution
Create Azure Container Registry (Standard) in East US only.
Keep public network access enabled; do not configure private endpoints.
Enable the admin user and store its password in GitHub Secrets for CI/CD.
Allow aks-eu to pull across regions over the public endpoint.
Does the proposed solution meet the requirements?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No 

Why the solution fails the requirements:
The proposed solution fails on almost every technical requirement listed in the prompt. Here is the breakdown of the discrepancies:

Failure 1: Regional Efficiency (Geo-replication)

Requirement: Regional pulls without cross-region egress; images available close to each cluster.

Proposed: Create registry in East US only and allow the Europe cluster (aks-eu) to pull across regions.

The Problem: The Standard tier does not support Geo-replication. To serve two regions locally and avoid cross-region egress costs/latency, you must use the Premium tier and enable Geo-replication to the Europe region.

Failure 2: Private Networking

Requirement: Private network access from both VNets; no public endpoint exposure.

Proposed: Keep public network access enabled; no private endpoints.

The Problem: To meet this requirement, you must disable public access and configure Private Link / Private Endpoints. Private Link is a feature of the Premium tier.

Failure 3: Security &amp; Identity (RBAC)

Requirement: No shared/admin passwords; use Azure RBAC.

Proposed: Enable the admin user and store the password in GitHub Secrets.

The Problem: The “Admin User“ is a single credential that provides full access. To follow the requirement and best practices, the Admin User should be disabled, and access should be granted via Managed Identities (for the AKS clusters) and Service Principals (for CI/CD) using Azure RBAC roles like AcrPull or AcrPush.

---

### Question 39

Environment
Requirements
A single Azure Container Registry serving both regions.
Regional pulls without cross-region egress; images available close to each AKS cluster.
Private network access from both VNets; no public endpoint exposure.
No shared/admin passwords; use Azure RBAC to grant pull/push to workloads and CI/CD.
Manage everything in the Azure portal (creation and configuration).
Proposed solution
Create Azure Container Registry (Premium) in East US and enable geo-replication to West Europe.
Disable public network access on the registry.
Create private endpoints for the registry in both vnet-us and vnet-eu.
Disable the admin user.
Assign AcrPush to the CI/CD workload identity and AcrPull to the managed identities of aks-us and aks-eu.
(Optional) Add a retention policy for untagged manifests.
Does the proposed solution meet the requirements?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

This configuration meets every stated requirement. Premium is needed for geo-replication, letting aks-us and aks-eu pull locally without cross-region egress. Private endpoints in both VNets with public network access disabled ensure private-only data plane access. Turning off the admin user removes shared passwords; using built-in RBAC roles (AcrPush/AcrPull) ties access to identities from CI/CD and AKS. All of these actions are supported directly in the Azure portal.

---

### Question 40

Environment
Requirements
A single Azure Container Registry serving both regions.
Regional pulls without cross-region egress; images available close to each AKS cluster.
Private network access from both VNets; no public endpoint exposure.
No shared/admin passwords; use Azure RBAC to grant pull/push to work
Proposed solution
Create Azure Container Registry (Basic) in East US.
Add VNet service endpoints for vnet-us and vnet-eu to restrict access.
Create repository-scoped tokens for CI/CD and AKS to avoid RBAC.
Rely on service endpoints to keep traffic private and assume images will replicate to West Europe automatically.
Does the proposed solution meet the requirements?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

This approach is incorrect on multiple fronts. ACR does not support VNet service endpoints; network isolation for ACR is provided via Private Link (private endpoints), not service endpoints. The Basic tier lacks geo-replication, so there’s no automatic replication to West Europe. Using tokens instead of Azure RBAC contradicts the requirement to grant pull/push via identity-based access. Overall, it fails the private access model and the multi-region availability requirement.

---

### Question 43

You need to back up a production web app on a schedule without exposing any public endpoint on the backup target. Backups must flow privately over your VNet to a locked-down storage account.
Which configuration meets the requirement?

**Options:**

- **A.** A. Configure App Service Backup to stbackup, reach it via the private endpoint using VNet integration, and keep public access disabled on the storage account ✅
- **B.** B. Use the Free plan and run on-demand backups to any storage account
- **C.** C. Allow stbackup’s public endpoint and IP-allowlist the app’s outbound IPs, then enable App Service Backup
- **D.** D. Use Shared plan backups and restrict by service endpoints

**Correct answer:** A

**Explanation:**

App Service backups write to an Azure Storage container you specify. With VNet integration on the app and a private endpoint for the storage account in the same VNet, all backup traffic stays on private IPs. Private DNS ensures the storage account name resolves to the private endpoint. With public network access disabled on the storage account, there’s no internet exposure. This satisfies: scheduled backups, private-only data path, and a locked-down target.
Why the others are incorrect:
B. Free plan, on-demand backups — Free/Shared tiers do not support the App Service backup feature. Also, this doesn’t address private-only routing.
C. Public endpoint + IP allowlisting — Still exposes the storage account publicly and fails the “no public endpoint exposure” requirement. Outbound IPs can change with scale/platform events, making this brittle.
D. Shared plan + service endpoints — App Service backup isn’t available on Shared. Service endpoints don’t apply to private-only access for storage here; you already have a private endpoint pattern that fully closes public access.

---

### Question 51

You created a Private Endpoint for storageacct1 (Blob) in VNet-A. Both VNet-A and VNet-B must privately resolve storageacct1.blob.core.windows.net to the endpoint’s private IP. You want a standard, supported approach that doesn’t rely on hosts files or custom DNS servers.
How should you configure private name resolution for both VNets?

**Options:**

- **A.** A. Create an Azure Private DNS zone privatelink.blob.core.windows.net, create/confirm the A record for storageacct1, and link both VNet-A and VNet-B to the zone ✅
- **B.** B. Create a public Azure DNS zone and add a private A record for storageacct1
- **C.** C. Enable auto-registration on VNet-A and VNet-B to register the Private Endpoint name automatically
- **D.** D. Create a CNAME in a private zone pointing storageacct1.blob.core.windows.net to its private IP

**Correct answer:** A

**Explanation:**

Private Endpoints for Blob use service-specific Private DNS zones (e.g., privatelink.blob.core.windows.net). You place (or let the PE creation place) the A record there (typically storageacct1.privatelink.blob.core.windows.net), and clients resolve the public FQDN via the service’s CNAME chain to that private name. Linking both VNets to the same Private DNS zone provides private resolution from each network without custom DNS appliances.
Why the others are incorrect:
B. Public zone with private A: Public zones aren’t for private IP resolution; records would be publicly visible and won’t steer to a VNet-only IP.
C. Auto-registration: Private DNS auto-registration is for VM hostnames in selected zones; it doesn’t auto-register Private Endpoint names across VNets.
D. CNAME ? IP: A CNAME must map hostname-to-hostname, not hostname-to-IP. Also, you still need the correct service private zone to resolve the chain.

---

### Question 56

You have an Azure subscription.
You plan to create a role definition to meet the following requirements:
Users must be able to view the configuration data of a storage account.
The solution must use the principle of least privilege.
What should you include in the role definition for the above requirements?

**Options:**

- **A.** A. Microsoft.Storage/storageAccounts/*
- **B.** B. Microsoft.Storage/storageAccounts/read ✅
- **C.** C. Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read
- **D.** D. Microsoft.Storage/storageAccounts/listkeys/action
- **E.** E. Microsoft.Storage/storageAccounts/blobServices/read
- **F.** F. Microsoft.Resources/subscriptions/resourceGroups/read

**Correct answer:** B

**Explanation:**

Use Microsoft.Storage/storageAccounts/read to grant read-only access to storage account configuration and metadata without granting any write, delete, or data-plane permissions. This precisely matches “view configuration data” and adheres to least privilege. In a custom role, put this under Actions, and keep NotActions empty (unless you’re subtracting from broader wildcards).
Why the other options are incorrect
A: Microsoft.Storage/storageAccounts/* — Grants all control-plane operations (write/delete). Violates least privilege.
C: …/blobServices/containers/blobs/read — Data-plane read of blob content; doesn’t provide storage configuration visibility.
D: …/listkeys/action — Lets users retrieve account keys (highly privileged). Beyond “view config.”
E: …/blobServices/read — Reads blob service settings only; doesn’t cover full storage account configuration (encryption, networking at account scope, etc.).
F: Microsoft.Resources/subscriptions/resourceGroups/read — RG metadata only; doesn’t allow reading storage account configuration.

---

### Question 57

You have an Azure subscription.
You plan to create a storage account that contains the following settings:
Name: storage1
Performance: Standard
Redundancy: Zone-redundant storage (ZRS)
What is the minimum number of copies of storage1 data stored in Azure?

**Options:**

- **A.** A. 2
- **B.** B. 3 ✅
- **C.** C. 6
- **D.** D. 9

**Correct answer:** B

**Explanation:**

Zone-redundant storage (ZRS) stores data synchronously across three Azure availability zones in the primary region. That means the minimum number of copies for storage1 is three.
This is different from geo-redundant options. GRS results in six copies because it keeps three copies in the primary region and three in the secondary region, while GZRS uses ZRS in the primary region plus LRS in the secondary region, which also results in six copies. ZRS by itself does not replicate to a secondary region, so the answer is not 6 or 9.
Why the other options are incorrect:
• A. 2 — ZRS does not keep just two copies. Microsoft states that ZRS replicates data across three availability zones in the primary region, so two is too low.
• C. 6 — Six copies aligns with geo-redundant models such as GRS or GZRS, not ZRS. The question specifies ZRS only, which keeps the data within the primary region across three zones.
• D. 9 — Azure Storage redundancy options described in Microsoft’s documentation do not define ZRS as nine copies. ZRS is three copies across three zones, while the geo-redundant options are six-copy designs.

---

### Question 58

Tailwind Traders uploads ~1 TB of application telemetry to a GPv2 storage account each week. Data is read heavily for the first 14 days, then only occasionally up to 6 months. After that, it must be retained for compliance, and users can tolerate hours of delay before they can read it. You need to minimize total cost while preserving required availability in the first 6 months.
You need to configure storage tiers to meet these patterns with minimal cost and no rehydration delays during the first 6 months. Which option should you choose?

**Options:**

- **A.** A. Change the account default access tier to Cool
- **B.** B. Create a lifecycle rule to move new blobs from Hot to Cool after 14 days (since last modified), and to Archive after 180 days ✅
- **C.** C. Upload new blobs directly to Archive and rehydrate on demand
- **D.** D. Move the container to Premium block blob storage

**Correct answer:** B

**Explanation:**

Lifecycle management automates tier transitions at the blob level, matching the usage pattern: keep new data in Hot for frequent reads, move it to Cool when access drops, and finally to Archive for long-term retention. This sequencing optimizes cost while maintaining appropriate access characteristics at each stage.
Delaying use of Archive until after 180 days avoids unnecessary rehydration delays during the period where occasional reads still occur.
Why others are incorrect
A. The account default only affects the default tier for new blobs; it does not create time-based transitions.
C. Writing straight to Archive makes near-term access impractical due to required rehydration.
D. Premium increases performance (and cost) and doesn’t address age-based tiering.

---

### Question 4

You have an Azure subscription that contains the storage accounts shown in the following table.

You deploy a web app named App1 to the West US Azure region.

You need to back up App1. The solution must minimize costs.

Which storage account should you use as the target for the backup?

**Options:**

- **A.** Storage1
- **B.** Storage2 ✅
- **C.** Storage3
- **D.** Storage4

**Correct answer:** B

**Explanation:**

**Storage2** is the lowest-cost, region-aligned choice for App Service backups.

**Why Storage2 fits**

- App Service **custom backups write to a blob container** in an Azure Storage account; a standard, non-premium account is appropriate.

- Storage2 is **in West US**, the **same region** as App1, which avoids **inter-region data-transfer charges** and unnecessary latency.

- Its **BlobStorage (standard)** account type supports **block blobs**—what App Service backups produce—without the premium pricing of SSD-backed tiers.

**Why the others fall short**

- **Storage1 (StorageV2, Central US):** Different region → **inter-region egress** adds cost; no benefit for this scenario.

- **Storage3 (BlockBlobStorage, West US):** Same region, but **premium SSD-backed** block blob storage is **more expensive** than standard tiers—overkill for backups.

- **Storage4 (FileStorage, East US):** Premium **Azure Files** account type in a different region; App Service backups target **blob containers**, not file shares, and would still incur inter-region transfer.

---

### Question 6

Contoso must move a production VM to a different **subscription** under the same Azure AD tenant to align with new billing. The VM will remain in the **same region** and attached to the same VNet. A short maintenance window is acceptable. You want to use a **native, supported move** that preserves the VM and its dependent resources (NIC, public IP, disks) with minimal changes.

You need to move **prod-web-01** and its dependencies to a **different subscription** in the **same region**, using a **supported move** with minimal manual steps. **Which option should you choose?**

**Options:**

- **A.** A. Azure Resource Mover
- **B.** B. Move resources (to another subscription) ✅
- **C.** C. Azure Site Recovery (ASR)
- **D.** D. Azure Migrate

**Correct answer:** B

**Explanation:**

**Moving resources across subscriptions** (same region) is a **native ARM move** that keeps the VM and its dependent resources together. It’s performed via the portal’s **Move → Move to another subscription** (or **Move-AzResource**), automatically handling references so that NICs, public IPs, and disks move with the VM. This fits the scenario’s **same-region** and **short downtime** requirements without introducing a new migration stack.

**Azure Resource Mover** is designed primarily for **cross-region** moves; using it for a same-region subscription change would add needless orchestration. ASR and Azure Migrate are migration tools that replicate and (re)create VMs, which is unnecessary when a **first-party ARM move** is supported.

Why others are incorrect

A. Azure Resource Mover targets **region-to-region** moves; it’s not required for a **same-region subscription** move.

C. ASR focuses on **replication/failover** workflows and creates new target VMs rather than performing an ARM move.

D. Azure Migrate is for **on-prem/other-cloud-to-Azure** or complex migrate scenarios, not a native **subscription move** within the same region.

---

### Question 8

Tailwind Traders still runs a legacy VM with **unmanaged disks (page blobs)** and wants to standardize on **managed disks** for easier scaling, snapshotting, and RBAC. They prefer a **native, in-place conversion** with minimal changes.

You need to convert **tt-legacy-web-01** to **managed disks** with **minimal operational effort** and without rebuilding the VM. **Which option should you choose?**

**Options:**

- **A.** A. Azure Migrate
- **B.** B. Snapshot each VHD and create managed disks manually
- **C.** C. az vm convert ✅
- **D.** D. Azure Site Recovery (ASR) failover to a new VM

**Correct answer:** C

**Explanation:**

**az vm convert** performs an **in-place conversion** of a VM’s **unmanaged OS and data disks** to **managed disks**, preserving the existing VM identity and references. This avoids re-creation steps, reduces risk, and aligns with the requirement to **minimize operational effort**.

By staying with the same VM and simply changing the disk control plane from storage accounts to managed disks, you gain easier lifecycle management (snapshots, scaling, RBAC) without redesigning the deployment.

Why others are incorrect

A. Azure Migrate targets server discovery and migration scenarios; it’s unnecessary for a simple in-place **disk control plane** change.

B. Manual snapshot-and-recreate works but is **heavier operationally** and error-prone compared to the native conversion.

D. ASR replicates and **creates a new VM**, not an in-place conversion; it adds complexity you don’t need.

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

### Question 31

Contoso runs a two-VM app (web + DB) in Australia East with replication to Australia Southeast using Azure Site Recovery.
Problems / issues
Source region is healthy; business wants near-zero data loss with a controlled cutover.
Need a brief outage to finalize sync and switch over.
App requires startup order (DB before web) and simple orchestration.
Networking already mapped to target VNet/subnets.
You need to execute the cutover to the secondary region under these conditions. Which option should you choose?

**Options:**

- **A.** A. Test failover
- **B.** B. Unplanned failover
- **C.** C. Planned failover ✅
- **D.** D. Commit

**Correct answer:** C

**Explanation:**

Planned failover is designed for controlled cutovers when the source is still available. It shuts down the source VMs, performs a final replication, and brings up the target VMs—minimizing or eliminating data loss at the moment of switch. For multi-VM apps, running the operation via a recovery plan preserves boot order and optional pre/post steps so the DB comes online before the web tier. After verifying the app in the secondary, you Commit to finalize the move and keep replication metadata tidy.
Why others are incorrect
A. Test failover is an isolated drill and doesn’t switch production traffic.
B. Unplanned failover is for outages when the source isn’t available (higher potential data loss).
D. Commit finalizes an already-completed failover; it doesn’t perform the switch.

---

### Question 35

You have an Azure subscription that contains a virtual machine named VM1 and a storage account named storage1.
You need to ensure that VM1 can access storage1 by using the Azure backbone.
What should you configure?

**Options:**

- **A.** A. a routing table
- **B.** B. a service endpoint ✅
- **C.** C. a VPN gateway
- **D.** D. Peering

**Correct answer:** B

**Explanation:**

A service endpoint is the Azure feature designed for this requirement. Microsoft says Azure virtual network service endpoints provide secure, direct connectivity to Azure services over the Azure backbone network. For Azure Storage, enabling the Microsoft.Storage service endpoint on the VM’s subnet lets traffic from that subnet reach the storage account over Microsoft’s backbone rather than the public internet.
This is different from other networking features in the answer set. A routing table does not by itself create Azure Storage service integration, a VPN gateway is for VPN connectivity scenarios, and peering connects virtual networks to each other rather than enabling optimized access from a subnet to Azure Storage.
Why the other options are incorrect:
• A. a routing table — A route table controls how traffic is routed, but it does not enable the Azure Storage service integration needed here. The requirement is specifically about reaching Azure Storage over the Azure backbone by using the supported Azure service-access mechanism, which is a service endpoint.
• C. a VPN gateway — A VPN gateway is used for site-to-site, point-to-site, or VNet-to-VNet VPN connectivity. It is not the feature used to optimize subnet-to-Azure-Storage access over the Azure backbone for this scenario.
• D. Peering — VNet peering connects virtual networks to each other over the Azure backbone, but it does not by itself configure access from a VM subnet to Azure Storage as a PaaS service. For Azure Storage, the relevant feature in this answer set is the service endpoint.

---

### Question 39

You have an Azure VM named VM1. You need to add a 1-TB data disk that:
Survives a datacenter (zone) outage
Delivers the lowest latency / highest performance possible under that resiliency constraint
Ensures no data loss if a host fails
Which storage type should you use?

**Options:**

- **A.** A. Premium SSD (LRS)
- **B.** B. Premium SSD (ZRS) ✅
- **C.** C. Standard SSD (LRS)
- **D.** D. Standard SSD (ZRS)
- **E.** E. Ultra Disk (LRS)
- **F.** F. Premium SSD v2 (LRS)

**Correct answer:** B

**Explanation:**

Premium SSD with Zone-Redundant Storage (ZRS) is the best fit because it keeps synchronous copies across three availability zones in the same region, protecting against datacenter/zone failures with zero data loss (writes are acknowledged only after being committed across zones). Among ZRS-capable managed disks, Premium SSD offers much lower latency and higher IOPS/throughput than Standard SSD, meeting the performance requirement while still providing zone resiliency. If the VM’s host fails, data remains durable because it’s written to the managed disk’s replicated copies; the VM can be brought back on healthy infrastructure without losing data.
Why the others are incorrect
A. Premium SSD (LRS): High performance, but replication is only within a single datacenter. A datacenter outage can make the disk unavailable.
C. Standard SSD (LRS): Same single-datacenter risk as Premium LRS and lower performance/latency than Premium SSD.
D. Standard SSD (ZRS): Has zone resiliency, but does not meet the “lowest latency / highest performance” requirement compared to Premium SSD (ZRS).
E. Ultra Disk (LRS): Delivers the highest performance overall, but only LRS; no ZRS support, so it doesn’t meet datacenter-outage resiliency.
F. Premium SSD v2 (LRS): Very cost-efficient performance but, as of today, ZRS isn’t supported; LRS only, so it fails the datacenter-outage requirement.

---

### Question 41

Contoso needs analytics VMs in a subnet to access a Storage account over the Microsoft backbone while blocking access from the public internet. The security team refuses Private Link for now and wants to keep DNS unchanged. They also want the Storage account locked to only that subnet.
You need a VNet-native feature that keeps traffic on the Azure backbone and lets you allow-list a subnet at the Storage firewall without introducing Private Link. Which option should you choose?

**Options:**

- **A.** A. Private endpoint
- **B.** B. VNet peering
- **C.** C. Service endpoints ✅
- **D.** D. NAT Gateway

**Correct answer:** C

**Explanation:**

Service endpoints extend the subnet’s identity to supported PaaS services so traffic from that subnet to Microsoft.Storage uses the Azure backbone instead of the public internet. After enabling the endpoint on the subnet, you switch the Storage account to Selected networks and add a virtual network rule for that subnet—effectively limiting access to that subnet while leaving DNS unchanged.
This approach is lightweight, requires no per-resource private IPs, and is well-suited when you need backbone paths and subnet-scoped allow-lists but can’t adopt Private Link yet.
Why others are incorrect
A. Private endpoint would satisfy backbone/private access, but it conflicts with the “no Private Link” constraint and changes name resolution.
B. VNet peering connects VNets; it doesn’t secure PaaS access from a subnet.
D. NAT Gateway gives static egress; it doesn’t implement Storage-side allow-lists or backbone enforcement to PaaS.

---

### Question 42

Fabrikam’s data-science subnet can currently reach any Storage account via service endpoints. Compliance now mandates allowing only two specific Storage accounts and blocking all others—without deploying Private Link.
You need a subnet-level control that filters Storage traffic over service endpoints so only named accounts are reachable. Which option should you choose?

**Options:**

- **A.** A. Service endpoint policies ✅
- **B.** B. Trusted Microsoft services
- **C.** C. Private DNS zone
- **D.** D. IP network rules on the VM NICs

**Correct answer:** A

**Explanation:**

Service endpoint policies attach to a subnet and restrict which Storage account resource IDs can be accessed over the service endpoint. You list the approved accounts; connections to any other Storage account are denied—even though the service endpoint is enabled. This is the precise control needed to stop data exfiltration to unapproved accounts while retaining the simplicity of service endpoints.
The policy complements (not replaces) Storage firewalls: keep the accounts on Selected networks with your VNet rules, and the policy prevents that subnet from reaching any unapproved Storage accounts elsewhere.
Why others are incorrect
B. Trusted Microsoft services is a Storage-side exception; it doesn’t implement per-account allow-lists from your subnet.
C. Private DNS controls name resolution, not data-plane filtering to Storage accounts.
D. NIC-level IP rules aren’t how Azure enforces PaaS access; the restriction must be subnet ? service aware.

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

### Question 47

Fabrikam failed over to Australia Southeast during an outage. Australia East is healthy again, and they want to return production there with a controlled operation.
Problems / issues
Current production is running in the secondary region.
Need to reverse replication to the primary and switch back with minimal downtime.
Prefer a sequenced operation (app groups) using the same orchestration surface.
Keep NIC/subnet mappings consistent with the original design.
You need to start the process that enables a controlled return to the primary region. Which option should you choose first?

**Options:**

- **A.** A. Commit
- **B.** B. Planned failover (to primary)
- **C.** C. Stop replication
- **D.** D. Reprotect ✅

**Correct answer:** D

**Explanation:**

Reprotect reverses the replication direction so the current secondary becomes the source, and the original primary becomes the target. After the delta is synchronized, you can perform a planned failover back to primary (for a controlled cutback) and then Commit once validation passes. Using a recovery plan for both directions ensures the same start-up order and any automation you relied on during the initial failover.
Why others are incorrect
A. Commit finalizes a completed failover; it doesn’t prepare replication for the return trip.
B. A planned failover back to primary should follow Reprotect so data is synchronized first.
C. Stop replication removes protection and complicates the path back.

---

### Question 48

Contoso has a hub/spoke topology. App VMs in Spoke-App must reach a Storage account in the same region over the Microsoft backbone, with no public internet access. DNS must remain unchanged. Private Link isn’t permitted right now.
Requirements
Allow only the Spoke-App subnet to reach the Storage account
Keep traffic on the Azure backbone (no internet egress)
No Private Link; no DNS changes
On the storage account, which network access mode should you use to allow only the Spoke-App subnet while keeping traffic on the backbone?

**Options:**

- **A.** A. All networks
- **B.** B. Selected networks ✅
- **C.** C. Public network access: Disabled
- **D.** D. Allow trusted Microsoft services

**Correct answer:** B

**Explanation:**

Selected networks lets you lock the account to specific VNet/subnets via virtual network rules. When you enable a service endpoint from the subnet to Microsoft.Storage and add that subnet as an allow-listed rule, flows use the Azure backbone rather than the public internet—and you don’t change DNS. The public endpoint remains filtered so only your approved subnet (and any defined public IP ranges) can reach the account.
Why others are incorrect
A. All networks exposes the public endpoint broadly.
C. Public network access: Disabled enforces Private Endpoint only, which is disallowed here.
D. Trusted Microsoft services is a first-party bypass; it isn’t a VNet/subnet allow-list.

---

### Question 49

Fabrikam is rolling out a data lake that must not be reachable over the public internet. Clients will connect through private endpoints from approved VNets. They want a single setting on the storage account to enforce private-only access.
Requirements
Enforce private-only data-plane access
Block all public endpoint usage
Keep using Private Endpoint and private DNS from approved VNets
Which single storage setting enforces private-only access and blocks the public endpoint entirely?

**Options:**

- **A.** A. Selected networks
- **B.** B. IP network rules (office IPs)
- **C.** C. Service endpoints
- **D.** D. Public network access: Disabled ✅

**Correct answer:** D

**Explanation:**

Public network access: Disabled removes the storage account’s public endpoint from use so all data-plane access must go through Private Endpoint. This guarantees private-only connectivity regardless of firewall/IP rules and aligns with strict “no internet exposure” requirements.
Why others are incorrect
A. Selected networks still leaves the public endpoint active—just filtered.
B. IP rules control who can hit the public endpoint; they don’t remove it.
C. Service endpoints keep traffic on the backbone but still use the public endpoint path.

---

### Question 50

You have an Azure Storage account that contains a blob container named container1. The container currently has two stored access policies: Policy1 and Policy2.
Based on this configuration, complete the following statement:
“The maximum number of additional stored access policies that you can create for container1 is ________.”

**Options:**

- **A.** A. 0
- **B.** B. 1
- **C.** C. 3 ✅
- **D.** D. 5
- **E.** E. 6
- **F.** F. 10

**Correct answer:** C

**Explanation:**

Choice C is correct. Each Azure Storage container (or queue/table/file share) supports a maximum of five stored access policies. These policies are used to manage shared access signatures (SAS) centrally by defining constraints such as permissions and expiration. Because container1 already has two stored access policies defined, only three additional policies can be created before reaching the five-policy limit.
Stored access policies offer significant administrative advantages—they allow you to revoke or modify multiple SAS tokens simultaneously without regenerating account keys. For example, if you issue SAS tokens linked to a policy and later remove or modify that policy, all dependent SAS tokens automatically become invalid or inherit the updated restrictions. This makes stored access policies crucial for secure and controlled access management in production environments.
Why the others are incorrect
A: 0 is incorrect; the limit hasn’t been reached yet.
B: 1 is incorrect; there’s room for more than one additional policy.
D: 5 is incorrect because the total limit (not additional) is five.
E &amp; F: 6 and 10 exceed Azure’s maximum supported number of stored access policies per container.

---

### Question 54

Contoso is migrating large media content and logs between storage accounts in the same tenant. The operations team needs reliable, high-performance transfers that preserve metadata and can resume after interruptions. Non-technical support staff need an easy GUI for ad-hoc browsing, small uploads/downloads, and setting container access properties.
You must copy 25 TB of large blobs (100+ GB files) from storage-src to storage-dest, preserve blob metadata and MD5 hashes, and be able to resume if a transfer breaks. You need the fastest, scriptable, production-ready tool to run from a VM.
Which tool should you use?

**Options:**

- **A.** A. AzCopy ✅
- **B.** B. Azure Storage Explorer
- **C.** C. Azure Portal upload blade
- **D.** D. Azure Data Factory

**Correct answer:** A

**Explanation:**

AzCopy is a command-line, high-performance tool built for large-scale blob transfers. It supports automatic concurrency tuning, checksum/MD5 verification, metadata preservation, and resume capability for interrupted copies (/V and –overwrite/sync options). It’s scriptable for automation on a VM or runbook and is the recommended tool when throughput, reliability, and resumability matter for terabyte-scale moves.
Why the others are incorrect:
B: Storage Explorer is GUI-focused and convenient for small ad-hoc tasks, but it’s too slow and manual for multi-terabyte bulk transfers.
C: The portal upload is intended for small uploads; it lacks advanced resume, performance, and scripting features.
D: Data Factory can move data at scale and integrate pipelines, but it’s heavier to provision and orchestrate for a one-time, checksum-preserving lift-and-shift compared with AzCopy’s simplicity and speed.

---

### Question 55

You have an Azure subscription and plan to deploy a new storage account.
You must configure encryption for the account to meet the following requirements:
Use a customer-managed key (CMK) stored in Azure Key Vault.
Use the maximum supported bit length for the encryption key.
Which bit length should you use?

**Options:**

- **A.** A. 2048
- **B.** B. 3072
- **C.** C. 4096 ✅
- **D.** D. 8192
- **E.** E. 1024
- **F.** F. 512

**Correct answer:** C

**Explanation:**

Choice C is correct. When you configure Azure Storage encryption with a customer-managed key, Azure uses Azure Key Vault or Azure Key Vault Managed HSM to store the encryption key. The supported key types are RSA and RSA-HSM, with key sizes of 2048, 3072, or 4096 bits. The maximum supported bit length for an RSA key in this scenario is 4096 bits, which provides the strongest level of encryption allowed for customer-managed keys in Azure Storage.
Using a 4096-bit RSA key enhances protection against brute-force attacks by increasing the computational complexity required to derive the private key. However, larger key sizes also result in slightly higher latency during encryption/decryption operations, though this is typically negligible in most storage use cases. Azure Key Vault enforces this 4096-bit limit for performance and compatibility reasons across its encryption-integrated services, including Storage, SQL Database, and Azure Disk Encryption.
Why the others are incorrect
A: 2048 bits is secure and commonly used, but it doesn’t meet the requirement for maximum supported bit length.
B: 3072 bits is stronger than 2048 but still below the maximum supported size.
D: 8192 bits is not supported by Azure Key Vault.
E and F: 1024-bit and 512-bit keys are deprecated and insecure, and cannot be used for CMK in Azure services.

---

### Question 56

You create an Azure Storage account named contosostorage and plan to create a file share named data.
Users need to map a network drive to the data file share from their home computers running Windows 10.
Which outbound port must be open between the home computers and the Azure file share?

**Options:**

- **A.** A. 80
- **B.** B. 443
- **C.** C. 445 ✅
- **D.** D. 3389
- **E.** E. 1433
- **F.** F. 22

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure Files uses the SMB (Server Message Block) protocol, which communicates over TCP port 445 for both authentication and data transfer. When users map a drive to an Azure file share (for example, \\contosostorage.file.core.windows.net\data), Windows attempts to connect to Azure Storage over this port. For the mapping to succeed, outbound TCP port 445 must be open on the client’s network, and the client’s ISP or corporate firewall must not block this port.
If port 445 is blocked (which is common on many residential ISPs), drive mapping will fail, but users can still access the share using Azure File Sync or via the REST API over HTTPS (port 443). Therefore, ensuring TCP 445 is open and reachable is a critical prerequisite for SMB-based access to Azure file shares.
Why the others are incorrect
A: Port 80 (HTTP) is not used for SMB connections; it’s used for unencrypted web traffic.
B: Port 443 (HTTPS) is used for REST API and portal access, not SMB file sharing.
D: Port 3389 (RDP) is used for remote desktop connections, not file shares.
E: Port 1433 is used for SQL Server database connections.
F: Port 22 is used for SSH, not SMB.

---

### Question 57

You have an Azure subscription named Subscription1 that contains a resource group named RG1 with the following properties:
Region: West US
Tag: “tag1“: “value1“
You assign an Azure Policy named Policy1 to Subscription1 using these settings:
Exclusions: None
Policy definition: Append a tag and its value to resources
Assignment name: Policy1
Parameters:
Tag name: tag2
Tag value: value2
After assigning the policy, you create a storage account with the following configuration:
Name: storage1
Region: West US
Resource group: RG1
Tags: “tag3“: “value3“
Which tags are assigned to storage1?

**Options:**

- **A.** A. “tag3“: “value3“ only
- **B.** B. “tag1“: “value1“ and “tag3“: “value3“ only
- **C.** C. “tag2“: “value2“ and “tag3“: “value3“ only ✅
- **D.** D. “tag1“: “value1“, “tag2“: “value2“, and “tag3“: “value3“
- **E.** E. “tag2“: “value2“ only
- **F.** F. “tag1“: “value1“ only

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure tags are not inherited automatically from a resource group or subscription. This means that when you create a new resource—such as storage1—it does not automatically receive the tag “tag1“: “value1“ from RG1.
However, Policy1 was assigned at the subscription level with a definition type of “Append a tag and its value to resources“. Because the policy has no exclusions and is applied to all resources in Subscription1, it automatically appends the defined tag (“tag2“: “value2“) to any resource created after the policy is in effect.
When storage1 was created, it already included “tag3“: “value3“ in its configuration. The policy then appended “tag2“: “value2“, resulting in the following tags:
“tag2“: “value2“  
“tag3“: “value3“
Final tag set on storage1:
“tag2“: “value2“ (added by policy)
“tag3“: “value3“ (defined during creation)
Why the others are incorrect
A: Incorrect — “tag3“: “value3“ is present, but the policy appends “tag2“: “value2“.
B: Incorrect — resource group tags (“tag1“: “value1“) are not inherited automatically.
D: Incorrect — “tag1“: “value1“ from RG1 does not apply to new resources.
E: Incorrect — “tag3“: “value3“ is user-defined and remains.
F: Incorrect — no inheritance of RG1’s tag.

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

### Question 10

You manage an Azure Files share named share1 hosted in a storage account storage1. You must ensure share1 supports SMB Multichannel, and the solution must minimize costs.
How should you configure storage1?

**Options:**

- **A.** A. Standard performance with locally-redundant storage (LRS)
- **B.** B. Premium performance with locally-redundant storage (LRS) ✅
- **C.** C. Standard performance with zone-redundant storage (ZRS)
- **D.** D. Premium performance with zone-redundant storage (ZRS)
- **E.** E. Standard performance with geo-redundant storage (GRS)
- **F.** F. Premium performance with geo-redundant storage (GRS)

**Correct answer:** B

**Explanation:**

Choice B is correct.
SMB Multichannel allows a single SMB session to use multiple network connections in parallel, increasing aggregate throughput and providing resiliency if one path degrades. In Azure Files, this capability is available only on premium (SSD) file shares and is enabled by default for compatible SMB clients. Premium file shares live in FileStorage accounts and offer deterministic performance (provisioned IOPS/throughput scale with the share size), which is exactly what Multichannel is designed to take advantage of—multiple TCP channels can fully utilize the premium share’s bandwidth ceiling. To meet the “minimize costs” requirement, choose LRS for redundancy: it’s the least expensive premium redundancy option, while still delivering the Multichannel feature and premium performance needed by SMB workloads. If you later require zone-level durability, you can evaluate upgrading to ZRS, but LRS is the cost-efficient starting point that satisfies the feature requirement today.
Why the others are incorrect (expanded)
A: Standard performance with LRS — Standard Azure Files (GPv2) uses HDD-backed capacity tiers and doesn’t support SMB Multichannel at all. Even though LRS is cheap, it fails the functional requirement because Multichannel is unavailable on the standard tier.
C: Standard performance with ZRS — ZRS improves availability across zones, but it’s still standard tier, so Multichannel remains unsupported. Higher availability without the required feature doesn’t solve the problem.
D: Premium performance with ZRS — This configuration does support SMB Multichannel (it’s premium), but it increases cost relative to premium LRS. Since the requirement explicitly says minimize costs, paying the ZRS premium isn’t justified unless you also require zone-level durability.
E: Standard performance with GRS — Like A and C, the standard tier means no Multichannel. GRS adds cross-region durability/cost, which doesn’t help meet the Multichannel requirement and increases spend unnecessarily.
F: Premium performance with GRS — GRS isn’t a supported redundancy option for FileStorage-based premium file shares. Premium shares currently support LRS (and in many regions ZRS). Selecting premium+GRS would be unsupported and therefore not viable.

---

### Question 14

You have an Azure subscription with a virtual machine VM1 and an Azure Key Vault KV1.
Requirements:
Store and use the encryption key in KV1
Maintain encryption if VM1’s disks are downloaded from Azure
Encrypt both the OS disk and all data disks
Which encryption method should you use?

**Options:**

- **A.** A. Azure Disk Encryption ✅
- **B.** B. Customer-managed keys (SSE with CMK) for Azure Managed Disks
- **C.** C. Encryption at host
- **D.** D. Confidential disk encryption on Confidential VMs
- **E.** E. Platform-managed keys (SSE with PMK) for Azure Managed Disks
- **F.** F. Azure Storage Service Encryption at the storage account scope

**Correct answer:** A

**Explanation:**

Choice A is correct.
Azure Disk Encryption (ADE) performs guest-based volume encryption (BitLocker for Windows, dm-crypt for Linux) and can protect the BEK with a KEK stored in Key Vault (KV1). Because the encryption is applied inside the guest, the VHDs remain encrypted even when exported or downloaded from Azure. ADE also supports encrypting both the OS disk and all attached data disks, meeting all stated requirements.
Why the others are incorrect
B: Customer-managed keys (SSE with CMK) protect disks with service-side encryption at rest in Azure, but exported/downloaded VHDs are not persistently encrypted by SSE and this does not provide guest-level BitLocker/dm-crypt.
C: Encryption at host secures data on the Azure host and in transit to storage, but it doesn’t encrypt the disk contents themselves and doesn’t persist after download.
D: Confidential disk encryption targets Confidential VMs with different attestation/key flows. The scenario doesn’t require CVM SKUs, and it specifically calls for Key Vault–based key use and persistence after download, which ADE satisfies broadly.
E: Platform-managed keys (SSE with PMK) are the default service-side encryption; like CMK, they don’t give guest-based, persistent encryption outside Azure.
F: Storage account–level SSE is not applicable to Managed Disks the way ADE is, and it won’t provide guest-level encryption that persists off-platform.

---

### Question 17

You have an Azure subscription. The subscription contains a storage account named storage1 that has a life cycle management rules shown in the following table.

On June 1, you store two blobs in storage1 as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“On June 1, File2 will be stored in the Cool access tier.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because Rule3 states that blobs in container2/ older than 10 days will be deleted, and Rule4 moves blobs older than 15 days to archive storage. File2, added on June 1, does not meet the conditions for any lifecycle management rule to trigger. Therefore, it remains in the Hot tier, and no rule moves it to the Cool tier.

---

### Question 21

You must standardize **in-guest encryption** across mixed OS VMs and keep **all cryptographic material in a single Key Vault**. Operations wants to use **managed identities** for permissioning, avoid rebuilding VMs, and encrypt **both OS and data disks**. The plan is to apply a repeatable pattern across groups.

Environment

Which option should you choose?

**Options:**

- **A.** A. Server-side encryption with CMK (DES)
- **B.** B. ADE via extension; Key Vault + system-assigned identity ✅
- **C.** C. Encryption at host on the VM size
- **D.** D. Move disks to Archive

**Correct answer:** B

**Explanation:**

Choice B is correct. The **ADE extension** applies **BitLocker/dm-crypt** in the guest, exactly matching the in-guest requirement. Use **one Key Vault** to store secrets/keys and grant the VM’s **system-assigned managed identity** the minimal vault access needed by ADE. This approach **works for Windows and Linux**, covers **OS and data disks**, and avoids VM rebuilds—making it ideal for a **repeatable, at-scale** rollout.

Why the other options are incorrect

A: **DES (SSE with CMK)** changes the **service-side** key but doesn’t implement **in-guest** encryption.

C: **Encryption at host** is a host-level control, not BitLocker/dm-crypt, and doesn’t place guest keys in your Key Vault.

D: **Archive tier** applies to blob storage, not managed VM disks; it doesn’t encrypt VM volumes.

---

### Question 26

You want automated tiering/deletion to reduce costs while meeting data retention patterns. Rules should be **prefix-targeted** and include **versions** where needed.

Environment

Which option should you choose?

**Options:**

- **A.** A. Manual tier changes by script
- **B.** B. Set account default tier to Cool
- **C.** C. Lifecycle rules with prefix filters and age-based actions ✅
- **D.** D. Immutable policy for 1 year

**Correct answer:** C

**Explanation:**

Choice C is correct. **Lifecycle management** supports **per-prefix filters** and **actions** (move to Cool/Archive, delete) based on **last modified** (and **versions**, if selected). You can target **base blobs only** or **base + versions** and apply different day thresholds per prefix to meet each pattern.

Why the other options are incorrect

A: Scripts are manual and error-prone; the requirement is **automated policy**.

B: A default Cool tier is **global** and blunt; it doesn’t handle **per-prefix rules** or deletions.

D: **Immutability** locks data and **prevents lifecycle deletions** while the policy is active.

---

### Question 31

You plan to move blobs to Cool after 30 days since last access and to Archive after 120 days since last access. You want the platform to do this automatically, no scripts.
Which option should you choose?

**Options:**

- **A.** A. Enable versioning and snapshots
- **B.** B. Use change feed to detect reads
- **C.** C. Enable last access time tracking and create lifecycle rules ✅
- **D.** D. Set account tier to Archive

**Correct answer:** C

**Explanation:**

Choice C is correct. Lifecycle last-access-based actions require last access time tracking. Once enabled, you can create rules to auto-tier to Cool/Archive based on days since last access.
Why the other options are incorrect
A: Versioning/snapshots don’t drive access-time-based tiering.
B: Change feed records events but isn’t a policy engine for tiering.
D: Setting the whole account to Archive is global and ignores access-time logic.

---

### Question 34

Refer to Northwind Traders (I) Case Study : AZ-104:
https://docs.google.com/document/d/1epkoAw5-c-Dg62nsP1g5j7KMVQZUnQNaeU21ZD-K0Z0/edit?usp=sharing
Blueprint files will live in an Azure Blob container. Northwind must give partners temporary, secure access for upload/download without creating partner user accounts. Public access on the storage account is disabled, and admin effort should be minimal.
Which approach best meets the requirement?

**Options:**

- **A.** A. Generate an account-level SAS for the storage account and share it with partners indefinitely
- **B.** B. Invite partner users as B2B guests and assign Storage Blob Data Contributor to the container
- **C.** C. Generate a container-level SAS for the partner container using a stored access policy with start/expiry times and limited permissions (and optional IP ranges) ✅
- **D.** D. Enable SFTP for the storage account and create local SFTP users for each partner, provide global administrator privileges for each partner to foster collaboration

**Correct answer:** C

**Explanation:**

Choice C is correct. A container-level SAS scoped by a stored access policy delivers time-bound, least-privilege access without creating identities. You can constrain permissions (read/write/list), set start/expiry, limit by IP, and revoke access centrally by removing/altering the stored access policy—meeting the “temporary” and “no partner accounts” requirements while keeping administration lightweight.
Why the others are incorrect
A: An account-level SAS is overly broad and risky; if leaked, it exposes multiple containers/services and is harder to revoke granularly.
B: B2B guest access creates partner identities (explicitly disallowed) and adds lifecycle overhead.
D: SFTP with local users adds key/user management; still creates accounts and increases operational burden.

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

### Question 42

Problem (Adventure Works)
• Multiple containers use one-off SAS tokens that teams can’t centrally revoke.
• Partners need extendable 30-day access without reissuing tokens to every app.
• Revoking access to one container must not affect others.
Which option should you choose?

**Options:**

- **A.** A. Switch all tokens to user delegation SAS
- **B.** B. Create per-container stored access policies (e.g., mediaPolicy, logsPolicy) and reissue SAS tied to those policies ✅
- **C.** C. Disable public access and share anonymous URLs
- **D.** D. Regenerate account keys monthly and redistribute tokens

**Correct answer:** B

**Explanation:**

Choice B is correct. By binding SAS to a stored access policy, you get one control knob per container: extend partner access by moving policy expiry forward, restrict permissions centrally, or revoke immediately by removing/renaming the policy. Impact is isolated to the container whose policy you change; other containers keep working.
Why the other options are incorrect
A: Stored access policies work with service SAS, not user delegation SAS; you’d lose the central policy lever.
C: Anonymous URLs don’t provide scoped, time-bound, revocable access and ignore the auditing requirements typical for partners.
D: Monthly key rotation is a blunt instrument that breaks all SAS signed with that key across containers, contradicting the isolation requirement.

---

### Question 43

Compliance mandates customer-managed keys (CMK) for a production storage account. Keys are held in Azure Key Vault or Managed HSM and rotated periodically. Operations wants automatic key version pickup without code changes, and security wants the storage account to have only the minimal key permissions it needs.
Requirements
• Use CMK for encryption at rest
• Auto-update to the latest key version upon rotation
• Grant only required permissions to the storage account identity
Which option should you choose?

**Options:**

- **A.** A. Server-side encryption with Microsoft-managed keys
- **B.** B. Enable infrastructure encryption only
- **C.** C. Configure CMK and grant get/wrapKey/unwrapKey; reference the key without a version ✅
- **D.** D. Use client-side encryption in the SDK

**Correct answer:** C

**Explanation:**

Choice C is correct. Customer-managed keys let Azure Storage encrypt with a key in Key Vault/Managed HSM. Assign the storage account’s managed identity the get, wrapKey, and unwrapKey permissions on the key; if you omit the key version when configuring CMK, the account will automatically adopt the newest version after rotation. This satisfies CMK, auto-update, and least-privilege without application changes.
Why the other options are incorrect
A: Microsoft-managed keys don’t meet the CMK requirement.
B: Infrastructure encryption adds a second layer but doesn’t switch to customer-managed keys.
D: Client-side encryption changes app behavior and key handling; the requirement targets service-side CMK with minimal operational impact.

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

### Question 48

Your on-premises network hosts an SMB file share named Share1.
Your Azure subscription contains:
A web app named webapp1
A virtual network named VNET1
You need to ensure that webapp1 can connect to Share1 hosted on-premises.
What should you deploy?

**Options:**

- **A.** A. an Azure Application Gateway
- **B.** B. a Microsoft Entra Application Proxy
- **C.** C. an Azure Virtual Network Gateway ✅
- **D.** D. an Azure Private Link endpoint
- **E.** E. an Azure ExpressRoute circuit
- **F.** F. an Azure Bastion host

**Correct answer:** C

**Explanation:**

Choice C is correct.
To allow webapp1 to access Share1 over SMB, you need network-level connectivity between Azure and your on-premises network. The Azure Virtual Network Gateway enables this through a site-to-site VPN or ExpressRoute connection. Once the gateway is established, and webapp1 is integrated with VNET1, it can reach the on-premises SMB share using private IP addressing.
Why the others are incorrect
A: Application Gateway handles HTTP/HTTPS web traffic, not SMB or private network routing.
B: Entra Application Proxy provides remote access for web apps, not file shares.
D: Private Link connects to Azure PaaS services, not on-premises resources.
E: ExpressRoute provides private connectivity but still requires a Virtual Network Gateway to connect the virtual network.
F: Bastion provides secure RDP/SSH access to Azure VMs, not network routing or SMB connectivity.

---

### Question 50

Fabrikam runs Windows Server and Ubuntu VMs with managed OS and data disks. Security wants encryption inside the guest OS with keys they control and the ability to revoke/rotate in Key Vault without changing app code. They also want both OS and data disks encrypted.
Which option should you choose?

**Options:**

- **A.** A. Enable Azure Disk Encryption ✅
- **B.** B. Server-side encryption with CMK (Disk Encryption Set)
- **C.** C. Encryption at host
- **D.** D. Storage account encryption

**Correct answer:** A

**Explanation:**

Choice A is correct. Azure Disk Encryption (ADE) encrypts inside the VM—BitLocker for Windows and dm-crypt for Linux—covering OS and data volumes from within the guest. ADE uses an extension to apply encryption and integrates with Azure Key Vault for secrets/keys, so you keep customer control over cryptographic material and can revoke/rotate at the vault without touching applications. Because ADE operates at the guest layer, it gives defense-in-depth beyond storage-level encryption and satisfies scenarios that explicitly require in-guest encryption.
Why the other options are incorrect
B: SSE with CMK protects disks at the storage service layer using a Disk Encryption Set—excellent for key ownership, but it is not in-guest encryption and doesn’t use BitLocker/dm-crypt.
C: Encryption at host adds a host-level encryption layer (great for temp/ephemeral paths), but it’s not BitLocker/dm-crypt and doesn’t store guest keys in Key Vault the way ADE does.
D: Storage account encryption is unrelated to managed disks and does not configure VM disk encryption.

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

### Question 56

A new archive workload must implement double encryption at rest with minimal operational overhead. The team wants a platform setting they can enforce at account or scope creation and that works whether they use Microsoft-managed keys or CMK.
Which option should you choose?

**Options:**

- **A.** A. Require TLS 1.2
- **B.** B. Use immutable blob policies
- **C.** C. Turn on CMK in Key Vault
- **D.** D. Enable infrastructure encryption at account (or encryption scope) creation ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Infrastructure encryption provides a second, independent encryption layer at the storage infrastructure level. It’s enabled when creating the account or encryption scope and can’t be turned on later, delivering auditable double encryption regardless of whether service-side encryption uses Microsoft-managed keys or CMK.
Why the other options are incorrect
A: TLS secures in transit, not at rest.
B: Immutability controls retention and delete/overwrite behavior, not encryption layers.
C: CMK changes key ownership for service-side encryption but doesn’t add a second encryption layer by itself.

---

### Question 60

A partner’s ad-hoc SAS tokens for several containers were accidentally posted in a wiki. Security wants the ability to instantly revoke those tokens and centrally control expiry/permissions going forward without rotating account keys or breaking other apps. You must implement a tenant-friendly pattern that scales across containers.
Which option should you choose?

**Options:**

- **A.** A. Create stored access policies on each container and issue SAS tokens bound to those policies ✅
- **B.** B. Rotate the storage account keys
- **C.** C. Issue service SAS tokens directly (no policy) with short expiry
- **D.** D. Use RBAC (Storage Blob Data Reader) instead of SAS

**Correct answer:** A

**Explanation:**

Choice A is correct. A stored access policy (at the container/share/queue/table) lets you bind service SAS tokens to a server-side policy (via a signed identifier). You can then revoke access immediately by deleting/renaming the policy or by bringing the policy’s expiry into the past; any SAS tied to that policy becomes invalid at once. Policies also give you centralized control over permissions and expiry for all SAS issued against that container—meeting the need to revoke quickly and manage at scale without rotating account keys.
Why the other options are incorrect
B: Rotating account keys would invalidate all service SAS signed with that key, causing broad disruption; the requirement explicitly says don’t rotate keys. It’s also not granular per container/partner.
C: Ad-hoc service SAS (no policy) cannot be centrally revoked; you must wait for each token to expire. Short lifetimes reduce risk but don’t allow instant revocation.
D: RBAC governs requests authenticated with Entra ID, not SAS. SAS bypasses RBAC, so assigning roles won’t revoke leaked SAS tokens.

---

## Practice Set 19

Source: https://skillcertpro.com/az-104-exam-questions/19/

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

### Question 7

You’ve created private endpoints and private DNS zones. Now on-prem clients must resolve the Azure private zones (e.g., privatelink.blob.core.windows.net) without custom DNS servers in Azure VMs. You want a managed, highly available resolver in Azure that accepts queries from on-prem and forwards to Azure Private DNS.
“To let on-prem resolve Azure private zones in a managed way, deploy an Azure DNS __________ and point on-prem conditional forwarders to its inbound endpoint.”

**Options:**

- **A.** A. Private DNS zone only
- **B.** B. Private Resolver ✅
- **C.** C. Public DNS zone
- **D.** D. Custom hosts files

**Correct answer:** B

**Explanation:**

Choice B is correct. Azure DNS Private Resolver provides inbound endpoints that accept DNS queries from on-prem over your VPN/ER and rulesets that forward to Azure Private DNS. This removes the need for VM-based DNS forwarders, scales with the platform, and keeps resolution authoritative even as you add more private zones. Use outbound endpoints + rulesets if you also need conditional forwarding back to on-prem.
Why the other options are incorrect
A: A private DNS zone alone doesn’t receive queries from on-prem; you still need a resolver path.
C: A public zone publishes to the Internet—opposite of the private endpoint design.
D: Hosts files don’t scale, don’t update automatically, and break the FQDN-to-PE mapping model.

---

### Question 10

Multiple apps use Shared Key to call Blob/Queue. You must rotate without downtime and avoid mass redeploys. Central secrets are already stored in Key Vault and can be updated once.
“To rotate safely with zero downtime, use the __________ approach: switch clients to the alternate key, then regenerate the old key.”

**Options:**

- **A.** A. Disable Shared Key access
- **B.** B. Regenerate both keys at once
- **C.** C. Dual-key rolling rotation ✅
- **D.** D. DNS failover

**Correct answer:** C

**Explanation:**

Choice C is correct. Storage accounts have two keys. Update clients (via Key Vault reference or config) to use, for example, key2; once traffic confirms, regenerate key1; later switch back and regenerate key2. This alternating pattern preserves service continuity and provides a recovery path if a rotation step goes wrong. It also supports gradual rollout across many apps with a single central secret reference.
Why the other options are incorrect
A: Disabling Shared Key breaks clients before you migrate them to SAS or AAD; it’s a follow-on hardening step, not rotation.
B: Regenerating both keys risks total outage—no valid credentials remain for lagging clients.
D: DNS is unrelated to credential rotation.

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

### Question 20

You’re standardizing external access to three blob paths. Security forbids distributing account keys. Some partners need **AAD-backed** delegation; others need **central, instant revoke** across many issued tokens.

**Access needs**

****

Which option should you choose **for media/raw/**?

**Options:**

- **A.** A. User delegation SAS ✅
- **B.** B. Service SAS (adhoc)
- **C.** C. Account SAS
- **D.** D. Public access + IP allowlist

**Correct answer:** A

**Explanation:**

Choice A is correct. A **user delegation SAS** is signed with a **user delegation key obtained via Entra ID** for the **Blob service**. It avoids account keys, ties issuance to **AAD authorization**, and yields **fine-grained, time-scoped** tokens ideal for app-to-blob scenarios like CDN origin pulls. Because it’s derived from AAD, revocation aligns with **AAD token lifetimes** and the delegation key’s lifetime.

Why the other options are incorrect

B: A **service SAS (ad-hoc)** is signed with an **account key** and **can’t be centrally revoked**; you must wait for expiry or rotate keys.

C: An **account SAS** spans services and is signed with **account keys**; too broad and harder to contain if leaked.

D: **Public access** is disallowed and can’t enforce AAD-based delegation.

---

### Question 21

You’re standardizing three workloads. You must pick the **right account kind/features** without changing app code later. Security forbids public anonymous access.

**Workloads**

****

For **DataLakeRaw**, which option should you choose?

**Options:**

- **A.** A. StorageV2 with Hierarchical namespace enabled ✅
- **B.** B. BlobStorage (legacy)
- **C.** C. FileStorage (Premium Files)
- **D.** D. StorageV2 with static website

**Correct answer:** A

**Explanation:**

Choice A is correct. Enabling the **Hierarchical namespace (HNS)** on a **StorageV2** account upgrades Blob to **ADLS Gen2** semantics: directory operations, **POSIX-style ACLs**, atomic renames, and compatible **lifecycle rules**—exactly what analytics pipelines expect. It keeps you on the mainstream GPv2 platform, so future features (encryption scopes, lifecycle, networking) remain available without re-creating the account.

Why the other options are incorrect

B: **BlobStorage (legacy)** lacks new features and HNS; you’d have to re-platform to get ACL directories.

C: **FileStorage** targets SMB/NFS shares, not blob-based hierarchical datasets for analytics.

D: Static website is for **web hosting**; it doesn’t add HNS or POSIX ACLs.

---

### Question 22

You will select redundancy per workload, balancing **in-region resilience** vs **geo continuity**. Traffic is mostly in **Australia East**, but compliance wants **readable replicas** if the region has a major outage.

**Redundancy needs**

****

Which option should you choose **for DataLakeRaw**?

**Options:**

- **A.** A. ZRS
- **B.** B. RA-GZRS ✅
- **C.** C. LRS
- **D.** D. GRS

**Correct answer:** B

**Explanation:**

Choice B is correct. **RA-GZRS** gives **zone-redundant** writes in the primary region (**ZRS**) **plus** **asynchronous geo-replication** with **read access** to the secondary during a regional incident. That matches “zone failure + regional outage” with **readable replicas**. When the primary is healthy, you keep strong in-region durability and availability; during a disaster, you can **read from the secondary** while recovery proceeds.

Why the other options are incorrect

A: **ZRS** handles **zone** failures only; no **geo** read.

C: **LRS** is single-datacenter—insufficient for either zone or regional incidents.

D: **GRS** gives geo durability but **no read** unless Microsoft initiates failover; requirement demands read during outage.

---

### Question 23

You’re standardizing data operations for three paths. Some flows must be **headless** and run on servers without Entra sign-in; others should be **GUI-driven** with user auth. You want resilient, **resume-capable** transfers and to avoid distributing account keys.

Operations table

For **logs/app/**, which option should you choose?

**Options:**

- **A.** A. AzCopy with SAS ✅
- **B.** B. Storage Explorer (Entra ID)
- **C.** C. AzCopy with managed identity
- **D.** D. Portal “Upload”

**Correct answer:** A

**Explanation:**

Using the Portal “Upload” feature would require user interaction and authentication, which is not suitable for headless operations. This option does not align with the need for standardized data operations that include both headless and GUI-driven flows.

Overall explanation

Choice A is correct. **AzCopy with a SAS** fits a **headless Windows Server** where interactive Entra sign-in isn’t available. You can script resilient, **recursive** transfers (/S), get **automatic retries/resume**, and run on a schedule. SAS scope/expiry keeps exposure minimal and avoids distributing account keys to the host.

Why the other options are incorrect

B: **Storage Explorer** is GUI-centric and requires a user session; it’s not ideal for **scheduled, headless** jobs.

C: **Managed identity** works only where the runtime can present an identity (e.g., VM/VMSS/Container Apps); a generic server without Entra-bound identity can’t use it.

D: **Portal uploads** are manual and fragile for **large, recurring** folder trees.

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

### Question 31

For logs/app/ you issued many service SAS tokens to a partner. A batch of tokens was exposed. You must revoke immediately, then extend access for valid consumers without rotating the account keys or re-issuing new tokens everywhere.
Requirements
• Central instant revoke
• Ability to extend/shorten in one place
• No account-key rotation
Which option should you choose?

**Options:**

- **A.** A. Regenerate storage account keys
- **B.** B. Create a stored access policy on the container and issue SAS tied to its signed identifier ✅
- **C.** C. Switch to user delegation SAS for all cases
- **D.** D. Add a VNet service endpoint

**Correct answer:** B

**Explanation:**

Choice B is correct. A stored access policy (on the container) provides a server-side policy object for service SAS. Tokens bound to the policy’s signed identifier inherit its expiry and permissions. You can revoke instantly by deleting/renaming the policy or extend/shorten by editing the policy—all existing bound SAS update behavior immediately—with no account-key rotation and minimal client churn.
Why the other options are incorrect
A: Key rotation is global and disruptive; it invalidates all SAS signed with that key, not just the leaked set.
C: User delegation SAS is excellent but requires AAD flow and re-issuance; it doesn’t retro-bind existing service SAS.
D: Network restrictions don’t revoke already issued SAS and often don’t match partner network distributions.

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

### Question 38

Refer to Adventure Works Cycles (I) Case Study : AZ-104
https://docs.google.com/document/d/1Zz2_H3e1z8UQOVK2kl8Z0uCT-FnpZrAK3cg2kKdd3fs/edit?usp=sharing
AppX is rehosted as VMs in a single VNet (Web, Processing, Data). Azure Storage for design packages is reachable only via a Private Endpoint. After the cutover, the Web tier cannot access Blob by FQDN.
Which TWO configurations should you implement?

**Options:**

- **A.** A. Create a Private Endpoint for the storage account ✅
- **B.** B. Enable service endpoints to Storage on the Web subnet
- **C.** C. Create a Private DNS zone privatelink.blob.core.windows.net and link it to the VNet ✅
- **D.** D. Add a UDR to the Web subnet that points Blob FQDNs to the Private Endpoint IP

**Correct answer:** A, C

**Explanation:**

Choice A is correct. The workload must expose Storage privately inside the VNet; a Private Endpoint maps the storage account to a private IP on the Web/Processing/Data side, keeping data off the public internet.
Choice C is correct. Private Endpoints require name resolution of the public FQDN to the private IP. Linking the Private DNS zone privatelink.blob.core.windows.net to the VNet lets the VMs resolve the storage account name to its Private Endpoint address without host-file hacks or custom DNS appliances.
Why the others are incorrect
B: Service endpoints don’t apply to AppX ? Storage when you’ve chosen Private Endpoints; they keep traffic on Microsoft’s backbone but still use public FQDNs and aren’t needed here.
D: A UDR does not solve DNS. You must first resolve the FQDN to the private IP; routing alone cannot redirect name resolution.

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

### Question 53

You need asymmetric replication of block blobs from stsource (Australia East) to stdest (Australia Southeast) for the containers datalake/raw ? archive/raw. Security insists on least privilege and no account keys in pipelines. You want existing and new versions to flow, and you must preserve delete markers for retention analysis.
Requirements
• Support block blobs only
• Versioning on source and destination
• Change feed on source
• Configure with identity (no keys)
• Replicate new versions and propagate deletes
Which option should you choose?

**Options:**

- **A.** A. Enable soft delete and snapshots; use copy jobs
- **B.** B. Turn on versioning only; create lifecycle move rules
- **C.** C. Enable versioning on both, change feed on source; create an object replication policy (pair containers) and use managed identity ✅
- **D.** D. Enable NFS and rsync the containers

**Correct answer:** C

**Explanation:**

Choice C is correct. Object replication for block blobs requires blob versioning on both accounts and change feed on the source. You then create an object replication policy that pairs source and destination containers and specifies rules for versions and delete marker behavior. By wiring the configuration with a managed identity, you avoid embedding account keys while granting only the permissions needed to evaluate the policy and move data. The result is low-touch, policy-driven replication that handles new versions and deletions predictably.
Why the other options are incorrect
A: Soft delete/snapshots with ad-hoc copy lacks policy and won’t track delete markers or version lineage automatically.
B: Versioning alone doesn’t replicate; lifecycle moves don’t copy across accounts/regions.
D: NFS/rsync bypasses blob semantics, has no notion of versions/delete markers, and breaks the “no keys in pipelines” rule.

---

### Question 57

You want a single logical registry that serves low-latency pulls in Europe and Australia using regional endpoints, keeps replicas close to the builders/runtimes, and avoids creating/seeding multiple registries. Security will harden access separately (private endpoints/identities).
Which option should you choose?

**Options:**

- **A.** A. Enable admin user and use PATs
- **B.** B. Configure webhooks
- **C.** C. Private endpoint only
- **D.** D. Geo-replication ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Geo-replication keeps one ACR name while provisioning regional replicas that serve pushes/pulls locally in each geography. Images replicate within the same registry namespace, so builders and consumers hit nearest endpoints, reducing latency and egress. You avoid multi-registry sprawl, version drift, and duplicated pipelines while maintaining central RBAC/policies. Harden with private endpoints and managed identities separately as needed.
Why the other options are incorrect
A: The admin user is a broad static credential and doesn’t address regional performance or replication.
B: Webhooks notify clients of events; they don’t replicate images or add regional endpoints.
C: A private endpoint secures network access but doesn’t create regional replicas or reduce cross-region pulls on its own.

---

### Question 58

Compliance mandates customer-managed keys (CMK) for a StorageV2 account with automatic pickup of new key versions after rotation in Key Vault/Managed HSM. Ops wants no app changes, and security wants least-privilege permissions on the key. Double encryption isn’t required.
Which option should you choose?

**Options:**

- **A.** A. Encryption at host
- **B.** B. Microsoft-managed keys
- **C.** C. Client-side encryption in SDK
- **D.** D. Configure CMK using a managed identity with get/wrapKey/unwrapKey and omit the key version ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Enabling CMK on the storage account and granting its managed identity only get/wrapKey/unwrapKey on the Key Vault/HSM key satisfies least privilege. If you omit the key version in the configuration, the account will automatically adopt the newest version after rotation—meeting auto-update with no code changes. This keeps encryption service-side (no client modifications) and centralizes key lifecycle in Key Vault/HSM.
Why the other options are incorrect
A: Encryption at host adds a host-level layer but doesn’t give customer key control.
B: Microsoft-managed keys don’t satisfy CMK compliance.
C: Client-side encryption requires application changes and key handling in the client—opposite of the requirement.

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

### Question 3

Your AppOps team must start/stop/redeploy VMs, reset local admin passwords, and attach disks, but must not modify VNets, load balancers, or storage accounts. You want a single built-in role that matches least privilege for compute management.
“To let AppOps manage VMs without granting network or storage rights, assign __________ at the appropriate scope.”

**Options:**

- **A.** A. Owner
- **B.** B. Virtual Machine Contributor ✅
- **C.** C. Contributor
- **D.** D. Reader

**Correct answer:** B

**Explanation:**

Choice B is correct. Virtual Machine Contributor grants broad compute-plane control (create/update/delete VMs, restart, redeploy, reset password/SSH, attach existing disks) while excluding network and storage resource management. It hits the least-privilege target for VM operations without granting permissions over VNets, load balancers, or storage accounts, which should remain with their respective owners/roles.
Why the other options are incorrect
A: Owner includes full control, including RBAC management—far beyond the requirement.
C: Contributor grants write across all resource types in scope, including networking and storage—too broad.
D: Reader is view-only; it can’t operate VMs.

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

### Question 7

Contoso is launching Project Aquila in Australia East. Dev identities must be cloud-only (no sync) and provisioned today. Blob access must use data-plane RBAC only (no keys/SAS) and be revocable by removing users from one group. Build agents egress via NAT Gateway (dynamic IP), so public IP allowlists are not viable.
Environment
Storage: GPv2 (Blob), private endpoints, Australia East
Identity: Cloud-only users, Entra ID
Access control: Data-plane RBAC only; no keys/SAS
Network: Dynamic egress (NAT Gateway)
You must onboard 50 developers and grant least-privilege blob access with a single change point. Scope must be the storage account; no keys/SAS; no on-prem sync. Which approach should you use?

**Options:**

- **A.** A. M365 group as Owner at the resource group; share the account keys.
- **B.** B. Cloud-only users; security group; assign Storage Blob Data Contributor at the storage account; no keys/SAS. ✅
- **C.** C. Sync via AAD Connect; security group; assign Contributor at subscription scope.
- **D.** D. Per-user Storage Account Contributor at the storage account; rotate keys.

**Correct answer:** B

**Explanation:**

Choice B is correct. You satisfy “no sync” by creating cloud-only identities. A single security group gives one control point for access grant/revoke and supports clean offboarding. Assigning Storage Blob Data Contributor is a data-plane role that grants blob read/write/delete without management-plane privileges; scoping it at the storage account keeps blast radius minimal while inheriting to containers. Eliminating keys/SAS removes shared secret distribution, rotation debt, and audit blind spots, and works regardless of NAT-GW dynamic egress. This is precisely the RBAC-first model Microsoft recommends for Storage data operations.
Why the others are incorrect
A: Owner at RG is full control-plane access across many resources (gross over-privilege). Sharing account keys bypasses Entra ID, breaks least privilege, complicates rotation, and weakens auditing.
C: Violates “no sync.” Contributor at subscription is massively over-scoped and grants management actions unrelated to blob data needs.
D: Per-user role assignments explode admin overhead and still grant control-plane rights; key rotation is irrelevant when keys/SAS are disallowed and RBAC is required.

---

### Question 8

A partner (Fabrikam) needs read-only access for 60 days to a single blob container in West Europe. Partner egress is a fixed public IP (203.0.113.24/32). Your tenant must restrict invitations to fabrikam.com and only allow guest sign-ins from that IP. SAS is disallowed by policy. Access must be least-privilege and time-governed.
Requirements
External collaboration: allow fabrikam.com only
IP restriction for guests: enforce 203.0.113.24/32 (Named location + CA)
Scope: container, data-plane read-only
Governance: access review (60-day window)
No SAS
Which configuration meets all requirements?

**Options:**

- **A.** A. Storage firewall rule; Reader at resource group; share SAS.
- **B.** B. Cross-tenant sync; Reader at subscription; user-delegation SAS.
- **C.** C. Allow all domains; rely on private endpoint; Storage Account Contributor at account.
- **D.** D. Restrict invites to fabrikam.com; Named location 203.0.113.24/32; Conditional Access for Guests (require sign-in from named location); guest group with Storage Blob Data Reader at the container; schedule an access review. ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. External collaboration settings block non-fabrikam domains at invite time, ensuring only approved tenants can be added. A Named location matching the partner’s /32 combined with a Conditional Access policy scoped to guest users forces token issuance only when sign-ins originate from the partner IP—this handles the network condition that RBAC alone cannot enforce. Assigning Storage Blob Data Reader at the container level grants least-privilege, data-plane read without control-plane rights or writes/deletes. An Access Review automates recertification/removal at 60 days, keeping entitlements time-bound. The design completely avoids SAS and leverages Entra ID tokens + RBAC, meeting the policy constraint.
Why the others are incorrect
A: Uses SAS (explicitly disallowed); RG Reader is control-plane and mis-scoped; firewall rules don’t restrict guest identity or source IP alone.
B: Subscription-level Reader is far too broad; still relies on SAS; cross-tenant sync doesn’t enforce IP requirements.
C: Opens invites to any domain; account-level Contributor is excessive (write/delete/control-plane); private endpoints don’t validate guest identity or partner IP by themselves.

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

### Question 14

Scenario
A regulated workload now requires customer-managed keys (CMK) and double encryption. Your existing StorageV2 account currently uses Microsoft-managed keys. Auditors require CMK via Key Vault (with purge protection) and infrastructure encryption (double encryption) for all data, with minimal downtime.
Proposed solution
On the existing storage account, switch to CMK (Key Vault) and enable infrastructure encryption on the account.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

You can switch an existing account to CMK by granting a managed identity the appropriate Key Vault permissions and updating the account to use that key—this satisfies the CMK portion. However, infrastructure encryption (the second layer for “double encryption”) must be enabled at account creation or when creating a new encryption scope; it cannot be added later to an already-created account object. To achieve double encryption now, create a new encryption scope with infrastructure encryption enabled and place/migrate data under that scope (or provision a new account with infrastructure encryption and migrate).
Why the other option is incorrect
Yes: Assumes you can enable infrastructure encryption after the account exists; that setting isn’t retrofittable at the account level. You must enable it during creation (account or scope).

---

### Question 15

Scenario
Contoso’s line-of-business app runs on Windows Server VMs in a single VNet/subnet in Australia East. The app needs a low-latency SMB share for user profiles and application data, enforced with domain-based NTFS ACLs, and reachable privately from that subnet only. Security requires Kerberos/AD-based access (no shared keys in code), snapshots for recovery, and private endpoint–only network access (no public IP allowlists). Operations asks for a predictable performance tier with minimal jitter.
Which configuration best meets the requirements?

**Options:**

- **A.** A. GPv2 account; standard file share; public endpoint; SAS auth
- **B.** B. FileStorage (Premium); SMB file share; private endpoint; AD DS/Entra ID Kerberos; NTFS ACLs ✅
- **C.** C. Blob container (NFS v3); Data Lake Gen2; POSIX ACLs; service endpoints
- **D.** D. GPv2 account; standard file share; service endpoints; shared key

**Correct answer:** B

**Explanation:**

A Premium FileStorage account provides provisioned, consistent IO for Azure Files. Creating an SMB file share in that account and integrating with Active Directory (AD DS or Entra ID Kerberos for Azure Files) enables identity-based authentication and NTFS ACL enforcement, which is what the app and security require. Adding a private endpoint restricts access to the VNet/subnet without any public allowlists, aligning with the “private only” posture. Azure Files supports snapshots for point-in-time recovery, and Premium tier helps ensure low-latency, predictable throughput. Together, this satisfies identity, networking, security, and performance constraints.
Why the other options are incorrect
A: Public endpoint + SAS exposes a shared secret and doesn’t meet “private only” or domain-based ACL requirements; standard tier may not meet performance targets.
C: NFS on Blob (ADLS Gen2) is for object/analytics workloads; the app needs SMB and Windows ACLs, not POSIX NFS; service endpoints ? private endpoint isolation.
D: Shared key bypasses identity-based access and NTFS ACLs; service endpoints don’t provide the same isolation or identity guarantees as private endpoints.

---

### Question 21

You’re creating three shares. Some need **low-latency IOPS**; others need **cheap capacity** and **snapshots**. You’ll avoid keys on clients by using directory-based auth.

**Share requirements**

****

Which option should you choose **for profiles**?

**Options:**

- **A.** A. GPv2 Files (standard)
- **B.** B. FileStorage (Premium) ✅
- **C.** C. NFS 4.1 on Blob
- **D.** D. SMB with account keys

**Correct answer:** B

**Explanation:**

Choice B is correct. **Premium FileStorage** provides **provisioned, low-latency** performance ideal for **FSLogix/VDI profiles**, with consistent IOPS/throughput tied to the share size. It avoids noisy-neighbor variance common to standard and aligns with profile logon/logoff sensitivity.

Why the other options are incorrect

A: **Standard** is cost-effective but doesn’t guarantee low-latency performance for VDI profiles.

C: **NFS 4.1** targets Linux file semantics and isn’t SMB for FSLogix.

D: **Account keys** place broad secrets on clients; prefer **directory authentication** (e.g., Azure AD DS/Entra-Kerberos) for least privilege.

---

### Question 24

You’re moving three PaaS services to a **VNet-only data path** with **private DNS** that works for **both spokes and on-prem** (via VPN/ER). Public endpoints must be **inaccessible** even if someone has SAS/keys.

**Services &amp; goals**

****

Which control enforces **VNet-only** data access with **private IPs and private DNS** for these services?

**Options:**

- **A.** A. Private Endpoint ✅
- **B.** B. Service endpoint
- **C.** C. NAT Gateway
- **D.** D. IP allowlist

**Correct answer:** A

**Explanation:**

Choice A is correct. A **Private Endpoint** places a **private NIC** for each service into the specified subnet, forcing the **data plane** over your **private network**. With the matching **private DNS zone** (for example, privatelink.blob.core.windows.net, privatelink.vaultcore.azure.net, privatelink.azurewebsites.net) **linked** to the consumer VNets (and forwarded from on-prem via conditional forwarding or **DNS Private Resolver**), clients resolve the public FQDN to the **private IP**. Combine with **Public network access: Disabled** on the services to close the public endpoint completely. This design covers **all three rows**: scoped per-spoke access, private name resolution, and on-prem reach via your private link.

Why the other options are incorrect

B: **Service endpoints** keep the **public** endpoint; they don’t provide **private IPs** or block Internet with credentials.

C: **NAT Gateway** affects **egress SNAT** only; it doesn’t authorize access at the service or supply private names.

D: **IP allowlists** are brittle and still expose a **public** surface; they don’t give **private DNS** or VNet identity.

---

### Question 32

You must validate DR without impacting production. Test the full stack (compute + network) in isolation, keep production running, and clean up test resources afterward.
What should you run?

**Options:**

- **A.** A. Planned failover (with shutdown)
- **B.** B. Unplanned failover
- **C.** C. Commit failover
- **D.** D. Test failover to an isolated VNet/subnet, then cleanup ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. A test failover brings up replicas in an isolated network (often a dedicated test VNet), so you can validate boot, dependencies, DNS, and apps without touching production. After validation, you cleanup test resources, leaving replication intact. Production traffic is unaffected, and no re-protect or DNS cutover occurs.
Why the other options are incorrect
A: A planned failover performs a production cutover (source healthy, shut down &amp; sync), not a safe test.
B: An unplanned failover is for outages—traffic is cut over; it’s not a non-impacting test.
C: Commit is the post-failover step to finalize a real failover; it doesn’t perform the validation itself.

---

### Question 33

Users must access Azure Files over SMB using their directory identities—no account keys on clients. You’ll apply share-level RBAC and NTFS ACLs to enforce least privilege. The environment uses Microsoft Entra Domain Services (managed domain); no on-prem DCs on the access path.
Which option should you choose?

**Options:**

- **A.** A. Enable NFS 4.1 and use POSIX mode bits
- **B.** B. Issue SAS to users and mount with HTTPS
- **C.** C. Use account keys and restrict by IP
- **D.** D. Enable Azure AD DS authentication for Azure Files; assign Storage File Data SMB Share roles; apply NTFS ACLs ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. For SMB with directory identities, enable Azure AD DS authentication on the storage account so the share participates in your managed domain’s Kerberos/LDAP. Then grant users/groups share-level RBAC (e.g., Storage File Data SMB Share Reader/Contributor/Owner) and enforce permissions with NTFS ACLs. Clients authenticate without keys, honoring user/group access centrally and eliminating credential sprawl.
Why the other options are incorrect
A: NFS 4.1 is for Linux clients and doesn’t use SMB or Entra-backed Kerberos; it won’t meet the SMB identity requirement.
B: SAS is for data-plane tokens, not SMB logons; SMB mounts don’t use SAS bearer tokens.
C: Account keys put secrets on endpoints and grant broad access—not identity-based per user.

---

### Question 39

Security mandates no anonymous blob access in any container. App access is via Entra ID or SAS from a trusted service. You want a single setting that prevents admins from accidentally enabling public read on new or existing containers.
Which option should you choose?

**Options:**

- **A.** A. Set account access tier to Cool
- **B.** B. Enable soft delete for blobs
- **C.** C. Disable “Allow blob public access” on the storage account ✅
- **D.** D. Enable static website

**Correct answer:** C

**Explanation:**

Choice C is correct. Setting “Allow blob public access: Disabled” at the account prevents container-level public access from being turned on anywhere in that account. It’s a guardrail that enforces private containers regardless of per-container mistakes.
Why the other options are incorrect
A: Access tier affects cost/performance, not access control.
B: Soft delete protects from accidental deletes; it doesn’t block public read.
D: Static website publishes a public endpoint—opposite of the requirement.

---

### Question 40

A Storage account must be reachable only from AppSubnet and DataSubnet. You cannot deploy Private Endpoints yet, but you must restrict access beyond simple IP allowlists. Public endpoint stays in use.
Requirements
• Keep the Storage public endpoint
• Restrict access to two VNets/subnets
• No Private Endpoint for now
What configuration meets the requirements?

**Options:**

- **A.** A. Private Endpoint in each subnet
- **B.** B. NAT Gateway on the subnets
- **C.** C. IP rules for current NAT egress addresses
- **D.** D. Enable Microsoft.Storage service endpoints on both subnets and allow only those subnets in the Storage firewall ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Service endpoints extend your VNet identity to the Storage service over the public endpoint. When you enable the Microsoft.Storage endpoint on AppSubnet and DataSubnet and set the Storage firewall to Selected networks (those subnets), Storage accepts traffic only from those subnet identities—no generic Internet clients, even with keys/SAS. This gives a strong, subnet-scoped allowlist without changing the endpoint type.
Why the other options are incorrect
A: Private Endpoints would be stronger but are explicitly not allowed here.
B: A NAT Gateway provides static egress/SNAT ports; it doesn’t authorize access at the service.
C: IP rules depend on current egress IPs and can drift; they’re brittle compared to VNet-based authorization.

---

### Question 45

You’re deploying a Linux Web App for Containers that pulls images from a private ACR. Security forbids the admin user and any stored registry passwords. You’ll enable a managed identity on the app and want least-privilege pulls that survive credential rotation without changes.
“To enable passwordless pulls, grant the app’s managed identity the __________ role on the registry.”

**Options:**

- **A.** A. AcrPull ✅
- **B.** B. Owner
- **C.** C. Contributor
- **D.** D. Storage Blob Data Reader

**Correct answer:** A

**Explanation:**

Choice A is correct. AcrPull grants pull-only rights. With a managed identity enabled on the Web App and ACR configured to trust that identity, the platform exchanges the identity for an OAuth token at pull time—no secrets in app settings. This achieves least privilege, automatic rotation (identity-based), and works across slots and revisions without changing your Docker config. You can scope the role at the registry or repository level to tighten blast radius further.
Why the other options are incorrect
B: Owner is excessive (RBAC + write/delete) and violates least privilege.
C: Contributor permits push/mutate operations—unnecessary and risky for a runtime that only pulls.
D: Storage Blob Data Reader applies to Azure Storage, not ACR’s token exchange for image pulls.

---

### Question 46

You must move web-stateless (from the table in Q2) from Australia East to Australia Southeast with minimal downtime and with configuration preserved (NIC, NSG, disks, tags). You also want dependency sequencing handled automatically and a guided rollback path if needed. A plain resource group move won’t help because this is a cross-region change.
Requirements
• Region-to-region move (AU East ? AU SE)
• Orchestrate dependencies (NIC, IP, disks)
• Minimize downtime; preserve configuration; rollback if needed
Which option should you choose?

**Options:**

- **A.** A. Export template and redeploy manually
- **B.** B. Move resources (RG ? RG) in the same region
- **C.** C. Site Recovery test failover
- **D.** D. Azure Resource Mover (region move) ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Azure Resource Mover orchestrates cross-region moves for VMs and their dependent resources (NICs, IPs, NSGs, disks), handling dependency order, validation, and staged replication where applicable. It provides a guided workflow (prepare, initiate move, commit) that minimizes downtime and preserves resource IDs/metadata where supported, and it offers rollback steps if validation fails. This is the supported, low-risk path for region changes, unlike same-region RG moves or do-it-yourself exports.
Why the other options are incorrect
A: A manual export/redeploy is error-prone, lacks orchestration, and risks configuration drift.
B: Move within/between resource groups does not change region; it only changes the management container.
C: ASR is a DR replication tool; while it can facilitate failover, it doesn’t replace the region move orchestration and dependency handling that Resource Mover provides.

---

### Question 55

You want policy-driven cost control for log archives while maintaining data hygiene. Logs live under multiple prefixes and generate both current blobs and noncurrent versions. Security wants stale noncurrent versions cleaned up aggressively, but you must keep current data longer for analytics. No scripts — only native policies.
Requirements
• Move current blobs under logs/ to Cool at 30 days since last modified
• Delete noncurrent versions under logs/ at 180 days
• Include snapshots and versions in evaluation where applicable
• Policy must be prefix-scoped and zero-touch after setup
Which option should you choose?

**Options:**

- **A.** A. Set account tier to Cool and run a weekly cleanup job
- **B.** B. Write a Function that retags and deletes by last modified
- **C.** C. Create lifecycle management rules with a logs/ prefix filter: action 1 “Move to Cool at 30 days (base blobs)”; action 2 “Delete noncurrent versions at 180 days” ✅
- **D.** D. Use change feed to detect age and purge old items

**Correct answer:** C

**Explanation:**

Choice C is correct. Blob lifecycle management lets you author declarative rules that target specific prefixes and apply age-based actions. You can scope an action that moves current (base) blobs under logs/ to Cool after 30 days since last modified, and a separate action that deletes noncurrent versions when they reach 180 days. Because rules are evaluated by the service, they cover new and existing data continuously with no scripts. If you also use snapshots, you can opt to include them, ensuring the policy treats versions/snapshots according to your retention. This preserves analytics on current data while aggressively pruning old versions to control costs and storage footprint.
Why the other options are incorrect
A: Setting the entire account to Cool is a blunt control and doesn’t implement per-prefix or version-aware retention; it also doesn’t delete old versions.
B: A custom Function is operationally heavier, error-prone, and duplicates what the native policy engine handles reliably at scale.
D: Change feed records events but is not an enforcement engine; you’d still need code or policy to act on the events.

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

### Question 59

A storage account hosts sensitive data. Access must come only from two VNets (Spoke-1 and Spoke-2) through private endpoints. Public network access must be blocked, and on-prem traffic should flow via a private connection (VPN/ExpressRoute to the spokes). Apps and tools on the Internet must not reach the account even with SAS.
Which option should you choose?

**Options:**

- **A.** A. Allow trusted Microsoft services
- **B.** B. Selected networks with service endpoints
- **C.** C. Public network access: Enabled + IP allowlist
- **D.** D. Create private endpoints in Spoke-1/2 and set Public network access: Disabled ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Private endpoints place a private IP for the storage account into Spoke-1/2, routing all data-plane traffic over your private network. Setting Public network access: Disabled ensures no public endpoint access—even with SAS/keys—so Internet clients can’t reach the account. With private DNS zone integration, on-prem resolves the private endpoint over VPN/ER, meeting the VNet-only requirement cleanly.
Why the other options are incorrect
A: Allowing trusted Microsoft services is a special exception for certain service-to-service scenarios and doesn’t enforce VNet-only access.
B: Service endpoints keep the public endpoint, expose public IP space, and don’t block Internet access with credentials.
C: Public access + IP allowlist still leaves a public endpoint reachable from the Internet; it violates the “private-only” requirement.

---

### Question 5

Scenario
You are reviewing a Bicep file for a new storage account. The template should deploy a StorageV2 account with LRS, HTTPS-only, public blob access disabled, tags for Environment and CostCenter, and a location that follows the resource group by default. The team will bind private endpoints separately.
param location string = resourceGroup().location
param skuName string = ‘Standard_LRS‘
resource stg ‘Microsoft.Storage/storageAccounts@2023-01-01‘ = {
  name: ‘stgprod001‘
  location: location
  sku: { name: skuName }
  kind: ‘StorageV2‘
  tags: {
    Environment: ‘Prod‘
    CostCenter: ‘FIN-001‘
  }
  properties: {
    supportsHttpsTrafficOnly: true
    allowBlobPublicAccess: false
    accessTier: ‘Hot‘
  }
}
Which statement best describes the deployment?

**Options:**

- **A.** A. Deploys BlobStorage with GRS; public access enabled; location fixed to East US
- **B.** B. Deploys StorageV2 with ZRS; HTTPS optional; tags ignored unless set at subscription
- **C.** C. Deploys StorageV2 with LRS; HTTPS-only; public access disabled; tags applied; location defaults to the resource group ✅
- **D.** D. Deploys StorageV2 with GRS; requires private endpoint in the same template for HTTPS-only

**Correct answer:** C

**Explanation:**

The Bicep sets kind: ‘StorageV2‘ and sku.name: ‘Standard_LRS‘, so it’s a StorageV2 account with LRS. supportsHttpsTrafficOnly: true enforces HTTPS-only; allowBlobPublicAccess: false disables anonymous public blob access. The tags object defines Environment and CostCenter, which ARM will apply to the resource. The location parameter defaults to resourceGroup().location, so the deployment follows the RG location unless overridden. A private endpoint is optional and not required to enforce HTTPS-only.
Why the other options are incorrect
A: Wrong kind (says BlobStorage), wrong redundancy (GRS), and claims public access enabled and fixed location—none of which match the template.
B: Wrong redundancy (ZRS) and HTTPS claim; ARM applies tags directly from the template—no subscription tag prerequisite.
D: Wrong redundancy (GRS) and incorrect implication that HTTPS-only requires a private endpoint in the same template.

---

### Question 11

Scenario
You’re onboarding a raw-data landing container for analytics in Australia East. The platform team mandates no anonymous public access, RBAC for data access, and private endpoint access from one subnet. Security requires customer-managed key (CMK) separation using an encryption scope at the container level. Data engineers also need protection against accidental overwrites and deletes.
Requirements
Disable public blob access at the account; enforce TLS 1.2+; use a private endpoint
Create container “raw” bound to a CMK encryption scope
Enable blob versioning and blob soft delete
Which approach meets the requirements?

**Options:**

- **A.** A.Set container public access = ContainerUse account keys from app codeLeave encryption at default
- **B.** B.Disable public access at the account; enforce TLS 1.2Create encryption scope (CMK) and bind container “raw” to itUse private endpoint + RBAC; enable blob versioning and blob soft delete ✅
- **C.** C.Enable ADLS Gen2 with NFS v3Apply POSIX ACLs on containerKeep public access enabled
- **D.** D.Assign Owner to app MSIKeep default (service-managed) encryptionUse service endpoints (no private endpoint)

**Correct answer:** B

**Explanation:**

The secure landing pattern requires identity-based access over a private path, container-level cryptographic segregation, and in-place protection from accidental writes/deletes. Disabling public access at the account closes anonymous endpoints globally. A CMK-backed encryption scope bound to the “raw” container provides per-container key isolation and clean rotation/audit boundaries. A private endpoint restricts traffic to the VNet, while RBAC replaces shared secrets in code. Blob versioning preserves prior versions to undo overwrites, and blob soft delete retains deletions for the configured window. Together these controls satisfy the platform/network/security requirements and data-protection needs.
Why the other options are incorrect
A: Making the container public and using account keys violates the no-anonymous requirement and bypasses RBAC. Default encryption doesn’t give per-container CMK separation.
C: ADLS Gen2/NFS v3 with POSIX ACLs doesn’t address the “no public access” mandate here; leaving public access enabled breaks the core control. It also omits the required CMK encryption scope binding.
D: Granting Owner to the app is over-privileged, default encryption lacks CMK separation, and service endpoints do not provide the same isolation guarantees as a private endpoint.

---

### Question 15

Scenario
A spoke VNet hosts an App Service and a VM API. Both must privately access Storage (Blob), Key Vault, and Azure SQL with no public Internet exposure. A hub VNet provides central DNS. All VNets (hub + spokes) must resolve those services to private IPs. Public access to each service must be disabled.
Requirements
One private endpoint per service in the consumer VNet
Central private DNS in the hub, linked to all VNets
Disable public network access on services
Which approach meets the requirements?

**Options:**

- **A.** A. Use service endpoints; keep public access; rely on RBAC
- **B.** B. One PE to Storage; share for KV/SQL via hosts files
- **C.** C. Create PEs in the hub; leave services public; advertise routes
- **D.** D. Create a private endpoint per service in the spoke; host Private DNS zones in hub and link VNets; disable public network access ✅

**Correct answer:** D

**Explanation:**

Private Link maps each PaaS service/subresource (e.g., blob, vault, sqlServer) to a distinct NIC with a private IP in the consumer VNet—the VNet where your workloads run. Because Storage, Key Vault, and SQL are different services, you create one private endpoint per service in the spoke so the App Service/VM can talk to each over a first-party, private IP path. Name resolution then must return those private IPs for everyone (hub and all spokes). The scalable way is to host the three Private DNS zones (privatelink.blob.core.windows.net, privatelink.vaultcore.azure.net, privatelink.database.windows.net) once in the hub and link every VNet that needs to resolve them. When you create each PE, the proper A-records are added to the matching zone; all linked VNets immediately resolve FQDNs to the private addresses. Finally, set each service to deny public network access (or “selected networks” with only the PE path). That prevents accidental fallback to the Internet and closes data-exfil paths while keeping RBAC/token auth unchanged.
Why the other options are incorrect
A: Service endpoints still traverse the public endpoint (just source-IP authorized) and never provide private IPs. This violates “no public exposure.”
B: A single PE cannot be reused across different services. Host file hacks don’t scale, break TLS/SAN validation, and are operationally brittle.
C: PEs are designed to live in the consumer VNet where the callers are; leaving services public defeats the point and breaks Private Link DNS behavior.

---

### Question 16

Goal

Grant read-only access to a single container for 90 days, with the ability to revoke centrally by changing the policy. No write permissions.

**Candidate policies**

****

Which row should the SAS reference?

**Options:**

- **A.** A
- **B.** B
- **C.** C
- **D.** D ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. A stored access policy at the container scope with permissions rl (read + list) exactly matches “read-only container access”: clients can enumerate and read blobs but cannot write/delete. The 90-day expiry matches the time-bound requirement, and because the SAS token references the policy by name, you can centrally revoke or shorten access by editing or deleting the policy—no need to reissue every SAS immediately.

Why the others are incorrect

- A: Account scope is over-broad; it potentially affects multiple containers/services and expands blast radius. Least privilege demands container scope.

- B: Adds write (w), which violates read-only.

- C: Scope is right but 365 days exceeds the stated 90-day window and weakens time-bound control; also, revocation would require changing the policy anyway—so set it correctly from the start.

---

### Question 17

Scenario

You’re classifying archival datasets. Finance wants the **lowest storage cost** for rarely accessed data and accepts **hours-long retrieval**. They also accept a **minimum 180-day** storage commitment. Operations needs hot or cool for active datasets with instant reads.

**Candidates**

****

**Question**

Which row best meets Finance’s archival goal?

**Options:**

- **A.** A. Row 1
- **B.** B. Row 2
- **C.** C. Row 3 ✅
- **D.** D. Row 4

**Correct answer:** C

**Explanation:**

The **Archive** tier is designed for **rarely accessed** data with the **lowest per-GB storage cost**, trading off retrieval time (**hours, rehydration required**) and a **minimum 180-day** storage duration. This exactly matches Finance’s constraints (cheap to store, tolerant of slow reads, OK with 180-day commitment). For active datasets requiring instant access, Hot or Cool remains appropriate, but for long-term cold data, Archive is the intended landing zone.

**Why the other options are incorrect**

- Row 1 (Hot): Optimized for frequent access; highest storage cost; unnecessary for cold data.

- Row 2 (Cool): Good for infrequent access with **instant** reads, but not the lowest cost and has only a 30-day minimum.

- Row 4: Factually inconsistent—the Cool tier does have a 30-day minimum; this candidate does not match platform behavior.

---

### Question 19

A payment workload must keep read/write during a single zone failure in the primary region. During a regional outage, the team must immediately read from a secondary region without initiating failover.

**Candidates**

****

**Question**

Which row should you choose?

**Options:**

- **A.** A. Row 1
- **B.** B. Row 2
- **C.** C. Row 3
- **D.** D. Row 4 ✅

**Correct answer:** D

**Explanation:**

RA-GZRS gives zone redundancy in the primary (so a zonal event does not stop read/write) and geo-replication with read access to the secondary region, enabling immediate reads during a regional incident without failover. It uniquely satisfies both requirements.

**Why the other options are incorrect**

- Row 1 (LRS): Single data center; no zone/region resilience.

- Row 2 (ZRS): Survives zonal events but has no readable secondary region.

- Row 3 (GRS): Secondary exists but can’t be read until failover is performed.

---

### Question 21

Scenario

An analytics landing zone ingests raw data to the container raw/ with prefixes by tenant (raw/tenantA/, raw/tenantB/). Compliance wants to minimize Hot/Cool spend but keep data for one year. The rule should: keep new data in Hot for immediate processing; move cold data to Cool after a short period; move long-cold data to Archive; and finally purge after one year. Snapshots and versions must follow the same aging pattern. No impact to other containers.

**Requirements**

- Scope: container “raw/”, prefix-based include (tenant folders)

- Actions: Hot→Cool after 30 days idle; Cool→Archive after 180 days; Delete at 365 days

- Apply to base blobs, snapshots, and versions

**Candidates**

****

**Question**

Which row meets the requirements?

**Options:**

- **A.** A. Row A ✅
- **B.** B. Row B
- **C.** C. Row C
- **D.** D. Row D

**Correct answer:** A

**Explanation:**

Row A precisely mirrors the retention plan: it uses a prefix-scoped include that targets raw/tenant* so only the intended container/prefixes are affected; it ages base blobs, snapshots, and versions uniformly; and it implements the three-stage cost/compliance curve—Cool at 30 days of inactivity (lower hot/cool spend), Archive at 180 days (lowest at-rest cost for long-cold data), and hard delete at 365 days to satisfy the one-year retention cap. Because the scope is explicit, other containers remain untouched.

**Why the other options are incorrect**

- Row B: Over-broad (no scope filter; hits all containers), too aggressive (archives at 7 days), deletes at 30 days (violates the one-year requirement), and ignores snapshots/versions.

- Row C: Retention path is incomplete (no delete) and too slow to archive (365 days), failing the “Archive at 180 days; delete at 365” requirement.

- Row D: Scopes only tenantA (missing tenantB/others) and does not include versions, violating “apply to base, snapshots, and versions.”

---

### Question 22

Scenario

You need a **private** production registry for images pulled in Australia East and Australia Southeast. Security requires: **Private Link only** (no public endpoint), **admin user disabled**, and **immutable image tags** to prevent tag rewrites. Ops wants **geo-replication** so pulls are served locally in both regions.

**Candidates**

****

**Question**

Which single row meets all requirements?

**Options:**

- **A.** A. Row 1
- **B.** B. Row 2
- **C.** C. Row 3 ✅
- **D.** D. Row 4

**Correct answer:** C

**Explanation:**

Only **Premium** supports both **Private Link** (true private access) and **geo-replication** (regional replicas to keep pulls local). Disabling the **admin user** eliminates a shared, static credential in favor of Entra ID permissions (e.g., AcrPull). **Immutable tags** (image-locking) prevent “latest” or version tags from being overwritten, which is a common production safety control. Row 3 is the only candidate that simultaneously meets **network isolation**, **credential posture**, **tag immutability**, and **multi-region pulls**.

**Why the other options are incorrect**

- Row 1: Standard lacks Private Link and immutable tags; keeps a public endpoint and admin user.

- Row 2: Premium is good for features, but **service endpoints ≠ Private Link** (no private endpoint), and tags remain mutable.

- Row 4: Basic has neither Private Link nor geo-replication; admin user remains enabled.

---

### Question 25

Scenario
You inherit a Bicep file that hard-codes location: “eastus“, uses a plain string for adminPassword, emits that password in an output, and deploys several resources with no tags. Security/FinOps require: (1) location should default to the resource group’s location, (2) Department/Owner tags must be applied to every resource, and (3) secrets must not be emitted by the template and should be provided as secure parameters. You want the smallest set of changes that satisfies all requirements and keeps the file easy to reuse.
Which change set best meets the goal?

**Options:**

- **A.** A.Keep location = ‘eastus‘ as a variableAdd output adminPassword string for pipelinesApply tags at the resource group only
- **B.** B.Add param location string with no defaultKeep adminPassword as plain stringApply tags to the storage account only
- **C.** C.Move networking into a moduleKeep location and adminPassword hard-codedAdd a dependsOn chain for order
- **D.** D.Add param location string = resourceGroup().location and reference it everywhereAdd @secure() param adminPassword string and remove any secret outputsAdd param tags object (Department, Owner) and assign tags: tags on every resource ✅

**Correct answer:** D

**Explanation:**

Parameterizing location with a default of resourceGroup().location makes the template portable and removes hardcoded geography. Declaring adminPassword as a secure parameter and removing secret outputs prevents secret leakage through deployment history and output capture. Supplying a tags object parameter and wiring it to each resource guarantees consistent Department/Owner tagging across the deployment. This trio of edits is minimal, reusable, and satisfies security/FinOps with least disruption.
Why the other options are incorrect
A: Leaves a fixed location via variable, leaks secrets via output, and fails to tag every resource.
B: Omits the location default (reduces reuse), keeps the password non-secure, and tags only a subset of resources.
C: Refactoring into modules doesn’t meet any of the stated governance/security requirements; still hard-codes location and secrets.

---

### Question 26

You must issue time-bound upload rights from an app using Entra ID without exposing account keys. Use _____.

**Options:**

- **A.** A. Account SAS
- **B.** B. User delegation SAS ✅
- **C.** C. Service SAS
- **D.** D. Stored access policy

**Correct answer:** B

**Explanation:**

Choice B is correct. A user delegation SAS is signed with a user delegation key derived from Entra ID (Azure AD) via the blob service, so the app authenticates using identity, not the storage account key. This gives you short-lived, least-privilege tokens that are tied to AAD auth flows (including conditional access and token lifetimes) and avoids key sprawl in code or pipelines.
Why the others are incorrect
A: Account SAS is signed with the storage account key—precisely what you’re trying to avoid exposing.
C: Service SAS also requires the account key (or a stored access policy bound to that key).
D: A stored access policy isn’t a SAS type; it’s a container/account-level object you reference to control or revoke SAS tokens. You’d still need a SAS (and typically an account key) to use it.

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

### Question 28

Scenario
You need secure, low-downtime key management for a storage account: no secrets in repos, predictable rotation, and minimal impact on running apps.
Select TWO actions.

**Options:**

- **A.** A. Use Key Vault managed storage account keys (auto-rotation) ✅
- **B.** B. Commit account keys to the repo; rotate quarterly
- **C.** C. Grant “Storage Account Key Operator” broadly to dev teams
- **D.** D. Disable RBAC and use shared key only
- **E.** E. Staged rotation: regenerate key2, update apps, then rotate key1 ✅
- **F.** F. Use SAS with stored access policy for clients instead of sharing account keys

**Correct answer:** A, E

**Explanation:**

Choice A is correct. Key Vault’s “managed storage account keys” feature securely stores the account keys and can automatically regenerate/rotate them on a schedule, removing manual handling and keeping keys out of code and CI/CD variables. It also gives you auditing and RBAC control around who can retrieve keys, plus integration points for apps to fetch secrets at runtime rather than embedding them.
Choice E is correct. Staged rotation is the operational pattern for near-zero downtime: regenerate the unused key (key2), update all app configurations to use key2, verify traffic, then regenerate the previously active key (key1). This leapfrogging ensures a valid key is always in service while cycling secrets safely.
Why the others are incorrect
B: Committing secrets to a repository is a critical anti-pattern (exposure, forks, history). Even with quarterly rotation, you risk leaks and long-lived credentials.
C: Broadly granting “Key Operator” increases the insider-risk surface and makes uncontrolled exports more likely; use least privilege and automation instead.
D: Disabling RBAC and relying solely on shared keys removes identity-based controls, makes scoping impossible, and encourages secret sharing across teams.
F: SAS with a stored access policy is a good way to avoid sharing account keys directly with clients, but it doesn’t address how you manage and rotate the underlying account keys for your own services. It’s complementary, not a replacement for A/E.

---

### Question 29

Scenario
On-prem (via VPN) must resolve Azure private endpoints (Blob/KV/SQL) to private IPs. You want a hub-and-spoke DNS pattern without running your own DNS servers. On-prem should use conditional forwarding for the privatelink zones.
Which TWO actions meet the goal?

**Options:**

- **A.** A. Create Public DNS zones for privatelink domains
- **B.** B. Deploy Azure DNS Private Resolver in hub with an inbound endpoint; on-prem forward privatelink queries to it ✅
- **C.** C. Create Private DNS zones for privatelink domains and link them to hub and spokes ✅
- **D.** D. Use hosts files on on-prem machines
- **E.** E. Add a Resolver outbound endpoint/ruleset for on-prem zones
- **F.** F. Make each spoke a DNS server

**Correct answer:** B, C

**Explanation:**

You need authoritative private zones for the Private Link domains and a single Azure-native ingress path for on-prem queries. Step 1: create Private DNS zones for each privatelink.* domain and link them to the hub VNet and every spoke VNet; this ensures any Azure workload resolves Storage/KV/SQL FQDNs to private IPs returned by the corresponding private endpoints. Step 2: deploy Azure DNS Private Resolver with an inbound endpoint in the hub VNet. Your on-prem DNS servers add conditional forwarders for the privatelink.* zones pointing to that inbound endpoint’s private IP. Result: on-prem ? hub resolver ? Azure Private DNS zones ? private IPs for PEs, with no IaaS DNS VMs to patch, scale, or secure. This centralizes DNS, keeps management simple, and works for all current/future spokes that link to the zones.
Why the other options are incorrect
A: privatelink.* must be Private zones; making them Public exposes records to the Internet and breaks Private Link resolution.
D: Hosts files don’t scale, drift instantly, and cannot track record changes when PEs are added/removed.
E: Outbound endpoints/rulesets solve Azure?on-prem lookups; your requirement is on-prem?Azure, so you need an inbound endpoint.
F: VNets are not DNS servers. You still need zones and a resolver to handle on-prem queries.

---

### Question 33

Contoso is rolling out an analytics workload in Australia East. The app runs in one subnet and must reach a StorageV2 account privately. Security requires only the app (via private endpoint) and select trusted Microsoft services (e.g., Backup/Monitor) to reach the account; all other Internet traffic must be blocked. The team also wants TLS 1.2+ and public blob access disabled, and RBAC for data (no shared keys in code).
Requirements
Private endpoint from the app subnet
Allow trusted Microsoft services
No public IP allowlists (everything else blocked)
TLS 1.2+; disable public blob access; RBAC for data
Which configuration meets the requirements?

**Options:**

- **A.** A. Allow all networks; rely on RBAC; enforce TLS 1.2
- **B.** B. Selected networks; service endpoints only; disable public access
- **C.** C. Selected networks; private endpoint; enable “Allow trusted Microsoft services”; leave IP allowlist empty; enforce TLS 1.2; disable public blob access ✅
- **D.** D. Public network access: Disabled; no exceptions

**Correct answer:** C

**Explanation:**

“Selected networks” enables the firewall so the public endpoint is denied by default. A private endpoint gives the VNet a private IP path that bypasses the public surface. Enabling “Allow trusted Microsoft services” adds the narrow exception you need for first-party services (e.g., Backup/Monitor) without opening the Internet. Keeping the public IP allowlist empty prevents arbitrary public access, while TLS 1.2+ and disabling public blob access harden the account. RBAC handles data authorization without exposing shared keys.
Why the other options are incorrect
A: “Allow all networks” leaves the public endpoint open; RBAC controls identity, not network exposure.
B: Service endpoints ? private endpoints; they don’t meet the private access requirement and don’t automatically admit trusted services.
D: Disabling public network access also blocks the trusted-services exception you need for operations.

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

### Question 36

Scenario
You will asynchronously replicate new block blobs from a StorageV2 source in Australia East to a StorageV2 destination in Australia Southeast. Containers already exist; same tenant; replication should start as soon as the policy is created. Only block blobs are used.
Which TWO actions must be completed before creating the object replication policy?

**Options:**

- **A.** A. Enable Change feed on the source account ✅
- **B.** B. Enable Blob versioning on both source and destination accounts ✅
- **C.** C. Enable hierarchical namespace (HNS) on both accounts
- **D.** D. Use append blobs for faster replication
- **E.** E. Create the policy only on the source account
- **F.** F. Require customer-provided keys (CPK) for uploads

**Correct answer:** A, B

**Explanation:**

Object Replication relies on the source account’s change feed to discover operations and on versioning on both accounts to track/replicate updates and deletes consistently. Enabling change feed (source) and blob versioning (both) ensures the replication pipeline has the event stream and version history it needs. With these prerequisites in place, policy creation can begin moving data immediately.
Why the other options are incorrect
C: OR is not supported when hierarchical namespace (HNS) is enabled.
D: OR supports block blobs only; append/page blobs are not replicated.
E: The policy is created on the destination and associated to the source via policy ID; source-only is invalid.
F: Blobs written with customer-provided keys (CPK) aren’t replicated by OR.

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

### Question 41

A DevOps team must start/stop/redeploy VMs and reset credentials for VM instances in a single resource group. They must not change VNets, NSGs, disks in other accounts, or assign roles. No subscription-wide administration.
Requirements
Manage VMs only
No networking/storage admin
No role assignments
Which built-in role best fits?

**Options:**

- **A.** A. Virtual Machine Contributor ✅
- **B.** B. Contributor
- **C.** C. Owner
- **D.** D. Reader

**Correct answer:** A

**Explanation:**

Choice A is correct. Virtual Machine Contributor grants full management of virtual machines, including start/stop/redeploy and OS credential resets, but excludes broader resource administration like virtual networks, load balancers, storage accounts, and role assignments. It aligns tightly to VM-scoped operational needs without elevating control to unrelated planes.
Why the others are incorrect
B: Contributor enables create/update/delete across all resource types in scope, including networking and storage—too broad for VM-only operations.
C: Owner includes Contributor plus role assignment (“User Access Administrator”)—excessive and violates least privilege.
D: Reader is view-only and cannot start/stop or redeploy VMs.

---

### Question 43

Scenario
You inherit an ARM template that hard-codes location: “eastus“, lacks any tags, and deploys a StorageV2 account with no HTTPS-only enforcement. Security and FinOps requirements now mandate: (1) location should default to the resource group’s location, (2) global tags Department and Owner must be applied to every resource, and (3) the storage account must be HTTPS-only. You need to modify the existing template to meet these requirements with minimal churn.
Select THREE changes to implement.

**Options:**

- **A.** A. Add a location parameter defaulting to resourceGroup().location; reference it for each resource’s location ✅
- **B.** B. Add a tags object parameter (Department, Owner) and assign it to each resource’s tags property ✅
- **C.** C. Set properties.supportsHttpsTrafficOnly: true on the storage account resource ✅
- **D.** D. Change kind to BlobStorage to force HTTPS-only
- **E.** E. Replace parameters with a variables(‘location‘) = ‘eastus‘ to keep the original behavior
- **F.** F. Add dependsOn between unrelated resources to enforce HTTPS

**Correct answer:** A, B, C

**Explanation:**

Parameterizing location with a default of resourceGroup().location makes the template portable and aligns with subscription/RG placement without edits. A tags object parameter promotes consistent tagging for all resources; wiring it into each resource’s tags property satisfies FinOps. Enforcing HTTPS-only by setting supportsHttpsTrafficOnly: true is the correct storage-account setting and doesn’t require new resources or dependencies. Together, these edits bring the template in line with security and governance standards while preserving flexibility.
Why the other options are incorrect
D: Changing kind to BlobStorage doesn’t “force” HTTPS-only and narrows capabilities compared to StorageV2; HTTPS-only is a separate property.
E: Re-hard-coding the location via variables defeats the portability requirement and ignores the RG-default goal.
F: dependsOn controls deployment order, not HTTPS behavior; it doesn’t enforce security properties.

---

