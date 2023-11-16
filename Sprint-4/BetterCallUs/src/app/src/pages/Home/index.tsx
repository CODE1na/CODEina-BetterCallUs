import React, { Component } from 'react';
import './styles/FAQ.css'
import Botao from './botao';


export default class Home extends Component {
    render(){
        return(
            <>
                <div className='pesquisaAPP'>
                    <input type="text" placeholder='Procure um problema abaixo '/>
                </div>
                <div className='problemasHome'>

                    <h3>Problemas de rede</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Problemas com conectividade na rede" conteudo={
                    <div className='textoproblema'>
                
                <div>
                    <p><strong>Introdução:</strong></p>
                    <p>A conectividade de rede é essencial nos dias de hoje, tanto para uso pessoal quanto profissional. Quando surgem problemas nessa área, podem surgir frustrações e impactos significativos em diversas atividades. Este artigo aborda os principais desafios relacionados à conectividade na rede e fornece soluções práticas para superá-los.</p>
                </div>
                
                <div>
                    <p><strong>Identificando o Problema:</strong></p>
                    <p>O primeiro passo para resolver problemas de conectividade é identificar a origem do issue. Pode ser um problema no hardware, software, configuração da rede ou até mesmo no provedor de serviços. Aqui estão algumas etapas iniciais para diagnosticar o problema:</p>

                    <p><strong>1 - Verifique a Conexão Física:</strong></p>
                    <p>Certifique-se de que todos os cabos estejam devidamente conectados.</p>
                    <p>Verifique se há danos visíveis nos cabos ou nos dispositivos de rede.</p>
                </div>
                
                <div>
                    <p><strong>2 - Reinicie Dispositivos:</strong></p>
                    <p>Reinicie o roteador, modem e o dispositivo que está enfrentando problemas de conectividade.</p>
                </div>
                
                <div>
                    <p><strong>3- Verifique as Configurações de Rede:</strong></p>
                    <p>Garanta que as configurações de rede, como endereço IP e gateway, estejam configuradas corretamente.</p>
                </div>
                
                <div>
                    <p><strong>Soluções Comuns:</strong></p>
                    <p><strong>Problemas de Configuração do Roteador:</strong></p>
                    <p>Acesse a interface de administração do roteador digitando seu endereço IP em um navegador web.</p>
                    <p>Verifique as configurações de segurança, como senhas e filtros de MAC.</p>
                </div>
                
                <div>
                    <p><strong>Atualização de Drivers e Firmware:</strong></p>
                    <p>Certifique-se de que os drivers de rede nos dispositivos estão atualizados.</p>
                    <p>Verifique se há atualizações de firmware disponíveis para o roteador e modem.</p>
                </div>
                
                <div>
                    <p><strong>Problemas de Provedor de Serviços:</strong></p>
                    <p>Entre em contato com o provedor de serviços para verificar se há interrupções na área.</p>
                    <p>Solicite assistência técnica e forneça detalhes sobre os sintomas.</p>
                </div>
                
                <div>
                    <p><strong>Firewall e Antivírus:</strong></p>
                    <p>Desative temporariamente o firewall e o antivírus para ver se eles estão bloqueando a conexão.</p>
                    <p>Certifique-se de que as configurações de segurança não estão bloqueando o tráfego de rede.</p>
                </div>
                
                <div>
                    <p><strong>Ferramentas de Diagnóstico:</strong></p>
                    <p><strong>Ping e Traceroute:</strong></p>
                    <p>Utilize comandos como "ping" e "traceroute" para diagnosticar a conectividade e identificar onde o problema pode estar ocorrendo.</p>
                    <p><strong>Utilize Ferramentas Online:</strong></p>
                    <p>Existem várias ferramentas online que podem ajudar a diagnosticar problemas de conectividade, como testes de velocidade de internet e verificações de ping.</p>
                </div>
                
                <div>
                    <p><strong>Conclusão:</strong></p>
                    <p>Resolver problemas de conectividade na rede pode ser desafiador, mas seguindo uma abordagem sistemática, é possível identificar e corrigir a maioria dos problemas...</p>
                    <p>Caso as soluções sugeridas não resolvam o problema, é recomendável buscar a ajuda de profissionais de TI ou do provedor de serviços de internet para uma assistência mais especializada.</p>
                </div></div>
                    } />

                    <Botao textoBotao="Latência alta frequente" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Queda constante da internet" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Rede sobrecarregada" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Senha de rede esquecida" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    </div>

                </div>




                <div className='problemasHome'>
                    <h3>Problemas de software</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Sistema Operacional Incompatível" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Problemas com Atualização de Software" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Computador com desempenho lento" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Como ter uma boa gestão de Armazenamento ?" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Problemas ao tentar abrir um programa" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>



                <div className='problemasHome'>   
                    <h3>Problemas de segurança</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Como criar senhas fortes ?" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Problemas de Firewall" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Autenticação de dois fatores e outras formas de verificação" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Invandiram minha conta, e agora ?" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    <Botao textoBotao="Segurança de rede" conteudo={
                    <div className='textoproblema'>Conteúdo do Botão 1</div>
                    } />

                    </div>
                </div>
                
    
                <div className='problemasHome'>   
                    <h3>Virus e Malware</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Como saber se meu computador está com vírus ?" conteudo={
                    <div className='textoproblema'><p><strong>Como Saber se Meu Computador Está com Vírus</strong></p>

                    <p>Identificar sinais de infecção por vírus é essencial para agir rapidamente e proteger seu computador. Fique atento a esses indicadores que podem sugerir a presença de malware:</p>
                    
                    <p>1. <strong>Desempenho Lento:</strong> Seu computador está mais lento do que o normal? Vírus podem consumir recursos do sistema, impactando o desempenho.</p><br/>
                    
                    <p>2. <strong>Pop-ups Inesperados:</strong> Anúncios pop-up frequentes e não solicitados podem indicar a presença de adware ou outros tipos de malware.</p><br/>
                    
                    <p>3. <strong>Alterações nas Configurações do Navegador:</strong> Seu navegador tem comportamento estranho? Redirecionamentos para páginas desconhecidas podem ser um sinal de infecção.</p><br/>
                    
                    <p>4. <strong>Programas Inesperados:</strong> Se novos programas aparecerem no seu computador sem sua autorização, pode ser um sinal de instalação de malware.</p><br/>
                    
                    <p>5. <strong>Problemas com o Sistema Operacional:</strong> Falhas frequentes, congelamentos ou erros inesperados podem ser causados por vírus.</p><br/>
                    
                    <p>6. <strong>Atividade de Disco Constante:</strong> Seu disco rígido está constantemente ativo, mesmo quando não está usando o computador? Isso pode indicar atividade maliciosa.</p><br/>
                    
                    <p>7. <strong>Alterações nas Configurações de Segurança:</strong> Verifique se as configurações de antivírus e firewall foram alteradas sem a sua permissão.</p><br/>
                    
                    <p>8. <strong>E-mails ou Mensagens Suspeitas:</strong> Seus contatos recebem mensagens estranhas de você? Sua conta de e-mail pode ter sido comprometida.</p><br/>
                    
                    <p>9. <strong>Uso Elevado da Conexão de Internet:</strong> Se a sua conexão de internet está sendo usada intensivamente quando você não está fazendo downloads grandes, pode ser um sinal de atividade maliciosa.</p><br/>
                    
                    <p>10. <strong>Contas Online Comprometidas:</strong> Se suas contas online apresentarem atividade suspeita, como acessos não autorizados, sua segurança pode estar comprometida.</p><br/>
                    
                    <p>Se você observar um ou mais desses sinais, é recomendável realizar uma verificação completa do sistema com um antivírus confiável e buscar assistência profissional se necessário.</p><br/>
                    </div>
                    } />

