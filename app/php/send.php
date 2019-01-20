<?
if((isset($_POST['name']) && $_POST['name']!="") && (isset($_POST['phone']) && $_POST['phone']!="") && (isset($_POST['email']) && $_POST['email']!="") && (isset($_POST['cafe']) && $_POST['cafe']!="") && (isset($_POST['message']) && $_POST['message']!="")){
        $to = 'info@libra.dating';
        $subject = 'Contact message from libra site';
        $message = '
            <html>
				<head>
				    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
					<title>'.$subject.'</title>
				</head>
                <body yahoo bgcolor="#fff" style="margin: 0; padding: 0; min- background-color: #fff;">
					<table align="center" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 600px; box-shadow: 0px 20px 30px rgba(26, 38, 47, 0.15);">
						<tr>                         
							 <td bgcolor="#1A262F" style="padding: 40px 30px 20px 30px;">
								 <table align="left" border="0" cellpadding="0" style="width: 100%;">
									<tr>
										<td height="70">
												<table width="100%" border="0" cellspacing="0">
												<tr>
													<td>
														<h1 style="text-align: center; font-size: 50px; color: #ffffff; font-family: sans-serif; letter-spacing: 1px; font-weight: bold; padding: 0 0 0 3px;">Libra</h1>
													</td>
												</tr>
											</table>
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td class="content" bgcolor="#ffffff" style="width: 100%; max-width: 600px; padding: 30px 30px 30px 30px; border-bottom: 1px solid #f2eeed;">
								<table width="100%" border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td style="color: #1A262F; font-family: sans-serif; padding: 0 0 15px 0; font-size: 20px; line-height: 28px; font-weight: 200; text-align: center;">
								            <p>Name: '.$_POST['name'].'</p>
								            <p>Phone: '.$_POST['phone'].'</p>    
								            <p>Email: '.$_POST['email'].'</p>         
								            <p>Cafe: '.$_POST['cafe'].'</p>    
								            <p>Message: '.$_POST['message'].'</p>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>                      
                </body>
            </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Libra\r\n";
    mail($to, $subject, $message, $headers);
}
?>










