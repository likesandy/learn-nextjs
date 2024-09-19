export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      style={{
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        margin: '10px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h2 style={{ color: '#333', marginBottom: '10px' }}>
        我是路由组的layout
      </h2>
      {children}
    </section>
  )
}