                    <Botao textoBotao="Como se proteger contra virus e malwares" conteudo={
                    <div className='textoproblema'><p><strong>Como se Proteger contra Vírus e Ameaças</strong></p>

                    <p>Manter a segurança do seu computador é crucial para proteger seus dados e privacidade. Adote práticas preventivas para evitar vírus e ameaças cibernéticas. Siga estas dicas para fortalecer a segurança do seu sistema:</p>
                    
                    <p>1. <strong>Utilize um Antivírus Atualizado:</strong> Instale um antivírus confiável e mantenha-o sempre atualizado. Realize verificações regulares para identificar e eliminar possíveis ameaças.</p><br/>
                    
                    <p>2. <strong>Mantenha o Sistema Operacional Atualizado:</strong> Instale as atualizações de segurança fornecidas pelo sistema operacional. Isso corrige vulnerabilidades e fortalece a resistência contra ameaças conhecidas.</p><br/>
                    
                    <p>3. <strong>Navegue com Cautela:</strong> Evite clicar em links suspeitos ou baixar arquivos de fontes não confiáveis. Esteja alerta a emails e mensagens de remetentes desconhecidos.</p><br/>
                    
                    <p>4. <strong>Utilize uma Rede Segura:</strong> Proteja sua rede Wi-Fi com uma senha forte para evitar acessos não autorizados. Isso impede que hackers explorem vulnerabilidades em sua rede.</p><br/>
                    
                    <p>5. <strong>Realize Backup Regularmente:</strong> Faça cópias de segurança dos seus dados importantes. Em caso de infecção, você terá uma cópia segura dos seus arquivos.</p><br/>
                    
                    <p>6. <strong>Evite Redes Wi-Fi Públicas:</strong> Redes Wi-Fi públicas podem ser inseguras. Evite realizar transações financeiras ou acessar informações sensíveis enquanto estiver conectado a essas redes.</p><br/>
                    
                    <p>7. <strong>Utilize Senhas Fortes:</strong> Configure senhas robustas para suas contas online e para o acesso ao seu computador. Isso dificulta o acesso não autorizado.</p><br/>
                    
                    <p>8. <strong>Seja Cauteloso com Dispositivos Externos:</strong> Escaneie dispositivos USB e outros dispositivos externos em busca de malware antes de conectá-los ao seu computador.</p><br/>
                    
                    <p>9. <strong>Atualize Aplicativos Regularmente:</strong> Além do sistema operacional, mantenha todos os programas e aplicativos atualizados para corrigir possíveis vulnerabilidades de segurança.</p><br/>
                    
                    <p>10. <strong>Eduque-se sobre Ameaças Cibernéticas:</strong> Esteja ciente das últimas tendências em cibersegurança e saiba reconhecer práticas suspeitas online.</p><br/>
                    
                    <p>Ao incorporar essas práticas de segurança em sua rotina, você contribui significativamente para proteger seu computador contra vírus e ameaças cibernéticas.</p><br/>
                    </div>
                    } />

