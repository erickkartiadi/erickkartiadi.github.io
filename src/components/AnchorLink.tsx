import { Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface AnchorLinkProps {
  section: string;
}

function AnchorLink({ section }: AnchorLinkProps) {
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(section));
  }, [section]);

  const handleClick = (event: any) => {
    event.preventDefault();
    anchorTarget?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Link
      href={`#${section}`}
      textTransform="capitalize"
      fontSize="lg"
      fontWeight="medium"
      onClick={handleClick}
    >
      {section}
    </Link>
  );
}

export default AnchorLink;
