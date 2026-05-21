export default function Loader({ text = "Caricamento..." }) {
  return (
    <main className="container py-5">
      <div className="pixel-loader d-flex flex-column align-items-center justify-content-center py-5">
        <div className="spinner-border mb-3" role="status">
          <span className="visually-hidden">{text}</span>
        </div>
        <p className="pixel-text mb-0">{text}</p>
      </div>
    </main>
  );

}