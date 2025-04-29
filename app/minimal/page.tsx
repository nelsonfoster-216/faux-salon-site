export default function MinimalPage() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Crown & Glory Salon</h1>
      <p style={{ marginBottom: '1rem' }}>
        Premier unisex salon in Cleveland, Ohio offering haircuts, styling, nail care, 
        beauty treatments, and makeup services for men and women.
      </p>
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f3f4f6', 
        borderRadius: '8px',
        marginTop: '2rem'
      }}>
        <p>This is a minimal test page with no dependencies.</p>
        <p>If this page renders but the main site doesn't, there might be an issue with component dependencies.</p>
      </div>
    </div>
  )
} 