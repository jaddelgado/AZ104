# Practice Set 20

Source: [https://skillcertpro.com/az-104-exam-questions/20/](https://skillcertpro.com/az-104-exam-questions/20/)
Total questions: 60

---

### Question 1

Scenario
A VM intermittently fails to reach a storage account over TCP 443. The NIC has an NSG; the subnet also has an NSG. You must see the full, merged rule set applied to the NIC (including subnet NSG and defaults) to understand precedence before you change anything.
Proposed solution
Use Network Watcher  IP flow verify on the VMs NIC for destination Storage FQDN:443 and inspect the result.
Does the proposed solution meet the goal?

**Options:**

- **A.** Yes / No
- **B.** Yes
- **C.** No ✅

**Correct answer:** C

**Explanation:**

IP flow verify tests a single 5-tuple and returns allow/deny plus the matching rule. Its great to confirm whether a specific flow is blocked and by which rule, but it does not list the complete effective rule set across subnet + NIC NSGs and defaults. To review the entire merged policy, use Network Watcher  Effective security rules, which enumerates all applicable rules and their final precedence as applied to the NIC.
Why the other option is incorrect
Yes: Assumes IP flow verify presents the whole ruleset. It doesnt; it only evaluates the specified flow. Use Effective security rules for full policy inspection.

---

### Question 2

Compliance mandates that Sales users automatically receive Teams Phone and Defender for Office plans upon joining the Sales department, and lose them if they transfer. You want automatic apply/remove, minimal admin touch, and clear error surfaces when youre out of seats.
To assign and remove licenses based on group membership, configure __________ on a licensing group and scope Sales via a dynamic rule.

**Options:**

- **A.** A. Access packages
- **B.** B. Entitlement management policy
- **C.** C. Group-based licensing ✅
- **D.** D. Per-user direct assignment

**Correct answer:** C

**Explanation:**

Choice C is correct. Group-based licensing evaluates license assignment at the group level and applies/removes service plans to each member automatically as membership changes (for example, a dynamic Sales group). This centralizes licensing logic, supports service plan selection, and raises assignment errors (e.g., no available seats, conflicting plans) in a single place. Removal is just as automatic, ensuring deprovisioning on transfer without manual cleanupcritical for compliance and cost control.
Why the other options are incorrect
A: Access packages bundle resources with workflows; theyre not the core licensing engine for auto apply/remove by attribute.
B: Entitlement management policies govern lifecycle for packages, not license plan assignment at scale.
D: Per-user assignment is manual, error-prone, and wont auto-remove when users leave Sales.

---

### Question 3

Your AppOps team must start/stop/redeploy VMs, reset local admin passwords, and attach disks, but must not modify VNets, load balancers, or storage accounts. You want a single built-in role that matches least privilege for compute management.
To let AppOps manage VMs without granting network or storage rights, assign __________ at the appropriate scope.

**Options:**

- **A.** A. Owner
- **B.** B. Virtual Machine Contributor ✅
- **C.** C. Contributor
- **D.** D. Reader

**Correct answer:** B

**Explanation:**

Choice B is correct. Virtual Machine Contributor grants broad compute-plane control (create/update/delete VMs, restart, redeploy, reset password/SSH, attach existing disks) while excluding network and storage resource management. It hits the least-privilege target for VM operations without granting permissions over VNets, load balancers, or storage accounts, which should remain with their respective owners/roles.
Why the other options are incorrect
A: Owner includes full control, including RBAC managementfar beyond the requirement.
C: Contributor grants write across all resource types in scope, including networking and storagetoo broad.
D: Reader is view-only; it cant operate VMs.

---

### Question 4

Youre reviewing a Bicep snippet that adds a subnet to an existing VNet without recreating the VNet. The author wrote:
param vnetName string
resource vnet ‘Microsoft.Network/virtualNetworks@2023-09-01‘ existing = {
  name: vnetName
}
resource app ‘Microsoft.Network/virtualNetworks/subnets@2023-09-01‘ = {
  name: ‘${vnet.name}/app‘
  properties: { addressPrefix: ‘10.20.1.0/24‘ }
}
In this snippet, which construct ensures the VNet is treated as pre-existing so the deployment creates only the subnet?

**Options:**

- **A.** A. existing ✅
- **B.** B. parent
- **C.** C. scope
- **D.** D. module

**Correct answer:** A

**Explanation:**

Choice A is correct. In Bicep, existing on a resource declaration tells the engine to reference an already-deployed resource rather than create/modify it. The child declaration (Microsoft.Network/virtualNetworks/subnets) then targets that existing parent, so the deployment creates just the subnet while leaving the VNet untouched. This pattern is central to safely augmenting live environments.
Why the other options are incorrect
B: parent wires hierarchy for a child resource, but it doesnt mark the parent as pre-existing by itself.
C: scope controls where a module/extension deploys; it doesnt switch a resource to reference mode.
D: module composes templates; it doesnt indicate resource existence.

---

### Question 5

You must stream platform logs and metrics from a storage account and an App Service into a Log Analytics workspace and Event Hub, with category-level selection and no agents on the PaaS services.
To route platform logs/metrics to a workspace and Event Hub, create a __________ on each resource and select the categories and destinations.

**Options:**

- **A.** A. Data collection rule
- **B.** B. Diagnostic setting ✅
- **C.** C. Agent configuration
- **D.** D. Workbook

**Correct answer:** B

**Explanation:**

Choice B is correct. A diagnostic setting on a resource is the platform pipeline for platform logs and (multi-dimensional) metrics. You can send data to one or more destinations (Log Analytics, Storage, Event Hub), choose log categories (e.g., AppServiceHTTPLogs, StorageRead), and enable metric export as time-series. This is agentless for PaaS resources and supports multiple settings per resource, so you can split destinations (e.g., ops workspace + SIEM Event Hub) without redeploying the service.
Why the other options are incorrect
A: Data collection rules govern agent-based VM/AMA data, not PaaS platform logs.
C: Theres no agent configuration for these PaaS signals; its handled by diagnostic settings.
D: Workbooks visualize data; they dont configure ingestion.

---

### Question 6

A two-VM app (web + API) in Australia East must replicate to Australia Southeast. During a failover you need app-consistent points, multi-VM consistency, no public IPs in target, and pre-created target networking with subnet/NSG mapping. You also want a Recovery Plan for ordered failover and runbooks.
Which approach fits?

**Options:**

- **A.** A. Nightly VM backups with GRS storage
- **B.** B. Export templates and redeploy in the target region
- **C.** C. In a Recovery Services vault, enable replication to AU SE, set a replication policy (frequency/retention), map VNets/subnets, enable multi-VM consistency, and create a Recovery Plan ✅
- **D.** D. Snapshot managed disks and copy to the target region

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure Site Recovery for Azure VMs is configured from a Recovery Services vault: you enable replication per VM (choosing the target region, resource group, disks, and compute), define a replication policy (RPO, app-consistent snapshot cadence, retention), and map source to target VNets/subnets so NICs land on private subnets with the right NSGs. For multi-tier apps, enable multi-VM consistency to capture crash/app-consistent points across VMs, and use a Recovery Plan to orchestrate startup order, manual actions, and automation runbooks. This delivers repeatable, low-touch DR aligned to your networking and security model.
Why the other options are incorrect
A: Backups provide data recovery, not near-zero RTO failover orchestration, network mapping, or continuous replication.
B: Template redeploy is manual, slow, and error-prone; it lacks RPO, recovery points, and push-button failover.
D: Disk snapshots/copies miss orchestration, app consistency, and automated NIC/network binding.

---

### Question 7

Contoso is launching Project Aquila in Australia East. Dev identities must be cloud-only (no sync) and provisioned today. Blob access must use data-plane RBAC only (no keys/SAS) and be revocable by removing users from one group. Build agents egress via NAT Gateway (dynamic IP), so public IP allowlists are not viable.
Environment
Storage: GPv2 (Blob), private endpoints, Australia East
Identity: Cloud-only users, Entra ID
Access control: Data-plane RBAC only; no keys/SAS
Network: Dynamic egress (NAT Gateway)
You must onboard 50 developers and grant least-privilege blob access with a single change point. Scope must be the storage account; no keys/SAS; no on-prem sync. Which approach should you use?

**Options:**

- **A.** A. M365 group as Owner at the resource group; share the account keys.
- **B.** B. Cloud-only users; security group; assign Storage Blob Data Contributor at the storage account; no keys/SAS. ✅
- **C.** C. Sync via AAD Connect; security group; assign Contributor at subscription scope.
- **D.** D. Per-user Storage Account Contributor at the storage account; rotate keys.

**Correct answer:** B

**Explanation:**

Choice B is correct. You satisfy no sync by creating cloud-only identities. A single security group gives one control point for access grant/revoke and supports clean offboarding. Assigning Storage Blob Data Contributor is a data-plane role that grants blob read/write/delete without management-plane privileges; scoping it at the storage account keeps blast radius minimal while inheriting to containers. Eliminating keys/SAS removes shared secret distribution, rotation debt, and audit blind spots, and works regardless of NAT-GW dynamic egress. This is precisely the RBAC-first model Microsoft recommends for Storage data operations.
Why the others are incorrect
A: Owner at RG is full control-plane access across many resources (gross over-privilege). Sharing account keys bypasses Entra ID, breaks least privilege, complicates rotation, and weakens auditing.
C: Violates no sync. Contributor at subscription is massively over-scoped and grants management actions unrelated to blob data needs.
D: Per-user role assignments explode admin overhead and still grant control-plane rights; key rotation is irrelevant when keys/SAS are disallowed and RBAC is required.

---

### Question 8

A partner (Fabrikam) needs read-only access for 60 days to a single blob container in West Europe. Partner egress is a fixed public IP (203.0.113.24/32). Your tenant must restrict invitations to fabrikam.com and only allow guest sign-ins from that IP. SAS is disallowed by policy. Access must be least-privilege and time-governed.
Requirements
External collaboration: allow fabrikam.com only
IP restriction for guests: enforce 203.0.113.24/32 (Named location + CA)
Scope: container, data-plane read-only
Governance: access review (60-day window)
No SAS
Which configuration meets all requirements?

**Options:**

- **A.** A. Storage firewall rule; Reader at resource group; share SAS.
- **B.** B. Cross-tenant sync; Reader at subscription; user-delegation SAS.
- **C.** C. Allow all domains; rely on private endpoint; Storage Account Contributor at account.
- **D.** D. Restrict invites to fabrikam.com; Named location 203.0.113.24/32; Conditional Access for Guests (require sign-in from named location); guest group with Storage Blob Data Reader at the container; schedule an access review. ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. External collaboration settings block non-fabrikam domains at invite time, ensuring only approved tenants can be added. A Named location matching the partners /32 combined with a Conditional Access policy scoped to guest users forces token issuance only when sign-ins originate from the partner IPthis handles the network condition that RBAC alone cannot enforce. Assigning Storage Blob Data Reader at the container level grants least-privilege, data-plane read without control-plane rights or writes/deletes. An Access Review automates recertification/removal at 60 days, keeping entitlements time-bound. The design completely avoids SAS and leverages Entra ID tokens + RBAC, meeting the policy constraint.
Why the others are incorrect
A: Uses SAS (explicitly disallowed); RG Reader is control-plane and mis-scoped; firewall rules dont restrict guest identity or source IP alone.
B: Subscription-level Reader is far too broad; still relies on SAS; cross-tenant sync doesnt enforce IP requirements.
C: Opens invites to any domain; account-level Contributor is excessive (write/delete/control-plane); private endpoints dont validate guest identity or partner IP by themselves.

---

### Question 9

Scenario
You must continuously verify TCP 443 connectivity from a VM in SpokeA to a private endpoint in Hub and surface results in a Log Analytics workspace. Use Azure-native tooling only.
Requirements
Region-scoped Network Watcher enabled
Connection Monitor with test groups, endpoints, and a TCP 443 test configuration (1-minute frequency)
Results stored in a Log Analytics workspace
Which sequence meets the requirements?

**Options:**

- **A.** A.Enable Network Watcher in any regionStart packet capture on private endpointExport capture to Storage
- **B.** B.Enable Network Watcher in the target regionCreate Connection Monitor (workspace-based): add endpoints (SpokeA VM NIC, Hub PE FQDN/IP), test config TCP:443, frequency 1mLink to Log Analytics workspace; review test groups and results ✅
- **C.** C.Create NSG flow logsEnable Traffic AnalyticsInfer health from deny count
- **D.** D.Run Connection Troubleshoot ad-hocScreenshot outputRe-run hourly

**Correct answer:** B

**Explanation:**

The modern Connection Monitor (workspace-based) continuously tests endpoint reachability with configurable test groups and test configurations (e.g., TCP 443 every 1 minute). It requires Network Watcher in the same region and can write results to a Log Analytics workspace for dashboards and alerts. This provides durable health telemetry between the SpokeA VM and the Hub private endpoint without custom agents/scripts.
Why the other options are incorrect
A: You cannot packet-capture on a private endpoint (service-managed). This doesnt produce continuous health telemetry.
C: NSG flow logs/Traffic Analytics show flows but dont actively test endpoint reachability or app-level health on a fixed schedule.
D: Connection troubleshoot is ad-hoc; it doesnt generate continuous monitoring/records or workspace-based history.

---

### Question 10

Scenario
A data lake team wants to protect against accidental overwrites and deletions of blobs and also guard against entire container deletion. They want a 30-day recovery window and must be able to self-restore without backup.
Which THREE actions together meet the goal?

**Options:**

- **A.** A. Enable Blob soft delete (30 days) ✅
- **B.** B. Enable Container soft delete (30 days) ✅
- **C.** C. Enable Blob versioning ✅
- **D.** D. Enable Change feed
- **E.** E. Enable Immutable (time-based) policies on the container
- **F.** F. Set delete retention to 0 days to minimize cost

**Correct answer:** A, B, C

**Explanation:**

To survive deletes and overwrites at the blob level, you need Blob soft delete and Blob versioning. Blob soft delete preserves deleted data for a configured retention window (e.g., 30 days), enabling self-service undeletion; versioning retains prior versions, allowing recovery from accidental overwrites. To protect against container-level deletion, you must enable Container soft delete, which keeps the container and its content recoverable within the same retention period. The trio (A+B+C) provides comprehensive, in-place protection without requiring backups or external tooling.
Why the other options are incorrect
D: Change feed records events for downstream processing/audit but doesnt make data recoverable by itself.
E: Immutability (WORM) locks data against changes/deletes; its for compliance retention, not general oops recovery, and would block legitimate modification workflows.
F: A 0-day retention disables soft delete protection and defeats the recovery requirement.

---

### Question 11

Scenario
Prod resources in rg-prod must be protected from accidental deletion while allowing day-to-day updates (scale, extension installs, backups). Teams must keep operating without change windows.
Proposed solution
Apply a ReadOnly lock at the rg-prod scope.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

Choice No is correct. ReadOnly locks block all write operations (PUT/PATCH/DELETE). That prevents scaling, extension updates, VM agent changes, Policy remediation, and many backup/restore tasksviolating the need to keep operations running. To protect against accidental deletes while permitting writes, use a CanNotDelete lock at the required scope (resource or RG). CanNotDelete prevents deletion but still allows updates, matching the operational requirement. If only specific resources need protection (e.g., vnet/shared kv), apply the lock at resource scope to minimize blast radius; otherwise use RG scope for broad coverage.
Why Yes is incorrect
A ReadOnly lock is overly restrictive for continuous operations. It blocks legitimate write workflows (autoscale, extension deployments, backup jobs) and becomes a friction point that teams will attempt to bypass, undermining governance.

---

### Question 12

Scenario
You need to scale a standalone production VM from Standard_D4s_v3 to Standard_D8s_v5 in the same region with minimal downtime. The VM uses Premium SSD and accelerated networking; the target size supports accelerated networking. You want the highest chance of a live resize but are prepared for a stop/deallocate if the target isnt available on the current hardware cluster.
Which TWO actions should you take?

**Options:**

- **A.** A. Detach the NIC to disable accelerated networking before resizing
- **B.** B. Attempt an in-place Resize while the VM is running; if unavailable on the current cluster, stop/deallocate then resize ✅
- **C.** C. Convert managed disks to unmanaged disks for flexibility
- **D.** D. Move the VM to a different zone first, then resize
- **E.** E. Verify quota for the target vCPU family/region and request increases if needed ✅
- **F.** F. Convert to a VM Scale Set (Uniform) to unlock more sizes

**Correct answer:** B, E

**Explanation:**

A live resize is possible only when the target size exists on the VMs current hardware cluster; otherwise you must stop/deallocate and try again. Operationally, the right pattern is: try Resize while running; if the portal/CLI reports the size isnt available, stop/deallocate and resize (then start). In parallel, ensure you have enough quota for the target vCPU family/region, or the resize will fail regardless of capacity. Because the target size supports accelerated networking, no NIC change is required.
Why the other options are incorrect
A: Disabling accelerated networking isnt necessary when the target supports it; detaching NICs is disruptive.
C: Unmanaged disks are legacy and dont help with resizing.
D: Zone moves are unrelated and introduce downtime/complexity; they dont guarantee size availability.
F: Converting to a scale set is a large architectural change and unnecessary for resizing a single VM.

---

### Question 13

Hybrid tenant (on-prem AD + Entra ID). SSPR is required for a pilot group only, with password writeback to on-prem. Two methods must be enforced (Authenticator + phone). Egress is SASE with dynamic IPs, so static IP allowlists for the reset portal arent reliable. Past incidents were caused by unhealthy password writeback despite SSPR being enabled.
Key constraints
Scope: Selected group (pilot)
Methods: Exactly two (Authenticator + phone)
Hybrid: Password writeback required; health must be monitored
Network: No dependency on static IP allowlists
Registration: Combined security info to pre-enroll methods
Select TWO actions that together meet all requirements.

**Options:**

- **A.** A. Enable SSPR for Selected group; enable Password writeback in Azure AD Connect; require two methods; enable combined registration. ✅
- **B.** B. Enable SSPR for All users; enforce CA IP allowlist; require one method.
- **C.** C. Configure Authentication methods policy (Authenticator + phone, two methods); enforce combined registration; verify AAD Connect password writeback agent health/alerts. ✅
- **D.** D. Keep SSPR cloud-only (no writeback); rely on MFA to change on-prem passwords.
- **E.** E. Require FIDO2 only; disable phone methods; scope to pilot group.
- **F.** F. Use per-user helpdesk resets; disable self-service; run periodic password sync.

**Correct answer:** A, C

**Explanation:**

Choice A is correct. Scoping SSPR to a Selected group preserves the pilot boundary. Enabling password writeback in Azure AD Connect is the only way cloud resets update on-prem AD accounts; without it, resets dont reach the domain controllers. Requiring two methods enforces the security requirement and prevents single-factor resets. Combined registration ensures users enroll both methods ahead of time, eliminating not registered failures at the moment of need.
Choice C is correct. The Authentication methods policy is where you actually choose which factors are allowed and how many are required; specifying Authenticator + phone and two methods enforces the exact pattern. Combined registration streamlines collection and improves coverage. Proactive monitoring of the password writeback agent (health/alerts) addresses the prior outage root causeSSPR can be enabled but will fail if the writeback pipeline is unhealthy. None of this relies on static IP allowlists, which are brittle in SASE environments.
Why the others are incorrect
B: Breaks pilot scope (All users), weakens assurance (one method), and IP allowlists dont reliably control access to the reset portal.
D: No writeback means on-prem passwords stay unchanged; MFA isnt a password reset.
E: Conflicts with the mandated method pair; reduces recoverability and user reach.
F: Disables self-service and reverts to helpdesk processes; password sync ? writeback.

---

### Question 14

Scenario
A regulated workload now requires customer-managed keys (CMK) and double encryption. Your existing StorageV2 account currently uses Microsoft-managed keys. Auditors require CMK via Key Vault (with purge protection) and infrastructure encryption (double encryption) for all data, with minimal downtime.
Proposed solution
On the existing storage account, switch to CMK (Key Vault) and enable infrastructure encryption on the account.
Does this meet the goal?

**Options:**

- **A.** Yes
- **B.** No ✅

**Correct answer:** B

**Explanation:**

You can switch an existing account to CMK by granting a managed identity the appropriate Key Vault permissions and updating the account to use that keythis satisfies the CMK portion. However, infrastructure encryption (the second layer for double encryption) must be enabled at account creation or when creating a new encryption scope; it cannot be added later to an already-created account object. To achieve double encryption now, create a new encryption scope with infrastructure encryption enabled and place/migrate data under that scope (or provision a new account with infrastructure encryption and migrate).
Why the other option is incorrect
Yes: Assumes you can enable infrastructure encryption after the account exists; that setting isnt retrofittable at the account level. You must enable it during creation (account or scope).

---

### Question 15

Scenario
Contosos line-of-business app runs on Windows Server VMs in a single VNet/subnet in Australia East. The app needs a low-latency SMB share for user profiles and application data, enforced with domain-based NTFS ACLs, and reachable privately from that subnet only. Security requires Kerberos/AD-based access (no shared keys in code), snapshots for recovery, and private endpointonly network access (no public IP allowlists). Operations asks for a predictable performance tier with minimal jitter.
Which configuration best meets the requirements?

**Options:**

- **A.** A. GPv2 account; standard file share; public endpoint; SAS auth
- **B.** B. FileStorage (Premium); SMB file share; private endpoint; AD DS/Entra ID Kerberos; NTFS ACLs ✅
- **C.** C. Blob container (NFS v3); Data Lake Gen2; POSIX ACLs; service endpoints
- **D.** D. GPv2 account; standard file share; service endpoints; shared key

**Correct answer:** B

**Explanation:**

A Premium FileStorage account provides provisioned, consistent IO for Azure Files. Creating an SMB file share in that account and integrating with Active Directory (AD DS or Entra ID Kerberos for Azure Files) enables identity-based authentication and NTFS ACL enforcement, which is what the app and security require. Adding a private endpoint restricts access to the VNet/subnet without any public allowlists, aligning with the private only posture. Azure Files supports snapshots for point-in-time recovery, and Premium tier helps ensure low-latency, predictable throughput. Together, this satisfies identity, networking, security, and performance constraints.
Why the other options are incorrect
A: Public endpoint + SAS exposes a shared secret and doesnt meet private only or domain-based ACL requirements; standard tier may not meet performance targets.
C: NFS on Blob (ADLS Gen2) is for object/analytics workloads; the app needs SMB and Windows ACLs, not POSIX NFS; service endpoints ? private endpoint isolation.
D: Shared key bypasses identity-based access and NTFS ACLs; service endpoints dont provide the same isolation or identity guarantees as private endpoints.

---

### Question 16

A VM has an NSG on its NIC that denies 3389, while the subnet NSG allows 3389 from Ops. You need to confirm the computed result after Azure merges subnet + NIC rules and defaults.
Where do you see the computed (effective) security rules for that NIC?

**Options:**

- **A.** A. NSG flow logs only
- **B.** B. Effective security rules (Network Watcher) on the NIC ✅
- **C.** C. Activity Log
- **D.** D. Effective routes

**Correct answer:** B

**Explanation:**

Choice B is correct. Network Watcher ? Effective security rules queries the platforms evaluation engine for a NIC and shows the final allow/deny set after combining subnet NSG, NIC NSG, and default rules. In your scenario, youll observe deny takes effect because a specific NIC-level deny overrides a broader subnet allow.
Why the other options are incorrect
A: Flow logs are telemetry exported to storage; they dont show the merged rule table.
C: Activity Log records control-plane operations, not data-plane policy.
D: Effective routes are for UDR/system routing, not NSG policy.

---

### Question 17

You’re aligning disk SKUs to three demanding workloads. Infra wants **predictable latency**, **right-sized throughput/IOPS**, and to **avoid replatforming later**. Pick the option that truly fits each case; assume VM size/zone support is available.

**Workloads**

****

For **api-oltp**, which option should you choose?

**Options:**

- **A.** A. Ultra Disk ✅
- **B.** B. Premium SSD v2
- **C.** C. Premium SSD
- **D.** D. Standard SSD

**Correct answer:** A

**Explanation:**

Choice A is correct. **Ultra Disk** is the only managed disk tier that **scales beyond ~80K IOPS / ~1.2 GB/s** per disk and lets you **dial IOPS/throughput independently** without detaching, matching **≈180K IOPS and ≥2.5 GB/s** with **low latency**. It requires **VM-level Ultra enablement** and **zone-pinned** placement where supported, and it **doesn’t use host caching**—all consistent with **high-end transactional** profiles that need precise QoS and fast, predictable response times.

Why the other options are incorrect

B: **Premium SSD v2** is strong but typically tops out around **~80K IOPS / ~1.2 GB/s** per disk—**below** api-oltp’s target.

C: **Premium SSD** caps lower still and can’t deliver the required IOPS/throughput envelope.

D: **Standard SSD** prioritizes cost/capacity; its performance headroom and latency are unsuitable for this OLTP profile.

---

### Question 18

You’re standardizing guardrails at the **resource group** level. Some controls must **block** bad deployments; others should **auto-fix** without breaking pipelines and also **retro-fix** existing resources.

**Planned guardrails (per RG)**

****

For **RG-Prod**, which **policy effect** should you use?

**Options:**

- **A.** A. Modify ✅
- **B.** B. Deny
- **C.** C. Append
- **D.** D. Audit

**Correct answer:** A

**Explanation:**

Choice A is correct. **Modify** lets Azure Policy **alter the request** to add the missing costCenter tag **without blocking** the deployment and supports **remediation tasks** to **retro-fix** existing resources. It’s the only effect that cleanly meets non-blocking + auto-add + backfill in one pattern when paired with a remediation job.

Why the other options are incorrect

B: **Deny** enforces compliance but **breaks pipelines** on missing tags and doesn’t retro-fix existing resources.

C: **Append** adds fields at request time but **can’t retro-fix** existing resources and isn’t as broadly supported as Modify for tag injection.

D: **Audit** only logs non-compliance; it neither enforces nor fixes.

---

### Question 19

Your plan hosts several APIs. **api-core** experiences **brief, intense spikes** where **requests queue** long before CPU rises. You want **plan-level autoscale** that reacts to the **earliest signal of overload**, adds instances **quickly**, and then scales back down without thrashing.

**Signals to consider**

****

For **api-core**, which metric should drive autoscale?

**Options:**

- **A.** A. HTTP queue length ✅
- **B.** B. CPU %
- **C.** C. Schedule
- **D.** D. Manual

**Correct answer:** A

**Explanation:**

**Choice A is correct.** **HTTP queue length** is the **earliest and most honest signal** that your workers can’t accept connections fast enough—connections are **waiting**, even if CPU is still moderate. Scaling on this metric:

- **Prevents head-of-line blocking** by adding instances **before** threads saturate.

- Works at the **plan level**, so all apps benefit from the additional workers during a spike.

- Pairs well with an **aggressive scale-out rule** (e.g., queue length &gt; 0 for 2–3 minutes → +2 instances) and a **longer, conservative scale-in** rule to avoid oscillation.

- Lets you cap instance count for **cost control**, while still protecting p95/p99 latency

Why the other options are incorrect

B: **CPU %** is a **lagging indicator** for connection surges; by the time CPU spikes, the **queue is already building**, and users feel latency.

C: **Schedule** cannot react to unscheduled bursts (marketing campaigns, cache misses, cold starts) and often **over- or under-provisions**.

D: **Manual** scaling is human-driven, slow, and inconsistent during fast spikes—**SLA risk**.

---

### Question 20

You’re building a **hub-and-spoke** across regions. The **hub** hosts the **VPN/ExpressRoute gateway**. Evaluate which peerings are **valid** given address spaces and regions.

**VNets**

****

Which proposed peering is **not permitted** by Azure?

**Options:**

- **A.** A. SpokeA ? Dev ✅
- **B.** B. Hub ? SpokeA (hub: Allow gateway transit; spoke: Use remote gateway)
- **C.** C. Hub ? SpokeB (global VNet peering)
- **D.** D. SpokeA ? SpokeB (no gateway transit)

**Correct answer:** A

**Explanation:**

**Choice A is correct.** Azure VNet peering **requires non-overlapping address spaces**. **Dev (10.20.1.0/24)** is contained by **SpokeA (10.20.0.0/16)**, so peering those two **fails** at validation. Overlap anywhere in the IPv4/IPv6 spaces blocks peering, regardless of region or subscription.

Why the other options are incorrect

B: Hub-and-spoke with a gateway works when the **hub exports** its gateway (**Allow gateway transit**) and the **spoke imports** it (**Use remote gateway**). Only one side can “use remote gateway”; the other must be the exporter.

C: **Global VNet peering** supports **cross-region** peering (AU East ↔ AU Southeast) provided there’s **no overlap** and service flags are set as needed.

D: A simple peering between **non-overlapping** SpokeA and SpokeB is allowed; without transit flags, it **won’t** provide on-prem routing through the hub (which is the point), but the peering itself is valid.

---

### Question 21

You’re creating three shares. Some need **low-latency IOPS**; others need **cheap capacity** and **snapshots**. You’ll avoid keys on clients by using directory-based auth.

**Share requirements**

****

Which option should you choose **for profiles**?

**Options:**

- **A.** A. GPv2 Files (standard)
- **B.** B. FileStorage (Premium) ✅
- **C.** C. NFS 4.1 on Blob
- **D.** D. SMB with account keys

**Correct answer:** B

**Explanation:**

Choice B is correct. **Premium FileStorage** provides **provisioned, low-latency** performance ideal for **FSLogix/VDI profiles**, with consistent IOPS/throughput tied to the share size. It avoids noisy-neighbor variance common to standard and aligns with profile logon/logoff sensitivity.

Why the other options are incorrect

A: **Standard** is cost-effective but doesn’t guarantee low-latency performance for VDI profiles.

C: **NFS 4.1** targets Linux file semantics and isn’t SMB for FSLogix.

D: **Account keys** place broad secrets on clients; prefer **directory authentication** (e.g., Azure AD DS/Entra-Kerberos) for least privilege.

---

### Question 22

You’re standardizing **Azure VM backup** in a Recovery Services vault. Ensure **consistent schedules**, **GFS-style retention**, and **fast restores** from recent snapshots.

**Workloads &amp; retention goals**

****

How should you implement **payroll-prod**?

**Options:**

- **A.** A. Create a VM backup policy in the Recovery Services vault with daily 01:00, GFS retention (D/W/M/Y), and Instant Restore = 7 days; assign the VM ✅
- **B.** B. Take nightly snapshots via Automation
- **C.** C. Use a Backup vault (Data Protection) disk policy
- **D.** D. Export templates weekly

**Correct answer:** A

**Explanation:**

**Choice A is correct.** A **Recovery Services vault VM backup policy** lets you set a **daily schedule**, **grandfather-father-son** retention (**daily/weekly/monthly/yearly**) and **Instant Restore** snapshot retention. Assigning the policy to **payroll-prod** enforces **long-term retention** while keeping **recent snapshots** on the source for **fast file/VM restores**. Policies are **central**, reusable across VMs, and changes apply without touching the workload.

Why the other options are incorrect

B: Ad-hoc **snapshots** lack **policy, vault immutability, GFS retention, reporting,** and governed restore workflows.

C: A **Backup vault** targets **Disk Backup/Data Protection**, not **Azure VM backup** in an RS vault.

D: **Exporting templates** preserves infrastructure shape, not application data or backup state.

---

### Question 23

You want **least-privilege east–west access** with minimal rule churn as servers scale. You’ll place NSGs at the **subnet** layer and reference **ASGs** for membership-based rules.

**Inventory**

****

What’s the best rule design to meet the flows and minimize future edits?

**Options:**

- **A.** A. On DataSubnet NSG, allow Source: ASG Web ? Dest: ASG DB, Port 1433, deny all else ✅
- **B.** B. On DataSubnet NSG, allow Source: AppSubnet ? Dest: DataSubnet, Port 1433
- **C.** C. On DataSubnet NSG, allow Any ? DataSubnet, Port 1433
- **D.** D. On VM NIC NSGs, allow VirtualNetwork ? Any, Port 1433

**Correct answer:** A

**Explanation:**

Choice A is correct. Referencing **ASGs** (Web → DB) in an NSG rule lets membership drive access: when you **scale out** the web or database tiers, you **don’t touch rules**—you only add VMs to the right ASG. Placing the rule on the **DataSubnet NSG** protects the destination, keeps policy close to the asset, and pairs naturally with a **deny-all** below it to block everything else. This yields **coarse placement, fine intent**, and **low churn**.

Why the other options are incorrect

B: Subnet-to-subnet rules over-grant; any workload in AppSubnet (not just Web) could reach DB.

C: Opening DB to **Any** defeats least privilege and increases attack surface.

D: A broad **VirtualNetwork** allow on NIC NSGs admits **every** VNet host, bypassing the ASG model and duplicating rules across NICs.

---

### Question 24

You’re moving three PaaS services to a **VNet-only data path** with **private DNS** that works for **both spokes and on-prem** (via VPN/ER). Public endpoints must be **inaccessible** even if someone has SAS/keys.

**Services &amp; goals**

****

Which control enforces **VNet-only** data access with **private IPs and private DNS** for these services?

**Options:**

- **A.** A. Private Endpoint ✅
- **B.** B. Service endpoint
- **C.** C. NAT Gateway
- **D.** D. IP allowlist

**Correct answer:** A

**Explanation:**

Choice A is correct. A **Private Endpoint** places a **private NIC** for each service into the specified subnet, forcing the **data plane** over your **private network**. With the matching **private DNS zone** (for example, privatelink.blob.core.windows.net, privatelink.vaultcore.azure.net, privatelink.azurewebsites.net) **linked** to the consumer VNets (and forwarded from on-prem via conditional forwarding or **DNS Private Resolver**), clients resolve the public FQDN to the **private IP**. Combine with **Public network access: Disabled** on the services to close the public endpoint completely. This design covers **all three rows**: scoped per-spoke access, private name resolution, and on-prem reach via your private link.

Why the other options are incorrect

B: **Service endpoints** keep the **public** endpoint; they don’t provide **private IPs** or block Internet with credentials.

C: **NAT Gateway** affects **egress SNAT** only; it doesn’t authorize access at the service or supply private names.

D: **IP allowlists** are brittle and still expose a **public** surface; they don’t give **private DNS** or VNet identity.

---

### Question 25

During a traffic spike, users report latency. Your dashboard shows conflicting signals depending on the chart settings. Decide how to interpret the data and what to change.

**Current charts**

****

Which action best explains the discrepancy **and** gives you a truer picture for scaling?

**Options:**

- **A.** A. Switch to 1-minute granularity and use Max or P95 aggregation, split by instance ✅
- **B.** B. Keep 5-minute averages; add a schedule to pre-scale at noon
- **C.** C. Turn on Activity Log analytics for the plan
- **D.** D. Replace queue length with CPU for scale rules

**Correct answer:** A

**Explanation:**

**Choice A is correct.** **Short spikes are averaged away** at 5-minute granularity, especially on **average** aggregation. The queue can be **briefly saturated** while the 5-minute average still looks low. Moving to **1-minute** granularity with **Max/P95** and splitting by **instance** reveals **per-worker hot spots** and short-lived backlogs that correlate with the 5xx spikes. Once visible, you can scale on the **earliest signal** (queue length) with tight lookbacks and cooldowns, preventing head-of-line blocking even when CPU remains moderate.

Why the other options are incorrect

B: A schedule ignores real-time bursts and doesn’t fix the **aggregation blind spot**.

C: The **Activity Log** is control-plane, not data-plane performance.

D: CPU often **lags** connection pressure; swapping signals hides the real bottleneck.

---

### Question 26

Security demands: (1) **private inbound** access to the app only, (2) **deny public Internet** to the app, (3) **private outbound** to Azure SQL via its **private endpoint**, and (4) correct **DNS resolution** for both app and SQL. Choose the configuration that satisfies all four simultaneously.

**Candidates**

****

**Question**

Which single row meets the requirements?

**Options:**

- **A.** A. Row A ✅
- **B.** B. Row B
- **C.** C. Row C
- **D.** D. Row D

**Correct answer:** A

**Explanation:**

For **private inbound**, create an **App Service Private Endpoint** and add **Access Restrictions** that deny all public traffic—ensuring only the private endpoint path is permitted. For **private outbound** to SQL’s private endpoint, enable **regional VNet Integration** and **Route All** so egress goes into the VNet (and reaches SQL privately). Finally, configure the **private DNS zones**: the app’s private endpoint zone (privatelink.azurewebsites.net) and SQL’s PE zone (e.g., privatelink.database.windows.net) linked to the VNet so hostnames resolve to **private** IPs.

**Why the other options are incorrect**

- B: Still exposes a public endpoint (allowed IPs), and outbound doesn’t route privately to SQL without Route All.

- C: Leaves the public endpoint open and lacks DNS plumbing; some calls would resolve to public names.

- D: ASE isolates inbound, but without VNet integration and private DNS, outbound to SQL PE isn’t satisfied; also over-scoped for this need.

---

### Question 27

Scenario

A hub VNet needs three platform subnets and one app subnet. Requirements:

• AzureFirewallSubnet must meet minimum size requirements.

• AzureBastionSubnet must meet minimum size requirements.

• GatewaySubnet must meet minimum size recommendations for VPN/ER gateways.

• AppSubnet is a large /24.

Choose the only compliant combination.

**Candidates**

****

**Question**

Which row meets the requirements?

**Options:**

- **A.** A. Row A
- **B.** B. Row B
- **C.** C. Row C ✅
- **D.** D. Row D

**Correct answer:** C

**Explanation:**

Azure Firewall requires **AzureFirewallSubnet** of **/26 or larger** (C meets this with /26). Azure Bastion requires **AzureBastionSubnet** of **/26** (C meets /26). VPN/ExpressRoute gateways require **GatewaySubnet** sized appropriately; **/27** is the documented minimum recommendation for modern SKUs (C meets /27). AppSubnet /24 is fine. Row C is the only candidate satisfying all three platform subnet size rules concurrently.

**Why the other options are incorrect**

- Row A: AzureFirewallSubnet **/27** is too small.

- Row B: AzureBastionSubnet **/27** is too small for Bastion.

- Row D: GatewaySubnet **/29** is too small for gateway deployments and scaling.

---

### Question 28

You must enforce tagging at scale across a subscription:

• New resources must have CostCenter; creation should be denied if missing.

• Existing resources must be backfilled with Department=IT if missing.

• rg-exempt must be excluded from enforcement.

Goal

One configuration that satisfies all three.

Candidate configurations

Which single row meets the goal?

**Options:**

- **A.** A. R1
- **B.** B. R2 ✅
- **C.** C. R3
- **D.** D. R4

**Correct answer:** B

**Explanation:**

Choice B is correct. An initiative at subscription groups multiple definitions so you can both deny non-compliant new resources (Require CostCenter) and modify existing ones (Modify Department). A remediation task using a system-assigned managed identity performs the backfill on existing resources. The policy exemption on rg-exempt cleanly carves out the required scope without disabling enforcement elsewhere. This is the canonical “deny + modify + remediate + exempt” pattern for tag governance at scale.

Why the others are incorrect

A: Denies new resources missing CostCenter but never backfills Department for existing resources and lacks the rg-level exemption.

C: Append at rg-core affects only that RG and only at request time; no subscription-wide coverage, no deny, no backfill.

D: RBAC doesn’t enforce tags; it’s authorization, not configuration compliance.

---

### Question 29

HR is onboarding cloud-only R&amp;D staff across AU and NZ. Licensing must auto-apply only to active R&amp;D users, with usageLocation set per user (AU/NZ) before assignment. UPNs must not change. Nested groups previously caused licensing propagation gaps and are forbidden.

Goal

Auto-license eligible users only; keep UPNs stable; enforce per-user usageLocation; avoid nested groups

Candidate configurations.

Which single configuration satisfies the goal?

**Options:**

- **A.** A. R1
- **B.** B. R2
- **C.** C. R3 ✅
- **D.** D. R4

**Correct answer:** C

**Explanation:**

Choice C is correct. Dynamic user membership tied to business attributes (department) plus accountEnabled filters only active R&amp;D users and auto-captures future hires. Group-based licensing scales while maintaining central control. Licensing enforcement requires usageLocation on the user object (e.g., AU or NZ) prior to assignment; scripting this per user avoids failures and meets data residency/billing requirements. UPN stability is preserved because no rename is needed, and nested groups are avoided by using a single dynamic security group.

Why the others are incorrect

- R1: Device-based membership is unrelated to user licensing eligibility; tenant default location often fails for services that mandate a per-user value.

- R2: Static membership misses future hires and increases toil; per-user licensing is brittle and error-prone.

- R4: Missing usageLocation breaks licensing prerequisites and triggers assignment errors.

---

### Question 30

A VMSS-based web tier in Australia East should alert when **average Percentage CPU &gt; 80% for 10 minutes** across the scale set. An existing alert never fires even when instances show ~85% CPU. Review the candidate configurations and pick the one that correctly implements the requirement.

**Candidates**

****

**Question**

Which row meets the requirement?

**Options:**

- **A.** A. Row A
- **B.** B. Row B
- **C.** C. Row C
- **D.** D. Row D ✅

**Correct answer:** D

**Explanation:**

Metric alerts must target the **correct scope** and **metric** with the **right aggregation window**. For a scale set, use **Percentage CPU** from the **VM/Compute** metric namespace at the **VMSS scope** so the platform evaluates across instances. The requirement is **average over 10 minutes**; using **Average** with a **10-minute window** and a frequent **1-minute evaluation** captures sustained load and triggers predictably. Row D is the only candidate that gets all three (scope/metric/aggregation) right.

Why the other options are incorrect

- A: Targets **one VM** and uses **Max** over 5m; it won’t reflect the scale set’s average and can miss alerts when other instances are hot.

- B: **Subscription** scope and the **CPU Credits** metric are irrelevant to VMSS CPU saturation; wrong metric/scope.

- C: **InsightsMetrics** is a **logs-based** signal; the requirement is a **metric alert** on the compute metric “Percentage CPU,” not a log query.

---

### Question 31

You maintain a wildcard certificate in Azure Key Vault used by dozens of Web Apps across subscriptions. You want central rotation (renew once in Key Vault), automatic sync to each apps binding, and to keep SNI (no dedicated IPs). You also want a clean rollback if a renewal fails.
Requirements
 Use Key Vault as the certificate source
 Auto-sync renewed versions to apps
 Keep SNI bindings and avoid manual re-uploads
Which approach meets all requirements?

**Options:**

- **A.** A. Upload PFX to each app
- **B.** B. Free managed certificate
- **C.** C. Import from Key Vault (SNI binding) ✅
- **D.** D. Lets Encrypt site extension

**Correct answer:** C

**Explanation:**

Choice C is correct. Importing the certificate from Key Vault creates an App ServicetoKey Vault link (the app tracks a secret URI). When you renew in Key Vault using the same secret name (new version), App Service can sync the latest version and keep the existing SNI binding intactno per-app re-uploads. This yields:
Single point of lifecycle control (issue/renew/revoke) in Key Vault.
Automated propagation to many apps, reducing outage risk and toil.
SNI preserved, so no dedicated IPs are needed.
For reliability, grant the app identity only get/list on the secret, pin the secret name (not the version) for auto-rollforward, and keep a previous version available to rollback by setting the Key Vault secrets active version.
Why the other options are incorrect
A: A PFX upload per app fragments lifecycle; every renewal becomes a manual distribution and binding update.
B: The free managed certificate isnt sourced from your Key Vault and has limitations (e.g., wildcard scenarios, certain validations); it doesnt satisfy enterprise central rotation.
D: The Lets Encrypt extension adds custom automation you must operate and troubleshoot; it isnt a native Key Vaultbacked sync and can drift across apps.

---

### Question 32

You must validate DR without impacting production. Test the full stack (compute + network) in isolation, keep production running, and clean up test resources afterward.
What should you run?

**Options:**

- **A.** A. Planned failover (with shutdown)
- **B.** B. Unplanned failover
- **C.** C. Commit failover
- **D.** D. Test failover to an isolated VNet/subnet, then cleanup ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. A test failover brings up replicas in an isolated network (often a dedicated test VNet), so you can validate boot, dependencies, DNS, and apps without touching production. After validation, you cleanup test resources, leaving replication intact. Production traffic is unaffected, and no re-protect or DNS cutover occurs.
Why the other options are incorrect
A: A planned failover performs a production cutover (source healthy, shut down &amp; sync), not a safe test.
B: An unplanned failover is for outagestraffic is cut over; its not a non-impacting test.
C: Commit is the post-failover step to finalize a real failover; it doesnt perform the validation itself.

---

### Question 33

Users must access Azure Files over SMB using their directory identitiesno account keys on clients. Youll apply share-level RBAC and NTFS ACLs to enforce least privilege. The environment uses Microsoft Entra Domain Services (managed domain); no on-prem DCs on the access path.
Which option should you choose?

**Options:**

- **A.** A. Enable NFS 4.1 and use POSIX mode bits
- **B.** B. Issue SAS to users and mount with HTTPS
- **C.** C. Use account keys and restrict by IP
- **D.** D. Enable Azure AD DS authentication for Azure Files; assign Storage File Data SMB Share roles; apply NTFS ACLs ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. For SMB with directory identities, enable Azure AD DS authentication on the storage account so the share participates in your managed domains Kerberos/LDAP. Then grant users/groups share-level RBAC (e.g., Storage File Data SMB Share Reader/Contributor/Owner) and enforce permissions with NTFS ACLs. Clients authenticate without keys, honoring user/group access centrally and eliminating credential sprawl.
Why the other options are incorrect
A: NFS 4.1 is for Linux clients and doesnt use SMB or Entra-backed Kerberos; it wont meet the SMB identity requirement.
B: SAS is for data-plane tokens, not SMB logons; SMB mounts dont use SAS bearer tokens.
C: Account keys put secrets on endpoints and grant broad accessnot identity-based per user.

---

### Question 34

A new tier must stay online during a datacenter-level incident within a region and needs zonal public IPs for inbound flows. You are not changing regions or using cross-region DR.
To achieve datacenter-level isolation inside one region (and support zonal frontends), deploy the VMs to an __________.

**Options:**

- **A.** A. Proximity placement group
- **B.** B. Availability zone ✅
- **C.** C. Availability set
- **D.** D. Region pair

**Correct answer:** B

**Explanation:**

Choice B is correct. Availability zones place instances in physically separate datacenters within the same region, giving true fault isolation at the building level and enabling zonal public IPs/zonal resources. Zonal spreading satisfies the requirement without cross-region complexity.
Why the other options are incorrect
A: A proximity placement group optimizes latency by co-locatingnot by separating across datacenters.
C: An availability set spreads across fault/update domains inside one datacenter; it doesnt protect against a full datacenter outage.
D: A region pair concerns cross-region relationships; youre staying within a single region.

---

### Question 35

You have a Microsoft Entra tenant.
You create a user named Admin1.
You need to ensure that Admin1 can perform following tasks:
Assign licenses to Microsoft Entra groups
Reset passwords of Microsoft Entra users
Which Microsoft Entra role should you assign to Admin1?

**Options:**

- **A.** A. Billing Administrator
- **B.** B. Helpdesk Administrator
- **C.** C. License Administrator
- **D.** D. User Administrator ✅

**Correct answer:** D

**Explanation:**

The User Administrator role is the best fit because Microsoft says it can assign and read licenses for all users, reset passwords, and it also includes the permission microsoft.directory/groups/assignLicense, which is the action for assigning product licenses to groups for group-based licensing.
This makes User Administrator the one role in the answer set that covers both required tasks in a single assignment. By contrast, License Administrator covers user and group license assignments, but Microsoft says it does not include password reset capability.
Why the other options are incorrect:
 A. Billing Administrator  Billing Administrator is for purchases, subscriptions, support tickets, and service health. It does not include group-based license assignment or password reset permissions for users.
 B. Helpdesk Administrator  Helpdesk Administrator can reset passwords, but Microsoft describes it as a role for password resets, forcing sign-out, service requests, and service health. It does not include the group-based licensing permissions required here.
 C. License Administrator  License Administrator can assign product licenses to groups for group-based licensing and manage user licenses, but Microsoft says this role is limited to licensing and usage location tasks. It does not grant password reset permissions.

---

### Question 36

You exported a resource groups current state to ARM JSON from the portal/CLI so you can refactor it. The next step is to convert that JSON into Bicep for cleaner authoring and future modularization. You want a single command that turns the JSON into Bicep locally.
To convert the exported ARM JSON template to Bicep, run __________ on the JSON file.

**Options:**

- **A.** A. bicep decompile ✅
- **B.** B. az group export
- **C.** C. az bicep build
- **D.** D. az deployment group what-if

**Correct answer:** A

**Explanation:**

Choice A is correct. bicep decompile reads an ARM JSON template and produces a .bicep file, preserving template logic (parameters, variables, resources, outputs) while translating JSON expressions into Bicep syntax. This is the JSON ? Bicep direction. After decompilation, you can restructure modules, add existing resources, and simplify expressionsall in Biceps concise DSL.
Why the other options are incorrect
B: az group export exports from Azure to ARM JSON; it doesnt convert JSON to Bicep.
C: az bicep build compiles Bicep ? ARM JSON (the opposite direction).
D: what-if previews changes for a deployment; it doesnt convert templates.

---

### Question 37

Youre migrating bespoke VMs behind an internal load balancer to a scale-out model. The team must attach existing NICs, pin specific instances to specific zones, and protect certain instances from scale-in while still using autoscale. Images may diverge slightly between instances during a rolling update.
Requirements
 Instance-level control (NICs, per-instance zone selection)
 Scale-in protection for stateful nodes
 Keep autoscale &amp; health-aware replacement
Which option should you choose?

**Options:**

- **A.** A. Uniform orchestration
- **B.** B. Availability set
- **C.** C. Flexible orchestration ✅
- **D.** D. Single VM

**Correct answer:** C

**Explanation:**

Choice C is correct. Flexible orchestration gives per-instance control (e.g., attach existing NICs, choose zones per VM) while retaining scale set semantics (autoscale, health-based repair). You can mark instances with instance protection to avoid unintended removal during scale-in, and tolerate some heterogeneity across instancescapabilities Uniform mode doesnt provide. This fits stateful or specialized nodes that still benefit from scale-set lifecycle.
Why the other options are incorrect
A: Uniform requires homogeneous instances and doesnt support existing NICs or granular per-instance control; scale-in protection is limited.
B: An availability set lacks scale-set features like autoscale, rolling updates, and unified model operations.
D: A single VM cant elastically scale or provide set-level management.

---

### Question 38

You will provide agentless, browser-based RDP/SSH to VMs without public IPs. The deployment keeps inbound ports closed and uses a dedicated subnet.
Azure Bastion requires a subnet named __________ with a minimum prefix of __________.

**Options:**

- **A.** A. GatewaySubnet, /27
- **B.** B. BastionSubnet, /27
- **C.** C. AzureBastionSubnet, /26 ✅
- **D.** D. AzureFirewallSubnet, /24

**Correct answer:** C

**Explanation:**

Choice C is correct. Bastion must be deployed into a subnet named exactly AzureBastionSubnet with a /26 or larger address space. The dedicated name lets the platform apply the right policies and scale units; the /26 ensures enough IPs for concurrent sessions and future scaling. With Bastion in place, you can remove public IPs from management paths and keep RDP/SSH traffic on Azures control plane.
Why the other options are incorrect
A: GatewaySubnet is reserved for VPN/ExpressRoute gateways.
B: The required name is AzureBastionSubnet (exact), not BastionSubnet; /27 is too small.
D: AzureFirewallSubnet is for Azure Firewall and unrelated to Bastion.

---

### Question 39

Security mandates no anonymous blob access in any container. App access is via Entra ID or SAS from a trusted service. You want a single setting that prevents admins from accidentally enabling public read on new or existing containers.
Which option should you choose?

**Options:**

- **A.** A. Set account access tier to Cool
- **B.** B. Enable soft delete for blobs
- **C.** C. Disable Allow blob public access on the storage account ✅
- **D.** D. Enable static website

**Correct answer:** C

**Explanation:**

Choice C is correct. Setting Allow blob public access: Disabled at the account prevents container-level public access from being turned on anywhere in that account. Its a guardrail that enforces private containers regardless of per-container mistakes.
Why the other options are incorrect
A: Access tier affects cost/performance, not access control.
B: Soft delete protects from accidental deletes; it doesnt block public read.
D: Static website publishes a public endpointopposite of the requirement.

---

### Question 40

A Storage account must be reachable only from AppSubnet and DataSubnet. You cannot deploy Private Endpoints yet, but you must restrict access beyond simple IP allowlists. Public endpoint stays in use.
Requirements
 Keep the Storage public endpoint
 Restrict access to two VNets/subnets
 No Private Endpoint for now
What configuration meets the requirements?

**Options:**

- **A.** A. Private Endpoint in each subnet
- **B.** B. NAT Gateway on the subnets
- **C.** C. IP rules for current NAT egress addresses
- **D.** D. Enable Microsoft.Storage service endpoints on both subnets and allow only those subnets in the Storage firewall ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Service endpoints extend your VNet identity to the Storage service over the public endpoint. When you enable the Microsoft.Storage endpoint on AppSubnet and DataSubnet and set the Storage firewall to Selected networks (those subnets), Storage accepts traffic only from those subnet identitiesno generic Internet clients, even with keys/SAS. This gives a strong, subnet-scoped allowlist without changing the endpoint type.
Why the other options are incorrect
A: Private Endpoints would be stronger but are explicitly not allowed here.
B: A NAT Gateway provides static egress/SNAT ports; it doesnt authorize access at the service.
C: IP rules depend on current egress IPs and can drift; theyre brittle compared to VNet-based authorization.

---

### Question 41

Youre standardizing microservices on Azure Container Apps (ACA). A payments API must serve HTTPS, run multiple revisions with traffic splitting, and scale 0?20 replicas based on Service Bus queue length. Images come from private ACR with no passwords stored.
Requirements
 External HTTP(S) ingress with custom domain
 Revisions + traffic split and easy rollback
 Scale to zero and up to 20 on queue length
 Pull images from ACR without admin creds
Which option should you choose?

**Options:**

- **A.** A. AKS with NGINX and HPA
- **B.** B. Container Apps: create an environment, enable external ingress, link ACR via managed identity (AcrPull), add KEDA queue rule with min=0, max=20, and use revisions for traffic split ✅
- **C.** C. ACI with public IP and cron
- **D.** D. Web App for Containers with Autoscale

**Correct answer:** B

**Explanation:**

Choice B is correct. Container Apps provides managed revisioning (multiple revisions + traffic splitting/rollback), external ingress with TLS and custom domains, and KEDA-based scaling so the app can scale to zero and back up on Service Bus queue depth. Linking ACR through a managed identity and granting AcrPull keeps the pull credential-free. This hits all four requirements with platform-native features and no cluster management.
Why the other options are incorrect
A: AKS can do this, but it adds cluster ops and custom controllers you dont need for a PaaS-first requirement.
C: ACI lacks revisions, HTTP ingress with routing, and native event autoscale.
D: App Service doesnt offer revisions/traffic split like ACA and doesnt scale to zero.

---

### Question 42

Analytics workers should scale from 0 to N when Service Bus messages arrive, then drop back to 0 when idle. Each replica needs 2 vCPU / 4 GiB. You dont want to run or script an orchestrator.
\
To meet event-driven scale-to-zero and per-replica sizing without running a cluster, use Container Apps with a __________ and set minReplicas=0, maxReplicas=N, cpu/memory per replica = 2 vCPU/4 GiB.

**Options:**

- **A.** A. ACI CPU limit
- **B.** B. HPA on AKS
- **C.** C. KEDA scale rule (e.g., azure-servicebus) ✅
- **D.** D. Cron restart policy

**Correct answer:** C

**Explanation:**

Choice C is correct. ACA lets you set per-replica resources (e.g., 2 vCPU/4 GiB) and attach a KEDA rule (Service Bus, Storage Queues, HTTP concurrency, etc.) to scale horizontally between minReplicas and maxReplicas. With min=0, replicas scale to zero when idle, cutting cost. By contrast, ACI is sized per container group and does not natively autoscale; horizontal scaling would require external automation to create/delete groups. KEDA gives you policy-driven elasticity without owning Kubernetes.
Why the other options are incorrect
A: ACI supports CPU/memory sizing but no native autoscale or scale-to-zero; youd need scripts.
B: HPA is an AKS construct and requires managing a Kubernetes cluster.
D: A cron restart policy controls lifecycle timing, not queue-driven autoscale.

---

### Question 43

You want to deploy main.bicep to a resource group from the CLI, using the current subscription. You need the correct deployment command so the template runs at the resource group scope and you can pass parameters as needed.
Which option should you choose?

**Options:**

- **A.** A. az resource create
- **B.** B. az deployment sub create
- **C.** C. az group create
- **D.** D. az deployment group create ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. az deployment group create executes a template at the resource group scope. You specify the resource group, template file (-f main.bicep), and parameters (-p …). The Bicep file is built and submitted to ARM automatically, so you dont need to pre-compile JSON. This is the standard path for RG-scoped deployments.
Why the other options are incorrect
A: az resource create creates a single resource via raw JSON, not a full template deployment.
B: az deployment sub create targets the subscription scope, not the resource group.
C: az group create only creates the resource group object; it doesnt deploy resources into it.

---

### Question 44

A regulated workload must run in a single-tenant, isolated environment with private inbound and outbound via your VNets, internal load balancing only (no public endpoint), and capacity for hundreds of apps under one stamp. You want first-class App Service features without noisy-neighbor risk.
Which option should you choose?

**Options:**

- **A.** A. App Service Basic plan
- **B.** B. Premium v3 plan with VNet integration
- **C.** C. Functions Consumption plan
- **D.** D. Isolated v2 plan in an App Service Environment v3 (ILB) ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. An App Service Environment v3 hosts Isolated v2 plans in a single-tenant stamp inside your virtual network, supporting internal load balancer (ILB) mode for private-only ingress. It scales to large app counts, gives you per-app features (slots, custom domains, TLS), and removes noisy-neighbor concerns. This is the only App Service option that simultaneously delivers tenant isolation, private inbound/outbound, and large-scale hosting.
Why the other options are incorrect
A: Basic is multi-tenant, limited scale, and no private ILB hosting.
B: Premium v3 adds performance and VNet integration, but its still multi-tenant and exposes public endpoints by default.
C: Consumption is a serverless Functions plan, not suitable for multi-app web hosting or isolation requirements.

---

### Question 45

Youre deploying a Linux Web App for Containers that pulls images from a private ACR. Security forbids the admin user and any stored registry passwords. Youll enable a managed identity on the app and want least-privilege pulls that survive credential rotation without changes.
To enable passwordless pulls, grant the apps managed identity the __________ role on the registry.

**Options:**

- **A.** A. AcrPull ✅
- **B.** B. Owner
- **C.** C. Contributor
- **D.** D. Storage Blob Data Reader

**Correct answer:** A

**Explanation:**

Choice A is correct. AcrPull grants pull-only rights. With a managed identity enabled on the Web App and ACR configured to trust that identity, the platform exchanges the identity for an OAuth token at pull timeno secrets in app settings. This achieves least privilege, automatic rotation (identity-based), and works across slots and revisions without changing your Docker config. You can scope the role at the registry or repository level to tighten blast radius further.
Why the other options are incorrect
B: Owner is excessive (RBAC + write/delete) and violates least privilege.
C: Contributor permits push/mutate operationsunnecessary and risky for a runtime that only pulls.
D: Storage Blob Data Reader applies to Azure Storage, not ACRs token exchange for image pulls.

---

### Question 46

You must move web-stateless (from the table in Q2) from Australia East to Australia Southeast with minimal downtime and with configuration preserved (NIC, NSG, disks, tags). You also want dependency sequencing handled automatically and a guided rollback path if needed. A plain resource group move wont help because this is a cross-region change.
Requirements
 Region-to-region move (AU East ? AU SE)
 Orchestrate dependencies (NIC, IP, disks)
 Minimize downtime; preserve configuration; rollback if needed
Which option should you choose?

**Options:**

- **A.** A. Export template and redeploy manually
- **B.** B. Move resources (RG ? RG) in the same region
- **C.** C. Site Recovery test failover
- **D.** D. Azure Resource Mover (region move) ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Azure Resource Mover orchestrates cross-region moves for VMs and their dependent resources (NICs, IPs, NSGs, disks), handling dependency order, validation, and staged replication where applicable. It provides a guided workflow (prepare, initiate move, commit) that minimizes downtime and preserves resource IDs/metadata where supported, and it offers rollback steps if validation fails. This is the supported, low-risk path for region changes, unlike same-region RG moves or do-it-yourself exports.
Why the other options are incorrect
A: A manual export/redeploy is error-prone, lacks orchestration, and risks configuration drift.
B: Move within/between resource groups does not change region; it only changes the management container.
C: ASR is a DR replication tool; while it can facilitate failover, it doesnt replace the region move orchestration and dependency handling that Resource Mover provides.

---

### Question 47

Security requires the web app to be reachable only inside your VNets. Inbound must be private (no public endpoint), while outbound can still reach private resources via your networks. You want a platform-native solutionno custom proxies.
To make inbound access private and remove the public endpoint, configure a __________ to the web app.

**Options:**

- **A.** A. VNet Integration
- **B.** B. Private Endpoint ✅
- **C.** C. Service endpoint
- **D.** D. NAT Gateway

**Correct answer:** B

**Explanation:**

Choice B is correct. A Private Endpoint puts a private IP from your subnet on the apps data-plane endpoint, so inbound traffic stays on your private network. Combine it with public network access disabled (or Access Restrictions deny-all) to ensure the public endpoint is closed. For outbound private access, you separately use VNet Integration (egress path), but the question is explicitly about inbound privacy, which is what Private Endpoint delivers.
Why the other options are incorrect
A: VNet Integration is outbound-only (app ? VNet); it doesnt make inbound private.
C: Service endpoints apply to certain PaaS services and dont place a private IP on the app.
D: NAT Gateway provides egress SNAT and static outbound IPs; it doesnt privatize inbound.

---

### Question 48

You host a payments app with production and staging slots. Staging must warm up with the new build and its own connection strings (pointing to staging DB) before any traffic hits production. The swap should be zero-downtime, and production must keep its prod DB after the swap.
Requirements
 Warm up the new code before users see it
 Keep slot-specific settings (DB strings) isolated
 Zero-downtime transition to prod
Which option should you choose?

**Options:**

- **A.** A. Auto swap
- **B.** B. Scale out before swap
- **C.** C. Swap with preview and mark DB settings as slot settings ✅
- **D.** D. Restart production after deployment

**Correct answer:** C

**Explanation:**

Choice C is correct. Swap with preview lets the platform apply production configuration to the staging slot and warm up the new build before any user traffic moves. When you mark connection strings and app settings as slot settings, those values dont swapso staging keeps its staging DB and production keeps its prod DB after the swap. The final commit step atomically flips traffic with no downtime, giving a safe, reversible cutover with config isolation.
Why the other options are incorrect
A: Auto swap moves traffic immediately after deployment; it doesnt provide a warm-up verification window.
B: Scaling out may help capacity but doesnt guarantee warm-up or configuration isolation.
D: Restarting prod causes interruption and doesnt provide pre-swap validation or config safety.

---

### Question 49

You need static outbound IP and large SNAT port capacity for a VMSS and several web apps that egress through a shared subnet. Inbound is handled elsewhere. You want the correct association point for the egress service so all resources in the subnet benefit without per-NIC wiring.
Where should you associate the NAT Gateway?

**Options:**

- **A.** A. Virtual network
- **B.** B. Network interface (NIC)
- **C.** C. Public IP on the VMSS
- **D.** D. Subnet ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. A NAT Gateway is associated to a subnet, and then all outbound flows from resources in that subnet use the gateways public IP(s) and SNAT port pool. This gives static egress and scales SNAT capacity without changing individual NICs or app configs. You can attach one gateway to multiple subnets (within limits) or dedicate one per high-throughput subnet for isolation.
Why the other options are incorrect
A: Theres no attach to VNet operation; association is per subnet.
B: NAT Gateway doesnt attach to NICs.
C: A VMSS public IP affects inbound or per-instance PIPsnot shared egress SNAT for the subnet.

---

### Question 50

You will protect Azure VMs (Windows/Linux) with policy-based backups, Instant Restore from snapshots, cross-region restore capability, soft delete/immutability, and item-level restoresall agentless for Azure VMs.
To back up Azure VMs with these capabilities, create a __________ and configure backup policies there.

**Options:**

- **A.** A. Backup vault
- **B.** B. Storage account with snapshots
- **C.** C. Recovery Services vault ✅
- **D.** D. Key Vault

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure VM Backup is driven from a Recovery Services vault, which acts as the control plane for policies, jobs, restore points, and security features. When you enable backup for Azure VMs in a vault, the platform performs snapshot-based backups (agentless for Azure VMs), retains Instant Restore snapshots locally for fast near-term recovery, and transfers recovery points into the vault according to your schedule and retention. The vault supports soft delete and immutability to protect against accidental or malicious deletion, and (when configured with geo-redundant storage) can enable Cross Region Restore so you can restore a VM in the paired region without initiating a failover. From the same vault, you can perform file/item-level restores by mounting a recovery point, run restore to new VM for break-glass testing, and audit all actions with RBAC and vault-level security PINs. This provides a governed, policy-based, enterprise backup plane without installing guest agents for Azure VMs.
Why the other options are incorrect
A: A Backup vault belongs to the Azure Backup (Data Protection) plane (e.g., Azure Disk Backup, SAP HANA, Blob operational backup). Its not the control plane for Azure VM backups.
B: Storage snapshots + scripts dont provide schedules, retention, vault immutability, soft delete, CRR, or centralized RBAC/reporting; youre rebuilding what the vault gives you out of the box.
D: Key Vault stores secrets/keys/certs; it has no backup policy orchestration for VMs.

---

### Question 51

Production front doors need static addressing, zone fault-tolerance, and secure-by-default behavior compatible with Standard LB/NSGs/Firewall.
For production, use a __________ public IP to get static allocation, zone options, and secure defaults.

**Options:**

- **A.** A. Basic static
- **B.** B. Standard static ✅
- **C.** C. Standard dynamic
- **D.** D. Public IP prefix

**Correct answer:** B

**Explanation:**

Choice B is correct. Standard static public IPs provide fixed addresses, support availability zones/zone-redundancy, and align with Standard networkings closed-by-default posture. They integrate cleanly with Standard Load Balancer, NAT Gateway, Azure Firewall, and NSGsexactly what modern prod requires. Zonal or zone-redundant allocations let you survive datacenter failures without renumbering.
Why the other options are incorrect
A: Basic is legacy, lacks secure defaults, and has limited zone featuresnot recommended for new prod.
C: Standard dynamic can change the IP; it violates the static requirement.
D: A public IP prefix reserves a contiguous range for future IPs but isnt an address SKU or security model by itself.

---

### Question 52

You want agentless backups for Azure Disks used by critical stateful services, with vault-locked immutability, per-policy schedule/retention, and at-scale management via Backup Center. You do not want to move to Recovery Services vaults for this scenario.
What should you deploy?

**Options:**

- **A.** A. Recovery Services vault and MARS agent
- **B.** B. Storage snapshots + scripts
- **C.** C. Backup vault (Data Protection) and enable Azure Disk Backup ✅
- **D.** D. App Service backups

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure Disk Backup is provided through the Azure Backup (Data Protection) platform using a Backup vault (Microsoft.DataProtection/backupVaults). Its agentless (no guest extension), leverages incremental snapshots under the hood, and gives you policy-based scheduling and retention with vault-locked immutability so recovery points cant be altered outside policy. You manage at scale through Backup Center, apply consistent policies across many disks, and restore by creating a new managed disk from a chosen recovery point (then attach to a VM). This separates VM backup (Recovery Services vault) from disk-level backup (Backup vault), letting you protect stateful disks even when VM-level backup isnt appropriate, and it integrates with RBAC, tags, and reporting for governance.
Why the other options are incorrect
A: Recovery Services vault + MARS agent targets files/folders on Windows machines (often on-prem/IAAS) and isnt the mechanism for Azure Disk Backup; it also introduces agents you explicitly want to avoid.
B: Snapshots + scripts lack policies, immutability, centralized lifecycle, and easy audit/restore workflows; youd own orchestration and failure handling.
D: App Service backups protect web app content/config and optional DB exportsunrelated to managed disk protection.

---

### Question 53

Youre fronting a zonal VMSS that serves TCP 443 inside the VNet only. Requirements: internal frontend, zone-redundant, preserve client source IP, TCP probe, and no layer-7 features (TLS termination/routing done by the app). The solution must support thousands of flows with NSG-friendly defaults.
Which load-balancing product and mode meets these requirements?

**Options:**

- **A.** A. Public Load Balancer (Basic)
- **B.** B. Application Gateway (public)
- **C.** C. Load Balancer (Standard, internal) ✅
- **D.** D. Traffic Manager

**Correct answer:** C

**Explanation:**

Choice C is correct. Azure Load Balancer Standard (internal) gives a private frontend reachable only within your VNet/peers, supports zone-redundant frontends, TCP/HTTPS probes, and DSR/hairpin scenarios, and preserves client source IP on the backend. Its layer-4, which fits the no L7 features constraint, and scales to very high connection counts with NSG-compatible health probes (AzureLoadBalancer tag). Use an internal frontend IP, a backend pool targeting the VMSS, and a probe on 443 (or health port) with appropriate NSG allowances.
Why the other options are incorrect
A: Basic lacks zone features, scale, and security posture recommended for prod.
B: Application Gateway is L7 and usually public or needs Private Frontend in WAF v2; it adds TLS termination/routing you dont need.
D: Traffic Manager is DNS-based global routing, not in-VNet TCP load balancing.

---

### Question 54

Security mandates forced tunneling: traffic from AppSubnet must go to on-prem for Internet egress inspection via the hub VPN/ER gateway. You want to enforce this without NVAs and without touching the VMs.
Requirements
 Apply UDR on AppSubnet
 Route 0.0.0.0/0 to on-prem via the hub gateway
 Preserve VNet-local routing via system routes
Which next hop should 0.0.0.0/0 use in the UDR?

**Options:**

- **A.** A. Virtual appliance
- **B.** B. Internet
- **C.** C. Virtual network gateway ✅
- **D.** D. None

**Correct answer:** C

**Explanation:**

Choice C is correct. For forced tunneling to on-prem without an NVA, point 0.0.0.0/0 ? Virtual network gateway on AppSubnet. That pushes all non-VNet traffic into the site-to-site/ER gateway so on-prem policies apply. VNet-local stays with Azures system routes, so intra-VNet remains direct. This design avoids per-VM changes and centralizes control at the subnet.
Why the other options are incorrect
A: Virtual appliance requires an NVA IP youre not using here.
B: Internet bypasses on-prem inspection, defeating forced tunneling.
D: None discards the traffic (blackhole).

---

### Question 55

You want policy-driven cost control for log archives while maintaining data hygiene. Logs live under multiple prefixes and generate both current blobs and noncurrent versions. Security wants stale noncurrent versions cleaned up aggressively, but you must keep current data longer for analytics. No scripts  only native policies.
Requirements
 Move current blobs under logs/ to Cool at 30 days since last modified
 Delete noncurrent versions under logs/ at 180 days
 Include snapshots and versions in evaluation where applicable
 Policy must be prefix-scoped and zero-touch after setup
Which option should you choose?

**Options:**

- **A.** A. Set account tier to Cool and run a weekly cleanup job
- **B.** B. Write a Function that retags and deletes by last modified
- **C.** C. Create lifecycle management rules with a logs/ prefix filter: action 1 Move to Cool at 30 days (base blobs); action 2 Delete noncurrent versions at 180 days ✅
- **D.** D. Use change feed to detect age and purge old items

**Correct answer:** C

**Explanation:**

Choice C is correct. Blob lifecycle management lets you author declarative rules that target specific prefixes and apply age-based actions. You can scope an action that moves current (base) blobs under logs/ to Cool after 30 days since last modified, and a separate action that deletes noncurrent versions when they reach 180 days. Because rules are evaluated by the service, they cover new and existing data continuously with no scripts. If you also use snapshots, you can opt to include them, ensuring the policy treats versions/snapshots according to your retention. This preserves analytics on current data while aggressively pruning old versions to control costs and storage footprint.
Why the other options are incorrect
A: Setting the entire account to Cool is a blunt control and doesnt implement per-prefix or version-aware retention; it also doesnt delete old versions.
B: A custom Function is operationally heavier, error-prone, and duplicates what the native policy engine handles reliably at scale.
D: Change feed records events but is not an enforcement engine; youd still need code or policy to act on the events.

---

### Question 56

You already have dozens of alert rules and action groups. Ops asks to suppress all nonprod alerts during a weekly maintenance window and to reroute Sev0 alerts to on-call SMS + Teams without editing each alert rule. You also want this scoped to specific resource groups.
What should you configure?

**Options:**

- **A.** A. Clone alert rules and change action groups
- **B.** B. Dynamic thresholds on the rules
- **C.** C. New action groups only
- **D.** D. Alert processing rules with time windows, scope filters, and action overrides ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Alert processing rules (post-evaluation) let you suppress, route, or enrich alerts after the alert rule fires, based on scope (RGs/subscriptions), severity, monitor service, or schedule. You can define a rule that suppresses alerts for nonprod during maintenance, and another that overrides routing for Sev0 to the on-call action group, all without touching existing alert rules. This central layer is ideal for governance-scale changes and maintenance policies.
Why the other options are incorrect
A: Cloning rules is brittle and multiplies maintenance; you still cant schedule suppression cleanly.
B: Dynamic thresholds help detection but dont suppress or reroute.
C: New action groups alone wont apply unless you edit every alert rule; you need a processing layer.

---

### Question 57

A Web App calls a Storage account via Private Endpoint. The app has VNet Integration into AppSubnet. Storage has Public network access: Disabled. Requests fail (403/timeout). nslookup account.blob.core.windows.net from the app returns a public IP.
What change will restore private connectivity?

**Options:**

- **A.** A. Add a service endpoint to Storage
- **B.** B. Create a Private DNS Zone privatelink.blob.core.windows.net, link it to the VNet used by VNet Integration, and ensure an A record exists for the PE ✅
- **C.** C. Open outbound to Internet in NSG
- **D.** D. Add 0.0.0.0/0 UDR to an NVA

**Correct answer:** B

**Explanation:**

Choice B is correct. Private Endpoints rely on DNS to resolve the public FQDN to the private IP. Because lookups are returning a public address, the app is hitting the blocked public endpoint. Creating the Private DNS Zone for the storage privatelink domain, linking it to the VNet used by VNet Integration, and ensuring the endpoints A-record resolves to the private IP fixes name resolution and restores the private path.
Why the other options are incorrect
A: Service endpoints still use the public endpoint and dont work when Public network access is disabled.
C: Opening Internet egress doesnt change DNS and still wont reach a disabled public endpoint.
D: Sending default traffic to an NVA doesnt fix the name resolution mistake; PE requires the privatelink zone.

---

### Question 58

You want cross-subscription, cross-vault reporting with trend and compliance views, and you need alerting to Teams/SMS/email without editing every alert rule per vault. Prefer platform features over custom code.
To centralize reporting and alerting, enable vault diagnostic settings to a Log Analytics workspace, use Backup Reports for insights, and create Azure Monitor alerts with Action Groups. This is configured at the __________ level.

**Options:**

- **A.** A. Recovery Services vault ✅
- **B.** B. Resource group
- **C.** C. Subscription policy only
- **D.** D. VM

**Correct answer:** A

**Explanation:**

Choice A is correct. Configure each Recovery Services vault with diagnostic settings that send Backup jobs/alerts/reports to a central Log Analytics workspace. The Backup Reports workbook reads that workspace for job status, trends, policy compliance, storage usage, and optimization insights across vaults/subscriptions. For alerting, create Azure Monitor alerts (built-in backup signals or custom KQL) targeting Action Groups (email/SMS/Teams/ITSM). This approach scales without touching each protected item and keeps governance in Backup Center and Azure Monitor.
Why the other options are incorrect
B: A resource group alone doesnt collect backup telemetryyou must configure each vault.
C: Subscription policy can help enforce diagnostics, but reports/alerts still rely on vault-level diagnostics to a workspace.
D: Per-VM settings dont centralize vault jobs, restore points, or alerts.

---

### Question 59

A storage account hosts sensitive data. Access must come only from two VNets (Spoke-1 and Spoke-2) through private endpoints. Public network access must be blocked, and on-prem traffic should flow via a private connection (VPN/ExpressRoute to the spokes). Apps and tools on the Internet must not reach the account even with SAS.
Which option should you choose?

**Options:**

- **A.** A. Allow trusted Microsoft services
- **B.** B. Selected networks with service endpoints
- **C.** C. Public network access: Enabled + IP allowlist
- **D.** D. Create private endpoints in Spoke-1/2 and set Public network access: Disabled ✅

**Correct answer:** D

**Explanation:**

Choice D is correct. Private endpoints place a private IP for the storage account into Spoke-1/2, routing all data-plane traffic over your private network. Setting Public network access: Disabled ensures no public endpoint accesseven with SAS/keysso Internet clients cant reach the account. With private DNS zone integration, on-prem resolves the private endpoint over VPN/ER, meeting the VNet-only requirement cleanly.
Why the other options are incorrect
A: Allowing trusted Microsoft services is a special exception for certain service-to-service scenarios and doesnt enforce VNet-only access.
B: Service endpoints keep the public endpoint, expose public IP space, and dont block Internet access with credentials.
C: Public access + IP allowlist still leaves a public endpoint reachable from the Internet; it violates the private-only requirement.

---

### Question 60

A user deleted a folder on a Windows VM protected by VM backup. You need a fast, targeted restore with no VM redeploy and minimal downtime.
What should you do?

**Options:**

- **A.** A. Restore VM (overwrite)
- **B.** B. File Recovery: mount the recovery point, copy back the folder ✅
- **C.** C. ASR test failover to a clean VM
- **D.** D. Recreate the folder from a storage snapshot

**Correct answer:** B

**Explanation:**

Choice B is correct. File Recovery mounts a selected recovery point from the vault to the running VM (via a temporary iSCSI/PowerShell experience), letting you copy only the missing files back. Its fast, non-disruptive, and avoids a full VM restore. You choose the restore point, mount, copy, and detachideal for surgical recoveries.
Why the other options are incorrect
A: A full VM overwrite is heavy, risks config drift, and causes downtime.
C: ASR test failover is for DR validation, not file-level recovery.
D: The VMs OS disk isnt guaranteed to align with any storage snapshot you may have; Azure Backup already maintains consistent recovery points for the VM.

---
