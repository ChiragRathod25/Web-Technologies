<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:variable name="xx">
  <html>
  <body>
  <xsl:call-template name="show_title">
    <xsl:with-param name="title1" />
	<xsl:with-param name="artist" />
  </xsl:call-template>
  </body>
  </html>
</xsl:variable>

<xsl:template name="show_title" match="/">
  <xsl:param name="title" />
  <xsl:param name="artist" />
  <xsl:for-each select="catalog/cd">
    <p>Title: <xsl:value-of select="title" /></p>
	<p>Title: <xsl:value-of select="artist" /></p>
  </xsl:for-each>
</xsl:template>

</xsl:stylesheet> 