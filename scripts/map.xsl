<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">

 <xsl:template match="/">
    <html>
        <h2>Sitemap</h2>
          <ul>
            <xsl:for-each select="sm:urlset/sm:url">
                <li>
                    <a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a>
                </li>
            </xsl:for-each>
        </ul>
    </html>
 </xsl:template>
</xsl:stylesheet>