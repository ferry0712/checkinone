import "./Footer.css";

export default function Footer() {
  return (
    <footer className="ci-footer">
      © {new Date().getFullYear()} CheckInOne
    </footer>
  );
}
