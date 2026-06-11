# Practice Set 7

Source: [https://skillcertpro.com/az-104-exam-questions/7/](https://skillcertpro.com/az-104-exam-questions/7/)
Total questions: 53

---

### Question 1

You have an Azure web app named webapp1.

You have a virtual network named VNET1 and an Azure virtual machine named VM1 that hosts a MySQL database. VM1 connects to VNET1.

You need to ensure that webapp1 can access the data hosted on VM1.

What should you do?

**Options:**

- **A.** Connect webapp1 to VNET1. ✅
- **B.** Deploy an internal load balancer.
- **C.** Peer VNET1 to another virtual network.
- **D.** Deploy an Azure Application Gateway.

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Connect webapp1 to VNET1**

- Correct because the web app must be able to communicate with the VM hosting the MySQL database over the **same virtual network**.

- By integrating webapp1 with VNET1 using **VNet integration**, the app can securely access VM1’s private IP address.

- This is the most direct and secure solution to allow connectivity between the web app and the VM database.

### Incorrect

**Option B. Deploy an internal load balancer**

- Incorrect because an internal load balancer distributes traffic among multiple VMs.

- In this case, there is only one VM hosting the database, so a load balancer is unnecessary.

**Option C. Peer VNET1 to another virtual network**

- Incorrect because peering is only required if the resources are in **different VNets**.

- Since both VM1 and the web app can be connected to the same VNet, peering is not needed.

**Option D. Deploy an Azure Application Gateway**

- Incorrect because Application Gateway is a **Layer 7 load balancer** used for web traffic management (HTTP/HTTPS).

- It is not designed for direct database connectivity between a web app and a VM.

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

### Question 4

You have an Azure subscription.

You need to use an Azure Resource Manager (ARM) template to create a virtual machine that will have multiple data disks.

You need to complete the template shown in the below.

What should you choose for **Dropdown 1**?

**Options:**

- **A.** “copy“:[ ✅
- **B.** “copyIndex“:[
- **C.** “dependsOn“:[

**Correct answer:** A

**Explanation:**

**“copy”:[** is **correct** because the “copy” property is used in ARM templates to define an array of resources or properties that need to be created multiple times. In this case, the data disks need to be created dynamically based on the value of the numberOfDataDisks parameter. Using “copy”:[ allows iterating over the required number of disks and defining their properties in the ARM template.

**“copyIndex”:[** is **incorrect** because “copyIndex” is a function used within the “copy” property to get the current iteration index. It cannot replace the “copy” property itself.

**“dependsOn”:[** is **incorrect** because “dependsOn” is used to specify dependencies between resources in an ARM template to ensure that certain resources are created before others. It does not help in defining multiple instances of a resource or property.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/copy-resources

---

### Question 5

You have an Azure subscription.

You need to use an Azure Resource Manager (ARM) template to create a virtual machine that will have multiple data disks.

You need to complete the template shown in the below.

What should you choose for **Dropdown 2**?

**Options:**

- **A.** “[copy
- **B.** “[copyIndex ✅
- **C.** “[dependsOn

**Correct answer:** B

**Explanation:**

**“[copyIndex”** is **correct** because the copyIndex() function is used to generate a unique index for each iteration of the copy property in an ARM template. This is particularly useful when you need to create multiple instances of a resource or property, as in this case, where each data disk is assigned a unique Logical Unit Number (LUN). By using “[copyIndex]”, the LUN property dynamically assigns a unique index to each data disk being created.

**“[copy”** is **incorrect** because “copy” is a property used to define the array creation logic in an ARM template. It cannot be used directly as a value in this context.

**“[dependsOn”** is **incorrect** because “dependsOn” is used to specify dependencies between resources in an ARM template. It does not apply to the dynamic generation of unique indices for resources.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/copy-resources

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

### Question 11

**You have a Microsoft Entra tenant linked to Azure subscriptions and resource groups. Roles are assigned to users. For the statement: “User1 can resize VM1.” Select Yes or No.**

You have the resource groups shown in the following table.

You assign roles to users as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User1 can resize VM1.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because resizing a VM requires **Contributor-level permissions** (or higher) on the resource group or subscription where the VM resides.

- If User1 has been assigned a role such as **Virtual Machine Contributor** or **Contributor** at the resource group level that contains VM1, then User1 can perform operations like start, stop, restart, and **resize** the VM.

- The statement is true if the role assignment aligns with these permissions.

### Incorrect

**Option B. No**

- Incorrect because denying the ability to resize VM1 would only be true if User1 had insufficient permissions (e.g., Reader role).

- Since the scenario specifies that User1 has the appropriate role assignment, the answer “No” does not meet the goal.

###

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

### Question 14

**You have an Azure subscription that contains a virtual machine named VM1. VM1 hosts a line‑of‑business application that is available 24 hours a day. VM1 has one network interface and one managed disk. VM1 uses the D4s v3 size.**

You plan to make the following changes to VM1:

- Change the size to D8s v3

- Add a 500‑GB managed disk

- Add the Puppet Agent extension

- Enable Desired State Configuration Management

**Which change will cause downtime for VM1?**

**Options:**

- **A.** Add the Puppet Agent extension.
- **B.** Add a 500-GB managed disk.
- **C.** Change the size to D8s v3. ✅
- **D.** Enable Desired State Configuration Management.

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Change the size to D8s v3**

- Correct because resizing a VM in Azure requires the VM to be **deallocated and restarted**.

- This process causes downtime since the VM must stop before being resized and then start again with the new size.

- This is a key exam point: **resizing = downtime**.

### Incorrect

**Option A. Add the Puppet Agent extension**

- Incorrect because adding VM extensions (like Puppet Agent) can be done while the VM is running.

- Extensions are installed via the Azure VM Agent without requiring downtime.

**Option B. Add a 500‑GB managed disk**

- Incorrect because attaching additional managed disks to a VM is a **hot operation**.

- You can add disks while the VM is running without downtime.

**Option D. Enable Desired State Configuration Management**

- Incorrect because enabling DSC is done through VM extensions and configuration, which does not require stopping the VM.

- It can be applied while the VM is online.

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

### Question 18

**You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.** **Another administrator plans to create several network security groups (NSGs) in the subscription.** **You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.** **Solution: You configure a custom policy definition, and then you assign the Azure policy to the subscription.** **Does this meet the goal?**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because **Azure Policy** can enforce rules across resources in a subscription.

- By creating a **custom policy definition** that requires NSGs to include a rule blocking TCP port 8080, and assigning it at the subscription level, you ensure that any NSG created will automatically comply.

- This meets the stated goal of enforcing a consistent security configuration across all virtual networks.

### Incorrect

**Option B. No**

- Incorrect because saying “No” ignores the fact that Azure Policy is specifically designed to enforce compliance and automatically apply rules at scale.

- Without Azure Policy, administrators would have to manually configure NSGs or rely on scripts, which does not meet the requirement of automatic enforcement.

---

### Question 19

**You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.** **Another administrator plans to create several network security groups (NSGs) in the subscription.** **You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.** **Solution: You assign a built‑in Azure policy definition to the subscription.** **Does this meet the goal?**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because the **built‑in Azure policy definitions** do not include a rule that automatically blocks TCP port 8080 between virtual networks.

- Built‑in policies cover common compliance and governance scenarios (like requiring tags, enforcing allowed VM sizes, or ensuring diagnostics are enabled), but they do not enforce custom NSG rules such as blocking a specific port.

- To meet the goal, you would need to create and assign a **custom policy definition** that enforces the NSG rule for TCP port 8080.

### Incorrect

**Option A. Yes**

- Incorrect because assigning a built‑in policy alone cannot enforce the requirement.

- Built‑in policies cannot automatically block TCP port 8080 between VNets; only a **custom policy definition** can achieve this.

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

### Question 21

**You have an Azure subscription that contains an Azure virtual machine named VM1. VM1 runs a financial reporting app named App1 that does not support multiple active instances.** **At the end of each month, CPU usage for VM1 peaks when App1 runs.** **You need to create a scheduled runbook to increase the processor performance of VM1 at the end of each month.** **What task should you include in the runbook?**

**Options:**

- **A.** Add VM1 to a scale set.
- **B.** Add the Azure Performance Diagnostics agent to VM1.
- **C.** Modify the VM size property of VM1. ✅
- **D.** Increase the vCPU quota for the subscription.
- **E.** Add a Desired State Configuration (DSC) extension to VM1.

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Modify the VM size property of VM1**

- Correct because the app does not support multiple active instances, so scaling out with a scale set is not possible.

- The best way to increase processor performance is to **resize the VM to a larger SKU** with more vCPUs.

- A scheduled runbook can automate resizing VM1 at the end of each month, then optionally revert it afterward.

### Incorrect

**Option A. Add VM1 to a scale set**

- Incorrect because scale sets are used for horizontal scaling (multiple instances).

- App1 does not support multiple active instances, so this option does not meet the requirement.

**Option B. Add the Azure Performance Diagnostics agent to VM1**

- Incorrect because diagnostics agents only collect performance data; they do not increase CPU performance.

**Option D. Increase the vCPU quota for the subscription**

- Incorrect because increasing the quota only allows provisioning of more vCPUs across the subscription.

- It does not directly improve VM1’s performance unless the VM size is changed.

**Option E. Add a Desired State Configuration (DSC) extension to VM1**

- Incorrect because DSC is used for configuration management (ensuring software settings/state), not for scaling CPU performance.

---

### Question 22

You have an Azure subscription.

You need to create an Azure container instance named cont1. The solution must meet the following requirements:

Ensure that specific configuration parameters are applied to cont1 during the container startup.

Provide secure values to cont1 during the container startup.

What should you configure for cont1?

**Options:**

- **A.** a command override
- **B.** tags
- **C.** customer-managed keys
- **D.** environment variables ✅

**Correct answer:** D

**Explanation:**

### Correct

**Option D. Environment variables**

- Correct because **environment variables** are the standard way to pass configuration parameters and secure values (such as secrets or connection strings) to containers at startup.

- They allow you to inject values without hardcoding them into the container image.

- Secure values can be stored in **Azure Key Vault** and referenced as environment variables, ensuring compliance with security requirements.

### Incorrect

**Option A. A command override**

- Incorrect because command overrides change the **entry point or startup command** of the container, not configuration parameters.

- They are useful for debugging or altering execution, but not for securely passing values.

**Option B. Tags**

- Incorrect because tags are metadata applied to Azure resources for organization, billing, or governance.

- They cannot be used to configure container startup parameters or provide secure values.

**Option C. Customer‑managed keys**

- Incorrect because customer‑managed keys are used for **encryption of data at rest** in Azure services.

- They do not provide configuration values or secure startup parameters to containers.

###

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

### Question 24

**You have a Microsoft Entra tenant named contoso.onmicrosoft.com that contains the users shown in the table.** **You enable password reset for contoso.onmicrosoft.com as shown in the Password Reset exhibit.** **You configure the authentication methods for password reset as shown in the Authentication Methods exhibit.** **For the following statement, select Yes if the statement is true. Otherwise, select No.** **“User3 can add security questions to the password reset process.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because **security questions are not supported in Microsoft Entra self‑service password reset (SSPR)**.

- The available authentication methods for SSPR include **email, mobile phone, office phone, and mobile app notifications/codes**, but not security questions.

- Therefore, User3 cannot add security questions to the password reset process.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” assumes that security questions are a valid authentication method in Entra SSPR.

- This is a common exam trap: while some identity systems allow security questions, Microsoft Entra does not.

###

---

### Question 25

**You have a Microsoft Entra tenant named contoso.onmicrosoft.com that contains the users shown in the table.** **You enable password reset for contoso.onmicrosoft.com as shown in the Password Reset exhibit.** **You configure the authentication methods for password reset as shown in the Authentication Methods exhibit.** **For the following statement, select Yes if the statement is true. Otherwise, select No.** **“After User2 answers three security questions correctly, he can reset his password immediately.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because **Microsoft Entra Self‑Service Password Reset (SSPR)** does not support **security questions** as an authentication method.

- The supported methods include **email, mobile phone, office phone, and Microsoft Authenticator app notifications/codes**.

- Therefore, User2 cannot reset his password using security questions, even if he answers three correctly.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” assumes that security questions are a valid authentication method in Entra SSPR.

- This is a common exam trap: while some legacy identity systems allow security questions, Microsoft Entra does not.

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

### Question 27

**You have an Azure subscription that contains the resources in the table.** **VM1 and VM2 are deployed from the same template and host line‑of‑business applications.** **You configure the network security group (NSG) shown in the exhibit.** **You need to prevent users of VM1 and VM2 from accessing websites on the Internet over TCP port 80.** **What should you do?**

**Options:**

- **A.** Change the DenyWebSites outbound security rule.
- **B.** Change the Port_80 inbound security rule.
- **C.** Associate the NSG to Subnet1. ✅
- **D.** Disassociate the NSG from a network interface.

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Associate the NSG to Subnet1**

- Correct because NSG rules only take effect when the NSG is **associated** with either a subnet or a network interface.

- In this scenario, the NSG already contains a rule (DenyWebSites) that blocks outbound traffic on TCP port 80.

- However, unless the NSG is associated with **Subnet1** (where VM1 and VM2 reside), the rule will not apply.

- Associating the NSG ensures that the outbound deny rule is enforced, preventing VM1 and VM2 from accessing websites over port 80.

### Incorrect

**Option A. Change the DenyWebSites outbound security rule**

- Incorrect because the rule already exists to block TCP port 80.

- The issue is not with the rule itself but with the NSG not being associated to the subnet.

**Option B. Change the Port_80 inbound security rule**

- Incorrect because inbound rules control traffic **coming into the VM**, not outbound traffic to the Internet.

- The requirement is to block outbound access to websites.

**Option D. Disassociate the NSG from a network interface**

- Incorrect because disassociating the NSG would remove its effect entirely, leaving VM1 and VM2 unrestricted.

- This would make the problem worse, not solve it.

---

### Question 28

You have an Azure subscription that contains the resources shown in the following table.

NSG1 is configured as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM2 can access VM1 by using the HTTPS protocol.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is the **correct** answer here. The HTTPS_VM1_Deny rule with priority 110 specifically blocks HTTPS (TCP port 443) traffic only from the Internet to VM1. Since VM2 is within the same virtual network (VNet1), the default VNet-to-VNet communication rule will allow HTTPS traffic between VM2 and VM1. Therefore, VM2 can access VM1 using the HTTPS protocol.

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview

- https://docs.microsoft.com/en-us/azure/virtual-network/service-tags-overview

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

### Question 31

You have a registered DNS domain named contoso.com.
You create a public Azure DNS zone named contoso.com.
You need to ensure that records created in the contoso.com zone are resolvable from the internet.
What should you do?

**Options:**

- **A.** Modify the SOA record in the DNS domain registrar.
- **B.** Create the SOA record in contoso.com.
- **C.** Modify the NS records in the DNS domain registrar. ✅
- **D.** Create NS records in contoso.com.

**Correct answer:** C

**Explanation:**

Modify the NS records in the DNS domain registrar is the correct answer here. To ensure that records created in the contoso.com Azure DNS zone are resolvable from the internet, you need to update the NS (Name Server) records in your DNS domain registrar. These records should point to the Azure DNS name servers associated with the contoso.com zone in Azure. This change directs external DNS queries for contoso.com to Azure DNS, allowing them to be resolved by the public Azure DNS servers.
Modify the SOA record in the DNS domain registrar is incorrect because the SOA (Start of Authority) record is managed by Azure DNS, and you do not need to modify it in the domain registrar to enable public resolution.
Create the SOA record in contoso.com is incorrect because the SOA record is automatically created and managed by Azure DNS for the zone. No manual action is needed for this record to enable internet resolvability.
Create NS records in contoso.com is incorrect because NS records within the Azure DNS zone are already created automatically. The critical step is to update the NS records at the DNS domain registrar, not within Azure DNS.
Reference(s):
https://learn.microsoft.com/en-us/azure/dns/dns-delegate-domain-azure-dns

---

### Question 32

You have the following custom role-based access control (RBAC) role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“Users that are assigned Role1 can assign Role1 to users.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is the **correct** answer here. The custom role “Role1” includes various permissions under the “actions” section, but the “notActions” section explicitly denies permissions related to **Microsoft.Authorization/*/Delete**, **Microsoft.Authorization/*/Write**, and **Microsoft.Authorization/elevateAccess/Action**. These restricted permissions prevent users assigned with “Role1” from performing role assignments or modifications, including the ability to assign “Role1” to other users.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

---

### Question 33

You have the following custom role-based access control (RBAC) role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“Users that are assigned Role1 can deploy new virtual machines.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is the **correct** answer here. The custom role “Role1” includes Microsoft.Compute/virtualMachines/* in the allowed actions section, which grants permission to perform all actions on virtual machines, including creating, updating, deleting, starting, restarting, and powering off virtual machines. This wildcard (*) in Microsoft.Compute/virtualMachines/* effectively allows users assigned with “Role1” to deploy new virtual machines.

Therefore, users assigned with “Role1” can deploy new virtual machines.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

---

### Question 34

You have the following custom role-based access control (RBAC) role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“Users that are assigned Role1 can set a static IP address on a virtual machine.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is the **correct** answer here. The custom role “Role1” includes **Microsoft.Network/networkInterfaces/*** in the allowed actions, which grants users permissions to manage network interfaces, including the ability to set IP configurations on them. This permission allows users assigned “Role1” to configure settings such as static IP addresses on the network interface associated with a virtual machine.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

---

### Question 35

You have an Azure Load Balancer named LB1.

You assign a user named User1 the roles shown in the following exhibit.

Based on the information provided, select the answer choice that completes the following statement correctly.

**“User 1 can __________________________ the resource group.”**

**Options:**

- **A.** delete a virtual machine from ✅
- **B.** modify the load balancing rules in
- **C.** deploy an Azure Kubernetes Service (AKS) cluster to

**Correct answer:** A

**Explanation:**

**delete a virtual machine from** is the **correct** answer here. User1 has been assigned the **Virtual Machine Contributor** role at the resource group level (inherited), which grants them permissions to manage virtual machines within that resource group. This includes creating, updating, and deleting virtual machines. Therefore, User1 can delete a virtual machine within the specified resource group. However, this role does not grant permissions to modify load balancing rules or deploy resources unrelated to virtual machines, such as an AKS cluster.

**modify the load balancing rules in** is **incorrect** because the **Virtual Machine Contributor** role does not include permissions to modify network settings or load balancing configurations. To modify load balancing rules, User1 would need the **Network Contributor** or **Load Balancer Contributor** role, which is not assigned in this scenario.

**deploy an Azure Kubernetes Service (AKS) cluster to** is **incorrect** because deploying an AKS cluster requires additional permissions beyond those granted by the **Virtual Machine Contributor** role. Typically, the **Contributor** role or specific permissions related to AKS deployment would be needed to create and manage AKS clusters in the resource group.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

---

### Question 36

You have an Azure subscription that contains the hierarchy shown below.

You create an Azure Policy definition named Policy1.

Which Azure resources can you specify as exclusions from Policy1?

**Options:**

- **A.** VM1 only
- **B.** RG1 and VM1 only
- **C.** Subscription1, RG1, and VM1 only
- **D.** ManagementGroup1, Subscription1, RG1, and VM1 only ✅
- **E.** Tenant Root Group, ManagementGroup1, Subscription1, RG1, and VM1

**Correct answer:** D

**Explanation:**

**ManagementGroup1, Subscription1, RG1, and VM1 only** is **correct** because when assigning a policy, you can exclude resources at any level in the hierarchy, including management groups, subscriptions, resource groups, and individual resources. Exclusions are designed to provide flexibility in policy enforcement by allowing specific resources or groups to be excluded from a policy’s scope.

**Tenant Root Group** cannot be excluded from policy assignments. Exclusions are applicable to management groups, subscriptions, resource groups, and individual resources only.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/governance/policy/concepts/assignment-structure

- https://learn.microsoft.com/en-us/azure/governance/policy/overview

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

### Question 39

You have a subnet named Subnet1 that contains Azure virtual machines. A network security group (NSG) named NSG1 is associated to Subnet1. NSG1 only contains the default rules.
You need to create a rule in NSG1 to prevent the hosts on Subnet1 from connecting to the Azure portal. The hosts must be able to connect to other internet hosts.
To what should you set Destination in the rule?

**Options:**

- **A.** Application security group
- **B.** IP Addresses
- **C.** Any
- **D.** Service Tag ✅

**Correct answer:** D

**Explanation:**

Service Tag is the correct answer because Service Tags simplify network security group (NSG) rules by allowing you to reference a group of IP addresses associated with a specific Azure service. In this scenario, to block access to the Azure portal while still allowing access to other internet resources, you would use the AzureCloud service tag as the Destination in your NSG rule. This ensures that traffic specifically destined for the Azure portal is denied without impacting other internet traffic.
Application security group is incorrect because Application Security Groups (ASGs) are used to group virtual machines within the same virtual network to simplify NSG management. They cannot be used to target Azure services like the Azure portal.
IP Addresses is incorrect because blocking access to the Azure portal using IP addresses would require you to manually identify and maintain the list of Azure portal IP ranges, which is not practical or recommended.
Any is incorrect because setting the destination to “Any“ would block all internet traffic, including non-Azure-related services, which does not meet the requirement of allowing access to other internet hosts.
Reference(s):
https://learn.microsoft.com/en-us/azure/virtual-network/service-tags-overview
https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview
https://learn.microsoft.com/en-us/azure/virtual-network/network-security-group-how-it-works

---

### Question 40

You have a Microsoft Entra tenant named contoso.com.

You have two external partner organizations named fabrikam.com and litwareinc.com. Fabrikam.com is configured as a connected organization.

You create an access package as shown in the Access package exhibit.

You configure the external user lifecycle settings as shown in the Lifecycle exhibit

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“Litwareinc.com users can be assigned to package1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is the **correct** answer here. The access package package1 is configured to allow access requests from “All configured connected organizations.” Based on the information given, only fabrikam.com is set up as a connected organization. Since litwareinc.com is not configured as a connected organization, users from litwareinc.com are **not** eligible to be assigned to package1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/active-directory/governance/entitlement-management-access-package-resources#add-a-group-or-team-resource-role

- https://learn.microsoft.com/en-us/azure/active-directory/governance/entitlement-management-external-users

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

### Question 42

**Note:** This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.

You have an Azure subscription that contains the virtual machines shown in the following table.

You deploy a load balancer that has the following configurations:

- Name: LB1

- Type: Internal

- SKU: Standard

- Virtual network: VNET1

You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.

**Solution**: You create a Standard SKU public IP address, associate the address to the network interface of VM1, and then stop VM2.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is the **correct** answer here. To add VM1 and VM2 to the backend pool of a Standard SKU internal load balancer, both virtual machines need to be configured to meet the requirements for a Standard SKU load balancer. Specifically, both VMs must have Standard SKU public IP addresses or no public IP at all. VM2 currently has a Basic SKU public IP, which is incompatible with the Standard SKU load balancer.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/load-balancer/backend-pool-management#limitations

---

### Question 43

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.
You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.
Another administrator plans to create several network security groups (NSGs) in the subscription.
You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.
Solution: From the Resource providers blade, you unregister the Microsoft.ClassicNetwork provider.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No is the correct answer here. Unregistering the Microsoft.ClassicNetwork provider has no effect on network security groups (NSGs) created in the Azure Resource Manager (ARM) model, as it is associated with the classic deployment model in Azure. The requirement here is to automatically block TCP port 8080 between virtual networks in the ARM model, which cannot be achieved by unregistering a provider. Instead, you would need to implement a custom policy or directly configure NSG rules.
Reference(s):
https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/overview

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

### Question 45

You have a public load balancer that balances ports 80 and 443 across three virtual machines named VM1, VM2, and VM3.

You need to direct all the Remote Desktop Protocol (RDP) connections to VM3 only.

What should you configure?

**Options:**

- **A.** a new public load balancer for VM3
- **B.** a frontend IP configuration
- **C.** an inbound NAT rule ✅
- **D.** a load balancing rule

**Correct answer:** C

**Explanation:**

**an inbound NAT rule** is **correct** because an inbound NAT rule allows you to direct specific traffic, such as RDP, to a particular virtual machine (VM3 in this case) behind the load balancer. By setting up an inbound NAT rule for port 3389 (RDP), you ensure that all RDP connections go directly to VM3 instead of balancing across all VMs.

**a new public load balancer for VM3** is **incorrect** because creating a separate load balancer is unnecessary for directing RDP connections to VM3. An inbound NAT rule is sufficient to achieve this without additional load balancers.

**a frontend IP configuration** is **incorrect** as a frontend IP configuration is used to define the IP address on which the load balancer is accessible. It does not control how RDP traffic is directed to specific VMs.

**a load balancing rule** is **incorrect** because load balancing rules are intended for distributing traffic across multiple VMs based on specific ports, which is not the goal here. The objective is to direct all RDP traffic to VM3 specifically, not balance it across VMs.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/load-balancer/tutorial-load-balancer-port-forwarding-portal

---

### Question 46

You have an Azure subscription that contains the resources shown in the following table.

All the resources connect to a virtual network named VNet1.

You plan to deploy an Azure Bastion host named Bastion1 to VNet1.

Which resources can be protected by using Bastion1?

**Options:**

- **A.** VM1 only ✅
- **B.** contoso.com only
- **C.** App1 and contoso.com only
- **D.** VM1 and contoso.com only
- **E.** VM1, App1, and contoso.com

**Correct answer:** A

**Explanation:**

**VM1 only** is **correct** because Azure Bastion is designed to provide secure and seamless RDP and SSH connectivity to virtual machines within a virtual network. In this scenario, VM1 is the only virtual machine listed in the table, and thus the only resource that can be accessed and protected via Bastion1. Azure Bastion does not support direct connectivity to web apps (such as App1) or to Microsoft Entra Domain Services domains (like contoso.com).

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/bastion/bastion-overview

---

### Question 47

You have a Microsoft Entra tenant named contoso.onmicrosoft.com that contains the users shown in the following table.

You enable password reset for contoso.onmicrosoft.com as shown in the Password Reset exhibit.

You configure the authentication methods for password reset as shown in the Authentication Methods exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“If User1 forgets her password, she can reset the password by using the mobile phone app.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because User1 is a member of Group1, and self-service password reset (SSPR) has been enabled only for Group2. Since User1 is not part of Group2, she does not have access to the self-service password reset feature, regardless of the authentication methods configured.

**Reference(s):**

- https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-sspr

- https://learn.microsoft.com/en-us/entra/identity/authentication/passwords-faq

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

### Question 49

You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.
A user named User1 has the following roles for Subscription1:
Reader
Security Admin
Security Reader
You need to ensure that User1 can assign the Reader role for VNet1 to other users.
What should you do?

**Options:**

- **A.** Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.
- **B.** Remove User1 from the Security Reader and Reader roles for Subscription1.
- **C.** Assign User1 the User Access Administrator role for VNet1. ✅
- **D.** Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.

**Correct answer:** C

**Explanation:**

Assign User1 the User Access Administrator role for VNet1 is the correct answer because the User Access Administrator role allows a user to manage user access to resources, including assigning RBAC roles such as Reader to other users. While User1 already has the Reader, Security Admin, and Security Reader roles, none of these roles grant the ability to assign RBAC roles to other users. Assigning the User Access Administrator role at the scope of VNet1 ensures that User1 has the necessary permissions to assign roles without granting broader privileges at the subscription or resource group level, adhering to the principle of least privilege.
Removing User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1 is incorrect because the Contributor role allows managing resources but does not grant role assignment capabilities.
Removing User1 from the Security Reader and Reader roles for Subscription1 is incorrect because simply removing existing roles does not grant any permissions for role assignment.
Removing User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1 is incorrect because the Contributor role at the resource group level (RG1) does not allow assigning roles for VNet1.
Reference(s):
https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles
https://learn.microsoft.com/en-us/azure/role-based-access-control/role-definitions
https://learn.microsoft.com/en-us/azure/role-based-access-control/overview

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

### Question 51

You have an Azure subscription.
You plan to deploy a container.
You need to recommend which Azure services can scale the container automatically.
What should you recommend?

**Options:**

- **A.** Azure Container Apps only
- **B.** Azure Container Instances only
- **C.** Azure Container Apps or Azure App Service only ✅
- **D.** Azure Container Instances or Azure App Service only
- **E.** Azure Container Apps, Azure Container Instances, or Azure App Service

**Correct answer:** C

**Explanation:**

Azure Container Apps or Azure App Service only is the correct answer here. Both Azure Container Apps and Azure App Service provide built-in autoscaling capabilities for containers based on demand, such as HTTP requests or CPU usage. These services can automatically scale out or in depending on the workload.
Azure Container Instances only is incorrect because it does not have built-in autoscaling. It allows you to run containers but requires manual scaling.
Azure Container Apps, Azure Container Instances, or Azure App Service is incorrect because Azure Container Instances does not support automatic scaling.
Reference(s):
https://learn.microsoft.com/en-us/azure/container-apps/scale-app?pivots=azure-cli
https://learn.microsoft.com/en-us/azure/app-service/manage-scale-up

---

### Question 52

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.
You have a Microsoft Entra tenant named Adatum.com and an Azure Subscription named Subscription1. Adatum.com contains a group named Developers. Subscription1 contains a resource group named Dev.
You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.
Solution: On Dev, you assign the Logic App Operator role to the Developers group.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No is correct because the Logic App Operator role allows users to perform runtime operations on logic apps, such as triggering, enabling, disabling, and viewing runs and history. However, it does not provide the permissions required to create, update, or delete logic apps. This means that assigning the Logic App Operator role to the Developers group does not fulfill the requirement to allow them to create Azure Logic Apps.
Reference(s):
https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#logic-app-operator

---

### Question 53

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.
You have a Microsoft Entra tenant named Adatum.com and an Azure Subscription named Subscription1. Adatum.com contains a group named Developers. Subscription1 contains a resource group named Dev.
You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.
Solution: On Subscription1, you assign the DevTest Labs User role to the Developers group.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No is correct because the DevTest Labs User role allows users to connect to, start, restart, and shut down virtual machines in Azure DevTest Labs. It does not provide permissions to create Azure Logic Apps. The ability to create Logic Apps requires a role such as Logic App Contributor or Contributor, which explicitly includes permissions for managing logic apps. Therefore, assigning the DevTest Labs User role does not meet the stated requirement.
Reference(s):
https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#devtest-labs-user

---