                    <Botao textoBotao="Como livrar meu computador de vírus e ameaças" conteudo={
                    <div className='textoproblema'><p><strong>Como Livrar Meu Computador de Vírus e Ameaças</strong></p>

                    <p>Se o seu computador já está infectado, é crucial agir rapidamente para remover vírus e ameaças. Siga estas etapas para livrar seu sistema de infecções:</p>
                    
                    <p>1. <strong>Use um Programa Antivírus Atualizado:</strong> Execute uma verificação completa do sistema com um programa antivírus confiável. Certifique-se de que o software está atualizado para garantir detecção eficaz.</p><br/>
                    
                    <p>2. <strong>Realize Varreduras Adicionais:</strong> Além do antivírus, utilize programas antimalware adicionais para procurar e remover ameaças que podem passar despercebidas.</p><br/>
                    
                    <p>3. <strong>Remova Aplicativos Suspeitos:</strong> Desinstale programas desconhecidos ou suspeitos por meio do Painel de Controle. Isso elimina possíveis fontes de infecção.</p><br/>
                    
                    <p>4. <strong>Restaure o Sistema:</strong> Considere restaurar o sistema para um ponto anterior ao início da infecção. Isso pode reverter as configurações do sistema para um estado mais seguro.</p><br/>
                    
                    <p>5. <strong>Atualize Senhas:</strong> Mude as senhas de todas as suas contas, pois senhas comprometidas podem ter sido capturadas pelos vírus. Certifique-se de usar senhas fortes e exclusivas.</p><br/>
                    
                    <p>6. <strong>Isolamento de Dispositivos:</strong> Desconecte o computador da rede e de dispositivos externos para evitar a propagação de malware. Isso é crucial para proteger outros dispositivos conectados.</p><br/>
                    
                    <p>7. <strong>Busque Ajuda Profissional:</strong> Se a infecção persistir, considere buscar a assistência de um profissional de segurança cibernética. Algumas ameaças podem exigir conhecimentos avançados para remoção.</p><br/>
                    
                    <p>8. <strong>Previna Futuras Infecções:</strong> Após remover as ameaças, implemente medidas preventivas, como manter programas atualizados, fazer backup regular e evitar comportamentos online arriscados.</p><br/>
                    
                    <p>Ao seguir essas etapas, você aumenta as chances de limpar seu computador de infecções e protege contra futuros ataques.</p><br/>
                    </div>
                    } />

