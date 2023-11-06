import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProductComponentsProps {}

const StyledProductComponents = styled.div`
  color: pink;
`;

export function ProductComponents(props: ProductComponentsProps) {
  return (
    <StyledProductComponents>
      <h1>Welcome to ProductComponents!</h1>
    </StyledProductComponents>
  );
}

export default ProductComponents;
