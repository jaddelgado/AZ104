# Practice Set 17

Source: [https://skillcertpro.com/az-104-exam-questions/17/](https://skillcertpro.com/az-104-exam-questions/17/)
Total questions: 60

---

### Question 1

You have an Azure subscription that contains the resources shown in the following table.

You need to create a network interface named NIC1 without creating additional resources.

In which region can you create NIC1?

**Options:**

- **A.** A. East US only ✅
- **B.** B. East US and West Europe only
- **C.** C. East US and North Europe only
- **D.** D. East US, West Europe, and North Europe
- **E.** E. West Europe only
- **F.** F. North Europe only

**Correct answer:** A

**Explanation:**

Choice A is correct. **Network interfaces (NICs) are scoped to a region and must be created in the same region as the virtual network/subnet they will attach to.** Because NIC1 must attach to a subnet in **VNET1**, and VNET1 exists in **East US**, NIC1 must also be created in **East US**. Creating NIC1 in any other region would require additional resources (for example, another VNet/subnet in that region or a move of dependencies), which the question forbids.

A NIC has three critical scoping constraints—**subscription, region, and VNet**. Azure enforces co-location: NIC ↔ VNet/subnet ↔ VM must all live in the **same subscription and region**. This guarantees layer-2 adjacency and simplifies IP management. After creation, you **cannot change the VNet** a NIC is bound to; you’d have to create a new NIC in the target VNet/region and rewire the VM.

Why the others are incorrect

B: West Europe is a different region. You’d need a West Europe VNet/subnet (an “additional resource”), violating the constraint.

C: Same issue—North Europe isn’t the VNet’s region; you’d need to create networking there.

D: Adds regions that do not host VNET1; still requires extra resources.

E: West Europe only is impossible without a West Europe VNet/subnet for NIC1 to join.

F: North Europe only is impossible for the same reason.

---

### Question 2

Priya must work on **vm1** in **RG-App**. What can Priya do on **vm1** given the assignments above?

**Options:**

- **A.** A. Start vm1
- **B.** B. Assign Owner
- **C.** C. View properties/metrics ✅
- **D.** D. Delete vm1

**Correct answer:** C

**Explanation:**

Priya has **Reader** at RG-App, which allows **read-only** actions: view properties, metrics, logs, and inventory. Reader **does not** permit starting, stopping, modifying, or deleting resources, and it **does not** allow granting access—those require roles like **Contributor** (for writes) or **User Access Administrator/Owner** (for RBAC changes). No other higher-scope roles apply to Priya in this scenario.

**Why the others are incorrect:**

- **A:** **Start** is a write/control operation; Reader can’t perform it.

- **B:** Assigning roles requires **User Access Administrator** or **Owner** at the scope; Reader can’t grant access.

- **D:** **Delete** is a write operation; Reader cannot delete resources.

---

### Question 3

You have a Microsoft Entra tenant that contains the users shown in the following table.

The tenant contains the groups shown in the following table.

Self-service password reset (SSPR) needs to be configured for the tenant.

For which group can SSPR be enabled?

**Options:**

- **A.** A. Group1 only
- **B.** B. Group2 only
- **C.** C. Group3 only
- **D.** D. Group1 or Group2 only ✅
- **E.** E. Group1 or Group3 only
- **F.** F. Group1, Group2, or Group3

**Correct answer:** D

**Explanation:**

Choice D is correct. **Self-Service Password Reset (SSPR)** in Microsoft Entra ID can be scoped to **selected groups** or **all users**. When configuring SSPR for selected users, the feature supports **security groups** and **Microsoft 365 groups**, because these group types are recognized as valid dynamic or static membership containers in Entra ID.

- **Group1**, being a **security group**, is supported because it represents a set of user objects that can be managed collectively for access and policy assignments, including SSPR eligibility.

- **Group2**, a **Microsoft 365 group**, is also supported, as it is backed by Azure AD and behaves like a security-enabled group in most Entra administrative functions.

However, **Group3**, a **mail-enabled security group**, is not valid for SSPR scoping. These groups are hybrid (Exchange-based) objects primarily used for mail routing and distribution, not for Azure AD access or policy scoping. Microsoft Entra does not allow them to be targeted for password reset policy configuration.

Why the others are incorrect

A: Incomplete—Microsoft 365 groups are also supported.

B: Incomplete—Security groups are supported too.

C: Incorrect—Mail-enabled security groups are not valid for SSPR targeting.

E: Incorrect—Mail-enabled security groups are not supported for SSPR.

F: Incorrect—Group3 cannot be used for SSPR scope.

---

### Question 4

You have an Azure subscription that contains the storage accounts shown in the following table.

You deploy a web app named App1 to the West US Azure region.

You need to back up App1. The solution must minimize costs.

Which storage account should you use as the target for the backup?

**Options:**

- **A.** Storage1
- **B.** Storage2 ✅
- **C.** Storage3
- **D.** Storage4

**Correct answer:** B

**Explanation:**

**Storage2** is the lowest-cost, region-aligned choice for App Service backups.

**Why Storage2 fits**

- App Service **custom backups write to a blob container** in an Azure Storage account; a standard, non-premium account is appropriate.

- Storage2 is **in West US**, the **same region** as App1, which avoids **inter-region data-transfer charges** and unnecessary latency.

- Its **BlobStorage (standard)** account type supports **block blobs**—what App Service backups produce—without the premium pricing of SSD-backed tiers.

**Why the others fall short**

- **Storage1 (StorageV2, Central US):** Different region → **inter-region egress** adds cost; no benefit for this scenario.

- **Storage3 (BlockBlobStorage, West US):** Same region, but **premium SSD-backed** block blob storage is **more expensive** than standard tiers—overkill for backups.

- **Storage4 (FileStorage, East US):** Premium **Azure Files** account type in a different region; App Service backups target **blob containers**, not file shares, and would still incur inter-region transfer.

---

### Question 5

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

**No is correct.** A **Standard SKU load balancer** has stricter networking requirements than a Basic SKU load balancer. All virtual machines in its **backend pool** must:

- Reside in the **same virtual network (VNet)** as the load balancer.

- Be in the **same region**.

- Have **either no public IP address** or a **Standard SKU public IP address** attached.

In this scenario, assigning a **Basic SKU public IP** to VM1 violates the compatibility rule. Standard load balancers cannot associate backend pool members that use Basic IP configurations, because the two SKUs use different underlying control planes and security models. As a result, **VM1 and VM2 cannot both be added** to the backend pool of **LB1** when VM1 has a Basic IP.

To meet the goal, you would either remove the Basic IP from VM1 or replace it with a **Standard SKU public IP address** before joining it to the backend pool.

---

### Question 6

Contoso must move a production VM to a different **subscription** under the same Azure AD tenant to align with new billing. The VM will remain in the **same region** and attached to the same VNet. A short maintenance window is acceptable. You want to use a **native, supported move** that preserves the VM and its dependent resources (NIC, public IP, disks) with minimal changes.

You need to move **prod-web-01** and its dependencies to a **different subscription** in the **same region**, using a **supported move** with minimal manual steps. **Which option should you choose?**

**Options:**

- **A.** A. Azure Resource Mover
- **B.** B. Move resources (to another subscription) ✅
- **C.** C. Azure Site Recovery (ASR)
- **D.** D. Azure Migrate

**Correct answer:** B

**Explanation:**

**Moving resources across subscriptions** (same region) is a **native ARM move** that keeps the VM and its dependent resources together. It’s performed via the portal’s **Move → Move to another subscription** (or **Move-AzResource**), automatically handling references so that NICs, public IPs, and disks move with the VM. This fits the scenario’s **same-region** and **short downtime** requirements without introducing a new migration stack.

**Azure Resource Mover** is designed primarily for **cross-region** moves; using it for a same-region subscription change would add needless orchestration. ASR and Azure Migrate are migration tools that replicate and (re)create VMs, which is unnecessary when a **first-party ARM move** is supported.

Why others are incorrect

A. Azure Resource Mover targets **region-to-region** moves; it’s not required for a **same-region subscription** move.

C. ASR focuses on **replication/failover** workflows and creates new target VMs rather than performing an ARM move.

D. Azure Migrate is for **on-prem/other-cloud-to-Azure** or complex migrate scenarios, not a native **subscription move** within the same region.

---

### Question 7

Fabrikam hosts a high-traffic web app. The content volume on a **data disk** is read heavily; writes are infrequent and batch-based off-hours. They need a **low-cost way to improve random read latency** without changing VM size or disk type.

You need to improve **random read performance** on the **content data disk** with **minimal cost** and no VM resize. **Which option should you choose?**

**Options:**

- **A.** A. Enable host caching: ReadOnly on the data disk ✅
- **B.** B. Upgrade the data disk to Ultra Disk
- **C.** C. Increase the data disk size to P30
- **D.** D. Enable Write Accelerator on the data disk

**Correct answer:** A

**Explanation:**

**ReadOnly host caching** places frequently accessed blocks in the VM host cache, reducing read latency for **read-dominant** workloads. It’s a **no-cost configuration change** that doesn’t require resizing the VM or moving to a more expensive disk tier, aligning perfectly with the constraints.

Because writes are infrequent and batch-based, the risk of cache coherency impact is minimal, and the workload benefits from **faster reads** without altering the architecture or incurring additional disk costs.

Why others are incorrect

B. **Ultra Disk** delivers top performance but **increases cost** and may impose additional placement constraints; it exceeds the “minimal cost” requirement.

C. Upsizing to **P30** raises IOPS/throughput but **increases cost**; caching first is the cheaper optimization.

D. **Write Accelerator** targets **write-intensive** workloads on specific VM families; it won’t help a read-heavy pattern.

---

### Question 8

Tailwind Traders still runs a legacy VM with **unmanaged disks (page blobs)** and wants to standardize on **managed disks** for easier scaling, snapshotting, and RBAC. They prefer a **native, in-place conversion** with minimal changes.

You need to convert **tt-legacy-web-01** to **managed disks** with **minimal operational effort** and without rebuilding the VM. **Which option should you choose?**

**Options:**

- **A.** A. Azure Migrate
- **B.** B. Snapshot each VHD and create managed disks manually
- **C.** C. az vm convert ✅
- **D.** D. Azure Site Recovery (ASR) failover to a new VM

**Correct answer:** C

**Explanation:**

**az vm convert** performs an **in-place conversion** of a VM’s **unmanaged OS and data disks** to **managed disks**, preserving the existing VM identity and references. This avoids re-creation steps, reduces risk, and aligns with the requirement to **minimize operational effort**.

By staying with the same VM and simply changing the disk control plane from storage accounts to managed disks, you gain easier lifecycle management (snapshots, scaling, RBAC) without redesigning the deployment.

Why others are incorrect

A. Azure Migrate targets server discovery and migration scenarios; it’s unnecessary for a simple in-place **disk control plane** change.

B. Manual snapshot-and-recreate works but is **heavier operationally** and error-prone compared to the native conversion.

D. ASR replicates and **creates a new VM**, not an in-place conversion; it adds complexity you don’t need.

---

### Question 9

Contoso is deploying an internal microservice as a **private** container. The image is stored in **Azure Container Registry (ACR)** and must be pulled **without embedding credentials**. The container must get a **private IP** in the existing VNet for outbound access to on-prem systems over VPN.

You need to provision the container with **VNet injection** and pull from ACR **without registry credentials**. **Which option should you choose?**

**Options:**

- **A.** A. az container create with --registry-username/--registry-password (ACR admin enabled) and a public IP
- **B.** B. az container create with system-assigned managed identity, grant AcrPull on ACR, reference the ACR image, and specify --vnet/--subnet ✅
- **C.** C. Deploy App Service for Containers and enable VNet Integration
- **D.** D. Create an AKS cluster with a private node pool and use Kubernetes imagePullSecrets

**Correct answer:** B

**Explanation:**

Assigning a **system-assigned managed identity** to the container group and granting **AcrPull** on the ACR lets ACI **authenticate to ACR without embedded credentials**. Adding **VNet injection** places the container group on the private subnet so it gets a **private IP** and stays internal-only. This meets both the **credential-less pull** and **private networking** requirements with minimal overhead.

Why others are incorrect

A. Embeds credentials and exposes a public IP, violating the requirements.

C. App Service for Containers is a different service and not required to meet the ACI-specific needs.

D. AKS is overkill; it adds cluster management and pull secrets you don’t need for a single container group.

---

### Question 10

Adventure Works needs a daily **reporting job** that runs a container image, writes output files to a **share**, and then exits. They want **no VM/cluster** to manage, **lowest cost**, and the job should **not restart** after completion.

You need a **serverless, run-to-completion** container that writes to an **Azure Files** share and can be **scheduled daily**. **Which option should you choose?**

**Options:**

- **A.** A. az container create with --restart-policy Never and Azure Files volume mount; trigger on a daily schedule ✅
- **B.** B. az container create with --restart-policy Always and Azure Files mount; start/stop manually each day
- **C.** C. Deploy AKS CronJob with PVC and node autoscaling
- **D.** D. Azure App Service WebJob with container image and SMB mount

**Correct answer:** A

**Explanation:**

Using ACI with **–restart-policy Never** makes the container **run once and exit**, ideal for scheduled jobs. Mounting an **Azure Files** share provides a simple, persistent place for report outputs. A scheduler such as **Logic Apps** or **Automation** can invoke the container on a **daily** cadence without maintaining servers or clusters—meeting the **no-infrastructure, low-cost** goal.

Why others are incorrect

B. **Always** restarts the container on exit, which conflicts with the run-to-completion requirement.

C. AKS introduces cluster overhead and cost that are unnecessary for a single scheduled container.

D. WebJobs target App Service scenarios; SMB mounts and lifecycle here are less direct than ACI’s native **Azure Files** volume mount.

---

### Question 11

You have an Azure subscription that contains the resources in the following table.

In Azure, you create a private DNS zone named adatum.com, add virtual network link to VNet2, and enable auto registration.

The adatum.com zone is configured as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM5 can resolve VM9.adatum.com.”**

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Choice No is correct. **Azure Private DNS** resolves names only for **virtual networks that are linked to the zone**. In your setup, the private zone **adatum.com** is linked to **VNet2** with **auto-registration enabled**. That means:

- **VM9 (in VNet2)** auto-registers an **A record** like VM9.adatum.com in the zone.

- **Only VNets linked to the zone** act as **resolution virtual networks** for that zone. Since **VNet1 is not linked**, its VMs (including **VM5**) don’t query or receive answers from the **adatum.com** private zone and therefore **cannot resolve VM9.adatum.com**.

Peering does not change this behavior; **name resolution is not transitive and does not flow across unlinked VNets**. To allow VM5 to resolve VM9.adatum.com, you would either (1) **link VNet1** to the adatum.com private DNS zone (resolution only is sufficient), or (2) deploy a **DNS forwarder** (e.g., Azure Firewall DNS proxy or a custom DNS server) in VNet1 that forwards queries for adatum.com to Azure’s private DNS endpoint, while VNet1 remains configured to use that forwarder.

Why Yes is incorrect

Even though VM9.adatum.com exists (auto-registered from VNet2), **VM5 has no zone link** to adatum.com and therefore **no path to resolve** that private name.

---

### Question 12

You have an Azure subscription that contains three virtual networks named VNET1, VNET2, and VNET3.

Peering for VNET1 is configured as shown in the following exhibit.

Peering for VNET2 is configured as shown in the following exhibit.

Peering for VNET3 is configured as shown in the following exhibit.

Based on the information presented, select the answer choice that completes the following statement correctly.

**“Packets from VNET2 can be routed to ______________.”**

**Options:**

- **A.** A. VNET1 only ✅
- **B.** B. VNET3 only
- **C.** C. VNET1 and VNET3
- **D.** D. Neither VNET1 nor VNET3
- **E.** E. VNET3 via VNET1 (transit)
- **F.** F. An on-premises network via VNET1s VPN gateway

**Correct answer:** A

**Explanation:**

Choice A is correct. **Virtual network peering is non-transitive**: a route from VNET2 to VNET1 does **not** automatically create a route from VNET2 to any other network VNET1 can reach. Since **VNET2 has a direct peering with VNET1**, packets from VNET2 can be routed to **VNET1**. Because **gateway transit is disabled**, VNET2 cannot use any gateway or learned routes in VNET1 to reach other networks (including VNET3 or on-prem).

Why the others are incorrect

B: There is **no direct peering** between VNET2 and VNET3, so routing from VNET2 to VNET3 is not possible.

C: Would require either **direct peering** between VNET2 and VNET3 or **transit via VNET1**; neither is in place.

D: Too restrictive—VNET2 **can** reach VNET1 over their direct peering.

E: Peering is **not transitive**; without **Use remote gateway / Allow gateway transit** properly enabled on the appropriate sides, VNET2 cannot route to VNET3 **through** VNET1.

F: With **gateway transit disabled**, VNET2 cannot send traffic to **on-premises** networks via any VPN/ExpressRoute gateway in VNET1.

---

### Question 13

Contoso is standardizing on a hub-and-spoke design. The hub VNet has the **only VPN gateway** to on-prem. Spokes must reach on-prem **via the hub’s gateway** no extra gateways in spokes.

You need the spokes to **use the hub’s VPN gateway** over peering. On the **hub side of the peering**, which setting should you enable?

**Options:**

- **A.** A. Allow virtual network access
- **B.** B. Use remote gateway
- **C.** C. Allow forwarded traffic
- **D.** D. Allow gateway transit ✅

**Correct answer:** D

**Explanation:**

**Choice D is correct.** Enabling **Allow gateway transit** on the **hub-side** peering advertises the hub’s VPN gateway to the peered spokes so they can consume **on-prem connectivity** without deploying their own gateways. This is the hub’s part of the hub/spoke pattern for gateway sharing.

To complete the pattern, each spoke’s **spoke-side** peering should enable **Use remote gateway**, but the question explicitly asks for the **hub-side** configuration. With peering in place and non-overlapping address spaces, routes to on-prem propagate over the Azure backbone.

Why others are incorrect

A. **Allow virtual network access** simply permits VNet-to-VNet traffic; it doesn’t expose the hub’s gateway to spokes.

B. **Use remote gateway** is set on the **spoke side**, not on the hub side.

C. **Allow forwarded traffic** is for NVA/service-chaining scenarios; it doesn’t publish the hub gateway to peers.

---

### Question 14

A VM in Spoke-A can’t reach a private endpoint over **TCP 443**. The security team wants to know **exactly which rule** is denying the flow from the VM to the destination IP.

You need to determine if the flow is **Allowed/Denied** and identify the **exact NSG rule** responsible for the decision. **Which option should you choose?**

**Options:**

- **A.** A. Next hop
- **B.** B. Effective security rules
- **C.** C. Connection troubleshoot
- **D.** D. IP flow verify ✅

**Correct answer:** D

**Explanation:**

**IP flow verify** evaluates a single **5-tuple (src/dst IP, port, protocol, direction)** against the **effective** NSG and admin rules applied to the VM’s NIC/subnet and returns **Allow/Drop with the exact rule name**. That’s the fastest way to answer “which rule is blocking 10.1.1.7 → 10.0.10.5:443?”—no packet capture or guesswork required.

Because it runs at the VM’s network interface context, it reflects merged policy (subnet + NIC + admin rules) and avoids confusion when multiple NSGs exist. For audit and RCA, the reported **rule name** is the key artifact the security team asked for.

Why others are incorrect

A. **Next hop** shows routing decisions, not L4 allow/deny or rule names.

B. **Effective security rules** lists merged rules but doesn’t evaluate a **specific flow** or return an allow/deny result.

C. **Connection troubleshoot** can show reachability and where it fails, but it won’t return the **precise rule name** that denied the flow.

---

### Question 15

Fabrikam operates multiple storage accounts used by different departments. Each account uses shared keys for programmatic access, but the IT security team is implementing key rotation policies to enhance security.

After Fabrikam’s IT team regenerates **key1** for storagefinance01, several legacy applications lose access to the storage account. They must restore functionality without rolling back the key. What should they do?

**Options:**

- **A.** A. Update the applications to use key2 instead of key1 ✅
- **B.** B. Delete and recreate the storage account with a new key pair
- **C.** C. Disable key rotation for all storage accounts
- **D.** D. Configure the storage account to allow anonymous access

**Correct answer:** A

**Explanation:**

Each Azure Storage account provides two access keys — **key1** and **key2** — to support **seamless key rotation**. When one key is regenerated, applications can temporarily use the other key while configurations are updated. This ensures business continuity during key rotation.

**Why others are incorrect:**

- **B:** Deleting the storage account would result in data loss and service disruption.

- **C:** Disabling key rotation undermines security and violates governance policy.

- **D:** Anonymous access is not supported for most storage types and poses a serious security risk.

---

### Question 16

Refer to Northwind Traders (I) Case Study : AZ-104:
https://docs.google.com/document/d/1epkoAw5-c-Dg62nsP1g5j7KMVQZUnQNaeU21ZD-K0Z0/edit?usp=sharing
App1 is rehosted to Azure VMs in one VNet with Web, Processing, and Data tiers. You must minimize open ports between tiers and keep rules easy to maintain as VM counts change.
What should you implement?

**Options:**

- **A.** A. NSG rules referencing each VMs private IPs
- **B.** B. Application Security Groups (ASGs) for each tier and NSG rules that reference ASG?ASG on required ports ✅
- **C.** C. Any-Any within the VNet; rely on host firewalls inside the VMs
- **D.** D. Insert a third-party firewall between each subnet and manage all rules centrally, host a load balancer for the external traffic using NVA

**Correct answer:** B

**Explanation:**

Choice B is correct. ASGs let you express intent (for example, Web ? Processing on 8443; Processing ? Data on 1433) without hard-coding IPs. As tiers scale in/out, you add/remove NICs to the appropriate ASG and the NSG rules continue to applyminimal exposure, minimal churn, and strong alignment with least-privilege east-west filtering.
Why the others are incorrect
A: IP-based NSGs dont scale and become brittle as VMs are added/replaced.
C: Any-Any violates the requirement to minimize open ports and weakens segmentation.
D: Appliances add cost/latency/operations overhead when NSGs/ASGs natively solve the requirement.

---

### Question 17

A worker VM in a spoke must call an API on a hub VM over **TCP 8443**. There’s an **NVA in the hub**, and UDRs steer traffic through it. The app intermittently times out; ops need an **active test** from the worker VM to the API **FQDN** that shows **reachability, hops, and whether NSG/UDR is the cause**.

You need an **on-demand** test from the source VM to the destination **FQDN/port** that reports **reachability**, **path**, and whether a **platform vs. configuration** issue (NSG/UDR/port) is causing failure. **Which option should you choose?**

**Options:**

- **A.** A. IP flow verify
- **B.** B. Next hop
- **C.** C. Connection troubleshoot ✅
- **D.** D. Packet capture

**Correct answer:** C

**Explanation:**

**Connection troubleshoot** runs an **active end-to-end probe** from the chosen source to a destination (FQDN/IP and port), then reports **Reachable/Unreachable**, resolved IP, **hops**, and likely cause (for example, **NSG rule**, **UDR**, or **blocked port**). It’s ideal for intermittent app timeouts because you can run the test during an incident and see whether the platform or your configuration is at fault.

Unlike per-flow evaluations, it gives a **path-level view** across VNets and NVAs and highlights where along the route connectivity breaks, accelerating MTTR without building a persistent monitor.

Why others are incorrect

A. **IP flow verify** checks policy at the VM NIC for a fixed tuple; it doesn’t trace **hops** or test DNS/FQDN resolution.

B. **Next hop** only shows routing for a destination IP; it won’t validate ports, NSGs, or end-to-end reachability.

D. **Packet capture** is low-level and heavier to operate; it lacks **root-cause hints** and hop topology for quick triage.

---

### Question 18

Fabrikam requires **east-west traffic inspection**. A firewall NVA lives in the hub; spokes must **hairpin** through it using **UDRs**. Traffic must pass **from a spoke, via hub NVA, back to the hub or another spoke**.

You must allow the **NVA to forward** packets between peered VNets so the UDR hairpin works. Which peering setting should you enable?

**Options:**

- **A.** A. Use remote gateway
- **B.** B. Allow forwarded traffic ✅
- **C.** C. Allow virtual network access
- **D.** D. Enable BGP on the NVA

**Correct answer:** B

**Explanation:**

**Choice B is correct.** When traffic is **forwarded by an intermediate device** (such as an NVA) across a peering link, peering denies that traffic by default. Enabling **Allow forwarded traffic** on the relevant peering(s) permits packets whose source is **not** the peered VNet itself (i.e., forwarded flows) so that **UDR-based service chaining** through the firewall succeeds.

This setting complements your **UDRs** and NSGs: the UDR sends traffic to the NVA; **Allow forwarded traffic** lets that forwarded flow traverse peering; NSGs then enforce policy. Without it, inspection hairpins fail even though the routes point to the NVA.

Why others are incorrect

A. **Use remote gateway** is for sharing a VPN/ER gateway; it doesn’t allow NVA-forwarded traffic.

C. **Allow virtual network access** permits direct VNet-to-VNet flows only; it blocks **forwarded** flows by default.

D. **BGP** on an NVA isn’t a peering property and doesn’t change the peering’s forwarded-traffic behavior.

---

### Question 19

You have an Azure subscription.

You deploy a virtual machine scale set that is configured as shown in the following exhibit.

Based on the information provided, select the answer choice that completes the following statement correctly.

**“At 9:00 AM, the scale set starts and CPU utilization is 90 percent for 15 minutes. How many virtual machine instances will be running at 9:15 AM?”**

**Options:**

- **A.** 1
- **B.** 2
- **C.** 3 ✅
- **D.** 4
- **E.** 5
- **F.** 6

**Correct answer:** C

**Explanation:**

What the autoscale profile implies

- A **scale-out rule** fires when **Percentage CPU &gt; threshold for the last 10 minutes**, and the **action is +1 instance**. The sample schema in Microsoft’s doc shows Average CPU &gt; 85% for 10 minutes → Increase by 1, with a **cooldown = 5 minutes**. Microsoft Learn

- **Cooldown** means that **after** a scale action occurs, autoscale **waits the cooldown period** before it can scale again, so metrics can stabilize. Microsoft Learn

- Instance **limits** (min/default/max) are part of the same profile (the example shows min=1, default=1, max=4), so additional scale-outs are allowed until max is hit. Microsoft Learn

Timeline

- **9:00–9:10** → CPU is **90%** (above the rule’s threshold) for a full **10 minutes**, so autoscale **scales out by +1** at ~**9:10** (e.g., from 1 → **2** instances). **Cooldown (5 min)** starts. Microsoft Learn

- **9:10–9:15** → During cooldown, autoscale **won’t** scale again. At **9:15**, cooldown has elapsed; the last **10-minute window (≈ 9:05–9:15)** still averages **&gt; threshold** (the question states sustained 90% for 15 minutes), so autoscale **scales out by +1** again (2 → **3**). Microsoft Learn

Therefore, by **9:15 AM**, the scaling actions taken are **+1 at 9:10** and **+1 at 9:15**, giving **3 running instances** (assuming the max capacity allows it).

(Note: in practice a new VM may take a bit to finish provisioning; exam questions usually expect the **target/desired** instance count as of the decision time.)

---

### Question 20

You have an Azure subscription.

You deploy a virtual machine scale set that is configured as shown in the following exhibit.

Based on the information provided, select the answer choice that completes the following statement correctly.

**“At 10:00 AM, the scale set has five virtual machine instances running and CPU utilization falls to less than 15 percent for 60 minutes. How many virtual machine instances will be running at 11:00 AM?”**

**Options:**

- **A.** 1 ✅
- **B.** 2
- **C.** 3
- **D.** 4
- **E.** 5
- **F.** 6

**Correct answer:** A

**Explanation:**

This choice is incorrect because the scale set is configured to decrease the number of instances to 1 when CPU utilization falls below 15 percent for 60 minutes, not 6 instances.

Overall explanation

The total is **1** at **11:00 AM** (given the autoscale profile in the exhibit: scale-in when CPU is below the threshold for 10 minutes; action = −1 instance; cooldown = 5 minutes; minimum = 1).

Explanation

- **10:00–10:10** → CPU stays **&lt; threshold** for a full **10 minutes**, so autoscale **decreases by 1** at about **10:10** (5 → 4).

- **Cooldown 10:10–10:15** → No additional scaling during cooldown.

- **10:15** → The last 10-minute window is still **below threshold**, so autoscale **decreases by 1** (4 → 3).

- **10:20** → Still below threshold → **decrease by 1** (3 → 2).

- **10:25** → Still below threshold → **decrease by 1** (2 → **1**).

- **After 10:25** → The scale set has reached the **minimum capacity (1)**, so further scale-ins are not performed even though CPU remains low.

By **11:00 AM**, the profile has stepped down **four times** (every cooldown cycle after a valid 10-minute evaluation) from 5 → **1**, and it cannot go lower because of the **min instance** setting.

---

### Question 21

You have an Azure subscription.

You plan to deploy the Azure container instances shown in the following table.

Which instances can you deploy to a container group?

**Options:**

- **A.** Instance1 Only
- **B.** Instance 2 Only
- **C.** Instance 2 and 3 Only
- **D.** Instance 3 and 4 Only ✅

**Correct answer:** D

**Explanation:**

**Correct choice:** Instance3 and Instance4 only

**Why:**

- **Multi-container groups are supported only on Linux in ACI.** Windows in ACI is limited to **single-container** groups. So any container group that has more than one container must be Linux.

- A container group has a single **OS type** property (Linux or Windows) that applies to **all containers in the group**—you can’t mix Linux and Windows images in the same group

Given the table (Instance3 + Instance4 are Linux; Instance1/Instance2 are Windows/Nano/Server Core), only the **two Linux instances** can be deployed **together** in one container group.

**Why the other answers are wrong:**

- **Instance1 only** / **Instance2 only** – these are Windows containers. You could deploy **one** Windows container per group, but the question asks which instances can be deployed **to a container group (together)**. A multi-container Windows group isn’t supported.

- **Instance1 and Instance2 only** – still Windows; multi-container groups on Windows aren’t supported. You also can’t mix OS types inside a group.

---

### Question 22

You have an Azure subscription that contains the resources in the following table.

VM1 and VM2 are deployed from the same template and host line-of-business applications.

You configure the network security group (NSG) shown in the following exhibit.

You need to prevent users of VM1 and VM2 from accessing websites on the Internet over TCP port 80.

What should you do?

**Options:**

- **A.** A) Change the DenyWebSites outbound security rule
- **B.** B) Change the Port_80 inbound security rule
- **C.** C)Associate the NSG to Subnet1 ✅
- **D.** D) Disassociate the NSG from a network interface
- **E.** E) Associate the NSG to VNet1
- **F.** F) Create an Application Security Group (ASG) and add VM1/VM2

