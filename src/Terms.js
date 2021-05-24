import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Markdown from './modules/components/Markdown';
import Typography from './modules/components/Typography';
import AppAppBar from './modules/views/AppAppBar';
import terms from './modules/views/terms.md';
import AppFooter from './modules/views/AppFooter';


function Terms() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms AndConditions
          </Typography>
          <p><strong>NOTICE.</strong><br />
                Please read these terms and conditions carefully. By accessing this site and any pages thereof, you agree to be bound by the terms and conditions below. If you do not agree to the terms and conditions below, do not access this site, or any pages thereof.</p>
            <p><strong>COPYRIGHT.</strong><br />
                Copyright in the pages and in the screens displaying the pages, and in the information and material therein and in their arrangement, is owned by SILICON BEACH TESTING LABS LLC unless otherwise indicated.</p>
            <p><strong>TRADEMARKS.</strong><br />
                SILICON BEACH TESTING LABS LLC and it's affiliates also claim rights in certain other trademarks and service marks contained in these web pages.
                USE OF INFORMATION AND MATERIALS
                The information and materials contained in these pages, and the terms, conditions, and descriptions that appear, are subject to change. Unauthorized use of SILICON BEACH TESTING LABS LLC's web-sites and systems including but not limited to unauthorized entry into SILICON BEACH TESTING LABS LLC's systems, misuse of passwords, or misuse of any information posted on a site is strictly prohibited.</p>
            <p><strong>LINKS</strong><br />
                This site may contain links to web sites controlled or offered by third parties (non-affiliates of SILICON BEACH TESTING LABS LLC). SILICON BEACH TESTING LABS LLC hereby disclaims liability for, any information, materials, products or services posted or offered at any of the third party sites linked to this web site. By creating a link to a third party web site, SILICON BEACH TESTING LABS LLC does not endorse or recommend any products or services offered or information contained at that web site, nor is SILICON BEACH TESTING LABS LLC liable for any failure of products or services offered or advertised at those sites. Such third party may have a privacy policy different from that of SILICON BEACH TESTING LABS LLC and the third party website may provide less security than the SILICON BEACH TESTING LABS LLC.</p>
            <p><strong>NO WARRANTY</strong><br />
                The information and materials contained in this site, including text, graphics, links or other items are provided "as is", "as available". SILICON BEACH TESTING LABS LLC does not warrant the accuracy, adequacy or completeness of this information and materials and expressly disclaims liability for errors or omissions in this information and materials. No warranty of any kind, implied, expressed or statutory including but not limited to the warranties of non-infringement of third party rights, title, merchantability, fitness for a particular purpose and freedom from computer virus, is given in conjunction with the information and materials.</p>
            <p><strong>LIMITATION OF LIABILITY.</strong><br />
                In no event will SILICON BEACH TESTING LABS LLC be liable for any damages, including without limitation direct or indirect, special, incidental, or consequential damages, losses or expenses arising in connection with this site or any linked site or use thereof or inability to use by any party, or in connection with any failure of performance, error, omission, interruption, defect, delay in operation or transmission, computer virus or line or system failure, even if SILICON BEACH TESTING LABS LLC, or representatives thereof, are advised of the possibility of such damage, loss or expense.</p>
            <p><strong>SUBMISSIONS.</strong><br />
                All information submitted to SILICON BEACH TESTING LABS LLC via this site shall be deemed and remain the property of SILICON BEACH TESTING LABS LLC which shall be free to use, for any purpose, any idea, concepts, know-how or techniques contained in information which a visitor to this site provides SILICON BEACH TESTING LABS LLC, through this site. SILICON BEACH TESTING LABS LLC shall not be subject to any obligations of confidentiality regarding submitted information except as agreed by the SILICON BEACH TESTING LABS LLC having the direct customer relationship or as otherwise specifically agreed or required by law.</p>
            <p><strong>AVAILABILITY</strong><br />
                This site is not intended for distribution to, or use by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to local law or regulation.</p>
            <p><strong>ADDITIONAL TERMS</strong><br />
                Silicon Beach Testing labs llc is currently in the process of applying for the relevant licenses in order to provide testing services for Cannabis and Hemp.
                We cannot provide any testing services until such time we are licensed by the relevant regulatory authorities.
                We are also in the process of acquiring ISO 17025 Accreditation.</p>
            <p><strong>Any marketing</strong><br />
                Certain sections or pages on this site may contain separate terms and conditions, which are in addition to these terms and conditions. In the event of a conflict, the additional terms and conditions will govern for those sections or pages.</p>
            <p><strong>GOVERNING LAW</strong><br />
                Use of this site shall be governed by Federal and State of California laws.</p>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Terms);
