    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>Landing Page</h1>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Search pages..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: "0.6rem",
            width: "300px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <ul style={{ listStyle: "none", padding: 0, maxWidth: "400px", margin: "0 auto" }}>
        {filteredPages.map((page, i) => (
          <li
            key={i}
            style={{
              background: "#fff",
              margin: "0.5rem 0",
              padding: "0.8rem 1rem",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <a
              href={page.path}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#0070f3", fontWeight: "bold" }}
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
