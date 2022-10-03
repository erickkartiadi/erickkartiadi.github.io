import { IconButton, IconButtonProps, Tooltip } from '@chakra-ui/react';

export interface BrandIconProps {
  label: string;
  icon: IconButtonProps['icon'];
}

function BrandIcon({ icon, label }: BrandIconProps) {
  return (
    <Tooltip label={label}>
      <IconButton
        variant="outline"
        icon={icon}
        size="lg"
        fontSize="2xl"
        aria-label={label}
      />
    </Tooltip>
  );
}

export default BrandIcon;
