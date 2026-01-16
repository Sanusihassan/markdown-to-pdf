export const CTABtn = ({
  cta,
  centerItem,
}: {
  cta: string;
  centerItem?: boolean;
}) => {
  return (
    <div className={centerItem ? "center-item" : undefined}>
      <a href="/pricing" className="cta-btn" target="_blank">
        {cta}
      </a>
    </div>
  );
};
