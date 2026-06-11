# Practice Set 13

Source: [https://skillcertpro.com/az-104-exam-questions/13/](https://skillcertpro.com/az-104-exam-questions/13/)
Total questions: 20

---

### Question 1

**You have a deployment template named Template1 that is used to deploy 10 Azure web apps. You need to identify what to deploy before you deploy Template1. The solution must minimize Azure costs. What should you identify?**

**Options:**

- **A.** one Azure Traffic Manager
- **B.** one Azure Application Gateway
- **C.** one App Service plan ✅
- **D.** 10 App Service plans
- **E.** five Azure Application Gateways

**Correct answer:** C

**Explanation:**

### Correct

**Option C. One App Service plan**

- Correct because multiple web apps can share a **single App Service plan**.

- This minimizes costs since you don’t need to provision separate compute resources for each app.

- The App Service plan defines the region, pricing tier, and compute resources. Once it exists, Template1 can deploy the 10 web apps into that plan.

- This is the most cost‑effective solution compared to creating multiple plans or additional services.

### Incorrect

**Option A. One Azure Traffic Manager**

- Incorrect because Traffic Manager is used for **global DNS load balancing** across multiple endpoints.

- It is not required before deploying web apps, and it would add unnecessary cost.

**Option B. One Azure Application Gateway**

- Incorrect because Application Gateway provides **layer 7 load balancing and WAF features**.

- It is not required for simply deploying web apps, and it increases costs.

**Option D. 10 App Service plans**

- Incorrect because deploying 10 separate plans would be significantly more expensive.

- Each plan provisions its own compute resources, which is unnecessary when the apps can share one plan.

**Option E. Five Azure Application Gateways**

- Incorrect because multiple gateways are not needed for basic web app deployment.

- This would add excessive cost and complexity without solving the requirement.

###

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

### Question 3

**Note:** This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.

You have an Azure subscription that contains the virtual machines shown in the following table.

You deploy a load balancer that has the following configurations:

- Name: LB1

- Type: Internal

- SKU: Standard

- Virtual network: VNET1

You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.

**Solution**: You create a Basic SKU public IP address, associate the address to the network interface of VM1, and then start VM1.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct 

Option B: No

- 
Why it is correct: The proposed solution fails because of a strict SKU mismatch. In Azure, the SKU of the Load Balancer must match the SKU of the resources (specifically Public IP addresses) associated with the Virtual Machines in its backend pool.

- 
The Conflict: * The Load Balancer (LB1) is a Standard SKU.

- 
The solution attempts to use a Basic SKU Public IP address.

- 
Rule: Standard SKU Load Balancers require Standard SKU Public IP addresses. You cannot mix Basic and Standard SKUs within the same data path.

### Incorrect 

Option A: Yes

- 
Why it is incorrect: As mentioned above, attempting to add a VM with a Basic SKU IP to a Standard SKU Load Balancer will result in a validation error in the Azure Portal or CLI. Furthermore, Basic SKU IPs are being phased out in favor of Standard SKU IPs, which offer better security (Closed by default) and Zone Redundancy.

 

###

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

### Question 5

You have a Microsoft Entra tenant that contains the users shown in the following table.

The tenant contains the groups shown in the following table.

Which **groups** can be deleted?

**Options:**

- **A.** Group1 only
- **B.** Group4 only
- **C.** Group1 and Group3 only ✅
- **D.** Group1, Group2, Group3, and Group4

**Correct answer:** C

**Explanation:**

### Correct

**Option C. Group1 and Group3 only**

- **Correct** because in Microsoft Entra ID (Azure AD), groups can be deleted if they are **not system‑protected** and do not have dependencies that prevent deletion.

- Typically, **Group1 and Group3** are standard security or Microsoft 365 groups without special restrictions, so they can be safely deleted.

- Key exam concept: **Default/system groups (like All Users or license‑assigned groups) cannot be deleted, but custom groups can.**

### Incorrect

**Option A. Group1 only**

- **Incorrect** because Group3 can also be deleted. Limiting deletion to Group1 alone ignores the fact that Group3 is also eligible.

**Option B. Group4 only**

- **Incorrect** because Group4 is likely a system or role‑assigned group that cannot be deleted. Choosing only Group4 is invalid.

**Option D. Group1, Group2, Group3, and Group4**

- **Incorrect** because not all groups can be deleted. System‑protected groups (like Group2 or Group4) cannot be removed.

---

### Question 6

You have an Azure policy as shown in the following exhibit.

What is the effect of the policy?

**Options:**

- **A.** You can create Azure SQL servers in any resource group within Subscription 1.
- **B.** You are prevented from creating Azure SQL servers anywhere in Subscription 1.
- **C.** You can create Azure SQL servers in ContosoRG1 only. ✅
- **D.** You are prevented from creating Azure SQL Servers in ContosoRG1 only.

**Correct answer:** C

**Explanation:**

**Correct**

**Option C. You can create Azure SQL servers in ContosoRG1 only.**

because the Azure policy shown restricts the creation of SQL servers to a specific resource group (ContosoRG1) within the subscription. This means that while SQL servers can be created, they are limited to that designated resource group. The effect of the policy is a **restriction**, not a complete prevention, and it enforces compliance by scoping SQL server creation to ContosoRG1.

**Incorrect**

**Option A. You can create Azure SQL servers in any resource group within Subscription 1.**

because the policy explicitly restricts SQL server creation to **ContosoRG1 only**, not across all resource groups in the subscription.

**Option B. You are prevented from creating Azure SQL servers anywhere in Subscription 1.**

because the policy does not block SQL server creation entirely. It allows creation, but only within the specified resource group.

**Option D. You are prevented from creating Azure SQL Servers in ContosoRG1 only.**

because the opposite is true: ContosoRG1 is the **only resource group allowed** for SQL server creation. The policy does not prevent creation there; it enforces it.

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

### Question 13

You have an Azure subscription that contains the resources in the following table:

In Azure, you create a private DNS zone named preparationlabs.com. You set the registration virtual network to VNet2. The preparationlabs.com zone is configured as shown in the following exhibit:

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

1. The A record for VM5 will be registered automatically in the preparationlabs.com zone.

2. VM5 can resolve VM9.preparationlabs.com.

3. VM6 can resolve vm9.preparationlabs.com.

**Options:**

- **A.** Yes, Yes, Yes
- **B.** No, Yes, Yes
- **C.** No, No, Yes ✅
- **D.** Yes, No, No

**Correct answer:** C

**Explanation:**

### Correct

**Option C. No, No, Yes**

- Correct because:

- **VM5 A record auto-registration → No**

- Auto-registration only occurs for VMs in the **registration VNet (VNet2)**.

- If VM5 is not in VNet2, its record will not be automatically registered.

- **VM5 resolving VM9.preparationlabs.com  → No**

- VM5 cannot resolve names in the private DNS zone unless its VNet is linked for resolution.

- If VM5’s VNet is not linked, resolution fails.

- **VM6 resolving VM9.preparationlabs.com  → Yes**

- VM6 is in VNet2 (the registration VNet).

- VNet2 is linked to the private DNS zone, so VM6 can resolve VM9.preparationlabs.com..

### Incorrect

**Option A. Yes, Yes, Yes**

- Incorrect because VM5’s record will not be auto-registered (wrong for statement 1).

- VM5 cannot resolve VM9 if its VNet is not linked (wrong for statement 2).

**Option B. No, Yes, Yes**

- Incorrect because VM5 cannot resolve VM9 (wrong for statement 2).

- Only VM6 can resolve VM9.

**Option D. Yes, No, No**

- Incorrect because VM5’s record is not auto-registered (wrong for statement 1).

- VM6 can resolve VM9 (wrong for statement 3).

###

---

### Question 14

A company has the following resources defined in Azure

A Virtual Network named skillcertpro-net which connects to an on-premise network using a site-to-site VPN

The Virtual Network contains a subnet named SubnetA

The subnet is associated with a network security group named skillcertpro-nsg

The subnet contains a basic internal load balancer named skillcertprolg

The Load balancer has three Azure virtual machines in the backend pool

The company has the requirement to collect data about the IP addresses that connects to the Load balancer. The company also wants their data team to run interactive queries from the Azure portal against the collected data

On which of the following resources would you need to enable diagnostics?

**Options:**

- **A.** A. The Load Balancer ✅
- **B.** B. The Network Security Group
- **C.** C. The Azure Virtual Machines
- **D.** D. None of the above

**Correct answer:** A

**Explanation:**

### Correct

**Option A. The Load Balancer**

- An **Azure Load Balancer** distributes incoming network traffic across multiple Azure Virtual Machines in a subnet.

- It ensures **high availability** and **scalability** of applications.

- In this scenario, the load balancer is the correct resource to manage traffic distribution.

- **Correct answer.**

### Incorrect

**Option B. The Network Security Group (NSG)**

- NSGs are used to **filter inbound and outbound traffic** at the subnet or NIC level.

- They enforce security rules but do not distribute traffic.

- **Incorrect.**

**Option C. The Azure Virtual Machines**

- VMs are the compute resources that run applications.

- They do not inherently distribute traffic; they are the targets of traffic distribution.

- **Incorrect.**

**Option D. None of the above**

- This is incorrect because the **Load Balancer** is explicitly required to distribute traffic.

- **Incorrect.**

---

### Question 15

You have an Azure subscription that contains three virtual networks named VNET1, VNET2, and VNET3.

Peering for VNET1 is configured as shown in the following exhibit.

Peering for VNET2 is configured as shown in the following exhibit.

Peering for VNET3 is configured as shown in the following exhibit.

The packets from VNET1 can be routed between which virtual networks?

**Options:**

- **A.** VNET2 only
- **B.** VNET3 only
- **C.** VNET2 and VNET3 only ✅

**Correct answer:** C

**Explanation:**

### Correct

**Option C. VNET2 and VNET3 only**

- Correct because Azure **VNet peering is not transitive**.

- If VNET1 is directly peered with both VNET2 and VNET3, then traffic from VNET1 can flow to both of them.

- However, packets cannot automatically route between VNET2 and VNET3 through VNET1 unless a direct peering exists between them.

- Therefore, the correct answer is that packets from VNET1 can be routed to **VNET2 and VNET3 only**.

### Incorrect

**Option A. VNET2 only**

- Incorrect because VNET1 is also peered with VNET3.

- Limiting the answer to only VNET2 ignores the valid routing path to VNET3.

**Option B. VNET3 only**

- Incorrect because VNET1 is also peered with VNET2.

- Limiting the answer to only VNET3 ignores the valid routing path to VNET2.

###

---

### Question 16

**Azure Subscription and Resource Group Configuration Analysis**

A company maintains two Azure subscriptions: “skillcertlab-staging” and “skillcertlab-production.”

The “skillcertlab-staging” subscription includes the following resource groups:

Name
Region
Lock Type

skillcertlabs-rg1
West Europe
None

skillcertlabs-rg2
West Europe
Read Only

An Azure Web App resource, named “skillcertlabapp2050,” has been deployed to the skillcertlabs-rg1 resource group within this subscription.

The “skillcertlab-production” subscription contains the following resource groups:

Name
Region
Lock Type

skillcertlabs-rg3
East Europe
Delete

skillcertlabs-rg4
Central US
None

Question:

Given this configuration, would it be possible to move the web application “skillcertlabapp2050” from skillcertlabs-rg1 to the resource group “skillcertlabs-rg3”?

**Options:**

- **A.** A. Yes ✅
- **B.** B. No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- **Explanation:**

- Azure allows resources such as Web Apps to be moved **between resource groups and even across subscriptions**, provided both subscriptions are under the same Azure Active Directory tenant.

- The source resource group (skillcertlabs-rg1) has **no lock**, so the resource can be moved out.

- The destination resource group (skillcertlabs-rg3) has a **Delete lock**, but this only prevents deletion of resources—it does not block moving resources into the group.

- Therefore, the move is possible.

### Incorrect

**Option B. No**

- Incorrect because a Delete lock does not prevent adding or moving resources into the resource group.

- It only prevents deletion of the resource group or its resources.

- Since the source group has no lock and the destination lock type is Delete (not Read-only), the move is allowed.

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

### Question 18

You are tasked with providing temporary access to a contractor for a specific project. How would you ensure the contractor‘s access is automatically revoked after the project‘s end date?

**Options:**

- **A.** Set an expiration date for the contractor‘s account during creation. ✅
- **B.** Assign the contractor a permanent license but revoke it manually after the project.
- **C.** Manually disable the contractor‘s account after the project ends.
- **D.** Create a script to disable the account on the project‘s end date.

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Set an expiration date for the contractor’s account during creation.**

- **Explanation:**

- Azure Active Directory (Azure AD) allows you to configure **account expiration dates** for guest or temporary users.

- By setting an expiration date, the contractor’s access is automatically revoked once the date is reached.

- This is the recommended approach for temporary access because it removes manual intervention and ensures compliance/security.

### Incorrect

**Option B. Assign the contractor a permanent license but revoke it manually after the project.**

- **Explanation:**

- This requires manual action after the project ends.

- Risk: If administrators forget to revoke access, the contractor retains unnecessary privileges, which is a security issue.

- Not aligned with best practices for temporary access.

**Option C. Manually disable the contractor’s account after the project ends.**

- **Explanation:**

- Similar to Option B, this relies on manual intervention.

- Manual disabling introduces human error and delays, making it unreliable for ensuring automatic revocation.

**Option D. Create a script to disable the account on the project’s end date.**

- **Explanation:**

- While technically possible, this approach adds unnecessary complexity and maintenance overhead.

- Scripts can fail or be misconfigured, and they require monitoring.

- Azure AD’s built-in expiration feature (Option A) is simpler and more secure.

###

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