**Correct answer:** C

**Explanation:**

What you should do

Associate the **NSG** to **Subnet1**.

Why this solves it

- The exhibit shows an **outbound deny rule** (e.g., DenyWebSites, TCP **80**) in the NSG, but the **NSG isn’t associated** to anything (“0 subnets, 0 network interfaces”).

- **NSG rules only take effect when the NSG is associated** to a **subnet** or to **NICs**.

- VM1 and VM2 live in **Subnet1**. Associating the NSG to **Subnet1** applies the **outbound TCP/80 deny** to **both VMs** immediately, preventing users on those VMs from browsing websites over port 80.

Why the other options are wrong

- Change the DenyWebSites outbound rule

Adjusting the rule won’t matter if the NSG remains **unassociated**. Until it’s bound to Subnet1 or the NICs, **no rule is enforced**.

- Change the Port_80 inbound rule

The requirement is to block **outbound** web access from the VMs to the Internet. **Inbound** rules control traffic coming **into** the VMs, which doesn’t address users browsing out to websites.

- Disassociate the NSG from a network interface

The NSG is already associated to **0** NICs, so there’s nothing to remove. This action doesn’t apply the needed outbound deny to VM1/VM2.

- Associate the NSG to VNet1

NSGs **cannot be associated at the VNet level**—only to **subnets** or **NICs**. This isn’t a valid or supported attachment point, so it won’t enforce any rules.

