const SPREADSHEET_ID = "1Y4HYVD7p8YudiDWqVprs-zlJ-rFup_FzfsboMaFgg6E";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

export async function appendRow(tab: string, values: (string | number)[]) {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const connectionKey = process.env["GOOGLE_SHEETS_API_KEY"];
  if (!lovableKey || !connectionKey) {
    throw new Error("Google Sheets connection is not configured");
  }

  const range = `${tab}!A1`;
  const res = await fetch(
    `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connectionKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [values] }),
    },
  );

  if (!res.ok) {
    const body = await res.text();
    console.error(`Sheets append failed [${res.status}]: ${body}`);
    throw new Error(`Sheets append failed [${res.status}]: ${body}`);
  }
  return true;
}
