// Code shown in the hero's editor window, one picked at random per page load.
// Excerpts are lightly trimmed from our own projects (RaptorSheets, Raptor Gig,
// Craft Helper, Wormhole X-Treme) so they fit the window.

export type SnippetLang = 'csharp' | 'ts' | 'java' | 'yaml';

export interface Snippet {
  file: string;
  lang: SnippetLang;
  code: string;
}

export const SNIPPETS: Snippet[] = [
  {
    file: 'TripReport.cs',
    lang: 'csharp',
    code: `using RaptorSheets.Core.Services;

// Google Sheets as a typed data store
var sheets = new GoogleSheetService(creds, sheetId);
var data   = await sheets.GetSheetData("Trips");

var weekly = data.Values
    .Select(Trip.FromRow)
    .GroupBy(t => t.Week)
    .Select(g => new {
        Week = g.Key,
        Total = g.Sum(t => t.Pay)
    });`,
  },
  {
    file: 'TripEntity.cs',
    lang: 'csharp',
    code: `public class TripEntity : SheetRowEntityBase
{
    [Column(HeaderNames.Date, isInput: true,
        formatType: Format.DATE)]
    public string Date { get; set; } = "";

    [Column(HeaderNames.Pay, isInput: true,
        formatType: Format.ACCOUNTING)]
    public decimal? Pay { get; set; }

    // Output column (formula: Pay + Tips + Bonus)
    [Column(HeaderNames.Total, Format.ACCOUNTING)]
    public decimal? Total { get; set; }
}`,
  },
  {
    file: 'DynamoDbRateLimiter.cs',
    lang: 'csharp',
    code: `var item = response.Item;
var requestCount = int.Parse(item["RequestCount"].N);
var lastRequest =
    DateTime.Parse(item["LastRequestTime"].S);

// Check if the time window has passed
if (now - lastRequest > _timeWindow)
{
    await ResetWindowAsync(spreadsheetId, now);
    return true;
}

// Check if the request count exceeds the limit
return requestCount < _maxRequests;`,
  },
  {
    file: 'SheetsController.cs',
    lang: 'csharp',
    code: `private async Task<T> LogActionAsync<T>(
    string actionName, Func<Task<T>> action)
{
    var id = GetCorrelationId();
    _logger.LogInformation("[{Id}] {Action} started",
        id, actionName);
    try
    {
        return await action();
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "[{Id}] {Action} failed",
            id, actionName);
        throw;
    }
}`,
  },
  {
    file: 'MetricsService.cs',
    lang: 'csharp',
    code: `var request = new PutMetricDataRequest
{
    Namespace = NAMESPACE,
    MetricData = new List<MetricDatum>
    {
        new MetricDatum
        {
            MetricName = SanitizeMetricName(metricName),
            Value = value,
            Unit = GetStandardUnit(unit),
            Timestamp = DateTime.UtcNow
        }
    }
};

await _cloudWatch.PutMetricDataAsync(request);`,
  },
  {
    file: 'S3Service.cs',
    lang: 'csharp',
    code: `// Only initializes S3 resources when first used
public class LazyS3Service : IS3Service
{
    private readonly Lazy<S3Service> _lazyS3Service;

    public LazyS3Service(IConfiguration configuration)
    {
        _lazyS3Service = new Lazy<S3Service>(
            () => new S3Service(configuration),
            LazyThreadSafetyMode
                .ExecutionAndPublication);
    }
}`,
  },
  {
    file: 'GoogleFormulaBuilder.cs',
    lang: 'csharp',
    code: `/// Builds an ARRAYFORMULA with SUMIF aggregation
public static string BuildArrayFormulaSumIf(
    string keyRange, string header,
    string lookupRange, string sumRange)
{
    var sumIfFormula = GoogleFormulas.SumIfAggregation
        .Replace(PlaceholderLookupRange, lookupRange)
        .Replace(PlaceholderKeyRange, keyRange)
        .Replace(PlaceholderSumRange, sumRange);

    return GoogleFormulas.ArrayFormulaBase
        .Replace(PlaceholderHeader, header)
        .Replace(PlaceholderFormula, sumIfFormula);
}`,
  },
  {
    file: 'ColumnOptionsTests.cs',
    lang: 'csharp',
    code: `[Fact]
public void Builder_FluentAPI_ShouldSetAllProperties()
{
    // Arrange & Act
    var options = ColumnOptions.Builder()
        .WithFormatPattern("\\"$\\"#,##0.00")
        .AsInput()
        .WithValidation("RangeService")
        .WithFormatType(Format.CURRENCY)
        .Build();

    // Assert
    Assert.True(options.IsInput);
    Assert.Equal(Format.CURRENCY, options.FormatType);
}`,
  },
  {
    file: 'local.db.ts',
    lang: 'ts',
    code: `export class AppDB extends Dexie {
  public shifts!: Table<IShift, number>;
  public trips!: Table<ITrip, number>;

  constructor() {
    super('localDB');
    this.version(1).stores({
      shifts: '++id, date, [date+service+number]',
      trips: '++id, date, [date+service+number]',
    });
  }
}

export const localDB = new AppDB();`,
  },
  {
    file: 'current-average-state.service.ts',
    lang: 'ts',
    code: `@Injectable({ providedIn: 'root' })
export class CurrentAverageStateService {
  private selectedDate = signal(DateHelper.toISO());
  private shifts = toSignal(this._shiftService.shifts$,
    { initialValue: [] });

  public readonly currentDayAmount = computed(() => {
    const date = this.selectedDate();
    return this.shifts()
      .filter(shift => shift.date === date)
      .reduce((acc, s) => acc + s.grandTotal, 0);
  });
}`,
  },
  {
    file: 'craft.ts',
    lang: 'ts',
    code: `export async function canFulfill(slots)
  : Promise<canfulfill.CanFulfillIntent> {
  // Default canFulfill to no.
  let ability = getAbility();

  // Get data from slots.
  let craftType = getCraftActionValue(slots);
  let itemName = getItemValue(slots);
  logger.info(\`Item: \${itemName} | Type: \${craftType}\`);

  if (!craftType || !itemName) {
    return ability;
  }
  // ...
}`,
  },
  {
    file: 'lambda-test.yml',
    lang: 'yaml',
    code: `name: Lambda Tests

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ./.github/actions/setup-dotnet-env

      - name: Run tests
        run: dotnet test --collect:"XPlat Code Coverage"

      - name: Upload coverage reports
        uses: codecov/codecov-action@v3`,
  },
  {
    file: 'GateFare.java',
    lang: 'java',
    code: `static double affordable(final Player player)
{
    if (!ConfigManager.isEconomyEnabled()
        || !EconomySupport.isAvailable())
    {
        return 0.0;
    }
    final double useCost =
        ConfigManager.getEconomyUseCost();
    if (!EconomySupport.canAfford(player, useCost))
    {
        player.sendMessage(ConfigManager.MessageStrings
            .ECONOMY_INSUFFICIENT_FUNDS.toString());
        return -1.0;
    }
    return useCost;
}`,
  },
];