                    <Botao textoBotao="Como virus podem afetar meu computador ?" conteudo={
                    <div className='textoproblema'><p><strong>Como Vírus Podem Afetar Meu Computador?</strong></p>

                    <p>Os vírus podem ter impactos significativos em seu computador, comprometendo a segurança e o desempenho. Entenda as maneiras como os vírus podem afetar seu sistema:</p>
                    
                    <p>1. <strong>Roubo de Dados:</strong> Alguns vírus são projetados para coletar e roubar informações pessoais, como senhas e detalhes financeiros, expondo você a riscos de roubo de identidade.</p><br/>
                    
                    <p>2. <strong>Corrupção de Arquivos:</strong> Vírus podem corromper ou danificar seus arquivos, tornando-os inacessíveis. Isso pode afetar documentos importantes, fotos e outros dados essenciais.</p><br/>
                    
                    <p>3. <strong>Desempenho Lento:</strong> Vírus consomem recursos do sistema, causando lentidão no computador. Isso pode resultar em uma experiência de uso frustrante e menos eficiente.</p><br/>
                    
                    <p>4. <strong>Exibição de Publicidade Indesejada:</strong> Certos tipos de malware exibem anúncios intrusivos, prejudicando a experiência de navegação e podendo redirecionar para sites não seguros.</p><br/>
                    
                    <p>5. <strong>Ataques de Ransomware:</strong> Vírus ransomware criptografam seus arquivos e exigem pagamento para a sua liberação. Esses ataques podem resultar na perda irreversível de dados valiosos.</p><br/>
                    
                    <p>6. <strong>Controle Remoto:</strong> Alguns vírus permitem que hackers controlem seu computador remotamente, podendo realizar ações maliciosas sem o seu conhecimento.</p><br/>
                    
                    <p>7. <strong>Propagação para Outros Dispositivos:</strong> Vírus podem se espalhar para outros dispositivos conectados à mesma rede, ampliando o alcance de danos.</p><br/>
                    
                    <p>8. <strong>Comprometimento da Segurança Geral:</strong> Vírus podem abrir brechas de segurança, facilitando ataques adicionais e colocando em risco a integridade do sistema operacional.</p><br/>
                    
                    <p>Para proteger seu computador, é essencial adotar práticas de segurança, como manter software atualizado, utilizar antivírus confiáveis e evitar comportamentos online arriscados.</p><br/>
                    </div>
                    } />

