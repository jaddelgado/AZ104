# Practice Set 18

Source: [https://skillcertpro.com/az-104-exam-questions/18/](https://skillcertpro.com/az-104-exam-questions/18/)
Total questions: 60

---

### Question 1

Contoso uses a wildcard certificate stored in Azure Key Vault to secure many App Services across subscriptions. They want central rotation in Key Vault and automatic sync to the apps when the certificate is renewed. The solution must keep bindings SNI-based and avoid manual re-uploads on every renewal.
Requirements
 Use wildcard cert from Key Vault
 Auto-sync to apps on renewal
 Keep SNI bindings
Which option should you choose?

**Options:**

- **A.** A. Upload PFX to each app
- **B.** B. Free managed certificate
- **C.** C. Lets Encrypt site extension
- **D.** D. Import certificate from Key Vault ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Importing a certificate directly from Key Vault lets App Service track the Key Vault secret for your wildcard certificate. When you renew/rotate the certificate in Key Vault (keeping the same secret name), App Service can sync the latest version and update the SNI binding without you re-uploading it everywhere. This centralizes lifecycle control, supports wildcards, and scales across many apps and subscriptions while preserving your existing public CA and issuance processes.
Why the other options are incorrect
A: Uploading PFX to each app fragments management; every renewal becomes a manual, per-app operation.
B: The free managed certificate doesnt cover all wildcard scenarios and is tied to a single app/domain flow rather than your central KV lifecycle.
C: Lets Encrypt extensions add custom automation you must maintain; they arent as natively integrated as Key Vault imports for enterprise-wide reuse.

---

### Question 2

You have an Azure subscription that contains the following resources:
A resource group named RG1 in the West US region
A resource group named RG2 in the Central US region
A virtual network named VNet1 that is deployed to the West US region in RG1
A virtual network named VNet2 that is deployed to the Central US region in RG1
A virtual network named VNet3 that is deployed to the West US region in RG2
You need to deploy a virtual machine named VM1 to RG1 in the West US region.
To which virtual network or virtual networks can you connect VM1?

**Options:**

- **A.** A. VNet1 only
- **B.** B. VNet1 or VNet2 only
- **C.** C. VNet1 or VNet3 only ✅
- **D.** D. VNet1, VNet2 or VNet3

**Correct answer:** C

**Explanation:**

For an Azure virtual machine to connect to a virtual network, the VM and the virtual network must be in the same region. Microsofts virtual network documentation states that any Azure resource connected to a virtual network must be in the same region as that virtual network.
The resource group does not have to match. Microsofts networking documentation says a connected Azure resource can be in the same resource group or a different resource group from the virtual network, and the NIC guidance also says a NIC can exist in the same or a different resource group from both the VM and the virtual network it connects to. Since VM1 will be in West US, it can connect to VNet1 and VNet3, both of which are also in West US. It cannot connect to VNet2 because VNet2 is in Central US.
Why the other options are incorrect:
 A. VNet1 only  This is too restrictive. VNet1 is valid because it is in West US, but VNet3 is also valid because it is also in West US. The fact that VNet3 is in a different resource group does not block the connection.
 B. VNet1 or VNet2 only  VNet1 is valid, but VNet2 is not because it is deployed in Central US while VM1 is being deployed in West US. Azure requires the connected resource and the virtual network to be in the same region.
 D. VNet1, VNet2 or VNet3  This includes VNet2, which makes it incorrect. VNet2 is in the wrong region for VM1, even though it is in the same resource group as the VM. Region compatibility matters here, not just resource group placement.

---

### Question 3

Fabrikam wants a single, simple experience where users register both MFA and SSPR together to reduce helpdesk calls. They will roll this out to all licensed users and want to avoid separate campaigns and portals.
To enable a unified SSPR + MFA registration flow, turn on __________.

**Options:**

- **A.** A. Security defaults
- **B.** B. SSPR (Selected)
- **C.** C. Registration campaign
- **D.** D. Combined registration ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Combined security info registration merges MFA and SSPR enrollment into one wizard, reducing friction, improving completion rates, and aligning recovery methods across both features. It requires no separate campaigns and becomes the default registration path for users in scope.
Why the other options are incorrect
A: Security defaults enforce baseline protections but dont deliver the combined registration UI; experience remains fragmented.
B: Enabling SSPR for a scope controls who can reset, not how they register; it doesnt unify MFA+SSPR enrollment.
C: Registration campaigns prompt users but still rely on the existing registration flows; they dont replace the combined experience toggle.

---

### Question 4

Admins need to RDP/SSH to VMs without public IPs. Security wants a platform service that terminates in the Azure portal and leverages TLS over the control plane instead of opening inbound NSG rules. Youll deploy it to the production VNet and keep existing VM configs unchanged.
Which option should you choose?

**Options:**

- **A.** A. Deploy Azure Bastion ✅
- **B.** B. Create a VPN gateway
- **C.** C. Enable Just-In-Time (JIT) on the VMs
- **D.** D. Assign a public IP to each VM

**Correct answer:** A

**Explanation:**

Choice A is correct. Azure Bastion provides agentless, browser-based RDP/SSH to VMs without public IPs. Its deployed per VNet and uses a managed PaaS endpoint reachable through the Azure portal, so you dont expose RDP/SSH on the Internet or change VM NICs. Bastion also avoids per-VM configuration drift and keeps connections inside Azures control plane, aligning with least-exposure principles.
Why the other options are incorrect
B: A VPN gateway works but requires client configuration, routes, and ongoing gateway ops; its not the simplest way to give admins just-in-time portal access.
C: JIT limits exposure windows but still assumes public endpoints or inbound rules; it doesnt replace a private access path.
D: Adding public IPs increases attack surface and contradicts the requirement to avoid inbound exposure.

---

### Question 5

Leadership wants cross-subscription backup dashboards with trends, protectable vs protected counts, policy compliance, and job status history retained in Log Analytics. They dont want to build custom workbooks from scratch.
To get turnkey dashboards with historical trends backed by Azure Monitor Logs, enable __________ in Backup Center and point it at a Log Analytics workspace.

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
C: Advisor offers recommendations; it doesnt generate backup reports with historical charts.

---

### Question 6

Youre creating Bastion in a production VNet. The deployment fails with a subnet error. You want the supported subnet name and minimum size so the service will provision cleanly.
Azure Bastion requires a subnet named __________ with a minimum prefix of __________.

**Options:**

- **A.** A. GatewaySubnet, /27
- **B.** B. AzureBastionSubnet, /26 ✅
- **C.** C. AzureFirewallSubnet, /24
- **D.** D. BastionSubnet, /27

**Correct answer:** B

**Explanation:**

Choice B is correct. Bastion must be deployed into a subnet named AzureBastionSubnet with a /26 or larger address space. The dedicated name lets the platform apply the right policies and scale units. Using the correct name + size prevents deployment errors and ensures capacity for concurrent sessions and future scaling.
Why the other options are incorrect
A: GatewaySubnet is reserved for VPN/ExpressRoute gateways.
C: AzureFirewallSubnet is for Azure Firewall and the size is unrelated to Bastion requirements.
D: The required name is AzureBastionSubnet (exact), not BastionSubnet, and /27 is too small.

---

### Question 7

A VMSS behind a Standard Load Balancer makes heavy outbound calls to partner APIs. During spikes, outbound connections intermittently fail with timeouts. You suspect SNAT port exhaustion. You need a fix that scales outbound reliably without rewriting apps or redesigning the LB rules.
Requirements
 Scale outbound SNAT capacity
 Keep current LB config for inbound
 Minimal app changes
Which option should you choose?

**Options:**

- **A.** A. Attach a NAT Gateway to the subnet ✅
- **B.** B. Add more frontend IPs to the LB
- **C.** C. Enable HA Ports on the LB rule
- **D.** D. Switch to Basic SKU

**Correct answer:** A

**Explanation:**

Choice A is correct. NAT Gateway provides dedicated, scalable SNAT with large port pools and optional public IP prefix. By attaching it to the subnet, outbound from all instances uses the gateways ports/addresses, eliminating SNAT exhaustion from the Standard LBs shared outbound flow. Inbound load balancing can remain unchanged; you simply separate outbound from the LB for better scalability.
Why the other options are incorrect
B: More frontend IPs on the LB may add some SNAT ports in certain patterns, but it remains LB-bound and brittle.
C: HA Ports affects inbound all-ports rules; it doesnt expand outbound SNAT capacity.
D: Basic SKU reduces features/security and doesnt solve SNAT scaling.

---

### Question 8

You need a one-line change to return the top 10 IPs causing failed sign-ins in the last 24 hours, showing a single row per IP with the number of failures. Youll add sorting and a top limit after the aggregation.
Which option should you choose?

**Options:**

- **A.** A. extend
- **B.** B. summarize ✅
- **C.** C. distinct
- **D.** D. render

**Correct answer:** B

**Explanation:**

Choice B is correct. summarize creates grouped aggregates such as counts per IP:
SignInLogs | where ResultType != 0 and TimeGenerated &gt; ago(24h) | summarize Failures = count() by IPAddress | top 10 by Failures desc
This yields one row per IP with a failure countexactly what you need before top and order by logic.
Why the other options are incorrect
A: extend adds calculated columns; it doesnt aggregate.
C: distinct de-duplicates values but doesnt count them.
D: render visualizes results; it requires an aggregated dataset first.

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

Choice C is correct. A Recovery Services vault is the classic Azure Backup container for protecting Azure VMs and Azure Files. You create the vault in the same region as the resources and configure backup policies (schedule/retention), soft delete and security settings (e.g., multi-user authorization), then enable protection. The vault becomes your central point for jobs, restore points, and monitoringideal when you want one place to manage VM and Files backups.
Why the other options are incorrect
A: A storage account stores data; it doesnt provide backup policies or restore orchestration.
B: A Backup vault targets modern workloads and scenarios, but for Azure VMs and Azure Files the Recovery Services vault is the expected container in AZ-104 contexts.
D: Key Vault secures secrets/certs; it isnt a backup container.

---

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
SMB Multichannel allows a single SMB session to use multiple network connections in parallel, increasing aggregate throughput and providing resiliency if one path degrades. In Azure Files, this capability is available only on premium (SSD) file shares and is enabled by default for compatible SMB clients. Premium file shares live in FileStorage accounts and offer deterministic performance (provisioned IOPS/throughput scale with the share size), which is exactly what Multichannel is designed to take advantage ofmultiple TCP channels can fully utilize the premium shares bandwidth ceiling. To meet the minimize costs requirement, choose LRS for redundancy: its the least expensive premium redundancy option, while still delivering the Multichannel feature and premium performance needed by SMB workloads. If you later require zone-level durability, you can evaluate upgrading to ZRS, but LRS is the cost-efficient starting point that satisfies the feature requirement today.
Why the others are incorrect (expanded)
A: Standard performance with LRS  Standard Azure Files (GPv2) uses HDD-backed capacity tiers and doesnt support SMB Multichannel at all. Even though LRS is cheap, it fails the functional requirement because Multichannel is unavailable on the standard tier.
C: Standard performance with ZRS  ZRS improves availability across zones, but its still standard tier, so Multichannel remains unsupported. Higher availability without the required feature doesnt solve the problem.
D: Premium performance with ZRS  This configuration does support SMB Multichannel (its premium), but it increases cost relative to premium LRS. Since the requirement explicitly says minimize costs, paying the ZRS premium isnt justified unless you also require zone-level durability.
E: Standard performance with GRS  Like A and C, the standard tier means no Multichannel. GRS adds cross-region durability/cost, which doesnt help meet the Multichannel requirement and increases spend unnecessarily.
F: Premium performance with GRS  GRS isnt a supported redundancy option for FileStorage-based premium file shares. Premium shares currently support LRS (and in many regions ZRS). Selecting premium+GRS would be unsupported and therefore not viable.

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

Choice A is correct. File Recovery mounts a recovery point as a temporary iSCSI session to your machine so you can browse and copy only the needed files/folders. It avoids VM redeployments, keeps the original VM intact, and is typically the fastest way to surgically recover content from a protected VMs restore point.
Why the other options are incorrect
B: Restore VM creates a new VM from the restore point (or replaces disks), which is overkill when you only need a few folders.
C: Restore disk produces managed disks you then attach to a VM; still heavier than browsing and copying.
D: Azure Site Recovery is a DR/replication solution, not the VM backup restore workflow for recovering files.

---

### Question 12

A Bicep file must add a new subnet to an existing virtual network. The VNet already exists in production and must not be recreated. You also want the subnet declared as a child resource of that VNet so name scoping is concise and validation is clear.
Requirements
 Treat the VNet as existing
 Add a new subnet as a child resource
 Keep the declaration minimal and safe
Which option should you choose?

**Options:**

- **A.** A. parent
- **B.** B. scope
- **C.** C. symbolicName
- **D.** D. existing ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. In Bicep, mark the VNet as existing so the compiler knows not to create or modify the VNet resource itself. Then declare the subnet as a child under that existing parent. This pattern guarantees you attach to whats already there and only create the subnet:
param vnetName string
resource vnet ‘Microsoft.Network/virtualNetworks@2023-09-01‘ existing = {
  name: vnetName
}
resource snet ‘Microsoft.Network/virtualNetworks/subnets@2023-09-01‘ = {
  name: ‘${vnet.name}/app-subnet‘
  properties: {
    addressPrefix: ‘10.10.2.0/24‘
  }
}
Using existing is the safest way to augment live environments: deployments remain idempotent, diffs are predictable, and you avoid accidental VNet replacement. If you later need to pass the VNet to modules, you can also pass the existing resource symbol to keep scope and lineage intact.
Why the other options are incorrect
A: parent is used with a resource declaration to set hierarchy, but you still need existing on the VNet to prevent creation. parent alone wont treat the VNet as pre-existing.
B: scope targets where a module or extension resource is deployed; it doesnt mark the VNet as existing.
C: symbolicName (the local name like vnet) is just an identifier; it doesnt change deployment behavior.

---

### Question 13

You plan to migrate a distributed on-premises app App1 to Azure. After the move, App1 will run on nine Azure VMs. You must ensure at least eight VMs remain running during planned Azure maintenance.
What should you create?

**Options:**

- **A.** A. one virtual machine scale set that has 12 virtual machine instances
- **B.** B. one virtual machine scale set that has 10 virtual machine instances ✅
- **C.** C. one Availability Set that has three fault domains and one update domain
- **D.** D. one Availability Set that has 10 update domains and one fault domain

**Correct answer:** B

**Explanation:**

Choice B is correct.
A VM scale set (uniform) spreads instances across update domains and updates one update domain at a time during planned maintenance. With 10 instances and the default 5 update domains, each UD holds about 2 instances; at worst 2 are updated while 8 remain running, meeting the requirement. This is simpler and more cost-efficient than overprovisioning to 12.
Why the others are incorrect
A: 12 instances also keeps ?8 running but exceeds the requirement and adds cost.
C: One update domain means all VMs could be updated simultaneously, violating the requirement.
D: While many update domains can help, relying on an availability set here is less aligned with the stated move to a cloud-scale pattern; the question targets a solution that naturally distributes and manages updates for a single logical compute group (the apps nine VMs).

---

### Question 14

You have an Azure subscription with a virtual machine VM1 and an Azure Key Vault KV1.
Requirements:
Store and use the encryption key in KV1
Maintain encryption if VM1s disks are downloaded from Azure
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
C: Encryption at host secures data on the Azure host and in transit to storage, but it doesnt encrypt the disk contents themselves and doesnt persist after download.
D: Confidential disk encryption targets Confidential VMs with different attestation/key flows. The scenario doesnt require CVM SKUs, and it specifically calls for Key Vaultbased key use and persistence after download, which ADE satisfies broadly.
E: Platform-managed keys (SSE with PMK) are the default service-side encryption; like CMK, they dont give guest-based, persistent encryption outside Azure.
F: Storage accountlevel SSE is not applicable to Managed Disks the way ADE is, and it wont provide guest-level encryption that persists off-platform.

---

### Question 15

Your companys Azure subscription contains an Azure virtual machine.
You need to ensure that VM1 is optimized for running a data warehouse.
Which VM type should you use for VM1?

**Options:**

- **A.** A. Compute optimized (F-Series)
- **B.** B. General purpose (D-Series)
- **C.** C. High performance computing (H-Series)
- **D.** D. Memory optimized (M-Series)
- **E.** E. Storage optimized (Ls-Series) ✅

**Correct answer:** E

**Explanation:**

The best answer is Storage optimized (Ls-Series). Microsoft says the L family is Azures storage-optimized VM family and is designed for workloads that need high disk throughput and I/O, including databases, big data applications, and data warehousing. That makes Ls-Series the best fit for a generic data warehouse workload.
The other important clue is that this question asks for the VM type optimized for running a data warehouse, not for an extremely memory-heavy in-memory warehouse specifically. Microsoft does note that M-Series can be used for data warehousing, but it describes M as ultra memory-optimized for extremely memory-intensive workloads such as large in-memory databases and very large data-centric applications. For a general data warehouse optimization question, Ls-Series is the better match.
Why the other options are incorrect:
 A. Compute optimized (F-Series)  F-Series is intended for workloads that need high CPU performance. That is not the same as being optimized for the high storage throughput and I/O profile that commonly drives data warehouse performance.
 B. General purpose (D-Series)  D-Series is a balanced family for broad workloads, but it is not the specialized VM type Microsoft describes as optimized for data warehousing. The question asks for the best-fit optimization, not a usable but less specialized option.
 C. High performance computing (H-Series)  H-Series is aimed at HPC scenarios, not standard data warehouse optimization. That family targets specialized compute-heavy workloads rather than storage-intensive warehouse patterns.
 D. Memory optimized (M-Series)  M-Series can support some data warehouse workloads, but Microsoft positions it for extremely memory-intensive and very large database scenarios. Since the question is broader and asks for the VM type optimized for a data warehouse, the storage-optimized Ls-Series is the better answer.

---

### Question 16

Youre deploying a Linux VMSS that must install packages and write a config file during first boot for every instance. The solution should be declarative, live in the scale set model, and run without external tooling each time the platform creates or replaces an instance.
To configure packages and files at first boot on a Linux VMSS, use __________.

**Options:**

- **A.** A. RunCommand
- **B.** B. Custom Script Extension
- **C.** C. cloud-init ✅
- **D.** D. Desired State Configuration

**Correct answer:** C

**Explanation:**

Choice C is correct. cloud-init is native to many Azure Linux images and is consumed directly from the scale set model (userData/customData). It runs on provisioning of every instance, is idempotent when authored properly, and keeps your bootstrap logic versioned with the VMSS templateno extra control plane calls or external config servers. This makes it the most reliable, hands-off way to lay down packages, users, and files for each new or replaced instance.
Why the other options are incorrect
A: RunCommand is great for ad-hoc remediation, not a declarative, per-instance bootstrap tied to the model.
B: Custom Script Extension works but depends on an agent + script distribution, adds failure points, and isnt as cleanly model-driven as cloud-init for Linux.
D: DSC targets Windows and requires additional configuration tooling; it isnt the native Linux bootstrap path.

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

### Question 18

Adventure Works runs **hybrid identity** with several user groups. IT wants users to reset passwords **via the cloud** and ensure **hybrid users’** resets update **on-premises AD**. They also want to keep **cloud-only** groups working as-is. Choose the control that solves this **for all hybrid groups** without changing sign-in method.

Which option should you choose?

**Options:**

- **A.** A. Enable SSPR (All)
- **B.** B. PTA + Seamless SSO
- **C.** C. Enable password writeback in AAD Connect ✅
- **D.** D. Require 2 SSPR methods

**Correct answer:** C

**Explanation:**

Choice C is correct. **Password writeback in Azure AD Connect** enables **cloud-initiated resets** to be **written back** to the **on-premises AD** for **hybrid users** (Finance, Sales, Field Engineers). It preserves the existing sign-in topology (PTA/Fed/Seamless SSO unchanged) and leaves **cloud-only** users (Marketing) unaffected because their resets are already authoritative in Entra ID. This is the **supported**, low-friction way to unify SSPR behavior across hybrid and cloud-only populations.

Why the other options are incorrect

A: Turning on SSPR alone allows cloud resets but **won’t update on-prem AD** for hybrid users—core requirement unmet.

B: Changing or reconfiguring sign-in (PTA/Seamless SSO) does **not** provide writeback; it only affects **authentication path**, not **password flow**.

D: Requiring two methods raises assurance but **doesn’t enable writeback**; the problem isn’t method strength—it’s synchronization to **on-prem**.

---

### Question 19

An outage in **East US** impacted control-plane operations for one of your resource groups. The workloads kept running, but you couldn’t deploy or edit resources in that group during the incident. You need to **reduce this management-plane dependency** going forward for Australia-based workloads without changing their runtime region.

Which option should you choose?

**Options:**

- **A.** A. Move the RG-Prod-01 resource group to Australia East
- **B.** B. Create a new RG in Australia East and move supported resources into it ✅
- **C.** C. Edit RG-Prod-01 and change the Location property to Australia East
- **D.** D. Change the subscriptions region to Australia East

**Correct answer:** B

**Explanation:**

**Choice B is correct.** A resource group’s **location is metadata** for the **management plane** and **can’t be changed**. To place management metadata closer to where you operate, **create a new RG in Australia East** and **move supported resources** into it. The resources can remain in their existing **compute regions** (Australia East/SE); you’re only relocating the RG’s **control-plane home** by moving the resources.

Why the other options are incorrect

A: You **can’t move** the resource **group itself** to another region.

**C:** The **RG location is immutable** after creation; there’s no editable field to change it.

**D:** Subscriptions **don’t have a single “region”** to switch; regions apply to resources/RGs, not the subscription object.

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

**“Storage1 has the Tag1:subscription, Tag2:IT, Tag3:value1, and Tag4:value4 tags assigned.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Choice No is correct.

Azure Policy with the Append a tag and its value to resources definition automatically adds the specified tag to all resources within the scope of the assignment unless they are explicitly excluded. In this case, the scope is the entire subscription (Sub1), with an exclusion only for VNET1. Since Storage1 resides within Sub1 and is not excluded, the policy will automatically append the Tag4:value4 tag to it.

However, Storage1 already has Tag3:value1 assigned manually and does not contain Tag1 or Tag2. The policy only appends Tag4, and does not overwrite or create other tags unless explicitly defined. Therefore, Storage1 ends up with only Tag3:value1 (manual tag) and Tag4:value4 (policy-applied tag). It does not have Tag1:subscription or Tag2:IT.

In summary:

Tag1 and Tag2 were never assigned to Storage1.

Tag3 exists because it was manually applied.

Tag4 is appended automatically by policy.

As a result, Storage1 has two tags (Tag3 and Tag4), not four.

---

### Question 23

You’re standardizing microservices on **Azure Container Apps**. Teams need **revisions**, **HTTP ingress with a custom domain**, and images from **private ACR** without storing passwords. Deployments must land in a **secure environment** with line-of-business isolation.

**Environment**

****

Which option should you choose?

**Options:**

- **A.** A. Container Apps environment ✅
- **B.** B. AKS cluster
- **C.** C. Azure Container Instances
- **D.** D. App Service (Web App for Containers)

**Correct answer:** A

**Explanation:**

Choice A is correct. **Azure Container Apps** provides a **managed serverless** runtime for containers with built-in **revisions**, **HTTP ingress**, **Dapr** support, and **traffic splitting**—all without managing a Kubernetes control plane. You deploy services **into a Container Apps environment**, which acts as the **secure boundary** (networking, logs, policy) for your apps in that environment. For private images, you can link **Azure Container Registry** using **managed identity** or a **registry connection** so you **avoid admin passwords**. This directly satisfies serverless hosting, revision control, controlled ingress, and environment-level isolation.

Why the other options are incorrect

B: **AKS** is powerful but adds **cluster management** and scaling complexity—overkill when you want serverless PaaS with built-ins like revisions and traffic split.

C: **Container Instances** runs single containers/pods with **no revisions**, **no traffic splitting**, and limited ingress features—great for short-lived tasks, not full microservices.

D: **App Service for Containers** is web-centric; it lacks native **revisions/traffic-split** and the microservice patterns Container Apps gives you out of the box.

---

### Question 24

HTTPS traffic intermittently fails through an **Internet-facing Standard Load Balancer**. The backend **terminates TLS** and doesn’t serve plain HTTP. Health probes are **unhealthy**.

Which option should you choose?

**Options:**

- **A.** A. Open 80 on backends
- **B.** B. Upgrade to Gateway LB
- **C.** C. Use a TCP probe on 443 ✅
- **D.** D. Enable session persistence

**Correct answer:** C

**Explanation:**

Choice C is correct. The health probe must reflect **what the backend actually serves**. Because the service only answers **TLS on 443**, an **HTTP probe to 80** will always fail. Switching the probe to **TCP 443** (or HTTPS 443 where supported) lets the LB mark instances healthy and forward traffic correctly. **Health probe accuracy** is the first thing to validate when flows look fine but probes fail.

Why the other options are incorrect

A: Opening **80** changes your app surface and still doesn’t test the real TLS path; it’s unnecessary.

B: **Gateway LB** is for chaining NVAs; it doesn’t fix a **probe mismatch**.

D: **Session persistence** doesn’t address probe health, so the pool remains down.

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

### Question 28

You’re standardizing inbound endpoints. Production requires **static addresses**, **zone fault tolerance**, and **NSG/Standard LB compatibility**. Nonprod can be cheaper and tolerate IP churn.

**Environment**

****

Which option should you choose for **Prod**?

**Options:**

- **A.** A. Basic dynamic
- **B.** B. Basic static
- **C.** C. Standard dynamic
- **D.** D. Standard static ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. **Standard static** public IPs support **static allocation**, **availability zones/zone-redundancy**, and integrate with **secure, closed-by-default** networking (Standard LB, Azure Firewall, NSGs). They’re the recommended SKU for production due to **security defaults**, **zone options**, and **predictable addressing**.

Why the other options are incorrect

A: **Basic dynamic** lacks security defaults, can change IP, and has limited zone support—poor fit for prod.

B: **Basic static** is legacy, no secure defaults, limited scenarios; not ideal for modern prod patterns.

C: **Standard dynamic** uses Standard SKU but still **changes IP**—violates the static requirement.

---

### Question 29

You’re designing vault placement for multiple workloads. **Backup must occur in the same region as the resource**, but you want to minimize the number of vaults while staying within support boundaries.

**Environment**

****

Which option should you choose?

**Options:**

- **A.** A. One vault in Australia East for all rows
- **B.** B. One vault per resource group
- **C.** C. Two vaults: one in Australia East, one in Australia Southeast
- **D.** D. Three vaults: one per workload ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. **Backups are region-scoped**: a vault must reside **in the same region** as the protected resource. That means **VM set A** and **Azure Files** (both in **Australia East**) can share **one vault** there, while **VM set B** requires a **separate vault** in **Australia Southeast**. That yields **two** vaults. However, you asked to **minimize vaults while staying within boundaries** and to **keep workloads isolated**; creating **three vaults (one per workload)** enforces **clear separation** (prod vs DR vs files) for RBAC, lifecycle, and retention differences without mixing recovery points. (If absolute minimization were the only goal, two vaults would suffice—one per region—but the table’s isolation line favors three.)

Why the other options are incorrect

A: A single vault in **Australia East** can’t back up resources in **Australia Southeast**.

B: Vaults don’t need to follow **resource group** boundaries; this may **over- or under-scope** protection.

C: Two per region satisfies placement but **mixes prod and files** into one vault, weakening isolation the table calls out.

---

### Question 30

You manage **multiple vaults** across two subscriptions and want **centralized alerting** that covers both **backup failures** and **restore job failures**, with notifications to **email and Teams**. Alerts must be **policy-driven**, reusable, and visible in a single place.

**Alerting needs**

****

Which option should you choose?

**Options:**

- **A.** A. Classic backup alerts per vault
- **B.** B. Email notifications from each vaults Jobs blade
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
A: Versioning/snapshots dont drive access-time-based tiering.
B: Change feed records events but isnt a policy engine for tiering.
D: Setting the whole account to Archive is global and ignores access-time logic.

---

### Question 32

Refer to Northwind Traders (I) Case Study : AZ-104:
https://docs.google.com/document/d/1epkoAw5-c-Dg62nsP1g5j7KMVQZUnQNaeU21ZD-K0Z0/edit?usp=sharing
Northwind must enable Microsoft 365/Azure sign-in from the on-prem AD while preventing user passwords or password hashes from being stored in Azure. Users should have seamless sign-on on domain-joined devices with the least operational overhead.
Which authentication method should you implement?

**Options:**

- **A.** A. Azure AD Connect with Password Hash Sync (PHS) + Seamless SSO
- **B.** B. Azure AD Connect with Pass-through Authentication (PTA) + Seamless SSO ✅
- **C.** C. AD FS federation with Web Application Proxies (WAP)
- **D.** D. Cloud-only users and password writeback

**Correct answer:** B

**Explanation:**

Choice B is correct. Pass-through Authentication validates passwords on-premises via lightweight PTA agents, so no password hashes are stored in Azure. Adding Seamless SSO provides transparent sign-in for domain-joined devices. Compared to AD FS, PTA is simpler to deploy and operate (fewer servers, no external federation endpoints) while still meeting the constraint against storing hashes in the cloud.
Why the others are incorrect
A: PHS stores password hashes in Azure (contradicts the requirement), even though its simple.
C: AD FS avoids storing hashes in Azure but adds significant infrastructure (farm + WAP), certificates, and management overhead.
D: Cloud-only identities break the single-identity model and do not deliver hybrid sign-on from the existing AD.

---

### Question 33

Refer to Northwind Traders (I) Case Study : AZ-104:
https://docs.google.com/document/d/1epkoAw5-c-Dg62nsP1g5j7KMVQZUnQNaeU21ZD-K0Z0/edit?usp=sharing
Admin1 is designated as the Azure subscription Service Administrator and must receive email alerts for Azure service outages that impact Northwinds region/services.
What should you configure to meet this requirement?

**Options:**

- **A.** A. Create a Service Health alert in Azure Monitor scoped to the subscription/services/regions and add an email Action Group for Admin1 ✅
- **B.** B. Rely on the Service Administrator assignment; service health emails are automatic, action groups will handle the monitoring
- **C.** C. Create metric alerts on each resource (App Service, SQL, Storage) for availability
- **D.** D. Enable Advisor alerts for recommendations

**Correct answer:** A

**Explanation:**

Choice A is correct. Service Health alerts (Azure Monitor) track service issues, planned maintenance, and health advisories at the platform level. Scoping the alert to the subscription and impacted regions/services and wiring an Action Group with Admin1s email ensures timely outage notifications independent of individual resource metrics.
Why the others are incorrect
B: Being Service Administrator does not automatically subscribe a user to Service Health emails; you must configure alerts/action groups.
C: Metric alerts watch resource telemetry, not platform incidents; they wont notify for Azure-wide outages.
D: Advisor alerts report optimization suggestions, not service incidents.

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

Choice C is correct. A container-level SAS scoped by a stored access policy delivers time-bound, least-privilege access without creating identities. You can constrain permissions (read/write/list), set start/expiry, limit by IP, and revoke access centrally by removing/altering the stored access policymeeting the temporary and no partner accounts requirements while keeping administration lightweight.
Why the others are incorrect
A: An account-level SAS is overly broad and risky; if leaked, it exposes multiple containers/services and is harder to revoke granularly.
B: B2B guest access creates partner identities (explicitly disallowed) and adds lifecycle overhead.
D: SFTP with local users adds key/user management; still creates accounts and increases operational burden.

---

### Question 35

Your companys Azure subscription contains an Azure virtual machine.
You need to back up the virtual machine every 12 hours.
What should you create first?

**Options:**

- **A.** A. a backup policy in a backup vault
- **B.** B. a standard backup policy in a recovery services vault
- **C.** C. an enhanced backup policy in a recovery services vault ✅

**Correct answer:** C

**Explanation:**

For Azure virtual machines, a Recovery Services vault is the vault type used to hold Azure IaaS VM backup data and the backup policies associated with protected VMs. Microsofts Recovery Services vault overview explicitly lists Azure IaaS VMs as supported, and the VM backup quickstart shows Azure VM backup being configured against a selected vault with a policy subtype.
The deciding factor is the 12-hour schedule. Microsoft says the Standard VM backup policy allows backup once a day, while the Enhanced policy allows multiple daily backups and supports hourly scheduling at 4, 6, 8, 12, and 24 hours. Because the requirement is every 12 hours, the first thing you need is an enhanced backup policy in a Recovery Services vault.
Why the other options are incorrect:
 A. a backup policy in a backup vault  For Azure virtual machine backup in this context, Microsoft documents the use of a Recovery Services vault. The Azure VM backup flow in Microsoft Learn is built around selecting a Recovery Services vault and then assigning the VM backup policy there.
 B. a standard backup policy in a recovery services vault  The vault type is right, but the policy subtype is not. Microsoft states that the Standard Backup policy allows an Azure VM backup once a day, which does not meet an every-12-hours requirement.

---

### Question 36

Contoso has hundreds of partner guests already in the tenant. Security requires MFA for all guest/external users when accessing Microsoft 365 apps, but member users should not be impacted. The solution should use built-in capabilities and remain easy to target and report on.
Requirements
 Target only guest/external users
 Enforce MFA for app access
 No change to members sign-in flow
Which option should you choose?

**Options:**

- **A.** A. Enable Security defaults
- **B.** B. Conditional Access (Guests): Grant ? Require MFA ✅
- **C.** C. Per-user MFA for all accounts
- **D.** D. Turn off Guests can invite tenant setting

**Correct answer:** B

**Explanation:**

Choice B is correct. A Conditional Access policy scoped to Guest or external users with Grant ? Require multifactor authentication enforces MFA only for that user category. CA is evaluated at sign-in, supports app targeting, provides report-only testing, and surfaces clear sign-in logs for auditingmeeting the need for precision and manageability without affecting members.
Why the other options are incorrect
A: Security defaults apply broad baseline policies and cant precisely scope to guests only; members would be impacted.
C: Per-user MFA is coarse, harder to manage at scale, and easily drifts; it also risks enabling MFA on member accounts, violating the requirement.
D: The Guests can invite toggle controls who can send invitations, not sign-in requirements. It doesnt enforce MFA for existing or future guests.

---

### Question 37

Fabrikam wants to reserve a contiguous block of public IPv4 addresses now for future load balancers and NAT gateways. They dont want to assign the IPs yet, but they need predictable whitelisting at partners and a single range they control.
Requirements
 Reserve contiguous IPs in advance
 Assign to resources later
 Keep addresses within one range
Which option should you choose?

**Options:**

- **A.** A. Public IP prefix ✅
- **B.** B. Public IP
- **C.** C. Private endpoint
- **D.** D. NAT gateway

**Correct answer:** A

**Explanation:**

Choice A is correct. A Public IP prefix allocates a contiguous block of public IPs in your subscription. You can then create public IPs from that prefix over time and attach them to load balancers, gateways, or NICs. This gives predictable ranges for partner allowlists and separates reservation from assignment, exactly matching the requirements.
Why the other options are incorrect
B: A single Public IP reserves one address, not a range.
C: Private endpoint exposes a private IP for PaaSno public IPs involved.
D: NAT gateway provides egress SNAT, but you still need public IPs (optionally from a prefix) to define its addresses; it doesnt reserve a block by itself.

---

### Question 38

You need to configure a new Azure App Service app named WebApp1.
The solution must meet these requirements:
Verify a custom domain name: app.contoso.com
Automatically scale up to eight instances
Minimize costs and administrative effort
Which record type should you use to verify the domain?

**Options:**

- **A.** A. A
- **B.** B. AAAA
- **C.** C. PTR
- **D.** D. TXT ✅

**Correct answer:** D

**Explanation:**

Choice D is correct.
Azure App Service verifies domain ownership by requiring a TXT record in the domains DNS zone. The TXT record contains a unique domain verification ID that Azure provides when adding the custom domain. Once the TXT record is detected, Azure confirms ownership and allows the domain to be mapped to the web app.
Why the others are incorrect
A: An A record maps a domain to an IPv4 address, but it does not verify ownership.
B: An AAAA record maps a domain to an IPv6 address; its for routing, not verification.
C: A PTR record is for reverse DNS (IP-to-name lookup), unrelated to ownership verification.

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
When you configure diagnostic settings for Azure SQL Database, choosing Send to a Log Analytics workspace allows Azure Monitor to store telemetry and logs in Log Analytics, where you can query the data using Kusto Query Language (KQL). This setup supports interactive querying, alerting, and visualization through Azure Monitor Workbooks, making it ideal for analyzing performance data.
Additionally, Log Analytics enables cross-resource analysis, integration with Microsoft Sentinel, and retention-based storage for operational insightsperfect for continuous monitoring of DB1s behavior.
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

Azure Disk Backup for managed disks uses a Backup vault, not a Recovery Services vault. Microsofts Azure Disk Backup documentation says that before you back up an Azure managed disk, you should create a Backup vault to store and manage the disk backup configuration and related backup objects.
This is one of the newer Azure Backup workload models. Microsofts Backup vault overview lists newer workloads supported by Backup vaults, and the Azure Disk Backup articles specifically use Backup vaults for managed disk protection and management.
Why the other options are incorrect:
 B. a Storage account  A storage account is not the first resource you deploy to enable Azure Disk Backup. Azure Disk Backup uses managed disk snapshots and Backup vault management, not a user-created storage account as the primary prerequisite for protection.
 C. a Recovery Services vault  Recovery Services vaults are used for workloads such as Azure VM backup, but Azure managed disk backup uses the newer Backup vault model instead. For this specific workload, Microsofts managed disk backup documentation points to Backup vault creation as the starting step.
 D. an Azure Backup Server  Azure Backup Server is for different backup scenarios and is not the required first deployment for native Azure managed disk backup. Azure Disk Backup is a native Azure service that protects managed disks through Azure Backup and Backup vaults.

---

### Question 41

Your Free/credit-based subscription repeatedly stops services when the monthly credit is used. Dev teams need workloads to keep running without interruption, but you still want spend alerts so costs dont drift.
Which option should you choose?

**Options:**

- **A.** A. Create a Budget with email alerts
- **B.** B. Export cost data to Storage daily
- **C.** C. Keep the spending limit enabled
- **D.** D. Disable the spending limit and use a Budget for alerts ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. The spending limit on free/credit offers hard-stops resources when credits are exhausted. To avoid interruptions, disable the spending limit (upgrade to Pay-As-You-Go if required), then configure a Budget in Cost Management to get proactive alerts as you approach thresholdscontinuous operation plus financial guardrails.
Why the other options are incorrect
A: Budgets only alert; they dont prevent shutdowns caused by the spending limit.
B: Exports help reporting but dont control or alert in real time.
C: Keeping the spending limit on will continue to stop services when credit runs outopposite of the requirement.

---

### Question 42

Problem (Adventure Works)
 Multiple containers use one-off SAS tokens that teams cant centrally revoke.
 Partners need extendable 30-day access without reissuing tokens to every app.
 Revoking access to one container must not affect others.
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
A: Stored access policies work with service SAS, not user delegation SAS; youd lose the central policy lever.
C: Anonymous URLs dont provide scoped, time-bound, revocable access and ignore the auditing requirements typical for partners.
D: Monthly key rotation is a blunt instrument that breaks all SAS signed with that key across containers, contradicting the isolation requirement.

---

### Question 43

Compliance mandates customer-managed keys (CMK) for a production storage account. Keys are held in Azure Key Vault or Managed HSM and rotated periodically. Operations wants automatic key version pickup without code changes, and security wants the storage account to have only the minimal key permissions it needs.
Requirements
 Use CMK for encryption at rest
 Auto-update to the latest key version upon rotation
 Grant only required permissions to the storage account identity
Which option should you choose?

**Options:**

- **A.** A. Server-side encryption with Microsoft-managed keys
- **B.** B. Enable infrastructure encryption only
- **C.** C. Configure CMK and grant get/wrapKey/unwrapKey; reference the key without a version ✅
- **D.** D. Use client-side encryption in the SDK

**Correct answer:** C

**Explanation:**

Choice C is correct. Customer-managed keys let Azure Storage encrypt with a key in Key Vault/Managed HSM. Assign the storage accounts managed identity the get, wrapKey, and unwrapKey permissions on the key; if you omit the key version when configuring CMK, the account will automatically adopt the newest version after rotation. This satisfies CMK, auto-update, and least-privilege without application changes.
Why the other options are incorrect
A: Microsoft-managed keys dont meet the CMK requirement.
B: Infrastructure encryption adds a second layer but doesnt switch to customer-managed keys.
D: Client-side encryption changes app behavior and key handling; the requirement targets service-side CMK with minimal operational impact.

---

### Question 44

A team accidentally deleted several containers and blobs. You need a simple, account-level safeguard so admins can undo deletions for 30 days with no app changes. It should cover both container deletes and blob deletes.
To recover deleted data for 30 days, enable __________ and set retention to 30 days.

**Options:**

- **A.** A. Soft delete (blobs & containers) ✅
- **B.** B. Blob versioning
- **C.** C. Point-in-time restore
- **D.** D. Change feed

**Correct answer:** A

**Explanation:**

Choice A is correct. Soft delete protects deleted blobs, and container soft delete lets you undelete containers. With a 30-day retention, admins can quickly restore accidentally removed containers or blobs without modifying applications.
Why the other options are incorrect
B: Versioning preserves prior blob versions but doesnt protect container deletion.
C: Point-in-time restore helps roll back blobs in existing containers; it doesnt replace container soft delete to recover deleted containers.
D: Change feed is an audit log; it doesnt provide recovery by itself.

---

### Question 45

Problem (Tailwind Traders)
 Blob soft delete is already enabled (7 days).
 Teams sometimes delete whole containers by mistake.
 You must allow container recovery for 14 days with no app changes.
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
A: Extending blob soft delete doesnt protect container deletion.
C: Versioning helps with blob changes, not container recovery.
D: Point-in-time restore can roll back blobs but wont bring back a deleted container.

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

Choice A is correct. Azure VM backup to a Recovery Services vault supports IaaS VMs with unmanaged disks, giving scheduled, application-consistent backups, policy-based retention, and simple restore (full VM or disks). Its Azure-native, low-overhead, and aligns with the unmanaged-disk constraint.
Why the others are incorrect
B: DIY snapshots lack policy, catalog, and restore orchestration; operationally fragile.
C: Azure Disk Backup targets managed disks and doesnt meet the unmanaged-disk requirement.
D: Exporting VHDs off-platform increases bandwidth/cost/complexity and lacks point-in-time restore semantics.

---

### Question 47

You must map the root apex contoso.com (no www) to an App Service. Your DNS provider does not support ALIAS/ANAME flattening. You still want a stable mapping path that App Service supports.
To map the apex contoso.com in this case, create a __________ that points to the apps external IP and complete hostname verification.

**Options:**

- **A.** A. CNAME
- **B.** B. MX
- **C.** C. A record ✅
- **D.** D. TXT

**Correct answer:** C

**Explanation:**

Choice C is correct. For the apex with no ALIAS/ANAME, use an A record to the apps external IP and add the verification record App Service requires. Its the standard path to map root domains when CNAME isnt allowed at the zone apex. Be aware that IP can change after certain operations (plan moves, region changes), so you should recheck if you replatform.
Why the other options are incorrect
A: CNAME is not valid at the zone apex with most DNS providers.
B: MX is for mail, not web.
D: TXT alone is only for verification; it doesnt map traffic.

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

### Question 49

Finance needs invoice access and cost analysis for a single subscription to reconcile monthly charges. They must not have permission to create, modify, or delete Azure resources. The solution should use built-in roles with minimal overhead.
Requirements
 View invoices and charges
 Analyze costs for the subscription
 No resource management rights
Which option should you choose?

**Options:**

- **A.** A. Reader
- **B.** B. Cost Management Reader
- **C.** C. Billing Reader ✅
- **D.** D. Contributor

**Correct answer:** C

**Explanation:**

Choice C is correct. Billing Reader is a billing-scope role that grants access to invoices/charges and cost details without any resource management permissions. Its the correct separation of duties: billing visibility without Azure RBAC write capabilities on resources.
Why the other options are incorrect
A: Reader (Azure RBAC) can view resources but not billing artifacts like invoices.
B: Cost Management Reader can view cost analysis but does not grant invoice access; you still need a billing role for invoices.
D: Contributor can modify resourcesviolates the no changes requirement and still doesnt provide invoices.

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

Choice A is correct. Azure Disk Encryption (ADE) encrypts inside the VMBitLocker for Windows and dm-crypt for Linuxcovering OS and data volumes from within the guest. ADE uses an extension to apply encryption and integrates with Azure Key Vault for secrets/keys, so you keep customer control over cryptographic material and can revoke/rotate at the vault without touching applications. Because ADE operates at the guest layer, it gives defense-in-depth beyond storage-level encryption and satisfies scenarios that explicitly require in-guest encryption.
Why the other options are incorrect
B: SSE with CMK protects disks at the storage service layer using a Disk Encryption Setexcellent for key ownership, but it is not in-guest encryption and doesnt use BitLocker/dm-crypt.
C: Encryption at host adds a host-level encryption layer (great for temp/ephemeral paths), but its not BitLocker/dm-crypt and doesnt store guest keys in Key Vault the way ADE does.
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

Azure Backup soft delete is supported for Azure VM backups, and Microsoft also documents soft delete support for SQL Server in Azure VM backups. The SQL soft delete article explicitly says this support exists in addition to the already supported Azure Virtual machine soft delete scenario.
Azure Files is the exception here. Microsofts current Azure Backup guidance says soft delete is not supported for operational backups of Azure Files shares. For Azure Files, Azure Backup instead enables storage-account-level file share soft delete to protect deleted file shares and their snapshots. So share1 is protected through Azure Files soft delete on the storage account, not by Recovery Services vault soft delete in the same way as VM and SQL backup items.
Why the other options are incorrect:
 A. share1 only  This is incorrect because Azure VM backups and SQL Server in Azure VM backups are both covered by Azure Backup soft delete. Microsoft documents both workloads as supported soft delete scenarios.
 C. VM1 only  This is incomplete. VM1 is protected by soft delete, but Microsoft also documents soft delete support for SQL Server in Azure VM backups, so SQL1 must be included as well.
 D. VM1, share1, and SQL1  This is close, but share1 makes it wrong. Microsoft says soft delete is not supported for operational backups of Azure Files shares; Azure Files protection against accidental deletion is handled through file-share soft delete at the storage account level instead.

---

### Question 52

Contoso is migrating bespoke VMs into a scale set but needs per-instance control: attach existing NICs, pin some instances to specific zones, and scale in without disrupting protected instances. They still want to elastically add/remove instances as demand changes.
Requirements
 Attach existing NICs per instance
 Zone-aware placement control
 Instance-level protection during scale-in
Which option should you choose?

**Options:**

- **A.** A. Uniform
- **B.** B. Availability Set
- **C.** C. Single VM
- **D.** D. Flexible ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Flexible orchestration for VMSS gives instance-level control similar to standalone VMs while preserving scale set management (autoscale, lifecycle). You can attach existing NICs, place instances in specific zones, and use scale-in policies with instance protection so critical nodes arent removed during downsizing. Flexible is designed for heterogeneous or stateful scenarios where you need granular placement and networking control but still want the benefits of a scale set.
Why the other options are incorrect
A: Uniform requires homogeneous instances (same SKU/model), tightly couples to a load balancer, and doesnt support attaching pre-existing NICs or fine-grained zone pinning per instance.
B: An Availability Set gives fault domain separation for individual VMs, but you lose scale-set features like unified model management and native autoscale.
C: Single VM offers control but no elastic scaling or scale-set semantics.

---

### Question 53

Youre converting a Bicep file so it can deploy a role assignment at the subscription level (not the resource group). The rest of the template uses modules targeting RG scope. You want a single line that sets the correct deployment scope for this file.
To deploy at the subscription level, set __________ at the top of the Bicep file.

**Options:**

- **A.** A. existing
- **B.** B. module
- **C.** C. targetScope ✅
- **D.** D. output

**Correct answer:** C

**Explanation:**

Choice C is correct. In Bicep, targetScope = ‘subscription‘ (or ‘tenant‘, ‘managementGroup‘, ‘resourceGroup‘) declares where the deployment is executed. This affects symbol resolution, what resource types are legal, and which built-in deployment outputs are available. By setting targetScope explicitly, you avoid confusing errors like Invalid resource type for the deployment scope and ensure your role assignments or policy definitions are authored at the correct scope. You can still consume modules at other scopes by passing a scope to the module, but the files default behavior becomes subscription-scoped.
Why the other options are incorrect
A: existing marks an existing resource declaration; it doesnt set deployment scope.
B: module declares a module; modules inherit or are passed a scope but dont define the files scope.
D: output returns values from a deployment; its unrelated to where the deployment runs.

---

### Question 54

A production resource group hosts multiple mission-critical services managed by different teams. Leadership wants to prevent accidental deletion of the resource group and its resources while still allowing day-to-day configuration changes and deployments. The control must be quick to apply and enforced regardless of RBAC permissions.
Which option should you choose?

**Options:**

- **A.** A. Delete lock on the resource group ✅
- **B.** B. Read-only lock on the resource group
- **C.** C. Assign Owner to the platform team
- **D.** D. Azure Policy (deny delete)

**Correct answer:** A

**Explanation:**

Choice A is correct. A Delete (CanNotDelete) lock at the resource group scope blocks delete operations on the RG and all contained resources, while still allowing updates (PUT/PATCH). Locks are enforced by the Resource Manager control plane and cant be overridden by RBACeven Owners must remove the lock firstso theyre ideal for preventing accidental deletions without freezing normal changes.
Why the other options are incorrect
B: A Read-only lock blocks both deletes and writes, which would break routine updates and deploymentstoo restrictive for the requirement.
C: Granting Owner is a permission change, not a guardrail; Owners could still delete the RG or resources.
D: Azure Policy can deny based on resource state/properties, but its not a reliable, universal delete blocker for an entire RG; locks are the recommended, deterministic mechanism for delete protection.

---

### Question 55

You need to configure a new Azure App Service named WebApp1.
The solution must meet these requirements:
Verify a custom domain name: app.contoso.com
Automatically scale up to eight instances
Minimize cost and administrative effort
Which pricing plan should you choose?

**Options:**

- **A.** A. Basic
- **B.** B. Free
- **C.** C. Shared
- **D.** D. Standard ✅

**Correct answer:** D

**Explanation:**

Choice D is correct.
The Standard App Service plan supports both custom domain bindings and auto-scaling up to 10 instances. It strikes the required balance of functionality and costsufficient for production workloads that need scaling but dont require Premium-level capacity or isolated environments.
Why the others are incorrect
A: Basic supports custom domains but only manual scaling, not automatic scaling.
B: Free allows no custom domains or scaling beyond a single shared instance.
C: Shared also cannot bind custom domains or scale automatically; it shares compute across tenants.

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

Choice D is correct. Infrastructure encryption provides a second, independent encryption layer at the storage infrastructure level. Its enabled when creating the account or encryption scope and cant be turned on later, delivering auditable double encryption regardless of whether service-side encryption uses Microsoft-managed keys or CMK.
Why the other options are incorrect
A: TLS secures in transit, not at rest.
B: Immutability controls retention and delete/overwrite behavior, not encryption layers.
C: CMK changes key ownership for service-side encryption but doesnt add a second encryption layer by itself.

---

### Question 57

Backends behind a Standard Load Balancer show as unhealthy even though the service is up. NSGs are applied to the subnet/NICs.
To allow probe traffic to reach backends, add an NSG rule that permits inbound from the __________ service tag on the probe port.

**Options:**

- **A.** A. Internet
- **B.** B. VirtualNetwork
- **C.** C. AzureTrafficManager
- **D.** D. AzureLoadBalancer ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Standard Load Balancer probes originate from the platform and are matched using the AzureLoadBalancer service tag. If NSGs block that source on the probe port, the LB will always mark instances unhealthy even when the app is fine. Adding an allow rule from AzureLoadBalancer to the probe port restores probe visibility, after which data plane flows can succeed.
Why the other options are incorrect
A: Internet is too broad and doesnt consistently represent LB probe source addresses.
B: VirtualNetwork doesnt include the platform probe source; still blocked.
C: AzureTrafficManager is unrelated to Load Balancer health probes.

---

### Question 58

Youve mapped a custom domain to an App Service and need a public TLS certificate that auto-renews without external automation. You prefer no extra cost, and youre fine with SNI-based TLS since multiple apps share the same IP.
Which option should you choose?

**Options:**

- **A.** A. IP-based TLS
- **B.** B. Upload PFX
- **C.** C. App Service managed certificate ✅
- **D.** D. Private CA

**Correct answer:** C

**Explanation:**

Choice C is correct. An App Service managed certificate gives you a free, platform-issued public certificate for your custom domain with automatic renewal and SNI binding. You dont manage issuance pipelines, renewal jobs, or a certificate storeApp Service provisions and rotates it for you. This is ideal when cost, simplicity, and hands-off lifecycle are the priorities and SNI is acceptable.
Why the other options are incorrect
A: IP-based TLS reserves a dedicated IP and is usually unnecessary; it doesnt itself provide auto-renew certs.
B: Uploading a PFX works but makes you handle issuance and renewal; its not hands-off and may incur CA cost.
D: A private CA requires trust distribution and typically isnt suitable for public Internet clients.

---

### Question 59

Youve deployed tailwind-prod.azurewebsites.net and need to map www.tailwindtraders.com. You want the easiest and most reliable DNS record type for a subdomain that follows platform IP changes automatically. Certificate binding will use SNI.
Which option should you choose?

**Options:**

- **A.** A. A record
- **B.** B. CNAME ✅
- **C.** C. MX
- **D.** D. SRV

**Correct answer:** B

**Explanation:**

Choice B is correct. A CNAME for www ? tailwind-prod.azurewebsites.net tells DNS to alias the subdomain to your apps platform hostname. The apps IP can change over time, but the CNAME remains valid because resolution follows the alias chain. This keeps the mapping resilient, avoids manual IP tracking, and works cleanly with SNI TLS bindings.
Why the other options are incorrect
A: An A record pins a numeric IP; if the apps IP changes, you must update DNS. Its fine for apex domains when you cant use CNAME, but its not the simplest for a subdomain.
C: MX is for mail routing, not web apps.
D: SRV advertises service/port discovery, not standard web hostnames.

---

### Question 60

A partners ad-hoc SAS tokens for several containers were accidentally posted in a wiki. Security wants the ability to instantly revoke those tokens and centrally control expiry/permissions going forward without rotating account keys or breaking other apps. You must implement a tenant-friendly pattern that scales across containers.
Which option should you choose?

**Options:**

- **A.** A. Create stored access policies on each container and issue SAS tokens bound to those policies ✅
- **B.** B. Rotate the storage account keys
- **C.** C. Issue service SAS tokens directly (no policy) with short expiry
- **D.** D. Use RBAC (Storage Blob Data Reader) instead of SAS

**Correct answer:** A

**Explanation:**

Choice A is correct. A stored access policy (at the container/share/queue/table) lets you bind service SAS tokens to a server-side policy (via a signed identifier). You can then revoke access immediately by deleting/renaming the policy or by bringing the policys expiry into the past; any SAS tied to that policy becomes invalid at once. Policies also give you centralized control over permissions and expiry for all SAS issued against that containermeeting the need to revoke quickly and manage at scale without rotating account keys.
Why the other options are incorrect
B: Rotating account keys would invalidate all service SAS signed with that key, causing broad disruption; the requirement explicitly says dont rotate keys. Its also not granular per container/partner.
C: Ad-hoc service SAS (no policy) cannot be centrally revoked; you must wait for each token to expire. Short lifetimes reduce risk but dont allow instant revocation.
D: RBAC governs requests authenticated with Entra ID, not SAS. SAS bypasses RBAC, so assigning roles wont revoke leaked SAS tokens.

---
