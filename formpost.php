<?php
    //Reseteamos variables a 0.
    $nombre = $email = $subject = $mensaje = $para = $headers = $msjCorreo = NULL;
    if (isset($_POST['submit'])) {
        //Obtenemos valores input formulario
        $nombre = $_POST['name'];
        $email = $_POST['mail'];
        $subject = $_POST['subject'];   
        $mensaje = $_POST['msg'];
        $para = 'info@dataviz.cl'; 
        //Creamos cabecera.
        $headers = 'From' . " " . $email . "\r\n";
        $headers .= "Content-type: text/html; charset=utf-8";
        //Componemos cuerpo correo.
        $msjCorreo = "Nombre: " . $nombre;
        $msjCorreo .= "\r\n";
        $msjCorreo .= "Email: " . $email;
        $msjCorreo .= "\r\n";
        $msjCorreo .= "Asunto: " . $subject;
        $msjCorreo .= "\r\n";
        $msjCorreo .= "Mensaje: " . $mensaje;
        $msjCorreo .= "\r\n";
        if (mail($para, $subject, $msjCorreo, $headers)) {
            echo "<script language='javascript'>
            alert('Mensaje enviado, muchas gracias.');
            window.location.replace('index.html');
            </script>";
        } else {
            echo "<script language='javascript'>
            alert('No se ha podido enviar su mensaje, intente más tarde');
            </script>";
        }
    }
?>
