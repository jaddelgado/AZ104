# Practice Set 10

Source: [https://skillcertpro.com/az-104-exam-questions/10/](https://skillcertpro.com/az-104-exam-questions/10/)
Total questions: 55

---

### Question 1

You have an Azure subscription that contains the container images shown in the following table.

You plan to use the following services:

- Azure Container Instances

- Azure Container Apps

- Azure App Service

In which service(s) can you run **Image1**?

**Options:**

- **A.** Azure Container Instances only
- **B.** Azure Container Apps only
- **C.** Azure Container Instances and Azure App Services only ✅
- **D.** Azure Container Apps and App Services only
- **E.** Azure Container Instances, Azure Container Apps, and App Services

**Correct answer:** C

**Explanation:**

**Azure Container Instances and App Services only** is the **correct** answer because Image1 is based on Windows Server, and Azure Container Instances (ACI) and Azure App Service support Windows-based containers. Azure Container Apps, however, only supports Linux-based containers, so it cannot be used to run Image1.

**Azure Container Instances only** is **incorrect** because Azure App Service also supports Windows-based containers, making it a valid option for running Image1.

**Azure Container Apps only** is **incorrect** because Azure Container Apps does not support Windows-based containers; it only supports Linux-based containers.

**Azure Container Apps and App Services only** is **incorrect** because Azure Container Apps does not support Windows-based containers.

**Azure Container Instances, Azure Container Apps, and App Services** is **incorrect** because Azure Container Apps does not support Windows-based containers, so it cannot be used to run Image1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/container-instances/container-instances-overview

- https://learn.microsoft.com/en-us/azure/container-apps/containers

- https://learn.microsoft.com/en-us/azure/app-service/overview

---

### Question 2

**Scenario:** Your company is running a critical line-of-business application on two Azure Virtual Machines (VM1 and VM2) in the same virtual network.

You need to ensure the application remains available during planned maintenance or unexpected failures, with these requirements:

- Update and restart the VMs individually without causing application downtime.

- Automatically distribute incoming traffic to the healthy VM.

**Which of the following Azure services would BEST meet these requirements?**

- **Option A.** Azure Front Door with Availability Zones

- **Option B.** Azure Load Balancer with Availability Sets

- **Option C.** Azure Traffic Manager with Availability Sets

- **Option D.** Azure Application Gateway with Availability Zones

**Options:**

- **A.** Azure Front Door with Availability Zones
- **B.** Azure Load Balancer with Availability Sets ✅
- **C.** Azure Traffic Manager with Availability Sets
- **D.** Azure Application Gateway with Availability Zones

**Correct answer:** B

**Explanation:**

### Correct

**Option B. Azure Load Balancer with Availability Sets** Correct because an **Azure Load Balancer** distributes incoming traffic across multiple VMs in the same virtual network. Combined with **Availability Sets**, it ensures that at least one VM remains available during planned maintenance or unexpected failures. This setup allows you to restart or update VMs individually while traffic is automatically routed to the healthy VM, achieving **zero downtime** for the application.

### Incorrect

**Option A. Azure Front Door with Availability Zones** Incorrect because Azure Front Door is a **global load balancer** designed for routing traffic across multiple regions. It is not the best fit for distributing traffic between VMs in the same virtual network.

**Option C. Azure Traffic Manager with Availability Sets** Incorrect because Azure Traffic Manager is a **DNS-based traffic distribution service** that directs traffic across regions or endpoints. It does not provide real-time load balancing within a single virtual network, so it cannot guarantee zero downtime during VM updates.

**Option D. Azure Application Gateway with Availability Zones** Incorrect because Application Gateway is a **Layer 7 (HTTP/HTTPS) load balancer** with features like SSL termination and WAF. While it can distribute traffic, it is more complex and not necessary for this scenario. The requirement is simple VM-level load balancing, which is best handled by Azure Load Balancer.

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

### Question 6

You have two Azure virtual machines as shown in the following table.

You create the Azure DNS zones shown in the following table.

You perform the following actions:

- To fabrikam.com, you add a virtual network link to vnet1 and enable auto registration.

- For contoso.com, you assign vm1 and vm2 the Owner role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“The DNS A record for vm1 is added to contoso.com and has the IP address of 131.107.50.20.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**Correct:****Option B**

The DNS A record for vm1 is not added to contoso.com because Azure automatically creates DNS records only when a Private DNS zone is linked to a virtual network with auto-registration enabled.• Auto-registration is enabled only for fabrikam.com, not for contoso.com.• Assigning the Owner role to vm1 and vm2 on contoso.com affects permissions only and has no effect on DNS record creation.• Without a virtual network link and auto-registration, Azure will not create an A record for vm1 in contoso.com, regardless of its IP address.

**Incorrect:****Option A**

This option assumes that an A record for vm1 is automatically added to contoso.com. That assumption is incorrect because:• contoso.com does not have auto-registration enabled.• Role assignments (Owner role) do not trigger DNS record creation.• Azure Private DNS requires explicit virtual network linking with auto-registration for automatic A records.

---

### Question 7

Case Study: GlobalMantics’ Cloud Expansion and Optimization

(Note: There are multiple questions in this test based on this case study.)

GlobalMantics, a multinational retail company, is actively expanding its online presence and modernizing its existing Azure infrastructure. Their current resources and strategic goals are outlined below:

Existing Resources:

- E-Commerce Web App: Hosted on Azure App Service, this application frequently experiences unpredictable traffic spikes and performance slowdowns during peak periods.

- Inventory Management System: A legacy .NET application currently runs on Azure Virtual Machines (VM01-VM04) within a single Availability Set.

- Customer Database: An Azure SQL Database manages sensitive customer data and has high IOPS (Input/Output Operations Per Second) requirements.

- Data Lake: Azure Data Lake Storage Gen2 is utilized for storing extensive volumes of unstructured sales and marketing data.

Strategic Goals:

- Enhance the scalability and reliability of the e-commerce web app.

- Modernize and improve the availability of the inventory management system.

- Ensure robust data security and compliance for the customer database.

- Optimize costs across all deployed Azure resources.

Question:

To effectively optimize costs across all Azure resources, which strategy should GlobalMantics adopt?

**Options:**

- **A.** Use Azure Cost Management to identify and optimize underutilized resources.
- **B.** Enable Azure Policy to enforce cost-saving configurations.
- **C.** All of the above. ✅
- **D.** Purchase Azure Reserved Instances for all VMs.

**Correct answer:** C

**Explanation:**

All listed strategies contribute to cost optimization in Azure: Azure Reserved Instances: Provide significant discounts for VMs when committing to a one- or three-year term. Azure Cost Management: Offers tools to analyze spending patterns, identify optimization opportunities, and set budgets and alerts. Azure Policy: Enables the enforcement of cost-saving configurations across subscriptions and resource groups, such as shutting down VMs during non-business hours.

---

### Question 8

Your organization is implementing Azure Bastion to enhance the security of RDP/SSH connections to Azure VMs. What are the key benefits and features of using Azure Bastion for secure remote access?

**Options:**

- **A.** Eliminates the need for public IP addresses on VMs ✅
- **B.** Provides a web-based RDP/SSH experience in the Azure portal ✅
- **C.** Supports multi-factor authentication (MFA) for added security ✅
- **D.** Provides secure RDP/SSH access over SSL ✅
- **E.** Seamless integration with Azure Active Directory (AAD) ✅

**Correct answer:** A, B, C, D, E

**Explanation:**

**Correct:**

**A.** Eliminates the need for public IP addresses on VMs

**B.** Provides a web-based RDP/SSH experience in the Azure portal

**C.** Supports multi-factor authentication (MFA) for added security

**D.** Provides secure RDP/SSH access over SSL

**E.** Seamless integration with Azure Active Directory (AAD)

Azure Bastion deploys as a PaaS service in a dedicated VNet subnet (AzureBastionSubnet /27 minimum), enabling RDP/SSH connectivity to private VMs without public IPs, reducing attack surface from internet scans and brute force on ports 3389/22. Browser-based access via Azure portal uses HTML5 web client over TLS 1.2 on port 443, traversing firewalls securely without client software, VPNs, or jump hosts. MFA integrates via Azure AD (Entra ID) conditional access policies applied at Bastion RBAC level, while sessions remain encrypted end-to-end. Native AAD authentication/authorization centralizes identity management with just-in-time access controls.

All options represent key Azure Bastion features tested in Microsoft Azure Administrator exams for secure remote access implementation. No incorrect options provided; this multi-select question validates comprehensive understanding of Bastion’s security model replacing traditional bastion hosts.

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

### Question 11

You have an on-premises virtual machine named VM-01. Some settings for VM-01 are shown below:

You need to ensure that you can use the disks attached to VM-01 as a template for Azure virtual machines.

What should you modify on VM-01?

**Options:**

- **A.** memory
- **B.** network adapters
- **C.** hard drive ✅
- **D.** processor
- **E.** SCSI controller

**Correct answer:** C

**Explanation:**

The correct answer is hard drive ✅

To use an on-premises VM’s disks as a template for Azure VMs, you need to prepare the virtual hard disk (VHD or VHDX) according to Azure requirements.

This involves generalizing the OS (using Sysprep for Windows) and ensuring the disk format is compatible with Azure.

Other VM settings like memory, network adapters, processor, or SCSI controller are not directly relevant for creating a reusable disk template.

Reference:

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/prepare-for-upload-vhd-image

Quick Preview:

---

### Question 12

You are implementing Azure DDoS Protection Standard to protect your Azure resources from distributed denial-of-service (DDoS) attacks. How does DDoS Protection Standard work, and what are the key benefits it provides compared to the Basic tier?

**Options:**

- **A.** A. DDoS Protection Standard relies solely on the customer configuring firewall rules to mitigate attacks.
- **B.** B. DDoS Protection Standard uses basic traffic filtering and anomaly detection to identify potential attacks.
- **C.** C. DDoS Protection Standard continuously monitors traffic, detects DDoS attacks using adaptive tuning, and mitigates attacks by scrubbing traffic at the network edge. ✅
- **D.** D. DDoS Protection Standard is only available for virtual machines and not for other Azure services.

**Correct answer:** C

**Explanation:**

DDoS Protection Standard provides sophisticated, adaptive protection by monitoring traffic, detecting attacks, and mitigating them before they impact your Azure resources.

---

### Question 13

Your company is adopting infrastructure as code (IaC) practices for Azure resource management.

How can you utilize Azure Resource Manager templates or other IaC tools to define and deploy your Azure infrastructure consistently and repeatedly?

**Options:**

- **A.** Store ARM templates in Azure DevOps repositories and use Azure Pipelines for automated deployment across different environments. ✅
- **B.** Define resource configurations in ARM templates, then manually deploy them through the Azure portal for each environment.
- **C.** Ignore IaC and manually create resources in the Azure portal for flexibility.
- **D.** Use Terraform to create and manage infrastructure in AWS, not Azure.

**Correct answer:** A

**Explanation:**

Infrastructure as Code (IaC) and Azure Policy Enforcement

Infrastructure as Code (IaC) in Azure

Infrastructure as Code (IaC) practices in Azure primarily involve the use of:

ARM templates: Declarative JSON files that define infrastructure configurations.

CI/CD pipelines: Tools such as Azure Pipelines automate deployment and infrastructure provisioning across environments.

Azure Policy Overview

Azure Policy enables you to enforce governance by creating rules that evaluate resources and determine compliance. Policy definitions are authored in JSON format.

Example: Azure Policy Definition to Enforce Tags

{

“mode”: “All”,

“policyRule”: {

“if”: {

“allOf”: [

{

“field”: “type”,

“equals”: “Microsoft.Compute/virtualMachines”

},

{

“not”: {

“field”: “tags[‘Environment’]”,

“in”: [“Production”, “Staging”, “Development”]

}

},

{

“not”: {

“field”: “tags[‘CostCenter’]”,

“exists”: true

}

}

]

},

“then”: {

“effect”: “deny”

}

},

“parameters”: {}

}

Explanation of Policy Elements

mode: "All"Evaluates the policy against all resource types.

policyRule:Contains the logic to evaluate resources.

if:

Checks if the resource is a virtual machine:type = Microsoft.Compute/virtualMachines

Verifies that the Environment tag is missing or not within the allowed values (Production, Staging, Development).

Ensures the CostCenter tag exists.

then:

If any of the conditions fail, the effect is "deny", blocking the creation or update of the non-compliant resource.

Available Policy Effects

Effect
Description

deny
Blocks the creation or update of non-compliant resources.

audit
Logs non-compliance but does not block the resource.

append
Automatically adds missing tags or properties.

modify
Replaces or adjusts existing properties (e.g., tag values).

---

### Question 14

You try to connect to a Windows Server VM running in Azure, but the connection fails. You begin investigating the problem by taking a look at the Networking settings:

You need to establish a Remote Desktop connection to VM-01. What should you do to fix the problem?

**Options:**

- **A.** Change the priority of the RDP rule
- **B.** Attach another network interface
- **C.** Delete the DenyAllInBound rule
- **D.** Start VM-01 ✅

**Correct answer:** D

**Explanation:**

Taking a closer look at the information available at the network interface level should provide the resolution.

In this case, the NIC Public IP is not available, which means that the VM is not running.

After powering on the VM, the public IP will be populated and we will be able to connect to the Windows Server VM. The first rule, Allow_RDP, allows RDP traffic to the VM.

**Reference:**

https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-public-ip-address

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

### Question 16

**You have an Azure subscription that contains the resources shown in the following table. You need to create a network interface named NIC1. In which location can you create NIC1?**

You need to create a network interface named NIC1.

In which location can you create NIC1?

**Options:**

- **A.** East US and North Europe only
- **B.** East US only ✅
- **C.** East US, West Europe, and North Europe
- **D.** East US and West Europe only

**Correct answer:** B

**Explanation:**

### Correct

**Option B. East US only**

- Correct.

- A **network interface (NIC)** in Azure must be created in the **same region as the virtual network (VNet)** it will connect to.

- If the VNet exists only in **East US**, then NIC1 can only be created in **East US**.

- NICs cannot span regions; they are region‑bound to their associated VNet.

### Incorrect

**Option A. East US and North Europe only**

- Incorrect.

- North Europe is not valid unless a VNet exists there. Since the VNet is only in East US, NIC1 cannot be created in North Europe.

**Option C. East US, West Europe, and North Europe**

- Incorrect.

- Same reasoning: NICs must be in the same region as the VNet. West Europe and North Europe are invalid because the VNet is not in those regions.

**Option D. East US and West Europe only**

- Incorrect.

- West Europe is not valid because the VNet is only in East US.

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

### Question 18

You are running three virtual machines in Azure, deployed in Subnet-01, inside vNET1 virtual network. Each virtual machine has a public IP address. The virtual machines host several applications that are accessible over port 443 to users on the Internet.

Your on-premises network has a site-to-site VPN connection to vNet1.

You discover that the virtual machines can be accessed by using the Remote Desktop Protocol (RDP) from the Internet and from the on-premises network.

You need to prevent RDP access to the virtual machines from the Internet, unless the RDP connection is established from the on-premises network. The solution must ensure that all other applications can still be accessed by the Internet users.

What should you do?

**Options:**

- **A.** Modify the address space of the local network gateway
- **B.** Create a deny rule in a network security group (NSG) that is linked to Subnet-01 ✅
- **C.** Remove the public IP addresses from the virtual machines
- **D.** Modify the address space of Subnet-01

**Correct answer:** B

**Explanation:**

Here’s how the overall picture looks like:

The question states that only RDP traffic coming from the Internet should be denied. RDP traffic coming from the on-premises data center needs to be permitted, so this RDP traffic will traverse through the site-to-site VPN tunnel established between Azure vNET1 and on-prem DC.

In the NSG, you would need to define two rules actually. In the first rule, with a higher priority (lower priority number), you would Allow RDP traffic from on-prem DC. In the second rule, you would deny RDP traffic from any location.

The network security group would like this:

In this example, I have considered that the IP subnet used in the on-prem DC is 192.168.0.0/24, so that is the source of the traffic coming to our three VMs. So this traffic is permitted, but RDP traffic coming from any other source will be denied by the second rule, so this includes traffic from the internet as requested by the question.

Reference:

https://docs.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview

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

### Question 20

A team needs to deploy a scaleset to Azure. You have to create the required Azure CLI script for the same. You have to write the part of the script to scale the scaleset to a new capacity of 4. Which of the following is the right command for this?

**Options:**

- **A.** A. az vmss scale --resource-group "skillcertpro-rg" --name skillcertproet --scale-capacity 4
- **B.** B. az vmss scale --resource-group "skillcertpro-rg" --name skillcertproet --new-capacity 4 ✅
- **C.** C. az vmss new-scale --resource-group "skillcertpro-rg" --name skillcertproet --new-capacity 4
- **D.** D. az vmss new-scale --resource-group "skillcertpro-rg" --name skillcertproet --scale-capacity 4

**Correct answer:** B

**Explanation:**

The command used to resize a scale set is:

az vmss scale --resource-group &lt;rg-name&gt; --name &lt;vmss-name&gt; --new-capacity &lt;number-of-instances&gt;

--new-capacity specifies the desired number of VM instances in the scale set.

Example:

az vmss scale --resource-group skillcertpro-rg --name skillcertproet --new-capacity 4

### Analysis of Options

Option
Command
Correct?
Reason

A
--scale-capacity 4
❌
--scale-capacity is not a valid parameter.

B
--new-capacity 4
✅
CLI parameter to set the number of VM instances.

C
az vmss new-scale ...
❌
new-scale is not a valid subcommand.

D
az vmss new-scale ... --scale-capacity 4
❌
Both wrong subcommand and wrong parameter.

✅ Correct Answer

B.

az vmss scale --resource-group "skillcertpro-rg" --name skillcertproet --new-capacity 4

Since this is clearly given in the Microsoft documentation, all other options are incorrect

For more information on managing scale sets via the CLI, one can go to the following link

https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-manage-cli

---

### Question 21

You plan to deploy five virtual machines to a virtual network subnet.

Each virtual machine will have a public IP address and a private IP address.

Each virtual machine requires the same inbound and outbound security rules.

What is the minimum number of network security groups that you require?

**Options:**

- **A.** A. 1 ✅
- **B.** B. 2
- **C.** C. 5
- **D.** D. 10

**Correct answer:** A

**Explanation:**

A network security group can have multiple network interfaces assigned to it as shown in the below diagram

Since the question clearly states that the virtual machines all require the same inbound and outbound security rules, hence we should use just the same network security group for all network interfaces

For more information on network security groups, please visit the below URL

https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-vnet-plan-design-arm

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

### Question 23

**Azure Site-to-Site VPN Configuration**

A company has an existing Azure subscription with the following Virtual Network configuration:

**Name**
**Type**
**Address Range**
**Part of Network**

skillcertpro-net
Virtual Network
10.1.0.0/16
N/A

SubnetA
Subnet
10.1.0.0/24
skillcertpro-net

GatewaySubnet
Subnet
10.1.255.0/27
skillcertpro-net

A Site-to-Site VPN connection needs to be established with an on-premise network. The on-premise VPN device has an IP address of 12.10.79.10, and the on-premise network’s IP address range is 10.101.1.0/24.

To proceed, you need to configure the Local Network Gateway as follows:

Which of the following would you enter as the address range for the Local Network gateway?

**Options:**

- **A.** A. 10.1.0.0/24
- **B.** B. 10.1.255.0/27
- **C.** C. 10.101.1.0/24 ✅
- **D.** D. 10.1.0.0/16

**Correct answer:** C

**Explanation:**

### Correct

**Option C. 10.101.1.0/24** Explanation: This is correct. The address range 10.101.1.0/24 is a valid private IP range that can be used for an Azure Virtual Network. It falls within the **10.0.0.0/8 private IP address space**, which is reserved for internal networking and supported by Azure VNets.

### Incorrect

**Option A. 10.1.0.0/24** Incorrect. While 10.1.0.0/24 is technically a valid private IP range, in this exam context it is not the correct answer because the question is testing recognition of the specific valid range provided (10.101.1.0/24).

**Option B. 10.1.255.0/27** Incorrect. This subnet is too small (only 32 IP addresses, with fewer usable hosts). Azure VNets require larger address spaces to support subnets and services.

**Option D. 10.1.0.0/16** Incorrect. Although 10.1.0.0/16 is a valid private range, it overlaps with the smaller 10.1.0.0/24 and does not match the expected correct configuration in this exam scenario.

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

### Question 25

You have the Azure management groups shown in the following table:

You add Azure subscriptions to the management groups as shown in the following table:

You create the Azure policies shown in the following table:

Please evaluate the following statement if it’s True or False:

You can create a virtual network in Subscription1.

**Options:**

- **A.** TRUE
- **B.** FALSE ✅

**Correct answer:** B

**Explanation:**

First, let’s have a complete view over the setup:

Azure Policy establishes conventions for resources. Policy definitions describe resource compliance conditions and the effect to take if a condition is met. In this scenario, a Policy has been applied at the Tenant Root Group and this is the Not Allowed Resource Types policy, which restricts creating any virtual networks.

Where does this policy apply? At what level or scope in the Azure hierarchy? Once the policy is applied at the Tenant Root Group,  so this is the assignment, the policy assignment is inherited by all child resources. If a policy assignment is applied to a resource group, it’s applicable to all the resources in that resource group. In this case, being applied at ROOT level, it’s inherited by all child resources: management groups, subscriptions, resource groups and resources.

It really doesn’t matter that the Allowed Resource Types policy is applied on Management Group 12, it has no effect. The most restrictive policy always wins, so a virtual network deployment is not allowed anywhere in the presented Azure hierarchy.

So now, the statement to evaluate: You can create a virtual network in Subscription1. This action will be denied, so the statement is False. The error in Azure portal would look like this:

Reference:

https://docs.microsoft.com/en-us/azure/governance/policy/overview

Quick Preview:

---

### Question 26

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer.

The effective network security configurations for VM2 are shown in the following exhibit:

You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.

Solution: You modify the load balancing rule configuration to listen for traffic on TCP port 443.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because if the load balancing rule is not configured to listen on TCP port 443, traffic on that port will fail.

- By modifying the load balancing rule to explicitly listen on port 443, the Load Balancer can properly distribute HTTPS traffic to VM1 and VM2.

- This solution directly addresses the connectivity issue by ensuring the Load Balancer is handling traffic on the required port.

### Incorrect

**Option B. No**

- Incorrect because the failure in this scenario is due to the Load Balancer not listening on port 443.

- Saying “No” would imply that modifying the load balancing rule does not solve the problem, which is not true.

- Once the rule is updated, the traffic from 131.107.100.50 over TCP 443 can be successfully routed.

###

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

### Question 28

Scenario:

You have recently provisioned a new Azure subscription that includes a user account named Admin1.

Problem:

Admin1 attempted to deploy an Azure Marketplace resource using an Azure Resource Manager (ARM) template via Azure PowerShell. The deployment failed, and the following error message was received:

“User failed validation to purchase resources. Error message: ‘Legal terms have not been accepted for this item on this subscription. To accept legal terms, please go to the Azure portal (http://go.microsoft.com/fwlink/?LinkId=534873) and configure programmatic deployment for the Marketplace item or create it there for the first time.'”

Requirement:

You need to enable Admin1 to successfully deploy the Marketplace resource.

Question:

What action should you take to resolve this issue?

**Options:**

- **A.** From Azure PowerShell, run the Set-AzApiManagementSubscription cmdlet
- **B.** From the Azure portal, register the Microsoft.Marketplace resource provider
- **C.** From Azure PowerShell, run the Set-AzMarketplaceTerms cmdlet ✅
- **D.** From the Azure portal, assign the Billing administrator role to Admin1

**Correct answer:** C

**Explanation:**

**Managing Azure Marketplace Terms**

To accept the legal terms for a given publisher ID (Publisher), offer ID (Product), and plan ID (Name), run the Set-AzMarketplaceTerms cmdlet in Azure PowerShell.

Before accepting, you can review the agreement terms by using the Get-AzMarketplaceTerms cmdlet.

For more detailed information, please refer to the official Microsoft documentation: https://docs.microsoft.com/en-us/powershell/module/az.marketplaceordering/set-azmarketplaceterms?view=azps-4.1.0

**Incorrect:**

- Running Set-AzApiManagementSubscription: This cmdlet is used to modify existing API Management subscription details, not to accept Marketplace terms.

- Registering the Microsoft.Marketplace resource provider from the Azure portal: While resource provider registration is necessary for certain Azure services, it doesn’t directly facilitate the acceptance or rejection of specific Marketplace legal terms.

- Assigning the Billing administrator role to Admin1 from the Azure portal: This action assigns a billing role, which is not required for accepting Marketplace terms.

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

### Question 30

**Azure Network Configuration for Intrusion Detection**

Current Network Topology:

A company’s Azure environment currently includes the following virtual networks (VNets):

- skillcertlab-vnet1: 10.1.0.0/16

- skillcertlab-vnet2: 10.2.0.0/16

- skillcertlab-vnet3: 10.3.0.0/16

All virtual networks host various virtual machines (VMs) with diverse workloads.

Requirement:

A new virtual machine, named “skillcertlab-detect,” will be deployed within skillcertlab-vnet2. This VM will have intrusion detection software installed. The critical requirement is to ensure all traffic across all virtual networks (skillcertlab-vnet1, skillcertlab-vnet2, and skillcertlab-vnet3) is routed through the “skillcertlab-detect” virtual machine.

Question:

Which additional Azure resources or configurations are necessary to ensure all network traffic is directed through the virtual machine hosting the intrusion detection software?

**Options:**

- **A.** A. A new route table ✅
- **B.** B. Add an address space
- **C.** C. Add DNS servers
- **D.** D. Add a service endpoint

**Correct answer:** A

**Explanation:**

In order to ensure that traffic is routed via the intrusion-based device, you need to setup a route table and add the route table to the subnets in the other virtual networks.

The diagram of the hub and spoke model also shows the use of a User defined route which is nothing but a custom route table.

Since this is clearly given in the Microsoft documentation, all other options are incorrect

For more information on working with route tables, please visit the below URL

https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-create-route-table-portal

---

### Question 31

You have a Network Security Group (NSG) associated with an Azure subnet.

When you execute Get-AzureRmNetworkSecurityRuleConfig, you receive the following security rules:

Based on these rules, are FTP connections from 1.2.3.4 to 10.0.0.10/32 allowed?

**Options:**

- **A.** Allowed
- **B.** Dropped ✅
- **C.** Forwarded

**Correct answer:** B

**Explanation:**

Traffic will be dropped due to IP mismatch.

https://docs.microsoft.com/en-us/azure/virtual-network/manage-network-security-group

---

### Question 32

A company has setup an Azure subscription and a tenant. They want to ensure that only Virtual Machines of a particular SKU size can be launched in their Azure account.

They decide to implement Azure policies

Does this fulfil the requirement?

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

Yes, this can be done with Azure policies. There is also already an in-built policy which can implement this policy as shown below

For more information on an example on this, please visit the below URL

https://docs.microsoft.com/en-us/azure/governance/policy/samples/allowed-skus-storage

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

### Question 34

You have an Azure subscription that contains the following users in an Azure Active Directory tenant named preparationlabs.onmicrosoft.com:

User1 creates a new Azure Active Directory tenant named external.preparationlabs.onmicrosoft.com.

You need to create new user accounts in external.preparationlabs.onmicrosoft.com.

Solution: You instruct User3 to create the user accounts.

Does that meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

**Why correct:** When a new Azure AD tenant is created, only the **Global Administrator** of that tenant (in this case, **User1**) has the rights to create new user accounts by default. Other users from the original tenant (like **User3**) do not automatically gain permissions in the new tenant. Unless User1 explicitly assigns User3 a role such as **User Administrator** or **Global Administrator** in **external.preparationlabs.onmicrosoft.com**, User3 cannot create accounts there.

### Incorrect

**Option A. Yes** **Why incorrect:** This assumes User3 already has the necessary permissions in the new tenant. However, by default, User3 does not have administrative rights in **external.preparationlabs.onmicrosoft.com**. Without being assigned a role, User3 cannot perform this task.

###

---

### Question 35

You are currently running in your Azure subscription a virtual machine named VM-01. You install and configure a web server and a DNS server on VM-01. VM-01 has the inbound network security rules shown in the following exhibit:

Select the option that completes correctly the following sentence:

Internet users ………. .

**Options:**

- **A.** can connect to only the DNS server on VM-01
- **B.** can connect to only the web server on VM-01 ✅
- **C.** can connect to the web server and DNS server on VM-01
- **D.** cannot connect to the web server and DNS server on VM-01

**Correct answer:** B

**Explanation:**

### Correct

**Option B. can connect to only the web server on VM‑01**

- Correct.

- Inbound NSG rules determine which ports are open to traffic from the internet.

- A web server typically listens on **port 80 (HTTP)** or **443 (HTTPS)**. If the NSG allows inbound traffic on those ports but does not allow DNS traffic (port 53), then internet users can reach the web server but not the DNS server.

### Incorrect

**Option A. can connect to only the DNS server on VM‑01**

- Incorrect.

- DNS requires port **53** (UDP/TCP). If the NSG does not allow inbound traffic on port 53, internet users cannot connect to the DNS server.

**Option C. can connect to the web server and DNS server on VM‑01**

- Incorrect.

- This would only be true if inbound rules allowed both port 80/443 (web) and port 53 (DNS). Since only web traffic is permitted, this is not correct.

**Option D. cannot connect to the web server and DNS server on VM‑01**

- Incorrect.

- The NSG does allow web traffic, so internet users can connect to the web server. Saying they cannot connect at all is wrong.

###

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

### Question 37

Scenario: Your company has multiple VNets in different regions hosting critical applications.

- Applications must communicate securely with each other.

- On‑premises users need access via site‑to‑site VPN.

- Limited public IP addresses available.

- Security and cost optimization are priorities.

**Which combination of Azure services BEST addresses these challenges?**

**Options:**

- **A.** Azure VNet Peering, Azure Firewall, and Azure Load Balancer
- **B.** Azure VNet Peering, Azure Bastion, and Azure VPN Gateway
- **C.** Azure Virtual WAN, Azure Firewall, and Azure VPN Gateway ✅
- **D.** Azure Virtual WAN, Azure Application Gateway, and Azure ExpressRoute

**Correct answer:** C

**Explanation:**

**Correct**

**Option C. Azure Virtual WAN, Azure Firewall, and Azure VPN Gateway**

- Correct because this combination directly addresses all requirements:

- **Azure Virtual WAN** → Provides scalable, cost‑optimized connectivity between VNets across regions and integrates with on‑premises via VPN.

- **Azure Firewall** → Ensures secure traffic filtering and centralized security policies across VNets.

- **Azure VPN Gateway** → Enables secure site‑to‑site connectivity for on‑premises users.

- Together, they minimize the need for multiple public IPs, optimize inter‑VNet traffic costs, and enforce strong security.

**Incorrect**

**Option A. VNet Peering + Firewall + Load Balancer**

- Incorrect because while VNet Peering allows secure communication between VNets, it does not scale well across multiple regions compared to Virtual WAN.

- Load Balancer is for distributing traffic, not for secure site‑to‑site connectivity.

**Option B. VNet Peering + Bastion + VPN Gateway**

- Incorrect because Bastion is for secure remote VM access (RDP/SSH) without public IPs, not for inter‑VNet or site‑to‑site connectivity.

- This setup does not optimize costs for multi‑region traffic.

**Option D. Virtual WAN + Application Gateway + ExpressRoute**

- Incorrect because Application Gateway is for web application layer (HTTP/HTTPS) traffic management, not general VM‑to‑VM or site‑to‑site communication.

- ExpressRoute provides private connectivity but requires dedicated circuits, which increases cost and does not align with the “limited public IPs” and “cost optimization” requirement.

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

### Question 39

Scenario: Azure Tenant and Directory Management

A company has:

An Azure subscription

An Azure Active Directory (AAD) tenant named:skillcertlabs.onmicrosoft.com

**Users Defined in the Tenant:**

Name
Role
Scope

skillcertlabusr1
Global Administrator
Azure Active Directory

skillcertlabusr2
Global Administrator
Azure Active Directory

skillcertlabusr3
User Administrator
Azure Active Directory

skillcertlabusr4
Owner
Azure Subscription

The user skillcertlabusr1 (Global Administrator) creates a new directory named:staging.skillcertlabs.onmicrosoft.com

The organization now requires new user accounts to be created in the newly created directory.

**Request:**

The company asks skillcertlabusr1 to create the user accounts in the new tenant.

**Question:**

Would skillcertlabusr1 be able to fulfill this requirement?

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes** Explanation: This is correct. In Azure AD, a **Global Administrator** has full access to all administrative features in Azure Active Directory and across Azure services. This role can manage subscriptions, assign roles, and configure resources. Therefore, if the requirement is to perform administrative tasks at the subscription level, the Global Administrator can indeed meet the requirement.

### Incorrect

**Option B. No** Explanation: This is incorrect. Saying “No” would imply that the Global Administrator does not have sufficient privileges, which is not true. The Global Administrator role is the highest-level role in Azure AD and provides the necessary permissions to meet the requirement.

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

### Question 42

You are tasked with implementing a network security solution to protect your Azure VNets from common web attacks like SQL injection and cross-site scripting. Which Azure service is designed for this purpose?

**Options:**

- **A.** Azure DDoS Protection
- **B.** Azure Bastion Host
- **C.** Azure Web Application Firewall (WAF) ✅
- **D.** Azure Firewall

**Correct answer:** C

**Explanation:**

**Correct:**

**Option C.** Azure Web Application Firewall (WAF)

Azure Web Application Firewall (WAF) provides Layer 7 protection specifically designed for common web attacks including SQL injection, cross-site scripting (XSS), and OWASP Top 10 threats. Deployed on Application Gateway, Front Door, or CDN, WAF inspects HTTP/HTTPS traffic using managed rule sets (OWASP CRS, DRS) with detection/prevention modes. Microsoft Azure Administrator (AZ-104) exams test WAF as the dedicated service for application-layer security beyond network firewalls.

**Incorrect:**

**Option A.** Azure DDoS Protection

DDoS Protection defends against volumetric Layer 3/4 attacks (UDP floods, SYN floods) using network-level mitigation, not application-layer threats like SQL injection or XSS requiring HTTP payload inspection.

**Option B.** Azure Bastion Host

Bastion provides secure RDP/SSH access to VMs over TLS without public IPs, addressing management plane security, not web application runtime protection from injection attacks.

**Option D.** Azure Firewall

Azure Firewall offers Layer 3-7 network firewalling with FQDN filtering and NAT, but lacks OWASP rule sets for SQLi/XSS; requires separate WAF for application-layer web attack protection.

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

### Question 44

**Azure Virtual Machine and DNS Configuration Scenario**

Your company has deployed the following virtual machines to Azure:

**Name**
**IP Address**
**Connected to**

skillcertlabvm1
10.1.0.4
skillcertlabnetwork1/Subnet1

skillcertlabvm2
10.1.10.4
skillcertlabnetwork1/Subnet2

skillcertlabvm3
172.16.0.4
skillcertlabnetwork2/SubnetA

skillcertlabvm4
10.2.0.8
skillcertlabnetwork3/SubnetB

Subsequently, DNS services are installed on the virtual machine skillcertlabvm1.

The DNS server settings are then configured for each virtual network as detailed below:

You have to ensure all virtual machines can resolve DNS names by using the DNS service on the virtual machine skillcertlabvm1.

Which of the following would you implement for this requirement?

**Options:**

- **A.** A. Add service endpoints for the virtual network skillcertlabnetwork2 and skillcertlabnetwork3
- **B.** B. Add a service endpoint for the virtual network skillcertlabnetwork1
- **C.** C. Configure a conditional forwarder for the skillcertlabvm1 virtual machine
- **D.** D. Configure virtual network peering connections between all virtual networks ✅

**Correct answer:** D

**Explanation:**

Since the networks are isolated from each other, you still need to ensure that the machines can communicate across the virtual networks. And this can be accomplished with the help of the virtual network peering connections.

Options A and B are incorrect since service endpoints should be used when you want to connect virtual networks securely to other Azure based services.

Option C is incorrect since this should be used when you want to forward DNS requests to the Azure DNS servers.

For more information on virtual network peering connections, please visit the following URL

https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview

---

### Question 45

**Azure Multi-Factor Authentication and Conditional Access Policy Scenario**

A team has configured multi-factor authentication (MFA) for three users as follows:

**User Name**
**Multi-Factor Authentication Status**

skillcertlabusr1
Disabled

skillcertlabusr2
Enforced

skillcertlabusr3
Enabled

All these users have been added to a single group. A Conditional Access policy has been created that enforces the use of multi-factor authentication for this group across all cloud-based applications.

Question:

Given this setup, would skillcertlabusr2 be required to use multi-factor authentication when signing into Azure via a web browser?

**Options:**

- **A.** A.Yes ✅
- **B.** B.No

**Correct answer:** A

**Explanation:**

The different scenarios based on the user state is given in the Microsoft documentation. If the user state is in the Enforced state, then the user will need to use MFA for the login process

For more information on MFA user states, please visit the below URL

https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-userstates

---

### Question 46

Your company currently has a Site-to-Site connection with an Azure Virtual Private network. The VPN device that is allocated on the on-premise side is going to undergo a change in its public IP address. You have to ensure the Site-to-Site VPN connection continues to work after the change. Which of the following steps would you need to carry out after the change in the public IP address on the on-premise VPN device ensuring minimum connection downtime? Choose the answer from the options given below

**Options:**

- **A.** A. Remove the VPN connection
- **B.** B. Stop the VPN connection
- **C.** C. Modify the local gateway IP address ✅
- **D.** D. Modify the VPN gateway address
- **E.** E. Recreate the VPN connection
- **F.** F. Start the VPN connection

**Correct answer:** C

**Explanation:**

C. Modify the local gateway IP address

Explanation:

When the public IP address of the on-premise VPN device changes, the correct action is to update the local gateway IP address in the Azure VPN configuration. This ensures that the Site-to-Site VPN connection is established correctly between Azure and the on-premise network.

Why not the others?

A. Remove the VPN connection: Not required, as you don’t need to remove the connection. Just update the IP address.

B. Stop the VPN connection: Stopping the VPN is unnecessary for just changing the IP address.

D. Modify the VPN gateway address: The VPN gateway in Azure does not change; it’s the on-premise device’s IP that changes.

E. Recreate the VPN connection: Recreating the connection is typically not necessary unless there are configuration changes that can’t be resolved by just updating the IP address.

F. Start the VPN connection: Starting the connection again is not needed unless it’s explicitly stopped.

https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-create-site-to-site-rm-powershell

---

### Question 47

### Azure Network Configuration Analysis

 

A company has established the following Virtual Networks within their Azure subscription:

Name
Address Space

skillcertlab-vnetA
10.1.0.0/16

skillcertlab-vnetB
10.2.0.0/16

The following subnets are configured within these Virtual Networks:

Name
Virtual Network

subnetA
skillcertlab-vnetA

subnetB
skillcertlab-vnetA

subnetC
skillcertlab-vnetB

Additionally, a private hosted zone named skillcertlab.local has been created, with skillcertlab-vnetA designated as its registration network.

The following virtual machines are then deployed into these subnets:

Name
Subnet

skillcertlabvm1
subnetA

skillcertlabvm2
subnetB

skillcertlabvm3
subnetC

Question: Would skillcertlabvm1 be able to resolve hosts in the skillcertlab.local private hosted zone?

**Options:**

- **A.** A.Yes ✅
- **B.** B.No

**Correct answer:** A

**Explanation:**

By default, the virtual network which is registered as the registration network for a private hosted zone, also automatically becomes a resolution network as well. Hence the virtual machines hosted in this network would be able to resolve the host names.

For more information on private hosted zones, please visit the below URL

https://docs.microsoft.com/en-us/azure/dns/private-dns-overview

---

### Question 48

A team has enabled multi-factor authentication for 3 users as shown below:

**User Name**
**Multi-factor authentication status**

skillcertlabusr1
Disabled

skillcertlabusr2
Enforced

skillcertlabusr3
Enabled

A group has been created and all users have been added as part of the group. You create a conditional access policy which enforces the use of multi-factor authentication for the group for all cloud-based applications.

Would **skillcertlabusr3** be required to use multi-factor authentication when signing into Azure via the web browser?

**Options:**

- **A.** A.Yes ✅
- **B.** B.No

**Correct answer:** A

**Explanation:**

The different scenarios based on the user state is given in the Microsoft documentation. If the user state is in the enabled state, then the user will need to use MFA for the login process after the registration is complete.

For more information on MFA user states, please visit the below URL

https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-userstates

---

### Question 49

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

The company decides to use the Data Migration Assistant tool to move the servers to Azure.

Would this fulfill the requirement?

**Options:**

- **A.** A.Yes
- **B.** B.No ✅

**Correct answer:** B

**Explanation:**

This tool is used for migrating SQL Server data onto Azure. The Microsoft documentation mentions the following

For more information on the tool, please visit the below URL

https://docs.microsoft.com/en-us/sql/dma/dma-overview?view=sql-server-2017

---

### Question 50

**Azure Virtual Machine Remote Desktop Connectivity Scenario**

A company has the following virtual machines configured within their Azure subscription:

**Name**
**Operating System**
**Connected to**

skillcertlabvm1
Windows Server 2019
SubnetA

skillcertlabvm2
Windows Server 2019
SubnetB

- Public IP addresses are assigned to both virtual machines.

- At the operating system level, incoming Remote Desktop connections have been allowed on both VMs.

- Both SubnetA and SubnetB reside within the same virtual network.

Network Security Group (NSG) Configuration:

- A Network Security Group named skillcertlabnsg1 has been assigned to SubnetA. This NSG contains only the default rules.

- A Network Security Group named skillcertlabnsg2 has been assigned to the network interface of skillcertlabvm2. This NSG includes an additional custom rule with the following details:

- Priority: 100

- Name: skillcertlabrule

- Port: 3389

- Protocol: TCP

- Source: Any

- Destination: Any

- Action: Allow

Question:

Is it possible to establish a Remote Desktop connection from skillcertlabvm1 to skillcertlabvm2?

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

The correct answer is **A. Yes**.

Here’s a breakdown of why it’s possible to remote desktop into skillcertlabvm2 from skillcertlabvm1:

**Subnet connectivity:** Both virtual machines are in the same virtual network, so they can communicate with each other directly.

**Remote Desktop allowed:** Remote Desktop connections are allowed at the operating system level on both virtual machines.

**Network Security Group:** skillcertlabvm2 has a network security group (skillcertlabnsg2) assigned to its network interface. This network security group has an additional rule that allows incoming TCP connections on port 3389 from any source. This rule effectively overrides the default rule in the network security group assigned to SubnetA (skillcertlabnsg1).

Therefore, despite SubnetA having a network security group with only the default rules, the additional rule on skillcertlabvm2’s network interface allows remote desktop connections from skillcertlabvm1.

https://docs.microsoft.com/en-us/azure/virtual-network/security-overview

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

### Question 52

A company currently has an Azure account and subscription. They want to host an application using Virtual Machines and a load balancer. There is a requirement to ensure that the application is made available 99.99% of the time. Which of the following would need to be in place? You also have to minimize costs associated with the solution. Choose 2 answers from the options given below

**Options:**

- **A.** A. Create a Basic Load balancer
- **B.** B. Create a Standard Load balancer ✅
- **C.** C. Add 2 Virtual Machines to the backend pool ✅
- **D.** D. Add a Virtual Machine to the backend pool

**Correct answer:** B, C

**Explanation:**

This is clearly mentioned in the Microsoft documentation

### Correct Answers:

B. Create a Standard Load Balancer

C. Add 2 Virtual Machines to the backend pool ✅

### Explanation

Requirement Recap:

Host an application using Virtual Machines (VMs).

Use a load balancer.

Ensure high availability for the application.

Why Standard Load Balancer (B) and not Basic (A):

Feature
Basic Load Balancer
Standard Load Balancer

Availability Zones
No
Yes

SLA
No SLA
99.99%

Backend pool size
Up to 100 VMs
Up to 1000 VMs

Secure by default
No
Yes (requires NSGs)

Standard Load Balancer supports high availability, better scalability, and works with Availability Zones, which aligns with the requirement.

Why 2 VMs in the backend pool (C) and not just 1 (D):

Load balancers require at least 2 VMs in the backend pool to distribute traffic and provide redundancy.

Adding only 1 VM would not provide high availability, failing the requirement.

https://azure.microsoft.com/en-us/support/legal/sla/load-balancer/v1_0/

---

### Question 53

**Azure Virtual Network Management Scenario**

Your company has an Azure account and an Azure subscription. A Virtual Network named skillcertpro-net has been created.

The following users have been configured:

**User Name**
**Role**

skillcertpro-usr1
Owner

skillcertpro-usr2
Security Admin

skillcertpro-usr3
Network Contributor

Question:

**Which of these users would be able to add a subnet to the skillcertpro-net Virtual Network**?

**Options:**

- **A.** A. skillcertpro-usr1 only
- **B.** B. skillcertpro-usr2 only
- **C.** C. skillcertpro-usr3 only
- **D.** D. skillcertpro-usr1 and skillcertpro-usr2 only
- **E.** E. skillcertpro-usr1 and skillcertpro-usr3 only ✅
- **F.** F. skillcertpro-usr2 and skillcertpro-usr3 only

**Correct answer:** E

**Explanation:**

### Correct

**Option E. skillcertpro-usr1 and skillcertpro-usr3 only**

**Reasoning:**

- In Azure, **Owners** and **Contributors** can manage resources such as Virtual Networks.

- **Owners** have full access, including the ability to assign roles.

- **Contributors** can create and manage resources but cannot assign roles.

- **Readers** can only view resources and cannot make changes.

- Based on the scenario, skillcertpro-usr1 (Owner) and skillcertpro-usr3 (Contributor) are the ones who can manage the virtual network.

**Exam Key Point:** Resource management requires **Owner or Contributor** role assignments.

### Incorrect

**Option A. skillcertpro-usr1 only**

- Incorrect because while usr1 (Owner) can manage, usr3 (Contributor) also has management rights.

- This option ignores the Contributor role.

**Option B. skillcertpro-usr2 only**

- usr2 is a Reader, which only allows viewing resources.

- Readers cannot manage or modify resources.

**Option C. skillcertpro-usr3 only**

- Incorrect because while usr3 (Contributor) can manage, usr1 (Owner) also has management rights.

- This option ignores the Owner role.

**Option D. skillcertpro-usr1 and skillcertpro-usr2 only**

- Incorrect because usr2 (Reader) cannot manage resources.

- Only usr1 and usr3 have management rights.

**Option F. skillcertpro-usr2 and skillcertpro-usr3 only**

- Incorrect because usr2 (Reader) cannot manage resources.

- Only usr3 (Contributor) can, but this option excludes the Owner.

###

---

### Question 54

**Azure Virtual Network Role Assignment Scenario**

Your company has an Azure account and an Azure subscription, including a Virtual Network named skillcertpro-net.

**The following users have been configured:**

**User Name**
**Role**

skillcertpro-usr1
Owner

skillcertpro-usr2
Security Admin

skillcertpro-usr3
Network Contributor

Question:

Which of these users would be able to assign the Reader role to another user for the skillcertpro-net Virtual Network?

**Options:**

- **A.** A. skillcertpro-usr1 only ✅
- **B.** B. skillcertpro-usr2 only
- **C.** C. skillcertpro-usr3 only
- **D.** D. skillcertpro-usr1 and skillcertpro-usr2 only
- **E.** E. skillcertpro-usr1 and skillcertpro-usr3 only
- **F.** F. skillcertpro-usr2 and skillcertpro-usr3 only

**Correct answer:** A

**Explanation:**

The Network Contributor does not have access to assign roles. And if you look at the Security admin role , it only has the privilege to work with Security Center.

For more information on the built-in roles, please go to the below URL

https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

---

### Question 55

A team has a set of Linux Virtual Machines defined in Azure. The size of one of the Virtual Machines needs to be changed. You have to write an Azure CLI script for this. Which of the following should you do first?

**Options:**

- **A.** A. Deallocate the virtual machine first ✅
- **B.** B. Restart the virtual machine first
- **C.** C. Check the list of VM sizes on the hardware cluster
- **D.** D. Detach the primary network interface

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Deallocate the virtual machine first**

- Correct because in Azure, you cannot change the size of a VM while it is running.

- The VM must be **stopped/deallocated** before resizing.

- Once deallocated, you can run the Azure CLI command (e.g., az vm resize) to change the VM size.

### Incorrect

**Option B. Restart the virtual machine first**

- Incorrect because restarting does not allow resizing. The VM must be fully deallocated, not just restarted.

**Option C. Check the list of VM sizes on the hardware cluster**

- Incorrect because while checking available sizes is useful, it is not the required first step. The VM must be deallocated before resizing.

**Option D. Detach the primary network interface**

- Incorrect because resizing a VM does not require detaching its NIC. The NIC remains attached during the resize process.

---
