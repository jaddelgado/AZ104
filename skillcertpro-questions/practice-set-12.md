# Practice Set 12

Source: [https://skillcertpro.com/az-104-exam-questions/12/](https://skillcertpro.com/az-104-exam-questions/12/)
Total questions: 57

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

### Question 2

You have an Azure subscription that contains the virtual networks shown in the following table.

You need to deploy an Azure firewall named AF1 to RG1 in the West US Azure region.

To which virtual networks can you deploy AF1?

**Options:**

- **A.** VNET1 only ✅
- **B.** VNET1 and VNET2 only
- **C.** VNET1 and VNET4 only
- **D.** VNET1, VNET2, and VNET4 only
- **E.** VNET1, VNET2, VNET3, and VNET4

**Correct answer:** A

**Explanation:**

### Correct

**Option A. VNET1 only**

- Correct because an **Azure Firewall** must be deployed into a **dedicated subnet named AzureFirewallSubnet** within a **virtual network located in the same region as the resource group**.

- Since AF1 is being deployed to **RG1 in West US**, only **VNET1** (which is in West US) qualifies.

- VNETs in other regions (East US, Central US, etc.) cannot host AF1 directly because Azure Firewall is region‑specific.

### Incorrect

**Option B. VNET1 and VNET2 only**

- Incorrect because VNET2 is in a different region (not West US).

- Azure Firewall cannot span multiple regions; it must be deployed regionally.

**Option C. VNET1 and VNET4 only**

- Incorrect because VNET4 is also in a different region.

- Only VNET1 matches the West US requirement.

**Option D. VNET1, VNET2, and VNET4 only**

- Incorrect because both VNET2 and VNET4 are outside West US.

- This option incorrectly assumes cross‑region deployment is possible.

**Option E. VNET1, VNET2, VNET3, and VNET4**

- Incorrect because Azure Firewall cannot be deployed across all listed VNETs.

- Only VNET1 is valid since it matches the West US region.

###

---

### Question 3

**Scenario:** You have a **Microsoft Entra tenant**. You need to modify the **Default user role permissions** settings so that:

- Standard users cannot create new **service principals**.

- Standard users can only manage **their own Azure resources** using PowerShell or Microsoft Graph.

**Options:**

- **A.** A. Allow users to reset passwords for others
- **B.** B. Prevent standard users from creating service principals ✅
- **C.** C. Allow users to register security information
- **D.** D. Allow users to join devices to Azure AD
- **E.** E. Restrict standard users to manage only their own resources via PowerShell/Microsoft Graph ✅
- **F.** 6

**Correct answer:** B, E

**Explanation:**

### Correct

**Option B. Prevent standard users from creating service principals**

- Correct because this directly addresses the requirement to stop standard users from creating new service principals.

- Service principal creation is a privileged action, and restricting it ensures tighter control over application identities.

**Option E. Restrict standard users to manage only their own resources via PowerShell/Microsoft Graph**

- Correct because this enforces the principle of least privilege.

- Users can still manage their own resources but cannot affect tenant‑wide or other users’ resources.

- This aligns with the requirement to allow limited self‑management while preventing broader administrative actions.

### Incorrect

**Option A. Allow users to reset passwords for others**

- Incorrect because this setting relates to password management, not service principal creation or resource management.

- It does not help safeguard against unauthorized service principal creation or enforce least privilege.

**Option C. Allow users to register security information**

- Incorrect because this setting controls whether users can register MFA/security info.

- It is unrelated to service principal creation or restricting resource management.

**Option D. Allow users to join devices to Azure AD**

- Incorrect because this setting governs device registration.

- It does not affect service principal creation or user resource management permissions.

**Option F. (6)**

- Incorrect because this is not a valid configuration option.

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

### Question 5

Your organization is implementing Azure Virtual WAN to connect branch offices and remote users to Azure resources. Which components and features of Azure Virtual WAN are involved in establishing secure and scalable connectivity for your global network?

**Options:**

- **A.** A. Virtual WAN hubs ✅
- **B.** B. Azure Firewall ✅
- **C.** C. ExpressRoute gateways ✅
- **D.** D. Virtual network gateways ✅
- **E.** E. Azure Front Door

**Correct answer:** A, B, C, D

**Explanation:**

### **Correct**

**Option A. Virtual WAN hubs**

- Centralized hubs act as the core of Azure Virtual WAN, connecting branch offices, remote users, and Azure resources.

- They provide scalable, managed connectivity across regions.

- Correct because hubs are the backbone of Virtual WAN architecture.

**Option B. Azure Firewall**

- Azure Firewall can be integrated into Virtual WAN hubs to enforce security policies across traffic flows.

- Provides centralized protection and compliance for branch‑to‑Azure and branch‑to‑branch traffic.

- Correct because it ensures secure connectivity.

**Option C. ExpressRoute gateways**

- ExpressRoute gateways allow private, dedicated connections between on‑premises networks and Azure.

- Within Virtual WAN, they provide high‑performance, secure connectivity for enterprise workloads.

- Correct because ExpressRoute is a supported connectivity option in Virtual WAN.

**Option D. Virtual network gateways**

- VPN gateways are used to connect branch offices and remote users securely to Azure via IPsec tunnels.

- In Virtual WAN, these gateways are managed centrally through hubs.

- Correct because VPN gateways are a fundamental component of Virtual WAN connectivity.

### **Incorrect**

**Option E. Azure Front Door**

- Azure Front Door is a global application delivery service for web traffic (load balancing, acceleration, WAF).

- It is not part of Azure Virtual WAN’s networking and connectivity components.

- Incorrect because it focuses on application delivery, not branch/remote network connectivity.

---

### Question 6

You have an Azure subscription.

You plan to deploy the Azure container instances shown in the following table.

Name              Operating system

——————————————————————-

Instance1        Nano Server installation of Windows Server 2019

Instance2       Server Core installation of Windows Server 2019

Instance3       Linux

Instance4       Linux

——————————————————————-

Which instances can you deploy to a container group?

**Options:**

- **A.** Instance1 only
- **B.** Instance2 only
- **C.** Instance1 and Instance2 only
- **D.** Instance3 and Instance4 only ✅

**Correct answer:** D

**Explanation:**

### **Correct**

**Option D. Instance3 and Instance4 only**

- Azure **container groups** allow multiple containers to run together on the same host, sharing lifecycle, resources, and networking.

- However, only containers that meet certain requirements (same region, same OS type, and compatible resource allocations) can be deployed together in a container group.

- Based on the exam scenario, **Instance3 and Instance4** meet these requirements.

- Correct because these instances can be grouped together in a container group.

### **Incorrect**

**Option A. Instance1 only**

- A single container instance can be deployed, but the question asks specifically about **container groups** (multiple containers).

- Incorrect because this option does not represent a valid grouping.

**Option B. Instance2 only**

- Same reasoning as Option A: deploying only one container does not form a container group.

- Incorrect because this option does not satisfy the requirement of grouping.

**Option C. Instance1 and Instance2 only**

- These two instances cannot be deployed together in a container group due to incompatibility (different OS types or regions).

- Incorrect because they do not meet the requirements for grouping.

---

### Question 7

You have an Azure subscription named Subscription1 that contains a resource group named RG1.

In RG1, you create an internal load balancer named LB1 and a public load balancer named LB2.

You need to ensure that an administrator named Admin1 can manage LB1 and LB2. The solution must follow the principle of least privilege.

Which role should you assign to Admin1 for adding a health probe to LB2?

**Options:**

- **A.** Contributor on LB2
- **B.** Network Contributor on LB2 ✅
- **C.** Network Contributor on RG1
- **D.** Owner on LB2

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Network Contributor on LB2**

- The **Network Contributor role** grants permissions to manage networking resources, including **load balancers, health probes, and rules**.

- Assigning this role **directly on LB2** ensures Admin1 can manage LB2 without unnecessary access to other resources in RG1.

- This follows the **principle of least privilege** by limiting scope to LB2 only.

- **Correct answer.**

### Incorrect

**Option A. Contributor on LB2**

- The Contributor role provides **broad permissions** (create, delete, manage all resources) on LB2.

- This exceeds the least privilege requirement since Admin1 only needs to manage networking aspects like health probes.

- **Incorrect.**

**Option C. Network Contributor on RG1**

- Assigning at the **RG1 level** gives Admin1 permissions across all networking resources in RG1, not just LB2.

- This violates least privilege by expanding access unnecessarily.

- **Incorrect.**

**Option D. Owner on LB2**

- The Owner role grants **full control**, including role assignments.

- This is excessive for the task of adding a health probe.

- **Incorrect.**

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

### Question 10

You have an Azure subscription. The subscription contains virtual machines that run Windows Server and are configured as shown in the following table.

You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com.

You create a virtual network link for contoso.com as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“When VM1 starts, a record for VM1 is added to the contoso.com DNS zone.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Correct**

**Option A. Yes**

because when a VM is started in a virtual network linked to a private DNS zone (in this case, **contoso.com**), Azure automatically registers the VM’s hostname in that private DNS zone. Since VM1 is part of the linked network, its record will be added to the **contoso.com** DNS zone upon startup.

**Incorrect**

**Option B. No**

because this assumes that VM1’s record would not be added to the private DNS zone. However, Azure DNS private zones automatically integrate with the linked virtual network, ensuring that VM records are registered when they start. Therefore, saying “No” contradicts the expected behavior of Azure DNS zone integration.

---

### Question 11

Your company is migrating several workloads to Azure Virtual Machines (VMs). Each workload has unique requirements and usage patterns, as detailed below:

You need to select the most cost-effective VM pricing tier for each workload while ensuring they meet the performance and availability requirements.

Which pricing tier is the MOST suitable for each workload?

**Options:**

- **A.** Web Server: Spot, Batch Job: Dedicated Host, Dev/Test: Pay-as-you-go
- **B.** Web Server: Reserved, Batch Job: Pay-as-you-go, Dev/Test: Spot ✅
- **C.** Web Server: Pay-as-you-go, Batch Job: Spot, Dev/Test: Reserved
- **D.** Web Server: Dedicated Host, Batch Job: Reserved, Dev/Test: Pay-as-you-go

**Correct answer:** B

**Explanation:**

### Correct

**Option B: Web Server: Reserved, Batch Job: Pay‑as‑you‑go, Dev/Test: Spot**

- **Web Server → Reserved**: Web servers are typically **always‑on workloads** with predictable usage. Reserved instances provide significant cost savings compared to pay‑as‑you‑go.

- **Batch Job → Pay‑as‑you‑go**: Batch jobs may run irregularly or on demand. Pay‑as‑you‑go ensures flexibility without committing to long‑term costs.

- **Dev/Test → Spot**: Spot VMs are ideal for non‑critical workloads like development and testing, where interruptions are acceptable. They are the most cost‑effective option here.

### Incorrect

**Option A: Web Server: Spot, Batch Job: Dedicated Host, Dev/Test: Pay‑as‑you‑go**

- Incorrect because:

- Web servers cannot rely on Spot VMs (they can be evicted anytime).

- Dedicated Host is expensive and unnecessary for batch jobs.

- Dev/Test on pay‑as‑you‑go is valid but not the most cost‑effective compared to Spot.

**Option C: Web Server: Pay‑as‑you‑go, Batch Job: Spot, Dev/Test: Reserved**

- Incorrect because:

- Web servers should use Reserved for predictable workloads, not pay‑as‑you‑go.

- Batch jobs can use Spot, but Dev/Test should not use Reserved (too costly for non‑critical workloads).

**Option D: Web Server: Dedicated Host, Batch Job: Reserved, Dev/Test: Pay‑as‑you‑go**

- Incorrect because:

- Dedicated Host is only needed for compliance or licensing requirements, not general web servers.

- Batch jobs should not be reserved since they are irregular.

- Dev/Test on pay‑as‑you‑go is valid but not the cheapest option compared to Spot.

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

### Question 15

Contoso Ltd. has deployed a virtual network named **VNET1** with the following subnet and NSG configuration:

**Subnet-to-NSG Mapping**

**Subnet Name**
**Address Range**
**Associated NSG**

Subnet1
10.10.1.0/24
NSG1

Subnet2
10.10.2.0/24
None

**Virtual Machine Configuration**

**VM Name**
**Subnet**
**IP Address**
**Associated NSG**

VM1
Subnet1
10.10.1.5
NSG2

VM2
Subnet2
10.10.2.5
None

VM3
Subnet2
10.10.2.6
None

**NSG Inbound Rules**

**NSG1 (applied to Subnet1):**

**Priority**
**Source**
**Destination**
**Port**
**Action**

101
10.10.2.0/24
10.10.1.0/24
TCP/1433
Allow

**NSG2 (applied to VM1 NIC):**

**Priority**
**Source**
**Destination**
**Port**
**Action**

101
10.10.2.5
10.10.1.5
TCP/1433
Block

For the following statement, select Yes if the statement is true. Otherwise, select No.

**Statement:** “VM2 can connect to the TCP port 1433 services on VM1.”

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No**

NSG Evaluation Order

- **NSG1** allows traffic from Subnet2 to Subnet1 on TCP/1433.

- **NSG2**, applied directly to **VM1’s NIC**, **blocks traffic from VM2’s IP (10.10.2.5)** to VM1 on TCP/1433.

When multiple NSGs apply (subnet-level and NIC-level), **both must allow the traffic**. If **either blocks**, the traffic is denied.

Why VM2 Cannot Connect

- VM2 has **no NSG**, so it sends traffic unrestricted.

- NSG1 (on Subnet1) **allows** traffic from VM2’s subnet.

- NSG2 (on VM1 NIC) **explicitly blocks** traffic from VM2’s IP to VM1 on TCP/1433.

- Therefore, **connection is denied**.

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

### Question 17

Your organization has sensitive data stored in Azure VMs and wants to protect against **data exfiltration from VNets**. Which **current Azure security services and features** can you implement to **detect and prevent unauthorized data transfers**?

**Options:**

- **A.** A. Azure Firewall Premium ✅
- **B.** B. Microsoft Sentinel
- **C.** C. Azure Network Security Groups (NSGs) ✅
- **D.** D. Microsoft Purview Information Protection
- **E.** E. Microsoft Defender for Cloud ✅

**Correct answer:** A, C, E

**Explanation:**

**Correct**

**A. Azure Firewall Premium**

- Azure Firewall Premium provides **advanced threat protection** including **TLS inspection, FQDN filtering, and threat intelligence-based filtering**.

- It can **block outbound traffic to unauthorized destinations**, which is a direct control against **data exfiltration**.

- **Azure Firewall (especially Premium SKU)** is the recommended solution for **network-level exfiltration prevention**.

**C. Azure Network Security Groups (NSGs)**

- NSGs allow you to **control inbound and outbound traffic** at the subnet or NIC level.

- While NSGs are **basic packet filters** compared to Azure Firewall, they can still **block outbound traffic to untrusted networks**.

- Exam trap: NSGs are **not application-aware** and cannot inspect traffic deeply, but they are still valid for **basic exfiltration prevention**.

**E. Microsoft Defender for Cloud**

- Defender for Cloud provides **continuous monitoring, anomaly detection, and adaptive network hardening**.

- It can detect **suspicious outbound traffic patterns** and recommend **NSG/Firewall rules** to prevent exfiltration.

- Exam note: Defender for Cloud is now a **core security service** in AZ-104 objectives, replacing older references to standalone monitoring tools.

**Incorrect:**

**B. Microsoft Sentinel**

- Sentinel is a **SIEM/SOAR solution**.

- It provides **monitoring, detection, and incident response** but does not directly **block or prevent traffic**.

- Sentinel is useful for **detecting suspicious activity after the fact**, but the question asks about **detecting and preventing exfiltration from VNets** — Sentinel is not a prevention tool at the network layer.

 

**D. Microsoft Purview Information Protection**

- Purview Information Protection (formerly AIP) is about **classifying, labeling, and protecting documents/emails**.

- It helps prevent **data leakage at the file level**, but it does not control **network traffic leaving VNets**.

- Exam trap: Purview is often confused with network exfiltration controls, but it’s focused on **data governance and sensitivity labels**, not VM/VNet traffic.

---

### Question 18

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the virtual machines shown in the following table.

The subscription contains the Azure App Service web apps shown in the following table.

For the statement below, select Yes if the statement is true. Otherwise select No.

**“WebApp2 can communicate with VM1.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- By default, an Azure App Service web app (like WebApp2) runs in a multi-tenant environment and does **not** have direct network connectivity to VMs in a virtual network unless **VNet integration** or **Private Endpoints** are configured.

- Since the question does not mention any VNet integration or service endpoints, WebApp2 cannot directly communicate with VM1.

- Therefore, the statement is **false**.

### Incorrect

**Option A. Yes**

- This would only be true if WebApp2 had been configured with **VNet integration** into the same virtual network as VM1, or if VM1 had a **public IP address** accessible from WebApp2.

- The scenario does not mention such configurations.

- Assuming default settings, WebApp2 cannot reach VM1 directly, so “Yes” is incorrect.

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

### Question 20

You have an Azure subscription named Subscription1 that contains the quotas shown in the following table.

You deploy virtual machines to Subscription1 as shown in the following table.

You plan to deploy the virtual machines shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“You can deploy VM5 to West US.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because Azure enforces **regional quotas** for VM cores and resources.

- If the quota for **West US** is already consumed by existing VMs, you cannot deploy VM5 there until you either:

- Request a **quota increase** from Microsoft, or

- Deploy VM5 in a different region where quota is available.

- The statement “You can deploy VM5 to West US” is therefore **false** given the quota limits in the case study.

### Incorrect

**Option A. Yes**

- Incorrect because saying “Yes” ignores the quota restrictions. Even though you have an active subscription, quotas prevent exceeding the allowed number of VM cores in a region.

- Without available quota in **West US**, deployment of VM5 is not possible.

###

---

### Question 21

**Scenario:** You have an **Azure Container Registry (Registry1)** with an image named **image1**. You attempt to deploy an **Azure Container Instance (ACI)** using image1, but the deployment fails because ACI does not have permission to pull the image. The proposed solution is: Enable the Admin user account on Registry1. The question asks: Does this meet the goal while following security best practices?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- **Correct because**:

- Enabling the **Admin user account** allows access with a username/password pair, but this is **not recommended** for production or secure deployments.

- Security best practices recommend using **managed identities** or **service principals** to authenticate ACI with ACR.

- Admin accounts are considered a **legacy feature** and introduce risks (shared credentials, no fine-grained RBAC).

- Therefore, enabling the Admin user account does not meet the goal of following **security best practices**.

### Incorrect

**Option A. Yes**

- Incorrect because while enabling the Admin user account would technically allow ACI to pull the image, it violates **best practices**.

- It uses static credentials instead of secure, identity-based authentication.

---

### Question 22

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

**“RG1 has the Tag2:IT tag assigned only.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### **Correct**

- **Option B. No**

- Correct: The policy applies at the **subscription level** and appends the tag Tag4:value4 to resources, except those explicitly excluded.

- RG1 is **not excluded** (only VNET1 is excluded), so RG1 will have both its existing tag (Tag2:IT) **and** the appended tag (Tag4:value4).

- Therefore, the statement “RG1 has the Tag2:IT tag assigned only” is **false**.

### **Incorrect**

- **Option A. Yes**

- Incorrect: This assumes RG1 retains only its original tag. In reality, the append policy adds Tag4:value4 to RG1 because it is within scope and not excluded.

---

### Question 23

You have an Azure subscription.

You create the following file named Deploy.json.

You connect to the subscription and run the following commands.

- New-AZResourceGroup -Name RG1 -Location “centralus”

- New-AZResourceGroupDeployment -ResourceGroupName RG1 -TemplateFile “deploy.json”

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“The commands will create four new resources.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- The statement is **not guaranteed to be true**.

- The number of resources created depends entirely on the contents of the ARM template (Deploy.json).

- The commands themselves only:

- Create a new resource group (RG1).

- Deploy whatever resources are defined in the template file.

- Without knowing the template’s resource definitions, we cannot assume it will create exactly four resources.

### Incorrect

**Option A. Yes**

- Incorrect because the commands do not inherently create four resources.

- The resource count is determined by the JSON template, not by the New-AZResourceGroupDeployment command itself.

- If the template defines fewer or more than four resources, the statement would be false.

###

---

### Question 24

You have a Microsoft Entra tenant that contains the groups shown in the following table.

You purchase Microsoft Entra ID P2 licenses.

To which groups can you assign a license?

**Options:**

- **A.** Group1 only
- **B.** Group1 and Group3 only
- **C.** Group3 and Group4 only
- **D.** Group1, Group2, and Group3 only ✅
- **E.** Group1, Group2, Group3, and Group4

**Correct answer:** D

**Explanation:**

Correct: D. Group1, Group2, and Group3 only

- 
Group1 (Security | Enabled): Standard security groups are the primary target for group-based licensing. They are designed specifically for managing access and licenses.

- 
Group2 (Mail-enabled security | Enabled): While these groups have email functionality, they are still Security Groups. Entra ID supports license assignment to mail-enabled security groups because they have a Security Enabled attribute.

- 
Group3 (Microsoft 365 | Enabled): Microsoft 365 groups (formerly Office 365 groups) are fully supported for group-based licensing, provided their Security property is set to Enabled (which is the default for M365 groups).

Incorrect:

- 
Group4 (Microsoft 365 | Disabled): This is the “trap” in the question. Even though it is a Microsoft 365 group, the table specifically states Security: Disabled. For a group to receive a license in Entra ID, the securityEnabled property must be set to True. If security is disabled, the group cannot be used for access management or licensing.

- 
Options A, B, and C: these are partially correct but incomplete because they omit Group2. Many students incorrectly assume that “Mail-enabled” groups are for communication only, but as long as they are “Security” type, they can hold licenses.

- 
Option E: This is incorrect because it includes Group4, which lacks the mandatory security-enabled status.

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

### Question 26

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer.

The effective network security configurations for VM2 are shown in the following exhibit.

You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.

You verify that the Load Balancer rules are configured correctly.

You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.

Solution: You delete the BlockAllOther441 inbound security rule.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No.

Analysis of the NSG Rules

To determine if deleting the rule helps, we must look at the logic of the existing rules in the exhibit:

- 
Rule 1 (Priority 100): Named Allow_131.107.100.50. This rule specifically allows traffic from the source 131.107.100.50 on Port 443.

- 
Rule 2 (Priority 200): Named BlockAllOther441. This rule denies traffic on Port 443 from “Any” source.

Why the solution fails

Azure NSG rules are processed in Priority order (lowest number first). Once a packet matches a rule, processing stops for that packet.

- 
Traffic from 131.107.100.50: When a packet arrives from this specific IP address targeting port 443, it hits Rule 1 (Priority 100) first.

- 
The Match: Since the IP and Port match Rule 1, the traffic is Allowed.

- 
The Outcome: Rule 2 (Priority 200) is never even evaluated for this specific traffic because a match was already found at Priority 100.

Therefore, the BlockAllOther441 rule is not the reason the connection is failing for that specific IP address. Deleting it will not change the behavior for 131.107.100.50, as that traffic is already permitted by the higher-priority rule.

Why the connection is actually failing

Since the NSG for VM2 is already configured to allow the traffic, the failure likely exists elsewhere in the architecture:

- 
VM1 Configuration: The question states App1 is on VM1 and VM2. The NSG for VM1 might be blocking the traffic.

- 
Guest OS Firewall: The Windows or Linux firewall inside VM2 might be blocking port 443.

- 
Load Balancer Health Probes: If the Load Balancer determines the VMs are “Unhealthy,” it will not route traffic to them, regardless of the NSG rules.

---

### Question 27

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer.

The effective network security configurations for VM2 are shown in the following exhibit.

You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.

You verify that the Load Balancer rules are configured correctly.

You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.

Solution: You create an inbound security rule that denies all traffic from the 131.107.100.50 source and has a cost of 64999.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

No.

To determine if the solution works, we must evaluate the current state of NSG2 shown in the second exhibit and how the proposed change affects it.

1. Current Status (Exhibit 2):

- 
There is already an Allow rule (Priority 100) named Allow_131.107.100.50 that permits traffic from the source 131.107.100.50 on Port 443.

- 
Despite this rule, connections are failing. In an Azure Load Balancer scenario, this usually happens because the NSG rule is missing for the other VM (VM1) or the return traffic/health probes are being blocked.

2. The Proposed Solution:

- 
The solution suggests creating a Deny rule for the same source (131.107.100.50) with a priority of 64999.

- 
In Azure NSGs, rules are processed in priority order: lower numbers are processed first.

- 
Since the existing Allow rule has a priority of 100, it will always be evaluated before a rule with priority 64999.

3. Result:

- 
The new Deny rule will effectively do nothing because the traffic will have already been allowed by the higher-priority rule (Priority 100).

- 
Furthermore, adding a Deny rule is the opposite of the goal, which is to ensure connections can be established.

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

### Question 29

You have an Azure subscription named Subscription1 that contains the virtual machines as shown below.

You have created below Azure polices

You have created resource locks as below

Can you create a virtual machine in RG2?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### **Correct **

**option B. No**

- A **Read-only lock** applied at the **resource group level (RG2)** prevents **any modifications** within that resource group.

- This includes creating, updating, or deleting resources.

- Even though the policy allows virtual machines in RG2, the **lock overrides** and blocks creation.

- Therefore, you cannot create a VM in RG2.

### **Incorrect **

**option  A. Yes**

- Incorrect because while the **policy permits VM creation in RG2**, the **read-only lock** on RG2 prevents any new resources from being created.

- Policies define what is allowed or denied, but locks enforce immutability at the resource or resource group level.

---

### Question 30

Your company is expanding globally, and you need to create virtual networks in different Azure regions. How can you connect these virtual networks to form a unified global network and enable seamless communication between resources in different regions?

**Options:**

- **A.** Azure Virtual WAN ✅
- **B.** VNet Peering
- **C.** ExpressRoute
- **D.** VPN Gateway

**Correct answer:** A

**Explanation:**

**Correct**

**Option A. Azure Virtual WAN**

- Azure Virtual WAN is designed to connect multiple virtual networks across different regions into a unified global network.

- It provides centralized management, optimized routing, and seamless communication between resources in different regions.

- This is the best solution for global expansion scenarios where multiple VNets need to be interconnected efficiently.

**Incorrect**

**Option B. VNet Peering**

- VNet Peering allows direct connectivity between two VNets, but it is limited in scalability.

- While you can peer VNets across regions (Global VNet Peering), managing many VNets globally becomes complex and does not provide the centralized management that Virtual WAN offers.

- Not the recommended solution for large-scale global expansion.

**Option C. ExpressRoute**

- ExpressRoute provides a private connection between on-premises infrastructure and Azure, bypassing the public internet.

- It is not intended for connecting VNets across multiple Azure regions.

- Useful for hybrid connectivity, but not the right choice for forming a unified global Azure network.

**Option D. VPN Gateway**

- VPN Gateway enables secure connections between on-premises networks and Azure VNets or between VNets.

- While it can connect VNets, it is not optimized for large-scale, multi-region global networking.

- It introduces more complexity and latency compared to Azure Virtual WAN.

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

### Question 32

You have the App Service plan shown in the following exhibit:

The scale-in settings for the App Service plan are configured as shown in the following exhibit:

The scale out rule is configured with the same duration and cool down timer, as the scale in rule.

Please evaluate the above information and choose the correct option for the following statement:

If after deployment the CPU maintains constant usage of 90% for one hour, and then the average CPU usage is below 25% for nine minutes, at that point the number of instances will be ………. .

**Options:**

- **A.** 1 instance
- **B.** 2  instances
- **C.** 3  instances
- **D.** 4  instances ✅
- **E.** 5  instances

**Correct answer:** D

**Explanation:**

The Correct Answer: **D. 4 instances**

To find the final instance count, we must follow the timeline of events described in the scenario:

Phase 1: Deployment

- 
The App Service plan starts at the Minimum and Default instance limit.

- 
Current Count: 1 instance.

Phase 2: CPU at 90% for one hour

- 
The Scale-out rule triggers when CPU &gt; 85% for a duration of 5 minutes.

- 
After the first 5 minutes, the count increases by 1.

- 
After each scale action, a 5-minute cooldown occurs where the engine does not perform new actions.

- 
Over the course of 60 minutes, the engine will keep adding instances every 10 minutes (5 mins duration + 5 mins cooldown) until it hits the Maximum limit.

- 
Current Count: 5 instances (Maximum limit reached).

Phase 3: CPU below 25% for nine minutes

- 
The Scale-in rule triggers when Average CPU &lt; 30% for a Duration of 5 minutes.

- 
At the 5-minute mark, the condition is met (since 5 minutes have passed where usage was below 25%).

- 
The engine executes the action: Decrease count by 1.

- 
5 instances – 1 = 4 instances.

- 
Immediately after this action, the 5-minute Cool down timer starts.

- 
During the remaining 4 minutes of the “nine-minute” window (9 – 5 = 4), the autoscale engine is in cooldown. It will ignore the fact that the CPU is still low and will not trigger another scale-in action.

Final Count at the 9-minute mark: 4 instances.

Incorrect:

- 
A, B, C (Incorrect): These represent counts that would only be reached if the cooldown timer were ignored or if the “Duration” were much shorter. The engine requires a fresh 5-minute duration after the cooldown ends to trigger another decrease.

- 
E (Incorrect): This would be the count if the CPU had not been low long enough to trigger the first scale-in (less than 5 minutes).

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

### Question 34

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an Azure subscription that contains the resources shown in the following table:

VM1 connects to VNET1. You need to connect VM1 to VNET2.

Solution: You move VM1 to RG2, and then you add a new network interface to VM1.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because moving a VM to a different **resource group (RG2)** does not affect its network connectivity. Resource groups are logical containers and have no impact on networking.

- Adding a new network interface alone does not connect VM1 to VNET2 unless that NIC is explicitly associated with VNET2.

- Even then, a VM cannot be directly connected to two different VNets unless **VNet peering** or **multi-NIC configuration with proper subnet/VNet association** is set up.

- Therefore, this solution does **not** meet the stated goal.

### Incorrect

**Option A. Yes**

- Incorrect because the proposed steps do not establish connectivity between VM1 and VNET2.

- Simply moving VM1 to RG2 and adding a NIC does not automatically connect it to VNET2.

- The correct approach would involve either:

- Creating a NIC in VNET2 and attaching it to VM1 (if multi-NIC is supported), **or**

- Configuring **VNet peering** between VNET1 and VNET2 so VM1 can communicate with resources in VNET2.

---

### Question 35

You have an Azure subscription that contains the resources in the following table:

You install the Web Server server role (IIS) on VM1 and VM2, and then add VM1 and VM2 to LB1.

LB1 is configured as shown in the LB1 exhibit:

Rule1 is configured as shown in the Rule1 exhibit below:

Please evaluate the following statements and select Yes if the statement is true, otherwise select No:

VM1 is in the same availability set as VM2.

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because Azure Load Balancer requires that backend VMs (VM1 and VM2) be in the **same availability set** or part of a **virtual machine scale set**.

- This ensures the load balancer can distribute traffic across multiple **fault domains** and **update domains**, providing high availability.

- Since VM1 and VM2 are successfully added to LB1 and configured under Rule1, they must be in the same availability set.

### Incorrect

**Option B. No**

- Incorrect because if VM1 and VM2 were in **different availability sets**, they could not both be added to the same load balancer backend pool.

- Azure enforces this requirement to guarantee resiliency and proper load balancing.

-

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

### Question 37

You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.

Another administrator plans to create several network security groups (NSGs) in the subscription.

You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.

Solution: You configure a custom policy definition, and then you assign the policy to the subscription.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because **Azure Policy** can enforce rules across a subscription.

- By creating a **custom policy definition** that requires NSGs to include a rule blocking TCP port 8080, and assigning it at the **subscription level**, you ensure that every NSG created will comply automatically.

- This meets the requirement of enforcing a consistent security posture across multiple resource groups and virtual networks.

### Incorrect

**Option B. No**

- Incorrect because saying “No” would imply that Azure Policy cannot enforce NSG rules, which is not true.

- Azure Policy is specifically designed to enforce compliance and governance across resources, including NSGs.

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

### Question 40

You have an Azure web app named **webapp1**. You have a virtual network named **VNET1** and an Azure virtual machine named **VM1** that hosts a MySQL database. VM1 connects to VNET1.

You need to ensure that **webapp1** can access the data hosted on **VM1**.

**Options:**

- **A.** Deploy an internal load balancer
- **B.** Peer VNET1 to another virtual network
- **C.** Connect webapp1 to VNET1 ✅
- **D.** Deploy an Azure Application Gateway

**Correct answer:** C

**Explanation:**

**Correct**

**Option C. Connect webapp1 to VNET1**

Reasoning:

- To allow **webapp1** (an Azure App Service) to access **VM1** (hosting MySQL inside VNET1), you must integrate the web app with the virtual network.

- This is achieved using **VNet Integration** for Azure App Service, which enables secure communication between the web app and resources inside the VNet.

- Once connected, webapp1 can directly reach VM1’s private IP address in VNET1.

**Incorrect**

**Option A. Deploy an internal load balancer**

- Incorrect because: An internal load balancer distributes traffic among VMs, but it does not enable connectivity between a web app and a VM in a VNet.

**Option B. Peer VNET1 to another virtual network**

- Incorrect because: Peering VNET1 to another VNet does not solve the problem. The requirement is for webapp1 to connect to VM1 inside VNET1, not to another VNet.

**Option D. Deploy an Azure Application Gateway**

- Incorrect because: Application Gateway is a Layer 7 load balancer for web traffic. It is not required for simple connectivity between a web app and a VM hosting a database.

---

### Question 41

You have an Azure subscription named Subscription1. Subscription1 contains the virtual machines in the following table:

Subscription1 contains a virtual network named VNet1 that has the subnets in the following table:

VM3 has multiple network adapters, including a network adapter named NIC3. IP forwarding is enabled on NIC3. Routing is enabled on VM3. You create a route table named RT1 that contains the routes in the following table:

You apply RT1 to Subnet1 and Subnet2.

Please evaluate the scenario and decide if the following statement is True or False.

VM3 can establish a network connection to VM1.

**Options:**

- **A.** TRUE ✅
- **B.** FALSE

**Correct answer:** A

**Explanation:**

TRUE.

To determine if VM3 can connect to VM1, we have to look at the routing path from the perspective of the source (VM3) and the destination (VM1).

1. The Path from VM3 to VM1

- 
VM3 is located on Subnet3 (10.0.3.0/24).

- 
VM1 is located on Subnet1 (10.0.1.0/24).

- 
The route table RT1 is applied only to Subnet1 and Subnet2. It is NOT applied to Subnet3.

- 
Therefore, VM3 uses the System Default Route to find VM1. In Azure, all subnets within the same VNet can communicate by default via the VNET Local route.

- 
Result: Traffic from VM3 can successfully reach VM1.

2. The Return Path (VM1 back to VM3)

- 
For a “network connection” to be established (like TCP), the return traffic must also be able to flow back.

- 
VM1 is on Subnet1, which has RT1 applied.

- 
We must check if RT1 breaks the path to VM3 (10.0.3.4).

- 
RT1 has routes for:

- 
10.0.1.0/24 (Subnet1 itself)

- 
10.0.2.0/24 (Subnet2)

- 
RT1 does not have a specific route for 10.0.3.0/24.

- 
When there is no matching UDR, Azure falls back to the System Default Route (VNET Local).

- 
Result: VM1 uses the default system route to send traffic back to Subnet3.

---

### Question 42

Your company goes ahead and registers a domain name of skillcertpro.com. You then go ahead and create an Azure DNS zone named skillcertpro.com. You then add an A record to the zone for a host named www that has an IP address of 123.10.9.147. But the users complain that they cannot resolve the URL www.skillcertpro.com to 123.10.9.147. This issue needs to be resolved.

You propose a solution to modify the SOA record in the skillcertpro.com zone

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

No

- 
SOA (Start of Authority) Record: This record contains administrative information about the zone (such as the primary name server, the email of the zone administrator, and timers for refreshing). Modifying the SOA record does not create a link between your domain registrar and Azure.

- 
Automatic Generation: In Azure DNS, the SOA record is created automatically when you create the zone. While you can modify some of its properties (like the TTL or email), doing so will not fix the lack of resolution from the internet.

2. The Correct Solution: Name Server (NS) Delegation

To resolve the issue, you must perform Domain Delegation. This is a two-step process:

- 
Retrieve Name Servers: When you created the skillcertpro.com zone in Azure, Azure assigned it a specific set of four name servers (e.g., ns1-01.azure-dns.com, ns2-01.azure-dns.net, etc.).

- 
Update the Registrar: You must go to the website of the domain registrar where you purchased skillcertpro.com and replace their default name servers with the four Azure name servers.

Until this delegation is complete, the global DNS hierarchy does not know that Azure DNS is the “authoritative” source for your domain. When a user types www.skillcertpro.com, the request still goes to the registrar’s old servers, which have no knowledge of your new “A” record.

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

### Question 44

You have an app named App1 that runs on an Azure web app named webapp1. The developers at your company upload an update of App1 to a Git repository named Git1.

Webapp1 has the deployment slots shown in the following table:

You need to ensure that the App1 update is tested before the update is made available to users.

Which two actions should you perform?

**Options:**

- **A.** Swap the slots ✅
- **B.** Deploy the App1 update to webapp1-prod, and then test the update
- **C.** Stop webapp1-prod
- **D.** Deploy the App1 update to webapp1-test, and then test the update ✅
- **E.** Stop webapp1-test

**Correct answer:** A, D

**Explanation:**

###  Correct

### **Option A. Swap the slots**

- Promotes the tested code from webapp1-test to webapp1-prod without downtime.

- Standard Azure App Service practice: test in staging → swap to production.

### **Option D. Deploy the App1 update to webapp1-test, and then test the update**

- Safely deploys the update to the **test slot**.

- Allows validation before exposing users to production traffic.

- Matches exam principle: always test in a non‑production slot first.

###  Incorrect

### **Option B. Deploy the App1 update to webapp1-prod, and then test the update**

- Deploying directly to production exposes users to untested code.

- Violates best practice of using deployment slots for safe testing.

### **Option C. Stop webapp1-prod**

- Causes downtime for users.

- Stopping production is unrelated to testing updates.

### **Option E. Stop webapp1-test**

- Prevents testing altogether.

- Counterproductive since the test slot is meant for validation.

###

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

### Question 46

You have a virtual network named VNet1 that has the configuration shown in the following exhibit:

Before a virtual machine on VNet1 can receive an IP address from 192.168.1.0/24, you must first ………. .

**Options:**

- **A.** add a network interface
- **B.** add a subnet
- **C.** add an address space ✅
- **D.** delete a subnet
- **E.** delete an address space

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Add an address space**

- A virtual network (VNet) in Azure must have an **address space** defined before any subnets or IP assignments can be created.

- Without defining the CIDR block (e.g., 192.168.1.0/24), Azure cannot allocate IP addresses to VMs.

- Once the address space is added, you can then create subnets and assign IPs to network interfaces.

- This is the prerequisite step that enables IP allocation from the specified range.

### Incorrect

**Option A. Add a network interface**

- Incorrect because a network interface (NIC) can only be created **after** the VNet and subnet exist.

- The NIC itself does not define the IP range; it consumes IPs from the subnet.

**Option B. Add a subnet**

- Incorrect because you cannot add a subnet until the **address space** is defined.

- Subnets are subdivisions of the address space, so the address space must come first.

**Option D. Delete a subnet**

- Incorrect because deleting a subnet does not help in assigning IPs.

- This action would remove existing configurations instead of enabling new IP allocation.

**Option E. Delete an address space**

- Incorrect because removing an address space would prevent IP allocation entirely.

- You need to **add**, not delete, the address space to make IPs available.

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

### Question 49

**Azure App Service Plan and Web App Deployment Scenario**

A company has the following App Service Plans configured within their Azure subscription:

**Name**
**Location**
**Operating System**

skillcertlabplanA
East US
Linux

skillcertlabplanB
East US
Windows

skillcertlabplanC
UK South
Windows

**The company intends to deploy the following Azure Web App Instances:**

**Name**
**Location**
**Runtime Stack**

skillcertlabapp1
East US
.Net Core 3.1

skillcertlabapp2
East US
ASP.NET V4.7

Question:

Which of the listed App Service plans can be used for skillcertlabapp1?

**Options:**

- **A.** A. skillcertlabplanA only
- **B.** B. skillcertlabplanB only
- **C.** C. skillcertlabplanA and skillcertlabplanB only ✅
- **D.** D. skillcertlabplanB and skillcertlabplanC only
- **E.** E. skillcertlabplanA, skillcertlabplanB and skillcertlabplanC

**Correct answer:** C

**Explanation:**

**Correct**

**Option C.** “skillcertlabplanA and skillcertlabplanB only”

This is correct because:

- **skillcertlabapp1** requires **.NET Core 3.1**, which is supported on both **Linux** and **Windows** App Service Plans.

- The location must match the app deployment location (**East US**).

- Therefore, both **skillcertlabplanA (Linux, East US)** and **skillcertlabplanB (Windows, East US)** are valid choices.

- **skillcertlabplanC** is in **UK South**, so it cannot be used.

**Incorrect**

**Option A.** “skillcertlabplanA only” **Incorrect** because while planA (Linux, East US) is valid, planB (Windows, East US) is also valid. Limiting to only planA is incomplete.

**Option B.** “skillcertlabplanB only” **Incorrect** because planB (Windows, East US) is valid, but planA (Linux, East US) is also valid. Limiting to only planB is incomplete.

**Option D.** “skillcertlabplanB and skillcertlabplanC only” **Incorrect** because planC is in **UK South**, which does not match the app’s location (**East US**).

**Option E.** “skillcertlabplanA, skillcertlabplanB and skillcertlabplanC” **Incorrect** because planC cannot be used due to location mismatch.

---

### Question 50

You have an Azure subscription that contains a virtual network named VNET1 in the East US 2 region. You have the following resources in an Azure Resource Manager template.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

1. VM1 and VM2 can connect to VNET1.

2. If an Azure datacenter becomes unavailable, VM1 or VM2 will be available.

3. If the East US 2 region becomes unavailable, VM1 or VM2 will be available.

**Options:**

- **A.** Yes, Yes, Yes
- **B.** Yes, Yes, No ✅
- **C.** No, Yes, Yes
- **D.** No, No, Yes

**Correct answer:** B

**Explanation:**

### **Correct**

**Option B. Yes, Yes, No**

- **Statement 1: VM1 and VM2 can connect to VNET1 → Yes**

- Both VMs are deployed in the same region and can connect to the virtual network.

- **Statement 2: If an Azure datacenter becomes unavailable, VM1 or VM2 will be available → Yes**

- Azure provides availability zones within a region. If one datacenter fails, resources in another zone remain available.

- **Statement 3: If the East US 2 region becomes unavailable, VM1 or VM2 will be available → No**

- Regional outages affect all resources in that region. Unless geo‑redundancy or disaster recovery is configured, VMs in East US 2 will not be available.

### **Incorrect**

**Option A. Yes, Yes, Yes**

- Incorrect because statement 3 is wrong. Regional outages make all resources in that region unavailable.

**Option C. No, Yes, Yes**

- Incorrect because statement 1 is wrong. VMs in the same region can connect to VNET1.

**Option D. No, No, Yes**

- Incorrect because both statement 1 and 2 are wrong here. VMs can connect to VNET1, and availability zones protect against datacenter failures.

---

### Question 51

Your organization is using Azure App Service to host a global web application with a high volume of traffic. Which Azure Content Delivery Network (CDN) features can you use to improve the application‘s performance and reduce latency for users worldwide?

**Options:**

- **A.** Custom domain support
- **B.** Edge caching ✅
- **C.** CDN caching ✅
- **D.** Custom SSL
- **E.** CDN compression ✅
- **F.** Geo-filtering

**Correct answer:** B, C, E

**Explanation:**

The Correct Answers: B, C, and E

- 
B. Edge Caching: This is the foundational feature of a CDN. By storing copies of your static content (images, JS, CSS) on Edge Servers located in Points of Presence (POPs) closer to the user, you drastically reduce the physical distance data must travel.

- 
C. CDN Caching: This refers to the rules and policies used to manage how content is stored. By effectively caching content at the global scale, you offload traffic from the origin App Service, preventing bottlenecks and ensuring faster response times for repeat requests.

- 
E. CDN Compression: Compression (such as Gzip or Brotli) reduces the file size of assets before they are sent over the network. Smaller files require less bandwidth and transit time, which directly improves page load speeds, especially for users on slower or mobile networks.

Incorrect:

- 
A. Custom domain support: This is a branding and usability feature. While it allows you to use www.yourcompany.com instead of an Azure-provided URL, it does not inherently reduce latency or improve raw technical performance.

- 
D. Custom SSL: This is a security feature. It ensures data is encrypted between the user and the CDN endpoint. While modern “SSL Offloading” can technically help origin performance, it is categorized as a security requirement rather than a primary performance/latency optimization in the AZ-104 curriculum.

- 
F. Geo-filtering: This is a compliance and security feature. It allows you to block or allow traffic from specific countries. While it manages who can access the site, it does not improve the speed or latency for the users who are permitted access.

Concept: How CDN Reduces Latency

Remember the “Three Pillars of CDN Performance”:

- 
Proximity: Edge caching places content physically closer to the user.

- 
Size: Compression reduces the amount of data being transferred.

- 
Offloading: Caching reduces the compute load on the origin App Service, keeping it responsive for dynamic requests.

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

### Question 54

A company has deployed the following Azure Load Balancer resources to their Azure subscription

Name SKU

skillcertlabload1 Basic

skillcertlabload2 Standard

The load balancers would need to load balance requests across six virtual machines.

Each load balancer would have to load balance requests across three virtual machines.

Which of the following has to be implemented to ensure skillcertlabload2 can load balance requests across the three virtual machines?

**Options:**

- **A.** A. Ensure the virtual machines are running the same operating system
- **B.** B. Ensure the virtual machines are created in the same resource group
- **C.** C. Ensure the virtual machines are created in the same virtual network ✅
- **D.** D. Ensure the virtual machines are created in the same availability set or virtual machine scale set

**Correct answer:** C

**Explanation:**

Correct: C. Ensure the virtual machines are created in the same virtual network

- 
Standard SKU Flexibility: Unlike the Basic SKU, the Standard SKU Load Balancer is designed for greater scale and flexibility. It can support any virtual machine within a single Virtual Network, regardless of whether those VMs are standalone, in different Availability Sets, or in different Virtual Machine Scale Sets.

- 
Backend Pool Requirements: The only hard boundary for a Standard Load Balancer’s backend pool is the Virtual Network (VNet). As long as the three virtual machines are in the same VNet, skillcertlabload2 can distribute traffic to them.

Incorrect:

- 
A. Same Operating System: Azure Load Balancers operate at Layer 4 (TCP/UDP). They do not inspect the OS of the backend pool. You can mix Windows and Linux VMs in the same backend pool without issue.

- 
B. Same Resource Group: While it is common practice to keep related resources together, it is not a technical requirement. A Load Balancer can target VMs in different Resource Groups, provided they are in the same subscription/tenant and the same VNet.

- 
D. Same Availability Set or VMSS: This is a requirement for the Basic SKU (skillcertlabload1). The exam often uses this as a distractor. Because the question asks specifically about the Standard SKU (skillcertlabload2), this restriction does not apply. The Standard SKU allows you to mix and match Availability Sets within the same pool.

---

### Question 55

You have an Azure subscription that contains a virtual machine scale set. The scale set contains four instances that have the following configurations:

Operating system: Windows Server 2016

Size: Standard_D1_v2

You run the get-azvmss cmdlet as shown in the following exhibit:

When a new build of the Windows server 2016 image is released, the new build will be deployed up to how many virtual machines simultaneously?

**Options:**

- **A.** 0
- **B.** 1 ✅
- **C.** 2
- **D.** 4

**Correct answer:** B

**Explanation:**

**The Correct Answer: 1**

Understanding how Azure handles scale set updates is critical for maintaining high availability. While the UpgradePolicy Mode is listed as Automatic, the presence of the AutomaticOSUpgradePolicy (indicated in Command 2) changes how the rollout is executed for new OS images.

1. The 20% Rule for OS Upgrades

When a new OS image is released, Azure does not update every machine at once. To prevent downtime, Azure uses a rolling upgrade mechanism. By default, Azure upgrades a maximum of 20% of the total number of instances in the scale set at any given time, with a minimum of one instance.

2. The Calculation

- 
Total instances in your scale set: 4

- 
Calculation: 4 * 0.20 = 0.8

- 
Since Azure cannot update “0.8” of a machine and must maintain a minimum of one, it rounds to 1.

**Incorrect:**

- 
0: This would only be the case if the UpgradePolicy was set to Manual. In Manual mode, no instances are updated until you specifically trigger the action on each instance.

- 
2: This represents 50% of your fleet. Azure’s default safety protocols for Automatic OS Upgrades are designed to keep more of your application online. Updating 2 instances simultaneously in a 4-node cluster exceeds the default 20% threshold.

- 
4: This would be an “all-at-once” deployment. While a scale set in Automatic mode might update all instances for certain model changes (like changing a tag), it will never do this for an OS Image Upgrade because it would cause a 100% service outage.

---

### Question 56

You have an Azure subscription that contains an Azure Availability Set named WEBPROD-AS-USE2 as shown in the following exhibit.

You add 14 virtual machines to WEBPROD-AS-USE2.

When Microsoft performs planned maintenance in East US2, the maximum number of unavailable virtual machines will be?

**Options:**

- **A.** 2
- **B.** 7
- **C.** 10 ✅
- **D.** 14

**Correct answer:** C

**Explanation:**

### Correct

**Option C. 10**

- Correct because an **Availability Set** distributes VMs across **update domains** and **fault domains**.

- By default, Azure provides up to **20 update domains** and **2–3 fault domains**.

- During planned maintenance, **only one update domain is affected at a time**.

- With 14 VMs spread across update domains, the maximum number of VMs that can be unavailable during maintenance is **10**, since Azure guarantees that not all VMs will be down simultaneously.

- This ensures high availability while minimizing disruption.

### Incorrect

**Option A. 2**

- Incorrect because 2 refers to **fault domains**, not update domains.

- Fault domains protect against hardware failures, not planned maintenance.

**Option B. 7**

- Incorrect because 7 does not align with the update domain distribution.

- Planned maintenance affects one update domain at a time, not half the VMs.

**Option D. 14**

- Incorrect because Azure never takes down all VMs in an Availability Set during planned maintenance.

- The design ensures at least some VMs remain available.

###

---

### Question 57

You have an Azure subscription named Subscription1 (ID: c276fc76-9cd4-44c9-99a7-4fd71546436e). You are tasked with creating a Custom Azure Role-Based Access Control (RBAC) role named CR1.

The role must satisfy the following requirements:

- 
Scope Limitation: The role must be available for assignment only within the context of Subscription1.

- 
Permission Restriction: The role must explicitly prevent the management of RBAC permissions (Identity and Access Management).

- 
Resource Management: The role must allow full management (Create, Read, Update, Delete) of all other resources within the scope.

Which JSON definition fragment should you use for the AssignableScopes and Actions elements?

**Options:**

- **A.** A. "AssignableScopes": [ "/" ], "Actions": [ "*" ], "NotActions": [ "Microsoft.Authorization/*" ]
- **B.** B. "AssignableScopes": [ "/subscriptions/c276fc76-9cd4-44c9-99a7-4fd71546436e" ], "Actions": [ "*" ], "NotActions": [ "Microsoft.Authorization/*" ] ✅
- **C.** C. "AssignableScopes": [ "/subscriptions/c276fc76-9cd4-44c9-99a7-4fd71546436e" ], "Actions": [ "*" ], "NotActions": [ "Microsoft.Security/*" ]

**Correct answer:** B

**Explanation:**

The correct answer is B.

**Requirements**

To satisfy the requirements of the custom role CR1, we need to evaluate three specific JSON properties:

- AssignableScopes: Limits where the role can be used. It must point specifically to the Subscription ID: /subscriptions/c276fc76-9cd4-44c9-99a7-4fd71546436e.

- Actions: To allow “full management” of all resources, we use the wildcard *.

- NotActions: To “explicitly prevent” the management of RBAC/IAM, we must exclude the Microsoft.Authorization resource provider.

**Option**
**Status**
**Reason**

A
The AssignableScopes is set to "/". This represents the Root Scope, meaning the role would be available across all subscriptions in the tenant, violating Requirement 1.

B
Matches all criteria. It limits the scope to the specific subscription, grants full access via *, and uses NotActions to block Microsoft.Authorization/* (which controls RBAC).

C
The NotActions is set to Microsoft.Security/*. This would prevent managing security settings (like Defender for Cloud) but would still allow the user to manage RBAC permissions, violating Requirement 2.

**Details:** Why Microsoft.Authorization/*?

In Azure, RBAC operations (like role assignments and role definitions) are handled by the Microsoft.Authorization resource provider.

By placing * in Actions and Microsoft.Authorization/* in NotActions, the effective permission is:

“Allow everything EXCEPT the ability to change permissions.”

---