- Create an Application Security Group (ASG) and add VM1/VM2

An **ASG** is a **targeting object** used **inside NSG rules**; by itself it **does nothing**. You’d still need an **NSG associated** to Subnet1 or NICs with a rule referencing that ASG. Since the NSG isn’t associated, adding an ASG won’t block outbound TCP/80.

---

### Question 23

You have an Azure subscription that contains the virtual networks shown in the following table.

The subscription contains the virtual machines shown in the following table.

All the virtual machines have only private IP addresses.

You deploy an Azure Bastion host named Bastion1 to VNet1.

To which virtual machines can you connect through Bastion1?

**Options:**

- **A.** A. VM1 only
- **B.** B. VM1 and VM2 only ✅
- **C.** C. VM1 and VM3 only
- **D.** D. VM1, VM2, and VM3

**Correct answer:** B

**Explanation:**

Choice B is correct. Azure Bastion provides RDP/SSH over TLS to VMs **in the same virtual network** as the Bastion host and to VMs in **directly peered VNets**. Bastion1 is in **VNet1**, so it can reach **VM1 (VNet1)** and **VM2 (VNet2)** because **VNet1 ↔ VNet2** are peered. **VM3 (VNet3)** is not reachable because there is **no direct peering between VNet1 and VNet3**; VNet peering is **not transitive** (VNet1↔VNet2 and VNet2↔VNet3 does not imply VNet1↔VNet3).

