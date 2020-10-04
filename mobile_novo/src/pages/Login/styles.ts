import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #e02041;
`;

export const Titulo = styled.Text`
    font-size: 30px;
    color: #f5f5f5;
    font-family: Cinzel_900Black;
`;

export const SubTitulo = styled.Text`
    font-size: 14px;
    color: #fff;
`;

export const Botao = styled.TouchableOpacity`
    padding: 10px;
    width: 57%;
    height: 50px;
    border-radius: 8px;
    margin-top: 50px;
    background: #f5f5f5;
    justify-content: center;
    align-items: center;
`;