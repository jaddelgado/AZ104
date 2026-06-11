# Practice Set 14

Source: [https://skillcertpro.com/az-104-exam-questions/14/](https://skillcertpro.com/az-104-exam-questions/14/)
Total questions: 60

---

### Question 1

During traffic spikes, **image-api** returns 429 (too many requests). CPU is fine per replica, but the app hits its replica cap and can’t fan out. Nights are quiet and should stay cheap, the least amount of effort must be considered.

**Question:** What should you change first?

**Options:**

- **A.** A. Allocate more CPU/memory
- **B.** B. Increase max replicas ✅
- **C.** C. Move to AKS
- **D.** D. Switch to ACI and start/stop manually

**Correct answer:** B

**Explanation:**

The bottleneck is **horizontal scale**, not per-replica size. Raising **max replicas** lets Container Apps add more instances during bursts to absorb 700 RPS, while you can still keep **min replicas = 0** to save money at night. This targets the scaling limit that’s causing 429s without overprovisioning each replica.

**Why the others are incorrect:**

- **A. Allocate more CPU/memory:** Per-replica utilization isn’t the issue; you’re capped at 5 replicas.

- **C. Move to AKS:** Unnecessary complexity; Container Apps already provides autoscale for HTTP.

- **D. Switch to ACI:** ACI lacks native HTTP autoscale; manual start/stop won’t react quickly to bursts.

---

### Question 2

A Read-only lock is applied at RG-Net. Operations against resources in RG-Net should be reviewed for what will still work without removing the lock.
Which action still works?

**Options:**

- **A.** A. Read VM metrics ✅
- **B.** B. Restart a VM
- **C.** C. Update an NSG rule
- **D.** D. Add a tag to a NIC

**Correct answer:** A

**Explanation:**

A Read-only lock permits GET/read operations only. Viewing metrics, properties, and inventory continues to work. Any write (PUT/POST/DELETE) is blockedincluding restart, NSG rule changes, and tag updatesuntil the lock is removed or scope-adjusted.
Why the others are incorrect:
B. Restart a VM: Blocked; restart is a write (control-plane POST).
C. Update an NSG rule: Blocked; NSG rule changes are writes.
D. Add a tag to a NIC: Blocked; tagging is a write to the resource.

---

### Question 3

HR updates the Department attribute for employees. You need a group that auto-updates to include all current employees in Sales (users only, not devices) so you can target policies and apps automatically.
Which membership setting should you use?

**Options:**

- **A.** A. Assigned
- **B.** B. Dynamic device
- **C.** C. Dynamic user ✅
- **D.** D. Mail-enabled security

**Correct answer:** C

**Explanation:**

A Dynamic user group uses a membership rule (for example, user.department -eq “Sales“) to keep membership in sync automatically as user properties change. It targets users only, which is what you need for HR-driven updates.
Why the others are incorrect:
A. Assigned: Manual membership; wont auto-update from HR attributes.
B. Dynamic device: Targets devices, not users; wrong object type.
D. Mail-enabled security: Group type for mail + security, but does not provide dynamic, attribute-based membership.

---

### Question 4

Adventure Works requires the ability to restore VM backups in the paired region if the primary region is unavailable for an extended period. You will select the vault redundancy that enables this disaster-recovery scenario.
Which redundancy should you choose?

**Options:**

- **A.** A. Locally redundant storage
- **B.** B. Zone redundant storage
- **C.** C. Geo redundant storage ✅
- **D.** D. Read-access geo redundant storage

**Correct answer:** C

**Explanation:**

Geo redundant storage asynchronously copies backup data to the paired region, enabling cross-region restore when the primary region is down. In Azure Backup, choosing geo redundant storage in the vault is the prerequisite for enabling cross-region restore for supported workloads.
Why the others are incorrect:
A: Locally redundant storage has no regional replica; you cannot restore in a paired region.
B: Zone redundant storage stays within one region; it wont help if the whole region is unavailable.
D: Read-access geo redundant storage is a storage-account option; for Azure Backup scenarios, geo redundant storage with cross-region restore is the supported path.

---

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
D: Same issueBackup vault is not used for Site Recovery; you need a Recovery Services vault.

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

A test failover creates recovery VMs in an isolated test network so you can validate boot, app dependencies, and automation without affecting production and without DNS cutover. When validation is complete, you clean up the test environment. Its the standard, non-disruptive ASR drill.
Why the others are incorrect:
B: Planned failover shuts down source VMs and performs a coordinated failoverdisruptive; used for real cutovers.
C: Unplanned failover is for outages and can proceed with potential data loss depending on replication state; not a safe drill.
D: Restarting source VMs doesnt validate DR; it leaves recovery orchestration, networking, and runbooks untested.

---

### Question 7

Hierarchy &amp; assignments

Notes: Role evaluations are cumulative; the **most permissive** applicable role at/above the target scope is effective. Built-in roles: **Owner**, **Contributor**, **Reader**, **User Access Administrator**, etc.

You need **Helpdesk** to grant and revoke **Reader** access for users in **RG-App**, but Helpdesk must **not** be able to modify resources in that RG.

Which single role should you assign to **Helpdesk at the RG-App scope**?

**Options:**

- **A.** A. User Access Administrator ✅
- **B.** B. Owner
- **C.** C. Contributor
- **D.** D. Reader

**Correct answer:** A

**Explanation:**

**User Access Administrator** lets a principal **manage role assignments** (grant/revoke access) **without** granting modify/delete permissions on the resources themselves. Assigning it **at RG-App** allows Helpdesk to add/remove **Reader** for others in that RG while keeping their own ability to **change resources near zero**.

**Why the others are incorrect:**

- **B. Owner:** Can **modify resources and assign roles**—excessive for Helpdesk and violates least privilege.

- **C. Contributor:** Can **modify resources**, but **cannot** manage RBAC role assignments—doesn’t meet the requirement.

- **D. Reader:** Can only **view**; cannot grant or revoke access.

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

### Question 9

You have an Azure container registry named contoso2023 as shown below.

You need to enable contoso2023 to use a dedicated data endpoint.

Which **two** settings should you configure for contoso2023?

**Options:**

- **A.** A. Overview
- **B.** B. Properties ✅
- **C.** C. Networking ✅
- **D.** D. Tasks
- **E.** E. Access control (IAM)
- **F.** F. Events

**Correct answer:** B, C

**Explanation:**

A dedicated data endpoint for Azure Container Registry is a **Premium SKU** feature. You turn it on in **Properties**, and then finalize network exposure in **Networking**:

- **Properties**

- Upgrade the registry to **Premium** (if not already).

- Enable the **Dedicated data endpoint** feature so data-plane operations (push/pull, layer transfers) use the dedicated endpoint rather than sharing the control-plane endpoint.

- **Networking**

- Decide how clients reach the data endpoint: keep Public network access, restrict via selected networks, or **disable public access and use Private Link**.

- Create/verify **Private endpoints** and DNS if you’re going private-only, so pulls/pushes resolve to the dedicated data endpoint over private IP.

This two-blade flow (Properties → Networking) is what’s required to both **enable** the capability and **expose/secure** it appropriately.

**Why the other options are incorrect**

- **Overview (A):** Read-only summary; you can’t enable dedicated data endpoints here.

- **Tasks (D):** CI/CD automation (run tasks); unrelated to endpoint enablement.

- **Access control (IAM) (E):** Controls who can manage/use the registry, not which endpoints it serves.

- **Events (F):** Webhooks/eventing; not used to enable the data endpoint.

---

### Question 10

You have a virtual network named VNet1 as shown in the following exhibit.

No devices are connected to VNet1.

You plan to peer VNet1 to another virtual network named VNet2. VNet2 has an address space of 10.2.0.0/16.

You need to create the peering.

What should you do first?

**Options:**

- **A.** A. Add a gateway subnet to VNet1
- **B.** B. Create a subnet on VNet1 and VNet2
- **C.** C. Modify the address space of VNet1 ✅
- **D.** D. Configure a service endpoint on VNet2
- **E.** E. Enable virtual network encryption on both VNets
- **F.** F. Add a DNS server to VNet1

**Correct answer:** C

**Explanation:**

VNet peering requires **non-overlapping IP spaces**. Since VNet2 uses **10.2.0.0/16** and (from the exhibit) VNet1 also uses an overlapping range, the peering cannot be created until you **change VNet1’s address space** to a **non-overlapping** CIDR. After updating the space, you can create the peering normally.

**Why the other options are incorrect**

- A: A **gateway subnet** is for VPN/ER gateways, not required to establish standard VNet peering.

- B: **Subnets** aren’t required to create a peering; the blocker is the **overlap**, not subnet presence.

- D: **Service endpoints** secure access to PaaS services; unrelated to peering prerequisites.

- E: **VNet encryption** is optional and not a prerequisite for peering.

- F: **DNS settings** don’t affect the ability to create peering.

---

### Question 11

For **AppContent** in **East US**, you must withstand a **zone** failure day-to-day and still offer **read access** to data if the **entire region** has an outage.

**Question:** Which redundancy should you choose?

**Options:**

- **A.** A. Locally redundant storage
- **B.** B. Geo-redundant storage
- **C.** C. Zone-redundant storage
- **D.** D. Read-access geo-zone-redundant storage ✅

**Correct answer:** D

**Explanation:**

Read-access geo-zone-redundant storage combines two protections:

- **Zone resilience in the primary region** (data is written across multiple availability zones so a single zone failure doesn’t disrupt operations), and

- **Asynchronous copy to the paired region with read access** (during a primary regional incident, you can **read** from the secondary).

This exactly matches the dual requirement: everyday zone durability **and** the ability to keep serving reads during a regional disruption.

**Why the others are incorrect:**

- **Locally redundant storage:** Keeps three copies **within a single datacenter**; it doesn’t protect against **zone failures** or regional outages and offers no secondary read capability.

- **Geo-redundant storage:** Replicates to a paired region but **does not provide read access** to the secondary; you’d be waiting for a failover event to access data there. It also lacks **zone** durability in the primary.

- **Zone-redundant storage:** Provides excellent **in-region zone** protection but **no cross-region** copy, so there’s no read path if the whole region is unavailable.

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

### Question 13

For **MediaCDN** in **West US 2**, you must tolerate a **regional outage** by copying data to the paired region, but you **do not** need read access to the secondary during the outage. Cost matters.

**Question:** Which redundancy should you choose?

**Options:**

- **A.** A. Locally redundant storage
- **B.** B. Read-access geo-redundant storage
- **C.** C. Geo-redundant storage ✅
- **D.** D. Zone-redundant storage

**Correct answer:** C

**Explanation:**

**Geo-redundant storage** asynchronously replicates your data from the primary region to its **paired region**, providing protection from **regional** incidents. Because you **don’t need read access** to the secondary during an outage, **GRS** fits the requirement at a lower cost than its read-enabled counterpart. Operationally, if Microsoft initiates or you trigger a failover, the secondary becomes primary and data becomes readable there—satisfying the regional DR posture without paying for read access day-to-day.

**Why the others are incorrect:**

- **Locally redundant storage:** All copies live in a **single datacenter**; no protection from **regional** failures.

- **Read-access geo-redundant storage:** Meets (and exceeds) requirements by adding **readable secondary**, but that **unneeded feature costs more**—not cost-optimal here.

- **Zone-redundant storage:** Protects against **zone** failure in one region but **doesn’t** create a cross-region copy, so it fails the regional DR need.

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
A: Locally redundant storage stores copies in one datacenter; it doesnt protect against zone failure.
C: Geo redundant storage replicates to a paired region, which violates the no cross-region requirement.
D: Read-access geo redundant storage also replicates to another region (adds read access there), still breaking residency rules.

---

### Question 17

The **batch-worker** processes queue messages. When spikes hit (&gt;100), backlog grows because it runs as a single replica. You need automatic fan-out when the queue is long and fan-in when it drains.

**Question:** What should you configure?

**Options:**

- **A.** A. Upgrade plan to Premium
- **B.** B. Increase CPU only
- **C.** C. Add a queue-based autoscale rule ✅
- **D.** D. Allocate more memory only

**Correct answer:** C

**Explanation:**

Container Apps supports **event-driven autoscale**. Adding a **queue-depth scale rule** (e.g., Azure Queue/Service Bus) lets replicas **scale out** when messages pile up and **scale to zero** when idle—exactly matching the workload pattern without manual intervention or constant over-allocation.

**Why the others are incorrect:**

- **A. Upgrade plan to Premium:** There’s no “plan” tier here; pricing isn’t the blocker—autoscale is.

- **B/D. Increase CPU/memory:** Bigger single replica won’t keep up with large spikes; you need **more replicas**, not just a bigger one.

---

### Question 18

Spoke1 must reach **on-prem** through **HubVNet’s** VPN gateway. You will use VNet peering (not a new gateway in Spoke1).

What should you configure on the peering?

**Options:**

- **A.** A. Allow forwarded traffic only
- **B.** B. Enable gateway transit on Hub; use remote gateways on Spoke1 ✅
- **C.** C. Add private endpoints in both VNets
- **D.** D. Enable service endpoints to the gateway

**Correct answer:** B

**Explanation:**

To share a **hub VPN gateway** with a **spoke** over peering, set the **Hub→Spoke peering** to **Allow gateway transit** and the **Spoke→Hub peering** to **Use remote gateways**. This lets Spoke1 send traffic to on-prem via Hub’s gateway without deploying its own gateway.

**Why the others are incorrect:**

- **A:** “Allow forwarded traffic” relates to NVAs and user-defined routes; it doesn’t advertise the hub gateway to the spoke.

- **C:** Private Endpoints provide private access to **PaaS** services, not VNet-to-VNet or on-prem routing.

- **D:** Service endpoints are for accessing Azure PaaS from a VNet; they don’t enable gateway sharing over peering.

---

### Question 19

You have an Azure subscription that contains the resources shown in the following table.

You create a public IP address named IP1.

Which **two** resources can you associate to IP1?

**Options:**

- **A.** A. VM1
- **B.** B. LB1 ✅
- **C.** C. NIC1 ✅
- **D.** D. VPN1
- **E.** E. VNet1

**Correct answer:** B, C

**Explanation:**

An Azure **public IP** can be attached to:

- a **Load Balancer** frontend (public LB), and

- a **network interface (NIC)** for a VM (direct public IP on the VM via its NIC).

So **LB1** and **NIC1** are valid association targets for **IP1**.

**Why the other options are incorrect**

- **VM1:** Public IPs attach to the **NIC**, not to the VM object directly.

- **VPN1:** A **Virtual Network Gateway** does use a **Public IP** resource, but it must be specified on the gateway’s **IP configuration at creation** (and must meet SKU/region constraints). You don’t arbitrarily “associate” a general-purpose IP1 post hoc unless it’s chosen as the gateway’s public IP during (or via supported update of) the gateway configuration. In typical exam context, NIC/LB are the straightforward supported associations.

- **VNet1:** Virtual networks themselves cannot have public IPs.

---

### Question 20

Goal: From **AppSubnet**, send **internet** traffic through **NVA1**, keep on-prem routes via the hub gateway.

Constraint: Use **user-defined routes** (RouteTable1) on **AppSubnet**.

You have to force all **internet** traffic from **AppSubnet** through **NVA1** while leaving private/on-prem routes unaffected.

What route should you add to **RouteTable1**?

**Options:**

- **A.** A. 0.0.0.0/0 ? Virtual appliance 10.10.100.4 ✅
- **B.** B. Service endpoints to Internet
- **C.** C. Peering with gateway transit only
- **D.** D. 0.0.0.0/0 ? Internet

**Correct answer:** A

**Explanation:**

A user-defined **default route** to **Virtual appliance (NVA1)** forces all internet-bound traffic from AppSubnet to the firewall first. System/propagated routes for **on-prem prefixes** remain more specific (e.g., /16, /24), so they take precedence and still go via the VPN gateway.

**Why the others are incorrect:**

- **B:** Service endpoints secure access to **Azure PaaS**, not internet egress routing.

- **C:** Gateway transit shares gateway routes, but **doesn’t** force-tunnel internet via an NVA.

- **D:** Next hop **Internet** bypasses the NVA, sending traffic out directly—opposite of the requirement.

---

### Question 21

Goal: From **AppSubnet**, send **internet** traffic through **NVA1**, keep on-prem routes via the hub gateway.

Constraint: Use **user-defined routes** (RouteTable1) on **AppSubnet**.

BGP from the hub is advertising a **default route (0.0.0.0/0)** that is appearing in AppSubnet’s effective routes, bypassing NVA1 during tests. You have to ensure **RouteTable1** on **AppSubnet** ignores propagated gateway routes and keeps using the UDR to NVA1 for internet.

What should you configure on **RouteTable1**?

**Options:**

- **A.** A. Add a more specific /1 route to NVA1
- **B.** B. Add service endpoints to Storage
- **C.** C. Add 0.0.0.0/0 ? Internet
- **D.** D. Disable BGP route propagation ✅

**Correct answer:** D

**Explanation:**

Turning **off route propagation** on **RouteTable1** prevents BGP/gateway-learned routes (including a default route) from being added to the subnet’s effective routes. Your UDR **0.0.0.0/0 → NVA1** then cleanly dictates internet egress through the firewall, while specific on-prem prefixes can be added as needed (or handled on subnets where propagation remains enabled).

**Why the others are incorrect:**

- **A:** Crafting /1 routes is a brittle workaround and can still clash with propagated routes; it’s not the supported fix.

- **B:** Service endpoints don’t affect **routing** to internet/on-prem; they’re for PaaS access control.

- **C:** Forcing next hop **Internet** defeats the requirement to go via the NVA.

---

### Question 22

You have an Azure subscription named Subscription1 that contains the quotas shown in the following table.

You deploy virtual machines to Subscription1 as shown in the following table.

You plan to deploy the virtual machines shown in the following table.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“You can deploy VM4 to West US.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Choice No is correct. In West US, the **Total Regional vCPUs** quota for Subscription1 is 20. Quotas are enforced at two tiers per subscription and region: (1) total regional vCPUs and (2) VM-family vCPUs. Critically, Azure calculates quota usage on **cores in use by both allocated and deallocated VMs**. In your case, VM1 consumes 2 vCPUs (running) and VM2, although Stopped (Deallocated), still consumes 16 vCPUs toward the regional quota, bringing current usage to 18. VM4 needs 4 more vCPUs, which would raise usage to 22—exceeding the 20-vCPU regional limit—so deployment in West US is blocked until you lower usage or increase the quota.

Why Yes is incorrect

Even if per-family quotas were sufficient, the **total regional vCPU** limit is hit first: 18 in use + 4 required = 22 &gt; 20.

---

### Question 23

Traffic from WebVM (10.10.0.4) to AppVM (10.10.1.4) on TCP 443 is failing. The NIC and subnet each have an NSG rule:

What is the effective result for **WebVM → AppVM:443**?

**Options:**

- **A.** A. Allowed (subnet allow wins)
- **B.** B. Allowed (default AllowVNetInBound)
- **C.** C. Denied (NIC deny overrides) ✅
- **D.** D. Denied (final DenyAllInBound)

**Correct answer:** C

**Explanation:**

Azure evaluates **both** the subnet NSG and the NIC NSG; a flow must be **allowed by both** to pass. Although the **subnet** has a higher-priority **Allow 443** (100), the **NIC** has a matching **Deny** (200). On the NIC, that deny is the highest matching rule, so the NIC’s evaluation is **deny**, making the **effective** decision **deny** overall.

**Why the others are incorrect:**

- **A:** A subnet allow doesn’t overrule a NIC deny; both scopes must allow the flow.

- **B:** **AllowVNetInBound** applies only if **no higher-priority** matching rule exists; here, explicit rules match first.

- **D:** The default **DenyAllInBound** isn’t what blocks the flow; a **specific NIC deny** already matched.

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

### Question 25

You need to peer **HubVNet** and **Spoke2**, but peering validation fails. You have to fix this before creating the peering.

What should you do first?

**Options:**

- **A.** A. Create VNet-to-VNet VPN
- **B.** B. Add service endpoints
- **C.** C. Create the peering anyway
- **D.** D. Change Spoke2 address space ✅

**Correct answer:** D

**Explanation:**

VNet peering requires **non-overlapping CIDRs** between the two VNets being peered. Here, **Spoke2 (10.0.1.0/24)** sits **inside** **HubVNet (10.0.0.0/16)**, so peering is blocked. Fix by changing Spoke2 to a non-overlapping range (for example, 10.2.0.0/16 or 10.1.1.0/24), then create the peering.

**Why the others are incorrect:**

- **A:** VNet-to-VNet VPN also requires **non-overlapping** address spaces; it won’t bypass the overlap.

- **B:** Service endpoints affect access to **PaaS** services, not VNet-to-VNet connectivity or overlap.

- **C:** You can’t force peering through validation—Azure blocks overlapping prefixes.

---

### Question 26

Contoso needs an internet-facing VIP for the **API** tier that stays on a static public IP and load-balances traffic on **443** to the FrontEnd VMs. You have to keep the design simple and L4-based.

What should you create?

**Options:**

- **A.** A. Internal load balancer
- **B.** B. Public load balancer ✅
- **C.** C. NAT gateway
- **D.** D. Traffic Manager

**Correct answer:** B

**Explanation:**

A **public load balancer** provides a **public frontend IP** and distributes inbound **TCP/UDP** traffic (L4) across backend VMs. Assign a static public IP, add a health probe (e.g., 443), and a load-balancing rule to the API backend pool. This meets the internet exposure, static IP, and L4 requirements with minimal components.

**Why the others are incorrect:**

- **A:** An **internal** load balancer has a **private** frontend only; it doesn’t publish a public VIP.

- **C:** **NAT gateway** is for **outbound** internet from subnets; it doesn’t provide inbound load balancing.

- **D:** **Traffic Manager** is **DNS-based** global routing across endpoints; it doesn’t terminate or L4-balance a single VM set in one VNet.

---

### Question 27

The **App** tier must stay private and serve a custom **TCP 8080 (non-HTTP)** service to **FrontEnd VMs** and **on-prem** clients over VPN/ExpressRoute. You have to load-balance across the BackEnd VMs **without** any public IP.

What should you create?

**Options:**

- **A.** A. Public load balancer
- **B.** B. Application Gateway
- **C.** C. Internal load balancer ✅
- **D.** D. Private endpoint

**Correct answer:** C

**Explanation:**

An **internal load balancer** exposes a **private frontend IP** inside the VNet and distributes **L4 (TCP/UDP)** to the backend pool. It’s ideal for private tiers and works with on-prem via VPN/ER. Configure a private frontend, health probe on 8080, and a load-balancing rule to the App VMs—no public exposure required.

**Why the others are incorrect:**

- **A:** A **public** load balancer would publish a public IP, violating the **private-only** requirement.

- **B:** **Application Gateway** is **L7 HTTP/S**; it doesn’t L4-balance arbitrary TCP services like a raw 8080 listener unless it’s HTTP/S.

- **D:** **Private endpoint** is for **Azure PaaS** services; it doesn’t front **IaaS VMs** or provide load balancing.

---

### Question 28

You have an Azure subscription named Sub1.

You plan to deploy a multi-tiered application that will contain the tiers shown in the following table.

You need to recommend a networking solution to meet the following requirement:

- **Protect the web servers from SQL injection attacks.**

Which Azure resource should you recommend for the above requirement?

**Options:**

- **A.** A. Application Gateway (Standard)
- **B.** B. Application Gateway (WAF v2) ✅
- **C.** C. Internal Load Balancer (Standard)
- **D.** D. Network Security Group (NSG)
- **E.** E. Public Load Balancer (Standard)
- **F.** F. Azure Firewall Premium

**Correct answer:** B

**Explanation:**

**Application Gateway (WAF v2)** provides a **Web Application Firewall** that inspects **HTTP/S** traffic at **Layer 7** using the **OWASP Core Rule Set** to detect and block common web attacks, including **SQL injection**, **XSS**, command injection, and more. Deployed in front of the web tier, it acts as a reverse proxy/termination point, applies managed rules and custom rules (IP, geo, header, URI, request body), supports end-to-end TLS, and can be run in **Prevention** mode to actively block malicious requests rather than simply log them.

**Why the other options are incorrect**

- **A. Application Gateway (Standard):** No WAF capability; cannot inspect/block SQLi payloads.

- **C. Internal Load Balancer:** L4 distribution only; no HTTP inspection/security.

- **D. NSG:** L3/L4 allow/deny rules; cannot parse HTTP requests or detect SQLi.

- **E. Public Load Balancer:** L4 only; no app-layer protection.

- **F. Azure Firewall Premium:** Adds TLS inspection and IDPS but is not a purpose-built **web** application firewall/reverse proxy. For web-app attacks like SQLi, **WAF** on Application Gateway is the recommended control.

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

Youre reading a Bicep/ARM file another team wrote. It has parameters, variables, and a section that names a resource type like Microsoft.Storage/storageAccounts@2023-01-01. You need to know which part of the file actually creates the storage account in Azure.
What is that part called?

**Options:**

- **A.** A. The resources section ✅
- **B.** B. The outputs section
- **C.** C. The parameters file
- **D.** D. The metadata block

**Correct answer:** A

**Explanation:**

In both ARM JSON and Bicep, the resources section (or a resource declaration in Bicep) is what tells Azure to create/update something  the type, name, API version, and properties. If its not in resources, it doesnt get deployed.
Why the others are incorrect:
B. Outputs just return values after deployment; they dont deploy anything.
C. A parameters file only supplies values to the template; no resource is created there.
D. Metadata is descriptive (info about the template); its not a deployable resource.

---

### Question 32

You have an Azure virtual network named VNet1 that contains the following settings:
IPv4 address space: 172.16.10.0/24
Subnet name: Subnet1
Subnet address range: 172.16.10.0/25
What is the maximum number of virtual machines that can connect to Subnet1?

**Options:**

- **A.** A. 24
- **B.** B. 25
- **C.** C. 62
- **D.** D. 123 ✅
- **E.** E. 126
- **F.** F. 128

**Correct answer:** D

**Explanation:**

A /25 subnet provides 128 total IP addresses (2^(32?25) = 128) spanning 172.16.10.0172.16.10.127. In Azure VNets, five addresses per subnet arent usable by workloads:
.0  network address
.1.3  reserved by Azure for gateway/DHCP/DNS-style functions
.127  broadcast address
Therefore, usable addresses = 128 ? 5 = 123. Those are the IPs available for NICs of VMs and other resources in Subnet1 (assuming one NIC/IP per VM and no overlapping reservations). Subnet size, delegations, or service endpoints do not change the 5-address reservation rule.
Why the other options are incorrect
24 / 25 (A/B): Closer to a /27 calculation; far below the capacity of a /25.
62 (C): Thats /26 math (64 ? 2 or ? 2/?5 confusion), not /25.
126 (E): Ignores Azures five reserved addresses (assumes only 2 reserved).
128 (F): Counts all addresses and ignores any reservation.

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
A. Activity log export: Subscription-level control-plane events only; doesnt collect Storage resource logs/metrics.
B. VM Insights: Targets VMs/VMSS perf and maps; unrelated to Storage1s platform logs.
C. Metrics alerts: Create alerts on metrics but do not collect/route logs to a workspace.

---

### Question 34

An administrator needs to grant a contractor permission to restart virtual machines in one resource group, but the contractor must not be able to assign roles or change access for other users. The team is debating whether assigning the Owner role is acceptable because it includes VM management capabilities.
Statement: Assigning the Owner role is the best choice because it allows the contractor to restart virtual machines in the target resource group.

**Options:**

- **A.** A. True
- **B.** B. False ✅

**Correct answer:** B

**Explanation:**

This is false because Owner grants full access to resources and also allows the user to delegate access to others, which exceeds the scenario requirement. In AZ-104, a key exam skill is matching the RBAC role to the minimum required permission, so a narrower role such as Virtual Machine Contributor is the better fit for restarting and managing VMs without granting access-management rights.
The exam trap is that Owner can technically perform the task, but it violates least privilege. AZ-104 often tests whether you can distinguish works from is the correct administrative choice.
Why A is wrong:
True is wrong because it focuses only on whether the task is possible, not whether the role assignment is appropriate. Owner includes permissions beyond VM operations, especially the ability to manage role assignments, so it is too broad for this requirement.

---

### Question 35

You cant reach DBVM from WebVM. Both the subnet and the NIC have NSGs applied. You need to see the merged inbound/outbound rules that actually apply to DBVM so you can spot which rule is blocking the flow.
What should you open?

**Options:**

- **A.** A. Subnet NSG rules
- **B.** B. Effective security rules ✅
- **C.** C. IP flow verify
- **D.** D. Activity log

**Correct answer:** B

**Explanation:**

Effective security rules (at the NIC) show the combined result of defaults plus subnet NSG and NIC NSG rules after priorities are resolved. This view reflects what the platform enforces on that NIC, so you can quickly identify the winner rule (allow/deny) and its source (subnet vs NIC) without cross-comparing two NSGs manually.
Why the others are incorrect:
A: Shows only the subnet NSG; it doesnt include the NIC NSG or the final merged outcome.
C: IP flow verify tests a single 5-tuple (source/dest/port/proto) and returns allow/deny, but it doesnt list the full effective rule set you need to review.
D: Activity log records control-plane events (create/update); it doesnt show data-plane NSG evaluation.

---

### Question 36

You have an Azure subscription that includes the following App Services web apps:
WebApp1, which runs code in a Windows operating system.
WebApp2, which runs code in a Linux operating system.
WebApp3, which runs in a Docker container on Windows.
WebApp4, which runs in a Docker container on Linux.
From which web apps can you use WebJobs?

**Options:**

- **A.** A. WebApp1 and WebApp2 only
- **B.** B. WebApp1 and Web3 only
- **C.** C. WebApp1 only
- **D.** D. WebApp1, WebApp2, WebApp3 and WebApp4 ✅

**Correct answer:** D

**Explanation:**

According to the current Microsoft Learn documentation, WebJobs are supported on all four App Service hosting options: Windows code, Windows containers, Linux code, and Linux containers. That maps directly to WebApp1, WebApp2, WebApp3, and WebApp4.
There is one important nuance in the current documentation: WebJobs are not supported in certain custom Linux containers based on Alpine Linux. But the question simply says WebApp4 runs in a Docker container on Linux, and the current support matrix still lists Linux containers as supported.
Why the other options are incorrect:
 A. WebApp1 and WebApp2 only  This excludes Windows containers and Linux containers, but Microsoft now lists both as supported WebJobs platforms.
 B. WebApp1 and Web3 only  This excludes Linux code and Linux containers, both of which are included in the current supported platforms list.
 C. WebApp1 only  This reflects older assumptions some people still remember, but it does not match the current Microsoft Learn documentation. WebJobs are no longer limited to Windows code apps.

---

### Question 37

Fabrikam wants the subscription Activity log archived to a Log Analytics workspace so admins can query who changed what and when across services. You have to configure this at the subscription level, not per-resource.
What should you configure?

**Options:**

- **A.** A. Activity log to workspace ✅
- **B.** B. Resource diagnostic settings
- **C.** C. NSG flow logs
- **D.** D. Boot diagnostics

**Correct answer:** A

**Explanation:**

Configure a diagnostic setting on the Activity log (subscription scope) to send control-plane events (creates, updates, deletes, policy evaluations) to a Log Analytics workspace. This preserves governance history, enables KQL queries and alerts, and centralizes auditing without touching individual resources.
Why the others are incorrect:
B. Resource diagnostic settings: These are per-resource and wont capture subscription-level Activity log events.
C. NSG flow logs: Network flow telemetry via Network Watcher; not subscription audit events.
D. Boot diagnostics: VM console/screenshots; unrelated to Activity log export.

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

A user delegation SAS is signed with a user delegation key obtained via Microsoft Entra ID, so no account key is exposed. You can scope it to the target container, limit permissions (e.g., c,w), and set a 1-hour expiryperfect for least-privilege, time-bound uploads from an identity-enabled workload using Blob REST.
Why the others are incorrect:
B. Account key: Violates no account keys; broad, long-lived credential.
C. Account SAS: Still requires the account key to sign; fails the security requirement.
D. Firewall exception: Controls network path, not authorization; doesnt grant scoped, time-bound upload rights.

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

Create a stored access policy on the container, then issue Service SAS tokens that reference that policy. If theres a leak, delete or update the policy to immediately invalidate all SAS linked to itno account-key rotation, minimal blast radius, and you keep issuing fresh, time-scoped SAS daily.
Why the others are incorrect:
B. User delegation SAS: Good for keyless issuance, but theres no single handle to revoke a batch of ad-hoc SAS already minted.
C. Regenerate account keys: Revokes everything signed with that key and disrupts other services; heavy-handed.
D. Remove RBAC Reader: SAS is pre-signed; RBAC changes dont invalidate tokens already issued.

---

### Question 40

You have an Azure subscription that contains three virtual machines named VM1, VM2, and VM3. All the virtual machines are in an availability set named AVSet1.
You need to scale up VM1 to a new virtual machine size, but the intended size is unavailable.
What should you do first?

**Options:**

- **A.** A. Create a proximity placement group
- **B.** B. Deallocate VM1 ✅
- **C.** C. Convert AVSet1 to a managed availability set
- **D.** D. Stop (power off) VM1 from inside the OS
- **E.** E. Resize VM1 while its running
- **F.** F. Redeploy VM1

**Correct answer:** B

**Explanation:**

When a target size isnt available on the current hardware cluster, the correct sequence is to deallocate the VM and then attempt the resize. Deallocation releases the compute placement so Azure can re-place the VM onto a cluster that does have capacity for the requested size. If you only stop the guest OS (power off), the VM remains allocated on the same host and the resize will still fail due to local capacity. After a successful resize, start the VM again.
Why the other options are incorrect
A. Proximity placement group: PPGs optimize latency/co-location; they dont fix size-capacity availability for a specific host/cluster.
C. Convert AVSet1 to managed availability set: AVSets with managed disks are already managed; conversion doesnt affect size availability.
D. Stop (power off) from OS: Guest shutdown keeps the VM allocated; it wont free placement to find capacity.
E. Resize while running: Live resize only succeeds if the size is available on the current clusterwhich the scenario says it isnt.
F. Redeploy VM1: Redeploy re-provisions the VM on new hardware but doesnt change the VM size; its not the required first step to obtain a different size.

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
This is a classic AZ-104 distinction: both lock types protect resources, but they do so at different levels. The right answer depends on understanding the operational requirement, not just knowing that locks protect resources.
Why B is wrong:
False is wrong because it confuses the behavior of Delete locks with Read-only locks. Delete locks are specifically intended to stop removal while permitting other management operations, which is exactly what the scenario describes.

---

### Question 42

You plan to deploy the following Azure web apps:
WebApp1, that uses the .NET 9 runtime stack
WebApp2, that uses the ASP.NET V4.8 runtime stack
WebApp3, that uses the Java 21 runtime stack
WebApp4, that uses the PHP 8.4 runtime stack
You need to create the app service plans for the web apps.
What is the minimum number of app service plans that should be created?

**Options:**

- **A.** A. 1
- **B.** B. 2 ✅
- **C.** C. 3
- **D.** D. 4

**Correct answer:** B

**Explanation:**

An App Service plan is created for a specific operating system, and apps can share a plan only when they are on the same OS type. Microsoft says you choose the operating system when creating the plan, and moving apps between plans is supported only when the source and target plans are the same OS type. Microsoft also notes that multiple apps can be placed in one App Service plan and share its compute resources.
That means the key is to separate the apps by OS requirement, not by language alone. ASP.NET V4.8 requires App Service on Windows, while PHP is supported only on App Service on Linux. By contrast, Java 21 is supported on both Windows and Linux, and App Services ASP.NET/.NET web apps are cross-platform and can be hosted on Linux or Windows. So you need one Windows plan for WebApp2 and one Linux plan for WebApp4; WebApp1 and WebApp3 can be placed on whichever of those two plans matches your design choice.
Why the other options are incorrect:
 A. 1  One plan is not enough because you cannot satisfy both the Windows requirement for ASP.NET V4.8 and the Linux requirement for PHP in a single App Service plan. The OS is a plan-level choice, not an app-by-app choice within one plan.
 C. 3  Three plans are unnecessary because Java 21 does not force a separate plan; Microsoft lists Java 21 support on both Linux and Windows. Also, .NET web apps can run on either Windows or Linux, so they do not inherently require their own separate plan here.
 D. 4  Four plans would mean one plan per app, but App Service plans can host multiple apps as long as the apps are compatible with the plans OS and the plan has enough capacity. This question asks for the minimum number, and two plans satisfy the OS constraints.

---

### Question 43

Youre creating a new archive container for compliance. Requirements:
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

A container immutability policy with time-based retention (7 years) enforces WORM (no updates/deletes). Enabling Allow protected append blobs permits append-only writes to append blobs during the retention windowideal for ongoing log ingestion while preserving immutability guarantees.
Why the others are incorrect:
A. Public access: Blob  Controls anonymous read; doesnt enforce WORM or retention.
B. Soft delete (blobs)  Helps recover deletions, but content can still be overwritten and soft delete can be bypassed by retention limits; its not regulatory WORM.
C. Immutability (time-based) without append  Enforces WORM but blocks further appends; requirement demands append-only logging during retention.

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

To permit any anonymous read, the account-level setting must allow public access. Then, set the container to Public access: Blob, which allows anonymous download of blob objects without exposing container listingexactly what a public website needs.
Why the others are incorrect:
B. Container  Allows anonymous blob reads and container listing; requirement says no listing.
C. Private + SAS  Works, but it requires signed URLs and token management; the requirement explicitly asks for anonymous access.
D. $web  Static website hosting feature; not required here and still relies on the accounts public access posture.

---

### Question 45

You have an ARM/Bicep deployment for a web app. You must use the same template to deploy to Dev, Test, and Prod but change values like location, SKU, and appName at deployment time. You dont want to edit the template file every time.
Which feature should you use?

**Options:**

- **A.** A. Parameters ✅
- **B.** B. Outputs
- **C.** C. Variables
- **D.** D. Tags

**Correct answer:** A

**Explanation:**

Parameters are specifically for supplying values at deployment time without changing the template/Bicep file. You define param location string = ‘eastus‘ (or no default) and then pass a different value when running az deployment  or in the portal. Thats how you reuse one template across multiple environments.
Why the others are incorrect:
B. Outputs report values after deployment (e.g. resourceId, hostname); they dont drive the deployment.
C. Variables are computed inside the template and arent meant to be supplied from outside.
D. Tags label resources; they dont let you change SKU/location at deploy time.

---

### Question 46

You have Azure App Service web app named WebApp1.
You need to integrate GitHub as a source code repository for WebApp1.
What should you use?

**Options:**

- **A.** A. Deployment Center ✅
- **B.** B. Deployment slots
- **C.** C. Extensions
- **D.** D. Service Connector

**Correct answer:** A

**Explanation:**

Deployment Center is the App Service feature used to connect a web app to a source control provider such as GitHub and configure continuous deployment. Microsofts App Service documentation explicitly says continuous deployment for App Service can pull updates from GitHub, and the GitHub Actions deployment guidance says you can set this up from Deployment Center for an existing app.
That makes Deployment Center the direct match for the requirement in the question. The question is asking about integrating GitHub as the source code repository for WebApp1, not about staging releases, adding runtime components, or connecting the app to another Azure service.
Why the other options are incorrect:
 B. Deployment slots  Deployment slots are used to create staging environments and support swap-based release workflows. They help you test and promote deployments, but they are not the feature used to connect App Service to GitHub as the source repository.
 C. Extensions  In App Service, extensions are for installing added functionality or site extensions on the web app or a deployment slot. That is different from configuring source control integration, so Extensions does not satisfy the requirement to use GitHub as the repository source.
 D. Service Connector  Service Connector is used to connect a compute service such as App Service to backing services like databases, storage, and similar Azure services. It is for service-to-service connectivity and authentication setup, not for integrating a GitHub repository for code deployment.

---

### Question 47

Contoso must temporarily upscale a VM from D2s_v3 to D8s_v5 for weekend processing, then downsize on Monday. OS/data are on managed disks. You must perform a reliable resize even if the current host cluster doesnt support the target size.
What action is required to perform this resize?

**Options:**

- **A.** A. Resize while the VM is running
- **B.** B. Stop (deallocate) then resize ✅
- **C.** C. Redeploy VM to a new host
- **D.** D. Create a new VM and attach the OS disk

**Correct answer:** B

**Explanation:**

Resizing across families/hosts (e.g., v3 ? v5) may require moving the VM to a cluster that has the target size. Deallocating guarantees Azure can place the VM on a capable host for the new size, then you apply the size change and start it. Managed disks persist; only brief downtime occurs.
Why the others are incorrect:
A. Running resize: Works only when the target size is available on the same host cluster; cross-family moves commonly fail online.
C. Redeploy: Redeploy fixes host issues but doesnt change size; you still need a resize operation (and deallocation if host lacks capacity).
D. New VM + attach OS: Unnecessary overhead; resizing the existing VM is the supported, simpler path.

---

### Question 48

Fabrikam runs a steady 80100% CPU web API on B2s (burstable). After a few hours, performance drops despite unchanged load. You must pick a VM size type that sustains high CPU all day without credit throttling.
Which size family should you use?

**Options:**

- **A.** A. Keep B-series
- **B.** B. Spot B-series
- **C.** C. Standard D-series (non-burstable) ✅
- **D.** D. Ultra Disk on B-series

**Correct answer:** C

**Explanation:**

B-series rely on CPU credits; at sustained high usage, credits deplete and the VM throttles to its baseline. A non-burstable family (e.g., D-series) provides consistent CPU entitlement for continuous workloads, eliminating credit throttling and stabilizing throughput.
Why the others are incorrect:
A. Keep B-series: Still credit-based; throttling persists under sustained load.
B. Spot B-series: Changes pricing/eviction risk, not the credit behavior; throttling remains.
D. Ultra Disk on B-series: Storage performance doesnt fix CPU throttling; issue is compute, not disk.

---

### Question 49

Contoso needs to host an existing .NET Framework 4.8 web app with a custom domain and TLS. Traffic is low and a single instance is fine; costs should be minimal.
What should you create?

**Options:**

- **A.** A. Windows Web App (Basic plan) ✅
- **B.** B. Linux Web App (Basic plan)
- **C.** C. Windows Web App (Free plan)
- **D.** D. Linux Web App for Containers

**Correct answer:** A

**Explanation:**

.NET Framework requires Windows App Service. The Basic tier is the lowest tier that supports custom domains and SNI SSL, meeting the TLS requirement at minimum cost for a single instance.
Why the others are incorrect:
B. Linux (Basic): Linux App Service doesnt run full .NET Framework apps (its for .NET/Node/Python, etc.).
C. Free: Free tier doesnt support custom domains/SSL, so it fails the requirement.
D. Web App for Containers: Not needed for a non-containerized .NET Framework app and adds unnecessary complexity.

---

### Question 50

Fabrikam will deploy a containerized web API stored in Azure Container Registry (ACR). It needs a public HTTP endpoint now and the option to scale later. No Kubernetes is required.
Which publish/OS option should you select when creating the app?

**Options:**

- **A.** A. Docker Container (Linux) ✅
- **B.** B. Code (Windows)
- **C.** C. Static Web App
- **D.** D. Function App

**Correct answer:** A

**Explanation:**

Selecting Docker Container (Linux) in App Service lets you run a container image directly and link ACR during creation. You get an HTTPS endpoint immediately and can scale the App Service plan later without managing Kubernetes.
Why the others are incorrect:
B. Code (Windows): Intended for deploying code to a Windows runtime, not a container image.
C. Static Web App: For static front ends (no containerized API runtime).
D. Function App: Serverless functions, not an App Service web app hosting a container.

---

### Question 51

You have an Azure App Service web app named Contoso2025 that runs in the Standard App Service plan. Contoso2025 has five deployment slots in use.
A user named User1 has the Contributor role for Contoso2025.
You need to ensure that User1 can create additional deployment slots to Contoso2025.
What should you do?

**Options:**

- **A.** A. Assign User1 the Owner role for Contoso2025.
- **B.** B. Assign User1 the Website Contributor role for Contoso2025.
- **C.** C. Scale out the Contoso2025 App Service plan.
- **D.** D. Scale up the Contoso2025 App Service plan. ✅

**Correct answer:** D

**Explanation:**

The limiting factor here is the App Service plan tier, not User1s RBAC role. Microsofts App Service deployment slots guidance states that the Standard tier supports only five deployment slots, and the service limits documentation notes that deployment-slot capacity depends on tier. Since Contoso2025 already has five slots in use, the app has reached the Standard-tier slot limit. To add more slots, the app must be moved to a higher tier that supports more slots, which means scaling up the App Service plan.
User1 already has the Contributor role, which is sufficient for normal write operations on the app. The issue is not missing permissions; it is that the current pricing tier has no remaining slot capacity. Scaling out would add more instances for performance and capacity, but it would not change the slot quota for the app.
Why the other options are incorrect:
 A. Assign User1 the Owner role for Contoso2025. Owner is unnecessary here because the problem is not an authorization gap. User1 already has Contributor permissions, and the blocker is the Standard-tier deployment slot limit. Giving Owner would add broader access, but it would still not let the app exceed the slot capacity of its current tier.
 B. Assign User1 the Website Contributor role for Contoso2025. This also does not solve the problem. Even if Website Contributor is sufficient for many App Service write operations, role changes do not increase the number of deployment slots available to an app. The app is already at the Standard-tier maximum, so the plan tier must change.
 C. Scale out the Contoso2025 App Service plan. Scale out changes the number of instances running the plan. Deployment slot limits are tied to the pricing tier, not to instance count, so adding instances does not create additional slot capacity.

---

### Question 52

Contoso runs a production web app (AppService1) with a staging slot for blue-green releases. You have to deploy to staging, test, then swap to production without overwriting production-only secrets (ProdDb, API keys) or telemetry keys. Those values must stay with their slot in every swap.
What should you configure on those settings?

**Options:**

- **A.** A. Auto swap
- **B.** B. Scale out
- **C.** C. Slot setting ✅
- **D.** D. Reboot app

**Correct answer:** C

**Explanation:**

Mark the relevant app settings and connection strings as slot settings so they become sticky to the slot. During a swap, non-sticky settings travel with the content, while sticky settings remain with the original slot, preserving production secrets in the production slot and staging values in staging. This is the standard way to protect per-slot secrets and telemetry.
Why the others are incorrect:
A: Auto swap only automates the timing of a swap; it doesnt prevent secrets from crossing slots if they arent marked sticky.
B: Scaling changes instance count/capacity; it has no effect on which settings move during a swap.
D: Restarting the app doesnt alter swap behavior or protect configuration; non-sticky values would still be swapped.

---

### Question 53

Fabrikam deploys to the staging slot first and wants a safe release: fully warm the app in the production environment, validate health checks, then complete the switch with no downtime. If validation fails, they should cancel without impacting users.
Which release action should you use?

**Options:**

- **A.** A. Swap with preview ✅
- **B.** B. Scale up plan
- **C.** C. Auto swap
- **D.** D. Redeploy to production

**Correct answer:** A

**Explanation:**

Swap with preview maps the staging slot into the production hosting environment for warm-up, allowing validation (health probes, smoke tests) before the final swap. If checks pass, you commit the swap; if they fail, you cancel with no user impact. This provides a controlled, zero-downtime release.
Why the others are incorrect:
B: Scaling up adds compute but doesnt provide a validation step or environment warm-up for a safe swap.
C: Auto swap performs an immediate swap after deploymenttheres no hold for pre-validation, increasing risk.
D: Redeploying directly to production skips the staging safety net, offers no pre-swap validation, and risks cold starts or downtime.

---

### Question 54

Contosos web app in East US drops user connections to an external payments API a few times per day. You have to continuously test end-to-end connectivity from WebVM to the providers FQDN on TCP 443, track latency/packet loss, and trigger alerts if thresholds are exceededwithout installing a full NPM agent or building your own scripts.
What should you use?

**Options:**

- **A.** A. Connection troubleshoot
- **B.** B. Connection Monitor ✅
- **C.** C. NSG flow logs
- **D.** D. Packet capture

**Correct answer:** B

**Explanation:**

Connection Monitor runs continuous, scheduled tests from Azure sources (VMs, endpoints) to destinations (FQDN/IP/URL/port). It records reachability, RTT, and packet loss, and can export to Logs for alerting and dashboardsideal for catching intermittent failures on 443. You get end-to-end insight (including where failures occur) without managing a custom probe framework.
Why the others are incorrect:
A: Connection troubleshoot is a one-off diagnostic, not continuous monitoring with trends/alerts.
C: NSG flow logs capture flow records to storage/Traffic Analytics; they dont run active tests or track latency.
D: Packet capture collects packets on a NIC and is heavyweight for continuous health checks.

---

### Question 55

You have an Azure subscription containing 100 virtual machines. You want to identify underutilized VMs so you can resize them to a less expensive SKU.
Which blade should you use?

**Options:**

- **A.** A. Azure Monitor
- **B.** B. Azure Advisor ✅
- **C.** C. Azure Metrics
- **D.** D. Azure Cost Analysis
- **E.** E. Azure Customer Insights
- **F.** F. Azure Resource Health

**Correct answer:** B

**Explanation:**

Choice B is correct. Azure Advisor provides personalized recommendations for cost, performance, security, and reliability. Under the Cost category, it identifies underutilized virtual machines that can be resized to smaller, less expensive SKUs. This helps optimize spending without affecting workload requirements.
Why the others are incorrect
A. Azure Monitor collects and visualizes metrics and logs but doesnt offer cost optimization recommendations.
C. Azure Metrics displays raw performance counters but doesnt interpret them into actionable insights.
D. Azure Cost Analysis helps visualize and track spending trends but doesnt analyze VM utilization efficiency.
E. Azure Customer Insights is a Dynamics 365 customer data analytics tool, not related to Azure resource management.
F. Azure Resource Health reports the current health of your resources but doesnt provide cost optimization advice.

---

### Question 56

A security review says only tightly controlled groups may hold directory roles. You must grant User Administrator to a group, but membership must be static (no dynamic rules) and the group must be explicitly marked to receive directory roles.
Which group configuration should you use?

**Options:**

- **A.** A. Microsoft 365 group
- **B.** B. Distribution list
- **C.** C. Security (Dynamic)
- **D.** D. Security (Assigned), role-assignable ✅

**Correct answer:** D

**Explanation:**

Directory roles in Microsoft Entra can be assigned only to role-assignable security groups. That requires a Security group with Assigned membership (static) and the flag Microsoft Entra roles can be assigned to the group: Yes. This makes the group eligible for role assignment and keeps membership tightly controlled and auditable.
Why the others are incorrect:
A. Microsoft 365 group: Not supported for directory role assignment in this context.
B. Distribution list: Mail object; cant hold directory roles.
C. Security (Dynamic): Dynamic groups cannot be marked role-assignable; the property isnt allowed on dynamic membership.

---

### Question 57

Fabrikam cant RDP to MgmtVM on TCP 3389 from a known public IP. You have to quickly check if the exact 5-tuple is allowed or denied on the VMs NIC and identify the rule thats winningno continuous monitoring needed.
What should you use?

**Options:**

- **A.** A. Connection Monitor
- **B.** B. Next hop
- **C.** C. IP flow verify ✅
- **D.** D. NSG flow logs

**Correct answer:** C

**Explanation:**

IP flow verify evaluates a single source/destination/port/protocol against the VMs effective NSG rules on the NIC and immediately returns Allow or Deny plus the matching rule name/priority. Its the fastest way to confirm whether NSG policy is blocking RDP without building a test path or running captures.
Why the others are incorrect:
A: Connection Monitor is for continuous probes and trends; overkill for a one-time allow/deny check.
B: Next hop validates routing (e.g., Internet, NVA, gateway), not NSG allow/deny decisions.
D: NSG flow logs emit aggregated flow telemetry; they dont give an instant policy verdict or the exact blocking rule.

---

### Question 58

Contoso must protect 100 Azure virtual machines in East US using Azure Backup. You have to use the standard VM backup experience and keep management simple. The vault must be co-located with the protected resources.
What should you create?

**Options:**

- **A.** A. Recovery Services vault (East US) ✅
- **B.** B. Backup vault (any region)
- **C.** C. Backup vault (East US)
- **D.** D. Recovery Services vault (West US)

**Correct answer:** A

**Explanation:**

Azure VM backup uses a Recovery Services vault, and the vault must be in the same region as the VMs. Creating the vault in East US lets you enable backup policies and restores for those VMs without cross-region complications. Recovery Services vaults handle snapshots, retention, and restore workflows for IaaS VMs.
Why the others are incorrect:
B: Backup vault is a different vault type (used for newer workloads like Azure Disks/Blobs). Any region also violates the co-location rule.
C: Even in East US, a Backup vault isnt the standard choice for VM backup in AZ-104 scenarios; use a Recovery Services vault.
D: A vault in West US cannot protect East US VMs; vaults are region-scoped.

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

Azure Container Registry stores container images, and Microsofts Azure Container Registry quickstart shows that you pull and run images from a registry by using Docker commands such as docker run. That means the VM needs a container runtime capable of pulling and running the image, which makes Docker the correct choice here.
Microsofts Windows containers guidance also describes preparing Windows Server for containers by installing a container runtime, and the training module for running containers on Windows Server explicitly calls out learning Docker and preparing Windows Server to run container workloads. Hyper-V can be involved for certain isolation scenarios, but it is not the core requirement to run a container image from a registry on a Windows Server VM.
Why the other options are incorrect:
 A. Azure Storage Explorer  Azure Storage Explorer is for working with Azure Storage resources such as blobs, files, queues, and tables. It does not provide container image pull or container runtime capability, so it cannot run Image1 on VM1.
 C. Hyper-V role  Hyper-V can be relevant for Hyper-V isolation or nested virtualization scenarios, but Microsofts container requirements say that requirement applies when hosting Hyper-V-isolated containers in a Hyper-V VM. The question asks what you should install to run the image, and the required runtime is Docker, not Hyper-V by itself.
 D. .NET Framework 4.8  .NET Framework is an application framework, not a container runtime. Whether a containerized app uses .NET is separate from what the host VM needs in order to pull and run a container image from Azure Container Registry.

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

Operational backup for blobs is managed through an Azure Backup vault with policiesno custom scripts or account keys. The Backup vault integrates with the storage account to protect blob data at scale and provides centralized monitoring through Backup Center.
Why the others are incorrect:
A: Recovery Services vault is used for workloads like Azure VMs and Azure Files; its not the modern pattern for blob protection.
B: Soft delete helps recovery from deletion but isnt full backup with centralized policies/monitoring.
C: Azure Site Recovery is for disaster recovery (replication/failover), not blob backup.

---