                    <Botao textoBotao="O que pode causar virus no meu computador ?" conteudo={
                    <div className='textoproblema'><p><strong>O que Pode Causar Vírus no Meu Computador?</strong></p>

                    <p>A segurança do seu computador é crucial para proteger seus dados e privacidade. Entenda as possíveis causas de infecções por vírus e como evitá-las:</p>
                    
                    <p>1. <strong>Downloads de Fontes Não Confiáveis:</strong> Evite baixar software de fontes não confiáveis. Utilize apenas sites oficiais e evite cliques em links suspeitos.</p><br/>
                    
                    <p>2. <strong>Emails Phishing:</strong> Esteja atento a emails suspeitos. Não abra anexos ou clique em links de remetentes desconhecidos, pois podem conter malware.</p><br/>
                    
                    <p>3. <strong>Falhas de Software Desatualizado:</strong> Mantenha seu sistema operacional e programas atualizados para corrigir vulnerabilidades que os hackers podem explorar.</p><br/>
                    
                    <p>4. <strong>Uso de Dispositivos USB Desconhecidos:</strong> Evite conectar dispositivos USB desconhecidos, pois podem conter malware. Escaneie-os antes de usar.</p><br/>
                    
                    <p>5. <strong>Navegação em Sites Não Seguros:</strong> Certifique-se de que os sites que visita são seguros, especialmente ao fornecer informações pessoais.</p><br/>
                    
                    <p>6. <strong>Senha Fraca ou Não Atualizada:</strong> Use senhas fortes e atualize-as regularmente para proteger suas contas contra acessos não autorizados.</p><br/>
                    
                    <p>7. <strong>Ferramentas Antivírus Desatualizadas:</strong> Mantenha seu software antivírus atualizado para garantir a detecção de ameaças mais recentes.</p><br/>
                    
                    <p>A prevenção é a melhor forma de evitar infecções por vírus. Ao seguir estas dicas, você contribui para a segurança e integridade do seu sistema.</p><br/>
                    </div>
                    } />

                    </div>
                </div>



                <div className='problemasHome'>   
                    <h3>Problemas de Hardware</h3>

                    <div className='botoes'>
                        
                    <Botao textoBotao="Computador não liga" conteudo={
                    <div className='textoproblema'><p><strong>Resolvendo Problemas: Computador que não Liga</strong></p>

                    <p>Se o seu computador não está ligando, siga estas etapas para diagnosticar e resolver o problema:</p>
                
                    <p>1. <strong>Verificação de Alimentação:</strong> Certifique-se de que o cabo de alimentação está corretamente conectado e que a tomada está funcionando. Considere testar com outra fonte de energia.</p><br/>
                
                    <p>2. <strong>Botão de Liga/Desliga:</strong> Verifique se o botão de liga/desliga está funcionando corretamente. Às vezes, um mau contato pode impedir a inicialização.</p><br/>
                
                    <p>3. <strong>Hardware Conectado Corretamente:</strong> Certifique-se de que todos os componentes internos, como memória RAM e placas, estão firmemente conectados aos slots correspondentes.</p><br/>
                
                    <p>4. <strong>Teste com Componentes Mínimos:</strong> Se possível, remova componentes extras e teste apenas com o mínimo necessário para inicialização, como processador, placa-mãe, memória e fonte de alimentação.</p><br/>
                
                    <p>Se mesmo após essas etapas o computador ainda não ligar, entre em contato com nossa equipe de suporte técnico. Estamos aqui para ajudar a identificar e resolver esse problema de inicialização.</p><br/>
                </div>
                    } />

                    <Botao textoBotao="Dispositivos USB não conectam" conteudo={
                    <div className='textoproblema'><p><strong>Resolvendo Problemas: Dispositivos USB não Conectam</strong></p>

                    <p>Se os seus dispositivos USB não estão conectando corretamente, siga estas etapas para solucionar o problema:</p>
                
                    <p>1. <strong>Verifique as Portas USB:</strong> Certifique-se de que as portas USB não estão danificadas e estão fornecendo energia suficiente. Tente conectar o dispositivo a diferentes portas.<br/></p>
                
                    <p>2. <strong>Teste com Outro Dispositivo:</strong> Verifique se o problema está no dispositivo ou na porta USB testando com outro dispositivo. Isso ajudará a isolar a origem do problema.<br/></p>
                
                    <p>3. <strong>Atualize Drivers:</strong> Certifique-se de que os drivers USB estejam atualizados. O Gerenciador de Dispositivos pode ser útil para essa verificação e atualização.<br/></p>
                
                    <p>4. <strong>Desinstale e Reinstale Drivers:</strong> Se possível, desinstale os drivers USB no Gerenciador de Dispositivos e reinicie o computador para que eles sejam reinstalados automaticamente.<br/></p>
                
                    <p>Se o problema persistir, entre em contato com nossa equipe de suporte técnico. Estamos prontos para ajudar a restabelecer a conectividade USB em seu sistema.<br/></p>
                </div>
                    } />

