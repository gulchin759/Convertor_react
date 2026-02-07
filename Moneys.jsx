import React from 'react'

function Moneys({onSelect}) {


    return (
        <div>
            <select id="currencySelect" onChange={(e) => onSelect(e.target.value)}>
                <option value="RUB">RUB</option>
                <option value="AED">AED</option>
                <option value="AFN">AFN</option>
                <option value="ALL">ALL</option>
                <option value="AMD">AMD</option>
                <option value="ANG">ANG</option>
                <option value="AOA">AOA</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="AWG">AWG</option>
                <option value="AZN">AZN</option>
                <option value="BAM">BAM</option>
                <option value="BBD">BBD</option>
                <option value="BDT">BDT</option>
                <option value="BGN">BGN</option>
                <option value="BHD">BHD</option>
                <option value="BIF">BIF</option>
                <option value="BMD">BMD</option>
                <option value="BND">BND</option>
                <option value="BOB">BOB</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="BTN">BTN</option>
                <option value="BWP">BWP</option>
                <option value="BYN">BYN</option>
                <option value="BZD">BZD</option>
                <option value="CAD">CAD</option>
                <option value="CDF">CDF</option>
                <option value="CHF">CHF</option>
                <option value="CZK">CZK</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="USD">USD</option>

            </select>

            
            
        </div>
    )
}

export default Moneys