Why the others are incorrect

A: Too restrictive—Bastion can also reach VMs in **directly peered** VNets (VM2).

C: VM3 sits in a VNet **not directly peered** with VNet1, so it’s not accessible via Bastion1.

D: Includes VM3, which isn’t accessible due to **non-transitive peering**.

---

### Question 24

You have an Azure subscription that contains the resources shown in the following table.

All virtual machines run Windows Server.

On VM1, you back up a folder named Folder1 as shown in the following exhibit.

You plan to restore the backup to a different virtual machine.

You need to restore the backup to VM2.

What should you do first?

**Options:**

- **A.** A. From VM2, install the Windows Server Backup feature
- **B.** B. From VM1, install the Microsoft Azure Recovery Services Agent
- **C.** C. From VM1, install the Windows Server Backup feature
- **D.** D. From VM2, install the Microsoft Azure Recovery Services Agent ✅
- **E.** E. From VM2, create a shared folder
- **F.** F. From VM1, enable file recovery mode

**Correct answer:** D

**Explanation:**

Choice D is correct. To restore an **Azure Backup (MARS)** backup to a **different VM**, that destination VM must be able to **communicate securely with the Recovery Services vault** and authenticate the backup data. This requires installing the **Microsoft Azure Recovery Services Agent** (MARS Agent) on **VM2**. Once installed, you can register VM2 with the same Recovery Services vault used by VM1 and perform a **“Restore”** operation to recover Folder1 to VM2.

The MARS Agent provides the integration layer between the on-premises or Azure VM OS and Azure Backup. It handles encryption/decryption, data transfer, and vault authentication. Without it, VM2 cannot browse or restore backup items stored in Azure.

Why the others are incorrect

A: The **Windows Server Backup** feature is a local backup utility; it cannot retrieve backups from a Recovery Services vault.

B: VM1 already has the MARS Agent installed (used for the initial backup). Installing it again doesn’t help restore to another VM.

C: Same as above—Windows Server Backup is unrelated to Azure Backup’s restore mechanism.

E: A shared folder isn’t required for restoring from a vault.

F: File recovery mode applies to restoring files on the same VM, not to a different machine.

---

### Question 25

You have an Azure subscription that contains the container images shown in the following table.

You plan to use the following services:

- Azure Container Instances

- Azure Container Apps

- Azure App Service

In which service(s) can you run **Image1**?

**Options:**

- **A.** A. Azure Container Instances only
- **B.** B. Azure Container Apps only
- **C.** C. Azure App Service only
- **D.** D. Azure Container Instances and Azure App Service only ✅
- **E.** E. Azure Container Apps and Azure App Service only
- **F.** F. Azure Container Instances, Azure Container Apps, and Azure App Service

**Correct answer:** D

**Explanation:**

Choice D is correct. **Azure Container Instances (ACI)** and **Azure App Service** both support **Windows-based container images**, whereas **Azure Container Apps** supports **only Linux-based images**. Because Image1 is built on Windows Server Core, it can run in **ACI** or **App Service (Windows containers plan)**, but not in Container Apps.

Azure Container Instances provides a simple, serverless way to run containers directly without managing underlying compute. It supports both Windows and Linux container groups and is ideal for short-lived or isolated workloads.

Azure App Service supports deploying containerized applications on both Windows and Linux plans. When using Windows containers, you can deploy web apps packaged as Docker images that run within the App Service managed environment.

In contrast, Azure Container Apps is a microservices platform built on Kubernetes and **currently supports only Linux-based container images** due to its reliance on Linux-based infrastructure (KEDA, Dapr, and Envoy).

**Why the others are incorrect**

A: Too limited—App Service also supports Windows-based containers.

B: Incorrect—Container Apps supports only Linux images.

C: Too narrow—ACI also supports Windows containers.

E: Invalid—Container Apps does not support Windows containers.

F: Incorrect—Container Apps cannot host Windows-based images.

---

### Question 26

You have an Azure subscription that contains a virtual network named VNET1 in the East US 2 region. Network interfaces named VM1-NI and VM2-NI are connected to VNET1.

You successfully deploy the following Azure Resource Manager template.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“If an Azure datacenter becomes unavailable, VM1 or VM2 will be available.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes is correct.** In the ARM template, **VM1** has “zones”: “1” and **VM2** has “zones”: “2”, placing the VMs in **different availability zones within the same region**. Availability Zones are physically separate datacenters with independent power, cooling, and networking. By distributing VMs across zones, you gain resilience to **datacenter-level failures**: if Zone 1 experiences an outage, the VM in Zone 2 remains available. This zoning strategy is a core high-availability pattern in Azure, ensuring application continuity without requiring cross-region deployment.

---

### Question 27

You have an Azure subscription that contains the resources shown in the following table.

NSG1 is configured as shown in the following exhibit.

For the following statement, select Yes if the statement is true. Otherwise, select No.

**“VM2 can access VM1 by using the HTTPS protocol.”**

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

**Yes is correct.** The NSG rule **HTTPS_VM1_Deny** has priority 110 and denies **TCP 443 (HTTPS)** traffic **only from the Internet** to VM1. Since both **VM1 and VM2** are located within the same virtual network (**VNet1**), communication between them does not rely on this inbound Internet rule.

By default, Azure allows **intra-VNet traffic** — meaning all resources inside the same virtual network can communicate freely with one another unless explicitly blocked by a **higher-priority NSG rule**. Because no rule denies traffic within the virtual network, **VM2 can successfully connect to VM1 using HTTPS (TCP 443)**.

This design supports secure segmentation: inbound rules apply to traffic arriving from outside sources (like the Internet or other VNets), while **virtual-network-scoped traffic** remains unrestricted unless explicitly denied.

---

### Question 28

**Note:** This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals.

You have an Azure subscription that contains the virtual machines shown in the following table.

You deploy a load balancer that has the following configurations:

- Name: LB1

- Type: Internal

- SKU: Standard

- Virtual network: VNET1

You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.

**Solution**: You disassociate the public IP address from the network interface of VM2.

**Options:**

- **A.** Yes ✅
- **B.** No

**Correct answer:** A

**Explanation:**

A **Standard SKU Load Balancer** can only associate backend pool members that satisfy strict compatibility and networking requirements. Specifically:

- All virtual machines must be in the **same region and virtual network** as the load balancer.

- Each VM must have either **no public IP** or a **Standard SKU public IP**.

- **Basic SKU public IPs** are **not supported** with Standard SKU load balancers because they operate on different control planes and isolation models.

In this case, **VM2** had a **Basic SKU public IP**, which prevented it from being added to the backend pool of **LB1 (Standard SKU)**. By **disassociating the Basic IP** from VM2’s network interface, VM2 now has no public IP and becomes compliant with the Standard Load Balancer’s backend pool requirements.

This change aligns both **VM1** (no public IP) and **VM2** (no public IP after disassociation) with the Standard SKU rules, allowing both to be added to the **backend pool of LB1**.

Why No is incorrect

Leaving a Basic SKU IP attached would continue to block the VM from joining the backend pool. The disassociation step is exactly what resolves this incompatibility.

---

### Question 29

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

If **Rule1** is deleted, **LB1** will not automatically begin balancing traffic across all ports. Azure Load Balancers, whether **Basic** or **Standard**, require at least one **load-balancing rule** to define which frontend port and protocol should be mapped to backend instances. Without a rule, there’s no instruction for the load balancer to distribute inbound flows, so traffic to any port will simply not be processed or forwarded to **VM1** and **VM2**.

In the given configuration, **Rule1** explicitly defined which traffic (for example, TCP port 80 or 443) should be distributed between backend pool members. Once this rule is deleted, **LB1** retains its backend pool configuration but has no active rule to map incoming requests—effectively making it idle.

Additionally, if all health probes fail, **no new traffic flows** will be sent to backend pool members, and existing TCP connections will be dropped. This is a safeguard to prevent directing traffic to unhealthy or unmonitored targets.

Key point:

Deleting a rule removes the load balancer’s ability to direct traffic; it doesn’t make it distribute traffic on all ports—that behavior must be explicitly defined.

---

### Question 30

You have an Azure subscription that contains a **virtual network** named **VNet1**.

VNet1 has an address space of **10.0.0.0/16** and contains the following subnets:

**VM1** in **Subnet1** functions as a **router** (network virtual appliance) for controlling inbound and outbound traffic.

You create a **route table** named **RT1** and associate it with the **GatewaySubnet**.

You need to ensure that **all inbound traffic from the VPN gateway** to resources in **VNet1** is **routed through VM1**.

Question:

When configuring the custom route in **RT1**, what should you use for the **address prefix**?

