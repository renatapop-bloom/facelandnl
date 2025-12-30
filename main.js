<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Faceland × Bloomreach Sandbox Guide</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <!-- Password screen -->
  <section id="password-screen" class="pw-screen">
    <div class="pw-card">
      <h1 class="wordmark">FACELAND</h1>
      <h2 class="pw-subtitle">Bloomreach Engagement Sandbox Guide</h2>
      <label class="pw-label" for="accessPassword">Team access password</label>
      <input
        type="password"
        id="accessPassword"
        class="pw-input"
        placeholder="Enter shared password"
        autocomplete="current-password"
      />
      <button class="btn-primary" id="enterButton">Unlock guide</button>
      <p id="passwordError" class="pw-error"></p>
      <p class="pw-meta">
        Use the shared sandbox password from the enablement email. You can safely
        experiment in the Faceland demo project.
      </p>
    </div>
  </section>

  <!-- Main app -->
  <div id="app" class="app" hidden>
    <header class="app-header">
      <div class="header-inner">
        <div class="wordmark">FACELAND</div>
        <div class="header-tagline">
          Bloomreach Engagement · Sandbox success guide
        </div>
      </div>
    </header>

    <main class="layout">
      <!-- Left column: accordion -->
      <section class="guide">
        <article class="guide-card">
          <div class="pill-row">
            <span class="pill">January 2026</span>
            <span class="pill">Sandbox only</span>
          </div>
          <h1 class="guide-title">Your Bloomreach Engagement Sandbox</h1>
          <p class="guide-subtitle">
            Follow these short exercises to explore the Faceland demo project and
            learn how core Engagement features work.
          </p>

          <div id="accordion" class="accordion">
            <!-- 1. Access & overview -->
            <div class="accordion-item">
              <button class="accordion-header">
                <span>
                  <span class="accordion-title">Access &amp; project overview</span>
                  <span class="accordion-meta">start here</span>
                </span>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-panel">
                <div class="accordion-body">
                  <h3>Steps</h3>
                  <ul>
                    <li>Open the Bloomreach invitation email and register an account.</li>
                    <li>Confirm you can access the single <strong>Faceland</strong> sandbox project.</li>
                    <li>Note that the project includes around 2,000 synthetic customers with typical journeys (browsing, booking, repeat booking).</li>
                  </ul>
                  <p class="snippet">
                    This environment is only for learning and evaluation; behaviour may not always look perfectly human but is coherent enough to explore flows and reporting.
                  </p>
                </div>
              </div>
            </div>

            <!-- 2. Use profiles -->
            <div class="accordion-item">
              <button class="accordion-header">
                <span>
                  <span class="accordion-title">Use profiles</span>
                  <span class="accordion-meta">Data &amp; Assets → Customers</span>
                </span>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-panel">
                <div class="accordion-body">
                  <h3>Steps</h3>
                  <ul>
                    <li>Go to <strong>Data &amp; Assets → Customers</strong>.</li>
                    <li>Search for an example customer and open the profile.</li>
                    <li>Review attributes, events, and recent bookings (use the rich demo profile such as Thomas Degroot as a reference).</li>
                  </ul>
                  <p class="snippet">
                    Profiles help you see how events and attributes are stored; in daily work you mostly use them to debug setups rather than to browse customers one by one.
                  </p>
                </div>
              </div>
            </div>

            <!-- 3. Aggregates -->
            <div class="accordion-item">
              <button class="accordion-header">
                <span>
                  <span class="accordion-title">Aggregates</span>
                  <span class="accordion-meta">Data Manager → Definitions</span>
                </span>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-panel">
                <div class="accordion-body">
                  <h3>Steps</h3>
                  <ul>
                    <li>Go to <strong>Data &amp; Assets → Data Manager → Definitions → New definition → Aggregates</strong>.</li>
                    <li>Choose the event source (for example <code>treatment_booking</code>).</li>
                    <li>Select the function you need (count, sum, last timestamp, last attribute value, etc.).</li>
                  </ul>
                  <p class="snippet">
                    Example questions: “What was the most recent treatment a customer booked?” → aggregate <code>last – treatment_booking – treatment_type</code>.  
                    “Who did they last book with?” → aggregate <code>last – treatment_booking – specialist</code>.
                  </p>
                </div>
              </div>
            </div>

            <!-- 4. Asset creation -->
            <div class="accordion-item">
              <button class="accordion-header">
                <span>
                  <span class="accordion-title">Asset creation</span>
                  <span class="accordion-meta">Email templates &amp; rows</span>
                </span>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-panel">
                <div class="accordion-body">
                  <h3>Steps</h3>
                  <ul>
                    <li>Open <strong>Data &amp; Assets → Asset Manager</strong>.</li>
                    <li>Browse existing email templates and custom rows.</li>
                    <li>In the visual builder, use the <strong>Rows → Predefined</strong> tab to drag saved rows into your layout.</li>
                  </ul>
                  <p class="snippet">
                    To edit a one‑off email campaign instead of a master template, go to <strong>Campaigns → Email campaigns</strong> and open one of the Faceland examples.
                  </p>
                </div>
              </div>
            </div>

            <!-- 5. Create a segmentation -->
            <div class="accordion-item">
              <button class="accordion-header">
                <span>
                  <span class="accordion-title">Create a segmentation</span>
                  <span class="accordion-meta">Analyses → Segmentations</span>
                </span>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-panel">
                <div class="accordion-body">
                  <h3>Steps</h3>
                  <ul>
                    <li>Go to <strong>Analyses → Segmentations</strong> and open <strong>Customer Value</strong>.</li>
                    <li>Click <strong>Edit</strong> to inspect how the spend‑based segments are defined.</li>
                    <li>Recreate the segmentation and experiment with different thresholds or conditions.</li>
                  </ul>
                  <p class="snippet">
                    For more detail, link this section to Bloomreach’s segmentation documentation using the URL from your source guide.
                  </p>
                </div>
              </div>
            </div>

            <!-- 6. Welcome Flow -->
            <div class="accordion-item">
              <button class="accordion-header">
                <span>
                  <span class="accordion-title">Orchestrate a Welcome Flow</span>
                  <span class="accordion-meta">Campaigns → Scenarios</span>
                </span>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-panel">
                <div class="accordion-body">
                  <h3>Steps</h3>
                  <ul>
                    <li>Open <strong>Campaigns → Scenarios</strong> and select <strong>Conversion: Welcome Flow</strong>.</li>
                    <li>Double‑click the <strong>Welcome email</strong> node to customise the email content or swap the template.</li>
                    <li>Try adding wait nodes or extra branches, then evaluate before you activate.</li>
                  </ul>
                  <p class="snippet">
                    You can review more complex examples in the <strong>Faceland Use Cases Scenario</strong> and duplicate them safely via “Save as new”.
                  </p>
                </div>
              </div>
            </div>

            <!-- 7. Weblayers -->
            <div class="accordion-item">
              <button class="accordion-header">
                <span>
                  <span class="accordion-title">Weblayers</span>
                  <span class="accordion-meta">On‑site engagement</span>
                </span>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-panel">
                <div class="accordion-body">
                  <h3>Steps</h3>
                  <ul>
                    <li>Go to <strong>Data &amp; Assets → Weblayers</strong>.</li>
                    <li>Create a new weblayer or open an existing Faceland example.</li>
                    <li>Configure targeting, triggers, and the visual layout (banner, pop‑up, notification).</li>
                  </ul>
                  <p class="snippet">
                    Use weblayers to promote sign‑ups, offers, or reminders at key moments such as abandonment in the booking flow.
                  </p>
                </div>
              </div>
            </div>

            <!-- 8. Dashboards -->
            <div class="accordion-item">
              <button class="accordion-header">
                <span>
                  <span class="accordion-title">Dashboards</span>
                  <span class="accordion-meta">Overview → My Dashboards</span>
                </span>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-panel">
                <div class="accordion-body">
                  <h3>Steps</h3>
                  <ul>
                    <li>Open <strong>Overview → My Dashboards → Faceland overview Dashboard</strong>.</li>
                    <li>Switch to <strong>Edit</strong> mode to resize, move, or remove widgets.</li>
                    <li>Add new analyses from the left panel to track booking behaviour, funnels, or rescheduled appointments.</li>
                  </ul>
                  <p class="snippet">
                    Dashboards support both campaign reporting and deeper trend analysis such as clinic utilisation or drop‑offs in the booking funnel.
                  </p>
                </div>
              </div>
            </div>

            <!-- 9. Bonus materials -->
            <div class="accordion-item">
              <button class="accordion-header">
                <span>
                  <span class="accordion-title">Bonus materials</span>
                  <span class="accordion-meta">Self‑guided learning</span>
                </span>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-panel">
                <div class="accordion-body">
                  <h3>Links</h3>
                  <div class="chip-row">
                    <a class="chip" href="https://academy.bloomreach.com/engagement-crash-course" target="_blank" rel="noreferrer">
                      Engagement crash course
                    </a>
                    <a class="chip" href="https://www.youtube.com/watch?v=RzMw9_-q9yI&list=PLL4MAGpY4oGL24hQ1ZZPb1ksEh39O17sW" target="_blank" rel="noreferrer">
                      YouTube playlist
                    </a>
                    <a class="chip" href="https://documentation.bloomreach.com/engagement/docs" target="_blank" rel="noreferrer">
                      Public documentation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <!-- Right column: tips panel -->
      <aside class="tips">
        <h3>💡 Sandbox reminders</h3>
        <p class="tips-intro">
          Keep these in mind as you click around the Faceland demo project.
        </p>

        <div class="tip">
          <div class="tip-tag">Profiles</div>
          <strong>Profiles are mainly for understanding data.</strong>
          <p>Day‑to‑day, you rarely browse individual customers, but profiles are ideal for checking how attributes and events are stored.</p>
        </div>

        <div class="tip">
          <div class="tip-tag">Profiles</div>
          <strong>Use a rich demo profile.</strong>
          <p>The returning customer example (e.g. Thomas Degroot) is the most complete profile and a good reference when exploring events and attributes.</p>
        </div>

        <div class="tip">
          <div class="tip-tag">Aggregates</div>
          <strong>Think in questions.</strong>
          <p>Aggregates represent answers to questions like “last treatment booked” or “total bookings so far”, reusable across analyses and campaigns.</p>
        </div>

        <div class="tip">
          <div class="tip-tag">Aggregates</div>
          <strong>Validate choices against events.</strong>
          <p>If you are unsure which field to aggregate, look at a real event on a profile and match the attribute name you need.</p>
        </div>

        <div class="tip">
          <div class="tip-tag">Assets</div>
          <strong>Edit templates vs. campaigns.</strong>
          <p>Use Asset Manager for your main templates, but edit one‑off sends directly in their email campaigns under Campaigns → Email campaigns.</p>
        </div>

        <div class="tip">
          <div class="tip-tag">Segmentations</div>
          <strong>Let Loomi AI help.</strong>
          <p>Loomi AI can propose segments for you; you can then review and fine‑tune the conditions before using them.</p>
        </div>

        <div class="tip">
          <div class="tip-tag">Scenarios</div>
          <strong>Duplicate before heavy edits.</strong>
          <p>When adjusting demo journeys like the Faceland use cases scenario, duplicate via “Save as new” so the original stays intact.</p>
        </div>

        <div class="tip">
          <div class="tip-tag">Weblayers</div>
          <strong>Engage at the right moment.</strong>
          <p>Use weblayers to promote sign‑ups, offers, or reminders on key pages and during drop‑off moments.</p>
        </div>

        <div class="tip">
          <div class="tip-tag">Dashboards</div>
          <strong>Look beyond campaign KPIs.</strong>
          <p>Dashboards can surface booking trends, funnel performance, and rescheduling patterns in addition to individual campaign metrics.</p>
        </div>
      </aside>
    </main>

    <footer class="footer">
      Faceland · Bloomreach Engagement sandbox enablement guide.
      For questions, contact your Bloomreach team.
    </footer>
  </div>

  <script src="main.js"></script>
</body>
</html>
