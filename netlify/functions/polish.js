export default async (req) => {
  const { prompt } = await req.json();

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": Deno.env.get("ANTHROPIC_API_KEY"),
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
};

export const config = { path: "/api/polish" };
```

---

**Click "Commit changes"** at the bottom — that's it for this file.

---

**Then edit `index.html` directly in GitHub** — click the file, click the pencil ✏️ edit icon, find the `aiPolish` function and swap the fetch URL as described in Step 4, then commit that too.

Netlify will auto-deploy both changes the moment you commit. Your repo structure will look like:
```
zoek-case-study-generator/
  netlify/
    functions/
      polish.js   ✅
  index.html
  netlify.toml
  README.md
