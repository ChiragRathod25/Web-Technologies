<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:key name="preg" match="person" use="@id"/>

<xsl:template match="/">
  <html>
  <body>
  <xsl:for-each select="key('preg','050676')">
    <p>
    Id: <xsl:value-of select="@id"/><br />
    Name: <xsl:value-of select="@name"/>
    </p>
  </xsl:for-each>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>