**Options:**

- **A.** A. 10.0.1.0/24
- **B.** B. 10.0.254.0/24
- **C.** C. 10.0.0.0/16 ✅
- **D.** D. 10.0.2.0/24
- **E.** E. 0.0.0.0/0
- **F.** F. 10.0.3.0/24

**Correct answer:** C

**Explanation:**

Choice C is correct. By setting the **address prefix** to **10.0.0.0/16**, you cover the **entire address space** of **VNet1**, including all subnets (Subnet0, Subnet1, Subnet2, and GatewaySubnet). This configuration ensures that **all traffic coming from the VPN gateway** and destined for any subnet within VNet1 will first be routed through **VM1** (the virtual appliance in Subnet1).

In the route’s properties, you would also configure:

- **Next hop type:** Virtual appliance

- **Next hop IP address:** VM1’s private IP address in Subnet1

This ensures that VM1 handles packet inspection, routing, or security enforcement before traffic reaches other subnets.

Why the others are incorrect

A: 10.0.1.0/24 applies only to Subnet1, not the full VNet.

B: 10.0.254.0/24 covers only the GatewaySubnet, so no traffic to other subnets would be redirected.

D/F: These only cover specific subnets, not the entire VNet.

E: 0.0.0.0/0 redirects all traffic (including Internet-bound), which is broader than required.

---

### Question 31

Contoso runs a two-VM app (web + DB) in Australia East with replication to Australia Southeast using Azure Site Recovery.
Problems / issues
Source region is healthy; business wants near-zero data loss with a controlled cutover.
Need a brief outage to finalize sync and switch over.
App requires startup order (DB before web) and simple orchestration.
Networking already mapped to target VNet/subnets.
You need to execute the cutover to the secondary region under these conditions. Which option should you choose?

**Options:**

- **A.** A. Test failover
- **B.** B. Unplanned failover
- **C.** C. Planned failover ✅
- **D.** D. Commit

**Correct answer:** C

**Explanation:**

Planned failover is designed for controlled cutovers when the source is still available. It shuts down the source VMs, performs a final replication, and brings up the target VMsminimizing or eliminating data loss at the moment of switch. For multi-VM apps, running the operation via a recovery plan preserves boot order and optional pre/post steps so the DB comes online before the web tier. After verifying the app in the secondary, you Commit to finalize the move and keep replication metadata tidy.
Why others are incorrect
A. Test failover is an isolated drill and doesnt switch production traffic.
B. Unplanned failover is for outages when the source isnt available (higher potential data loss).
D. Commit finalizes an already-completed failover; it doesnt perform the switch.

---

### Question 32

You have an Azure subscription that includes the following resources:
VNet1, a virtual network
Subnet1, a subnet in VNet1
WebApp1, an App Service web app
NSG1, a network security group
You create an application security group named ASG1.
Which resource can use ASG1?

**Options:**

- **A.** A. NSG1 ✅
- **B.** B. Subnet1
- **C.** C. VNet1
- **D.** D. WebApp1

**Correct answer:** A

**Explanation:**

Application security groups are used inside network security group rules as the source or destination for traffic filtering. Microsofts documentation says network interfaces that are members of an application security group apply the network security group rules that specify that ASG as source or destination.
That means NSG1 is the resource that can use ASG1. A subnet or virtual network does not use an ASG directly, and App Service web apps are not the resource type referenced here for ASG-based rule targeting. ASGs are primarily about grouping VM network interfaces so NSG rules can target them more easily.
Why the other options are incorrect:
 B. Subnet1  A subnet can have an NSG associated to it, but the subnet does not directly use an application security group. The ASG is referenced inside the NSGs security rules instead.
 C. VNet1  A virtual network is not the resource that consumes an ASG. Microsoft describes ASGs as a way to group network interfaces and then use those groups in NSG rules.
 D. WebApp1  App Service web apps are not what ASGs are designed for in this context. Microsofts ASG documentation centers on network interfaces and NSG rule definitions, not direct App Service attachment.

---

### Question 33

Tailwind Traders runs a stateless web app on a Standard S1 plan. Weekday traffic spikes 09:0017:00. They want automatic scale-out on high CPU, scale-in when idle, and min/max limits to keep costs predictableno SKU change.
You need automatic scale-out/in with CPU rules and min/max instance bounds, without changing SKU. Which option should you choose?

**Options:**

- **A.** A. Scale up (P1v3)
- **B.** B. Manual scale (5 instances)
- **C.** C. Autoscale (CPU; min=1, max=5) ✅
- **D.** D. Always On

**Correct answer:** C

**Explanation:**

Autoscale at the App Service plan level adds metric-based rules plus min/max limits so the plan scales out under load and scales in when demand dropsno code or SKU change. You can also add a time profile for weekdays to shape behavior.
Why others are incorrect
A. Scale up increases per-instance size only; no automatic instance changes.
B. Manual instance count wont react to load.
D. Always On prevents cold starts; it doesnt scale.

---

### Question 34

A legacy app keeps in-memory session state. Peak season adds ~40% RPS causing CPU contention on a single worker. You must improve performance but avoid multi-instance session issues.
You need better performance without scaling out. Which option should you choose?

**Options:**

- **A.** A. Scale up (larger SKU) ✅
- **B.** B. Autoscale (15)
- **C.** C. Deployment slot
- **D.** D. ARR affinity + scale out

**Correct answer:** A

**Explanation:**

For a stateful app tied to one instance, scale up to a larger SKU (more CPU/RAM). This boosts headroom without adding instances that could break session assumptions.
Why others are incorrect
B. Autoscale adds instances ? session consistency risk.
C. Slots handle releases, not performance.
D. ARR affinity helps stickiness but doesnt fix compute limits.

---

### Question 35

You have an Azure subscription that contains a virtual machine named VM1 and a storage account named storage1.
You need to ensure that VM1 can access storage1 by using the Azure backbone.
What should you configure?

**Options:**

- **A.** A. a routing table
- **B.** B. a service endpoint ✅
- **C.** C. a VPN gateway
- **D.** D. Peering

**Correct answer:** B

**Explanation:**

A service endpoint is the Azure feature designed for this requirement. Microsoft says Azure virtual network service endpoints provide secure, direct connectivity to Azure services over the Azure backbone network. For Azure Storage, enabling the Microsoft.Storage service endpoint on the VMs subnet lets traffic from that subnet reach the storage account over Microsofts backbone rather than the public internet.
This is different from other networking features in the answer set. A routing table does not by itself create Azure Storage service integration, a VPN gateway is for VPN connectivity scenarios, and peering connects virtual networks to each other rather than enabling optimized access from a subnet to Azure Storage.
Why the other options are incorrect:
 A. a routing table  A route table controls how traffic is routed, but it does not enable the Azure Storage service integration needed here. The requirement is specifically about reaching Azure Storage over the Azure backbone by using the supported Azure service-access mechanism, which is a service endpoint.
 C. a VPN gateway  A VPN gateway is used for site-to-site, point-to-site, or VNet-to-VNet VPN connectivity. It is not the feature used to optimize subnet-to-Azure-Storage access over the Azure backbone for this scenario.
 D. Peering  VNet peering connects virtual networks to each other over the Azure backbone, but it does not by itself configure access from a VM subnet to Azure Storage as a PaaS service. For Azure Storage, the relevant feature in this answer set is the service endpoint.

---

### Question 36

Contoso is onboarding 4,500 new employees across regions. You have to assign Microsoft 365 E3 automatically on join and remove it on exit, with minimal admin effort and no scripts. Contractors must be excluded by rule.
What should you implement?

**Options:**

- **A.** A. Direct user assignment
- **B.** B. Role assignment
- **C.** C. Nested groups
- **D.** D. Dynamic group + group-based licensing ✅

**Correct answer:** D

**Explanation:**

Create a dynamic security group that includes only users who match your HR attributes (for example, user.userType -eq “Member“ and department -eq “Sales“). Assign the Microsoft 365 E3 license to that group using group-based licensing. Membership changes drive license add/remove automatically, so hires get licensed at join and leavers lose the license when they drop out of scope no scripts or manual steps.
Why the others are incorrect:
A: Direct assignment doesnt scale; every hire/termination requires manual license updates.
B: Directory roles manage admin privileges, not end-user product licensing.
C: Group-based licensing does not support nested group expansion; indirect members wont receive licenses.

---

### Question 37

Contoso hosts an internal line-of-business web app that must be private-only over VPN/ExpressRoute. Security policy requires no public internet exposure. Operations wants simple private DNS for corporate users, with no SKU change or platform move.
You need to expose the app privately and eliminate public exposure while keeping name resolution straightforward for corporate users. Which option should you choose?

**Options:**

- **A.** A. VNet Integration
- **B.** B. Access restrictions
- **C.** C. Private Endpoint ✅
- **D.** D. App Service Environment (v3)

**Correct answer:** C

**Explanation:**

Private Endpoint gives the app a private IP in your VNet via Private Link so corporate clients reach it over VPN/ER without traversing the public internet. With a linked Private DNS zone for the service FQDN, clients automatically resolve the app to its private address, keeping user experience and operations simple.
Compared to IP allow lists, this model removes reliance on a public endpoint path and aligns with private-only policy while preserving your existing App Service plan and deployment flow.
Why others are incorrect
A. VNet Integration governs outbound from the app to the VNet; it doesnt provide private inbound access.
B. Access restrictions filter who can reach the public endpoint; they dont truly remove internet exposure.
D. ASE v3 also isolates networking but is a heavier platform shift not required here.

---

### Question 38

Fabrikams web app must reach Storage and SQL over private endpoints and an on-prem API via VPNno public egress. Security also needs a static outbound IP for third-party allow-listing. The team wants to keep the current plan and avoid code changes.
You need to route all outbound traffic from the app into a VNet so that UDRs, private endpoints, and VPN routes are honored, and you can present a predictable egress IP. Which option should you choose?

**Options:**

- **A.** A. VNet Integration (Route All) ✅
- **B.** B. Private Endpoint
- **C.** C. Service endpoints
- **D.** D. Hybrid Connections

**Correct answer:** A

**Explanation:**

VNet Integration (Route All) sends the apps outbound traffic into a selected subnet so UDRs, private endpoints, and VPN/ExpressRoute paths are used. This enables private service-to-service flows and lets the subnets egress controls (for example, a NAT Gateway) provide a static public IP where needed for external APIs.
By centralizing routing in the VNet, you avoid public egress from the multi-tenant App Service stamp and keep the App Service plan unchanged.
Why others are incorrect
B. A Private Endpoint secures inbound access to the app; it doesnt control outbound routing or provide static egress.
C. Service endpoints dont apply from App Service; they secure traffic from subnets to PaaS, not from App Services plane.
D. Hybrid Connections relay to specific TCP endpoints; they dont give full VNet routing or predictable egress IP.

