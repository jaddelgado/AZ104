# Practice Set 16

Source: [https://skillcertpro.com/az-104-exam-questions/16/](https://skillcertpro.com/az-104-exam-questions/16/)
Total questions: 60

---

### Question 1

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the subnets shown in the following table.

The subscription contains the storage accounts shown in the following table.

You create a service endpoint policy named Policy1 in the South Central US Azure region to allow connectivity to all the storage accounts in the subscription.

For the statement below, select Yes if the statement is true. Otherwise, select No.

Only storage1 and storage2 can be accessed from VNet2.

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
B. Diagnostic settings emit platform metrics/logs but dont deliver the VM insights (guest-level) experience or AMA/DCR deployment at scale.
C. Application Insights agent targets app telemetry, not the VM insights guest-performance/dependency solution.

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

Azure Storage Explorer provides an easy-to-use GUI for browsing accounts/containers, downloading individual blobs, editing metadata, and changing container-level access. It supports authentication via Azure AD (so staff dont need account keys), integrates with subscriptions and storage accounts, and is ideal for ad-hoc support tasks and small uploads/downloads without scripting or heavy orchestration.
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
VM1 and VM2 are in Subnet1, which has a Microsoft.Storage service endpoint enabled. Microsoft states that once a service endpoint is enabled for a subnet, traffic from that subnet to Azure Storage no longer uses the VMs public IP address and instead uses the subnets private IP address as the source. Microsoft also states that IP network rules permitting those public IPs no longer have an effect for traffic from that subnet. Because the question gives only an IP rule and no virtual network rule for Subnet1, VM1 and VM2 cannot use that IP-based firewall exception to access storage1.
Why the other options are incorrect:
 A. VM1 and VM2 only  This is incorrect because both VMs are in Subnet1, and Subnet1 has a Microsoft.Storage service endpoint. Once that service endpoint is enabled, Azure Storage traffic from that subnet stops using the VMs public IP addresses, so the storage accounts public IP rule does not help either VM. VM2 would also fail even under simple IP matching because its public IP is outside 13.68.158.0/24.
 B. VM1 and VM3 only  VM3 is valid, but VM1 is not. Even though VM1s public IP falls inside the allowed range, the service endpoint on Subnet1 changes the source identity used for Azure Storage traffic, so the public-IP firewall rule no longer applies to VM1s traffic.
 C. VM1 only  This is incorrect for the same reason. VM1 is in the subnet with the Microsoft.Storage service endpoint, so the storage firewalls public IP rule is no longer effective for VM1s access path to storage1.
 D. VM1, VM2, and VM3  This overstates access. VM3 can use the allowed public IP range because Subnet2 has no service endpoint, but VM1 and VM2 cannot rely on their public IPs once the storage service endpoint is enabled on Subnet1.

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
Snapshots alone dont protect you from entire share deletionif the share goes, its snapshots go too. Soft delete specifically intercepts those deletes and allows rapid recovery, meeting the requirement with minimal overhead.
Why others are incorrect
B. Manual snapshots require scripting/ops effort and dont protect against full share deletion.
C. Blob soft delete applies to the Blob service, not Azure Files.
D. Azure File Sync introduces servers/agents and is not required to meet the stated cloud-only undelete requirement.

---

### Question 6

Adventure Works manages 80+ Azure file shares across multiple storage accounts. They need automated, policy-based snapshots with centralized scheduling and retention, plus item-level restore and job monitoring/alertswithout custom scripts.
You need to implement centrally managed scheduled snapshots with retention and file/folder-level restores, and you want monitoring and alerts in one place. Which option should you choose?

**Options:**

- **A.** A. Enable point-in-time restore on each share and rely on ad-hoc restores when needed
- **B.** B. Turn on soft delete for Azure Files and set the retention to 30 days
- **C.** C. Configure Azure Backup for Azure Files using a Recovery Services vault and a backup policy ✅
- **D.** D. Use Azure Automation runbooks to take snapshots daily and delete older ones

**Correct answer:** C

**Explanation:**

Azure Backup for Azure Files provides policy-driven scheduling and retention using native share snapshots under the hood, with centralized management in a Recovery Services vault. It supports item-level restore, job tracking, and alertsall without building or maintaining custom scripts.
Point-in-time restore and soft delete solve different problems (roll back a share to a prior state, or recover deletions) but dont deliver centralized policy, monitoring, and alerting at scale. Azure Backup is purpose-built for these requirements and applies consistently across many shares and accounts.
Why others are incorrect
A. Point-in-time restore focuses on rolling a share back; it lacks central, policy-based scheduling/retention and vault-level monitoring.
B. Soft delete protects against accidental deletes; it doesnt create scheduled recovery points or item-level backup workflows.
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

Choice B is correct. An Enhanced policy for Azure VM backup supports multiple backups per day (as frequent as every 4 hours) to meet the short RPO, and lets you configure Instant Restore snapshot retention (for quick, same-region restores) alongside vault retention for weekly/monthly points. Because its defined in the Recovery Services vault, you can apply it at scale and report on compliance centrally.
Enhanced policy also provides zonal resiliency for snapshot-tier recovery points where supported, improving availability of near-term restores. Compared to scripting or standard daily policies, it combines frequency + retention controls in one place and removes per-VM scheduling drift.
Why others are incorrect
A. Standard policy is limited to one daily backup; it cant achieve a 4-hour RPO.
C. Diagnostic settings export telemetry; they dont create backups or retention.
D. Runbooks add operational overhead and lack vault-native retention/restore semantics.

---

### Question 8

Contoso built a new hub VNet using click-ops in the portal. They now need an exact copy of the template used for a specific deployment so they can redeploy it in a lab subscription. They dont want a snapshot of current resources; they want the original authored template.
You need to export the exact deployment template used previously for a resource groupscoped deployment. Which option should you choose?

**Options:**

- **A.** A. az deployment group export ✅
- **B.** B. az group export
- **C.** C. Export template (resource blade)
- **D.** D. Azure Migrate

**Correct answer:** A

**Explanation:**

Exporting from deployment history returns the original template used for that deployment, making it ideal for clean redeployments without post-deployment drift. At resource group scope, this is done with az deployment group export (or via the portals Deployments blade).
Why others are incorrect
B. az group export generates a snapshot of current state (auto-generated), not the authored template.
C. Exporting from a single resource blade only exports that one resource, not the full deployment.
D. Azure Migrate is unrelated to ARM/Bicep template export.

---

### Question 9

You have two Azure subscriptions named Sub1 and Sub2. Sub1 is in a management group named MG1. Sub2 is in a management group named MG2.

You have the resource groups shown in the following table.

You have the virtual machines shown in the following table.

You assign roles to users as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

User2 can manage disks and disk snapshots of VM1.

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

User2s Virtual Machine Contributor assignment is scoped to management group MG2, which contains Sub2 but not Sub1. Azure RBAC is scope-based and hierarchical: a role is effective only within the scope its assigned to (management group, subscription, resource group, or resource) and its descendants. Because VM1 lives in Sub1 (outside MG2s hierarchy), User2s assignment does not apply to VM1 or any of its related resources (managed disks, snapshots).

Even if User2 had a relevant role, it must be assigned at a scope that covers Sub1 (e.g., Sub1, its RG, or VM1 itself). Without such coverage, User2 cannot create, delete, or modify the disks or snapshots associated with VM1, nor attach/detach them via the VM resource.

Key points

RBAC roles are effective only within their scope and descendants; MG2 ? Sub2 does not include Sub1.

VM1 (and its disks/snapshots) reside in Sub1, so the MG2 assignment is out of scope.

To manage VM1s disks/snapshots, assign an appropriate role (e.g., Virtual Machine Contributor, Disk Contributor, or Contributor) at a scope that includes Sub1/RG1/VM1.

---

### Question 10

You have two Azure subscriptions named Sub1 and Sub2. Sub1 is in a management group named MG1. Sub2 is in a management group named MG2.

You have the resource groups shown in the following table.

You have the virtual machines shown in the following table.

You assign roles to users as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

User1 can sign in to VM1.

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

User1 cant sign in to VM1 because theyre missing a data-plane sign-in role. The assignment they do haveVirtual Machine Contributor at management group MG1 (inherited by Sub1/RG1/VM1)is a control-plane role: it lets you create, delete, start/stop, and configure VMs and their resources, but it does not grant OS sign-in rights.

Azure VM interactive sign-in requires one of the VM sign-in roles to be assigned at a scope that covers the target VM:

Virtual Machine User Login (standard user sign-in), or

Virtual Machine Administrator Login (admin-level sign-in).

Because neither of these roles is assigned to User1 at VM1, RG1, Sub1, or MG1, the RBAC evaluation for the sign-in operation fails, even though User1 can manage the VM. In short: manage ? log in. You must add a VM sign-in role at an appropriate scope for User1 to authenticate to the guest OS.

Key points

Virtual Machine Contributor ? manage VM resources (create/modify/start/stop), no OS login.

Virtual Machine User Login/Admin Login ? required to interactive sign in to the VM (Linux or Windows).

Scope can be VM / RG / Subscription / MG; inheritance applies, but the correct role must be present.

---

### Question 11

You have an Azure subscription that contains the users shown in the following table.

The groups are configured as shown in the following table.

You have a resource group named RG1 as shown in the below exhibit.

For the statement below, select Yes if the statement is true. Otherwise, select No.

“You can assign User2 the Owner role for RG1 by adding Group2 as a member of Group1.“

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Yes is CORRECT because nesting is supported for groups that can be assigned a role.

In the screenshots pasted below, TestGroup is the Owner of the RG. And TestGroup3 is another group with a user User1, we want to be added as Owner of RG. So, as you can see, we can add TestGroup3 as the member of TestGroup. And this gives User1 the owner access of the RG.

---

### Question 12

You have an Azure subscription that contains the users shown in the following table.

The groups are configured as shown in the following table.

You have a resource group named RG1 as shown in the below exhibit.

For the statement below, select Yes if the statement is true. Otherwise, select No.

“You can assign User3 the Owner role for RG1 by assigning the Owner role to Group3 for RG1.“

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Yes is correct. Group3 is marked Microsoft Entra roles can be assigned to the group: Yes, making it eligible for direct role assignments. Even though its a Microsoft 365 group, a direct (non-nested) RBAC assignmentsuch as Owner on RG1will apply to the group, so User3, as a direct member of Group3, inherits Owner on RG1.

---

### Question 13

You have an Azure subscription named Sub1 that contains the blob containers shown in the following table.

Sub1 contains two users named User1 and User2. Both users are assigned the Reader role at the Sub1 scope.

You have a condition named Condition1 as shown below.

You have a condition namedCondition2as shown below.

You assign roles to User1 and User2 as shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

User2 can read blob1.

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

User2 can read blob1 because their data-plane RBAC assignment  Storage Blob Data Owner on the storage1 account  grants full read/write permissions to all blob containers and blobs within that account. Scope matters: assigning at the storage account automatically scopes down to every child resource (containers and blobs). In Azure RBAC, access is evaluated per operation against the effective role assignments at the relevant scope; if a matching allow exists and no applicable deny/condition blocks that specific operation, access is granted.

Here, Condition2 is attached to the same role assignment but applies only to write operations and only when the blob path matches *2*. User2 is performing a read (data-plane Get Blob/Read), not a write (Put, Delete, Set Tier, etc.). Because the condition does not target reads, it doesnt restrict the operation. With no additional deny or conflicting condition in play, the default read permission from Storage Blob Data Owner remains effective, so User2 can read blob1.

Key points, succinctly:

Role &amp; scope: Storage Blob Data Owner at storage account scope ? read/write over all blobs in that account.

Operation type: The condition filters writes only; reads are unaffected.

Path filter: Even for writes, it would apply only if the blob path matched *2*; it doesnt come into play for a read of blob1.

Result: Access allowed for the read.

---

### Question 14

You have two Azure virtual machines as shown in the following table.

You create the Azure DNS zones shown in the following table.

You perform the following actions:

To fabrikam.com, you add a virtual network link to vnet1 and enable auto registration.

For contoso.com, you assign vm1 and vm2 the Owner role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

The DNS A record for vm1 is added to contoso.com and has the IP address of 131.107.50.20.

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Auto-registration of VM hostnames is an Azure Private DNS feature. It works only when you link a private DNS zone to one or more virtual networks and enable auto-registration on that VNet link. When a VMs NIC IP changes (e.g., DHCP in the VNet), Azure automatically creates/updates the corresponding A (and reverse) records in that private zone.

Here, contoso.com is a public DNS zone. Public zones do not support VNet links or auto-registration; records must be created/managed explicitly (manually, IaC, or through APIs). Because theres no private zone with auto-registration in play, Azure wont create an A record for vm1 pointing to its public IP 131.107.50.20public IP publication is always an intentional, manual step in public DNS.

Finally, granting Owner on the VM resource (or to vm1/vm2 identities) affects RBAC authorization for Azure resources, not DNS record life-cycle automation. RBAC determines who can make changes; it doesnt turn on auto-registration or create DNS records by itself.

Key points

Auto-registration exists only for Private DNS zones linked to VNets; public zones never auto-register.

Public DNS records (A/AAAA/CNAME) are added/updated manually or via automation (ARM/Bicep/Terraform/CLI), not by VM creation.

RBAC role assignments (e.g., Owner) dont trigger DNS updates; they just permit you to make them.

---

### Question 15

You have two Azure virtual machines as shown in the following table.

You create the Azure DNS zones shown in the following table.

You perform the following actions:

To fabrikam.com, you add a virtual network link to vnet1 and enable auto registration.

For contoso.com, you assign vm1 and vm2 the Owner role.

For the following statement, select Yes if the statement is true. Otherwise, select No.

The DNS A record for vm1 is added to fabrikam.com and has the IP address of 10.0.1.4.

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

Because fabrikam.com is an Azure Private DNS zone and auto-registration is enabled on its virtual network link to vnet1, Azure will automatically create (and maintain) an A record for vm1 using its private IP 10.0.1.4. Auto-registration works at the VNet link level: when a VMs NIC with a private IP is attached to a linked VNet that has auto-registration turned on, Azure registers the VMs hostname in the private zone (forming the FQDN, e.g., vm1.fabrikam.com) and points it to the VMs current private IP. If the VMs private IP changes (DHCP/resize), the A record is updated; if the VM/NIC is removed, the record is cleaned up. This behavior is only supported for Private DNS zones, which is exactly your setup hereso vm1 will be automatically registered with 10.0.1.4.

Key points

Auto-registration is a feature of Azure Private DNS when a VNet link has Enable auto registration set to On.

The VM must be connected to that linked VNet; Azure then creates/updates the A record in the private zone.

Public DNS zones do not support auto-registration; manual/IaC updates are required there.

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

Among the listed choices, service endpoint is the correct answer. Microsofts current documentation says virtual network service endpoints allow private IP addresses to reach Azure services without requiring public IP addresses, and for Azure Storage specifically, traffic from a subnet with a service endpoint uses the subnets private IP address as the source IP when communicating with the storage account.
There is an important nuance here. Microsoft also distinguishes service endpoints from private endpoints: a private endpoint gives the storage account a private IP in your virtual network, while a service endpoint keeps the storage service publicly routable and changes how traffic from the subnet reaches it. If private endpoint had been one of the answer choices, that would be the feature that assigns a private IP to the storage account itself. But with the options provided, the expected AZ-104 answer is service endpoint.
Why the other options are incorrect:
 A. a point to site (P2S) connection  P2S is used for client devices connecting into an Azure virtual network over VPN. It is not the feature used to let an Azure VM securely reach Azure Storage over Azures internal service networking model.
 C. a VPN gateway  A VPN gateway is used for site-to-site, point-to-site, or VNet-to-VNet connectivity. It does not by itself configure Azure Storage access from a VM by using the storage service integration mechanism described in this question.
 D. the Azure Front Door service  Azure Front Door is a global application delivery and web traffic routing service. It is not used to provide private network access from a VM to an Azure Storage account.

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

This creates the vmimages container in the specified storage account (assuming youre authenticated via azcopy login or SAS).

Why the other options are incorrect

A (sync  blob): sync synchronizes data; it does not create containers.

B (make  queue): Queue endpoint is for Queue Storage, not Blob containers.

C (copy  table): Table endpoint is for Table Storage, not Blob containers.

D (sync  dfs): dfs.core.windows.net is the ADLS Gen2 (HNS) endpoint; sync still doesnt create containers.

F ( images.core.windows.net): images is not a valid Azure Storage endpoint.

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

You want only blobs whose names start with finance inside container1, so the correct prefix string is container1/finance. This limits the inventory output (CSV) to those matching blobs when your schedule runs daily.

Why the other options are incorrect

A (container1/*): Uses a wildcard. prefixMatch doesnt support *; it would also imply all blobs rather than only finance*.

C (finance): Missing the container name. The value must start with the container followed by the prefix.

D (/container1/finance): Leading slash is not allowed; paths are specified without a leading /.

E (container1/finance/*): Wildcards arent supported in prefixMatch; use the pure prefix string instead.

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

Use blockBlob. Azure Storage Inventorys blobTypes filter expects actual blob types: blockBlob, appendBlob, or pageBlob. In your scenario, youre inventorying thousands of image files and outputting a daily CSV listing only blobs whose names start with finance. Images are normally stored as block blobs, so setting blobTypes: [“blockBlob“] (with your prefixMatch: [“finance“]) aligns with the data you have and the inventory filter you need.

Why the other options are incorrect

appendBlob: Valid blob type but mainly for append-only logs; not the right filter for image files.

pageBlob: Valid blob type but used for random-access pages (e.g., VHDs); not typical for images.

snapshot: Not a blob type; its a state of a blob. Inventory can include snapshot metadata, but blobTypes cannot be set to snapshot.

container: Not a blob type; its a namespace that holds blobs.

all: Not a valid value for blobTypes; you must specify one or more of the concrete types (blockBlob, appendBlob, pageBlob).

---

### Question 20

Taylor needs to manage the virtual network **vnet1** in **RG-Network**. Based on the assignments above, what is Taylor’s effective permission on **vnet1**?

**Options:**

- **A.** A. Delete vnet1 ✅
- **B.** B. Read-only
- **C.** C. Grant Reader only
- **D.** D. No access

**Correct answer:** A

**Explanation:**

Taylor is in **DevOps (Contributor at management group)**, which **inherits** to all child scopes—including the subscription, RG-Network, and its resources—so Taylor has **Contributor** on vnet1. Contributor permits **create/update/delete** of resources. Taylor is also in **NetOps (User Access Administrator at RG-Network)**, which **adds** the ability to manage role assignments at that RG, but UA Admin isn’t needed to delete; Contributor already allows it. RBAC is cumulative—the **most permissive** matching role across scopes applies.

**Why the others are incorrect:**

- **B:** Reader is present via the Auditors group, but **Contributor** from the higher scope overrides by adding write/delete.

- **C:** User Access Administrator allows managing **access**, not restricting you to only granting Reader; with Contributor, Taylor can also modify/delete.

- **D:** Taylor clearly has inherited permissions; “no access” is incorrect.

---

### Question 21

Contoso Ltd. manages multiple Azure subscriptions for its regional teams. The company wants to organize these subscriptions under a single hierarchy for centralized policy and role management.

You need to apply a policy that restricts virtual machine sizes to Standard_B and Standard_D series for all subscriptions under the APAC management group.

Where should you assign this policy to ensure consistent enforcement across Sub-AU1 and Sub-SG1?

**Options:**

- **A.** A. Assign the policy to each subscription individually
- **B.** B. Assign the policy to the APAC management group ✅
- **C.** C. Assign the policy to the Corporate management group
- **D.** D. Assign the policy to individual resource groups

**Correct answer:** B

**Explanation:**

Assigning the policy to individual resource groups would not provide the desired enforcement across all subscriptions under the APAC management group. Resource group-level assignments are more granular and may not cover all resources within the subscriptions.

Overall explanation

Assigning a policy at the **APAC management group** scope ensures that it automatically applies to all subscriptions under that group. Policies assigned at higher scopes cascade to all descendant resources, providing centralized and consistent governance.

**Why others are incorrect:**

- **A:** Requires manual policy assignment to each subscription, which is inefficient and error-prone.

- **C:** Would affect the Europe region as well, exceeding the intended scope.

- **D:** Resource group scope is too granular for regional governance needs.

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

### Question 23

Contoso Ltd. manages multiple Azure subscriptions for its regional teams. The company wants to organize these subscriptions under a single hierarchy for centralized policy and role management.

Contoso wants to delegate administrative rights for the Europe management group to a regional IT lead, but not allow them to modify global Corporate policies.

What should the global admin do?

**Options:**

- **A.** A. Assign the Owner role at the Corporate management group level
- **B.** B. Assign the Owner role at the Europe management group level ✅
- **C.** C. Assign the Contributor role at the Corporate management group level
- **D.** D. Assign the Reader role at the Europe management group level

**Correct answer:** B

**Explanation:**

Assigning the **Owner role** at the **Europe management group** level provides full control of that region’s resources without extending permissions to Corporate or Root. Azure RBAC roles respect the hierarchical boundaries of management groups, ensuring proper least-privilege delegation.

**Why others are incorrect:**

- **A:** Grants full access across the entire Corporate scope — too broad.

- **C:** Contributor cannot assign or modify access rights — insufficient.

- **D:** Reader role allows viewing resources only — cannot manage them.

---

### Question 24

Fabrikam operates multiple storage accounts used by different departments. Each account uses shared keys for programmatic access, but the IT security team is implementing key rotation policies to enhance security.

Fabrikam’s IT team needs to enforce key rotation on all storage accounts without modifying existing applications that use these keys. Which approach should they use?

**Options:**

- **A.** A. Regenerate the access keys manually for each storage account every 3090 days
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

### Question 29

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.

You have an Azure subscription that contains the virtual machines shown in the following table.

You deploy a load balancer that has the following configurations:

Name: LB1

Type: Internal

SKU: Standard

Virtual network: VNET1

You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.

Solution: You create two Standard SKU public IP addresses and associate a Standard SKU public IP address to the network interface of each virtual machine.

Does this meet the goal?

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

For a **Standard SKU load balancer**, backend pool members must satisfy two key requirements:

- All virtual machines must be **in the same region and virtual network** as the load balancer.

- Each VM’s network interface must be associated with **either no public IP** or a **Standard SKU public IP address** — Basic SKU IPs are **not compatible** with Standard SKU load balancers.

In this scenario, by creating **two Standard SKU public IP addresses** and assigning one to each VM, you align the configuration with the Standard load balancer’s requirements. Both **VM1 and VM2** can now be successfully added to the backend pool of **LB1** because they share the same VNet (VNET1) and use compatible Standard SKU IPs.

This approach ensures proper connectivity and predictable behavior under Azure’s unified security and control model for Standard networking resources. Unlike Basic SKU load balancers, the Standard SKU operates on a **secure-by-default** model—no inbound traffic is allowed unless explicitly configured.

Why No is incorrect

If Basic SKU public IPs had been used, or if the VMs were in different VNets or regions, they couldn’t be added to the backend pool of a Standard SKU load balancer.

---

### Question 30

Fabrikam uses Azure Files (SMB) for several departmental shares in a standard (HDD) GPv2 account. One share named **Compliance** holds PDFs that are rarely accessed but must remain **online** with **no rehydration**. You need to reduce cost for **that single share** without affecting others.

You need to lower the cost of the **Compliance** share only, while keeping it **online**. **Which option should you choose?**

**Options:**

- **A.** A. Change the storage accounts default access tier to Cool
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

### Question 31

Fabrikam has two VNets in the same region and wants low-latency private connectivity without gateways: VNetA uses 10.10.0.0/16; VNetB was mistakenly created as 10.10.0.0/16 as well. You must enable private traffic between them without changing regions or adding VPN/ExpressRoute.

**Options:**

- **A.** A. Create VNet peering between VNetA and VNetB as-is
- **B.** B. Enable service endpoints on both VNets
- **C.** C. Add private endpoints pointing each VNet at the other
- **D.** D. Change VNetB to a non-overlapping address space and then create VNet peering ✅

**Correct answer:** D

**Explanation:**

VNet peering requires non-overlapping CIDRs. First, modify VNetBs address space (for example, 10.20.0.0/16), adjust any subnets accordingly, and then create VNet peering between the two VNets. Peering gives private, low-latency connectivity using Azures backboneno gateways or public exposure.
Why the others are incorrect:
A. Peering as-is fails validation because the address spaces overlap.
B. Service endpoints secure access to Azure services, not VNet-to-VNet connectivity.
C. Private endpoints are for accessing PaaS resources privately; they dont connect VNets to each other.

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

Azure Blob Storage supports data access by using Microsoft Entra ID, the storage account access key through Shared Key authorization, or a shared access signature (SAS). Microsofts Blob authorization guidance and Azure CLI authorization guidance both list these as the supported ways to authorize blob data operations.
A certificate is not listed as a direct authorization type for accessing a blob container. Certificates may be involved indirectly in broader identity or application authentication patterns, but for Blob Storage container access itself, the supported authorization choices are Entra ID, Shared Key, or SAS.
Why the other options are incorrect:
 A. Microsoft Entra ID only  Microsoft recommends Microsoft Entra ID for security, but it is not the only supported authorization method. Blob data operations can also be authorized with the storage account access key or a SAS token.
 B. Microsoft Entra ID, shared access signature or certificate only  This is incorrect because it omits the storage key, which is a valid authorization method for blob data access. It also includes certificate, which is not a standard Blob Storage authorization type in Microsofts storage authorization documentation.
 D. Microsoft Entra ID, storage key, shared access signature or certificate  The first three items are valid, but certificate makes the option incorrect. Microsofts storage authorization documentation does not list certificate as a direct authorization type for blob container access.
 E. Storage key or shared access signature only  This is incorrect because Microsoft Entra ID is also a supported authorization method for blob data access, and Microsoft recommends it whenever possible.

---

### Question 33

You see this secure parameter:
@secure()
param adminPassword string
What does @secure() do for this parameter?

**Options:**

- **A.** A. Hidden in logs ✅
- **B.** B. Outputtable value
- **C.** C. Auto Key Vault
- **D.** D. Policy enforced

**Correct answer:** A

**Explanation:**

@secure() (ARM: secureString/secureObject) marks the value as secret. Its redacted in deployment logs/portal, encrypted at rest by the control plane, and cannot be retrieved via template outputs. Its still passed to resources at runtime, but never disclosed by the deployment engine.
Why the others are incorrect:
B. Outputtable value  Secure params cannot be emitted in outputs; the platform blocks this.
C. Auto Key Vault  Not automatic. You can reference Key Vault secrets, but @secure() alone doesnt create or wire KV.
D. Policy enforced  Azure Policy doesnt automatically apply here; @secure() is a template/runtime behavior, not a policy control.

---

### Question 34

Environment
Youre deploying three identical web VMs for a 24/7 production tier. You have to configure placement at creation so the deployment survives a datacenter-level failure and meets the highest Azure in-region compute SLA for multi-VM workloads.

**Options:**

- **A.** A. Availability set
- **B.** B. Standard load balancer
- **C.** C. Availability zones ✅
- **D.** D. Proximity placement group

**Correct answer:** C

**Explanation:**

Placing two or more VMs across Availability Zones in the same region provides zone isolation (separate power, cooling, and networking) and the highest multi-VM compute SLA for IaaS VMs within that region.
Why the others are incorrect:
A  Availability set only spreads across fault/update domains within a single datacenter; lower SLA than zones and no datacenter-level separation.
B  Standard load balancer distributes traffic but doesnt create failure domain separation or guarantee a compute SLA on its own.
D  Proximity placement group optimizes latency/co-location; it doesnt add resiliency or an SLA uplift.

---

### Question 35

Youre provisioning a new admin VM and two app VMs. Security policy states no passwords permitted on any Linux VM, and enforcement must happen at creation so that password-based SSH is never enabled. Azure AD login may be added later for centralized identity, but it must not weaken the creation-time control.
Environment

**Options:**

- **A.** A. Password
- **B.** B. SSH public key ✅
- **C.** C. Azure AD login
- **D.** D. Managed identity

**Correct answer:** B

**Explanation:**

Choosing SSH public key at creation configures Linux VMs for key-based SSH and disables password authentication from day one. This satisfies the no passwords permitted policy across all three VMs. You can still enable Azure AD login later for central identity, but the VM remains key-only for SSH because the provisioning method is key-based.
Why the others are incorrect:
A. Password: Enables password-based SSH, violating the stated policy at creation.
C. Azure AD login: Useful for central auth later, but it does not replace the required creation-time selection of SSH keys vs. password; you still must choose keys to enforce passwordless SSH.
D. Managed identity: Grants the VM an Azure identity for resource access (e.g., Key Vault, Storage); it is not an OS login method and doesnt control SSH authentication.

---

### Question 36

Environment
Constraints
 Prod: Must stay in East US; internet-facing behind a load balancer.
 DR: Must stay in North Central US; no scale sets; standalone VMs only.
Youre standing up the Prod web tier in East US. The placement must survive a datacenter (zone) outage and achieve the highest in-region compute SLA for IaaS VMs. You need to decide placement at creation so the three VMs land in separate failure domains.

**Options:**

- **A.** A. Proximity placement group
- **B.** B. Standard load balancer
- **C.** C. Availability zones ✅
- **D.** D. Availability set

**Correct answer:** C

**Explanation:**

Placing the three VMs across availability zones gives independent datacenter fault domains within the region and unlocks Azures highest multi-VM compute SLA. A single-zone failure wont take down the tier.
Why the others are incorrect:
A. Proximity placement group optimizes inter-VM latency; it doesnt provide zone isolation or an SLA uplift.
B. Standard load balancer distributes traffic but doesnt create compute redundancy domains or guarantee VM uptime.
D. Availability set improves resiliency inside one datacenter (fault/update domains) but lacks zone isolation and offers a lower SLA than zones.

---

### Question 37

Environment
Constraints
 Prod: Must stay in East US; internet-facing behind a load balancer.
 DR: Must stay in North Central US; no scale sets; standalone VMs only.
Youre deploying the DR batch tier in North Central US. This region has no availability zones, but you still must meet the in-region multi-VM compute SLA for two standalone VMs. You cannot change regions or use scale sets.

**Options:**

- **A.** A. Proximity placement group
- **B.** B. Standard load balancer
- **C.** C. Availability zones
- **D.** D. Availability set ✅

**Correct answer:** D

**Explanation:**

With no zones available, an availability set spreads the two VMs across fault domains and update domains in the datacenter, which is what Azure uses to provide the multi-VM compute SLA in these regions.
Why the others are incorrect:
A. Proximity placement group only co-locates for low latency; it doesnt separate fault/update domains.
B. Standard load balancer is networking, not compute placement; it doesnt grant the SLA by itself.
C. Availability zones are not available in this region, so they cant be used.

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

This approach is incorrect on multiple fronts. ACR does not support VNet service endpoints; network isolation for ACR is provided via Private Link (private endpoints), not service endpoints. The Basic tier lacks geo-replication, so theres no automatic replication to West Europe. Using tokens instead of Azure RBAC contradicts the requirement to grant pull/push via identity-based access. Overall, it fails the private access model and the multi-region availability requirement.

---

### Question 41

Fabrikam is launching three production APIs in East US. You must provision an App Service plan that supports VNet integration, multiple deployment slots for blue/green and can scale out beyond 10 instances during seasonal peaks, while keeping management in the Azure portal.
Which App Service plan tier should you create?

**Options:**

- **A.** A. Basic
- **B.** B. Standard
- **C.** C. Premium ✅
- **D.** D. Free

**Correct answer:** C

**Explanation:**

Premium supports VNet integration, more deployment slots (than Standard), and higher scale-out limits (beyond 10 instances), which matches the production requirements and growth headroom.
Why the others are incorrect:
A. Basic: No autoscale, no VNet integration, and no deployment slotsdoesnt meet production needs.
B. Standard: Has slots and VNet integration, but max scale is lower (typically up to 10 instances), so it fails the beyond 10 requirement.
D. Free: No custom domains/SSL, no scale, and testing-only limitsunsuitable for production APIs.

---

### Question 42

Contoso needs a small dev/test web app for a marketing pilot. It must use a custom domain with TLS, run on a single instance, and keep costs to a minimum. Autoscale, VNet integration, and deployment slots are not required.
Which App Service plan tier should you create?

**Options:**

- **A.** A. Basic ✅
- **B.** B. Standard
- **C.** C. Premium
- **D.** D. Free

**Correct answer:** A

**Explanation:**

Basic is the lowest-cost tier that supports custom domains and SNI SSL for a simple single-instance app, making it ideal for low-traffic dev/test.
Why the others are incorrect:
B. Standard: Adds autoscale and more features (and cost) the scenario doesnt need.
C. Premium: Enterprise features and higher limits that overprovision and increase cost.
D. Free: Doesnt support custom domains/SSL, so it cant meet the requirement.

---

### Question 43

You need to back up a production web app on a schedule without exposing any public endpoint on the backup target. Backups must flow privately over your VNet to a locked-down storage account.
Which configuration meets the requirement?

**Options:**

- **A.** A. Configure App Service Backup to stbackup, reach it via the private endpoint using VNet integration, and keep public access disabled on the storage account ✅
- **B.** B. Use the Free plan and run on-demand backups to any storage account
- **C.** C. Allow stbackups public endpoint and IP-allowlist the apps outbound IPs, then enable App Service Backup
- **D.** D. Use Shared plan backups and restrict by service endpoints

**Correct answer:** A

**Explanation:**

App Service backups write to an Azure Storage container you specify. With VNet integration on the app and a private endpoint for the storage account in the same VNet, all backup traffic stays on private IPs. Private DNS ensures the storage account name resolves to the private endpoint. With public network access disabled on the storage account, theres no internet exposure. This satisfies: scheduled backups, private-only data path, and a locked-down target.
Why the others are incorrect:
B. Free plan, on-demand backups  Free/Shared tiers do not support the App Service backup feature. Also, this doesnt address private-only routing.
C. Public endpoint + IP allowlisting  Still exposes the storage account publicly and fails the no public endpoint exposure requirement. Outbound IPs can change with scale/platform events, making this brittle.
D. Shared plan + service endpoints  App Service backup isnt available on Shared. Service endpoints dont apply to private-only access for storage here; you already have a private endpoint pattern that fully closes public access.

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

The App Service backup/restore feature is available starting at the Basic tier and continues through Standard and Premium. From Basic upward, you can configure a storage account/container and set a schedule directly in the portal. Its the lowest-cost tier that meets the requirement.
Why the others are incorrect:
A. Shared  Also lacks the backup feature; it shares compute and is not suitable for scheduled backups.
B. Free  No backup/restore support; intended for testing only with tight limits.
D. Consumption  This is a Functions hosting tier, not an App Service plan tier for Web Apps, and it doesnt provide the Web App backup feature.

---

### Question 45

Contoso is building a three-tier VNet (web, app, data) in the same region. By default, subnets can route to each other, but security requires web cannot reach data, while app can reach both. All tiers still need outbound internet.
You must achieve this with native VNet featuresnot firewalls or NVAs.

**Options:**

- **A.** A. Subnet delegation to Microsoft.Web/serverFarms
- **B.** B. Service endpoints to Storage and SQL
- **C.** C. Network security groups on each subnet with allow/deny rules ✅
- **D.** D. Private endpoints on all three subnets

**Correct answer:** C

**Explanation:**

NSGs give you layer-4 allow/deny rules per subnet (or NIC). Create explicit allow rules for app?web and app?data flows, and a deny rule preventing web?data. Because system routes remain, outbound internet still works unless you explicitly block it. This meets the requirement using core VNet constructs without extra appliances.
Why the others are incorrect:
A. Subnet delegation only reserves a subnet for a PaaS resource provider; it doesnt implement traffic filtering.
B. Service endpoints secure access to Azure PaaS services; they dont block traffic between your subnets.
D. Private endpoints publish private IPs for PaaS resources; theyre not a subnet-to-subnet isolation mechanism.

---

### Question 46

You see this Bicep:
param appName string
module web ‘modules/webapp.bicep‘ = {
  name: ‘webMod‘
  params: {
    appName: appName
  }
}
output webUrl string = web.outputs.defaultHostName
What is web.outputs.defaultHostName?

**Options:**

- **A.** A. A local variable
- **B.** B. A resource property
- **C.** C. A module output ✅
- **D.** D. A module parameter

**Correct answer:** C

**Explanation:**

web is a module instance. Its outputs bag exposes values defined in modules/webapp.bicep. Referencing web.outputs.defaultHostName pulls the output the module produced (e.g., the Web App host name) so this template can emit it or pass it onward.
Why the others are incorrect:
A. Local variable  Variables use var (Bicep) / variables (ARM), not module.outputs.
B. Resource property  Resource properties hang off a resource symbol, not a module.
D. Module parameter  Parameters are passed into the module via its params block.

---

### Question 47

Youre expanding a VNet and need to add a new Data subnet sized for ~100 hosts. The VNet already has two /24 subnets and a GatewaySubnet placed at the end of the address space. You must choose a prefix that fits the host count, stays inside the VNet, and does not overlap anything that exists.
You need to create Subnet-Data. Which address prefix should you use?

**Options:**

- **A.** A. 10.20.0.128/25
- **B.** B. 10.21.0.0/25
- **C.** C. 10.20.2.0/25 ✅
- **D.** D. 10.20.1.128/25

**Correct answer:** C

**Explanation:**

10.20.2.0/25 is inside 10.20.0.0/16, provides /25 capacity (~126 usable hosts) for the ~100-host requirement, and does not overlap 10.20.0.0/24 (Frontend), 10.20.1.0/24 (App), or the GatewaySubnet at 10.20.255.224/27. It cleanly fits between existing ranges and respects CIDR boundaries.
Why the others are incorrect:
A. 10.20.0.128/25 sits inside 10.20.0.0/24, so it overlaps Subnet-Frontend.
B. 10.21.0.0/25 is outside the VNets 10.20.0.0/16 address space, so it cant be used unless you expand the VNet first.
D. 10.20.1.128/25 sits inside 10.20.1.0/24, so it overlaps Subnet-App.

---

### Question 48

Youve deployed two IaaS tiers in the same VNet: asg-web for frontend VMs and asg-app for application VMs. Security requires that web VMs may reach app VMs only on TCP 443. All other eastwest traffic between subnets must be blocked. Outbound internet must remain allowed via default routes. No firewalls/NVAsuse native VNet features.
How should you configure this?

**Options:**

- **A.** A. Enable service endpoints to Storage and SQL
- **B.** B. Assign NSGs to NICs only; leave defaults
- **C.** C. On the app subnets NSG: Allow from asg-web to asg-app TCP 443, then Deny VirtualNetwork to VirtualNetwork Any; leave internet defaults ✅
- **D.** D. Use a Standard Load Balancer with a health probe on 443

**Correct answer:** C

**Explanation:**

Default NSG rules include AllowVNetInBound, which would otherwise permit all eastwest flows. By adding a high-priority Allow for asg-web ? asg-app on TCP 443 and then a higher-priority Deny from VirtualNetwork ? VirtualNetwork on Any, you constrain traffic to HTTPS only. Applying this NSG on the app subnet (or app NICs) enforces the rule on ingress to the app tier. Because you didnt add outbound denies, default routes still allow internet egress.
Why the others are incorrect:
A: Service endpoints protect access to Azure PaaS services, not VM-to-VM flows.
B: Defaults keep AllowVNetInBound, so eastwest stays wide open.
D: Load balancers distribute traffic; they dont enforce L4 policy between VMs.

---

### Question 49

You have a set of management VMs that must allow RDP (TCP 3389) only from your on-premises public CIDR. All other RDP from the internet must be blocked for these VMs. You want a simple, identity-based way to target the rule without breaking other traffic.
What should you do?

**Options:**

- **A.** A. Create asg-mgmt for the management VMs; on the mgmt subnet NSG add Allow 3389 from on-prem CIDR to asg-mgmt, then Deny 3389 from Internet ✅
- **B.** B. Enable Allow RDP on all NSGs and add a UDR to on-premises
- **C.** C. Use Private Endpoints for the VMs and disable public networking
- **D.** D. Add a NAT Gateway; NAT will block unsolicited RDP by default

**Correct answer:** A

**Explanation:**

An ASG lets you target just the management NICs in your NSG rules. You add a precise Allow for source = on-prem CIDR, destination = asg-mgmt, port 3389, and follow with an explicit Deny for TCP 3389 from Internet. This blocks all other RDP attempts while leaving non-RDP and outbound traffic unaffected thanks to the remaining default NSG rules.
Why the others are incorrect:
B: A blanket Allow RDP opens exposure; UDRs dont replace access control.
C: Private Endpoints are for PaaS resources, not VM NICs.
D: NAT Gateway provides outbound SNAT; it doesnt enforce inbound port restrictions.

---

### Question 50

Youre publishing www.contoso.com behind an Azure Load Balancer that currently uses a Public IP resource. The team wants DNS to automatically track the LBs public IP if its ever replaced, without you editing the record each time. You will host the zone in Azure DNS and keep everything public-facing.
How should you publish www.contoso.com so it tracks the Load Balancers Public IP automatically?

**Options:**

- **A.** A. Create a CNAME from www to the IP address string
- **B.** B. Create an A record pointing to the current numeric IP
- **C.** C. Create an A record alias to the Public IP resource in an Azure DNS public zone ✅
- **D.** D. Create a TXT record with the Public IP resource ID

**Correct answer:** C

**Explanation:**

An A (alias) record in an Azure DNS public zone can target an Azure Public IP resource, not a static IP string. If the underlying resource changes (e.g., LB swapped or IP reassigned), the alias keeps tracking the resource, eliminating manual record edits. This is the supported, resilient way to bind www to an Azure-owned public endpoint.
Why the others are incorrect:
A. CNAME ? IP string: A CNAME must point to a hostname, not an IP. Also, it wouldnt track a resource change.
B. A ? numeric IP: Works initially but is static; you must edit DNS whenever the resource/IP changes.
D. TXT with resource ID: TXT records do not direct client traffic; theyre for metadata/verification.

---

### Question 51

You created a Private Endpoint for storageacct1 (Blob) in VNet-A. Both VNet-A and VNet-B must privately resolve storageacct1.blob.core.windows.net to the endpoints private IP. You want a standard, supported approach that doesnt rely on hosts files or custom DNS servers.
How should you configure private name resolution for both VNets?

**Options:**

- **A.** A. Create an Azure Private DNS zone privatelink.blob.core.windows.net, create/confirm the A record for storageacct1, and link both VNet-A and VNet-B to the zone ✅
- **B.** B. Create a public Azure DNS zone and add a private A record for storageacct1
- **C.** C. Enable auto-registration on VNet-A and VNet-B to register the Private Endpoint name automatically
- **D.** D. Create a CNAME in a private zone pointing storageacct1.blob.core.windows.net to its private IP

**Correct answer:** A

**Explanation:**

Private Endpoints for Blob use service-specific Private DNS zones (e.g., privatelink.blob.core.windows.net). You place (or let the PE creation place) the A record there (typically storageacct1.privatelink.blob.core.windows.net), and clients resolve the public FQDN via the services CNAME chain to that private name. Linking both VNets to the same Private DNS zone provides private resolution from each network without custom DNS appliances.
Why the others are incorrect:
B. Public zone with private A: Public zones arent for private IP resolution; records would be publicly visible and wont steer to a VNet-only IP.
C. Auto-registration: Private DNS auto-registration is for VM hostnames in selected zones; it doesnt auto-register Private Endpoint names across VNets.
D. CNAME ? IP: A CNAME must map hostname-to-hostname, not hostname-to-IP. Also, you still need the correct service private zone to resolve the chain.

---

### Question 52

Using the charts above (Aggregation = Average, Split by = Instance), you need to interpret what the data is telling you about load distribution across the VMSS instances.
Which statement best interprets the chart?

**Options:**

- **A.** A. Max aggregation shows both instances near 90%
- **B.** B. Metrics cant split by instance; this must be logs
- **C.** C. Average per-instance series reveals a hotspot on vmss-app_0 while vmss-app_1 is lightly loaded ✅
- **D.** D. Percentage CPU requires a guest agent; without it the values are zero

**Correct answer:** C

**Explanation:**

With Aggregation = Average and Split by = Instance, Azure Monitor plots one series per instance, each showing that instances average CPU per time bucket. The data clearly shows load imbalance: vmss-app_0 is consistently hot (~90%), while vmss-app_1 is cool (~25%). The higher Disk Queue Length on vmss-app_0 reinforces that its handling most of the work. This points to uneven traffic (e.g., session pinning, skewed routing, or a stale backend pool).
Why the others are incorrect:
A: You are not using Max across instances; the view is per-instance averages, so both lines would not be ~90%.
B: Azure Metrics support dimension splits (like instance), so this is valid in Metrics.
D: Percentage CPU is a platform metric; it doesnt require a guest agent for basic CPU utilization.

---

### Question 53

In the same investigation, you want a single line that shows the worst-case load across the scale set at each moment (if any instance spikes, the line spikes). You dont want separate per-instance series for this view.
Which chart setting gives you that worst-instance line directly in Metrics?

**Options:**

- **A.** A. Aggregation = Max at the VMSS resource scope (no split) ✅
- **B.** B. Aggregation = Average, Split by Instance
- **C.** C. Query the Activity Log (Administrative) instead of Metrics
- **D.** D. Use a Log Analytics query in a workspace

**Correct answer:** A

**Explanation:**

Setting Aggregation = Max with no split tells Metrics to compute, for each time bucket, the maximum value among all instance series and plot that as one line. This is exactly the any-instance-is-hot view you want for quick severity assessment, alert tuning, and at-a-glance saturation checks.
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
D: A Backup vault is a different vault type (used by modern workloads like operational backup for blobs). VM backup in AZ-104 is with a Recovery Services vault, and automatic cross-region backups is not how VM Backup is configured.

---

### Question 55

You have an Azure subscription.
You have 100 Azure virtual machines.
You need to quickly identify underutilized VMs that can be resized to a cheaper tier.
Which blade should you use?

**Options:**

- **A.** A. Azure Advisor ✅
- **B.** B. Cost analysis
- **C.** C. Metrics
- **D.** D. VM Insights

**Correct answer:** A

**Explanation:**

Azure Advisors Cost recommendations blade analyzes VM utilization (CPU, memory signals, disk/network patterns) across your subscription and flags underutilized instances with specific right-size or shutdown suggestions. Its the fastest way to see which VMs can move to a cheaper size/tier, including the proposed target SKU and estimated savings.
Why the others are incorrect:
B. Cost analysis: Shows spend trends and breakdowns, not utilization-based resize recommendations.
C. Metrics: Raw performance charts per resource; youd have to manually interpret underuse VM-by-VM.
D. VM Insights: Deep perf monitoring/Map, but no cost/right-size advisor list for quick actions.

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

Use Microsoft.Storage/storageAccounts/read to grant read-only access to storage account configuration and metadata without granting any write, delete, or data-plane permissions. This precisely matches view configuration data and adheres to least privilege. In a custom role, put this under Actions, and keep NotActions empty (unless youre subtracting from broader wildcards).
Why the other options are incorrect
A: Microsoft.Storage/storageAccounts/*  Grants all control-plane operations (write/delete). Violates least privilege.
C: /blobServices/containers/blobs/read  Data-plane read of blob content; doesnt provide storage configuration visibility.
D: /listkeys/action  Lets users retrieve account keys (highly privileged). Beyond view config.
E: /blobServices/read  Reads blob service settings only; doesnt cover full storage account configuration (encryption, networking at account scope, etc.).
F: Microsoft.Resources/subscriptions/resourceGroups/read  RG metadata only; doesnt allow reading storage account configuration.

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
 A. 2  ZRS does not keep just two copies. Microsoft states that ZRS replicates data across three availability zones in the primary region, so two is too low.
 C. 6  Six copies aligns with geo-redundant models such as GRS or GZRS, not ZRS. The question specifies ZRS only, which keeps the data within the primary region across three zones.
 D. 9  Azure Storage redundancy options described in Microsofts documentation do not define ZRS as nine copies. ZRS is three copies across three zones, while the geo-redundant options are six-copy designs.

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
D. Premium increases performance (and cost) and doesnt address age-based tiering.

---

### Question 59

Fabrikam assigned Microsoft 365 E3 to a parent group and added department groups as members (nested). Some users never receive licenses. You have to fix this so assignments work automatically and remain low-maintenance.
What should you do?

**Options:**

- **A.** A. Keep nesting groups
- **B.** B. Use a dynamic user group ✅
- **C.** C. Assign licenses per user
- **D.** D. Grant License Administrator

**Correct answer:** B

**Explanation:**

Group-based licensing doesnt evaluate nested group membership. Replace the nested design with a dynamic user group that directly includes the target users via an attribute rule (for example, user.department -in (“Sales“,“Marketing“)). Assign the E3 SKU to that dynamic group so users get licenses automatically and reliably without manual handling.
Why the others are incorrect:
A: Nesting will continue to fail; indirect members wont be licensed.
C: Per-user assignment scales poorly and increases operational toil.
D: Adding a role doesnt change license targeting logic; it only grants admin rights.

---

### Question 60

Contosos cloud team has standardized a tagging policy requiring every resource to include:
Department,
CostCenter, and
Environment.
Theyve applied an Azure Policy at the subscription level to enforce tagging, and assigned the Tag Contributor role to specific resource groups for operational staff.
During a review, Erin, who is a Contributor on RG-Apps, tries to apply a missing CostCenter tag to a virtual machine using the Azure portal. The operation fails with a policy violation message stating the tag is required.
What should Erin do to successfully apply the tag?

**Options:**

- **A.** A. Assign herself the Tag Contributor role
- **B.** B. Modify the Azure Policy to disable enforcement
- **C.** C. Add the required tag key/value that complies with the policy ✅
- **D.** D. Use Azure CLI to bypass the policy enforcement

**Correct answer:** C

**Explanation:**

Azure Policy enforces organizational standards such as required tags. The Contributor role can modify tags as long as the update complies with policy requirements. To resolve the failure, Erin must add the CostCenter tag with an approved value so that the resource meets compliance. Policies cannot be bypassed through CLI or the portal.
Why the others are incorrect:
A: Erin already has sufficient rights as a Contributor; adding Tag Contributor wouldnt override policy restrictions.
B: Only users with Policy Contributor or Owner can modify policies; Erin isnt authorized, and its not recommended.
D: Azure CLI obeys Azure Policytheres no way to bypass enforcement through tools.

---
