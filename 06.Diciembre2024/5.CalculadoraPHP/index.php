<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Calculadora PHP</title>
</head>
<body>

    <div class="calculator">
        <h2>Calculadora PHP</h2>
        <form action="" method="POST">
            <input type="number" name="num1" placeholder="Primer numero" required>

            <input type="number" name="num2" placeholder="Segundo numero" required>

            <select name="operation">
                <option value="sum">Sumar</option>

                <option value="res">Restar</option>

                <option value="mul">Multiplicar</option>

                <option value="div">Dividir</option>
            </select>
            <button type="submit" name="calculate">Calcular</button>
        </form>

        <?php
        if($_SERVER['REQUEST_METHOD'] === 'POST'){

            $num1 = $_POST['num1'];
            $num2 = $_POST['num2'];
            $operation = $_POST['operation'];
            $result = "";

            switch($operation){
                case 'sum':
                    $result = $num1 + $num2;
                    break;

                case 'res':
                    $result = $num1 - $num2;
                    break;

                case 'mul':
                    $result = $num1 * $num2;
                    break;

                case 'div':

                    if($num2 != 0){
                        $result = $num1 / $num2;
                    }else{
                        $result = "Error: Division entre cero";
                    }
                    break;
                default:
                $result = "Operacion no valida";
            }

            echo "<div class='result'>Resultado: <strong>$result</strong></div>";
        }
        ?>
    </div>
    
</body>
</html>