---

### Question 39

You have an Azure VM named VM1. You need to add a 1-TB data disk that:
Survives a datacenter (zone) outage
Delivers the lowest latency / highest performance possible under that resiliency constraint
Ensures no data loss if a host fails
Which storage type should you use?

**Options:**

- **A.** A. Premium SSD (LRS)
- **B.** B. Premium SSD (ZRS) ✅
- **C.** C. Standard SSD (LRS)
- **D.** D. Standard SSD (ZRS)
- **E.** E. Ultra Disk (LRS)
- **F.** F. Premium SSD v2 (LRS)

**Correct answer:** B

**Explanation:**

Premium SSD with Zone-Redundant Storage (ZRS) is the best fit because it keeps synchronous copies across three availability zones in the same region, protecting against datacenter/zone failures with zero data loss (writes are acknowledged only after being committed across zones). Among ZRS-capable managed disks, Premium SSD offers much lower latency and higher IOPS/throughput than Standard SSD, meeting the performance requirement while still providing zone resiliency. If the VMs host fails, data remains durable because its written to the managed disks replicated copies; the VM can be brought back on healthy infrastructure without losing data.
Why the others are incorrect
A. Premium SSD (LRS): High performance, but replication is only within a single datacenter. A datacenter outage can make the disk unavailable.
C. Standard SSD (LRS): Same single-datacenter risk as Premium LRS and lower performance/latency than Premium SSD.
D. Standard SSD (ZRS): Has zone resiliency, but does not meet the lowest latency / highest performance requirement compared to Premium SSD (ZRS).
E. Ultra Disk (LRS): Delivers the highest performance overall, but only LRS; no ZRS support, so it doesnt meet datacenter-outage resiliency.
F. Premium SSD v2 (LRS): Very cost-efficient performance but, as of today, ZRS isnt supported; LRS only, so it fails the datacenter-outage requirement.

---

### Question 40

You have an Azure virtual machine named VM1 that hosts a 24×7 line-of-business application. VM1 currently uses the D4s v3 size, one managed disk, and one network interface.
You plan to make the following changes:
Change the size to D8s v3
Add a 500-GB managed disk
Add the Puppet Agent extension
Enable Desired State Configuration (DSC) Management
Which change will cause downtime for VM1?

**Options:**

- **A.** A. Change the size to D8s v3 ✅
- **B.** B. Add the 500-GB managed disk
- **C.** C. Add the Puppet Agent extension
- **D.** D. Enable Desired State Configuration Management
- **E.** E. Add a network security group rule
- **F.** F. Assign a new public IP address

**Correct answer:** A

**Explanation:**

Choice A is correct. Resizing a virtual machine in Azure requires the VM to be stopped (deallocated) and then re-provisioned onto hardware that supports the target size. During this resize process, the VM is unavailable, which results in temporary downtime for any hosted applications or services. Azure attempts an in-place resize first, but if the current cluster cannot accommodate the new size (common when moving to larger VM families like D8s v3), it performs a full deallocation/reallocation, inevitably interrupting service availability.
Attaching additional managed disks or installing extensions such as the Puppet Agent are online operationsthese are applied through the Azure VM Agent without stopping the VM. Similarly, enabling Desired State Configuration (DSC) Management is a configuration change managed via the guest agent and does not disrupt availability. Therefore, only the resize operation poses downtime risk.
Why the others are incorrect
B: You can attach new managed disks to a running VM dynamically. No restart or deallocation required.
C: VM extensions (like Puppet Agent) are installed live by the Azure VM Agent. No downtime.
D: Enabling DSC configures automation and state enforcement without restarting the VM.
E: Network security group changes apply dynamically at the fabric layerno VM restart.
F: Assigning a new public IP may cause a brief reconnection delay but not actual VM downtime.

---

### Question 41

Contoso needs analytics VMs in a subnet to access a Storage account over the Microsoft backbone while blocking access from the public internet. The security team refuses Private Link for now and wants to keep DNS unchanged. They also want the Storage account locked to only that subnet.
You need a VNet-native feature that keeps traffic on the Azure backbone and lets you allow-list a subnet at the Storage firewall without introducing Private Link. Which option should you choose?

**Options:**

- **A.** A. Private endpoint
- **B.** B. VNet peering
- **C.** C. Service endpoints ✅
- **D.** D. NAT Gateway

**Correct answer:** C

**Explanation:**

Service endpoints extend the subnets identity to supported PaaS services so traffic from that subnet to Microsoft.Storage uses the Azure backbone instead of the public internet. After enabling the endpoint on the subnet, you switch the Storage account to Selected networks and add a virtual network rule for that subneteffectively limiting access to that subnet while leaving DNS unchanged.
This approach is lightweight, requires no per-resource private IPs, and is well-suited when you need backbone paths and subnet-scoped allow-lists but cant adopt Private Link yet.
Why others are incorrect
A. Private endpoint would satisfy backbone/private access, but it conflicts with the no Private Link constraint and changes name resolution.
B. VNet peering connects VNets; it doesnt secure PaaS access from a subnet.
D. NAT Gateway gives static egress; it doesnt implement Storage-side allow-lists or backbone enforcement to PaaS.

---

### Question 42

Fabrikams data-science subnet can currently reach any Storage account via service endpoints. Compliance now mandates allowing only two specific Storage accounts and blocking all otherswithout deploying Private Link.
You need a subnet-level control that filters Storage traffic over service endpoints so only named accounts are reachable. Which option should you choose?

**Options:**

- **A.** A. Service endpoint policies ✅
- **B.** B. Trusted Microsoft services
- **C.** C. Private DNS zone
- **D.** D. IP network rules on the VM NICs

**Correct answer:** A

**Explanation:**

Service endpoint policies attach to a subnet and restrict which Storage account resource IDs can be accessed over the service endpoint. You list the approved accounts; connections to any other Storage account are deniedeven though the service endpoint is enabled. This is the precise control needed to stop data exfiltration to unapproved accounts while retaining the simplicity of service endpoints.
The policy complements (not replaces) Storage firewalls: keep the accounts on Selected networks with your VNet rules, and the policy prevents that subnet from reaching any unapproved Storage accounts elsewhere.
Why others are incorrect
B. Trusted Microsoft services is a Storage-side exception; it doesnt implement per-account allow-lists from your subnet.
C. Private DNS controls name resolution, not data-plane filtering to Storage accounts.
D. NIC-level IP rules arent how Azure enforces PaaS access; the restriction must be subnet ? service aware.

---

### Question 43

Contoso runs nightly maintenance every Saturday 22:0002:00 on resources in RG-App. During that window, alerts should be suppressed, but Sev0 incidents must still notify on-call. The ops team doesnt want to edit hundreds of existing alert rules.
You need to implement scheduled suppression for alerts scoped to RG-App, excluding Sev0, without touching each alert rule. Which option should you choose?

**Options:**

- **A.** A. Metric alert (dynamic threshold)
- **B.** B. Action group (disable during maintenance)
- **C.** C. Alert processing rule ✅
- **D.** D. Activity log alert

**Correct answer:** C

**Explanation:**

Choice C is correct. An alert processing rule can apply post-creation logic across many alerts: suppress notifications on a schedule, scope to a resource group, and filter by severity so Sev0 is excluded. Because it operates outside individual rules, you avoid editing each alert while still enforcing consistent behavior during maintenance windows.
Processing rules are evaluated after an alert is fired, so they can add, replace, remove, or suppress action groups based on scope, severity, monitor service, or tags. This makes them the right tool for fleet-wide behaviors like maintenance suppression and routing tweaks.
Why others are incorrect
A. Dynamic thresholds change when a metric fires, not whether its notifications are suppressed on a schedule.
B. Action groups are reusable notification sets, but they dont provide time-window suppression across rules.
D. Activity log alerts target control-plane events; they dont solve scheduled suppression for existing alert rules.

---

### Question 44

Fabrikam operates dozens of VNets, gateways, app gateways, and load balancers across two regions. Operations wants a single view of health, alerts, and key metrics across all network resources with no extra configuration, so they can quickly identify hotspots and drill down.
You need an aggregated network health view with drill-downs built on Azure Monitor workbooks, without enabling agents first. Which option should you choose?

**Options:**

- **A.** A. Storage account insights
- **B.** B. VM insights
- **C.** C. Network insights ✅
- **D.** D. Connection monitor

**Correct answer:** C

**Explanation:**

Choice C is correct. Network insights surfaces an at-a-glance health and performance view across Azure network resources (VNets, gateways, LB, App GW, etc.) and lets you drill into metrics and affected resourcesdelivered as an Insights workbook experience and available without additional configuration. Its designed to triage issues quickly and then pivot to the specific resources blade for deeper investigation.
From there, operators interpret patterns such as gateway utilization, load balancer data path health, and traffic anomalies across environments, accelerating detection of region- or service-level trends that wouldnt be obvious from individual resource charts.
Why others are incorrect
A. Storage account insights targets Storage performance/capacity (E2E/server latency, throttling) rather than network estate health.
B. VM insights is for guest performance/process visibility on compute, not network estate roll-ups.
D. Connection monitor runs targeted tests; its not an aggregated, all-resource health view.

---

### Question 45

Fabrikam is onboarding Azure Files across multiple storage accounts. They want a central policy to protect shares with both operational and vaulted recovery points, and to update retention later without re-protecting.
Problems / issues
Protect dozens of file shares across storage accounts.
Daily operational backups with 30-day retention; weekly vaulted backups kept for 12 weeks.
No agents or custom scripts; manage centrally.
If policy changes, future backups must follow the new schedule and existing points should retain appropriately.
Private Link isnt mandated; keep things simple.
You need a centrally managed configuration that defines schedule + retention for Azure Files and applies to many shares. Which option should you choose?

**Options:**

- **A.** A. Backup vault policy (Azure Files) ✅
- **B.** B. Recovery Services vault VM policy
- **C.** C. Storage lifecycle management (Blob tiering)
- **D.** D. Azure Automation snapshots (per share)

**Correct answer:** A

**Explanation:**

Choice A is correct. A Backup vault policy (Azure Files) defines when operational and vaulted recovery points are created and how long theyre retained, and the same policy can be applied to many shares across accounts. Its agentless and administered centrally (Backup Center / vault), so you avoid scripts. When you modify a policy, upcoming jobs use the new schedule, and retention for existing points aligns to the updated settings according to vault rules.
This approach keeps protection consistent across teams, enables at-a-glance compliance, and gives you simple day-2 changes (for example, increasing weekly vaulted retention) without re-configuring each file share.
Why others are incorrect
B. A VM policy targets IaaS VMs, not Azure Files.
C. Lifecycle management handles Blob tiering; it is not a backup/restore mechanism.
D. Runbooks require custom scheduling, tracking, and cleanup with no vault governance.