                    <Botao textoBotao="Como saber a saúde do meu HD/SSD ?" conteudo={
                    <div className='textoproblema'><p><strong>Verificando a Saúde do HD ou SSD</strong></p>

                    <p>Manter o monitoramento regular da saúde do seu HD ou SSD é essencial para prevenir perda de dados. Siga estas etapas para avaliar o estado do seu armazenamento:</p>
                
                    <p>1. <strong>Utilize Ferramentas de Diagnóstico:</strong> Diversas ferramentas gratuitas estão disponíveis online. Escolha uma confiável para verificar a integridade e desempenho do seu dispositivo de armazenamento.<br/></p>
                
                    <p>2. <strong>Verificação de Bad Blocks:</strong> Execute uma verificação de bad blocks para identificar setores defeituosos no HD. SSDs geralmente possuem mecanismos internos que fazem essa verificação automaticamente.<br/></p>
                
                    <p>3. <strong>Análise de Temperatura:</strong> Monitore a temperatura do HD ou SSD, pois temperaturas excessivamente altas podem indicar problemas. Mantenha o dispositivo refrigerado para garantir uma vida útil prolongada.<br/></p>
                
                    <p>4. <strong>Cópias de Segurança Regulares:</strong> Realize cópias de segurança periódicas dos seus dados importantes para evitar perda irreparável, independentemente da saúde atual do seu armazenamento.<br/></p>
                
                    <p>Se encontrar algum problema durante essas verificações ou se precisar de assistência para interpretar os resultados, entre em contato com nossa equipe de suporte técnico. Estamos aqui para garantir a segurança dos seus dados.<br/></p>
                
                </div>
                    } />

                    <Botao textoBotao="O computador está aquecendo muito" conteudo={
                    <div className='textoproblema'><p><strong>Resolvendo Problemas: Computador Aquecendo Muito</strong></p>

                    <p>Se o seu computador está apresentando temperaturas elevadas, siga estas etapas para reduzir o superaquecimento:</p>
                
                    <p>1. <strong>Limpeza de Ventoinhas e Dissipadores:</strong> Remova poeira e sujeira acumuladas nos ventiladores e dissipadores de calor para melhorar a dissipação térmica.<br/></p>
                
                    <p>2. <strong>Verificação da Pasta Térmica:</strong> Certifique-se de que a pasta térmica entre o processador e o dissipador de calor esteja aplicada corretamente. Substitua se necessário.<br/></p>
                
                    <p>3. <strong>Posicionamento e Ventilação:</strong> Coloque o computador em um local bem ventilado, garantindo espaço ao redor para a circulação de ar. Considere a adição de ventoinhas extras se possível.<br/></p>
                
                    <p>4. <strong>Monitoramento de Temperatura:</strong> Utilize programas de monitoramento de temperatura para acompanhar as leituras e identificar componentes específicos que possam estar superaquecendo.<br/></p>
                
                    <p>Se o problema persistir ou se você não se sentir confortável realizando essas etapas, entre em contato com nossa equipe de suporte técnico. Estamos aqui para ajudar a evitar danos causados pelo superaquecimento em seu computador.<br/></p>
                
                </div>
                    } />

                    <Botao textoBotao="O computador está fazendo muito barulho" conteudo={
                    <div className='textoproblema'><p><strong>Resolvendo Problemas: Computador Fazendo Muito Barulho</strong></p>

                    <p>Se o seu computador está gerando um ruído excessivo, siga estas etapas para identificar e resolver o problema:</p>
                
                    <p>1. <strong>Limpeza Interna:</strong> Verifique se há acúmulo de poeira nos ventiladores e componentes internos. Faça uma limpeza cuidadosa para garantir o fluxo de ar adequado.<br/></p>
                
                    <p>2. <strong>Verificação dos Ventiladores:</strong> Certifique-se de que todos os ventiladores estejam funcionando corretamente. Substitua aqueles que apresentarem falhas ou ruídos anormais.<br/></p>
                
                    <p>3. <strong>Posicionamento Adequado:</strong> Confirme que o computador está posicionado em uma superfície plana e nivelada para evitar vibrações e ruídos indesejados.<br/></p>
                
                    <p>4. <strong>Verificação do Disco Rígido:</strong> Ruídos provenientes do disco rígido podem indicar problemas. Execute verificações de integridade e considere a substituição se necessário.<br/></p>
                
                    <p>Se o barulho persistir e você não conseguir identificar a causa, entre em contato com nossa equipe de suporte técnico. Estamos prontos para ajudar a resolver esse problema sonoro em seu computador.<br/></p></div>
                    } />

