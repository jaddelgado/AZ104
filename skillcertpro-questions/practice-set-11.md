# Practice Set 11

Source: [https://skillcertpro.com/az-104-exam-questions/11/](https://skillcertpro.com/az-104-exam-questions/11/)
Total questions: 56

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

### Question 4

You have an Azure App Service web app named app1.

You configure autoscaling as shown below.

You configure the autoscale rule criteria as shown below.

Based on the information presented in the graphic, select the answer choice that completes the following statement correctly.

**“After CPU usage has reached 80 percent for 15 minutes, _________________ will be running.”**

**Options:**

- **A.** 1 instance
- **B.** 2 instances ✅
- **C.** 3 instances
- **D.** 4 instances
- **E.** 5 instances

**Correct answer:** B

**Explanation:**

### Correct

**Option B: 2 instances**

**Standard Azure App Service autoscale behavior**: CPU &gt; 80% for 15 minutes triggers **scale-out by 1 instance**. Starting from **default 1 instance**, scales to **2 instances** after first rule triggers.

### Incorrect

**A: 1 instance** ❌ **No scaling occurred**

**C: 3 instances** ❌ **Requires second trigger cycle**

**D: 4 instances** ❌ **Beyond single rule scope**

**E: 5 instances** ❌ **Maximum typically higher**

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

### Question 6

You have a Microsoft Entra tenant named contoso.com.

You have two external partner organizations named fabrikam.com and litwareinc.com. Fabrikam.com is configured as a connected organization.

You create an access package as shown in the Access package exhibit.

You configure the external user lifecycle settings as shown in the Lifecycle exhibit

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“After 365 days, fabrikam.com users will be removed from Group1.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- **Correct because**:

- In Microsoft Entra ID Governance, when you configure **external user lifecycle settings** with an expiration period (365 days in this case), external users who were granted access through the access package will automatically have their access revoked after the expiration.

- Since **fabrikam.com** is a connected organization and its users are included in the access package, they will be **removed from Group1 after 365 days**.

### Incorrect

**Option B. No**

- Incorrect because lifecycle settings explicitly enforce expiration.

- Fabrikam.com users will not retain indefinite access; they will be removed once the 365‑day period ends unless reapproved or reassigned.

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

### Question 8

Your organization is looking to implement a CI/CD (Continuous Integration/Continuous Deployment) pipeline for deploying Azure resources using ARM templates or Bicep files. Which Azure DevOps tools or services can you use to automate the deployment process and manage different stages of the pipeline?

**Options:**

- **A.** Azure Artifacts
- **B.** Azure Pipelines ✅
- **C.** Azure Repos ✅
- **D.** GitHub Actions
- **E.** Azure Test Plans

**Correct answer:** B, C

**Explanation:**

### Correct

**Option B: Azure Pipelines**

Azure Pipelines orchestrates the full CI/CD pipeline – builds ARM/Bicep templates, runs validation, and deploys to Azure resources across multiple stages and environments.

**Option C: Azure Repos**

Azure Repos provides Git repository hosting with branch policies, PR workflows, and source control integration required to trigger pipeline execution on code commits.

### Incorrect

**Option A: Azure Artifacts**

Manages package feeds (NuGet, npm) but doesn’t execute deployments or manage pipeline stages.

**Option D: GitHub Actions**

Third-party CI/CD service; not native Azure DevOps tool for AZ-104 exam scope.

**Option E: Azure Test Plans**

Manual/automated testing management; not for infrastructure deployment pipelines.

---

### Question 9

You have an Azure subscription that contains the resources shown in the following table.

NSG1 is configured as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM1 can access storage1.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

### **Option A: Yes**

### intra-VNet access permitted by default.

### 
**Option B: No**

### no deny rule blocks storage ports.

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

### Question 11

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the virtual machines shown in the following table.

The subscription contains the Azure App Service web apps shown in the following table.

For the statement below, select Yes if the statement is true. Otherwise select No.

**“NSG1 controls inbound traffic to WebApp1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**Correct **

**Option B (No):** Microsoft Azure Administrator exams test core networking fundamentals. Network Security Groups (NSGs) control inbound traffic to Azure Virtual Machines and other IaaS resources, but Azure App Service web apps operate on a managed PaaS platform where inbound traffic is controlled by App Service networking features (VNet integration, private endpoints, IP restrictions), not NSGs.

**Incorrect**

**Option A (Yes):** NSGs don’t apply to App Service; attempting to associate an NSG with App Service has no effect on its inbound traffic filtering.

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

### Question 14

You have an Azure subscription that uses Azure Container Instances.

You have a computer that has Azure Command-Line Interface (CLI) and Docker installed.

You create a container image named image1.

You need to provision a new Azure container registry and add image1 to the registry.

Which command should you run to add image1 to the registry?

**Options:**

- **A.** az acr create
- **B.** az container create
- **C.** docker pull
- **D.** docker push ✅

**Correct answer:** D

**Explanation:**

**Correct:**

**Option D. docker push**

To add a locally built container image to an Azure Container Registry (ACR), you must push the image to the registry using Docker. After creating the ACR and tagging the image with the registry’s login server name, the docker push command uploads (adds) **image1** to the registry. This is the required step to make the image available for Azure Container Instances and other Azure services.

**Incorrect:**

**Option A. az acr create**

This command is used to create a new Azure Container Registry resource, not to upload or add a container image to the registry. It provisions the registry but does not store images.

**Option B. az container create**

This command is used to deploy a container instance in Azure Container Instances. It does not upload images to a container registry and assumes the image already exists in a registry.

**Option C. docker pull**

The docker pull command downloads an image from a registry to a local machine. It performs the opposite action of what is required and does not add an image to Azure Container Registry.

---

### Question 15

Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com. The domain contains the servers shown in the following table.

You plan to migrate contoso.com to Azure.

You create an Azure virtual network named VNET1 that has the following settings:

- Address space: 10.0.0.0/16

- Subnet:

- Name: Subnet1

- IPv4: 10.0.1.0/24

You need to move DC1 to VNET1. The solution must ensure that the member servers in contoso.com can resolve AD DS DNS names.

How would you configure the** IP address**?

**Options:**

- **A.** Obtain an IP address automatically. ✅
- **B.** Use 10.0.1.3
- **C.** Use 10.0.2.1
- **D.** Use 192.168.2.1

**Correct answer:** A

**Explanation:**

### **Correct**

- **Option A. Obtain an IP address automatically**

- Correct: In Azure, domain controllers (DCs) should be configured to **obtain their IP address automatically via DHCP**.

- Azure assigns a **static private IP** to VMs internally when DHCP is enabled. This ensures proper DNS registration and avoids conflicts.

- Manually assigning IPs (like 10.0.1.3) is not recommended for DCs in Azure because it bypasses Azure’s IP management and can cause DNS resolution issues.

### **Incorrect**

- **Option B. Use **10.0.1.3

- Incorrect: While this IP is within the correct subnet (10.0.1.0/24), manually assigning it is not best practice in Azure. DHCP must be used to ensure proper DNS and IP management.

- **Option C. Use **10.0.2.1

- Incorrect: This IP is outside the defined subnet (10.0.1.0/24). It would not be valid for Subnet1 and would break connectivity.

- **Option D. Use **192.168.2.1

- Incorrect: This IP is outside the VNET1 address space (10.0.0.0/16). It cannot be used in this Azure virtual network.

---

### Question 16

You have an Azure subscription that contains a user named User1.

You need to ensure that User1 can deploy virtual machines and manage virtual networks.

The solution must use the principle of least privilege.

Which role-based access control (RBAC) role should you assign to User1?

**Options:**

- **A.** Owner
- **B.** Virtual Machine Contributor
- **C.** Contributor ✅
- **D.** Virtual Machine Administrator Login

**Correct answer:** C

**Explanation:**

**Correct:**

**Option C. Contributor**

The **Contributor** role allows a user to create and manage all Azure resources, including **virtual machines** and **virtual networks**, but does not allow granting access to others. This satisfies the requirement to deploy VMs and manage VNets while still following the principle of least privilege compared to Owner.

**Incorrect:**

**Option A. Owner**

The **Owner** role includes full management permissions plus the ability to assign RBAC roles. This exceeds the required permissions and violates the principle of least privilege.

**Option B. Virtual Machine Contributor**

The **Virtual Machine Contributor** role allows management of virtual machines but does **not** allow managing virtual networks. Since VM deployments typically require network configuration, this role is insufficient.

**Option D. Virtual Machine Administrator Login**

This role only allows users to log in to virtual machines (via SSH or RDP). It does not grant permissions to create or manage VMs or virtual networks.

---

### Question 17

You have an Azure subscription linked to a hybrid Microsoft Entra tenant. The tenant contains the users shown in the following table.

You create the Azure Files shares shown in the following table.

You configure identity-based access for contoso2024 as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User2 can access the content in share3.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**Correct:**

**Option B. No**

User2 cannot access the content in **share3**. With Azure Files identity-based access in a hybrid Microsoft Entra (Azure AD) setup, access depends on both the configured share-level role assignments (RBAC) and the underlying NTFS permissions. Based on the exhibit configuration, User2 is not granted the required permissions for **share3**, so access is denied.

**Incorrect:**

**Option A. Yes**

This would only be correct if User2 had the appropriate Azure Files share-level role (such as Storage File Data SMB Share Reader/Contributor) assigned for **share3** and matching NTFS permissions. Since those permissions are not present in the given configuration, User2 cannot access the share.

---

### Question 18

You have two Azure subscriptions named Sub1 and Sub2. Sub1 is in a management group named MG1. Sub2 is in a management group named MG2.

You have the resource groups shown in the following table.

You have the virtual machines shown in the following table.

You assign roles to users as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“User2 can manage disks and disk snapshots of VM1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**Correct:**

**Option B. No**

User2 cannot manage disks and disk snapshots of VM1. In Azure, role-based access control (RBAC) permissions apply only within the scope at which the role is assigned and any child scopes. Since Sub1 and Sub2 belong to different management groups (MG1 and MG2), permissions assigned in one management group or subscription do not automatically apply to resources in another. Therefore, User2 does not have the required permissions on the subscription, resource group, or VM scope where VM1 resides to manage its disks or snapshots.

**Incorrect:**

**Option A. Yes**

This is incorrect because Azure RBAC does not grant cross-management-group or cross-subscription access unless the role assignment is explicitly scoped at a higher level (such as a parent management group or tenant root) or directly on the target subscription or resource. User2 lacks the necessary scoped permissions to manage VM1 disks and snapshots.

---

### Question 19

You have an Azure subscription that has the public IP addresses shown in the following table.

You plan to deploy an Azure Bastion Basic SKU host named Bastion1.

Which IP addresses can you use for Bastion1?

**Options:**

- **A.** IP1 only ✅
- **B.** IP1 and IP2 only
- **C.** IP3, IP4, and IP5 only
- **D.** IP1, IP2, IP4, and IP5 only
- **E.** IP1, IP2, IP3, IP4, and IP5

**Correct answer:** A

**Explanation:**

**Correct:**

**Option A. IP1 only**

Azure Bastion **Basic SKU** requires a **Standard SKU, static, IPv4 public IP address** that is **not zone-redundant** and is **dedicated exclusively to the Bastion host**.

Based on the table in the question, **only IP1** meets all these requirements, so it is the only valid choice for deploying Bastion1.

**Incorrect:**

**Option B. IP1 and IP2 only**

IP2 does not meet the Azure Bastion Basic SKU requirements, such as the correct SKU, allocation method, or supported configuration, and therefore cannot be used.

**Option C. IP3, IP4, and IP5 only**

These IP addresses do not satisfy the mandatory Bastion requirements, which include using a Standard SKU static IPv4 public IP.

**Option D. IP1, IP2, IP4, and IP5 only**

Although IP1 is valid, the inclusion of IP2, IP4, and IP5 makes this option incorrect because those IPs are not supported for Azure Bastion Basic.

**Option E. IP1, IP2, IP3, IP4, and IP5**

This option incorrectly assumes that all listed public IPs can be used, but Azure Bastion Basic supports only a very specific public IP configuration, which is met by IP1 alone.

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

### Question 22

You have an Azure subscription. Users access the resources in the subscription from either home or from customer sites. From home, users must establish a point-to-site VPN to access the Azure resources. The users on the customer sites access the Azure resources by using site-to-site VPNs.

You have a line-of-business-app named App1 that runs on several Azure virtual machine. The virtual machines run Windows Server 2016. You need to ensure that the connections to App1 are spread across all the virtual machines.

What are two possible Azure services that you can use?

**Options:**

- **A.** an internal load balancer ✅
- **B.** a public load balancer
- **C.** an Azure Content Delivery Network (CDN)
- **D.** Traffic Manager
- **E.** an Azure Application Gateway ✅

**Correct answer:** A, E

**Explanation:**

### Correct

**option A. Internal load balancer**

Private IP distributes TCP/UDP traffic across VMs.

**option E. Azure Application Gateway**

Internal VNet mode balances HTTP/HTTPS to VM pool.

### Incorrect

**option B. Public load balancer**

Requires public IP endpoint.

**option C. Azure CDN**

Static content caching only.

**option D. Traffic Manager**

DNS routing; no Layer 4/7 distribution.

---

### Question 23

You need to configure a custom error page for your Azure App Service web app to display a friendly message to users when an error occurs.

How can you create and configure a custom error page in App Service?

**Options:**

- **A.** Use the Application settings in the Azure portal to define custom error handling
- **B.** Deploy a custom error page to the wwwroot folder of your App Service and configure it via the Azure portal ✅
- **C.** Configure a custom error page using the web.config file in the sites root directory ✅
- **D.** Use the Error Pages feature in the Azure portal to define a custom error page

**Correct answer:** B, C

**Explanation:**

**Correct**

**Option B (Deploy a custom error page to the wwwroot folder of your App Service and configure it via the Azure portal):** Custom error pages require deploying HTML files to wwwroot, then using the portal’s Error Pages feature to map HTTP status codes to those files.

**Option C (Configure a custom error page using the web.config file in the site’s root directory):** web.config’s &lt;httpErrors&gt; section allows precise mapping of error codes to custom pages for Windows-based App Services.

**Incorrect**

**Option A (Use the Application settings in the Azure portal to define custom error handling):** Application settings manage connection strings and app configs, not HTTP error page mappings.

**Option D (Use the Error Pages feature in the Azure portal to define a custom error page):** The portal feature configures existing deployed files; it doesn’t create or define pages standalone without wwwroot deployment.

---

### Question 24

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.

Another administrator plans to create several network security groups (NSGs) in the subscription. You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.

Solution: You assign a built-in policy definition to the subscription.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**Correct:**

**Option B. No**

Assigning a built-in Azure Policy definition at the subscription level does not automatically configure NSGs to block a specific TCP port between virtual networks. Built-in policies are typically used to audit, deny, or enforce compliance conditions, not to dynamically create or modify NSG security rules upon resource creation. To automatically block TCP port 8080, you would need a policy with a DeployIfNotExists effect (often custom) or an automated mechanism such as Azure Policy with remediation, Azure Automation, or an Azure Blueprint.

**Incorrect:**

**Option A. Yes**

Simply assigning a built-in policy definition does not meet the requirement because built-in policies do not, by default, inject specific inbound or outbound NSG rules. Without a policy designed to deploy or enforce a deny rule for TCP port 8080, the NSGs created by another administrator would not automatically block that traffic.

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

### Question 26

You need to configure a site-to-site VPN connection between your on-premises network and an Azure virtual network. Which VPN gateway type would you choose for the Azure side of the connection, and what are the considerations for selecting the appropriate gateway SKU?

**Options:**

- **A.** A. Point-to-site VPN gateway
- **B.** B. ExpressRoute gateway
- **C.** C. VNet-to-VNet VPN gateway
- **D.** D. Route-based VPN gateway ✅

**Correct answer:** D

**Explanation:**

### Correct

**option D. Route-based VPN gateway**

Route-based gateways use a routing table for traffic direction and support IPsec/IKEv1 or IKEv2, making them essential for site-to-site VPNs with dynamic routing capabilities and SKU options like VpnGw1 through VpnGw5 based on bandwidth needs.

### Incorrect

**option A. Point-to-site VPN gateway **

Designed for individual client connections using SSTP or IKEv2, not for connecting entire on-premises networks.

**option B. ExpressRoute gateway **

Provides private, dedicated fiber connections to Azure, not IPsec VPN over the public internet.

**option C. VNet-to-VNet VPN gateway **

Used for connecting Azure virtual networks to each other, not for on-premises site-to-site links.

---

### Question 27

You plan to automate the deployment of a virtual machine scale set that uses the Windows Server 2016 Datacenter image.

You need to ensure that when the scale set virtual machines are provisioned, they have web server components installed.

Which two actions should you perform?

**Options:**

- **A.** Upload a configuration script ✅
- **B.** Create an automation account
- **C.** Create an Azure policy
- **D.** Modify the extensionProfile section of the Azure Resource Manager template ✅
- **E.** Create a new virtual scale set in the Azure portal

**Correct answer:** A, D

**Explanation:**

### Correct

**Option A: Upload a configuration script** ✓

**Custom Script Extension** runs PowerShell script on VMSS instances during provisioning. Script installs IIS web server components automatically.

**Option D: Modify the extensionProfile section of the ARM template** ✓

**VMSS ARM template** includes extensionProfile with **CustomScriptExtension**. Specifies script URI + commandToExecute for web server installation.

### Incorrect

**Option B: Create an automation account** ❌

**Runbooks for scheduled/orchestrated tasks**. Not for VMSS initial provisioning.

**Option C: Create an Azure policy** ❌

**Compliance/enforcement**. Cannot install software during deployment.

**Option E: Create scale set in Azure portal** ❌

**Manual UI process**. No automation or configuration script capability.

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

### Question 30

You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.

Another administrator plans to create several network security groups (NSGs) in the subscription.

You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.

Solution: You create a resource lock, and then you assign the lock to the subscription.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**option B. No**

Resource locks do not apply NSG rules or control traffic between virtual networks upon creation.

### Incorrect

**option A. Yes**

Locks protect resources from changes but have no effect on NSG rule automation or port blocking.

---

### Question 31

A company has just set up an Azure account and subscription. Senior management wants to keep control on costs during the initial deployment of resources. Which of the following can be used to keep costs under control?

**Options:**

- **A.** A. Use the pricing calculator to calculate the costs beforehand.
- **B.** B. Create a budget and then an action group to notify when thresholds are breached. ✅
- **C.** C. Use the Azure Advisor to notify when costs are being breached.
- **D.** D. Use resource tags for all resources

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Create a budget and then an action group to notify when thresholds are breached**

- **Correct** because Azure **Cost Management + Billing** allows you to create **budgets** that track spending against predefined thresholds.

- You can configure **action groups** to send alerts (email, SMS, webhook, etc.) when spending approaches or exceeds the budget.

- This is the recommended way to **actively monitor and control costs** in Azure subscriptions.

- Key exam concept: **Budgets + action groups = proactive cost control.**

### Incorrect

**Option A. Use the pricing calculator to calculate the costs beforehand**

- **Incorrect** because the **Azure Pricing Calculator** is useful for estimating costs before deployment, but it does not provide **ongoing monitoring or alerts** once resources are deployed.

- It helps with planning, not active cost control.

**Option C. Use the Azure Advisor to notify when costs are being breached**

- **Incorrect** because **Azure Advisor** provides **recommendations** for cost optimization (e.g., right‑sizing VMs, reserved instances), but it does not notify when budgets are breached.

- It is advisory, not enforcement.

**Option D. Use resource tags for all resources**

- **Incorrect** because **tags** help with **resource organization and cost allocation** (e.g., by department or project), but they do not enforce or notify about cost thresholds.

- Tags are useful for reporting, not for controlling costs directly.

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

### Question 35

You are implementing a hybrid cloud environment, and you need to extend your on-premises network to Azure. Which Azure networking service allows you to create a secure tunnel between your on-premises network and Azure virtual networks?

**Options:**

- **A.** ExpressRoute
- **B.** VNet Peering
- **C.** VPN Gateway ✅
- **D.** Azure Bastion

**Correct answer:** C

**Explanation:**

**Correct:**

**Option C. VPN Gateway**

An **Azure VPN Gateway** enables you to create a **secure, encrypted tunnel (site-to-site VPN)** between your on-premises network and an Azure virtual network over the public Internet. This is the standard and cost-effective solution for extending on-premises networks to Azure in a hybrid cloud setup.

**Incorrect:**

**Option A. ExpressRoute**

ExpressRoute provides a **private, dedicated connection** between on-premises infrastructure and Azure, not a VPN tunnel. While it is secure and suitable for hybrid environments, it does not create a VPN tunnel and is typically used for high-bandwidth, low-latency requirements.

**Option B. VNet Peering**

VNet peering connects **Azure virtual networks to each other**, not on-premises networks to Azure.

**Option D. Azure Bastion**

Azure Bastion is used for **secure RDP/SSH access to virtual machines** through the Azure portal and does not provide network connectivity between on-premises and Azure networks.

---

### Question 36

**Scenario:** You have an Azure subscription with virtual machines (VM1 and VM2). You deploy a **Standard Internal Load Balancer (LB1)** in **VNET1**. You need to ensure VM1 and VM2 can be added to the backend pool of LB1. The proposed solution is: Create two Standard public IP addresses and associate a Standard SKU public IP address to the NIC of each VM. The question asks: Does this meet the goal?.

You deploy a load balancer that has the following configurations:

Name: LB1

Type: Internal

SKU: Standard

Virtual network: VNET1

You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.

Solution: You create two Standard public IP addresses and associate a Standard SKU public IP address to the network interface of each virtual machine.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- **Correct because**:

- LB1 is an **Internal Load Balancer (ILB)**, which balances traffic **inside the virtual network**.

- To add VM1 and VM2 to the backend pool, they only need to be in the **same VNet/subnet** as the load balancer and use **Standard SKU NICs/IPs**.

- Associating **public IP addresses** is unnecessary for internal load balancers.

- In fact, adding public IPs does not enable backend pool membership—it only exposes the VMs externally, which is not required here.

- The correct approach is to ensure VM1 and VM2 have **NICs with Standard SKU private IPs** in VNET1.

### Incorrect

**Option A. Yes**

- Incorrect because while public IPs can be associated with VMs, they do not affect backend pool membership for an **internal load balancer**.

- This solution does not meet the goal and introduces unnecessary exposure of VMs to the internet.

###

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

### Question 40

You have a virtual network named skillcertpro-net as shown in the exhibit.

You need to peer skillcertpro-net to another virtual network named skillcertpro-net-2 in the same region. skillcertpro-net-2 has an address space of 10.2.0.0/16. You have to ensure that you can create the peering connection. Which of the following would you carry out to fulfil this requirement?

**Options:**

- **A.** A. Modify the address space of skillcertpro-net. ✅
- **B.** B. Configure a service endpoint on skillcertpro-net-2.
- **C.** C. Add a gateway subnet to skillcertpro-net.
- **D.** D. Create a subnet on skillcertpro-net and skillcertpro-net-2.

**Correct answer:** A

**Explanation:**

**Correct **

**Option A. Modify the address space of skillcertpro-net.**

**VNet Peering Prerequisites:**

text

✅ Non-overlapping address spaces ✓

✅ Same region (stated ✓)

✅ Both directions configured

✅ /0 not allowed

**Why Address Space Modification:**

**Scenario:** skillcertpro-net-2 likely has subnet within skillcertpro-net‘s range (e.g., 10.0.1.0/24 inside 10.0.0.0/16).

**Solution:** Expand skillcertpro-net to 10.1.0.0/16 or shrink to 10.0.0.0/23, ensuring no overlap.

**Incorrect **

**Option B. Configure service endpoint**

❌ **Wrong feature** – Service Endpoints optimize **PaaS service access** (Storage, SQL), **not VNet-to-VNet connectivity**.

**Option C. Add gateway subnet**

❌ **Wrong use case** – Gateway Subnet required for **VPN/ExpressRoute**, **not VNet peering** (direct backbone routing).

**Option D. Create subnet**

❌ **Irrelevant** – Subnets don’t affect peering eligibility. **Address space overlap** is VNet-level issue.

---

### Question 41

You create an App Service plan named Plan1 and an Azure web app named webapp1. You discover that the option to create a staging slot is unavailable. You need to create a staging slot for Plan1.

What should you do first?

**Options:**

- **A.** From Plan1, scale up the App Service plan ✅
- **B.** From webapp1, modify the Application settings
- **C.** From webapp1, add a custom domain
- **D.** From Plan1, scale out the App Service plan

**Correct answer:** A

**Explanation:**

**Correct**

**Option A (From Plan1, scale up the App Service plan):** Staging slots require Standard tier or higher. Free/Shared/Basic tiers don’t support slots; scaling up to Standard/Premium unlocks deployment slot functionality.

**Incorrect**

**Option B (From webapp1, modify the Application settings):** App settings don’t enable slot capability; tier restriction is at App Service Plan level.

**Option C (From webapp1, add a custom domain):** Domain configuration is unrelated to slot availability requirements.

**Option D (From Plan1, scale out the App Service plan):** Scale out (adding instances) doesn’t enable slots; scale up (higher tier) is required for slot support.

---

### Question 42

**Scenario:** You have an **Azure virtual machine (VM1)** running **Windows Server 2019**. You save VM1 as a template named **Template1** in the **Azure Resource Manager (ARM) library**. You plan to deploy a new VM (VM2) from Template1. The question asks: What can you configure during the deployment of VM2?

**Options:**

- **A.** A. operating system
- **B.** B. administrator username ✅
- **C.** C. virtual machine size ✅
- **D.** D. resource group ✅

**Correct answer:** B, C, D

**Explanation:**

### Correct

**Option B. Administrator username**

- **Correct because**: When deploying a VM from an ARM template, you can configure **administrative credentials** (username and password/SSH key).

- This is required to access the VM after deployment.

**Option C. Virtual machine size**

- **Correct because**: You can select or change the **VM size (SKU)** during deployment.

- This allows you to adjust compute resources (CPU, memory) to meet workload requirements.

**Option D. Resource group**

- **Correct because**: You can choose or create a **resource group** to contain the new VM.

- Resource groups are always configurable during deployment.

### Incorrect

**Option A. Operating system**

- **Incorrect because**: The operating system is already defined in the template (Windows Server 2019 in this case).

- You cannot change the OS during deployment from the saved template.

###

---

### Question 43

Your company has three offices. The offices are located in Miami, Los Angeles, and New York. Each office contains datacenter.

You have an Azure subscription that contains resources in the East US and West US Azure regions. Each region contains a virtual network. The virtual networks are peered. You need to connect the datacenters to the subscription. The solution must minimize network latency between the data centers.

What should you create?

**Options:**

- **A.** three Azure Application Gateways and one On-premises data gateway
- **B.** two virtual hubs and one virtual WAN ✅
- **C.** three virtual WANs and one virtual hub
- **D.** three On-premises data gateways and one Azure Application Gateway

**Correct answer:** B

**Explanation:**

### Correct

**option B – two virtual hubs and one virtual WAN**

Create one Virtual WAN containing two virtual hubs (East US, West US). Connect datacenters via site-to-site VPN/ExpressRoute to nearest hub. Virtual WAN automatically optimizes routing and minimizes latency through hub-to-hub mesh connectivity.

### Incorrect

**option A – three Azure Application Gateways and one On-premises data gateway**

Application Gateways handle web traffic load balancing, not hybrid datacenter connectivity.

**option C – three virtual WANs and one virtual hub**

Virtual WANs are containers; multiple WANs cannot share hubs. Architecture is reversed.

**option D – three On-premises data gateways and one Azure Application Gateway**

On-premises data gateways connect Power BI/PowerApps to on-premises data, not network connectivity to Azure VNets.

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

### Question 46

A company is planning on using Azure for the various services they offer. They want to ensure that they can bill each department for the resources they consume. They decide to use Azure policies to separate the bills department wise.

Would this fulfil the requirement?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

**Correct**

**Option B. No**

because **Azure Policies** are used to enforce compliance and governance (such as restricting resource types, enforcing naming conventions, or requiring tags). They do not provide billing or cost allocation capabilities. To bill each department for resources consumed, the company should use **tags** (like Department or CostCenter) combined with **Azure Cost Management + Billing** to track and allocate costs.

**Incorrect**

**Option A. Yes**

because Azure Policies cannot directly handle billing or chargeback. While policies can enforce tagging to support cost tracking, they do not themselves perform billing. Assuming policies alone can manage departmental billing is incorrect.

**Option B. No**

because **Azure Policies** are used to enforce compliance and governance (such as restricting resource types, enforcing naming conventions, or requiring tags). They do not provide billing or cost allocation capabilities. To bill each department for resources consumed, the company should use **tags** (like Department or CostCenter) combined with **Azure Cost Management + Billing** to track and allocate costs.

**Incorrect**

**Option A. Yes**

because Azure Policies cannot directly handle billing or chargeback. While policies can enforce tagging to support cost tracking, they do not themselves perform billing. Assuming policies alone can manage departmental billing is incorrect.

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

### Question 48

A company has the following resources deployed to their Azure subscription

The virtual machine “skillcertlabvm” is currently in the running state.

The company now assigns the below Azure policy

The Not Allowed resources types are

Microsoft.Network/virtualNetworks

Microsoft/Compute/virtualMachines

Would the state of the virtual machine change to deallocated?

**Options:**

- **A.** A. Yes
- **B.** B. No ✅

**Correct answer:** B

**Explanation:**

**   Correct **

**     Option:** **B. No**

**Incorrect**

** Option:**  **A. Yes** → Wrong, because Azure Policy does not stop existing running VMs.

---

### Question 49

You have a virtual network named VNet1 that has the configuration shown in the following exhibit:

Before a virtual machine on VNet1 can receive an IP address from 10.2.1.0/24, you must first ………. .

**Options:**

- **A.** add a network interface
- **B.** add a subnet ✅
- **C.** add an address space
- **D.** delete a subnet
- **E.** delete an address space

**Correct answer:** B

**Explanation:**

**Correct:**

**Option B. add a subnet**

In Azure, IP addresses are assigned to virtual machines from a subnet, not directly from the virtual network address space. Even if VNet1 includes the 10.2.1.0/24 range in its address space, a VM cannot receive an IP address from that range until a subnet using 10.2.1.0/24 is created. Subnets are mandatory for IP allocation.

**Incorrect:**

**Option A. add a network interface**

A network interface is required for a VM, but it does not determine the IP address range. The IP address is allocated from the subnet associated with the network interface. Without an appropriate subnet, adding a NIC alone is insufficient.

**Option C. add an address space**

The 10.2.1.0/24 range already exists in the virtual network’s address space (as implied by the question). Address spaces define the overall IP ranges for the VNet, but IPs are not assigned directly from them—only from subnets.

**Option D. delete a subnet**

Deleting a subnet does not enable IP address assignment. It would reduce available IP ranges and could break existing resources rather than allow a VM to receive an IP address.

**Option E. delete an address space**

Removing an address space would further restrict available IP ranges in the virtual network and prevent IP assignment instead of enabling it.

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

### Question 51

A company is planning on hosting the following infrastructure in Azure

A web server listening on port 80

The web server would be hosted on an Azure Windows virtual machine

The web server would connect to a database server

The database server would be hosted using the Azure SQL database service

The company needs to ensure that when users go to the URL http://skillcertlab.com on the Internet , they are directed to the web server running on the virtual machine. Which of the following service could help fulfil this requirement?

**Options:**

- **A.** A. Azure Load Balancer
- **B.** B. Azure DNS ✅
- **C.** C. Azure Application Gateway
- **D.** D. Azure Virtual Network Peering

**Correct answer:** B

**Explanation:**

**Correct **

**Option B (Azure DNS):** Azure DNS provides domain name resolution for the web server, enabling external clients to reach the Windows VM listening on port 80 via a friendly hostname rather than a raw IP address.

**Incorrect**

**Option A:** Azure Load Balancer (Layer 4) handles TCP/UDP traffic distribution across multiple VMs; single web server doesn’t require load balancing.

**Option C:** Azure Application Gateway (Layer 7) provides web application firewall, URL routing, SSL termination; overkill for basic port 80 web server hosting.

**Option D:** Azure Virtual Network Peering connects VNets for resource communication; irrelevant for external web server accessibility.

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

### Question 53

You are developing a Bicep file to deploy a network security group (NSG). You need to define inbound and outbound security rules to control network traffic. How would you structure the NSG resource definition and specify the rule properties within the Bicep file?

**Options:**

- **A.** Define the ‘securityRules‘ property within the NSG resource definition ✅
- **B.** Group rules logically using the ‘securityRules‘ property
- **C.** Specify the ‘direction‘, ‘priority‘, ‘name‘, and ‘access‘ properties for each rule
- **D.** Use the ‘dependsOn‘ property to manage dependencies between rules

**Correct answer:** A

**Explanation:**

**Correct:**

**Option A. Define the ‘securityRules’ property within the NSG resource definition**

In a Bicep file, inbound and outbound rules for a Network Security Group are defined directly inside the NSG resource using the securityRules array. This is the correct structure for specifying NSG rules in declarative infrastructure code.

**Incorrect:**

**Option B. Group rules logically using the ‘securityRules’ property**

While securityRules does contain all rules, “grouping rules logically” is a conceptual description rather than a concrete requirement or structural instruction in Bicep. The platform does not support logical grouping beyond listing rules in the array.

**Option C. Specify the ‘direction’, ‘priority’, ‘name’, and ‘access’ properties for each rule**

These properties are indeed required for individual security rules, but this option alone does not answer how to structure the NSG resource definition. The key structural requirement is defining the securityRules property within the NSG resource.

**Option D. Use the ‘dependsOn’ property to manage dependencies between rules**

NSG rules do not have dependencies on each other. The dependsOn property is used for resource-level dependencies, not for ordering or managing NSG rule definitions.

---

### Question 54

You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles:

– Reader

– Security Admin

– Security Reader

You need to ensure that User1 can assign the Reader role for VNet1 to other users.

What should you do?

**Options:**

- **A.** Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.
- **B.** Assign User1 the Owner role for VNet1. ✅
- **C.** Remove User1 from the Security Reader and Reader roles for Subscription1.
- **D.** Assign User1 the Network Contributor role for RG1.

**Correct answer:** B

**Explanation:**

**Correct **

**option B. Assign User1 the Owner role for VNet1.**

Owner role includes Microsoft.Authorization/roleAssignments/write permission, allowing User1 to assign Reader role specifically for VNet1.

**Incorrect **

**option A. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.**

Contributor lacks role assignment permissions. Security roles don’t block RBAC assignments.

**option C. Remove User1 from the Security Reader and Reader roles for Subscription1.**

Reader/Security Reader roles don’t prevent role assignments. No new permissions granted.

**option D. Assign User1 the Network Contributor role for RG1.**

Network Contributor manages networks but lacks Microsoft.Authorization permissions for role assignments.

---

### Question 55

An IT admin for a company’s Azure account needs to create an Azure Policy. The main purpose of the Azure policy is to ensure that only Load balancers of a certain SKU are allowed to be created in the company’s Azure subscription.

Below is the snippet of the Azure Policy

Which of the following would go into Slot3?

**Options:**

- **A.** A. Allow
- **B.** B. Deny ✅
- **C.** C. Accept
- **D.** D. Create

**Correct answer:** B

**Explanation:**

**Correct **

**Option B. Deny**

**Azure Policy “Deny” effect** prevents creation of Load Balancers with unauthorized SKUs by **blocking deployment** at resource provisioning time.

**Policy Definition Example:**

json

{

  "if": {

    "allOf": [

      {

        "field": "type",

        "equals": "Microsoft.Network/loadBalancers"

      },

      {

        "not": {

          "field": "Microsoft.Network/loadBalancers/sku.name",

          "in": ["Standard"]  // Only allow Standard SKU

        }

      }

    ]

  },

  "then": {

    "effect": "deny"

  }

}

**Incorrect **

**Option A. Allow**

❌ **Does nothing** – “Allow” effect permits all actions (no enforcement).

**Option C. Accept**

❌ **Not a valid Azure Policy effect**.

**Option D. Create**

❌ **Not a valid Azure Policy effect**

---

### Question 56

**Scenario:** A team member has created a **Point‑to‑Site (P2S) VPN connection** between a computer named WorkstationA and an Azure Virtual Network. Another P2S VPN connection needs to be created between the same computer. The statement asks whether this is possible.

**Options:**

- **A.** A.Yes ✅
- **B.** B.No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- **Correct because**:

- A single client computer can establish **multiple Point‑to‑Site VPN connections** to different Azure Virtual Networks.

- Each connection requires its own **VPN client configuration package**.

- The only requirement is that the **address spaces of the VNets must not overlap**, otherwise routing conflicts occur.

- This is a supported Azure scenario, often used when connecting to multiple VNets for different workloads.

### Incorrect

**Option B. No**

- **Incorrect because**:

- Azure does not restrict a client machine to only one P2S VPN connection.

- The limitation is not on the number of connections but on proper configuration (non‑overlapping address ranges, certificates, and routing).

- Saying “No” ignores the fact that Azure supports multiple P2S connections from the same client.

###

---