---

### Question 46

Fabrikam has a library of ARM JSON templates (main.json) and wants to standardize on Bicep going forward. The team needs a native command to convert JSON to Bicep so they can start refactoring modulesno manual rewrite.
You need to convert an ARM template (JSON) into a Bicep file using CLI. Which option should you choose?

**Options:**

- **A.** A. az bicep build
- **B.** B. az group export
- **C.** C. az bicep decompile ✅
- **D.** D. az deployment group create

**Correct answer:** C

**Explanation:**

az bicep decompile converts an ARM JSON template into a .bicep file so the team can adopt Bicep while keeping functional equivalence. After decompilation, its common to tidy parameters, symbols, and modules to align with Bicep best practices.
Why others are incorrect
A. az bicep build compiles Bicep ? ARM JSON, the opposite direction.
B. az group export exports ARM JSON from existing resources; it does not convert to Bicep.
D. az deployment group create deploys a template; it doesnt convert formats.

---

### Question 47

Fabrikam failed over to Australia Southeast during an outage. Australia East is healthy again, and they want to return production there with a controlled operation.
Problems / issues
Current production is running in the secondary region.
Need to reverse replication to the primary and switch back with minimal downtime.
Prefer a sequenced operation (app groups) using the same orchestration surface.
Keep NIC/subnet mappings consistent with the original design.
You need to start the process that enables a controlled return to the primary region. Which option should you choose first?

**Options:**

- **A.** A. Commit
- **B.** B. Planned failover (to primary)
- **C.** C. Stop replication
- **D.** D. Reprotect ✅

**Correct answer:** D

**Explanation:**

Reprotect reverses the replication direction so the current secondary becomes the source, and the original primary becomes the target. After the delta is synchronized, you can perform a planned failover back to primary (for a controlled cutback) and then Commit once validation passes. Using a recovery plan for both directions ensures the same start-up order and any automation you relied on during the initial failover.
Why others are incorrect
A. Commit finalizes a completed failover; it doesnt prepare replication for the return trip.
B. A planned failover back to primary should follow Reprotect so data is synchronized first.
C. Stop replication removes protection and complicates the path back.

---

### Question 48

Contoso has a hub/spoke topology. App VMs in Spoke-App must reach a Storage account in the same region over the Microsoft backbone, with no public internet access. DNS must remain unchanged. Private Link isnt permitted right now.
Requirements
Allow only the Spoke-App subnet to reach the Storage account
Keep traffic on the Azure backbone (no internet egress)
No Private Link; no DNS changes
On the storage account, which network access mode should you use to allow only the Spoke-App subnet while keeping traffic on the backbone?

**Options:**

- **A.** A. All networks
- **B.** B. Selected networks ✅
- **C.** C. Public network access: Disabled
- **D.** D. Allow trusted Microsoft services

**Correct answer:** B

**Explanation:**

Selected networks lets you lock the account to specific VNet/subnets via virtual network rules. When you enable a service endpoint from the subnet to Microsoft.Storage and add that subnet as an allow-listed rule, flows use the Azure backbone rather than the public internetand you dont change DNS. The public endpoint remains filtered so only your approved subnet (and any defined public IP ranges) can reach the account.
Why others are incorrect
A. All networks exposes the public endpoint broadly.
C. Public network access: Disabled enforces Private Endpoint only, which is disallowed here.
D. Trusted Microsoft services is a first-party bypass; it isnt a VNet/subnet allow-list.

---

### Question 49

Fabrikam is rolling out a data lake that must not be reachable over the public internet. Clients will connect through private endpoints from approved VNets. They want a single setting on the storage account to enforce private-only access.
Requirements
Enforce private-only data-plane access
Block all public endpoint usage
Keep using Private Endpoint and private DNS from approved VNets
Which single storage setting enforces private-only access and blocks the public endpoint entirely?

**Options:**

- **A.** A. Selected networks
- **B.** B. IP network rules (office IPs)
- **C.** C. Service endpoints
- **D.** D. Public network access: Disabled ✅

**Correct answer:** D

**Explanation:**

Public network access: Disabled removes the storage accounts public endpoint from use so all data-plane access must go through Private Endpoint. This guarantees private-only connectivity regardless of firewall/IP rules and aligns with strict no internet exposure requirements.
Why others are incorrect
A. Selected networks still leaves the public endpoint activejust filtered.
B. IP rules control who can hit the public endpoint; they dont remove it.
C. Service endpoints keep traffic on the backbone but still use the public endpoint path.

---

### Question 50

You have an Azure Storage account that contains a blob container named container1. The container currently has two stored access policies: Policy1 and Policy2.
Based on this configuration, complete the following statement:
The maximum number of additional stored access policies that you can create for container1 is ________.

**Options:**

- **A.** A. 0
- **B.** B. 1
- **C.** C. 3 ✅
- **D.** D. 5
- **E.** E. 6
- **F.** F. 10

**Correct answer:** C

**Explanation:**

Choice C is correct. Each Azure Storage container (or queue/table/file share) supports a maximum of five stored access policies. These policies are used to manage shared access signatures (SAS) centrally by defining constraints such as permissions and expiration. Because container1 already has two stored access policies defined, only three additional policies can be created before reaching the five-policy limit.
Stored access policies offer significant administrative advantagesthey allow you to revoke or modify multiple SAS tokens simultaneously without regenerating account keys. For example, if you issue SAS tokens linked to a policy and later remove or modify that policy, all dependent SAS tokens automatically become invalid or inherit the updated restrictions. This makes stored access policies crucial for secure and controlled access management in production environments.
Why the others are incorrect
A: 0 is incorrect; the limit hasnt been reached yet.
B: 1 is incorrect; theres room for more than one additional policy.
D: 5 is incorrect because the total limit (not additional) is five.
E &amp; F: 6 and 10 exceed Azures maximum supported number of stored access policies per container.

---

### Question 51

You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains virtual machines that have Remote Desktop enabled. Several users plan to work remotely and connect to the virtual machines from a home office.
You need to configure connectivity to the virtual machines to support a Point-to-Site (P2S) VPN connection for each user.
Which three actions should you perform in sequence?
Actions pool:
Create a local network gateway.
Add a public IP address to each virtual machine.
Create a new subnet in VNet1.
Add an IP address pool.
Deploy a load balancer to VNet1.
Create a VPN gateway.

**Options:**

- **A.** A. Create a VPN gateway ? Add an IP address pool ? Create a new subnet in VNet1
- **B.** B. Create a local network gateway ? Create a VPN gateway ? Add an IP address pool
- **C.** C. Create a new subnet in VNet1 ? Add an IP address pool ? Create a VPN gateway
- **D.** D. Create a new subnet in VNet1 ? Create a VPN gateway ? Add an IP address pool ✅
- **E.** E. Add a public IP address to each virtual machine ? Create a VPN gateway ? Add an IP address pool
- **F.** F. Create a new subnet in VNet1 ? Deploy a load balancer to VNet1 ? Create a VPN gateway

**Correct answer:** D

**Explanation:**

For P2S, you must first create the GatewaySubnet inside the VNet. (Create a new subnet in VNet1.)
Then deploy the VPN gateway into that GatewaySubnet. (Create a VPN gateway.)
Finally, configure P2S settings on the gateway, including the client address pool from which VPN clients receive IPs. (Add an IP address pool.)
Why the others are incorrect
A/C: Wrong orderGatewaySubnet must exist before the VPN gateway; the client address pool is configured on the gateway (after it exists).
B: Local network gateway is for site-to-site (on-prem representations), not required for P2S.
E: P2S does not require per-VM public IPs; users connect over the VPN to private addresses.
F: A load balancer is irrelevant to enabling P2S access.

---

### Question 52

You plan to use Azure Network Watcher to perform the following task:
Identify a security rule that prevents a network packet from reaching an Azure virtual machine (VM).
Which feature should you use for this task?

**Options:**

- **A.** A. Next hop
- **B.** B. IP flow verify ✅
- **C.** C. Packet capture
- **D.** D. Traffic Analytics
- **E.** E. Connection troubleshoot
- **F.** F. Network performance monitor

**Correct answer:** B

**Explanation:**

Choice B is correct. The IP flow verify feature in Azure Network Watcher is specifically designed to test whether traffic from or to a virtual machine is allowed or denied based on the effective network security group (NSG) rules applied to the VMs network interface. It simulates the sending of a packet and determines:
Whether the packet is allowed or denied, and
Which NSG rule (name, priority, and direction) is responsible for the decision.
This tool is particularly useful for diagnosing connectivity problems and identifying which security rule in an NSG or application security group is preventing or allowing a connection.
Why the others are incorrect
A: Next hop identifies the route that traffic takes (e.g., Internet, virtual network, virtual appliance) but does not analyze NSG rules.
C: Packet capture records network packets for analysis but does not reveal which NSG rule affects them.
D: Traffic Analytics provides aggregated insights and trends using NSG flow logs, not per-packet rule evaluation.
E: Connection troubleshoot checks connectivity between two endpoints, but it doesnt pinpoint the specific NSG rule blocking traffic.
F: Network performance monitor measures latency and packet loss between network nodes, not NSG filtering decisions.

---

### Question 53

A new resource group named RG-Finance was created by Arjun, who has the Owner role at the subscription level. He notices that none of the resources inside inherit the subscription-level tags. Arjun wants to apply consistent tags automatically whenever new resources are created.
Whats the best solution to ensure all future resources in RG-Finance receive the correct tags automatically?

**Options:**

- **A.** A. Manually apply tags to each resource after creation
- **B.** B. Use an Azure Policy with the inherit tags from resource group effect ✅
- **C.** C. Enable tag inheritance in the Azure Resource Manager (ARM)
- **D.** D. Assign the Tag Contributor role at the resource level

**Correct answer:** B

**Explanation:**

Azure Policy can automatically apply or inherit tags from a parent scope, such as a resource group. The inherit tags from resource group policy ensures consistency and compliance across all deployed resources, reducing manual errors.
Why the others are incorrect:
A: Manual tagging is prone to human error and doesnt scale.
C: Azure Resource Manager doesnt natively support automatic tag inheritance without Policy.
D: The Tag Contributor role allows editing tags but doesnt automate their creation or inheritance.

---

### Question 54

