import { useState } from "react";

interface Project {
  title: string;
  category: string;
  shortOverview: string;
  context: string;
  role: string;
  solution: string;
  outcomes: string;
  technologies: string[];
  icon: JSX.Element;
  link: string;
  overview?: {
    productName: string;
    domain: string;
    role: string;
    timeline: string;
    platform: string;
    summary: string;
  };
  impactCreated?: string[];
  myDecisions?: string[];
  retrospective?: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "AI-Driven Safety Compliance Platform",
      category: "Computer Vision Platform",
      shortOverview: "Industrial sites were running on manual supervision and post-incident reports — safety officers had no real-time visibility into PPE violations or zone breaches while they were happening. I led the end-to-end execution of a computer vision platform that changed that: real-time detection of 16+ safety violation types, deployed at scale across multiple enterprise sites, achieving 80–85% production accuracy.",
      context: "<h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">Who Was the User</h4><p class=\\\"text-gray-700 dark:text-gray-300 mb-4\\\">Plant safety officers and site supervisors at industrial facilities — manufacturing floors, construction sites, warehouses. Their reality: manual floor patrols, post-incident CCTV reviews, and compliance reports filed after something had already gone wrong. No system told them a worker had entered a restricted zone or removed their hard hat while it was happening.</p><h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">The Problem</h4><ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\\\"><li>Safety monitoring was entirely reactive — violations were caught post-incident, not in real time</li><li>Manual supervision was inconsistent and unscalable across multi-camera, multi-zone industrial sites</li><li>No auditable alert trail existed for regulatory compliance inspections</li><li>Clients needed a system non-technical safety staff could use and trust — not ML dashboards</li></ul><h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">Key Constraints</h4><ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\\\"><li><strong>Variable site conditions:</strong> Lighting, camera angles, and layouts differed across clients — a fixed model degraded fast across sites</li><li><strong>False positive risk:</strong> Alert fatigue in an industrial setting erodes supervisor trust quickly; once ignored, the product fails regardless of accuracy</li><li><strong>Edge latency requirement:</strong> Detection had to happen on-device — a 2+ second cloud round-trip made real-time alerts meaningless</li><li><strong>Non-technical users:</strong> Safety officers needed plain-language alerts with location and context, not model confidence scores</li></ul>",
      role: "<h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">My Role</h4><ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\\\"><li>Owned the product from discovery through multi-site production rollout</li><li>Ran stakeholder workshops with safety officers and plant managers across 2 client sites before sprint 1</li><li>Reviewed 6 months of historical incident data to identify highest-frequency violation categories</li><li>Analysed false-positive trends from a competitor tool a client had previously abandoned — directly shaped our threshold design</li><li>Primary interface between enterprise clients, ML engineers, backend, design, and QA throughout delivery</li></ul><h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">Key Product Decisions</h4><ul class=\\\"list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300\\\"><li><strong>MVP scope: 6 violation types, not 16.</strong> Had a taxonomy of 16+ scenarios. Chose the 6 highest-confidence, highest-frequency violations for MVP — missing hard hats, vests, gloves, zone breaches, unsafe proximity, crowd density. Rationale: faster delivery, lower ML risk, and a trust-building first deployment. Expanded to 16+ in subsequent releases based on pilot feedback.</li><li><strong>Hybrid rule-based + ML over pure ML.</strong> ML team had a capable model but enterprise clients needed to explain every alert to regulators. A black-box model would have failed UAT. The hybrid layer added engineering complexity but was non-negotiable for compliance readiness.</li><li><strong>Per-site configurable thresholds, not global defaults.</strong> Early testing showed a 3× false positive variance across sites with different lighting. Scoped per-site configuration into MVP — without it, the first enterprise deployment would have failed on day 1.</li><li><strong>Real-time response over peak accuracy.</strong> Heavier models could have hit higher theoretical accuracy at 2–3 second latency. Chose to cap model complexity to stay under 500ms — a 2-second delay on a zone breach alert is effectively useless in a live industrial environment.</li></ul><h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">Delivery Approach</h4><ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\\\"><li><strong>Phase 1 — Pilot:</strong> 2 cameras, 1 site, 6 violation types. Validated accuracy and alert workflow. Used feedback to calibrate thresholds before any expansion.</li><li><strong>Phase 2 — Controlled expansion:</strong> Full site rollout. Introduced retraining pipeline and per-site config. Ran parallel to manual supervision for 3 weeks to build supervisor trust.</li><li><strong>Phase 3 — Multi-site production:</strong> Scaled to additional enterprise sites. Expanded to 16+ violation types. Zero architecture changes required between sites.</li></ul>",
      solution: "<h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">What We Built</h4><p class=\\\"text-gray-700 dark:text-gray-300 mb-4\\\">A computer-vision-driven safety monitoring system deployed at the edge, processing live camera feeds in real time across industrial sites.</p><ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6\\\"><li><strong>Detection engine:</strong> Hybrid rule-based + ML model detecting 16+ violation types — PPE non-compliance (hard hats, vests, gloves), restricted zone breaches, unsafe proximity to machinery, and crowd density violations</li><li><strong>Edge inference pipeline:</strong> On-device processing under 500ms latency, designed for variable hardware across client sites — no round-trip to cloud required for real-time alerts</li><li><strong>Alert & logging system:</strong> Instant push alerts to safety supervisors with violation type, location, camera ID, and timestamp — all logged in an auditable format for regulatory reporting</li><li><strong>Supervisor dashboard:</strong> Centralised web app showing live violation feed, site-level compliance scores, historical trend data, and per-camera status — designed for non-technical safety staff</li><li><strong>Configurable threshold layer:</strong> Per-site configuration of detection sensitivity, violation categories, and alert routing — allowing enterprise clients to adapt the system without engineering support</li><li><strong>Retraining pipeline:</strong> Feedback loop from false positive/negative reports back into model retraining, enabling continuous accuracy improvement post-deployment</li></ul><h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">How We Rolled It Out</h4><ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\\\"><li><strong>Phase 1 — Pilot (2 cameras, 1 site, 6 violation types):</strong> Validated detection accuracy and alert workflow with a single safety team. Used pilot feedback to calibrate thresholds and refine the dashboard UX before any expansion.</li><li><strong>Phase 2 — Controlled expansion (full site, all cameras):</strong> Rolled out across the full site with the refined model. Introduced the retraining pipeline and per-site configuration. Ran parallel to manual supervision for 3 weeks to build trust.</li><li><strong>Phase 3 — Multi-site production deployment:</strong> Scaled to additional enterprise client sites with site-specific onboarding. Expanded violation taxonomy to 16+ types based on Phase 1–2 learnings.</li></ul>",
      outcomes: "<h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">Results</h4><ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6\\\"><li><strong>80–85% detection accuracy in production</strong> — achieved across variable site conditions after the per-site threshold configuration layer was introduced. Initial pilot accuracy was ~65%; the threshold system closed the gap without requiring model retraining between sites.</li><li><strong>~30% reduction in incident response time</strong> — from an average of 8–12 minutes (manual patrol or post-CCTV review) to under 1 minute via real-time push alerts to supervisors.</li><li><strong>~40% reduction in manual monitoring effort</strong> — safety officers shifted from continuous floor patrol to exception-based response. Two sites reported redeployment of one full-time monitor role to other safety functions.</li><li><strong>Multi-site enterprise deployment</strong> — scaled from a 2-camera pilot to full production across multiple client sites within the same product lifecycle, with zero architecture changes required between sites.</li><li><strong>Compliance readiness:</strong> Every alert logged with violation type, timestamp, camera ID, and image frame — giving enterprise clients an auditable trail for regulatory inspections for the first time.</li></ul><h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">What I'd Do Differently</h4><ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\\\"><li><strong>Define false positive tolerance with clients before sprint 1, not after.</strong> We set detection thresholds based on engineering estimates. When the first site complained about alert fatigue, we realised each client had a completely different tolerance. A 30-minute threshold workshop per client in week 1 would have saved 3+ sprint cycles of reactive recalibration.</li><li><strong>Build the retraining feedback loop into the MVP, not Phase 2.</strong> We treated retraining as a post-launch activity. In practice, site-specific model drift started within 3 weeks of deployment. If the feedback pipeline had been live from day 1 of the pilot, we would have had far more retraining data by the time we hit Phase 2.</li><li><strong>Instrument the dashboard from launch.</strong> We had no analytics on which alert types supervisors were dismissing or which cameras had the highest false positive rates. We were flying blind on product quality for the first 6 weeks post-launch. Usage instrumentation should have been a launch requirement, not a backlog item.</li></ul>",
      technologies: [
        "Computer Vision",
        "AI/ML",
        "Real-time Processing",
        "Safety Analytics",
        "Edge AI",
      ],
      overview: {
        productName: "AI-Driven Safety Compliance Platform",
        domain: "Industrial Safety & Enterprise Compliance",
        role: "Product Manager (Discovery, Strategy & Execution)",
        timeline: "Discovery → MVP → Go-Live (~8–10 months)",
        platform: "B2B | Web Application + Edge AI System",
        summary: "Industrial safety teams were reactive — violations were logged after incidents, not prevented in real time. I owned the full product lifecycle of a computer vision platform detecting 16+ safety violation types across live camera feeds at enterprise industrial sites. Key decisions: scoped MVP to 6 high-confidence violations to ship fast, pushed hybrid rule-based + ML architecture for enterprise explainability, and built per-site threshold configuration to handle variable site conditions without per-site model retraining.",
      },
      impactCreated: [
        "Detection accuracy: ~65% in pilot → 80–85% in production, closed by per-site threshold configuration (not model retraining)",
        "Incident response time: 8–12 min average (manual) → under 1 min via real-time push alerts",
        "Manual monitoring effort: reduced ~40% — 2 sites redeployed one full-time monitor role to other safety functions",
        "Scale: 2-camera pilot → multi-site enterprise deployment, zero architecture changes between sites",
        "Compliance: first auditable alert log with violation type, timestamp, camera ID, and image frame for regulatory inspections",
      ],
      myDecisions: [
        "Chose a hybrid rule-based + ML architecture over pure ML because safety clients needed explainable alerts — a black-box model would have failed enterprise UAT",
        "Prioritized 6 high-confidence violation types for MVP instead of all 16, to ship fast and build client trust before expanding scope",
        "Insisted on configurable detection thresholds per site — a fixed threshold would have caused unacceptable false positives at sites with different lighting conditions",
      ],
      retrospective: [
        "I'd push for earlier alignment on false positive tolerance with safety officers — we calibrated thresholds after complaints, not before. A structured threshold-setting workshop in week 1 would have saved 3+ sprint cycles of rework",
        "I'd define a feedback loop from site supervisors into the retraining pipeline from day one, instead of treating retraining as an ad-hoc activity triggered by complaints",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      link: "",
    },
    {
      title: "AI-Driven Music Metadata Enrichment Platform",
      category: "AI / ML + Search Intelligence Platform",
      shortOverview: "Led execution of an AI-powered metadata enrichment platform that automatically extracted rich semantic attributes from large-scale music video content. Enabled advanced search, filtering, and ranking across a catalog of ~50,000+ songs, significantly improving content discoverability and licensing readiness.",
      context: "<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">The Challenge</h4>\n\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>A large digital music library faced poor discoverability and inefficient search due to minimal and unstructured metadata.</li>\n  <li>Internal teams struggled to quickly identify content aligned with specific themes, moods, settings, and commercial use cases, leading to slow turnaround times and missed monetization opportunities.</li>\n</ul>\n\n<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Key Constraints</h4>\n\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Scope limited to video-based content (visuals + lyrics)</li>\n  <li>Initial rollout constrained to select languages for faster validation</li>\n  <li>Need for high-accuracy metadata extraction at scale</li>\n  <li>Performance optimization required for processing large video datasets</li>\n  <li>Metadata relevance validated through human-in-the-loop evaluation</li>\n</ul>",
      role: "<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Role & Ownership</h4>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Product Manager owning post-PRD execution and delivery</li>\n  <li>Led cross-functional collaboration across ML, backend, and platform teams</li>\n  <li>Owned roadmap sequencing, milestone planning, and release readiness</li>\n  <li>Acted as primary interface between business and engineering</li>\n</ul>\n\n<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Discovery & Planning Inputs</h4>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Identified search inefficiency as the core bottleneck impacting business velocity</li>\n  <li>Partnered with stakeholders to define commercially meaningful metadata attributes (mood, theme, energy, environment, relationships, etc.)</li>\n  <li>Designed a phased rollout plan to balance accuracy, scale, and time-to-value</li>\n  <li>Defined success metrics around retrieval relevance and usability, not just model performance</li>\n</ul>\n\n<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Product Strategy</h4>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Implemented a 2-stage execution strategy:</li>\n</ul>\n<ul class=\"list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-6\">\n  <li>AI/ML model development for multi-attribute metadata extraction</li>\n  <li>API-first productisation enabling search, filtering, and ranking</li>\n</ul>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Introduced metadata-weighted ranking to support intent-driven discovery</li>\n  <li>Built a future-ready architecture to support additional content types and languages</li>\n</ul>",
      solution: "<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Solution Overview</h4>\n<p class=\"text-gray-700 dark:text-gray-300 mb-4\">Built an AI-powered metadata enrichment system that automatically extracts semantic attributes from music video content and enables advanced search, filtering, and relevance ranking via backend APIs.</p>",
      outcomes: "<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Key Achievements & Impact</h4>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Delivered an AI-based metadata enrichment system</li>\n  <li>Enabled search-by-intent use cases across 11+ metadata attributes</li>\n  <li>Reduced manual tagging dependency and improved metadata consistency</li>\n  <li>Improved content discoverability and licensing readiness at scale</li>\n  <li>Successfully scaled to 50,000+ video assets</li>\n</ul>",
      technologies: [
        "AI/ML & NLP",
        "Semantic Search",
        "Backend APIs",
        "Large-Scale Data Processing",
        "Content Intelligence",
      ],
      overview: {
        productName: "AI-Driven Music Metadata Enrichment Platform",
        domain: "Media, Entertainment & Digital Content Intelligence",
        role: "Product Manager (Discovery, Execution & Productisation)",
        timeline: "Discovery → Algorithm Development → Productisation → Scale (~4 months)",
        platform: "B2B | Backend APIs + Search & Retrieval System",
        summary: "Led execution of an AI-driven music metadata enrichment platform designed to improve search, discovery, and commercial usability of a large-scale digital content library. The solution leveraged computer vision and ML models to extract rich, structured metadata from video content, enabling advanced filtering, relevance-based ranking, and faster content discovery. Delivered an API-first, scalable system that significantly improved retrieval efficiency for licensing, curation, and business teams.",
      },
      impactCreated: [
        "Content discovery time: reduced by ~50% for internal teams vs. prior manual search-and-tag workflow",
        "Search relevance: improved by ~50% via metadata-weighted ranking vs. basic keyword search",
        "Scale: enriched 20K+ video assets with AI-generated metadata (from zero structured metadata at baseline)",
        "Manual tagging dependency: significantly reduced by automating extraction of 11 semantic attributes",
        "Licensing readiness: content now discoverable by theme, mood, and context vs. title-only lookup before",
      ],
      myDecisions: [
        "Scoped Phase 1 to video-only content (not audio) to reduce ML complexity and hit a 4-month delivery window — expanded to audio only after accuracy was validated",
        "Defined 11 metadata attributes with business stakeholders before any model work started — prevented the classic trap of building what's technically easy vs. what's commercially useful",
        "Added a human-in-the-loop validation layer for low-confidence extractions instead of auto-publishing — protected data quality at scale even at the cost of some throughput",
      ],
      retrospective: [
        "I'd run a faster, scrappier proof-of-concept with 500 videos before committing to the full 50K scale plan — we assumed the accuracy would hold at scale, and it mostly did, but we got lucky",
        "I'd involve the licensing team earlier in defining 'commercially useful' metadata — the initial attribute set was defined with editorial teams, and licensing had different needs we retrofitted late",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      link: "",
    },
    // Include all other projects exactly as they were in the previous working version...
    {
      title: "AI-Based People & Vehicle Tracking Platform",
      category: "Computer Vision Platform",
      shortOverview: "Led execution of an AI-powered computer vision platform that analyzes people and vehicle movement from recorded videos and live camera feeds.",
      context: "<h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">The Challenge</h4>\n\n<ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\\\">\n  <li>High-traffic environments such as construction sites, warehouses, and roadways lacked automated, AI-driven visibility into movement patterns of people and vehicles.</li>\n  <li>Existing systems relied on manual monitoring or basic CCTV footage, making it difficult to derive actionable insights for safety, traffic flow, and operational optimization.</li>\n</ul>\n\n<h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">Key Constraints</h4>\n\n<ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\\\">\n  <li>Required high-accuracy object detection and tracking across varying video quality</li>\n  <li>Support for both recorded video uploads and live streams</li>\n  <li>Real-time and batch analytics without facial recognition or identity storage</li>\n  <li>High compute and storage demands for video processing</li>\n  <li>Clear scope boundaries to exclude alerts, violations, and personal identification</li>\n</ul>",
      role: "<h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">Role & Ownership</h4>\n<ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\\\">\n  <li>Product Manager owning AI product execution from PRD to production</li>\n  <li>Drove roadmap planning, milestone sequencing, and delivery governance</li>\n  <li>Acted as the bridge between AI/ML engineers, backend teams, and business stakeholders</li>\n  <li>Owned feature prioritization, scope control, and UAT readiness</li>\n</ul>\n\n<h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">Discovery & Planning Inputs</h4>\n<ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\\\">\n  <li>Identified key AI use cases: movement tracking, flow analysis, congestion detection, and pattern visualization</li>\n  <li>Defined personas focused on safety monitoring and operational analytics</li>\n  <li>Collaborated with ML engineers to align model capabilities with business outcomes</li>\n  <li>Prioritized explainable outputs (graphs, heatmaps, reports) over black-box predictions</li>\n  <li>Explicitly excluded facial recognition to address privacy and compliance concerns</li>\n</ul>\n\n<h4 class=\\\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\\\">Product Strategy</h4>\n<ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\\\">\n  <li>Designed a modular AI analytics architecture comprising:</li>\n</ul>\n<ul class=\\\"list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-6\\\">\n  <li>Deep learning–based object detection and tracking with persistent unique IDs</li>\n  <li>Session-based video analysis to support large datasets</li>\n  <li>AI-generated heatmaps, trajectories, and movement graphs</li>\n  <li>Configurable transit lines and zone-based counting</li>\n  <li>Speed estimation and time-based flow analysis</li>\n</ul>\n<ul class=\\\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\\\">\n  <li>Enabled data export (Excel) to integrate AI insights into downstream workflows</li>\n  <li>Built a cloud-native, scalable platform ready for future extensions such as alerts, predictive analytics, and edge deployment</li>\n</ul>",
      solution: "",
      outcomes: "",
      technologies: [
        "Computer Vision",
        "AI/ML",
        "Video Analytics",
        "Object Tracking",
        "Cloud Computing",
      ],
      overview: {
        productName: "AI-Based People & Vehicle Tracking Platform",
        domain: "Computer Vision / Safety & Operational Analytics",
        role: "Product Manager (Execution & Scale)",
        timeline: "Discovery → MVP → UAT → Go-Live (~ 8 months)",
        platform: "B2B Cloud-based Web Application (Recorded + Live Video Analysis)",
        summary: "Led execution of an AI-powered computer vision platform that analyzes people and vehicle movement from recorded videos and live camera feeds. The system leverages deep learning models to detect, track, and re-identify moving objects, generating heatmaps, trajectories, speed metrics, and flow analytics. Delivered a scalable, cloud-based AI solution enabling safety monitoring and operational insights across high-activity environments.",
      },
      impactCreated: [
        "Manual monitoring effort: reduced by ~50% by automating movement analysis from recorded video feeds",
        "Operational visibility: improved by ~50% through heatmaps, trajectory data, and flow analytics vs. raw CCTV footage",
        "Object tracking: enabled real-time tracking with persistent unique IDs per stream (vs. no automated tracking before)",
        "Data export: enabled downstream integration via Excel export, replacing manual observation logs",
      ],
      myDecisions: [
        "Explicitly excluded facial recognition from scope despite client interest — proactively flagged privacy and regulatory risk, which protected the client from compliance issues and built credibility",
        "Chose session-based video processing over real-time streaming for the MVP — lower infrastructure cost and sufficient for the analytics use case at that stage",
        "Prioritized heatmaps and trajectory exports over live alerts in v1 — the core value was operational insights, not incident response, and keeping scope tight enabled on-time delivery",
      ],
      retrospective: [
        "I'd have pushed harder for a defined SLA on video processing latency from the start — we only discovered the client's expectations during UAT, which caused a late-stage scope negotiation",
        "I'd add a self-serve configuration layer for zone drawing earlier — requiring engineering support for each new camera zone setup became a friction point during client onboarding",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "",
    },
    {
      title: "Carbon Footprint Analytics Platform",
      category: "Sustainability & ESG Platform",
      shortOverview: "Led execution of a web-based carbon footprint and Life Cycle Assessment (LCA) platform enabling businesses to calculate, track, and report emissions across products and buildings.",
      context: "<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">The Challenge</h4>\n\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Organizations lacked a centralized, configurable system to accurately calculate carbon emissions across products and infrastructure.</li>\n  <li>Existing processes were manual, fragmented, and difficult to audit, making it challenging to generate consistent, regulation-aligned sustainability reports for internal tracking and external disclosures.</li>\n</ul>\n\n<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Key Constraints</h4>\n\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Tight delivery timeline (~20–25 business days)</li>\n  <li>Need for configurable computation logic to support different emission scopes and categories</li>\n  <li>Support for structured data ingestion (CSV/XLSX) with validation</li>\n  <li>Requirement to serve both administrative users and end customers</li>\n  <li>High accuracy and transparency required for sustainability reporting</li>\n</ul>\n\n<p class=\"text-gray-700 dark:text-gray-300\">Climate Wise</p>",
      role: "<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Role & Ownership</h4>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Product Manager owning execution from requirements to production</li>\n  <li>Led scope definition, prioritization, and sprint planning</li>\n  <li>Coordinated across design, backend, frontend, and QA teams</li>\n  <li>Owned UAT readiness, stakeholder reviews, and production rollout</li>\n</ul>\n\n<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Discovery & Planning Inputs</h4>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Identified core user personas: platform admins (configuration & governance) and customers (data input & reporting)</li>\n  <li>Defined a modular computation framework using coefficients, formulas, and services to ensure flexibility</li>\n  <li>Structured reporting requirements around scope, category, and emission breakdowns</li>\n  <li>Planned phased delivery to de-risk complex areas like report generation and data ingestion</li>\n</ul>\n\n<p class=\"text-gray-700 dark:text-gray-300\">Climate Wise</p>\n\n<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Product Strategy</h4>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Designed a role-based platform architecture:</li>\n</ul>\n<ul class=\"list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-6\">\n  <li>Admin layer for managing coefficients, formulas, tags, and LCA settings</li>\n  <li>Customer layer for project creation, data upload, and report generation</li>\n</ul>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Implemented formula-driven emission calculations to allow easy updates without code changes</li>\n  <li>Enabled filterable, drill-down reports for transparency and auditability</li>\n  <li>Delivered a cloud-deployed, scalable system ready for future regulatory and feature expansion</li>\n</ul>",
      solution: "",
      outcomes: "",
      technologies: [
        "Sustainability Analytics",
        "ESG Reporting",
        "Carbon Tracking",
        "Enterprise Platform",
      ],
      overview: {
        productName: "Carbon Footprint Analytics Platform",
        domain: "Sustainability & Environmental Compliance",
        role: "Product Manager (Execution & Delivery)",
        timeline: "~2-3 months",
        platform: "B2B | Web Application + Analytics Engine",
        summary: "Led execution of a web-based carbon footprint and Life Cycle Assessment (LCA) platform enabling businesses to calculate, track, and report emissions across products and buildings. The platform provided configurable carbon coefficients, formula-based computation, and structured reporting aligned with emission scopes and categories. Delivered an end-to-end system supporting data ingestion, calculation logic, and detailed sustainability reporting within aggressive timelines.",
      },
      impactCreated: [
        "Reporting effort: reduced manual carbon calculation work by ~50% via automated LCA-based computation",
        "Data scale: enabled analysis of 100+ datasets via structured CSV/XLSX ingestion pipelines (vs. manual entry before)",
        "Reporting speed: significantly faster sustainability report generation vs. prior fragmented spreadsheet process",
        "Auditability: full drill-down reporting by emission scope and category replaced opaque manual calculations",
        "Delivered within 20–25 business days from kickoff to production — aggressive timeline met through phased scoping",
      ],
      myDecisions: [
        "Designed formula-driven emission calculations (configurable coefficients) instead of hardcoded logic — this meant future regulatory changes could be handled by config updates, not code releases",
        "Built a role-based architecture separating admin and customer flows from day one — even though the MVP only had one client, multi-tenancy readiness was a stated requirement for future growth",
        "Phased delivery to tackle report generation last — it was the highest-risk module, and sequencing it after core data ingestion meant we had real data to test against, not mocks",
      ],
      retrospective: [
        "With a 20–25 business day timeline, I'd have built a shared validation checklist with the client for the emission formula logic before sprint 1 — the late discovery of a coefficient mismatch cost us 4 days",
        "I'd have prioritized a data validation error UX earlier — users uploading malformed CSVs got generic errors, and improving this post-launch would have reduced support volume significantly",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      link: "",
    },
    {
      title: "Multi-Role Program Workflow Platform",
      category: "Program Intelligence & Reporting System",
      shortOverview: "Led execution of platform enhancements for an enterprise program management system used to manage startup applications, evaluations, and funding workflows.",
      context: "<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">The Challenge</h4>\n\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>The platform required functional and usability upgrades to support evolving program needs.</li>\n  <li>Administrators lacked flexible reporting capabilities, program workflows had unnecessary complexity, and a new innovation program needed to be launched quickly with custom application logic and evaluation flows.</li>\n  <li>Additionally, legacy code introduced performance and maintainability risks.</li>\n</ul>\n\n<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Key Constraints</h4>\n\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Aggressive delivery timeline (~10 days)</li>\n  <li>Multiple user roles with distinct permissions and workflows</li>\n  <li>Need to launch a new program without disrupting existing programs</li>\n  <li>Selective UI simplification without breaking compliance workflows</li>\n  <li>Existing technical debt and performance bottlenecks in the codebase</li>\n</ul>",
      role: "<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Role & Ownership</h4>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Product Manager owning end-to-end execution of platform enhancements</li>\n  <li>Translated business requirements into clear functional and technical scopes</li>\n  <li>Coordinated closely with engineering, QA, and program stakeholders</li>\n  <li>Owned prioritization, delivery sequencing, and release readiness</li>\n</ul>\n\n<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Discovery & Planning Inputs</h4>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Mapped four core personas: applicants, reviewers, program managers, and super admins</li>\n  <li>Identified admin reporting and application review as high-friction operational areas</li>\n  <li>Audited existing workflows to remove non-essential fields and steps</li>\n  <li>Assessed technical gaps impacting performance, reliability, and future scalability</li>\n</ul>\n\n<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Product Strategy</h4>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Introduced custom report generation for admin users with filter-based data export</li>\n  <li>Streamlined project management workflows by hiding non-critical fields for select programs</li>\n  <li>Launched a new innovation program module with:</li>\n</ul>\n<ul class=\"list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-6\">\n  <li>Role-based access</li>\n  <li>Live vs historical application visibility</li>\n  <li>Accordion-based, save-as-draft application UX</li>\n</ul>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Redesigned application forms to focus on:</li>\n</ul>\n<ul class=\"list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-6\">\n  <li>Problem articulation</li>\n  <li>Product differentiation</li>\n  <li>Sustainability and validation signals</li>\n</ul>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Partnered with engineering to prioritize technical improvements, including:</li>\n</ul>\n<ul class=\"list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-6\">\n  <li>Optimized file uploads using pre-signed URLs</li>\n  <li>Improved data consistency and rollback handling</li>\n  <li>Better API method usage and coding standards alignment</li>\n</ul>",
      solution: "",
      outcomes: "",
      technologies: [
        "Program Management",
        "Workflow Automation",
        "Reporting Systems",
        "Role-Based Access",
        "Enterprise Platforms",
      ],
      overview: {
        productName: "Multi-Role Program Workflow Platform",
        domain: "Enterprise Program Management",
        role: "Product Manager",
        timeline: "~2-3 months",
        platform: "B2B Web Application (Role-based)",
        summary: "Led execution of platform enhancements for an enterprise program management system used to manage startup applications, evaluations, and funding workflows. The scope included introducing custom admin-level reporting, simplifying project management workflows, and launching a new digital innovation program with redesigned application flows. Delivered feature upgrades, UX improvements, and targeted technical refactors within a compressed timeline to improve platform usability, governance, and scalability.",
      },
      impactCreated: [
        "Reduced application review time via streamlined program workflows",
        "Improved admin efficiency with custom reporting and data exports",
        "Supported multi-role workflows across 4 user personas",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      link: "",
    },
    {
      title: "Biotech Investor Portal",
      category: "Government Platform",
      shortOverview: "Directed the end-to-end delivery of a government-backed platform connecting biotech startups with investors, mentors, and incubation centers. Focused on enabling transparent startup evaluation, efficient stakeholder collaboration, and seamless integration with India's startup ecosystem.",
      context: "<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">The Challenge</h4>\n\n<p class=\"text-gray-700 dark:text-gray-300 mb-4\">The biotech startup ecosystem in India faced significant barriers to growth and investment. Startups struggled with limited visibility to potential investors, while investors lacked efficient ways to discover and evaluate promising biotech ventures. Government initiatives aimed to bridge this gap but lacked a unified, scalable platform to facilitate connections, evaluations, and funding workflows.</p>\n\n<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Key Constraints</h4>\n\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Multi-stakeholder ecosystem requiring coordination between startups, investors, mentors, and government bodies</li>\n  <li>Strict compliance and governance requirements for government-backed initiatives</li>\n  <li>Need for secure, transparent evaluation processes and document sharing</li>\n  <li>Scalability to support India's diverse biotech landscape across multiple regions</li>\n  <li>Building trust and adoption in a nascent ecosystem with varying levels of digital maturity</li>\n</ul>",
      role: "<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Role & Ownership</h4>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Owned end-to-end product delivery from requirements to launch</li>\n  <li>Led stakeholder alignment with government officials and ecosystem partners</li>\n  <li>Drove roadmap prioritization and delivery governance</li>\n</ul>\n\n<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Discovery & Planning Inputs</h4>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Identified key ecosystem pain points in startup discovery, evaluation, and funding access</li>\n  <li>Defined core personas and role-based workflows</li>\n  <li>Aligned product requirements with policy and compliance mandates</li>\n</ul>\n\n<h4 class=\"text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3\">Product Strategy</h4>\n<ul class=\"list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300\">\n  <li>Built a role-based investor–startup matching platform</li>\n  <li>Enabled startup profiling, evaluation, and document workflows</li>\n  <li>Designed for transparency, scalability, and government integration</li>\n</ul>",
      solution: "",
      outcomes: "",
      technologies: [
        "Startup Ecosystem",
        "Matching Algorithms",
        "Multi-stakeholder Platform",
        "Government Integration",
      ],
      overview: {
        productName: "Biotech Investor Portal",
        domain: "Biotech & Government Ecosystem",
        role: "Product Manager (Platform & Partnerships)",
        timeline: "~3-6 months",
        platform: "B2B2C | Portal + Matching Engine",
        summary: "Directed the end-to-end delivery of a government-backed platform connecting biotech startups with investors, mentors, and incubation centers. Focused on enabling transparent startup evaluation, efficient stakeholder collaboration, and seamless integration with India's startup ecosystem.",
      },
      impactCreated: [
        "Improved startup–investor discovery efficiency via a unified digital platform",
        "Reduced investor evaluation time with structured startup profiles",
        "Enabled secure collaboration across 3+ ecosystem stakeholders",
        "Built a scalable government-backed biotech innovation portal",
        "Improved transparency in startup evaluation and funding workflows",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      link: "",
    }
  ];

  return (
    <section
      id="projects"
      className="py-14 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of the innovative products I've led and delivered across
            AI, sustainability, and biotech domains
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setModalOpen(true);
              }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {project.category}
                  </p>
                </div>
              </div>
              {project.overview && (
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-4 border border-blue-100 dark:border-gray-600">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-3 pb-2 border-b border-blue-200 dark:border-gray-600">
                    30-Second Overview
                  </h4>
                  <div className="grid grid-cols-1 gap-3 mb-3 pb-3 border-b border-blue-200 dark:border-gray-600">
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                      </svg>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                          Product Name
                        </p>
                        <p className="text-xs text-gray-900 dark:text-gray-100 font-medium">
                          {project.overview.productName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.5 1.5H3a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h14a1.5 1.5 0 001.5-1.5V8.5m-5-5l5 5m0 0V3.5m0 5v5"/>
                      </svg>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                          Domain
                        </p>
                        <p className="text-xs text-gray-900 dark:text-gray-100 font-medium">
                          {project.overview.domain}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                      </svg>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                          Role
                        </p>
                        <p className="text-xs text-gray-900 dark:text-gray-100 font-medium">
                          {project.overview.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                          Timeline
                        </p>
                        <p className="text-xs text-gray-900 dark:text-gray-100 font-medium">
                          {project.overview.timeline}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                      </svg>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                          Platform
                        </p>
                        <p className="text-xs text-gray-900 dark:text-gray-100 font-medium">
                          {project.overview.platform}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Summary
                    </p>
                    <p className="text-xs text-gray-900 dark:text-gray-100 leading-relaxed">
                      {project.overview.summary}
                    </p>
                  </div>
                  {project.impactCreated && project.impactCreated.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-blue-200 dark:border-gray-600">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                        Impact Created
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        {project.impactCreated.map((impact, idx) => (
                          <li key={idx} className="text-xs text-gray-900 dark:text-gray-100 leading-relaxed">
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.myDecisions && project.myDecisions.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-blue-200 dark:border-gray-600">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                        Key PM Decisions
                      </p>
                      <ul className="space-y-1">
                        {project.myDecisions.map((decision, idx) => (
                          <li key={idx} className="text-xs text-gray-900 dark:text-gray-100 leading-relaxed flex items-start gap-1.5">
                            <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                            {decision}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {modalOpen && selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 pt-20"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex items-start space-x-4 mb-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  {selectedProject.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {selectedProject.category}
                  </p>
                </div>
              </div>

              {selectedProject.overview && (
                <div className="mb-10 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-8 border border-blue-100 dark:border-gray-600">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-6 pb-4 border-b border-blue-200 dark:border-gray-600">
                    30-Second Project Overview
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 pb-6 border-b border-blue-200 dark:border-gray-600">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                      </svg>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                          Product Name
                        </p>
                        <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                          {selectedProject.overview.productName}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.5 1.5H3a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h14a1.5 1.5 0 001.5-1.5V8.5m-5-5l5 5m0 0V3.5m0 5v5"/>
                      </svg>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                          Domain
                        </p>
                        <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                          {selectedProject.overview.domain}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                      </svg>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                          Role
                        </p>
                        <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                          {selectedProject.overview.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                          Timeline
                        </p>
                        <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                          {selectedProject.overview.timeline}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-2 flex items-start space-x-3">
                      <svg className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                      </svg>
                      <div>
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                          Platform
                        </p>
                        <p className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                          {selectedProject.overview.platform}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Summary
                    </p>
                    <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">
                      {selectedProject.overview.summary}
                    </p>
                  </div>

                  {selectedProject.impactCreated && selectedProject.impactCreated.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-blue-200 dark:border-gray-600">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3">
                        Impact Created
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        {selectedProject.impactCreated.map((impact, idx) => (
                          <li key={idx} className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedProject.myDecisions && selectedProject.myDecisions.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-blue-200 dark:border-gray-600">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3">
                        Key PM Decisions
                      </p>
                      <ul className="space-y-2">
                        {selectedProject.myDecisions.map((decision, idx) => (
                          <li key={idx} className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed flex items-start gap-2">
                            <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400"></span>
                            {decision}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {selectedProject.context && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
                    Project Scope & Challenge
                  </h3>
                  <div
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: selectedProject.context }}
                  />
                </div>
              )}

              {selectedProject.role && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
                    My Role, Product Strategy & Discovery
                  </h3>
                  <div
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: selectedProject.role }}
                  />
                </div>
              )}
              {selectedProject.retrospective && selectedProject.retrospective.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
                    What I'd Do Differently
                  </h3>
                  <ul className="space-y-3">
                    {selectedProject.retrospective.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                        <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400"></span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

