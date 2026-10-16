import React from 'react';

interface TrincaLogoProps {
  readonly variant?: 'dark' | 'light';
  readonly showTagline?: boolean;
  readonly className?: string;
}

/**
 * Recriação vetorial do emblema triangular isométrico e logotipo da Trinca Engenharia
 * (@trincaengenharia), respeitando a geometria das três barras estruturais entrelaçadas
 * e a paleta azul/grafite/prata original.
 */
export const TrincaLogo: React.FC<TrincaLogoProps> = ({
  variant = 'dark',
  showTagline = false,
  className = '',
}) => {
  const primaryText = variant === 'dark' ? '#F3F6FA' : '#0B192E';
  const secondaryText = variant === 'dark' ? '#94A7C4' : '#3E5272';
  const topFacet = variant === 'dark' ? '#608CE0' : '#3E65B0';
  const bottomFacet = variant === 'dark' ? '#3E65B0' : '#294885';
  const rightFacet = variant === 'dark' ? '#264178' : '#182D57';
  const innerBevel = variant === 'dark' ? '#8FB2F2' : '#5882CE';

  return (
    <div className={`trinca-logo ${className}`.trim()}>
      <svg
        className="trinca-logo-mark"
        viewBox="0 0 64 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Viga superior ascendente */}
        <polygon points="4,32 45,5 45,17 17,36" fill={topFacet} />
        {/* Viga inferior de base */}
        <polygon points="4,32 17,36 44,49 44,55" fill={bottomFacet} />
        {/* Pilar vertical direito */}
        <polygon points="45,5 56,11 56,51 44,55 44,17" fill={rightFacet} />
        {/* Chanfro estrutural interno */}
        <polygon points="17,36 44,17 44,26 27,38" fill={innerBevel} />
      </svg>

      <div className="trinca-logo-text">
        <span className="trinca-logo-title" style={{ color: primaryText }}>
          TRINCA
        </span>
        <span className="trinca-logo-subtitle" style={{ color: secondaryText }}>
          ENGENHARIA
        </span>
        {showTagline ? (
          <span className="trinca-logo-tagline" style={{ color: secondaryText }}>
            Construindo sonhos. Realizando conquistas.
          </span>
        ) : null}
      </div>
    </div>
  );
};
