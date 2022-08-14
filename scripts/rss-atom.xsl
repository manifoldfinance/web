<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:hh="http://www.hannonhill.com/XSL/Functions" xmlns:media="http://search.yahoo.com/mrss/" xmlns:xalan="http://xml.apache.org/xalan">

    <xsl:output cdata-section-elements="atom:content"/>
    <xsl:include href="/formats/Format Date"/>

    <xsl:variable name="indexPageName" select="'index'"/>
    <xsl:variable name="callingPage" select="/system-index-block/calling-page/system-page"/>
    <xsl:variable name="current-date" select="/system-index-block/@current-time"/>
    <xsl:variable name="news-categories" select="//calling-page/system-page/dynamic-metadata[starts-with(name,'category-')]/value"/>
    <xsl:variable name="file_extension">.html?utm_medium=feed</xsl:variable>
    <xsl:variable name="xml_file_extension">.xml</xsl:variable>

    <xsl:template match="system-index-block">
        <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/">
            <channel>
                <xsl:apply-templates select="calling-page/system-page"/>
                <generator>UC Santa Cruz</generator>
                <xsl:apply-templates select="system-page[name != 'index' and not(ancestor::system-data-structure)][dynamic-metadata[starts-with(name,'category-') and value=$news-categories]]">
                    <xsl:sort data-type="number" order="descending" select="system-data-structure/article-date"/>
                    <xsl:sort data-type="number" order="descending" select="start-date"/>
                </xsl:apply-templates>
            </channel>
        </rss>
    </xsl:template>

    <!-- Information about the feed comes from the page metadata -->
    <xsl:template match="system-page[parent::calling-page]">
        <title>
            <xsl:value-of select="title"/>
        </title>
        <description>
            <xsl:value-of select="summary"/>
        </description>
        <link>
            <xsl:apply-templates mode="make-absolute" select="path"/>
        </link>
        <atom:link>
          <xsl:attribute name="rel">self</xsl:attribute>
          <xsl:attribute name="type">application/rss+xml</xsl:attribute>
          <xsl:attribute name="href">
            <xsl:apply-templates mode="make-absolute-xml" select="path"/>
          </xsl:attribute>
        </atom:link>
        <docs>
            <xsl:apply-templates mode="make-absolute" select="path"/>
        </docs>
        <pubDate>
            <xsl:call-template name="format-date">
                <xsl:with-param name="date" select="/system-index-block/@current-time"/>
                <xsl:with-param name="mask">ddd, dd mmm yyyy HH:MM:ss o</xsl:with-param>
            </xsl:call-template>
        </pubDate>  
    </xsl:template>
    
    <!-- Path XSL -->
    <xsl:template match="path" mode="make-absolute">
        <xsl:value-of select="concat($callingPage/dynamic-metadata[name = 'site-url']/value, self::node(), $file_extension)"/>
    </xsl:template>
    
    <!-- Path to feed -->
    <xsl:template match="path" mode="make-absolute-xml">
        <xsl:value-of select="concat($callingPage/dynamic-metadata[name = 'site-url']/value, self::node(), $xml_file_extension)"/>
    </xsl:template>
    
    <!-- XSL for each page returned -->
    <xsl:template match="system-page">
        <xsl:if test="position() &lt;= number($callingPage/dynamic-metadata[name = 'number-displayed']/value)">
            <item>
                <title>
                    <xsl:value-of select="title"/>
                </title>
                <link>
                    <xsl:apply-templates mode="make-absolute" select="path"/>
                </link>                
                <description>
                    <xsl:value-of select="summary"/>
                </description>
                <pubDate>
                    <xsl:call-template name="format-date">
                        <xsl:with-param name="date" select="start-date"/>
                        <xsl:with-param name="mask">ddd, dd mmm yyyy HH:MM:ss o</xsl:with-param>
                    </xsl:call-template>
                </pubDate>
                <guid isPermaLink="true">
                    <xsl:apply-templates mode="make-absolute" select="path"/>
                </guid>
                <author>
                  <xsl:if test="system-data-structure/contact/email !=''"><xsl:value-of select="system-data-structure/contact/email"/></xsl:if>
                  <xsl:if test="system-data-structure/contact/name !=''"><xsl:text> (</xsl:text><xsl:value-of select="system-data-structure/contact/name"/><xsl:text>)</xsl:text></xsl:if>              
                </author>
                <atom:content type="html">
                  <xsl:copy-of select="system-data-structure/article-text/node()" />
                </atom:content>
          
                <!-- If the image has a thumb, add it and thumb. -->
                <xsl:if test="system-data-structure/lead-image/image/link">
                  <media:content medium="image" url="{concat($callingPage/dynamic-metadata[name = 'site-url']/value, system-data-structure/lead-image/image/path)}">
                    <xsl:if test="system-data-structure/lead-image/image-thumb/link">
                      <media:thumbnail url="{concat($callingPage/dynamic-metadata[name = 'site-url']/value, system-data-structure/lead-image/image-thumb/path)}"/>
                    </xsl:if>
                    <xsl:if test="system-data-structure/lead-image/image-caption">
                      <media:description type="html">
                        <xsl:value-of select="system-data-structure/lead-image/image-caption"/>
                      </media:description>
                    </xsl:if>
                  </media:content>
                </xsl:if>              
            </item>
        </xsl:if>
    </xsl:template>
</xsl:stylesheet>