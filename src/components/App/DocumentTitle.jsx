export default function DocumentTitle({ children }) {
    return (
      <div>
        <title>{children}</title>
      </div>
    );
  }