Contoso is migrating large media content and logs between storage accounts in the same tenant. The operations team needs reliable, high-performance transfers that preserve metadata and can resume after interruptions. Non-technical support staff need an easy GUI for ad-hoc browsing, small uploads/downloads, and setting container access properties.
You must copy 25 TB of large blobs (100+ GB files) from storage-src to storage-dest, preserve blob metadata and MD5 hashes, and be able to resume if a transfer breaks. You need the fastest, scriptable, production-ready tool to run from a VM.
Which tool should you use?

**Options:**

- **A.** A. AzCopy ✅
- **B.** B. Azure Storage Explorer
- **C.** C. Azure Portal upload blade
- **D.** D. Azure Data Factory

**Correct answer:** A

**Explanation:**

AzCopy is a command-line, high-performance tool built for large-scale blob transfers. It supports automatic concurrency tuning, checksum/MD5 verification, metadata preservation, and resume capability for interrupted copies (/V and –overwrite/sync options). Its scriptable for automation on a VM or runbook and is the recommended tool when throughput, reliability, and resumability matter for terabyte-scale moves.
Why the others are incorrect:
B: Storage Explorer is GUI-focused and convenient for small ad-hoc tasks, but its too slow and manual for multi-terabyte bulk transfers.
C: The portal upload is intended for small uploads; it lacks advanced resume, performance, and scripting features.
D: Data Factory can move data at scale and integrate pipelines, but its heavier to provision and orchestrate for a one-time, checksum-preserving lift-and-shift compared with AzCopys simplicity and speed.

---

### Question 55

You have an Azure subscription and plan to deploy a new storage account.
You must configure encryption for the account to meet the following requirements:
Use a customer-managed key (CMK) stored in Azure Key Vault.
Use the maximum supported bit length for the encryption key.
Which bit length should you use?

**Options:**

- **A.** A. 2048
- **B.** B. 3072
- **C.** C. 4096 ✅
- **D.** D. 8192
- **E.** E. 1024
- **F.** F. 512

**Correct answer:** C

**Explanation:**

Choice C is correct. When you configure Azure Storage encryption with a customer-managed key, Azure uses Azure Key Vault or Azure Key Vault Managed HSM to store the encryption key. The supported key types are RSA and RSA-HSM, with key sizes of 2048, 3072, or 4096 bits. The maximum supported bit length for an RSA key in this scenario is 4096 bits, which provides the strongest level of encryption allowed for customer-managed keys in Azure Storage.
Using a 4096-bit RSA key enhances protection against brute-force attacks by increasing the computational complexity required to derive the private key. However, larger key sizes also result in slightly higher latency during encryption/decryption operations, though this is typically negligible in most storage use cases. Azure Key Vault enforces this 4096-bit limit for performance and compatibility reasons across its encryption-integrated services, including Storage, SQL Database, and Azure Disk Encryption.
Why the others are incorrect
A: 2048 bits is secure and commonly used, but it doesnt meet the requirement for maximum supported bit length.
B: 3072 bits is stronger than 2048 but still below the maximum supported size.
D: 8192 bits is not supported by Azure Key Vault.
E and F: 1024-bit and 512-bit keys are deprecated and insecure, and cannot be used for CMK in Azure services.

---

### Question 56

You create an Azure Storage account named contosostorage and plan to create a file share named data.
Users need to map a network drive to the data file share from their home computers running Windows 10.
Which outbound port must be open between the home computers and the Azure file share?

**Options:**

- **A.** A. 80
- **B.** B. 443
- **C.** C. 445 ✅
- **D.** D. 3389
- **E.** E. 1433
- **F.** F. 22

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure Files uses the SMB (Server Message Block) protocol, which communicates over TCP port 445 for both authentication and data transfer. When users map a drive to an Azure file share (for example, \\contosostorage.file.core.windows.net\data), Windows attempts to connect to Azure Storage over this port. For the mapping to succeed, outbound TCP port 445 must be open on the clients network, and the clients ISP or corporate firewall must not block this port.
If port 445 is blocked (which is common on many residential ISPs), drive mapping will fail, but users can still access the share using Azure File Sync or via the REST API over HTTPS (port 443). Therefore, ensuring TCP 445 is open and reachable is a critical prerequisite for SMB-based access to Azure file shares.
Why the others are incorrect
A: Port 80 (HTTP) is not used for SMB connections; its used for unencrypted web traffic.
B: Port 443 (HTTPS) is used for REST API and portal access, not SMB file sharing.
D: Port 3389 (RDP) is used for remote desktop connections, not file shares.
E: Port 1433 is used for SQL Server database connections.
F: Port 22 is used for SSH, not SMB.

---

### Question 57

You have an Azure subscription named Subscription1 that contains a resource group named RG1 with the following properties:
Region: West US
Tag: “tag1“: “value1“
You assign an Azure Policy named Policy1 to Subscription1 using these settings:
Exclusions: None
Policy definition: Append a tag and its value to resources
Assignment name: Policy1
Parameters:
Tag name: tag2
Tag value: value2
After assigning the policy, you create a storage account with the following configuration:
Name: storage1
Region: West US
Resource group: RG1
Tags: “tag3“: “value3“
Which tags are assigned to storage1?

**Options:**

- **A.** A. “tag3“: “value3“ only
- **B.** B. “tag1“: “value1“ and “tag3“: “value3“ only
- **C.** C. “tag2“: “value2“ and “tag3“: “value3“ only ✅
- **D.** D. “tag1“: “value1“, “tag2“: “value2“, and “tag3“: “value3“
- **E.** E. “tag2“: “value2“ only
- **F.** F. “tag1“: “value1“ only

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure tags are not inherited automatically from a resource group or subscription. This means that when you create a new resourcesuch as storage1it does not automatically receive the tag “tag1“: “value1“ from RG1.
However, Policy1 was assigned at the subscription level with a definition type of “Append a tag and its value to resources“. Because the policy has no exclusions and is applied to all resources in Subscription1, it automatically appends the defined tag (“tag2“: “value2“) to any resource created after the policy is in effect.
When storage1 was created, it already included “tag3“: “value3“ in its configuration. The policy then appended “tag2“: “value2“, resulting in the following tags:
“tag2“: “value2“  
“tag3“: “value3“
Final tag set on storage1:
“tag2“: “value2“ (added by policy)
“tag3“: “value3“ (defined during creation)
Why the others are incorrect
A: Incorrect  “tag3“: “value3“ is present, but the policy appends “tag2“: “value2“.
B: Incorrect  resource group tags (“tag1“: “value1“) are not inherited automatically.
D: Incorrect  “tag1“: “value1“ from RG1 does not apply to new resources.
E: Incorrect  “tag3“: “value3“ is user-defined and remains.
F: Incorrect  no inheritance of RG1s tag.

---

### Question 58

Fabrikam wants a reusable notification and automation set that can be attached to multiple alert rules. Requirements: email to the Operations DL, SMS/voice to the on-call phone, and a webhook to the incident systemdefined once and referenced everywhere.
You need to define a reusable notification/automation payload and attach it to alert rules across subscriptions. Which option should you choose?

**Options:**

- **A.** A. Action group ✅
- **B.** B. Log search alert
- **C.** C. Scheduled query rule
- **D.** D. Alert processing rule

**Correct answer:** A

**Explanation:**

Choice A is correct. An action group encapsulates notifications and actionsemail, SMS, voice, webhook, Logic App, Function, ITSM, and moreso you define them once and reference the group from any alert rule. This centralizes recipients and integrations, supports testing of receivers, and is globally resilient across regions.
You can create multiple action groups (for example, Sev0 with phone/SMS, Sev2 email-only) and attach the appropriate group per rule. If you later need fleet-wide routing changes without editing rules, you can layer alert processing rules to add or replace action groups dynamically.
Why others are incorrect
B. A log search alert is a rule type, not a reusable notification definition.
C. A scheduled query rule defines log-based conditions, not cross-rule notifications.
D. Processing rules modify/suppress after an alert fires; they dont replace the reusable definition of recipients/actions.

---

### Question 59

Refer to Northwind Traders (I) Case Study : AZ-104:
https://docs.google.com/document/d/1epkoAw5-c-Dg62nsP1g5j7KMVQZUnQNaeU21ZD-K0Z0/edit?usp=sharing
Northwind must ensure that only the Pilot group can join devices to Microsoft Entra. At the moment of device registration/join, users must complete MFA (mobile phone verification is acceptable). You want the simplest, supportable configuration.
Which TWO configurations should you implement?

**Options:**

- **A.** A. Turn on Security defaults for the tenant
- **B.** B. In Entra ID > Devices, set Users may join devices to Azure AD = Selected and choose Pilot ✅
- **C.** C. Create a Conditional Access policy targeting User actions: Register or join devices and require MFA ✅
- **D.** D. Assign the Device Enrollment Manager role to the Pilot group

**Correct answer:** B, C

**Explanation:**

Choice B and C are correct. The device setting scopes who can perform Azure AD device joinselecting Pilot enforces the only Pilot can join devices requirement. A Conditional Access policy with the User actions: Register or join devices control forces MFA at the exact time of join, meeting the mobile-phone verification requirement without burdening other sign-ins.
Why the others are incorrect
A: Security defaults apply broad protections but dont narrowly scope device join to a specific group or enforce MFA specifically at join.
D: Device Enrollment Manager is an Intune role for bulk enrollment scenarios and does not control Entra device join or MFA at join.

---

### Question 60

Refer to Northwind Traders (I) Case Study : AZ-104:
https://docs.google.com/document/d/1epkoAw5-c-Dg62nsP1g5j7KMVQZUnQNaeU21ZD-K0Z0/edit?usp=sharing
Blueprint files move to Azure Blob Storage. You must provide point-in-time restore for accidental delete/overwrite using an Azure-native, low-overhead solution that complements lifecycle tiering (Cool/Archive).
Which destination should you configure to protect the blobs?

**Options:**

- **A.** A. Recovery Services vault
- **B.** B. Lifecycle only (Cool/Archive); rely on rehydration for restores
- **C.** C. Backup vault ✅
- **D.** D. Azure Site Recovery

**Correct answer:** C

**Explanation:**

Choice C is correct. Operational backup for Azure Blobs uses a Backup vault to provide point-in-time restore within the storage accountno agents or custom jobs. It integrates cleanly with lifecycle policies so you can optimize cost (Cool/Archive) while still recovering from accidental deletion or overwrite.
Why the others are incorrect
A: Recovery Services vault protects workloads like VMs/Azure Files/SQL in VMs, not Blob containers.
B: Lifecycle tiers optimize cost and retention but dont offer operational PITR; Archive requires rehydration and doesnt replace backup.
D: Azure Site Recovery is for VM/workload replication/DR, not Blob backup/restore.

---