// ── Minimal syntax highlighter ───────────────────────────────────────────────
// Produces escaped HTML with code-* spans styled in hero.component.scss.

const KEYWORDS: Record<SnippetLang, string[]> = {
  csharp: ['using', 'var', 'new', 'await', 'async', 'public', 'private', 'readonly', 'static', 'class', 'string', 'int', 'bool',
           'decimal', 'double', 'void', 'return', 'if', 'else', 'try', 'catch', 'throw', 'get', 'set', 'true', 'false', 'null'],
  ts:     ['export', 'import', 'from', 'class', 'extends', 'public', 'private', 'readonly', 'const', 'let', 'new', 'async',
           'function', 'await', 'return', 'if', 'super', 'this', 'string', 'number'],
  java:   ['static', 'final', 'double', 'if', 'return', 'private', 'public', 'class', 'void', 'new'],
  yaml:   [],
};

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function highlight({ code, lang }: Snippet): string {
  const keywords = new Set(KEYWORDS[lang]);
  const comment = lang === 'yaml' ? '#[^\\n]*' : '//[^\\n]*';
  const token = new RegExp(
    `(${comment})|("(?:\\\\.|[^"\\\\])*"|'(?:\\\\.|[^'\\\\])*'|\`[^\`]*\`)|(\\[[A-Z]\\w*)|\\b(\\d+(?:\\.\\d+)?)\\b|([A-Za-z_]\\w*)(?=\\s*[(<]?)`,
    'g',
  );

  let out = '';
  let last = 0;
  for (const m of code.matchAll(token)) {
    out += escape(code.slice(last, m.index));
    last = m.index! + m[0].length;
    const [text, cmt, str, attr, num, word] = m;
    const next = code.slice(last).trimStart()[0];
    let cls = '';
    if (cmt) cls = 'code-c';
    else if (str) cls = 'code-s';
    else if (attr) { out += '[' + `<span class="code-t">${escape(attr.slice(1))}</span>`; continue; }
    else if (num) cls = 'code-n';
    else if (word) {
      if (lang === 'yaml') cls = next === ':' ? 'code-k' : '';
      else if (keywords.has(word)) cls = 'code-k';
      else if (next === '(') cls = 'code-f';
      else if (/^[A-Z]/.test(word)) cls = 'code-t';
      else cls = 'code-v';
    }
    out += cls ? `<span class="${cls}">${escape(text)}</span>` : escape(text);
  }
  return out + escape(code.slice(last));
}
