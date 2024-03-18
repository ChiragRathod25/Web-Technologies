<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>Student Info</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>ID</th>
      <th>Name</th>
    </tr>
    <xsl:for-each select="Student/level ">
      <xsl:if test="ID &gt; 2">
        <tr>
          <td><xsl:value-of select="ID"/></td>
          <td><xsl:value-of select="Name"/></td>
        </tr>
      </xsl:if>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet> 