                    </div>
                </div>
                

                <div className='problemasHome'>   
                    <h3>Problemas com Áudio e Video</h3>

                    
                    <div className='botoes'>
                        
                    <Botao textoBotao="O computador não reproduz video ao ligar" conteudo={
                    <div className='textoproblema'><p><strong>Resolvendo Problemas: Computador não Reproduz Vídeo ao Ligar</strong></p>

                    <p>Se o seu computador não está reproduzindo vídeo ao ser ligado, siga estas etapas para solucionar o problema:</p>
                
                    <p>1. <strong>Verifique Conexões do Monitor:</strong> Assegure-se de que o cabo do monitor está corretamente conectado à placa de vídeo ou à saída de vídeo da placa-mãe.</p>
                
                    <p>2. <strong>Teste com Outro Monitor:</strong> Se possível, conecte o computador a outro monitor para descartar problemas com o monitor atual.</p>
                
                    <p>3. <strong>Verificação de Alimentação:</strong> Certifique-se de que o computador está recebendo energia adequada e que todos os componentes estão corretamente conectados.</p>
                
                    <p>4. <strong>Atualização de Drivers Gráficos:</strong> Acesse o Gerenciador de Dispositivos, identifique a placa gráfica e atualize os drivers para a versão mais recente.</p>
                
                    <p>Se mesmo assim o problema persistir, entre em contato com nossa equipe de suporte técnico. Estamos aqui para ajudar a restaurar a reprodução de vídeo em seu computador.<br/></p></div>
                    } />

                    <Botao textoBotao="Computador não reproduz áudio" conteudo={
                    <div className='textoproblema'><p><strong>Resolvendo Problemas: Computador não Reproduz Áudio</strong></p>

                    <p>Se o seu computador está enfrentando problemas para reproduzir áudio, siga estas etapas para solucionar o problema:</p>
                
                    <p>1. <strong>Verifique Conexões e Cabos:</strong> Certifique-se de que todos os cabos de áudio estejam corretamente conectados às portas correspondentes.<br/></p>
                
                    <p>2. <strong>Volume e Configurações de Áudio:</strong> Verifique se o volume não está no nível mínimo e confira as configurações de áudio no painel de controle.<br/></p>
                
                    <p>3. <strong>Atualize os Drivers de Áudio:</strong> Acesse o Gerenciador de Dispositivos, identifique a placa de som e atualize os drivers para a versão mais recente.<br/></p>
                
                    <p>4. <strong>Verificação de Dispositivos de Saída:</strong> Certifique-se de que o dispositivo de saída de áudio correto está selecionado nas configurações do sistema.<br/></p>
                
                    <p>Se o problema persistir, entre em contato com nossa equipe de suporte técnico. Estamos aqui para ajudar a restaurar a funcionalidade de áudio em seu computador.<br/></p></div>
                    } />

