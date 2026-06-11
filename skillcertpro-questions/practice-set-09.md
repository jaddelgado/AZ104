# Practice Set 9

Source: [https://skillcertpro.com/az-104-exam-questions/9/](https://skillcertpro.com/az-104-exam-questions/9/)
Total questions: 54

---

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

### Question 5

You have two Azure subscriptions named Subscription1 and Subscription2. Each subscription is associated with a different Microsoft Entra tenant.

Subscription1 contains a virtual network named VNet1. VNet1 contains an Azure virtual machine named VM1 and has an IP address space of 10.0.0.0/16.

Subscription2 contains a virtual network named VNet2. VNet2 contains an Azure virtual machine named VM2 and has an IP address space of 10.10.0.0/24.

You need to connect VNet1 to VNet2.

What should you do first?

**Options:**

- **A.** Move VM1 to Subscription2.
- **B.** Provision virtual network gateways. ✅
- **C.** Move VNet1 to Subscription2.
- **D.** Modify the IP address space of VNet2.

**Correct answer:** B

**Explanation:**

The first step you should take is to **provision virtual network gateways**.

Here’s why:

**Virtual Network Gateways:**

To connect virtual networks across different subscriptions or even different Azure regions, you need to use virtual network gateways.

These gateways establish secure, encrypted tunnels between the virtual networks.

Before you can establish the connection, you must create virtual network gateways in both VNet1 and VNet2.

Here’s why the other options are not the correct first step:

**Move VM1 to Subscription2 or Move VNet1 to Subscription2:**

Moving resources between subscriptions associated with different Microsoft Entra tenants can be complex and is not the necessary first step for connecting the virtual networks.

This is also not the best practice. Vnet peering between subscriptions is the desired method.

**Modify the IP address space of VNet2:**

While IP address space conflicts can prevent successful connections, this is not the first step. You need to create the gateways first.

Also, the IP address spaces provided do not conflict. 10.0.0.0/16 and 10.10.0.0/24 are separate address spaces.

---

### Question 6

You have the Azure virtual machines shown in the following table.

VNET1, VNET2, and VNET3 are peered.

VM4 has a DNS server that is authoritative for a zone named contoso.com and contains the records shown in the following table.

VNET1 and VNET2 are linked to an Azure private DNS zone named contoso.com that contains the records shown in the following table.

The virtual networks are configured to use the DNS servers shown in the following table.

For the statement below, select Yes if the statement is true. Otherwise select No.

**“From VM2, server1.contoso.com resolves to 131.107.3.3.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Let’s break down this Azure networking and DNS question step-by-step:

**Understanding the Setup**

**Virtual Machines and Networks:**

VM1, VM2, VM3, and VM4 reside in different virtual networks (VNET1, VNET2, VNET3).

The networks are peered, allowing communication between them.

**DNS:**

VM4 (192.168.0.5) hosts a DNS server authoritative for contoso.com.

VNET1 and VNET2 are linked to an Azure Private DNS zone for contoso.com.

DNS server configurations vary:

VNET1: Uses Azure’s default DNS.

VNET2 and VNET3: Use VM4’s DNS server (192.168.0.5).

**DNS Records:**

VM4’s DNS server: server1.contoso.com resolves to 131.107.2.3.

Azure Private DNS zone: server1.contoso.com resolves to 131.107.3.3.

**Analyzing the Statement**

**“From VM2, server1.contoso.com resolves to 131.107.3.3.”**

VM2 uses the custom DNS server of 192.168.0.5.

Therefore, VM2 will query VM4 for DNS resolution.

VM4’s DNS server has the record of server1.contoso.com resolving to 131.107.2.3.

The Azure Private DNS zone records will not be used, as VM2 is configured to use the custom DNS server.

**Answer: No**

VM2 is configured to use the custom DNS server running on VM4. That DNS server has a record of server1.contoso.com resolving to 131.107.2.3. Therefore VM2 will resolve server1.contoso.com to 131.107.2.3, and not 131.107.3.3.

**Reference(s):**

- https://learn.microsoft.com/en-us/answers/questions/1150496/private-dns-vs-custom-dns-for-one-vnet

- https://learn.microsoft.com/en-us/azure/dns/private-dns-virtual-network-links

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

### Question 10

You have a Microsoft Entra tenant.

You need to ensure that when a new Microsoft 365 group is created, the group name is automatically formatted as follows:

&lt;Department&gt; &lt;Group Name&gt;

Which three actions should you perform in sequence in the Microsoft Entra admin center?

ACTIONS

1. Set Add suffix to Attribute.

2. Create a group naming policy.

3. Set Add prefix to Attribute.

4. Set Add suffix to String.

5. Set Add prefix to String.

6. Set Select type to Department.

7. Customize the company branding.

**Options:**

- **A.** 2-6-5
- **B.** 2-3-6 ✅
- **C.** 2-5-6
- **D.** 2-6-4

**Correct answer:** B

**Explanation:**

To ensure that a new Microsoft 365 group name is automatically formatted as &lt;Department&gt; &lt;Group Name&gt;, you need to perform the following actions in sequence in the Microsoft Entra admin center:

**Correct Sequence:**

- **Create a group naming policy** (Action 2):

This is the first step because you need to define a naming policy for groups before configuring prefixes or suffixes.

- **Set Add prefix to Attribute** (Action 3):

After creating the naming policy, you need to set the prefix to an attribute. In this case, the attribute will be the Department.

- **Set Select type to Department** (Action 6):

This step ensures that the prefix is dynamically populated with the department name when the group is created.

**Details:**

- **Action 2 (Create a group naming policy):**

This is the foundational step. Without a naming policy, you cannot enforce any naming conventions for groups.

- **Action 3 (Set Add prefix to Attribute):**

This ensures that the prefix is based on an attribute (e.g., department) rather than a static string.

- **Action 6 (Set Select type to Department):**

This specifies that the attribute to be used for the prefix is the Department.

**Incorrect Options:**

- **Action 1 (Set Add suffix to Attribute):**

This is incorrect because the requirement is to add the department as a prefix, not a suffix.

- **Action 4 (Set Add suffix to String):**

This is incorrect because the requirement is to use the department as a prefix, not a suffix, and it should be an attribute, not a static string.

- **Action 5 (Set Add prefix to String):**

This is incorrect because the prefix should be based on the Department attribute, not a static string.

- **Action 7 (Customize the company branding):**

This is unrelated to group naming policies and is used for customizing the login page or company logo.

The correct sequence of actions is:

**2 → 3 → 6**

(Create a group naming policy → Set Add prefix to Attribute → Set Select type to Department).

**Reference(s):**

https://learn.microsoft.com/en-us/entra/identity/users/groups-naming-policy

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

### Question 12

Case Study: GlobalMantics‘ Cloud Expansion and Optimization

(There are multiple questions in this test based on this case study.)

GlobalMantics, a multinational retail company, is expanding its online presence and modernizing its existing Azure infrastructure. They have the following resources and goals:  E-Commerce Web App: Hosted on Azure App Service, experiencing unpredictable traffic spikes and slowdowns during peak times. Inventory Management System: A legacy .NET application running on Azure VMs (VM01-VM04) in a single availability set.

Customer Database: Azure SQL Database with high IOPS requirements and sensitive customer data. Data Lake: Azure Data Lake Storage Gen2 for storing large volumes of unstructured sales and marketing data.

Goals: Improve the scalability and reliability of the e-commerce web app. Modernize and enhance the availability of the inventory management system. Ensure data security and compliance for the customer database. Optimize costs across all Azure resources. Question:

To enhance the scalability and performance of the e-commerce web app during peak traffic, which Azure service should GlobalMantics implement?

**Options:**

- **A.** Azure CDN
- **B.** Azure Application Gateway with autoscaling ✅
- **C.** Azure Front Door
- **D.** Azure Traffic Manager

**Correct answer:** B

**Explanation:**

**Correct Answer:**

**B. Azure Application Gateway with autoscaling:** This is the most appropriate service for the described scenario. Here’s why:

**Scalability:** Application Gateway supports autoscaling. It can automatically scale its instances up or down based on traffic demand, ensuring that the web app can handle traffic spikes.

**Performance:** Application Gateway offers features like SSL offloading, which can improve web app performance.

**Web Application Focus:** Application Gateway is designed specifically for web application traffic. It operates at Layer 7 (application layer), allowing for more sophisticated routing and traffic management compared to a basic load balancer.

**Why other options are less suitable:**

**A. Azure CDN:** Azure CDN (Content Delivery Network) improves performance by caching static content (images, CSS, JavaScript) closer to users. While it’s a valuable service for web apps, it doesn’t directly address the scalability of the application itself during peak traffic. CDN helps with content delivery, not application scaling. It’s a good addition to Application Gateway, but not a replacement for it in this scenario.

**C. Azure Front Door:** Azure Front Door is a global HTTP(S) load balancer. It’s excellent for global traffic management and routing traffic to different regions. However, for scaling the application within a single region (which is what’s implied by “unpredictable traffic spikes”), Application Gateway with autoscaling is more appropriate. Front Door is for global scaling, Application Gateway is for regional/application scaling.

**D. Azure Traffic Manager:** Azure Traffic Manager is a DNS-based traffic routing service. It directs traffic to different instances of your application based on various methods (e.g., performance, geographic). Like Front Door, it’s more suited for global traffic distribution or failover scenarios. It doesn’t provide the same level of application-specific scaling and performance enhancements as Application Gateway.

---

### Question 13

You are setting up a new VM to host a database server. Which VM size series would be the most appropriate for this workload, requiring high computational power and memory capacity?

**Options:**

- **A.** F-series
- **B.** D-series
- **C.** E-series
- **D.** M-series ✅

**Correct answer:** D

**Explanation:**

**Correct VM Size Series:**

**Memory-Optimized VM Series (e.g., E-series or M-series)**

- **Correct**: Memory-optimized VM series, such as **E-series** or **M-series**, are designed for workloads that require high memory-to-CPU ratios. These series are ideal for database servers, as they provide both high computational power and significant memory capacity to handle large datasets and complex queries efficiently.

The **best answer** between **E-series** and **M-series** depends on the specific requirements of the database workload. Let’s break it down to determine which is more appropriate for a database server requiring **high computational power and memory capacity**:

**E-series (Memory-Optimized VMs):**

- **Key Features**:

- Designed for memory-intensive workloads.

- Provides a high memory-to-CPU ratio.

- Suitable for in-memory databases, large caches, and analytics workloads.

- **Use Case**:

- Ideal for workloads that require **moderate computational power** but **very high memory capacity**.

- Example: In-memory databases like Redis or SAP HANA.

**M-series (Memory-Optimized VMs with High CPU and Memory):**

- **Key Features**:

- Designed for **extremely memory-intensive workloads**.

- Offers the **highest memory-to-CPU ratio** in Azure.

- Supports up to **4 TB of memory** per VM.

- Provides **high computational power** alongside massive memory capacity.

- **Use Case**:

- Ideal for **large-scale database servers** that require both **high computational power** and **massive memory capacity**.

- Example: Enterprise-grade SQL Server, Oracle Database, or other large relational databases.

**Best Answer for Database Server:**

**M-series**

- **Reason**: The M-series is specifically designed for workloads that require **both high computational power and massive memory capacity**, making it the best choice for hosting a database server. It provides the highest memory-to-CPU ratio and can handle large datasets and complex queries efficiently, which is critical for database workloads.

**Why Not E-series?**

- While the E-series is also memory-optimized, it is more suited for workloads that require **moderate computational power** and **high memory capacity**. For a database server that demands **both high computational power and memory**, the M-series is a better fit.

**Incorrect VM Size Series:**

- **General-Purpose VM Series (e.g., D-series)**

- **Incorrect**: While general-purpose VMs like the D-series provide a balance of CPU, memory, and storage, they are not optimized for high memory capacity or computational power. They are better suited for general workloads like web servers or lightweight applications.

- **Compute-Optimized VM Series (e.g., F-series)**

- **Incorrect**: Compute-optimized VMs, such as the F-series, are designed for workloads requiring high CPU performance but do not provide the high memory capacity needed for database servers.

- **Storage-Optimized VM Series (e.g., L-series)**

- **Incorrect**: Storage-optimized VMs, such as the L-series, are designed for workloads requiring high disk throughput and low latency, such as big data or data warehousing. They are not optimized for high computational power or memory capacity.

- **GPU-Optimized VM Series (e.g., NC-series or NV-series)**

- **Incorrect**: GPU-optimized VMs are designed for workloads requiring graphical processing power, such as machine learning or rendering. They are not suitable for database servers.

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

### Question 17

You have a Microsoft Entra tenant.

You need to create a Microsoft 365 group that contains only members of a marketing department in France.

You need to complete the dynamic membership rule.

What should you choose for **Dropdown 1**?

**Options:**

- **A.** device.managementType
- **B.** device.organizationalUnit
- **C.** user.department ✅
- **D.** user.usageLocation

**Correct answer:** C

**Explanation:**

**user.department** is **correct** because the requirement is to create a group that contains members from a specific department, in this case, the marketing department. The user.department attribute in dynamic membership rules is used to filter users based on their department property.

**Reference(s):**

- https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership

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

### Question 19

You have the Azure virtual machines shown in the following table.

VNET1, VNET2, and VNET3 are peered.

VM4 has a DNS server that is authoritative for a zone named contoso.com and contains the records shown in the following table.

VNET1 and VNET2 are linked to an Azure private DNS zone named contoso.com that contains the records shown in the following table.

The virtual networks are configured to use the DNS servers shown in the following table.

For the statement below, select Yes if the statement is true. Otherwise select No.

**“From VM3, server2.contoso.com resolves to 131.107.2.4.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is **correct** as VM3 is connected to VNet3 which is connected to the DNS server VM4 and that DNS server does have an existing A record for server2 which will help in resolving server2.contoso.com to 131.107.2.4.

**Reference(s):**

- https://learn.microsoft.com/en-us/answers/questions/1150496/private-dns-vs-custom-dns-for-one-vnet

- https://learn.microsoft.com/en-us/azure/dns/private-dns-virtual-network-links

---

### Question 20

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1.

You need to create a lifecycle management rule for storage1 that will automatically move the blobs in container1 to the lowest-cost tier after 90 days.

You need to complete the following rule.

What should you choose for **dropdown1**?

**Options:**

- **A.** enableAutoTierToHotFromCool: {
- **B.** tierToArchive: { ✅
- **C.** tierToCool: {

**Correct answer:** B

**Explanation:**

**tierToArchive”: { **is **correct** because here you define the action you want to take via the policy. As per the requirement we need to move the blobs to the lowest-cost tier which is the Archive tier after 90 days.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-policy-configure?tabs=azure-portal

---

### Question 21

You have an Azure subscription named Sub1 that contains the Azure resources shown in the following table.

You assign an Azure policy that has the following settings:

- Scope: Sub1

- Exclusions: Sub1/RG1/VNET1

- Policy definition: Append a tag and its value to resources

- Policy enforcement: Enabled

- Tag name: Tag4

- Tag value: value4

You assign tags to the resources as shown in the following table.

For the statement below, select Yes if the statement is true. Otherwise select No.

**“VNET1 has the Tag2:IT and Tag3:value2 tags assigned only.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because VNet1 originally has Tag3: value2 and there will be no action performed on it via policy because of the exclusion mentioned in the policy definition, so there will not be any addition of a tag. Hence it will just have only one tag.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-policies

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

### Question 25

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.**

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer.

The effective network security configurations for VM2 are shown in the following exhibit.

You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly.

You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.

**Solution**: You modify the priority of the Allow_131.107.100.50 inbound security rule

Does it meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because if you increase the priority, all 443 traffic will still be blocked by the rule 200. If you decrease the priority, the effect is technically the same as it is currently. Hence this option will not help.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/load-balancer/manage-rules-how-to

---

### Question 26

You have a Microsoft Entra tenant.

You need to create a Microsoft 365 group that contains only members of a marketing department in France.

You need to complete the dynamic membership rule.

What should you choose for **Dropdown 2**?

**Options:**

- **A.** and ✅
- **B.** or
- **C.** typeof

**Correct answer:** A

**Explanation:**

**and** is **correct** because you want to include users who meet both criteria: being in the marketing department and being located in France. Using “and” ensures that both conditions must be true for a user to be included in the dynamic membership.

**Reference(s):**

- https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership

---

### Question 27

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the virtual machines shown in the following table.

Each virtual machine contains only a private IP address.

You create an Azure bastion for VNet1 as shown below.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“The Azure portal can use SSH to connect to VM2 through Bastion1.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is **correct** because VM2 is in VNet2 which is directly peered to VNet1 and Bastion1 is deployed in VNet1. Hence the connection can be easily made to VM2.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/bastion/native-client#deploy-bastion-with-the-native-client-feature

- https://learn.microsoft.com/en-us/azure/bastion/configuration-settings#skus

---

### Question 28

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the virtual machines shown in the following table.

Each virtual machine contains only a private IP address.

You create an Azure bastion for VNet1 as shown below.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“The Azure portal can be used to connect to VM3 through Bastion1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because there is no direct connection between VNet1 in which Bastion1 is and VNet3. Hence the connection from Bastion1 will not be possible to VM3.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/bastion/native-client#deploy-bastion-with-the-native-client-feature

- https://learn.microsoft.com/en-us/azure/bastion/configuration-settings#skus

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

### Question 30

You create a virtual machine scale set named Scale1. Scale1 is configured as shown in the following exhibit.

Based on the information presented, select the answer choice that completes the following statement correctly.

**“If Scale1 is utilized at 85 percent for six minutes after it is deployed, Scale1 will be running _______________.”**

**Options:**

- **A.** 2 virtual machines
- **B.** 4 virtual machines
- **C.** 6 virtual machines ✅
- **D.** 10 virtual machines
- **E.** 20 virtual machines

**Correct answer:** C

**Explanation:**

**6 virtual machines** is the **correct** option because the virtual machine scale set (VMSS) is configured to scale out when CPU utilization exceeds 80% for 5 minutes. In this case:

- The initial number of VMs is **4**.

- When the CPU usage crosses **80%** for **6 minutes** (exceeding the configured threshold of 5 minutes), **2 additional VMs** will be added.

- Therefore, the total number of VMs becomes **4 + 2 = 6 VMs**.

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

### Question 32

You have an Azure subscription that contains the virtual networks shown in the following table.

The subnets have the IP address spaces shown in the following table.

You plan to create a container app named contapp1 in the East US Azure region.

You need to create a container app environment named con-env1 that meets the following requirements:

- Uses its own (and existing) virtual network.

- Uses its own (and new) subnet.

- Is connected to the smallest possible subnet.

Which subnet mask should you use?

**Options:**

- **A.** /16
- **B.** /23 ✅
- **C.** /24
- **D.** /26
- **E.** /28

**Correct answer:** B

**Explanation:**

**/23** is **correct** because, as per Microsoft’s official recommendation, a container app environment requires a dedicated subnet with a minimum address space of **/23** when connecting to a virtual network. This allocation ensures sufficient IP addresses (512) for both current and future scaling needs of the container app environment. Additionally, the requirement specifies selecting the **smallest possible subnet** that meets these prerequisites, and **/23** is the optimal choice in this scenario.

Therefore, **/23** satisfies both the **minimum requirement** and the **smallest possible subnet** criteria for deploying a container app environment in an Azure virtual network.

**Reference(s):**

- https://www.calculator.net/ip-subnet-calculator.html?cclass=any&amp;csubnet=17&amp;cip=10.128.1.0&amp;ctype=ipv4&amp;printit=0&amp;x=55&amp;y=24

- https://learn.microsoft.com/en-us/azure/container-apps/vnet-custom?tabs=bash&amp;pivots=azure-portal#restrictions

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

### Question 36

**You have a virtual network named VNet2 that has the configuration shown in the following exhibit. Before a virtual machine on VNet2 can receive an IP address from 10.2.1.0/24 you must first…**

Before a virtual machine on VNET2 can receive an IP address from 10.2.1.0/24 you must first

**Options:**

- **A.** A. Add a network interface
- **B.** B. Add a subnet ✅
- **C.** C. Add an address space
- **D.** D. Delete a subnet
- **E.** E. Delete an address space

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Add a subnet**

- Correct because for a VM to receive an IP address from a specific range (10.2.1.0/24), that range must be defined as a **subnet** within the virtual network.

- Azure VNet IP allocation is always tied to subnets. Without creating the subnet, the VM cannot be assigned an IP from that range.

- This is a foundational step in configuring Azure networking.

### Incorrect

**Option A. Add a network interface**

- Incorrect because while a VM requires a NIC to connect to a subnet, the NIC itself cannot provide IP addresses unless the subnet exists.

- The subnet must be created first.

**Option C. Add an address space**

- Incorrect because the address space (10.2.0.0/16, for example) already exists at the VNet level.

- Adding another address space is unnecessary unless expanding the VNet, not for assigning IPs within an existing range.

**Option D. Delete a subnet**

- Incorrect because deleting a subnet removes available IP ranges, which prevents allocation rather than enabling it.

**Option E. Delete an address space**

- Incorrect because removing an address space reduces available ranges and does not help in assigning IPs.

###

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

### Question 38

You have an Azure subscription that is used by four departments in your company. The subscription contains 10 resource groups. Each department uses resources in several resource groups. You need to send a report to the finance department. The report must detail the costs for each department.

Which three actions should you perform in sequence?

1 – Assign a tag to each resource group

2 – Assign a tag to each resource

3 – Download the usage report

4 – From the Cost analysis blade, filter the view by tag

5 – Open the Resource costs blade of each resource group

**Options:**

- **A.** 2,4,3 ✅
- **B.** 1,4,3
- **C.** 5,4,3
- **D.** 4,5,3

**Correct answer:** A

**Explanation:**

**Correct:**

✅ **Step 2 – Assign a tag to each resource** → In Azure, cost analysis can be filtered using tags, but tags must be applied at the **resource level** rather than just the resource group level. This ensures accurate cost tracking for each department.

✅ **Step 4 – From the Cost analysis blade, filter the view by tag** → After assigning tags to resources, you can use the **Cost analysis** blade in Azure Cost Management + Billing to filter costs based on the assigned tags, helping categorize expenses per department.

✅ **Step 3 – Download the usage report** → Once the cost data is filtered by tag, you can download the usage report to share detailed cost insights with the finance department.

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

### Question 40

A team member has created a point to site VPN connection between a computer named “WorkstationA” and an Azure Virtual Network. Another point to site VPN connection needs to be created between the same Azure Virtual Network and a computer named “WorkstationB”. The VPN client package was generated and installed on “WorkstationB”. You need to ensure you can create a successful point to site VPN connection.

You decide to export and install the client certificate on “WorkstationB”

Would this solution fulfil the requirement?

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

Yes, this is one of the requirements.

**Point-to-Site VPN and Certificates:**

Point-to-site VPN connections in Azure rely on client certificates for authentication.

When a point-to-site VPN is configured, a root certificate is uploaded to Azure, and client certificates are generated from that root.

Each client computer that needs to connect requires a client certificate.

Exporting a valid client certificate and installing it on workstationB will satisfy the need to authenticate to the VPN.

This is also mentioned in the Microsoft documentation

For more information on creating point-to-site VPN connections, please visit the below URL

https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-howto-point-to-site-resource-manager-portal

---

### Question 41

You plan to deploy three Azure virtual machines named **VM1, VM2, and VM3**. The virtual machines will host a web app named **App1**. You need to ensure that at least two virtual machines are available if a single Azure datacenter becomes unavailable.

**What should you deploy?**

**Options:**

- **A.** all three virtual machines in a single Availability Zone
- **B.** all virtual machines in a single Availability Set
- **C.** each virtual machine in a separate Availability Zone ✅
- **D.** each virtual machine in a separate Availability Set

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Each virtual machine in a separate Availability Zone**

- Availability Zones are **physically separate datacenters** within an Azure region.

- By placing each VM in a different Availability Zone, you ensure that if one datacenter goes down, the other two remain available.

- This provides the required resiliency and meets the exam requirement: **at least two VMs available if a single datacenter fails**.

### Incorrect

**Option A. All three virtual machines in a single Availability Zone**

- Incorrect because if that Availability Zone (datacenter) fails, **all three VMs go down**.

- This does not meet the requirement.

**Option B. All virtual machines in a single Availability Set**

- Availability Sets protect against **rack-level failures** within a datacenter, not full datacenter outages.

- If the entire datacenter fails, all VMs in the Availability Set are lost.

**Option D. Each virtual machine in a separate Availability Set**

- Incorrect because Availability Sets are scoped to a single datacenter.

- Placing each VM in separate Availability Sets does not protect against datacenter-level outages.

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

### Question 43

A company is planning on using Azure for the various services they offer. They want to ensure that they can bill each department for the resources they consume. They decide to use Azure role-based access control to separate the bills department wise.

Would this fulfil the requirement?

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

✅ No 

Azure RBAC is used to manage access to Azure resources, controlling who can perform what actions on specific resources (e.g., read, write, delete).

It is not used for billing or tracking costs per department.

To track and bill usage per department, resource tagging, Azure Cost Management + Billing, and management groups/subscriptions/resource groups segmentation should be used.

➡️ So, RBAC doesn’t provide billing separation or cost tracking, making this the correct answer.

For more information on Role based access control, please visit the below URL

https://docs.microsoft.com/en-us/azure/role-based-access-control/overview

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

### Question 46

You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.

You receive a notification that VM1 will be affected by maintenance.

You need to move VM1 to a different host immediately.

Solution: From the Overview blade, you move the virtual machine to a different subscription.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No. Moving the virtual machine to a different subscription will not move it to a different host immediately.

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/redeploy-to-new-node

---

### Question 47

You are configuring Azure Firewall to protect your VNet. You need to allow outbound access to specific FQDNs (Fully Qualified Domain Names) while blocking access to all other internet destinations.

How would you configure Azure Firewall to achieve this?

**Options:**

- **A.** Use application rules in Azure Firewall ✅
- **B.** Use a combination of network and application rules
- **C.** Use network rules in Azure Firewall
- **D.** Use DNAT rules in Azure Firewall

**Correct answer:** A

**Explanation:**

You should use **application rules in Azure Firewall** to allow outbound access to specific FQDNs while blocking all other internet traffic.

Here’s why:

**Application Rules for FQDNs:** Application rules in Azure Firewall are specifically designed to filter traffic based on FQDNs. You can define rules that explicitly allow outbound access to a list of allowed FQDNs. The firewall will then automatically resolve these FQDNs to their corresponding IP addresses and allow traffic only to those destinations.

**Implicit Deny:** Azure Firewall has an implicit deny policy by default. This means that any traffic that is not explicitly allowed by a rule is automatically blocked. Therefore, by creating application rules that only allow access to your specific FQDNs, you effectively block all other internet destinations.

Why the other options are not the best fit:

**Network Rules:** Network rules operate at Layer 3 and Layer 4 of the OSI model, focusing on IP addresses and ports. While you could technically create network rules based on the IP addresses of the FQDNs, this approach is not recommended. IP addresses can change, and you would have to constantly update your firewall rules. Application rules handle FQDN resolution automatically.

**Combination of Network and Application Rules:** While you could use a combination, it’s not necessary and adds complexity. Application rules alone are sufficient to achieve the desired outcome.

**DNAT Rules:** DNAT (Destination Network Address Translation) rules are used to translate the destination IP address of traffic. They are typically used for inbound traffic to redirect connections to internal resources. DNAT rules are not relevant for controlling outbound access based on FQDNs.

---

### Question 48

You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.

You receive a notification that VM1 will be affected by maintenance.

You need to move VM1 to a different host immediately.

Solution: From the Redeploy blade, you click Redeploy.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Yes.

Here’s why:

**Redeploying** an Azure virtual machine specifically moves it to a new host within the same Azure region. This is the correct action to take when you need to move a VM to a different host due to planned maintenance or other host-related issues.

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/redeploy-to-new-node

---

### Question 49

You are using Azure Application Gateway as a web application firewall (WAF). You want to protect your application from common web attacks like SQL injection and cross-site scripting. How can you configure WAF rules to mitigate these threats?

**Options:**

- **A.** Enable the default WAF policy. ✅
- **B.** Create custom WAF rules to block specific patterns or keywords.
- **C.** Deploy a third-party WAF solution alongside Application Gateway.
- **D.** Use Azure Security Center to automatically detect and mitigate web attacks.

**Correct answer:** A

**Explanation:**

**Correct Options:**

**A. Enable the default WAF policy.**

- Azure Application Gateway’s WAF comes with a **default WAF policy** that includes pre-configured rules to protect against common web vulnerabilities, such as SQL injection and cross-site scripting (XSS). Enabling the default policy is a quick and effective way to mitigate these threats.

**B. Create custom WAF rules to block specific patterns or keywords.**

- In addition to the default rules, you can create **custom WAF rules** to block specific patterns, keywords, or behaviors that are unique to your application. This allows for more granular control and protection tailored to your specific needs.

The **best answer** between **A** and **B** depends on the context of the question and the level of customization required for your WAF configuration. Let’s break it down:

**A. Enable the default WAF policy.**

- **Strengths**:

- The default WAF policy is pre-configured with rules to protect against common web vulnerabilities, such as SQL injection and cross-site scripting (XSS).

- It is quick and easy to enable, requiring minimal configuration.

- Ideal for organizations that need basic protection without the need for customization.

- **Use Case**:

- Best suited for scenarios where you want to quickly enable protection without tailoring the rules to specific application requirements.

**B. Create custom WAF rules to block specific patterns or keywords.**

- **Strengths**:

- Custom WAF rules allow you to define specific patterns, keywords, or behaviors to block, providing granular control over the protection mechanism.

- Ideal for organizations with unique application requirements or specific security concerns that are not covered by the default rules.

- **Use Case**:

- Best suited for scenarios where you need to tailor the WAF rules to address specific threats or application behaviors.

**Best Answer:**

**A. Enable the default WAF policy.**

- **Reason**: The question specifically asks about protecting against **common web attacks like SQL injection and cross-site scripting**, which are already covered by the default WAF policy. Enabling the default policy is the most straightforward and effective way to mitigate these threats without requiring additional configuration.

**Why Not B?**

While creating custom WAF rules (Option B) is a valid approach, it is more relevant when you need to address **specific or unique threats** that are not covered by the default rules. Since the question focuses on **common web attacks**, the default WAF policy (Option A) is sufficient and more aligned with the exam’s focus on using built-in Azure features effectively.

**Incorrect Options:**

**C. Deploy a third-party WAF solution alongside Application Gateway.**

- While third-party WAF solutions can provide additional features, this option is not necessary when using Azure Application Gateway’s built-in WAF. The built-in WAF is sufficient to protect against common web attacks like SQL injection and XSS.

**D. Use Azure Security Center to automatically detect and mitigate web attacks.**

- Azure Security Center provides threat detection and security recommendations but does not directly configure or enforce WAF rules in Application Gateway. WAF rules must be configured within the Application Gateway settings.

---

### Question 50

You have setup a computer named skillcertlabclient1 that has a point-to-site VPN connection to an Azure virtual network named skillcertlabnetwork. The point-to-site connection makes use of a self-signed certificate. You now have to establish a point-to-site VPN connection to the same virtual network from another computer named skillcertlabclient2. The VPN client configuration package is downloaded and installed on the skillcertlabclient2 computer.

You decide to join the skillcertlabclient2 computer to Azure AD

Would this fulfil the requirement?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

**B. No**

Here’s why:

**Self-signed certificates and VPN connections:** Point-to-site VPN connections using self-signed certificates require the client computer to trust the certificate. This trust is established by installing the certificate on the client computer.

**Azure AD join:** Joining the skillcertlabclient2 computer to Azure AD primarily handles authentication and authorization for Azure resources. It does not automatically install or configure the necessary self-signed certificate for the point-to-site VPN connection.

**VPN client configuration package:** The VPN client configuration package will contain the necessary settings for the VPN connection, but it will not automatically trust a self-signed certificate. That is a task that must be done manually on each machine that will use the VPN.

Therefore, joining the skillcertlabclient2 computer to Azure AD will not automatically establish the point-to-site VPN connection. You must install the self-signed certificate on the skillcertlabclient2 computer.

https://docs.microsoft.com/en-us/azure/vpn-gateway/point-to-site-about

---

### Question 51

A company currently has a set of virtual machines created in a resource group. The virtual machines now need to be moved to a new subscription. Which of the following powershell command should ideally be executed first to facilitate the move?

**Options:**

- **A.** A. Move-AzResource
- **B.** B. Get-AzResource ✅
- **C.** C. Set- AzResource
- **D.** D. Update- AzResource

**Correct answer:** B

**Explanation:**

To facilitate moving virtual machines to a new subscription in Azure using PowerShell, you should first use the Get-AzResource command.

Here’s why:

**Get-AzResource:**

This command retrieves the resource (in this case, the virtual machines) that you want to move.

You need to get the resource’s details before you can move it.

This is the first step to get the resource ID, and other needed information.

**Move-AzResource:**

This command is used to move the resource to a different resource group or subscription.

However, you need the resource information obtained from Get-AzResource before using Move-AzResource.

**Set-AzResource and Update-AzResource:**

These commands are used to modify the properties of an existing resource, not to move it to a different subscription.

Therefore, the correct answer is:

**B. Get-AzResource**

---

### Question 52

A company currently has an on-premise data center. The data center has 2 VPN devices. They also have setup a Virtual Network in Azure. They need to setup a site-to-site VPN connection. It needs to be ensured that if a single instance of an Azure gateway fails, or if a single on-premise VPN device fails, then the failure will not cause an interruption longer than 2 minutes.

Based on the requirement what is the minimum number of Public IP addresses that would be required to be setup in Azure?

**Options:**

- **A.** A. 1
- **B.** B. 2 ✅
- **C.** C. 3
- **D.** D. 4

**Correct answer:** B

**Explanation:**

Correct Answer:

✅ B. 2

To meet the high availability (HA) requirement, the company needs to deploy an Active-Active Azure VPN Gateway.

An Active-Active VPN Gateway requires two public IP addresses because it creates two instances of the VPN Gateway in Azure.

These two public IPs are used to establish separate tunnels to both on-premises VPN devices, ensuring redundancy.

This configuration ensures that if one instance of the VPN gateway or one on-premises VPN device fails, the other tunnel remains active, keeping the downtime under 2 minutes.

Thus, the minimum number of public IP addresses required is 2.

Answers:

❌ A. 1Explanation:

A single Azure VPN Gateway in an Active-Passive mode uses only one public IP address.

If the single VPN Gateway instance fails, there will be a longer downtime while Azure automatically fails over to a new instance.

This setup does not meet the 2-minute failover requirement.

❌ C. 3Explanation:

Active-Active VPN Gateways only require 2 public IP addresses, not 3.

Azure does not support a three-instance VPN Gateway setup, making this option unnecessary.

❌ D. 4Explanation:

4 public IP addresses would only be needed if there were 2 separate VPN Gateways, which is not required for this scenario.

The Active-Active configuration only requires 2 public IPs, making 4 excessive and unnecessary.

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

### Question 54

A company needs to deploy the following architecture to Azure

The architecture would consist of a load balancer that should only accept request via private IP addresses and should not flow via the internet. The Load balancer would direct requests to database servers hosted on Virtual machines.

You need to ensure that all requests for the Remote Desktop protocol for the virtual machine are accepted on a custom port number of 3400. Which of the following is the right powershell command to execute for this requirement?

**Options:**

- **A.** A. New-AzLoadBalancerInboundNatRuleConfig ✅
- **B.** B. New-AzLoadBalancerProbeConfig
- **C.** C. New-AzLoadBalancerRuleConfig
- **D.** D. New-AzLoadBalancer

**Correct answer:** A

**Explanation:**

Correct Answer:

✅ A. New-AzLoadBalancerInboundNatRuleConfig

New-AzLoadBalancerInboundNatRuleConfig is the correct command because Inbound NAT rules are used to forward specific traffic (e.g., RDP on port 3400) to a particular VM.

In this scenario, since RDP traffic on port 3400 needs to be directed to the virtual machines, an Inbound NAT Rule is required.

This command helps configure an Inbound NAT Rule that allows RDP traffic on port 3400 to be forwarded to the target VM.

It ensures that RDP traffic can be securely accessed while the Load Balancer remains private (using private IP addresses).

**Ref: ** New-AzLoadBalancerInboundNatRuleConfig

Answers:

❌ B. New-AzLoadBalancerProbeConfigExplanation:

Health probes are used by the load balancer to monitor the health of backend VMs, ensuring traffic is sent only to healthy instances.

The New-AzLoadBalancerProbeConfig command is used to define these health probes but does not configure inbound NAT rules for RDP access on port 3400.

Since the question requires allowing RDP access, this command is incorrect.

**Ref:  New-AzLoadBalancerProbeConfig**

❌ C. New-AzLoadBalancerRuleConfigExplanation:

Load Balancer rules are used to distribute traffic across multiple backend VMs, defining how traffic is forwarded.

The New-AzLoadBalancerRuleConfig command is used to define rules for load-balancing incoming requests, but it is not used to configure NAT rules for RDP access.

Since the requirement is not about distributing RDP traffic across multiple VMs but rather redirecting it to a specific VM, this command is incorrect.

**Ref: New-AzLoadBalancerRuleConfig**

❌ D. New-AzLoadBalancerExplanation:

New-AzLoadBalancer is used to create a new Azure Load Balancer.

However, the question specifically asks for a command to allow RDP access on a custom port (3400), which requires an Inbound NAT rule, not just creating a load balancer.

Since this command does not configure NAT rules or allow RDP access, it is incorrect.

**Ref: New-AzLoadBalancer**

---
