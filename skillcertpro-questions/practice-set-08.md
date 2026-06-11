# Practice Set 8

Source: [https://skillcertpro.com/az-104-exam-questions/8/](https://skillcertpro.com/az-104-exam-questions/8/)
Total questions: 55

---

### Question 1

**You have VNet1 and VNet2 with subnets and NSGs configured. VM1 is in VNet1, VM2 is in VNet2. VM1 needs to connect to VM2 on TCP port 1433. Statement: “VM1 can connect to the TCP port 1433 services on VM2.” Select Yes or No.**

You have Azure virtual machines that have the network configurations shown in the following table.

For NSG1, you create the inbound security rule shown in the following table.

For NSG2, you create the inbound security rule shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM1 can connect to the TCP port 1433 services on VM2.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because the NSG rules allow inbound traffic on TCP port 1433 to VM2.

- Virtual network peering between VNet1 and VNet2 enables connectivity across VNets.

- Since the NSG rules do not block the traffic and peering is configured, VM1 can successfully connect to VM2 on port 1433.

### Incorrect

**Option B. No**

- Incorrect because there is no restriction preventing VM1 from connecting to VM2 on TCP port 1433.

- Both the NSG configuration and VNet peering support the required connectivity.

###

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

### Question 3

You have an Azure subscription. The subscription contains virtual machines that run Windows Server and are configured as shown in the following table.

You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com.

You create a virtual network link for contoso.com as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“When VM2 starts, a record for VM2 is added to the contoso.com DNS zone.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is the **correct** answer because the virtual network VNET2 is linked to the private DNS zone contoso.com with **auto-registration enabled**. When a virtual machine (VM2) starts in a linked virtual network, its DNS records are automatically registered in the private DNS zone, even if it does not have a DNS suffix explicitly configured in Windows Server.

Auto-registration ensures that all VMs within the linked virtual network, regardless of their DNS suffix, are registered with the private DNS zone as long as the virtual network is linked and auto-registration is enabled.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/dns/private-dns-overview

- https://learn.microsoft.com/en-us/azure/dns/private-dns-autoregistration

- https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-name-resolution-for-vms-and-role-instances?tabs=redhat

---

### Question 4

You have an Azure subscription. The subscription contains virtual machines that run Windows Server and are configured as shown in the following table.

You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com.

You create a virtual network link for contoso.com as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“When VM3 starts, a record for VM3 is added to the adatum.com DNS zone.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is the **correct** answer because the virtual network VNET2 is linked to the contoso.com private DNS zone, not the adatum.com DNS zone. While VM3 has the DNS suffix adatum.com configured at the Windows Server level, the virtual network link and auto-registration are set up for the contoso.com DNS zone, not adatum.com.

For VM3 to have its record automatically registered in the adatum.com DNS zone, VNET2 must be linked to the adatum.com private DNS zone, and auto-registration must be enabled for that zone.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/dns/private-dns-overview

- https://learn.microsoft.com/en-us/azure/dns/private-dns-autoregistration

- https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-name-resolution-for-vms-and-role-instances?tabs=redhat

---

### Question 5

You have an Azure subscription that contains a resource group named RG1.

You plan to use an Azure Resource Manager (ARM) template named template1 to deploy resources. The solution must meet the following requirements:

- Deploy new resources to RG1.

- Remove all the existing resources from RG1 before deploying the new resources.

You need to complete the following command.

Which value should you choose for **Dropdown 1**?

**Options:**

- **A.** -Name
- **B.** -QueryString
- **C.** -ResourceGroupName ✅
- **D.** -Tag

**Correct answer:** C

**Explanation:**

**-ResourceGroupName** is the **correct** option because when deploying an Azure Resource Manager (ARM) template to a specific resource group using the New-AzResourceGroupDeployment command, the -ResourceGroupName parameter is used to specify the target resource group where resources will be deployed.

**-Name** is **incorrect** because this parameter is used to provide a deployment name, not a resource group name.

**-QueryString** is **incorrect** because it is not a valid parameter for specifying the target resource group in the context of New-AzResourceGroupDeployment.

**-Tag** is **incorrect** because it is used to assign metadata tags to resources, not to specify the resource group.

**Reference(s):**

- https://learn.microsoft.com/en-us/powershell/module/az.resources/new-azresourcegroupdeployment

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/deployment-manager-overview

---

### Question 6

You have an Azure subscription that contains a resource group named RG1.

You plan to use an Azure Resource Manager (ARM) template named template1 to deploy resources. The solution must meet the following requirements:

- Deploy new resources to RG1.

- Remove all the existing resources from RG1 before deploying the new resources.

You need to complete the following command.

Which value should you choose for **Dropdown 2**?

**Options:**

- **A.** All
- **B.** Complete ✅
- **C.** Incremental

**Correct answer:** B

**Explanation:**

**Complete** is the **correct** option because the Complete deployment mode ensures that all existing resources in the specified resource group are deleted if they are not defined in the ARM template. This mode is ideal for scenarios where you want to ensure that the resource group exactly matches the template’s definition, removing any unnecessary or outdated resources.

**All** is **incorrect** because it is not a valid mode for the New-AzResourceGroupDeployment command.

**Incremental** is **incorrect** because, in Incremental mode, only the resources specified in the template are updated or created, and existing resources not mentioned in the template remain unchanged. This does not meet the requirement to remove all existing resources.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/deployment-modes

- https://learn.microsoft.com/en-us/powershell/module/az.resources/new-azresourcegroupdeployment

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

### Question 12

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.**

You have a Microsoft Entra tenant named Adatum.com and an Azure Subscription named Subscription1. Adatum.com contains a group named Developers. Subscription1 contains a resource group named Dev.

You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.

**Solution**: On Dev, you assign the Logic App Contributor role to the Developers group.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes** Explanation: This is correct. The **Logic App Contributor role** grants permissions to create and manage Logic Apps within the assigned scope (in this case, the Dev resource group). Assigning this role to the Developers group ensures they can create Logic Apps while following the principle of least privilege.

### Incorrect

**Option B. No** Incorrect. Saying “No” would be wrong because the Logic App Contributor role is specifically designed to allow creation and management of Logic Apps. Therefore, the solution does meet the goal.

---

### Question 13

You have the App Service plans shown in the following table.

You plan to create the Azure web apps shown in the following table.

Which App Service plan can be used for **WebApp2**?

**Options:**

- **A.** ASP1 only ✅
- **B.** ASP3 only
- **C.** ASP1 and ASP2 only
- **D.** ASP1 and ASP3 only
- **E.** ASP1, ASP2, and ASP3

**Correct answer:** A

**Explanation:**

### Correct

**Option A. ASP1 only**

- Correct because WebApp2 must meet specific requirements (such as region, pricing tier, or OS type) that only **ASP1** satisfies.

- In Azure, a web app can only be deployed into an App Service plan that matches its requirements (same region, supported tier, and supported operating system).

- ASP1 is the only plan that aligns with WebApp2’s configuration, making it the valid choice.

### Incorrect

**Option B. ASP3 only**

- Incorrect because ASP3 does not meet WebApp2’s requirements (either wrong region, unsupported tier, or incompatible OS).

**Option C. ASP1 and ASP2 only**

- Incorrect because ASP2 is not valid for WebApp2. Including ASP2 makes this option wrong.

**Option D. ASP1 and ASP3 only**

- Incorrect because ASP3 is not valid for WebApp2. ASP1 is correct, but ASP3 invalidates this option.

**Option E. ASP1, ASP2, and ASP3**

- Incorrect because only ASP1 is valid. ASP2 and ASP3 do not meet the requirements, so this option is overly broad.

###

---

### Question 14

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.**

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer.

The effective network security configurations for VM2 are shown in the following exhibit.

You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.

You verify that the Load Balancer rules are configured correctly.

You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.

**Solution: **You modify the priority of the Allow_131.107.100.50 inbound security rule.

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because simply modifying the **priority** of the inbound NSG rule does not guarantee that the traffic will be allowed.

- If there is a **deny rule with higher priority** or if the rule is misconfigured (wrong port, wrong protocol, wrong source/destination), changing the priority alone will not fix the issue.

- To meet the goal, you must ensure that the inbound rule explicitly allows traffic from 131.107.100.50 on **TCP port 443**, and that no higher‑priority deny rules block it.

### Incorrect

**Option A. Yes**

- Incorrect because adjusting the priority without validating the actual rule configuration does not ensure connectivity.

- If the rule is already correct but blocked by another rule, lowering its priority might help, but the exam scenario implies that priority change alone is insufficient.

- The proper solution is to **create or correctly configure an inbound NSG rule** that allows traffic from the given IP on port 443.

###

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

### Question 16

You have an app named **App1** that runs on an Azure web app named **webapp1**. The developers upload an update of App1 to a Git repository named **Git1**. Webapp1 has deployment slots (e.g., **webapp1‑prod** and **webapp1‑test**). You need to ensure that the App1 update is tested before it is made available to users.

**Options:**

- **A.** Stop webapp1-prod.
- **B.** Deploy the App1 update to webapp1-prod, and then test the update.
- **C.** Deploy the App1 update to webapp1-test, and then test the update. ✅
- **D.** Stop webapp1-test.
- **E.** Swap the slots. ✅

**Correct answer:** C, E

**Explanation:**

**Correct**

- **Option C. Deploy the App1 update to webapp1‑test, and then test the update**

- Correct because deployment slots allow you to safely test updates in a **non‑production slot** (here, webapp1‑test) before exposing them to users.

- This ensures the update can be validated without impacting production traffic.

- **Option E. Swap the slots**

- Correct because once testing is complete and the update is verified in the test slot, you can **swap slots** to move the tested version into production (webapp1‑prod).

- This is the recommended deployment workflow in Azure App Service.

**Incorrect**

- **Option A. Stop webapp1‑prod**

- Incorrect because stopping the production slot would cause downtime for users and is not required for testing updates.

- **Option B. Deploy the App1 update to webapp1‑prod, and then test the update**

- Incorrect because deploying directly to production defeats the purpose of using deployment slots. It risks exposing untested code to users.

- **Option D. Stop webapp1‑test**

- Incorrect because stopping the test slot prevents you from testing the update. The test slot must remain active to validate changes.

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

### Question 18

**You have an Azure subscription that contains the resources shown in the table. You need to configure a proximity placement group for VMSS1. Which proximity placement groups should you use?**

You need to configure a proximity placement group for VMSS1.

Which proximity placement groups should you use?

**Options:**

- **A.** Proximity1 only ✅
- **B.** Proximity1 and Proximity3 only
- **C.** Proximity2 only
- **D.** Proximity1, Proximity2, and Proximity3

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Proximity1 only**

- Correct because a **proximity placement group (PPG)** requires that the VM or VMSS be in the same **region** as the PPG.

- VMSS1 can only be associated with **Proximity1**, since it matches the region of VMSS1.

- This ensures low‑latency colocation of resources within the same datacenter.

### Incorrect

**Option B. Proximity1 and Proximity3 only**

- Incorrect because VMSS1 cannot be associated with multiple PPGs.

- Additionally, Proximity3 is in a different region, so it is not valid for VMSS1.

**Option C. Proximity2 only**

- Incorrect because Proximity2 is in a different region than VMSS1.

- PPGs are region‑specific, so this option is invalid.

**Option D. Proximity1, Proximity2, and Proximity3**

- Incorrect because VMSS1 can only be linked to **one PPG** in its region.

- Including Proximity2 and Proximity3 violates the region requirement and the single‑PPG association rule.

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

### Question 20

You have an Azure subscription that contains the resources in the following table.

You install the Web Server (IIS) server role on VM1 and VM2, and then add VM1 and VM2 to LB1.

LB1 is configured as shown below.

Rule1 is configured as shown below.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“If you delete Rule1, LB1 will balance all the requests between VM1 and VM2 for all the ports.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because Azure Load Balancer requires **load balancing rules** to define how traffic is distributed across backend pool instances.

- If you delete **Rule1**, LB1 will not automatically balance requests across all ports. Instead, traffic distribution will only occur for ports explicitly defined in existing rules.

- Without a rule, LB1 cannot forward traffic to VM1 and VM2 — meaning requests will not be balanced for all ports.

### Incorrect

**Option A. Yes**

- Incorrect because deleting Rule1 does not cause LB1 to balance traffic across all ports.

- Load Balancer does not default to “all ports balancing”; it only balances traffic according to configured rules.

- This option reflects a misunderstanding of how Azure Load Balancer rules work.

---

### Question 21

You have an Azure subscription that contains the resources in the following table.

You install the Web Server (IIS) server role on VM1 and VM2, and then add VM1 and VM2 to LB1.

LB1 is configured as shown below.

Rule1 is configured as shown below.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“If Probe1.htm is present on VM1 and VM2, LB1 will balance traffic for TCP port 80 between VM1 and VM2.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- Correct because Azure Load Balancer uses **health probes** to determine the availability of backend pool instances.

- If **Probe1.htm** is present and accessible on both VM1 and VM2, the probe will succeed, marking both VMs as healthy.

- With Rule1 configured to balance traffic on **TCP port 80**, LB1 will distribute incoming requests across VM1 and VM2.

### Incorrect

**Option B. No**

- Incorrect because if the probe file exists and is accessible, the load balancer will indeed balance traffic.

- Choosing “No” would imply that LB1 does not balance traffic even when the probe succeeds, which contradicts how Azure Load Balancer operates.

###

---

### Question 22

**You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer. The effective network security configurations for VM2 are shown in the exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.**

**Solution: You create an inbound security rule that denies all traffic from the 131.107.100.50 source and has a priority of 64999.**

Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

### Correct

**Option B. No**

- Correct because the solution explicitly **denies traffic** from the source IP 131.107.100.50.

- The requirement is to **allow connections** from that IP over TCP port 443.

- By creating a deny rule, you block the traffic instead of enabling it, which fails to meet the stated goal.

### Incorrect

**Option A. Yes**

- Incorrect because answering “Yes” assumes the deny rule would allow connectivity, which is the opposite of what happens.

- A deny rule prevents traffic, so the connection issue would persist.

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

### Question 24

**You have an Azure subscription that contains the resources in the following table.** **To which subnets can you apply NSG1?**

To which subnets can you apply NSG1?

**Options:**

- **A.** the subnets on VNet1 only
- **B.** the subnets on VNet2 only
- **C.** the subnets on VNet3 only ✅
- **D.** the subnets on VNet2 and VNet3 only
- **E.** the subnets on VNet1, VNet2, and VNet3

**Correct answer:** C

**Explanation:**

### Correct

**Option C. The subnets on VNet3 only**

- Correct because **Network Security Groups (NSGs)** can only be applied to subnets or network interfaces in **Azure Resource Manager (ARM)‑based VNets**.

- If VNet3 is the only ARM‑based virtual network in the table, then NSG1 can be applied only to its subnets.

- VNets created in the **classic deployment model (VNet1, VNet2)** do not support NSGs at the subnet level.

### Incorrect

**Option A. The subnets on VNet1 only**

- Incorrect because VNet1 is a **classic VNet**, and NSGs cannot be applied to subnets in classic VNets.

**Option B. The subnets on VNet2 only**

- Incorrect for the same reason: VNet2 is also a **classic VNet**, so NSGs cannot be applied to its subnets.

**Option D. The subnets on VNet2 and VNet3 only**

- Incorrect because while VNet3 supports NSGs, VNet2 does not.

**Option E. The subnets on VNet1, VNet2, and VNet3**

- Incorrect because NSGs cannot be applied to subnets in VNet1 or VNet2 (classic VNets).

###

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

### Question 26

**Scenario:** You have an Azure subscription with a **virtual network (VNET1)** in the **East US 2 region**. Two network interfaces (**VM1‑NI** and **VM2‑NI**) are connected to VNET1. After deploying the ARM template, you must determine if the statement “VM1 and VM2 can connect to VNET1” is true.

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

### Correct

**Option A. Yes**

- **Correct because** both VM1‑NI and VM2‑NI are explicitly connected to **VNET1**.

- In Azure, if a network interface is attached to a VM and that NIC is connected to a virtual network, the VM automatically gains connectivity to that VNet.

- Therefore, VM1 and VM2 can communicate with resources in VNET1 without additional configuration.

### Incorrect

**Option B. No**

- **Incorrect because** there is no restriction preventing VM1 and VM2 from connecting to VNET1.

- Since their NICs are already associated with VNET1, denying connectivity would contradict Azure’s default networking behavior.

###

---

### Question 27

You plan to deploy an Azure container instance by using the following Azure Resource Manager template.

Based on the information presented, select the answer choice that completes the following statement correctly.

**“Internet users ________________________________________.”**

**Options:**

- **A.** can connect to the container instance from any device ✅
- **B.** cannot connect to the container instance
- **C.** can only connect to the container instance from devices that run Windows

**Correct answer:** A

**Explanation:**

### **Correct**

- **Option A. Internet users can connect to the container instance from any device**

- Correct: When an Azure Container Instance is deployed with a **public IP address** and exposed ports, it is accessible over the internet.

- Connectivity is not restricted by client device type (Windows, Linux, macOS, mobile, etc.).

- This matches the requirement: internet users can connect from **any device**.

### **Incorrect**

- **Option B. Internet users cannot connect to the container instance**

- Incorrect: This would be true only if the container instance was deployed with **no public IP** or restricted networking.

- Since the template exposes the container publicly, this option is wrong.

- **Option C. Internet users can only connect from Windows devices**

- Incorrect: Azure networking does not restrict access based on operating system.

- Any device capable of making a network request can connect, provided the container is publicly exposed.

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

### Question 29

You have an Azure subscription.

You need to deploy a virtual machine by using an Azure Resource Manager (ARM) template.

You need to complete the following template.

Which value should you choose for **Placeholder 2**?

**Options:**

- **A.** Array
- **B.** Image
- **C.** ImageReference ✅
- **D.** vhd

**Correct answer:** C

**Explanation:**

**ImageReference** is **correct** because in an Azure Resource Manager (ARM) template, ImageReference is used within the storageProfile section to specify the image details (such as publisher, offer, SKU, and version) for a virtual machine. This configuration tells Azure which image to use when creating the VM.

**Array** is **incorrect** as it is not relevant to defining the image configuration for a virtual machine in an ARM template.

**Image** is **incorrect** because it is not the specific attribute used within storageProfile for defining the VM image. The correct term is ImageReference.

**vhd** is **incorrect** because vhd is used to specify a virtual hard disk file when using a custom VHD image rather than a platform image.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/templates/microsoft.compute/virtualmachines

- https://learn.microsoft.com/en-us/azure/virtual-machines/windows/ps-template

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

### Question 31

You create an App Service plan named Plan1 and an Azure web app named webapp1.

You discover that the option to create a staging slot is unavailable.

You need to create a staging slot for Plan1.

What should you do first?

**Options:**

- **A.** From Plan1, scale up the App Service plan. ✅
- **B.** From Plan1, scale out the App Service plan.
- **C.** From webapp1, add a custom domain.
- **D.** From webapp1, modify the Application settings.

**Correct answer:** A

**Explanation:**

**From Plan1, scale up the App Service plan** is the **correct** answer here. To create a staging slot for an Azure App Service plan, it must be in the Standard, Premium, or higher pricing tier. Since staging slots are not available for the Free, Shared, or Basic tiers, the solution here is to scale up Plan1 to a tier that supports deployment slots. This will allow you to create a staging slot for testing or other purposes without affecting the production slot.

**From Plan1, scale out the App Service plan** is **incorrect** because scaling out increases the number of instances within the same tier but does not change the tier itself. To enable staging slots, you need to change the tier by scaling up.

**From webapp1, add a custom domain** is **incorrect** because adding a custom domain does not impact the ability to create a staging slot.

**From webapp1, modify the Application settings** is **incorrect** because modifying application settings does not affect the availability of staging slots, which is determined by the App Service plan tier.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots

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

### Question 33

You have an Azure subscription.

You deploy a virtual machine scale set that is configured as shown in the following exhibit.

Based on the information provided, select the answer choice that completes the following statement correctly.

**“At 9:00 AM, the scale set starts and CPU utilization is 90 percent for 15 minutes. How many virtual machine instances will be running at 9:15 AM?”**

**Options:**

- **A.** 2
- **B.** 3 ✅
- **C.** 4
- **D.** 5

**Correct answer:** B

**Explanation:**

**3** is the **correct** answer here. Given that the CPU utilization is 90% for 15 minutes, which is above the scale-out threshold of 75%, the scale set will evaluate this sustained high CPU usage after the 10-minute duration set for scale-out. Since the threshold has been exceeded, the scale set will add 1 instance as specified in the “Number of instances to increase by” setting. Therefore, starting with two instances at 9:00 AM, the scale set will have three instances running by 9:15 AM.

**Reference(s):**

- https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview

- https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview

- https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-portal

---

### Question 34

You have the role assignment file shown in the following exhibit.

Based on the information presented, select the answer choice that completes the following statement correctly.

**“____________________________ can create a virtual machine in RG1.”**

**Options:**

- **A.** User1 and User4 ✅
- **B.** User1, User2, and User3
- **C.** User1, User2, and User4
- **D.** User1, User3, and User4
- **E.** User1, User2, User3, and User4

**Correct answer:** A

**Explanation:**

**User1 and User4** is **correct** because creating a virtual machine in RG1 requires permissions at the RG1 level or higher within the subscription.

- User1 has the Owner role at the subscription level, which grants full access to manage resources within the entire subscription, including RG1.

- User4 has the Contributor role specifically on RG1, which allows them to manage resources within RG1, including creating and deleting virtual machines. However, as a Contributor, User4 cannot modify Role-Based Access Control (RBAC) settings.

**User2** is **incorrect** because their Owner role is limited to RG2, and they do not have permissions in RG1.

**User3** is **incorrect** because their Owner role applies only to VM1, so they do not have permissions to create new resources in RG1.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles

- https://learn.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles

---

### Question 35

You have a Microsoft Entra tenant named adatum.com that contains the groups shown in the following table.

Adatum.com contains the users shown in the following table.

You assign the Microsoft Entra ID P2 license to Group1 and User4.

Which users are assigned the Microsoft Entra ID P2 license?

**Options:**

- **A.** User4 only
- **B.** User1 and User4 only ✅
- **C.** User1, User2, and User4 only
- **D.** User1, User2, User3, and User4

**Correct answer:** B

**Explanation:**

**User1 and User4 only** is **correct** because group-based licensing in Microsoft Entra ID does not support nested groups. When a license is assigned to Group1, only the direct members of Group1 receive the license. This means User1 (direct member of Group1) and User4 (who received the license directly) are the only users assigned the Microsoft Entra ID P2 license. User2 and User3 do not receive the license because they are members through nested groups (Group2 and Group3).

**Reference(s):**

- https://learn.microsoft.com/en-us/entra/identity/users/licensing-group-advanced#limitations-and-known-issues

---

### Question 36

You have an Azure subscription named Subscription1. Subscription1 contains a virtual machine named VM1.

You install and configure a web server and a DNS server on VM1.

VM1 has the effective network security rules shown in the following exhibit.

Based on the information presented, select the answer choice that completes the following statement correctly.

**“Internet users _________________________________________.”**

**Options:**

- **A.** can connect to only the DNS server on VM1
- **B.** can connect to only the web server on VM1 ✅
- **C.** can connect to the web server and the DNS server on VM1
- **D.** cannot connect to the web server and the DNS server on VM1

**Correct answer:** B

**Explanation:**

**can connect to only the web server on VM1** is **correct** because the web server uses port 80, which is not blocked by any of the inbound security rules. However, Rule2 (with priority 100) explicitly denies access to ports 50-60 for all protocols, including port 53, which is used by the DNS service. Since port 53 is blocked by Rule2, internet users cannot connect to the DNS server on VM1 but can still connect to the web server.

**Can connect to only the DNS server on VM1** is **incorrect** because port 53 for DNS is blocked by Rule2.

**Can connect to the web server and the DNS server on VM1** is **incorrect** because the DNS port (53) is blocked.

**Cannot connect to the web server and the DNS server on VM1** is **incorrect** because the web server on port 80 is still accessible.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview

---

### Question 37

You have an Azure subscription.

You plan to deploy the following file named File1.bicep.

For each of the following statements, select Yes if the statement is true. Otherwise, select No.

**“The name of the virtual network will be the same as the location of the resource group.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

**No** is **correct** because the name of the virtual network in the provided Bicep file is explicitly set as ‘VNET1’. The location parameter is assigned based on the location of the resource group, but this value only determines where the virtual network is deployed, not its name. Therefore, the name of the virtual network will be ‘VNET1’, regardless of the resource group’s location.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/bicep-functions-resourcegroup

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

### Question 39

You have the App Service plans shown in the following table.

You plan to create the Azure web apps shown in the following table.

Which App Service plan can be used for **WebApp1**?

**Options:**

- **A.** ASP1 only
- **B.** ASP3 only
- **C.** ASP1 and ASP2 only
- **D.** ASP1 and ASP3 only ✅
- **E.** ASP1, ASP2, and ASP3

**Correct answer:** D

**Explanation:**

**ASP1 and ASP3 only** is **correct** because WebApp1 requires a .NET 8 (LTS) runtime stack, which is supported on both Windows and Linux platforms. ASP1 is a Windows-based App Service plan in the West US region, which aligns with the requirements for WebApp1. ASP3 is a Linux-based App Service plan, also located in the West US region, which is compatible with .NET 8. Therefore, both ASP1 and ASP3 can host WebApp1.

**ASP1 only** is **incorrect** because ASP3 can also support .NET 8 (LTS) on Linux.

**ASP3 only** is **incorrect** because ASP1 also supports .NET 8 (LTS) on Windows.

**ASP1 and ASP2 only** is **incorrect** because ASP2 is in the Central US region, which does not align with the West US requirement for WebApp1.

**ASP1, ASP2, and ASP3** is **incorrect** because ASP2 is not in the West US region.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/app-service/overview

---

### Question 40

**Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.**

You have a Microsoft Entra tenant named Adatum.com and an Azure Subscription named Subscription1. Adatum.com contains a group named Developers. Subscription1 contains a resource group named Dev.

You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.

**Solution**: On Dev, you assign the Contributor role to the Developers group.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is **correct** because assigning the **Contributor** role to the Developers group at the Dev resource group level allows the group members to manage all resources within the resource group, including the ability to create Azure Logic Apps. The Contributor role provides full access to manage resources without granting permissions to assign roles or manage access, which fulfills the requirement stated in the question.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#contributor

---

### Question 41

You have a virtual network named VNET1 that contains the subnets shown in the following table.

You have Azure virtual machines that have the network configurations shown in the following table.

For NSG1, you create the inbound security rule shown in the following table.

For NSG2, you create the inbound security rule shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM2 can connect to the TCP port 1433 services on VM3.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes** is the **correct** answer because there are no Network Security Groups (NSGs) applied to Subnet2, where VM3 resides, or directly to VM3’s network interface. NSG1, applied to Subnet1, allows traffic from Subnet2 (10.10.2.0/24) to Subnet1 (10.10.1.0/24) on TCP port 1433.

The rule in NSG2 that blocks inbound traffic specifically applies to traffic from VM2 (10.10.2.5) to VM1 (10.10.1.5), but not to VM3 (10.10.2.6). Therefore, VM2 can successfully connect to TCP port 1433 services on VM3 without restriction.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview

- https://learn.microsoft.com/en-us/azure/virtual-network/network-security-group-how-it-works

---

### Question 42

You have an Azure subscription.

You need to deploy a virtual machine by using an Azure Resource Manager (ARM) template.

You need to complete the following template.

Which value should you choose for **Placeholder 1**?

**Options:**

- **A.** reference
- **B.** resourceId ✅
- **C.** Union

**Correct answer:** B

**Explanation:**

**resourceId** is **correct** because in Azure Resource Manager (ARM) templates, resourceId is used to reference the unique identifier of an existing resource. In this template, resourceId can generate the ID for the network interface, which is required to establish the dependency on the network interface for VM1.

**reference** is **incorrect** because it is used to obtain runtime properties of a resource, rather than generating a resource ID within the template.

**Union** is **incorrect** as it does not apply to this context in ARM templates.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/overview

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

### Question 44

You have a Microsoft Entra tenant that contains the users shown in the following table.

You need to perform the following tasks:

- Create an attribute named Property1.

- Ensure that Admin1 can assign Property1 to User1.

Which **two** settings should you configure on the Microsoft Entra ID blade?

**Options:**

- **A.** Custom security attributes ✅
- **B.** Roles and administrators ✅
- **C.** External Identities
- **D.** Administrative units
- **E.** Application proxy
- **F.** Microsoft Entra Connect

**Correct answer:** A, B

**Explanation:**

**Custom security attributes** is **correct** because this setting allows you to create custom attributes, such as Property1, which can then be assigned to users within Microsoft Entra ID.

**Roles and administrators** is **correct** because it is necessary to configure roles and administrators to ensure that Admin1 has the permissions needed to assign Property1 to User1. The User Administrator role provides Admin1 with permissions to manage user accounts, which would include the assignment of custom security attributes.

**External Identities** is **incorrect** because this setting is used for managing external users and does not relate to configuring or assigning custom attributes within the tenant.

**Administrative units** is **incorrect** because administrative units are used to delegate administrative permissions over subsets of users, groups, or devices, not for configuring custom attributes.

**Application proxy** is **incorrect** as it is used to allow secure access to on-premises applications, unrelated to custom attributes or roles.

**Microsoft Entra Connect** is **incorrect** because it is a tool used to synchronize on-premises AD with Microsoft Entra ID and is not involved in configuring custom attributes or role assignments.

**Reference(s):**

- https://learn.microsoft.com/en-us/entra/fundamentals/whatis

---

### Question 45

You have an Azure subscription that contains the resources shown in the following table.

You create a route table named RT1 in the East US Azure region.

To which resources can you associate RT1?

**Options:**

- **A.** VNet1 only
- **B.** Subnet1 only ✅
- **C.** VNet1 and NIC1 only
- **D.** Subnet1 and NIC1 only
- **E.** VNet1, Subnet1, and NIC1

**Correct answer:** B

**Explanation:**

**Subnet1 only** is the **correct** answer because in Azure, route tables (like RT1) can only be associated with subnets, not with virtual networks (VNet1) or network interfaces (NIC1). When you associate a route table with a subnet, all resources (like virtual machines) within that subnet use the custom routes defined in the route table.

- **VNet1** cannot be directly associated with a route table. Instead, route tables are applied at the subnet level within a virtual network.

- **NIC1** (network interface) cannot be associated with a route table either.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview

- https://learn.microsoft.com/en-us/azure/virtual-network/manage-route-table

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

### Question 49

You have an Azure subscription that contains the virtual networks shown in the following table.

Each virtual network has 50 connected virtual machines.

You need to implement Azure Bastion. The solution must meet the following requirements:

- Support host scaling.

- Support uploading and downloading files.

- Support the virtual machines on both VNet1 and VNet2.

- Minimize the number of addresses on the Azure Bastion subnet.

You need to configure Azure Bastion.

What Public IP should you use?

**Options:**

- **A.** Basic SKU with a dynamic allocation
- **B.** Basic SKU with a static allocation
- **C.** Standard SKU with a static allocation ✅

**Correct answer:** C

**Explanation:**

**Standard SKU with a static allocation** is **correct** because it is required to support host scaling and advanced features such as file upload and download when implementing Azure Bastion. The Standard SKU is necessary to meet these requirements, and static allocation of the Public IP ensures a consistent IP address for accessing the Bastion host, which is recommended for production environments.

**Basic SKU with a dynamic allocation** is **incorrect** because the Basic SKU does not support the necessary features like file upload and download or host scaling.

**Basic SKU with a static allocation** is **incorrect** because, similar to the dynamic allocation, the Basic SKU does not support the advanced features required for this setup.

**Reference(s)**:

- https://learn.microsoft.com/en-us/azure/bastion/bastion-overview

- https://learn.microsoft.com/en-us/azure/bastion/configuration-settings

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

### Question 53

You have an Azure subscription. You plan to use Azure Resource Manager templates to deploy 50 Azure virtual machines that will be part of the same availability set.

You need to ensure that as many virtual machines as possible are available if the fabric fails or during servicing.

You need to configure the following template.

What value should you choose for “**platformFaultDomainCount**”?

**Options:**

- **A.** 1
- **B.** 2
- **C.** 3 ✅

**Correct answer:** C

**Explanation:**

**3** is **correct** because, in regions that support it, Azure availability sets can be spread across **up to 3 fault domains** by default. This configuration maximizes availability by distributing virtual machines across more physical racks, thereby increasing the likelihood of VM availability during a fabric failure.

**0**, **1**, and **2** are incorrect because:

- **0** would mean no fault domain distribution, resulting in no fault tolerance.

- **1** would only provide minimal distribution, reducing high availability.

- **2** would offer some availability, but **3** provides the maximum distribution across fault domains, which is preferred when trying to maximize the number of available VMs in case of a failure.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/virtual-machines/availability-set-overview

- https://learn.microsoft.com/en-us/azure/virtual-machines/maintenance-and-updates

---

### Question 54

You have an Azure subscription. You plan to use Azure Resource Manager templates to deploy 50 Azure virtual machines that will be part of the same availability set.

You need to ensure that as many virtual machines as possible are available if the fabric fails or during servicing.

You need to configure the following template.

What value should you choose for “**platformUpdateDomainCount**”?

**Options:**

- **A.** 1
- **B.** 6
- **C.** 12
- **D.** 17
- **E.** 20 ✅

**Correct answer:** E

**Explanation:**

**20** is **correct** because Azure Availability Sets support up to 20 update domains by default. Update domains are used to ensure that virtual machines in the same availability set do not go down for maintenance at the same time. By setting the platformUpdateDomainCount to 20, you maximize the distribution of virtual machines across update domains, which helps maintain availability during planned maintenance events.

**0**, **1**, **6**, **12**, and **17** are incorrect because:

- **0** would mean no update domain distribution, resulting in all VMs potentially being impacted by maintenance at the same time.

- **1**, **6**, **12**, and **17** would offer fewer update domains, which would not maximize availability during updates as effectively as using **20**.

**Reference(s):**

- https://learn.microsoft.com/en-us/azure/virtual-machines/maintenance-and-updates

- https://learn.microsoft.com/en-us/azure/virtual-machines/availability-set-overview

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
