/**
 * Prakhar Jaiswal Portfolio - Interactive Model & Architecture Playground
 * =========================================================================
 * Production-grade vanilla JavaScript orchestrating 3 interactive AI/ML modules:
 * 1. Token Cost & Latency Optimizer (Anthropic Batch API vs Standard API)
 * 2. Hybrid RAG Semantic Retrieval Inspector (Dense Vector vs BM25 Alpha-Tuning)
 * 3. YOLOv8-Seg Defect Segmentation Inspector (Real-time Polygon Mask Canvas)
 *
 * Adheres to "Sketchbook Artisan" design tokens, tabular-nums, WCAG 2.1 AA,
 * full Light & Dark mode support, and zero external runtime dependencies.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DATA & CONSTANTS
  // =========================================================================

  // Pricing Model Data (Per Million Tokens)
  const MODEL_PRICING = {
    sonnet: {
      name: 'Claude 3.7 Sonnet',
      realtimeInput: 3.00,
      realtimeOutput: 15.00,
      realtimeCachedInput: 0.30,   // 90% discount on cache-read
      batchInput: 1.50,            // Exactly 50% discount
      batchOutput: 7.50,           // Exactly 50% discount
      batchCachedInput: 0.15,      // Exactly 50% discount
      realtimeLatencyP95: '1.8s',
      batchSLA: '<= 24h (Avg p50: 16m)',
      typicalInputRatio: 0.80,     // 80% input (documents/prompts)
      typicalOutputRatio: 0.20,    // 20% output (structured JSON extractions)
      cachedInputRatio: 0.65       // 65% of input tokens are cached schemas/few-shots
    },
    haiku: {
      name: 'Claude 3.5 Haiku',
      realtimeInput: 0.80,
      realtimeOutput: 4.00,
      realtimeCachedInput: 0.08,   // 90% discount on cache-read
      batchInput: 0.40,            // Exactly 50% discount
      batchOutput: 2.00,           // Exactly 50% discount
      batchCachedInput: 0.04,      // Exactly 50% discount
      realtimeLatencyP95: '0.9s',
      batchSLA: '<= 24h (Avg p50: 11m)',
      typicalInputRatio: 0.85,
      typicalOutputRatio: 0.15,
      cachedInputRatio: 0.65
    }
  };

  // Hybrid RAG Sample Datasets
  const RAG_QUERIES = {
    pii: {
      queryText: 'Financial audit PII redaction policy',
      highlightTokens: ['financial', 'audit', 'pii', 'redaction', 'policy', 'ssns', 'identifiers', 'presidio'],
      chunks: [
        {
          id: 'chunk-pii-a',
          title: 'SEC Compliance & Client Confidentiality SOP',
          source: 'DOC-FIN-2024-Q4 §8.1.2',
          denseScore: 0.945,    // High conceptual match (understands PII & financial audit concepts)
          bm25Score: 0.420,     // Low lexical match (uses synonyms: SSNs, banking, entities)
          snippet: 'All confidential client identifiers, taxpayer SSNs, and banking account numbers must undergo automated entity scrubbing prior to external auditor transmission.'
        },
        {
          id: 'chunk-pii-b',
          title: 'Quantyc AI PII Redaction Worker Config',
          source: 'pipeline-worker-redact.py §L42',
          denseScore: 0.785,    // Moderate semantic match
          bm25Score: 0.975,     // Exact keyword hits: "financial", "audit", "PII", "redaction", "policy"
          snippet: 'Execute Microsoft Presidio entity analyzer for financial audit PII redaction policy enforcement across multi-tenant PostgreSQL document extraction batches.'
        },
        {
          id: 'chunk-pii-c',
          title: 'AWS S3 Audit Trail & Retention Rules',
          source: 'cloud-storage-policy.md §14',
          denseScore: 0.610,    // General data governance
          bm25Score: 0.590,     // Partial lexical match on "audit"
          snippet: 'Server-side encryption with customer KMS keys protects historical financial audit logs from unauthorized internal actor modification or accidental purge.'
        }
      ]
    },
    fastapi: {
      queryText: 'FastAPI streaming worker timeout',
      highlightTokens: ['fastapi', 'streaming', 'worker', 'timeout', 'keepalive', 'sse', 'generators', '504'],
      chunks: [
        {
          id: 'chunk-fa-a',
          title: 'Uvicorn Worker Process Settings',
          source: 'uvicorn-cluster.conf §L18',
          denseScore: 0.770,    // Moderate semantic match
          bm25Score: 0.980,     // Exact keywords: "FastAPI", "streaming", "worker", "timeout"
          snippet: 'Set `timeout_keep_alive=75` and `graceful_timeout=120` in FastAPI streaming worker timeout settings to prevent abrupt socket closure during long SSE token yields.'
        },
        {
          id: 'chunk-fa-b',
          title: 'Asynchronous Stream Generator Mechanics',
          source: 'async-pipeline-design.md §5.3',
          denseScore: 0.935,    // High semantic understanding of long-lived streams dropping
          bm25Score: 0.360,     // Uses "generators", "504 gateway", lacks "worker"
          snippet: 'Asynchronous Python generators holding long-lived HTTP response streams trigger reverse-proxy 504 gateway dropouts if periodic keepalive heartbeats are omitted.'
        },
        {
          id: 'chunk-fa-c',
          title: 'Browser Canvas Web Worker Dispatcher',
          source: 'pathfinding-worker.ts §9',
          denseScore: 0.490,    // Unrelated front-end worker
          bm25Score: 0.610,     // Partial lexical match on "worker", "timeout"
          snippet: 'Terminate background thread Web Worker after 3000ms idle timeout to conserve client memory during interactive graph visualizer executions.'
        }
      ]
    },
    efficientnet: {
      queryText: 'EfficientNet colorimetry features',
      highlightTokens: ['efficientnet', 'colorimetry', 'features', 'chromaticity', 'pallor', 'conjunctiva', 'lab', 'hsv'],
      chunks: [
        {
          id: 'chunk-eff-a',
          title: 'Conjunctival Anemia Diagnostic Extraction',
          source: 'anemia-vision-pipeline.py §L114',
          denseScore: 0.955,    // Deep clinical semantic match (colorimetry = Lab/HSV chromaticity)
          bm25Score: 0.380,     // Lacks exact word "colorimetry"
          snippet: 'Extract Lab and HSV chromaticity channels from inferior conjunctiva palpebral ROIs to correlate microvascular hemoglobin pallor with non-invasive clinical indices.'
        },
        {
          id: 'chunk-eff-b',
          title: 'Backbone Benchmark & Transfer Weights',
          source: 'vision-backbones.md §3.1',
          denseScore: 0.815,    // Strong architecture match
          bm25Score: 0.965,     // Exact keywords: "EfficientNet", "colorimetry", "features"
          snippet: 'Fine-tuned EfficientNet-B0 backbone retains spatial colorimetry features across eye palpebral, nail bed, and palm dermal image crops with 98.4% ROC-AUC.'
        },
        {
          id: 'chunk-eff-c',
          title: 'PyTorch Image Normalization Transforms',
          source: 'dataset-transforms.py §22',
          denseScore: 0.580,    // General computer vision
          bm25Score: 0.510,     // Partial match on "features"
          snippet: 'Apply ColorJitter(brightness=0.2, hue=0.1) torchvision transforms during PyTorch transfer learning on baseline ResNet50 convolutional layers.'
        }
      ]
    }
  };

  // YOLOv8-Seg Defect Inspection Presets
  const YOLOV8_PRESETS = {
    fastener: {
      id: 'fastener',
      name: 'Fastener Missing',
      badge: 'STAMPED CHASSIS M3',
      substrateDesc: 'Industrial Stamped Aluminum Mounting Panel • 4x M3 Threaded Standoffs',
      canvasBg: 'pcb',
      primaryDefect: {
        id: 'defect-1',
        label: 'FASTENER_MISSING',
        confidence: 0.942,
        box: { x: 195, y: 75, w: 90, h: 90 },
        // Irregular hexagonal polygon approximating an empty tapped bolt hole with thread shadows
        polygon: '225,80 260,88 275,115 265,150 230,160 205,145 200,110 215,85',
        areaPx: '1,420 px²',
        centroid: 'X: 238, Y: 118',
        accentColor: '#cd6e2e',
        tagBg: 'rgba(205, 110, 46, 0.95)'
      },
      secondaryDefect: {
        id: 'defect-2',
        label: 'FASTENER_UNSEATED',
        confidence: 0.448, // Filtered out if threshold > 0.45
        box: { x: 440, y: 170, w: 75, h: 75 },
        polygon: '460,175 495,180 505,210 485,235 455,230 445,200',
        areaPx: '860 px²',
        centroid: 'X: 474, Y: 204',
        accentColor: '#ba1a1a',
        tagBg: 'rgba(186, 26, 26, 0.95)'
      },
      telemetry: {
        latencyMs: '13.8 ms',
        fps: '72 FPS',
        precision: '98.6%',
        recall: '97.2%',
        modelSize: '22.4 MB (ONNX FP16)'
      }
    },
    scratch: {
      id: 'scratch',
      name: 'Surface Paint Scratch',
      badge: 'ANODIZED SURFACE',
      substrateDesc: 'Matte Powder-Coated Metal Casing • Optical Surface Inspection',
      canvasBg: 'metal',
      primaryDefect: {
        id: 'defect-1',
        label: 'SURFACE_SCRATCH',
        confidence: 0.896,
        box: { x: 260, y: 125, w: 195, h: 65 },
        // Meandering hairline scratch polygon
        polygon: '270,160 310,145 355,150 395,138 435,132 445,142 410,158 370,162 330,172 285,178 270,168',
        areaPx: '940 px²',
        centroid: 'X: 352, Y: 154',
        accentColor: '#d97736',
        tagBg: 'rgba(217, 119, 54, 0.95)'
      },
      secondaryDefect: {
        id: 'defect-2',
        label: 'COATING_HAZE',
        confidence: 0.385, // Filtered out if threshold > 0.38
        box: { x: 130, y: 205, w: 90, h: 55 },
        polygon: '140,215 180,210 210,225 195,250 155,252 135,235',
        areaPx: '620 px²',
        centroid: 'X: 172, Y: 232',
        accentColor: '#406185',
        tagBg: 'rgba(64, 97, 133, 0.95)'
      },
      telemetry: {
        latencyMs: '14.4 ms',
        fps: '69 FPS',
        precision: '98.2%',
        recall: '96.4%',
        modelSize: '22.4 MB (ONNX FP16)'
      }
    },
    dent: {
      id: 'dent',
      name: 'Panel Dent',
      badge: 'CHASSIS SHELL STAMP',
      substrateDesc: 'Pressed Galvanized Steel Shell • Top Housing Geometry',
      canvasBg: 'metal',
      primaryDefect: {
        id: 'defect-1',
        label: 'PANEL_DENT',
        confidence: 0.918,
        box: { x: 280, y: 75, w: 135, h: 105 },
        // Concave depression polygon with lighting gradient
        polygon: '320,80 375,90 405,125 390,160 340,172 295,155 285,120 300,92',
        areaPx: '2,180 px²',
        centroid: 'X: 344, Y: 126',
        accentColor: '#406185',
        tagBg: 'rgba(64, 97, 133, 0.95)'
      },
      secondaryDefect: {
        id: 'defect-2',
        label: 'BEVEL_BURR',
        confidence: 0.510,
        box: { x: 495, y: 155, w: 80, h: 60 },
        polygon: '510,162 555,160 565,190 540,208 505,198 500,180',
        areaPx: '710 px²',
        centroid: 'X: 532, Y: 184',
        accentColor: '#ba1a1a',
        tagBg: 'rgba(186, 26, 26, 0.95)'
      },
      telemetry: {
        latencyMs: '14.1 ms',
        fps: '71 FPS',
        precision: '98.5%',
        recall: '96.9%',
        modelSize: '22.4 MB (ONNX FP16)'
      }
    }
  };

  // State Management
  const state = {
    activeTab: 'token-cost', // 'token-cost' | 'hybrid-rag' | 'yolo-seg'
    // Token Optimizer State
    tokenCost: {
      volumeMillions: 80,
      modelKey: 'sonnet',
      cachingEnabled: true
    },
    // Hybrid RAG State
    hybridRag: {
      queryKey: 'pii',
      alpha: 0.50
    },
    // YOLOv8 State
    yoloSeg: {
      presetKey: 'fastener',
      confThreshold: 0.50,
      iouThreshold: 0.45,
      activeHoverDefectId: null
    }
  };

  const numberFormatter = new Intl.NumberFormat('en-US');
  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: amount < 1000 ? 2 : 0,
      maximumFractionDigits: amount < 1000 ? 2 : 0
    }).format(amount);
  }

  // =========================================================================
  // 2. WIDGET 1: TOKEN COST & LATENCY OPTIMIZER LOGIC
  // =========================================================================

  function calculateTokenCost() {
    const { volumeMillions, modelKey, cachingEnabled } = state.tokenCost;
    const model = MODEL_PRICING[modelKey];

    const inputTokensM = volumeMillions * model.typicalInputRatio;
    const outputTokensM = volumeMillions * model.typicalOutputRatio;

    // Realtime Cost
    let realtimeCost = 0;
    if (cachingEnabled) {
      const cachedInputsM = inputTokensM * model.cachedInputRatio;
      const uncachedInputsM = inputTokensM * (1 - model.cachedInputRatio);
      realtimeCost = (uncachedInputsM * model.realtimeInput) +
                     (cachedInputsM * model.realtimeCachedInput) +
                     (outputTokensM * model.realtimeOutput);
    } else {
      realtimeCost = (inputTokensM * model.realtimeInput) +
                     (outputTokensM * model.realtimeOutput);
    }

    // Anthropic Batch API is exactly 50% discount across all base rates
    const batchCost = realtimeCost * 0.50;
    const netSavings = realtimeCost - batchCost; // Exactly 50%
    const savingsPercent = 50.0;

    return {
      realtimeCost,
      batchCost,
      netSavings,
      savingsPercent,
      volumeMillions,
      model
    };
  }

  function renderTokenOptimizer() {
    const calc = calculateTokenCost();

    // Volume Display
    const volValEl = document.getElementById('token-vol-value');
    if (volValEl) {
      volValEl.textContent = `${calc.volumeMillions}M`;
    }
    const volSubEl = document.getElementById('token-vol-formatted');
    if (volSubEl) {
      volSubEl.textContent = `${numberFormatter.format(calc.volumeMillions * 1000000)} tokens / month`;
    }

    // Cost Metrics Display
    const realtimeCostEl = document.getElementById('metric-realtime-cost');
    if (realtimeCostEl) {
      realtimeCostEl.textContent = formatCurrency(calc.realtimeCost);
    }

    const batchCostEl = document.getElementById('metric-batch-cost');
    if (batchCostEl) {
      batchCostEl.textContent = formatCurrency(calc.batchCost);
    }

    const netSavingsEl = document.getElementById('metric-net-savings');
    if (netSavingsEl) {
      netSavingsEl.textContent = formatCurrency(calc.netSavings);
    }

    const latencyEl = document.getElementById('metric-realtime-latency');
    if (latencyEl) {
      latencyEl.textContent = calc.model.realtimeLatencyP95;
    }

    const slaEl = document.getElementById('metric-batch-sla');
    if (slaEl) {
      slaEl.textContent = calc.model.batchSLA;
    }

    // Comparison Visual Bar
    // The realtime bar is 100% wide.
    // The batch bar is 50% filled, with 50% highlighted as net savings.
    const barBatchFillEl = document.getElementById('bar-batch-fill');
    if (barBatchFillEl) {
      barBatchFillEl.style.width = '50%';
    }
    const barSavingsFillEl = document.getElementById('bar-savings-fill');
    if (barSavingsFillEl) {
      barSavingsFillEl.style.width = '50%';
    }

    // Dynamic prompt caching status label
    const cachingStatusEl = document.getElementById('caching-status-badge');
    if (cachingStatusEl) {
      if (state.tokenCost.cachingEnabled) {
        cachingStatusEl.textContent = 'PROMPT CACHING: ON (65% CACHED PREFIX)';
        cachingStatusEl.className = 'inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-label-md bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 border border-emerald-400 font-bold';
      } else {
        cachingStatusEl.textContent = 'PROMPT CACHING: OFF (RAW BASE RATE)';
        cachingStatusEl.className = 'inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-label-md bg-surface-container text-on-surface-variant border border-outline-variant font-bold';
      }
    }
  }

  // =========================================================================
  // 3. WIDGET 2: HYBRID RAG SEMANTIC RETRIEVAL LOGIC
  // =========================================================================

  function calculateRAGScores() {
    const { queryKey, alpha } = state.hybridRag;
    const queryData = RAG_QUERIES[queryKey];

    // Score = (1 - alpha) * Dense + alpha * BM25
    const scoredChunks = queryData.chunks.map(chunk => {
      const hybridScore = ((1 - alpha) * chunk.denseScore) + (alpha * chunk.bm25Score);
      return {
        ...chunk,
        hybridScore,
        alpha
      };
    });

    // Sort descending by Hybrid Score
    scoredChunks.sort((a, b) => b.hybridScore - a.hybridScore);

    return {
      queryData,
      alpha,
      scoredChunks
    };
  }

  function highlightSnippet(text, tokens) {
    if (!tokens || !tokens.length) return text;
    // Build a regex matching any of the tokens case-insensitively
    const escaped = tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<mark class="bg-[#fde047]/60 dark:bg-[#7ba2cf]/35 text-primary dark:text-on-surface font-semibold px-0.5 rounded">$1</mark>');
  }

  function renderHybridRAG() {
    const { queryData, alpha, scoredChunks } = calculateRAGScores();

    // Alpha Label Updates
    const alphaValEl = document.getElementById('rag-alpha-value');
    if (alphaValEl) {
      alphaValEl.textContent = `α = ${alpha.toFixed(2)}`;
    }
    const alphaSplitEl = document.getElementById('rag-alpha-split');
    if (alphaSplitEl) {
      const densePct = Math.round((1 - alpha) * 100);
      const sparsePct = Math.round(alpha * 100);
      alphaSplitEl.textContent = `${densePct}% Dense Vector • ${sparsePct}% BM25 Sparse`;
    }

    // Active Query Readout
    const queryDisplayEl = document.getElementById('rag-active-query-text');
    if (queryDisplayEl) {
      queryDisplayEl.textContent = `"${queryData.queryText}"`;
    }

    // Render Chunks Container
    const container = document.getElementById('rag-chunks-container');
    if (!container) return;

    container.innerHTML = '';

    scoredChunks.forEach((chunk, index) => {
      const rank = index + 1;
      const isTopRank = rank === 1;

      const card = document.createElement('div');
      card.className = `p-4 rounded-lg border-2 transition-all duration-200 ${
        isTopRank
          ? 'bg-surface-container-lowest border-primary shadow-[4px_4px_0px_0px_var(--shadow-color,#1e2022)]'
          : 'bg-surface-container border-primary-container/60 shadow-[2px_2px_0px_0px_var(--shadow-color,#1e2022)] opacity-95'
      }`;
      card.setAttribute('data-chunk-id', chunk.id);

      const denseWidth = Math.round(chunk.denseScore * 100);
      const bm25Width = Math.round(chunk.bm25Score * 100);
      const hybridWidth = Math.round(chunk.hybridScore * 100);

      const highlightedSnippet = highlightSnippet(chunk.snippet, queryData.highlightTokens);

      card.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-outline-variant/40">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center justify-center w-7 h-7 rounded text-xs font-label-lg font-bold ${
              isTopRank
                ? 'bg-primary text-on-primary shadow-[1px_1px_0px_0px_#1e2022]'
                : 'bg-surface-container-high text-on-surface border border-outline-variant'
            }">
              #${rank}
            </span>
            <div class="flex flex-col">
              <span class="font-headline-sm text-sm text-primary font-bold tracking-tight">${chunk.title}</span>
              <span class="font-label-md text-[11px] text-on-surface-variant font-mono">${chunk.source}</span>
            </div>
          </div>
          <div class="flex items-center gap-2 self-start sm:self-auto">
            ${isTopRank ? '<span class="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-[11px] font-bold rounded shadow-[1px_1px_0px_0px_#1e2022]">TOP RETRIEVED</span>' : ''}
            <div class="text-right">
              <span class="font-label-md text-[11px] text-on-surface-variant block">Combined Score</span>
              <span class="font-headline-sm text-base text-primary font-bold tabular-nums">${chunk.hybridScore.toFixed(3)}</span>
            </div>
          </div>
        </div>

        <p class="font-body-md text-sm text-on-surface mb-3 leading-relaxed">
          ${highlightedSnippet}
        </p>

        <!-- Metric breakdown progress meters -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-outline-variant/30 text-xs">
          <!-- Dense Vector -->
          <div class="p-1.5 rounded bg-surface-container-low">
            <div class="flex justify-between items-center mb-1">
              <span class="font-label-md text-[11px] text-secondary font-bold">Dense Vector</span>
              <span class="font-label-md text-[11px] text-primary font-bold tabular-nums">${chunk.denseScore.toFixed(3)}</span>
            </div>
            <div class="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
              <div class="h-full bg-secondary rounded-full transition-all duration-300" style="width: ${denseWidth}%"></div>
            </div>
          </div>

          <!-- BM25 Sparse -->
          <div class="p-1.5 rounded bg-surface-container-low">
            <div class="flex justify-between items-center mb-1">
              <span class="font-label-md text-[11px] text-on-tertiary-container font-bold">BM25 Sparse</span>
              <span class="font-label-md text-[11px] text-primary font-bold tabular-nums">${chunk.bm25Score.toFixed(3)}</span>
            </div>
            <div class="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
              <div class="h-full bg-tertiary-container rounded-full transition-all duration-300" style="width: ${bm25Width}%"></div>
            </div>
          </div>

          <!-- Hybrid RRF -->
          <div class="p-1.5 rounded bg-surface-container-low">
            <div class="flex justify-between items-center mb-1">
              <span class="font-label-md text-[11px] text-primary font-bold">Fused RRF</span>
              <span class="font-label-md text-[11px] text-primary font-bold tabular-nums">${chunk.hybridScore.toFixed(3)}</span>
            </div>
            <div class="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
              <div class="h-full bg-primary rounded-full transition-all duration-300" style="width: ${hybridWidth}%"></div>
            </div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // =========================================================================
  // 4. WIDGET 3: YOLOV8-SEG DEFECT SEGMENTATION INSPECTOR LOGIC
  // =========================================================================

  function renderYOLOSeg() {
    const { presetKey, confThreshold, iouThreshold } = state.yoloSeg;
    const preset = YOLOV8_PRESETS[presetKey];

    // Update Telemetry Panel
    const latencyEl = document.getElementById('yolo-latency-metric');
    if (latencyEl) latencyEl.textContent = preset.telemetry.latencyMs;

    const fpsEl = document.getElementById('yolo-fps-metric');
    if (fpsEl) fpsEl.textContent = preset.telemetry.fps;

    const precisionEl = document.getElementById('yolo-precision-metric');
    if (precisionEl) precisionEl.textContent = preset.telemetry.precision;

    const recallEl = document.getElementById('yolo-recall-metric');
    if (recallEl) recallEl.textContent = preset.telemetry.recall;

    const footprintEl = document.getElementById('yolo-footprint-metric');
    if (footprintEl) footprintEl.textContent = preset.telemetry.modelSize;

    // Threshold Readout
    const confValEl = document.getElementById('yolo-conf-val');
    if (confValEl) confValEl.textContent = `${(confThreshold * 100).toFixed(0)}%`;

    const iouValEl = document.getElementById('yolo-iou-val');
    if (iouValEl) iouValEl.textContent = iouThreshold.toFixed(2);

    const subBadgeEl = document.getElementById('yolo-substrate-badge');
    if (subBadgeEl) subBadgeEl.textContent = preset.badge;

    const subDescEl = document.getElementById('yolo-substrate-desc');
    if (subDescEl) subDescEl.textContent = preset.substrateDesc;

    // Filter detections against Confidence Threshold
    const visibleDefects = [];
    if (preset.primaryDefect.confidence >= confThreshold) {
      visibleDefects.push(preset.primaryDefect);
    }
    if (preset.secondaryDefect.confidence >= confThreshold) {
      visibleDefects.push(preset.secondaryDefect);
    }

    // Render Overlay on SVG Canvas
    const overlayGroup = document.getElementById('yolo-svg-detections');
    if (!overlayGroup) return;

    overlayGroup.innerHTML = '';

    if (visibleDefects.length === 0) {
      // Show PASS QC watermark banner
      const passText = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      passText.setAttribute('transform', 'translate(320, 160)');
      passText.innerHTML = `
        <rect x="-140" y="-24" width="280" height="48" rx="6" fill="#1e2022" stroke="#10b981" stroke-width="2" opacity="0.92" />
        <text x="0" y="6" text-anchor="middle" font-family="Courier Prime" font-size="13" font-weight="bold" fill="#10b981" letter-spacing="1">
          ✓ PASS: 0 DEFECTS DETECTED
        </text>
      `;
      overlayGroup.appendChild(passText);
      return;
    }

    visibleDefects.forEach(defect => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'yolo-defect-group cursor-pointer transition-opacity duration-150');
      g.setAttribute('data-defect-id', defect.id);

      const b = defect.box;
      const confPct = (defect.confidence * 100).toFixed(1);

      g.innerHTML = `
        <!-- Bounding Box -->
        <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}"
              fill="none" stroke="${defect.accentColor}" stroke-width="2"
              stroke-dasharray="6, 3" rx="3" opacity="0.9" />

        <!-- Corner Reticles for authentic CV HUD -->
        <path d="M${b.x},${b.y + 12} L${b.x},${b.y} L${b.x + 12},${b.y}" stroke="${defect.accentColor}" stroke-width="2.5" fill="none" />
        <path d="M${b.x + b.w - 12},${b.y} L${b.x + b.w},${b.y} L${b.x + b.w},${b.y + 12}" stroke="${defect.accentColor}" stroke-width="2.5" fill="none" />
        <path d="M${b.x},${b.y + b.h - 12} L${b.x},${b.y + b.h} L${b.x + 12},${b.y + b.h}" stroke="${defect.accentColor}" stroke-width="2.5" fill="none" />
        <path d="M${b.x + b.w - 12},${b.y + b.h} L${b.x + b.w},${b.y + b.h} L${b.x + b.w},${b.y + b.h - 12}" stroke="${defect.accentColor}" stroke-width="2.5" fill="none" />

        <!-- Instance Segmentation Polygon Mask -->
        <polygon points="${defect.polygon}"
                 fill="${defect.accentColor}" fill-opacity="0.32"
                 stroke="${defect.accentColor}" stroke-width="2"
                 class="hover:fill-opacity-50 transition-all duration-150" />

        <!-- Label Tag Pill -->
        <g transform="translate(${b.x}, ${Math.max(b.y - 24, 10)})">
          <rect x="0" y="0" width="${defect.label.length * 8.2 + 65}" height="20" rx="3"
                fill="#1e2022" stroke="${defect.accentColor}" stroke-width="1.5" />
          <text x="6" y="14" font-family="Courier Prime" font-size="10.5" font-weight="bold" fill="#ffffff">
            ${defect.label}: <tspan fill="${defect.accentColor}">${confPct}%</tspan>
          </text>
        </g>
      `;

      // Interactive hover feedback
      g.addEventListener('mouseenter', () => {
        showDefectTooltip(defect);
      });
      g.addEventListener('mouseleave', () => {
        hideDefectTooltip();
      });

      overlayGroup.appendChild(g);
    });
  }

  function showDefectTooltip(defect) {
    const tooltipEl = document.getElementById('yolo-inspection-tooltip');
    if (!tooltipEl) return;

    tooltipEl.innerHTML = `
      <div class="flex items-center justify-between gap-3 mb-1 border-b border-outline-variant/30 pb-1">
        <span class="font-label-lg text-xs font-bold text-primary">${defect.label}</span>
        <span class="font-label-md text-xs font-bold text-tertiary-container tabular-nums">${(defect.confidence * 100).toFixed(1)}% CONF</span>
      </div>
      <div class="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] font-label-md text-on-surface-variant font-mono">
        <span>Area: <strong class="text-primary tabular-nums">${defect.areaPx}</strong></span>
        <span>Centroid: <strong class="text-primary tabular-nums">${defect.centroid}</strong></span>
        <span>Box WxH: <strong class="text-primary tabular-nums">${defect.box.w}x${defect.box.h} px</strong></span>
        <span>Mask IoU: <strong class="text-primary tabular-nums">0.91</strong></span>
      </div>
    `;
    tooltipEl.classList.remove('hidden');
  }

  function hideDefectTooltip() {
    const tooltipEl = document.getElementById('yolo-inspection-tooltip');
    if (!tooltipEl) return;
    tooltipEl.classList.add('hidden');
  }

  // =========================================================================
  // 5. TAB CONTROLLER & EVENT WIRING
  // =========================================================================

  function switchPlaygroundTab(tabId) {
    state.activeTab = tabId;

    const tabButtons = document.querySelectorAll('[data-playground-tab]');
    const tabPanels = document.querySelectorAll('[data-playground-panel]');

    tabButtons.forEach(btn => {
      const isTarget = btn.getAttribute('data-playground-tab') === tabId;
      btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
      btn.setAttribute('tabindex', isTarget ? '0' : '-1');

      if (isTarget) {
        btn.classList.add('active-tab', 'bg-primary', 'text-on-primary', 'shadow-[3px_3px_0px_0px_var(--shadow-color,#1e2022)]');
        btn.classList.remove('bg-surface-container', 'text-on-surface-variant');
      } else {
        btn.classList.remove('active-tab', 'bg-primary', 'text-on-primary', 'shadow-[3px_3px_0px_0px_var(--shadow-color,#1e2022)]');
        btn.classList.add('bg-surface-container', 'text-on-surface-variant');
      }
    });

    tabPanels.forEach(panel => {
      const isTarget = panel.getAttribute('data-playground-panel') === tabId;
      if (isTarget) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });
  }

  function wireEventListeners() {
    // 1. Tab Bar Triggers
    const tabButtons = document.querySelectorAll('[data-playground-tab]');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-playground-tab');
        switchPlaygroundTab(targetTab);
      });

      // Keyboard navigation (ArrowLeft, ArrowRight, Home, End)
      btn.addEventListener('keydown', (e) => {
        const tabsArray = Array.from(tabButtons);
        const currentIndex = tabsArray.indexOf(btn);
        let nextIndex = null;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          nextIndex = (currentIndex + 1) % tabsArray.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          nextIndex = (currentIndex - 1 + tabsArray.length) % tabsArray.length;
        } else if (e.key === 'Home') {
          nextIndex = 0;
        } else if (e.key === 'End') {
          nextIndex = tabsArray.length - 1;
        }

        if (nextIndex !== null) {
          e.preventDefault();
          tabsArray[nextIndex].focus();
          tabsArray[nextIndex].click();
        }
      });
    });

    // 2. Token Cost Slider & Inputs
    const tokenVolSlider = document.getElementById('token-vol-slider');
    if (tokenVolSlider) {
      tokenVolSlider.addEventListener('input', (e) => {
        state.tokenCost.volumeMillions = parseInt(e.target.value, 10);
        renderTokenOptimizer();
      });
    }

    const modelSelectorButtons = document.querySelectorAll('[data-token-model]');
    modelSelectorButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const modelKey = btn.getAttribute('data-token-model');
        state.tokenCost.modelKey = modelKey;

        modelSelectorButtons.forEach(b => {
          const isSelected = b.getAttribute('data-token-model') === modelKey;
          if (isSelected) {
            b.className = 'token-model-btn px-3 py-1.5 rounded font-label-md text-xs font-bold bg-primary text-on-primary border border-primary-container shadow-[2px_2px_0px_0px_#1e2022] transition-all';
          } else {
            b.className = 'token-model-btn px-3 py-1.5 rounded font-label-md text-xs font-bold bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-container-high transition-all';
          }
        });

        renderTokenOptimizer();
      });
    });

    const cachingToggle = document.getElementById('prompt-caching-toggle');
    if (cachingToggle) {
      cachingToggle.addEventListener('change', (e) => {
        state.tokenCost.cachingEnabled = e.target.checked;
        renderTokenOptimizer();
      });
    }

    // 3. Hybrid RAG Query Selectors & Alpha Slider
    const ragQueryButtons = document.querySelectorAll('[data-rag-query]');
    ragQueryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const queryKey = btn.getAttribute('data-rag-query');
        state.hybridRag.queryKey = queryKey;

        ragQueryButtons.forEach(b => {
          const isSelected = b.getAttribute('data-rag-query') === queryKey;
          if (isSelected) {
            b.className = 'rag-query-btn px-3 py-1.5 rounded font-label-md text-xs font-bold bg-primary text-on-primary border border-primary-container shadow-[2px_2px_0px_0px_#1e2022] transition-all text-left';
          } else {
            b.className = 'rag-query-btn px-3 py-1.5 rounded font-label-md text-xs font-bold bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-container-high transition-all text-left';
          }
        });

        renderHybridRAG();
      });
    });

    const ragAlphaSlider = document.getElementById('rag-alpha-slider');
    if (ragAlphaSlider) {
      ragAlphaSlider.addEventListener('input', (e) => {
        state.hybridRag.alpha = parseFloat(e.target.value);
        renderHybridRAG();
      });
    }

    // 4. YOLOv8 Defect Presets & Sliders
    const yoloPresetButtons = document.querySelectorAll('[data-yolo-preset]');
    yoloPresetButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const presetKey = btn.getAttribute('data-yolo-preset');
        state.yoloSeg.presetKey = presetKey;

        yoloPresetButtons.forEach(b => {
          const isSelected = b.getAttribute('data-yolo-preset') === presetKey;
          if (isSelected) {
            b.className = 'yolo-preset-btn px-3 py-2 rounded-lg font-label-md text-xs font-bold bg-primary text-on-primary border border-primary-container shadow-[2px_2px_0px_0px_#1e2022] transition-all text-left';
          } else {
            b.className = 'yolo-preset-btn px-3 py-2 rounded-lg font-label-md text-xs font-bold bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-container-high transition-all text-left';
          }
        });

        hideDefectTooltip();
        renderYOLOSeg();
      });
    });

    const yoloConfSlider = document.getElementById('yolo-conf-slider');
    if (yoloConfSlider) {
      yoloConfSlider.addEventListener('input', (e) => {
        state.yoloSeg.confThreshold = parseFloat(e.target.value);
        renderYOLOSeg();
      });
    }

    const yoloIouSlider = document.getElementById('yolo-iou-slider');
    if (yoloIouSlider) {
      yoloIouSlider.addEventListener('input', (e) => {
        state.yoloSeg.iouThreshold = parseFloat(e.target.value);
        renderYOLOSeg();
      });
    }
  }

  // =========================================================================
  // 6. INITIALIZATION HOOK
  // =========================================================================

  function initPlayground() {
    const root = document.getElementById('architecture-playground');
    if (!root) {
      // Elements not yet in DOM, skip gracefully
      return;
    }

    wireEventListeners();
    renderTokenOptimizer();
    renderHybridRAG();
    renderYOLOSeg();
    switchPlaygroundTab('token-cost');

    console.log('[Playground] Interactive Model & Architecture Playground initialized successfully.');
  }

  // Expose global initializer
  window.initPlayground = initPlayground;

  // Auto-init on DOMContentLoaded if DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPlayground);
  } else {
    initPlayground();
  }
})();