                    <Botao textoBotao="Como atualizar meus drivers de video ?" conteudo={
                    <div className='textoproblema'> <p><strong>Atualizando Drivers de Áudio para Melhor Desempenho</strong></p>

                    <p>Manter seus drivers de áudio atualizados é crucial para garantir uma experiência sonora sem falhas. Siga estas etapas para realizar a atualização:</p>
                
                    <p>1. <strong>Identifique o Modelo da Placa de Som:</strong> Acesse o Gerenciador de Dispositivos e encontre o modelo da sua placa de som.<br/></p>
                
                    <p>2. <strong>Visite o Site do Fabricante:</strong> Navegue até o site do fabricante da placa de som e procure pela seção de suporte ou downloads.<br/></p>
                
                    <p>3. <strong>Baixe e Instale os Drivers Mais Recentes:</strong> Faça o download dos drivers mais recentes compatíveis com o seu sistema operacional e siga as instruções de instalação.<br/></p>
                
                    <p>Em caso de dúvidas ou dificuldades durante o processo, nossa equipe de suporte técnico está à disposição para ajudar. Queremos assegurar que você aproveite ao máximo a qualidade sonora do seu dispositivo.<br/></p></div>
                    } />

                    <Botao textoBotao="Como atualizar meus drivers de áudio ?" conteudo={
                    <div className='textoproblema'>
                    <p><strong>Como Atualizar Meus Drivers de Áudio?</strong></p>
                
                    <p>Drivers de áudio desatualizados podem causar problemas de reprodução. Siga estes passos para garantir um som de alta qualidade em seu dispositivo:</p>
                    <p>1. <strong>Identifique o Modelo da Placa de Som:</strong> Acesse o Gerenciador de Dispositivos e encontre o modelo da sua placa de som.</p>
                    <p>2. <strong>Visite o Site do Fabricante:</strong> Acesse o site do fabricante da placa de som e procure pela seção de suporte ou downloads.</p>
                    <p>3. <strong>Baixe e Instale os Drivers Mais Recentes:</strong> Faça o download dos drivers mais recentes compatíveis com o seu sistema operacional e siga as instruções de instalação.</p>
                    <p>Não hesite em contatar nossa equipe de suporte técnico caso encontre dificuldades durante esse processo. Estamos aqui para garantir que você desfrute de uma experiência sonora sem interrupções.</p></div>
                    } />

                    <Botao textoBotao="Riscos ou Artefatos na tela" conteudo={
                    <div className='textoproblema'><p><strong>O Que São Riscos ou Artefatos na Tela?</strong></p>

                    <p>Refere-se a imperfeições visuais, como linhas, manchas ou distorções, durante a operação normal. Pode ser causado por problemas de hardware ou software.</p><br/>

                    <p><strong>Causas Comuns:</strong></p>
                    <p>
                        1. <strong>Hardware Defeituoso:</strong> Danos físicos, mau funcionamento de componentes ou conectores soltos.
                    </p><p>
                        2. <strong>Problemas de Software:</strong> Drivers desatualizados, conflitos ou instabilidade do sistema operacional.</p>
                    <p>
                        3. <strong>Problemas de Conectividade:</strong> Cabos soltos, conexões instáveis ou incompatibilidades entre dispositivos.
                    </p><br/>

                    <p><strong>Identificação:</strong></p>
                    <p>
                        1. <strong>Examine Fisicamente o Dispositivo:</strong> Verifique danos físicos evidentes na tela.
                    </p>
                    <p>
                        2. <strong>Teste com Diferentes Conteúdos:</strong> Observe se os artefatos aparecem com tipos específicos de conteúdo.
                    </p>
                    <p>
                        3. <strong>Atualize Drivers e Software:</strong> Mantenha tudo atualizado para garantir compatibilidade e estabilidade.
                    </p><br/>

                    <p><strong>Soluções Possíveis:</strong></p>
                    <p>
                        1. <strong>Verificação de Hardware:</strong> Procure assistência técnica para danos físicos.
                    </p>
                    <p>
                        2. <strong>Atualização de Drivers:</strong> Mantenha os drivers relacionados à exibição atualizados.
                    </p>
                    <p>
                        3. <strong>Teste de Conectividade:</strong> Verifique cabos e conexões, trocando por melhores, se necessário.
                    </p><br/>
                    
                    <p><strong>Contate nosso Suporte Técnico:</strong></p>
                    <p>
                        Se as soluções mencionadas não resolverem, entre em contato conosco. Estamos aqui para garantir uma experiência tecnológica sem complicações.
                    </p>
                
                </div>
                    } />

                    </div>
                </div>


            </>
        )
    }
}