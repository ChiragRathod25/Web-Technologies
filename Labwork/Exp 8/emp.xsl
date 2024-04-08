<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
    <body>
        <h2>Employee Information</h2>
        <table border="1">
            <tr bgcolor="#9acd32">
                <th>Employee Number</th>
                <th>Name</th>
                <th>Department</th>
                <th>Telephone</th>
                <th>Email</th>
            </tr>
            <xsl:for-each select="Employee_Info/Employee">
            <tr>
                <td><xsl:value-of select="@Employee_Number"/></td>
                <td><xsl:value-of select="Name"/></td>
                <td><xsl:value-of select="Department"/></td>
                <td><xsl:value-of select="Telephone"/></td>
                <td><xsl:value-of select="Email"/></td>
            </tr>
            </xsl:for-each>
        </table>
    </body>
    </html>
</xsl:template>

</xsl:stylesheet>